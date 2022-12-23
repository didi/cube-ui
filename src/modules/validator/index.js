import Validator from '../../components/validator/validator.vue'
import Locale from '../../common/locale'
import { addRule, addMessage, addType } from '../../common/helpers/validator'

Validator.install = function (app) {
  app.component(Validator.name, Validator)
  Locale.install(app)
  Validator._base = app // get Vue.prototye when use Validator.addMessage()
}

Validator.addRule = addRule
Validator.addMessage = addMessage
Validator.addType = addType
Validator.addHelper = Locale.addHelper

export default Validator
