import createAPI from '../../common/helpers/create-api'
import { tip } from '../../common/helpers/debug'

export default function addDatePicker (Vue, DatePicker) {
  const datePickerAPI = createAPI(Vue, DatePicker, ['select', 'cancel', 'change'])
  datePickerAPI.before((data, renderFn, single) => {
    if (single) {
      tip('DatePicker component can not be a singleton.')
    }
  })
}
