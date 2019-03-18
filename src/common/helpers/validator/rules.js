import { createAddAPI } from '../util'
import { types } from './types'

const rules = {
  required: (val, required, type) => {
    type = type || (Array.isArray(val) ? 'array' : typeof val)
    if (type === 'array' && Array.isArray(val)) {
      return val.length > 0
    }
    return val !== '' && val !== undefined && val !== null
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
    let target = val
    if (target.length === undefined) {
      target = type === 'object' ? Object.keys(target) : String(target)
    }
    return target.length === len
  },
  notWhitespace: (val, config, type) => {
    return !/^\s+$/.test(val)
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
