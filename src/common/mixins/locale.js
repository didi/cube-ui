import locale from '../locale'
import { parsePath, isUndef } from '../helpers/util'
import { warn } from '../helpers/debug'

const TRANSLATION_ABSENT = `Translation is not registered correctly, ` +
                           `you can call Locale.use() to install it.`

export default {
  computed: {
    $t () {
      const lang = this.$cubeLang
      const messages = this.$cubeMessages[lang]
      if (isUndef(messages)) {
        warn(TRANSLATION_ABSENT)
        return ''
      }
      return (path) => {
        return parsePath(messages, path)
      }
    }
  },
  beforeCreate() {
    locale.install(this.$root.constructor)
  }
}
