import Vue from 'vue'
import Router from 'vue-router'
import { getCurrentLang } from '../common/js/utils'
import routes from './routes'
import EnUSHome from '../components/home/en-US.vue'
import ZhCNHome from '../components/home/zh-CN.vue'
import EnUSIndex from '../components/index/en-US.vue'
import ZhCNIndex from '../components/index/zh-CN.vue'
import Example from '../components/example/example.vue'
// viewport chunk added to main chunk, not in dynamic docs chunks
import '../components/viewport/viewport.vue'

Vue.use(Router)

const EnUSChildren = [
  {
    path: '',
    component: EnUSIndex
  },
  {
    path: 'example',
    component: Example
  }
].concat(routes['en-US'])
const ZhCNChildren = [
  {
    path: '',
    component: ZhCNIndex
  },
  {
    path: 'example',
    component: Example
  }
].concat(routes['zh-CN'])

export default new Router({
  routes: [
    {
      path: '/',
      redirect: function () {
        const defaultLang = getCurrentLang()
        return `/${defaultLang}`
      }
    },
    {
      path: '/en-US',
      component: EnUSHome,
      children: EnUSChildren
    },
    {
      path: '/zh-CN',
      component: ZhCNHome,
      children: ZhCNChildren
    }
  ]
})
