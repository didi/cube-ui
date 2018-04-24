import { inBrowser } from './env'

const DEFAULT_INTERVAL = 100 / 60

function noop() {
}

export const requestAnimationFrame = (() => {
  /* istanbul ignore next */
  if (!inBrowser) {
    return noop
  }
  return window.requestAnimationFrame ||
    /* istanbul ignore next */
    window.webkitRequestAnimationFrame ||
    /* istanbul ignore next */
    window.mozRequestAnimationFrame ||
    /* istanbul ignore next */
    window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
    /* istanbul ignore next */
    function (callback) {
      return window.setTimeout(callback, (callback.interval || DEFAULT_INTERVAL) / 2) // make interval as precise as possible.
    }
})()

export const cancelAnimationFrame = (() => {
  /* istanbul ignore next */
  if (!inBrowser) {
    return noop
  }
  return window.cancelAnimationFrame ||
    /* istanbul ignore next */
    window.webkitCancelAnimationFrame ||
    /* istanbul ignore next */
    window.mozCancelAnimationFrame ||
    /* istanbul ignore next */
    window.oCancelAnimationFrame ||
    /* istanbul ignore next */
    function (id) {
      window.clearTimeout(id)
    }
})()
