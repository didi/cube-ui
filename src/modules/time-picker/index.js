import Picker from '../../components/picker/picker.vue'
import TimePicker from '../../components/time-picker/time-picker.vue'
import addTimePicker from './api'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

TimePicker.install = function (app) {
  app.component(Picker.name, Picker)
  app.component(TimePicker.name, TimePicker)
  Locale.install(app)
  addPicker(app, Picker)
  addTimePicker(app, TimePicker)
}

TimePicker.Picker = Picker

export default TimePicker
