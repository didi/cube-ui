import Button from '../../components/button/button.vue'
import Checkbox from '../../components/checkbox/checkbox.vue'
import Toolbar from '../../components/toolbar/toolbar.vue'

Toolbar.install = function (Vue) {
  Vue.component(Button.name, Button)
  Vue.component(Checkbox.name, Checkbox)
  Vue.component(Toolbar.name, Toolbar)
}

Toolbar.Button = Button
Toolbar.Checkbox = Checkbox

export default Toolbar
