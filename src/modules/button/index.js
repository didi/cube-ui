import Button from '../../components/button/button.vue'

Button.install = function (app) {
  app.component(Button.name, Button)
}

export default Button
