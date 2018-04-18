function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  let index = -1
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  return index
}

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

const typesReset = {
  _set(obj, key, value) {
    obj[key] = value
  },
  string(obj, key) {
    typesReset._set(obj, key, '')
  },
  number(obj, key) {
    typesReset._set(obj, key, 0)
  },
  boolean(obj, key) {
    typesReset._set(obj, key, false)
  },
  object(obj, key, value) {
    if (Array.isArray(value)) {
      typesReset._set(obj, key, [])
    } else {
      typesReset._set(obj, key, {})
    }
  }
}
function resetTypeValue(obj, key, defVal) {
  if (defVal !== undefined) {
    return typesReset._set(obj, key, defVal)
  }
  if (key) {
    const value = obj[key]
    const resetHandler = typesReset[typeof value]
    resetHandler && resetHandler(obj, key, value)
  } else {
    Object.keys(obj).forEach((key) => {
      resetTypeValue(obj, key)
    })
  }
}

export { findIndex, deepAssign, createAddAPI, toLocaleDateString, resetTypeValue }
