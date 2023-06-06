import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  define: {
    __VERSION__: JSON.stringify(pkg.version),
    'process.env.NODE_ENV': JSON.stringify('production')
  },
  plugins: [
    {
      name: "replace-path",
      renderChunk(code) {
        let reg = /\'\.\/(modules)\/(\w+(-\w+)?(-\w+)?(-\w+)?)\'/;
        let match = reg.exec(code);
        while (match !== null) {
          code = code.replace(match[0], `'./${match[2]}/${match[2]}.mjs'`);
          match = reg.exec(code);
        }
        code = 'import "./cube.base.css"\n\n' + code
        return code
      },
    },
  ],
  css: {},
  build: {
    outDir: 'lib',
    emptyOutDir: false,
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: [resolve(__dirname, "src/module.js")],
      formats: ["es"],
      name: "cube",
      // the proper extensions will be added
      fileName: "cube",
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: (id) => {
        if (id === "vue") return true;
        if (id.startsWith("./modules")) return true;
        return false;
      },
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
        entryFileNames: 'cube.esm.mjs'
      },
    },
  },
});
