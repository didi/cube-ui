import Form from '../../components/form/form.vue'
import FormGroup from '../../components/form/form-group.vue'
import FormItem from '../../components/form/form-item.vue'

import Validator from '../../components/validator/validator.vue'
import { addRule, addMessage, addType, setLanguage } from '../../common/helpers/validator'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(FormGroup.name, FormGroup)
  Vue.component(FormItem.name, FormItem)
  Vue.component(Validator.name, Validator)
}

Form.Group = FormGroup
Form.Item = FormItem
Form.Validator = Validator

Validator.addRule = addRule
Validator.addMessage = addMessage
Validator.addType = addType
Validator.setLanguage = setLanguage

export default Form
