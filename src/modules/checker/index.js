import Checker from '../../components/checker/checker.vue'
import CheckerItem from '../../components/checker/checker-item.vue'

Checker.install = function (app) {
  app.component(Checker.name, Checker)
  app.component(CheckerItem.name, CheckerItem)
}

Checker.Item = CheckerItem

export default Checker
