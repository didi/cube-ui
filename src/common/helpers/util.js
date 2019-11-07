import { camelize } from '../lang/string'

function findIndex(ary, fn) {
  if (ary.findIndex) {
    return ary.findIndex(fn)
  }
  /* istanbul ignore next */
  let index = -1
  /* istanbul ignore next */
  ary.some(function (item, i, ary) {
    const ret = fn.call(this, item, i, ary)
    if (ret) {
      index = i
      return ret
    }
  })
  /* istanbul ignore next */
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

function judgeTypeFnCreator (type) {
  const toString = Object.prototype.toString
  return function isType (o) {
    return toString.call(o) === `[object ${type}]`
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

function parallel(tasks, cb) {
  let doneCount = 0
  let results = []
  const tasksLen = tasks.length
  if (!tasksLen) {
    return cb(results)
  }
  tasks.forEach((task, i) => {
    task((ret) => {
      doneCount += 1
      results[i] = ret
      if (doneCount === tasksLen) {
        // all tasks done
        cb(results)
      }
    })
  })
}

function cb2PromiseWithResolve(cb) {
  let promise
  if (typeof window.Promise !== 'undefined') {
    const _cb = cb
    promise = new window.Promise((resolve) => {
      cb = (data) => {
        _cb && _cb(data)
        resolve(data)
      }
    })
    promise.resolve = cb
  }
  return promise
}

function debounce(func, wait, immediate, initValue) {
  let timeout
  let result = initValue

  const later = function (context, args) {
    timeout = null
    if (args) {
      result = func.apply(context, args)
    }
  }

  const debounced = function (...args) {
    if (timeout) {
      clearTimeout(timeout)
    }
    if (immediate) {
      const callNow = !timeout
      timeout = setTimeout(later, wait)
      if (callNow) {
        result = func.apply(this, args)
      }
    } else {
      timeout = setTimeout(() => {
        later(this, args)
      }, wait)
    }

    return result
  }

  debounced.cancel = function () {
    clearTimeout(timeout)
    timeout = null
  }

  return debounced
}

function processComponentName(Component, { prefix = '', firstUpperCase = false } = {}) {
  const name = Component.name
  const pureName = name.replace(/^cube-/i, '')
  let camelizeName = `${camelize(`${prefix}${pureName}`)}`
  /* istanbul ignore if */
  if (firstUpperCase) {
    camelizeName = camelizeName.charAt(0).toUpperCase() + camelizeName.slice(1)
  }
  return camelizeName
}

function parsePath (obj, path = '') {
  const segments = path.split('.')
  let result = obj
  for (let i = 0; i < segments.length; i++) {
    const key = segments[i]
    /* istanbul ignore if */
    if (isUndef(result[key])) {
      result = ''
      break
    } else {
      result = result[key]
    }
  }
  return result
}

const isFunc = judgeTypeFnCreator('Function')
const isUndef = judgeTypeFnCreator('Undefined')
const isArray = judgeTypeFnCreator('Array')
const isString = judgeTypeFnCreator('String')
const isObject = judgeTypeFnCreator('Object')
const isNumber = judgeTypeFnCreator('Number')

export {
  findIndex,
  deepAssign,
  createAddAPI,
  resetTypeValue,
  parallel,
  cb2PromiseWithResolve,
  debounce,
  processComponentName,
  parsePath,
  isUndef,
  isFunc,
  isArray,
  isString,
  isObject,
  isNumber
}
