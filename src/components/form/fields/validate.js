const handleValidateRule = (field, type, custom) => {
  if (field.validate && field.validate.rule && field.validate.rule[type]) {
    field.validate.rule[type] = custom
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
