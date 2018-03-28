const handleValidateRule = (field, type, custom) => {
  const ruleValue = field.rules && field.rules[type]
  if (type !== 'custom' && ruleValue && typeof ruleValue !== 'function') {
    field.rules[type] = custom
  }
}
const createHandler = (type) => {
  return (field, custom) => {
    return handleValidateRule(field, type, custom)
  }
}

const handleRequired = createHandler('required')
const boolRequiredHandler = (field) => {
  return handleRequired(field, (val) => {
    return val !== false
  })
}
const numberGT0RequiredHandler = (field) => {
  return handleRequired(field, (val) => {
    return val > 0
  })
}

export {
  boolRequiredHandler,
  numberGT0RequiredHandler
}
