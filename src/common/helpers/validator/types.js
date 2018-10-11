import { createAddAPI } from '../util'

const DATE_RE = /^(1|2)\d{3}[.\-/]\d{1,2}[.\-/]\d{1,2}$/

const types = {
  string: (val) => {
    return typeof val === 'string'
  },
  number: (val) => {
    return !isNaN(Number(val))
  },
  array: (val) => {
    return Array.isArray(val)
  },
  date: (val) => {
    return !isNaN(Number(val)) || DATE_RE.test(val)
  },
  email: (val) => {
    return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)+$/i.test(val)
  },
  tel: (val) => {
    return typeof val === 'string' && /^(11|13|14|15|17|18|19)[0-9]{9}$/.test(val)
  },
  url: (val) => {
    return typeof val === 'string' && /(https?|ftp|file):\/\/[-A-Za-z0-9+&@#/%?=~_|!:,.;]+[-A-Za-z0-9+&@#/%=~_|]/.test(val)
  }
}

const addType = createAddAPI(types)

export { types, addType }
