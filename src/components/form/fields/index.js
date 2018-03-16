import processTypes from './types'

function processField(value) {
  const field = {
    ...value
  }
  processTypes(field)
  return field
}

export { processField }
