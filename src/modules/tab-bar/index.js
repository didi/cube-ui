import TabBar from '../../components/tab-bar/tab-bar.vue'
import Tab from '../../components/tab-bar/tab.vue'
TabBar.install = function (Vue) {
  Vue.component(TabBar.name, TabBar)
  Vue.component(Tab.name, Tab)
}

TabBar.Tab = Tab

export default TabBar
