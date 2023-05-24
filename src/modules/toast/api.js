import createAPI from '../../common/helpers/create-api'

export default function addToast (app, Toast) {
  createAPI(app, Toast, ['timeout'], true)
}
