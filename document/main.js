// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import 'babel-polyfill'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import hljs from './common/js/highlight'

import '../src/common/icon/cube-icon.styl'

// 需要使用 vConsole 的同学请打开注释即可
/* eslint-disable no-unused-vars */
// import vConsole from 'vconsole'

import './common/stylus/index.styl'
import 'highlight.js/styles/atelier-dune-light.css'
import './common/js/directive.js'

const app = createApp(App)

app.directive('highlight', (el) => {
  let blocks = el.querySelectorAll('pre code')
  blocks.forEach(block => {
    hljs.highlightBlock(block)
  })
})

app.use(router).mount('#app')
