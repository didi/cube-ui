import { prefixStyle } from '../helpers/dom'
const FLEXBASIS = prefixStyle('flexBasis')

export default {
  props: {
    colNum: {
      type: Number,
      default: 1
    }
  },
  watch: {
    colNum: {
      immediate: true,
      handler (newValue) {
        if (newValue <= 1) return ''
        this.$nextTick(() => {
          let count = 100 / newValue + '%'
          Array.prototype.forEach.call(this.$refs.group.children, item => {
            item.style[FLEXBASIS] = count
          })
        })
      }
    }
  }
}
