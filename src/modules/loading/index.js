import Loading from '../../components/loading/loading.vue'

Loading.install = function (app) {
  app.component(Loading.name, Loading)
}

export default Loading
