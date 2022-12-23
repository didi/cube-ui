import TabBar from '../../components/tab-bar/tab-bar.vue'
import Tab from '../../components/tab-bar/tab.vue'
TabBar.install = function (app) {
  app.component(TabBar.name, TabBar)
  app.component(Tab.name, Tab)
}

TabBar.Tab = Tab

export default TabBar
