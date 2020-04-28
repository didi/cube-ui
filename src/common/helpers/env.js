// ssr support
export const inBrowser = typeof window !== 'undefined'
export const ua = inBrowser && navigator.userAgent.toLowerCase()
export const isAndroid = ua && ua.indexOf('android') > 0
export const isIOS = ua && /iphone|ipad|ipod|ios/.test(ua)
