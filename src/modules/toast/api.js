import createAPI from '../../common/helpers/create-api'

export default function addToast (Vue, Toast) {
  createAPI(Vue, Toast, ['timeout'], true)
}
