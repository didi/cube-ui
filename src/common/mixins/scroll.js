import { camelize } from '../lang/string'

const EVENT_SCROLL = 'scroll'
const EVENT_BEFORE_SCROLL_START = 'before-scroll-start'
const EVENT_SCROLL_END = 'scroll-end'

const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END]

export default {
  props: {
    scrollEvents: {
      type: Array,
      default() {
        return []
      },
      validator(arr) {
        return arr.every((item) => {
          return SCROLL_EVENTS.indexOf(item) !== -1
        })
      }
    }
  },
  methods: {
    _listenScrollEvents() {
      this.scrollEvents.forEach((event) => {
        this.scroll.on(camelize(event), (...args) => {
          this.$emit(event, ...args)
        })
      })
    }
  }
}
