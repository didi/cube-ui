import Picker from '../../components/picker/picker.vue'
import Select from '../../components/select/select.vue'
import addPicker from '../picker/api'

Select.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(Select.name, Select)
  addPicker(Vue, Picker)
}

Select.Picker = Picker

export default Select
