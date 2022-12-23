import RecycleList from '../../components/recycle-list/recycle-list.vue'

RecycleList.install = function (app) {
  app.component(RecycleList.name, RecycleList)
}

export default RecycleList
