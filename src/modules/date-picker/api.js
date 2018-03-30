import createAPI from '../../common/helpers/create-api'
import { warn } from '../../common/helpers/debug'

export default function addDatePicker (Vue, DatePicker) {
  const datePickerAPI = createAPI(Vue, DatePicker, ['select', 'cancel', 'value-change'])
  datePickerAPI.before((data, renderFn, single) => {
    if (single) {
      warn('DatePicker component can not be a singleton.')
    }
  })
}
