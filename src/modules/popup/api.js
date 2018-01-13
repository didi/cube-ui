import createAPI from '../../common/helpers/create-api'

export default function addPopup(Vue, Popup) {
  createAPI(Vue, Popup, ['mask-click'], true)
}
