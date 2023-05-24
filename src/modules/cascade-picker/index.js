import Picker from '../../components/picker/picker.vue'
import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import addCascadePicker from './api'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

CascadePicker.install = function (app) {
  app.component(Picker.name, Picker)
  app.component(CascadePicker.name, CascadePicker)
  Locale.install(app)
  addPicker(app, Picker)
  addCascadePicker(app, CascadePicker)
}

CascadePicker.Picker = Picker

export default CascadePicker
