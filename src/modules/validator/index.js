import Validator from '../../components/validator/validator.vue'
import { addRule, addMessage, addType, setLanguage } from '../../common/helpers/validator'

Validator.install = function (Vue) {
  Vue.component(Validator.name, Validator)
}

Validator.addRule = addRule
Validator.addMessage = addMessage
Validator.addType = addType
Validator.setLanguage = setLanguage

export default Validator
