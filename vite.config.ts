import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import pkg from './package.json'

export default defineConfig({
  root: 'example',
  define: {
    __VERSION__: JSON.stringify(pkg.version)
  },
  resolve: {
    alias: {
      'example/': `${resolve(__dirname, 'example')}/`,
      '~@/': `${resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue()
  ],
  css: {
    preprocessorOptions: {
      stylus: {
        'resolve url': true
      }
    }
  }
})
