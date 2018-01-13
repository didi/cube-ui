import Picker from '../../components/picker/picker.vue'
import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import addCascadePicker from './api'
import addPicker from '../picker/api'

CascadePicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(CascadePicker.name, CascadePicker)
  addPicker(Vue, Picker)
  addCascadePicker(Vue, CascadePicker)
}

CascadePicker.Picker = Picker

export default CascadePicker
