import Dialog from '../../components/dialog/dialog.vue'
import Locale from '../../common/locale'
import Input from '../../components/input/input.vue'
import addDialog from './api'

Dialog.install = function (app) {
  app.component(Input.name, Input)
  app.component(Dialog.name, Dialog)
  Locale.install(app)
  addDialog(app, Dialog)
}

Dialog.Input = Input

export default Dialog
