import Checkbox from '../../components/checkbox/checkbox.vue'
import CheckboxGroup from '../../components/checkbox-group/checkbox-group.vue'

CheckboxGroup.install = function (Vue) {
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(CheckboxGroup.name, CheckboxGroup)
}

CheckboxGroup.Checkbox = Checkbox

export default CheckboxGroup
