import createAPI from '../../common/helpers/create-api'

export default function addPicker (app, Picker) {
  // const pickerAPI = createAPI(Vue, Picker, ['select', 'value-change', 'cancel', 'change'])
  // pickerAPI.before((data, renderFn, single) => {
  //   if (single) {
  //     tip('Picker component can not be a singleton.')
  //   }
  // })
  createAPI(app, Picker)
}
