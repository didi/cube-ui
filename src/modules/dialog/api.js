import createAPI from '../../common/helpers/create-api'

export default function addDialog (app, Dialog) {
  createAPI(app, Dialog, ['confirm', 'cancel', 'close', 'btn-click', 'link-click'], true)
}
