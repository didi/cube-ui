import cookie from 'js-cookie'
import mitt from 'mitt'

export function setItem(k, v) {
  try {
    window.localStorage.setItem(k, v)
  } catch (e) {
    cookie.set(k, v, {
      expires: 365
    })
  }
}

export function getItem(k) {
  let v = window.localStorage.getItem(k)
  if (!v) {
    v = cookie.get(k)
  }
  return v || ''
}

export function getCurrentLang() {
  const itemKey = 'CUBE_LANGUAGE'
  const hash = window.location.hash
  const hashZhLang = hash.indexOf('/zh-') >= 0 ? 'zh-CN' : hash.indexOf('/en-') >= 0 ? 'en-US' : ''
  const lang = hashZhLang || getItem(itemKey) || window.navigator.language || 'en-US'
  let defaultLang = 'en-US'
  if (lang.indexOf('zh-') >= 0) {
    defaultLang = 'zh-CN'
  }
  setItem(itemKey, defaultLang)
  return defaultLang
}

const baseUrl = import.meta.env.PROD ? `${window.location.href.replace(/#.*$/, '')}example/#/` : `http://${window.location.hostname}:8081/#/`

const eventHub = mitt()

export { baseUrl, eventHub }
