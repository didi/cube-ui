import Vue from 'vue'
import defaultMessages from './lang/zh-CN'

const DEFAULT_LANG = 'zh-CN'
const prototype = Vue.prototype

const locale = {
  name: 'locale',
  install () {
    if (locale.installed) return
    Vue.util.defineReactive(prototype, '$cubeLang', DEFAULT_LANG)
    prototype['$cubeMessages'] = { [DEFAULT_LANG]: defaultMessages }
    locale.installed = true
  },
  use (lang, messages) {
    prototype['$cubeLang'] = lang
    const cubeMessages = prototype['$cubeMessages']
    // if messages have never been stored in vue.prototye
    if (!(lang in cubeMessages)) {
      cubeMessages[[lang]] = messages
    }
  }
}
// auto install due to cube-ui support importing module on demand
locale.install()

export default locale
