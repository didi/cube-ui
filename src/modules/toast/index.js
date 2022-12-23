import Loading from '../../components/loading/loading.vue'
import Toast from '../../components/toast/toast.vue'
import addToast from './api'

Toast.install = function (app) {
  app.component(Loading.name, Loading)
  app.component(Toast.name, Toast)
  addToast(app, Toast)
}

Toast.Loading = Loading

export default Toast
