import IndexList from '../../components/index-list/index-list.vue'
import IndexListGroup from '../../components/index-list/index-list-group.vue'
import IndexListItem from '../../components/index-list/index-list-item.vue'

IndexList.install = function (Vue) {
  Vue.component(IndexList.name, IndexList)
  Vue.component(IndexListGroup.name, IndexListGroup)
  Vue.component(IndexListItem.name, IndexListItem)
}

IndexList.Group = IndexListGroup
IndexList.Item = IndexListItem

export default IndexList
