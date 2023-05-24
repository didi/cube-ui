import createAPI from '../../common/helpers/create-api'

export default function addActionSheet (app, ActionSheet) {
  createAPI(app, ActionSheet, ['select', 'cancel'], true)
}
