import createAPI from '../../common/helpers/create-api'

export default function addCascadePicker (app, CascadePicker) {
  // const cascadePickerAPI = createAPI(Vue, CascadePicker, ['select', 'cancel', 'change'])
  // cascadePickerAPI.before((data, renderFn, single) => {
  //   if (single) {
  //     tip('CascadePicker component can not be a singleton.')
  //   }
  // })
  createAPI(app, CascadePicker)
}
