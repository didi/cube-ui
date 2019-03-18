import { inBrowser } from './env'

export function hasClass(el, className) {
  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)')
  return reg.test(el.className)
}

export function addClass(el, className) {
  /* istanbul ignore if */
  if (hasClass(el, className)) {
    return
  }

  const newClass = el.className.split(' ')
  newClass.push(className)
  el.className = newClass.join(' ')
}

export function removeClass(el, className) {
  /* istanbul ignore if */
  if (!hasClass(el, className)) {
    return
  }

  const reg = new RegExp('(^|\\s)' + className + '(\\s|$)', 'g')
  el.className = el.className.replace(reg, ' ')
}

export function getData(el, name) {
  const prefix = 'data-'
  return el.getAttribute(prefix + name)
}

export function getRect(el) {
  return {
    top: el.offsetTop,
    left: el.offsetLeft,
    width: el.offsetWidth,
    height: el.offsetHeight
  }
}

let vendor = (() => {
  /* istanbul ignore if */
  if (!inBrowser) {
    return false
  }
  let elementStyle = document.createElement('div').style
  let transformNames = {
    standard: 'transform',
    webkit: 'webkitTransform',
    Moz: 'MozTransform',
    O: 'OTransform',
    ms: 'msTransform'
  }

  for (let key in transformNames) {
    if (elementStyle[transformNames[key]] !== undefined) {
      return key
    }
  }

  /* istanbul ignore next */
  return false
})()

export function prefixStyle(style) {
  /* istanbul ignore if */
  if (vendor === false) {
    return false
  }

  if (vendor === 'standard') {
    if (style === 'transitionEnd') {
      return 'transitionend'
    }
    return style
  }

  return vendor + style.charAt(0).toUpperCase() + style.substr(1)
}

export function getMatchedTarget(e, targetClassName) {
  let el = e.target

  while (el && !hasClass(el, targetClassName)) {
    if (el === e.currentTarget) return null
    el = el.parentNode
  }

  return el
}

export function dispatchEvent(ele, name, { type = 'Event', bubbles = true, cancelable = true } = {}) {
  const e = document.createEvent(type)
  e.initEvent(name, bubbles, cancelable)
  ele.dispatchEvent(e)
}
