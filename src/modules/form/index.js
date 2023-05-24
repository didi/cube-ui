import Form from '../../components/form/form.vue'
import FormGroup from '../../components/form/form-group.vue'
import FormItem from '../../components/form/form-item.vue'
import Locale from '../../common/locale'

import Validator from '../../components/validator/validator.vue'
import { addRule, addMessage, addType } from '../../common/helpers/validator'

Form.install = function (app) {
  app.component(Form.name, Form)
  app.component(FormGroup.name, FormGroup)
  app.component(FormItem.name, FormItem)
  app.component(Validator.name, Validator)
  Locale.install(app)
  Validator._base = app // get Vue.prototye when Validator.addMessage()
}

Form.Group = FormGroup
Form.Item = FormItem
Form.Validator = Validator

Validator.addRule = addRule
Validator.addMessage = addMessage
Validator.addType = addType
Validator.addHelper = Locale.addHelper

export default Form
