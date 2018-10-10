import Dialog from '../../components/dialog/dialog.vue'
import Input from '../../components/input/input.vue'
import addDialog from './api'

Dialog.install = function (Vue) {
  Vue.component(Input.name, Input)
  Vue.component(Dialog.name, Dialog)
  addDialog(Vue, Dialog)
}

Dialog.Input = Input

export default Dialog
