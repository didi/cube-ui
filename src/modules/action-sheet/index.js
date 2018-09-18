import ActionSheet from '../../components/action-sheet/action-sheet.vue'
import addActionSheet from './api'
import Locale from '../../common/locale'

ActionSheet.install = function (Vue) {
  Vue.component(ActionSheet.name, ActionSheet)
  Locale.install(Vue)
  addActionSheet(Vue, ActionSheet)
}

export default ActionSheet
