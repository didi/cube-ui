import Button from '../../components/button/button.vue'

Button.install = function (Vue) {
  console.log(666, Button, Vue)
  Vue.component(Button.name, Button)
}

export default Button
