import TabPanels from '../../components/tab-panels/tab-panels.vue'
import TabPanel from '../../components/tab-panels/tab-panel.vue'

TabPanels.install = function (app) {
  app.component(TabPanels.name, TabPanels)
  app.component(TabPanel.name, TabPanel)
}

TabPanels.Panel = TabPanel

export default TabPanels
