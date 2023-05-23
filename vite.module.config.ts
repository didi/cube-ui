import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve, dirname, basename } from "path";
import pkg from "./package.json";
import klawSync from "klaw-sync";

const entries = klawSync(resolve(__dirname, './src/modules'), {
  depthLimit: 0
}).map(node => node.path)

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      "./cubeic.woff": resolve(__dirname, "./src/common/icon/cubeic.woff"),
      "./cubeic.ttf": resolve(__dirname, "./src/common/icon/cubeic.ttf"),
    },
  },
  plugins: [
    vue(),
  ],
  css: {},
  build: {
    emptyOutDir: false,
    lib: {
      entry: entries,
      formats: ["es"],
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        entryFileNames(chunkInfo) {
          const name = basename(dirname(chunkInfo.facadeModuleId!));
          return `${name}/${name}.mjs`;
        },
        assetFileNames: 'cube.min.css'
      },
    },
  },
});
