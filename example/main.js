// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import Cube from '../src/index'
import App from './App.vue'

import Button from './pages/button.vue'
import Checkbox from './pages/checkbox.vue'
import CheckboxGroup from './pages/checkbox-group.vue'
import Loading from './pages/loading.vue'
import Tip from './pages/tip.vue'
import Popup from './pages/popup.vue'
import Toast from './pages/toast.vue'
import Picker from './pages/picker.vue'
import TimePicker from './pages/time-picker.vue'
import Dialog from './pages/dialog.vue'
import ActionSheet from './pages/action-sheet.vue'
import Scroll from './pages/scroll.vue'
import Slide from './pages/slide.vue'
import IndexList from './pages/index-list.vue'

Vue.use(Cube)
Vue.use(VueRouter)

const routes = [
  {
    path: '/button',
    component: Button
  },
  {
    path: '/checkbox',
    component: Checkbox
  },
  {
    path: '/checkbox-group',
    component: CheckboxGroup
  },
  {
    path: '/loading',
    component: Loading
  },
  {
    path: '/tip',
    component: Tip
  },
  {
    path: '/popup',
    component: Popup
  },
  {
    path: '/toast',
    component: Toast
  },
  {
    path: '/picker',
    component: Picker
  },
  {
    path: '/time-picker',
    component: TimePicker
  },
  {
    path: '/dialog',
    component: Dialog
  },
  {
    path: '/action-sheet',
    component: ActionSheet
  },
  {
    path: '/scroll',
    component: Scroll
  },
  {
    path: '/slide',
    component: Slide
  },
  {
    path: '/index-list',
    component: IndexList
  }
]

const router = new VueRouter({
  routes
})

/* eslint-disable no-new */
new Vue({
  router,
  render(createElement) {
    return createElement(App)
  }
}).$mount('#app')

