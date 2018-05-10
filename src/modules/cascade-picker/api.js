import createAPI from '../../common/helpers/create-api'
import { tip } from '../../common/helpers/debug'

export default function addCascadePicker (Vue, CascadePicker) {
  const cascadePickerAPI = createAPI(Vue, CascadePicker, ['select', 'cancel', 'change'])
  cascadePickerAPI.before((data, renderFn, single) => {
    if (single) {
      tip('CascadePicker component can not be a singleton.')
    }
  })
}
