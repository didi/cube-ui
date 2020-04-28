import { ua, isIos } from '../helpers/env'
import { getIosVersion } from '../helpers/util'

function getUseTransition() {
  let useTransition = true
  if (isIos) {
    const version = getIosVersion(ua)
    if (!version) return useTransition

    if (version.major >= 13 && version.minor >= 4) {
      useTransition = false
    }
  }
  return useTransition
}

// fix the scrolling problem in IOS13.4 webview
export const USE_TRANSITION = getUseTransition()
