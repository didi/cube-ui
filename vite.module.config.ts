import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname, basename } from "path";
import pkg from "./package.json";
import klawSync from "klaw-sync";

const entries = klawSync(resolve(__dirname, "./src/modules"), {
  depthLimit: 0,
}).map((node) => node.path);

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(pkg.version),
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  resolve: {
    alias: {
      "./cubeic.woff": resolve(__dirname, "./src/common/icon/cubeic.woff"),
      "./cubeic.ttf": resolve(__dirname, "./src/common/icon/cubeic.ttf"),
    },
  },
  plugins: [
    vue(),
    (() => {
      const cssChunk = new Map();
      const moduleDepsChunk = new Map();
      const entryStyleChunk = new Map();

      return {
        name: "split-css",
        transform(code, id) {
          if (id.endsWith("&lang.stylus")) {
            cssChunk.set(
              `${basename(dirname(id))}/${basename(id.split(".vue?")[0])}`,
              code
            );
            return "";
          }
        },
        renderChunk(code, chunk) {
          moduleDepsChunk.set(chunk.fileName, chunk.moduleIds);
          if (chunk.isEntry) {
            // code = 'import "./css.mjs"\n\n' + code
            entryStyleChunk.set(chunk.fileName, [
              ...chunk.imports,
              ...chunk.moduleIds,
            ]);
            return code
          }
        },
        generateBundle(options, bundle) {
          entryStyleChunk.forEach((value, key) => {
            let deps = getCssDeps(value, moduleDepsChunk);

            this.emitFile({
              type: "asset",
              fileName: `${key.split("/")[0]}/css.mjs`,
              source: deps
                .map((d) => d.split(".vue?")[0].split("components/")[1])
                .map((str) => `import '../${str}.css'`)
                .join("\n"),
            });
          });

          cssChunk.forEach((value, key) => {
            this.emitFile({
              type: "asset",
              fileName: `${key}.css`,
              source: value,
            });
          });
        },
      };
    })(),
  ],
  css: {},
  build: {
    outDir: resolve(__dirname, './lib'),
    emptyOutDir: false,
    lib: {
      entry: entries[Number(process.argv[process.argv.length - 1])],
      formats: ["es"],
    },
    rollupOptions: {
      external: ["vue"],
      output: {
        entryFileNames(chunkInfo) {
          const name = basename(dirname(chunkInfo.facadeModuleId!));
          return `${name}/${name}.mjs`;
        },
        assetFileNames: "cube.base.css",
      },
    },
  },
});

function getCssDeps(entries: string[], allModules: Map<string, string[]>) {
  let results: string[] = [];

  const tree = (deps: string[]) => {
    for (let i = 0; i < deps.length; i++) {
      if (deps[i].endsWith("&lang.stylus")) {
        results.push(deps[i]);
      }

      if (Array.isArray(allModules.get(deps[i]))) {
        tree(allModules.get(deps[i])!);
      }
    }
  };

  tree(entries);

  return results;
}
