import { prefixStyle } from '../helpers/dom'
const FLEX_BASIS = prefixStyle('flexBasis')

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
            item.style[FLEX_BASIS] = count
          })
        })
      }
    }
  }
}
