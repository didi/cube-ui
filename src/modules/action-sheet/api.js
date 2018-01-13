import createAPI from '../../common/helpers/create-api'

export default function addActionSheet (Vue, ActionSheet) {
  createAPI(Vue, ActionSheet, ['select', 'cancel'], true)
}
