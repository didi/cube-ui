import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import DatePicker from '../../components/date-picker/date-picker.vue'
import addDatePicker from './api'
import addCascadePicker from '../cascade-picker/api'

DatePicker.install = function (Vue) {
  Vue.component(CascadePicker.name, CascadePicker)
  Vue.component(DatePicker.name, DatePicker)
  addCascadePicker(Vue, CascadePicker)
  addDatePicker(Vue, DatePicker)
}

DatePicker.CascadePicker = CascadePicker

export default DatePicker
