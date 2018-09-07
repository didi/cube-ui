import Dialog from '../../components/dialog/dialog.vue'
import Locale from '../locale'
import addDialog from './api'

Dialog.install = function (Vue) {
  Vue.component(Dialog.name, Dialog)
  Locale.install(Vue)
  addDialog(Vue, Dialog)
}

export default Dialog
