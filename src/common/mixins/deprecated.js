import { tip } from '../../common/helpers/debug'
import { kebab } from '../../common/lang/string'

export default {
  methods: {
    _checkDeprecated() {
      const props = this.$options.props
      const componentName = this.$options.name

      Object.keys(props).forEach((key) => {
        if (props[key].deprecated && this[key] !== props[key].default) {
          tip(`The property "${kebab(key)}" is deprecated, please use the recommended property "${props[key].replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${componentName.substr(5)}#cube-Propsconfiguration-anchor`, componentName)
        }
      })
    }
  },
  mounted() {
    this._checkDeprecated()
  }
}
