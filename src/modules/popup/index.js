import Popup from '../../components/popup/popup.vue'
import addPopup from './api'

Popup.install = function (app) {
  app.component(Popup.name, Popup)
  addPopup(app, Popup)
}

export default Popup
