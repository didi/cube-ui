import processTypes from './types'

function processField(field) {
  const _field = {
    ...field
  }
  processTypes(_field)
  return _field
}

export { processField }
