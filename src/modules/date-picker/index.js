import Picker from '../../components/picker/picker.vue'
import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import DatePicker from '../../components/date-picker/date-picker.vue'
import addDatePicker from './api'
import addCascadePicker from '../cascade-picker/api'
import addPicker from '../picker/api'
import Locale from '../../common/locale'

DatePicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(CascadePicker.name, CascadePicker)
  Vue.component(DatePicker.name, DatePicker)
  Locale.install(Vue)
  addPicker(Vue, Picker)
  addCascadePicker(Vue, CascadePicker)
  addDatePicker(Vue, DatePicker)
}

DatePicker.Picker = Picker
CascadePicker.Picker = Picker
DatePicker.CascadePicker = CascadePicker

export default DatePicker
