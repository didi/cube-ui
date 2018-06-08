import TabContainer from '../../components/tabs/tab-container.vue'
import TabContainerItem from '../../components/tabs/tab-container-item.vue'

TabContainer.install = function (Vue) {
  Vue.component(TabContainer.name, TabContainer)
  Vue.component(TabContainerItem.name, TabContainerItem)
}

TabContainer.Item = TabContainerItem

export default TabContainer
