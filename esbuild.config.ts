import { build } from 'esbuild'
import { cwd } from 'process'
import vue from './scripts/esbuild-plugin-vue'
// todo update build module
build({
  entryPoints: ['./src/modules/popup/index.js'],
  outdir: `${cwd()}/dist/es`,
  bundle: true,
  plugins: [vue()],
  format: 'esm',
  external: [
    'vue',
    '@vue/*',
    '@better-scroll/*',
  ],
})
