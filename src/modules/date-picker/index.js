import Picker from '../../components/picker/picker.vue'
import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import DatePicker from '../../components/date-picker/date-picker.vue'
import addDatePicker from './api'
import addCascadePicker from '../cascade-picker/api'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

DatePicker.install = function (app) {
  app.component(Picker.name, Picker)
  app.component(CascadePicker.name, CascadePicker)
  app.component(DatePicker.name, DatePicker)
  Locale.install(app)
  addPicker(app, Picker)
  addCascadePicker(app, CascadePicker)
  addDatePicker(app, DatePicker)
}

DatePicker.Picker = Picker
CascadePicker.Picker = Picker
DatePicker.CascadePicker = CascadePicker

export default DatePicker
