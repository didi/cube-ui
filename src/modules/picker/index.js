import Picker from '../../components/picker/picker.vue'
import addPicker from './api'
import Locale from '../../common/locale'

Picker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Locale.install(Vue)
  addPicker(Vue, Picker)
}

export default Picker
