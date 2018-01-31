import { createAddAPI } from '../util'
import { types } from './types'

const rules = {
  required: (val, required, type) => {
    if (!required) {
      return true
    }
    type = type || (Array.isArray(val) ? 'array' : typeof val)
    if (type === 'array') {
      return val.length > 0
    }
    return val !== '' && val !== undefined
  },
  type: (val, type) => {
    return !types[type] || types[type](val)
  },
  min: (val, min, type) => {
    type = type || (typeof val)
    if (type === 'number' || type === 'date') {
      return Number(val) >= min
    } else {
      return val.length >= min
    }
  },
  max: (val, max, type) => {
    type = type || (typeof val)
    if (type === 'number' || type === 'date') {
      return Number(val) <= max
    } else {
      return val.length <= max
    }
  },
  len: (val, len, type) => {
    type = type || (typeof val)
    if (type === 'number' || type === 'date') {
      return Number(val) === len
    } else {
      return val.length === len
    }
  },
  notWhitespace: (val, config, type) => {
    return !config || !/^\s+$/.test(val)
  },
  pattern: (val, pattern, type) => {
    return pattern.test(val)
  },
  custom: (val, custom, type) => {
    return custom(val)
  }
}

const addRule = createAddAPI(rules)

export { rules, addRule }
