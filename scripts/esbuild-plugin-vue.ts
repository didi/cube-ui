import fs from 'fs'
import path from 'path'
import { Plugin } from 'esbuild'
import hash from 'hash-sum'
import resolveFrom from 'resolve-from'
import { CompilerOptions } from '@vue/compiler-sfc'

const removeQuery = (p: string) => p.replace(/\?.+$/, '')

const genId = (filepath: string) => hash(path.relative(process.cwd(), filepath))

let compiler: typeof import('@vue/compiler-sfc') | undefined

const getCompiler = async (
  cwd: string,
): Promise<Exclude<typeof compiler, undefined>> => {
  if (compiler) return compiler
  const id = resolveFrom(cwd, '@vue/compiler-sfc')
  compiler = await import(id)
  return compiler!
}

export default (): Plugin => {
  return {
    name: 'vue',

    setup(build) {
      const absPath = path.resolve(
        process.cwd(),
        build.initialOptions.absWorkingDir || '',
      )
      const useSourceMap = !!build.initialOptions.sourcemap

      build.initialOptions.define = build.initialOptions.define || {}
      Object.assign(build.initialOptions.define, {
        __VUE_OPTIONS_API__:
          build.initialOptions.define?.__VUE_OPTIONS_API__ ?? JSON.stringify(true),
        __VUE_PROD_DEVTOOLS__:
          build.initialOptions.define?.__VUE_PROD_DEVTOOLS__ ?? JSON.stringify(false),
      })

      const formatPath = (p: string, resolveDir: string) => {
        if (p.startsWith('.')) {
          return path.resolve(resolveDir, p)
        }
        if (p.startsWith(absPath + '/')) {
          return p
        }
        return path.join(absPath, p)
      }

      build.onResolve({ filter: /\.vue$/ }, (args) => {
        return {
          path: args.path,
          namespace: 'vue',
          pluginData: { resolveDir: args.resolveDir },
        }
      })

      build.onResolve({ filter: /\?vue&type=template/ }, (args) => {
        return {
          path: args.path,
          namespace: 'vue',
          pluginData: { resolveDir: args.resolveDir },
        }
      })

      build.onResolve({ filter: /\?vue&type=script/ }, (args) => {
        return {
          path: args.path,
          namespace: 'vue',
          pluginData: { resolveDir: args.resolveDir },
        }
      })

      build.onResolve({ filter: /\?vue&type=style/ }, (args) => {
        return {
          path: args.path,
          namespace: 'vue',
          pluginData: { resolveDir: args.resolveDir },
        }
      })

      build.onLoad({ filter: /\.vue$/, namespace: 'vue' }, async (args) => {
        const compiler = await getCompiler(absPath)
        const { resolveDir } = args.pluginData
        const filepath = formatPath(args.path, resolveDir)
        const content = await fs.promises.readFile(filepath, 'utf8')
        const sfc = compiler.parse(content)

        let contents = ``

        const inlineTemplate =
          !!sfc.descriptor.scriptSetup && !sfc.descriptor.template?.src
        const isTS =
          sfc.descriptor.scriptSetup?.lang === 'ts' ||
          sfc.descriptor.script?.lang === 'ts'
        const hasScoped = sfc.descriptor.styles.some((s) => s.scoped)

        if (sfc.descriptor.script || sfc.descriptor.scriptSetup) {
          const scriptResult = compiler.compileScript(sfc.descriptor, {
            id: genId(args.path),
            inlineTemplate,
            sourceMap: useSourceMap,
          })
          contents += compiler.rewriteDefault(
            scriptResult.content,
            '__sfc_main',
          )
        } else {
          contents += `let __sfc_main = {}`
        }

        if (sfc.descriptor.styles.length > 0) {
          contents += `
          import "${args.path}?vue&type=style"
          `
        }

        if (sfc.descriptor.template && !inlineTemplate) {
          contents += `
          import { render } from "${args.path}?vue&type=template"

          __sfc_main.render = render
          `
        }

        if (hasScoped) {
          contents += `__sfc_main.__scopeId = "data-v-${genId(args.path)}"\n`
        }

        contents += `\nexport default __sfc_main`
        return {
          contents,
          resolveDir,
          loader: isTS ? 'ts' : 'js',
          watchFiles: [filepath],
        }
      })

      build.onLoad(
        { filter: /\?vue&type=template/, namespace: 'vue' },
        async (args) => {
          const compiler = await getCompiler(absPath)
          const { resolveDir } = args.pluginData
          const relativePath = removeQuery(args.path)
          const filepath = formatPath(relativePath, resolveDir)
          const source = await fs.promises.readFile(filepath, 'utf8')
          const { descriptor } = compiler.parse(source)
          if (descriptor.template) {
            const hasScoped = descriptor.styles.some((s) => s.scoped)
            const id = genId(relativePath)
            // if using TS, support TS syntax in template expressions
            const expressionPlugins: CompilerOptions['expressionPlugins'] = []
            const lang = descriptor.scriptSetup?.lang || descriptor.script?.lang
            if (
              lang &&
              /tsx?$/.test(lang) &&
              !expressionPlugins.includes('typescript')
            ) {
              expressionPlugins.push('typescript')
            }

            const compiled = compiler.compileTemplate({
              source: descriptor.template.content,
              filename: filepath,
              id,
              scoped: hasScoped,
              isProd: process.env.NODE_ENV === 'production',
              slotted: descriptor.slotted,
              preprocessLang: descriptor.template.lang,
              compilerOptions: {
                scopeId: hasScoped ? `data-v-${id}` : undefined,
                sourceMap: useSourceMap,
                expressionPlugins,
              },
            })
            return {
              resolveDir,
              contents: compiled.code,
            }
          }
        },
      )

      build.onLoad(
        { filter: /\?vue&type=script/, namespace: 'vue' },
        async (args) => {
          const compiler = await getCompiler(absPath)
          const { resolveDir } = args.pluginData
          const relativePath = removeQuery(args.path)
          const filepath = formatPath(relativePath, resolveDir)
          const source = await fs.promises.readFile(filepath, 'utf8')

          const { descriptor } = compiler.parse(source, { filename: filepath })
          if (descriptor.script) {
            const compiled = compiler.compileScript(descriptor, {
              id: genId(relativePath),
            })
            return {
              resolveDir,
              contents: compiled.content,
              loader: compiled.lang === 'ts' ? 'ts' : 'js',
            }
          }
        },
      )

      build.onLoad(
        { filter: /\?vue&type=style/, namespace: 'vue' },
        async (args) => {
          const compiler = await getCompiler(absPath)
          const { resolveDir } = args.pluginData
          const relativePath = removeQuery(args.path)
          const filepath = formatPath(relativePath, resolveDir)
          const source = await fs.promises.readFile(filepath, 'utf8')
          const { descriptor } = compiler.parse(source)
          if (descriptor.styles.length > 0) {
            const id = genId(relativePath)
            let content = ''
            for (const style of descriptor.styles) {
              const compiled = await compiler.compileStyleAsync({
                source: style.content,
                filename: filepath,
                id,
                scoped: style.scoped,
                preprocessLang: style.lang as any,
                modules: !!style.module,
              })

              if (compiled.errors.length > 0) {
                throw compiled.errors[0]
              }

              content += compiled.code
            }
            return {
              resolveDir,
              contents: content,
              loader: 'css',
            }
          }
        },
      )

      build.onEnd((result) => {
        // @ts-expect-error from Haya
        const collectCssFile: (file: string) => void = build.collectCssFile
        if (result.metafile && collectCssFile) {
          for (const filename in result.metafile.outputs) {
            if (!filename.endsWith('.css')) continue
            const inputs = Object.keys(result.metafile.outputs[filename].inputs)
            if (inputs.some((name) => name.includes('?vue&type=style'))) {
              collectCssFile(
                path.join(
                  build.initialOptions.absWorkingDir || process.cwd(),
                  filename,
                ),
              )
            }
          }
        }
      })
    },
  }
}
