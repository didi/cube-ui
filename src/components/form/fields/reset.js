const typesResetMap = {
  checkbox() {
    return false
  },
  select() {
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
