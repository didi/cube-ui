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
    window.webkitRequestAnimationFrame ||
    window.mozRequestAnimationFrame ||
    window.oRequestAnimationFrame ||
    // if all else fails, use setTimeout
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
    window.webkitCancelAnimationFrame ||
    window.mozCancelAnimationFrame ||
    window.oCancelAnimationFrame ||
    function (id) {
      window.clearTimeout(id)
    }
})()
