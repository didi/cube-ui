import createAPI from '../../common/helpers/create-api'

export default function addPicker (Vue, Picker) {
  createAPI(Vue, Picker, ['select', 'value-change', 'cancel', 'change'], true)
}
