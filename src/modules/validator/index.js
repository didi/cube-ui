import Validator from '../../components/validator/validator.vue'
import Locale from '../../common/locale'
import { addRule, addMessage, addType } from '../../common/helpers/validator'

Validator.install = function (Vue) {
  Vue.component(Validator.name, Validator)
  Locale.install(Vue)
  Validator._base = Vue // get Vue.prototye when use Validator.addMessage()
}

Validator.addRule = addRule
Validator.addMessage = addMessage
Validator.addType = addType
Validator.addHelper = Locale.addHelper

export default Validator
