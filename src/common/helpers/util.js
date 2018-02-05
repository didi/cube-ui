function deepAssign(to, from) {
  for (let key in from) {
    if (!to[key] || typeof to[key] !== 'object') {
      to[key] = from[key]
    } else {
      deepAssign(to[key], from[key])
    }
  }
}

function createAddAPI(baseObj) {
  return function add(...args) {
    if (typeof args[0] === 'string') {
      args[0] = {
        [args[0]]: args[1]
      }
    }
    deepAssign(baseObj, args[0])
  }
}

function toLocaleDateString(timestamp, locale) {
  const date = new Date(timestamp)

  if (locale === 'zh') {
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`
  } else {
    return date.toDateString()
  }
}

export { deepAssign, createAddAPI, toLocaleDateString }
