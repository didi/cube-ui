import createAPI from '../../common/helpers/create-api'
import { tip } from '../../common/helpers/debug'

export default function addSegmentPicker (Vue, SegmentPicker) {
  const segmentPickerAPI = createAPI(Vue, SegmentPicker, ['select', 'cancel', 'change', 'next', 'prev'])
  segmentPickerAPI.before((data, renderFn, single) => {
    if (single) {
      tip('SegmentPicker component can not be a singleton.')
    }
  })
}
