import IndexList from '../../components/index-list/index-list.vue'
import IndexListGroup from '../../components/index-list/index-list-group.vue'
import IndexListItem from '../../components/index-list/index-list-item.vue'

IndexList.install = function (app) {
  app.component(IndexList.name, IndexList)
  app.component(IndexListGroup.name, IndexListGroup)
  app.component(IndexListItem.name, IndexListItem)
}

IndexList.Group = IndexListGroup
IndexList.Item = IndexListItem

export default IndexList
