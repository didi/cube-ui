import Picker from '../../components/picker/picker.vue'
import addPicker from './api'
import Locale from '../../common/locale'

Picker.install = function (app) {
  app.component(Picker.name, Picker)
  Locale.install(app)
  addPicker(app, Picker)
}

export default Picker
