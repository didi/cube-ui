import { camelize } from '../lang/string'

const EVENT_SCROLL = 'scroll'
const EVENT_BEFORE_SCROLL_START = 'before-scroll-start'
const EVENT_SCROLL_END = 'scroll-end'

const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END]

export default {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {}
      }
    }
  }
}
