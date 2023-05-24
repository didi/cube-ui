import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import Markdown from "vite-plugin-vue-markdown";
import { resolve } from "path";
import pkg from "./package.json";

export default defineConfig({
  root: "document",
  define: {
    __VERSION__: JSON.stringify(pkg.version),
  },
  resolve: {
    alias: {
      "document/": `${resolve(__dirname, "document")}/`,
      "~@/": `${resolve(__dirname, "src")}/`,
    },
  },
  plugins: [
    vue({
      include: [/\.vue$/, /\.md$/], // <--
    }),
    Markdown(),
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        "resolve url": true,
      },
    },
  },
});
