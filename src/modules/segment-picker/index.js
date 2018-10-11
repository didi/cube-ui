import Picker from '../../components/picker/picker.vue'
import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import SegmentPicker from '../../components/segment-picker/segment-picker.vue'
import addPicker from '../picker/api'
import addCascadePicker from '../cascade-picker/api'
import addSegmentPicker from './api'
import Locale from '../../common/locale'

SegmentPicker.install = function (Vue) {
  Vue.component(Picker.name, Picker)
  Vue.component(CascadePicker.name, CascadePicker)
  Vue.component(SegmentPicker.name, SegmentPicker)
  Locale.install(Vue)
  addPicker(Vue, Picker)
  addCascadePicker(Vue, CascadePicker)
  addSegmentPicker(Vue, SegmentPicker)
}

SegmentPicker.Picker = Picker
CascadePicker.Picker = Picker
SegmentPicker.CascadePicker = CascadePicker

export default SegmentPicker
