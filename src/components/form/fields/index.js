import processTypes from './types'
import { assign } from '../../../common/helpers/util'

function processField(field) {
  const _field = assign({}, field)
  processTypes(_field)
  return _field
}

export { processField }
