import Button from '../../components/button/button.vue'
import Checkbox from '../../components/checkbox/checkbox.vue'
import Toolbar from '../../components/toolbar/toolbar.vue'

Toolbar.install = function (app) {
  app.component(Button.name, Button)
  app.component(Checkbox.name, Checkbox)
  app.component(Toolbar.name, Toolbar)
}

Toolbar.Button = Button
Toolbar.Checkbox = Checkbox

export default Toolbar
