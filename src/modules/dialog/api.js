import createAPI from '../../common/helpers/create-api'

export default function addDialog (Vue, Dialog) {
  createAPI(Vue, Dialog, ['confirm', 'cancel', 'close', 'btn-click', 'link-click'], true)
}
