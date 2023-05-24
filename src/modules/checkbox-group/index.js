import Checkbox from '../../components/checkbox/checkbox.vue'
import CheckboxGroup from '../../components/checkbox-group/checkbox-group.vue'

CheckboxGroup.install = function (app) {
  app.component(Checkbox.name, Checkbox)
  app.component(CheckboxGroup.name, CheckboxGroup)
}

CheckboxGroup.Checkbox = Checkbox

export default CheckboxGroup
