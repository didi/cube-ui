import Picker from '../../components/picker/picker.vue'
import LinkagePicker from '../../components/linkage-picker/linkage-picker.vue'
import addLinkagePicker from './api'
import addPicker from '../picker/api'

LinkagePicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(LinkagePicker.name, LinkagePicker)
  addPicker(Vue, Picker)
  addLinkagePicker(Vue, LinkagePicker)
}

LinkagePicker.Picker = Picker

export default LinkagePicker
