import Checker from '../../components/checker/checker.vue'
import CheckerItem from '../../components/checker/checker-item.vue'

Checker.install = function (Vue) {
  Vue.component(Checker.name, Checker)
  Vue.component(CheckerItem.name, CheckerItem)
}

Checker.Item = CheckerItem

export default Checker
