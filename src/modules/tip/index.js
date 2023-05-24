import Tip from '../../components/tip/tip.vue'

Tip.install = function (app) {
  app.component(Tip.name, Tip)
}

export default Tip
