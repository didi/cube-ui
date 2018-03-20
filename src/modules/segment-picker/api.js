import createAPI from '../../common/helpers/create-api'
import { warn } from '../../common/helpers/debug'

export default function addSegmentPicker (Vue, SegmentPicker) {
  const segmentPickerAPI = createAPI(Vue, SegmentPicker, ['select', 'cancel', 'change'])
  segmentPickerAPI.before((data, renderFn, single) => {
    if (single) {
      warn('SegmentPicker component can not be a singleton.')
    }
  })
}
