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
function getResetValueByType(type) {
  const resetHandler = typesResetMap[type]
  return resetHandler && resetHandler()
}

export {
  getResetValueByType
}
