import Picker from '../../components/picker/picker.vue'
import CascadePicker from '../../components/cascade-picker/cascade-picker.vue'
import SegmentPicker from '../../components/segment-picker/segment-picker.vue'
import addPicker from '../picker/api'
import addCascadePicker from '../cascade-picker/api'
import addSegmentPicker from './api'
import Locale from '../../common/locale'

SegmentPicker.install = function (app) {
  app.component(Picker.name, Picker)
  app.component(CascadePicker.name, CascadePicker)
  app.component(SegmentPicker.name, SegmentPicker)
  Locale.install(app)
  addPicker(app, Picker)
  addCascadePicker(app, CascadePicker)
  addSegmentPicker(app, SegmentPicker)
}

SegmentPicker.Picker = Picker
CascadePicker.Picker = Picker
SegmentPicker.CascadePicker = CascadePicker

export default SegmentPicker
