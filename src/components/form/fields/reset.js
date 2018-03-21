const typesResetMap = {
  checkbox() {
    /* istanbul ignore next */
    return false
  },
  select() {
    /* istanbul ignore next */
    return null
  }
}
function getResetValueByType(field) {
  const fieldType = field.type
  if (fieldType in typesResetMap) {
    return typesResetMap[fieldType]()
  }
}

export {
  getResetValueByType
}
