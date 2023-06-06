import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import pkg from "./package.json";

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
  plugins: [vue()],
  css: {},
  build: {
    outDir: 'lib',
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, "src/index.js")],
      formats: ['umd', 'es'],
      name: "cube",
      // the proper extensions will be added
      fileName: "cube",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        assetFileNames: "cube.min.css",
      },
    },
  },
});
