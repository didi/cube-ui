import TabNav from '../../components/tabs/tab-nav.vue'
import TabNavItem from '../../components/tabs/tab-nav-item.vue'
TabNav.install = function (Vue) {
  Vue.component(TabNav.name, TabNav)
  Vue.component(TabNavItem.name, TabNavItem)
}

TabNav.Item = TabNavItem

export default TabNav
