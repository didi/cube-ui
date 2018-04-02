import Drawer from '../../components/drawer/drawer.vue'
import DrawerPanel from '../../components/drawer/drawer-panel.vue'
import DrawerItem from '../../components/drawer/drawer-item.vue'

Drawer.install = function (Vue) {
  Vue.component(Drawer.name, Drawer)
  Vue.component(DrawerPanel.name, DrawerPanel)
  Vue.component(DrawerItem.name, DrawerItem)
}

Drawer.Panel = DrawerPanel
Drawer.Item = DrawerItem

export default Drawer
