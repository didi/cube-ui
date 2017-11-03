import Vue from 'vue'
import Router from 'vue-router'
import { getCurrentLang } from '../common/js/utils'
import routes from './routes'
import EnUSHome from '../components/home/en-US.vue'
import ZhCNHome from '../components/home/zh-CN.vue'
// viewport chunk added to main chunk, not in dynamic docs chunks
import '../components/viewport/viewport.vue'

Vue.use(Router)

const defaultLang = getCurrentLang()

export default new Router({
  routes: [
    {
      path: '/',
      redirect: `/${defaultLang}`
    },
    {
      path: '/en-US',
      component: EnUSHome,
      children: routes['en-US']
    },
    {
      path: '/zh-CN',
      component: ZhCNHome,
      children: routes['zh-CN']
    }
  ]
})
