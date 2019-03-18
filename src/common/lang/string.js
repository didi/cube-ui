const camelizeRE = /-(\w)/g
export function camelize (str) {
  str = String(str)
  return str.replace(camelizeRE, function (m, c) {
    return c ? c.toUpperCase() : ''
  })
}

export function kebab (str) {
  str = String(str)
  return str.replace(/([A-Z])/g, '-$1').toLowerCase()
}
