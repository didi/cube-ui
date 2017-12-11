import createAPI from '../../common/helpers/create-api'
import { warn } from '../../common/helpers/debug'

export default function addLinkagePicker (Vue, LinkagePicker) {
  const linkagePickerAPI = createAPI(Vue, LinkagePicker, ['select', 'cancel', 'change'])
  linkagePickerAPI.before((data, renderFn, single) => {
    if (single) {
      warn('LinkagePicker component can not be a singleton.')
    }
  })
}
