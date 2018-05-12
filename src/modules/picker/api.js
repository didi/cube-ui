import createAPI from '../../common/helpers/create-api'
import { tip } from '../../common/helpers/debug'

export default function addPicker (Vue, Picker) {
  const pickerAPI = createAPI(Vue, Picker, ['select', 'value-change', 'cancel', 'change'])
  pickerAPI.before((data, renderFn, single) => {
    if (single) {
      tip('Picker component can not be a singleton.')
    }
  })
}
