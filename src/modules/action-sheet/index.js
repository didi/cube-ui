import ActionSheet from '../../components/action-sheet/action-sheet.vue'
import addActionSheet from './api'
import Locale from '../../common/locale'

ActionSheet.install = function (app) {
  app.component(ActionSheet.name, ActionSheet)
  Locale.install(app)
  addActionSheet(app, ActionSheet)
}

export default ActionSheet
