import { createApp } from 'vue'
import Cube from '../src/index'
import App from './App.vue'
import router from './router'

import '../src/common/icon/cube-icon.styl'

createApp(App).use(Cube).use(router).mount('#app')
