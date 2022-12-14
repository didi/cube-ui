import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'

export default defineConfig({
  resolve: {
    alias: {
      'example/': `${resolve(__dirname, 'example')}/`,
      '~@/': `${resolve(__dirname, 'src')}/`
    }
  },
  plugins: [
    vue()
  ],
  server: {
    open: '/example/index.html'
  }
})
