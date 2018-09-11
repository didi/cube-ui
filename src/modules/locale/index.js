import defaultMessages from '../../locale/lang/zh-CN'

let Vue
let proto

const DEFAULT_LANG = 'zh-CN'

const locale = {
  name: 'locale',
  install (_Vue) {
    if (locale.installed) return
    Vue = _Vue
    proto = Vue.prototype
    Vue.util.defineReactive(proto, '$cubeLang', DEFAULT_LANG)
    proto['$cubeMessages'] = { [DEFAULT_LANG]: defaultMessages }
    locale.installed = true
  },
  use (lang, messages) {
    proto['$cubeLang'] = lang
    const cubeMessages = proto['$cubeMessages']
    // if messages have never been stored in vue.prototye
    if (!(lang in cubeMessages)) {
      cubeMessages[[lang]] = messages
    }
  }
}

export default locale
