import Form from '../../components/form/form.vue'
import FormGroup from '../../components/form/form-group.vue'
import FormItem from '../../components/form/form-item.vue'

Form.install = function (Vue) {
  Vue.component(Form.name, Form)
  Vue.component(FormGroup.name, FormGroup)
  Vue.component(FormItem.name, FormItem)
}

Form.Group = FormGroup
Form.Item = FormItem

export default Form
