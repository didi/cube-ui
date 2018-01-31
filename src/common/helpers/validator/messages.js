import { createAddAPI } from '../util'
import Chinese from './language/chinese'
import English from './language/english'

let language = 'zh'

const messages = {
  zh: Chinese,
  en: English
}

function findMessage (key, config, type, val) {
  const target = messages[language][key]
  if (!target) {
    return ''
  }
  if (typeof target === 'string') {
    return target
  } else {
    if (!target[type]) {
      type = Array.isArray(val) ? 'array' : typeof val
    }
    return typeof target[type] === 'function' ? target[type](config) : target[type]
  }
}

const addMessage = createAddAPI(messages[language])

function setLanguage (lang) {
  language = lang
}

export { findMessage, addMessage, setLanguage }
