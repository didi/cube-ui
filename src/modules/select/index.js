import Picker from '../../components/picker/picker.vue'
import Select from '../../components/select/select.vue'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

Select.install = function (app) {
  app.component(Picker.name, Picker)
  app.component(Select.name, Select)
  Locale.install(app)
  addPicker(app, Picker)
}

Select.Picker = Picker

export default Select
