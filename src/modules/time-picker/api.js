import createAPI from '../../common/helpers/create-api'
import { tip } from '../../common/helpers/debug'

export default function addTimePicker (Vue, TimePicker) {
  const timePickerAPI = createAPI(Vue, TimePicker, ['select', 'cancel', 'change'])
  timePickerAPI.before((data, renderFn, single) => {
    if (single) {
      tip('TimePicker component can not be a singleton.')
    }
  })
}
