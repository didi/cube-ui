import Picker from '../../components/picker/picker.vue'
import DatePicker from '../../components/date-picker/date-picker.vue'
import addDatePicker from './api'
import addPicker from '../picker/api'

DatePicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(DatePicker.name, DatePicker)
  addPicker(Vue, Picker)
  addDatePicker(Vue, DatePicker)
}

DatePicker.Picker = Picker

export default DatePicker
