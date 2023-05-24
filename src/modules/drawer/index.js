import Drawer from '../../components/drawer/drawer.vue'
import DrawerPanel from '../../components/drawer/drawer-panel.vue'
import DrawerItem from '../../components/drawer/drawer-item.vue'

Drawer.install = function (app) {
  app.component(Drawer.name, Drawer)
  app.component(DrawerPanel.name, DrawerPanel)
  app.component(DrawerItem.name, DrawerItem)
}

Drawer.Panel = DrawerPanel
Drawer.Item = DrawerItem

export default Drawer
