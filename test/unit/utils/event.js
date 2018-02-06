export function createEvent (type, name) {
  const e = document.createEvent(type || 'Event')
  e.initEvent(name, true, true)
  return e
}

export function dispatchClick (target, props) {
  const event = createEvent('', 'click')
  Object.assign(event, props)
  target.dispatchEvent(event)
}

export function dispatchMouse (target, name = 'mousedown') {
  const event = createEvent('', name)
  const domRect = target.getBoundingClientRect()
  event.clientX = domRect.left
  event.clientY = domRect.top
  target.dispatchEvent(event)
}

export function dispatchTouch (target, name = 'touchstart', touches) {
  const event = createEvent('', name)
  event.touches = event.targetTouches = event.changedTouches = Array.isArray(touches) ? touches : [touches]
  target.dispatchEvent(event)
}

export function dispatchTouchStart (target, touches) {
  dispatchTouch(target, 'touchstart', touches)
}

export function dispatchTouchMove (target, touches) {
  dispatchTouch(target, 'touchmove', touches)
}

export function dispatchTouchEnd (target, touches) {
  dispatchTouch(target, 'touchend', touches)
}

export function dispatchSwipe (target, touches, duration, cb) {
  if (!Array.isArray(touches)) {
    touches = [touches]
  }
  dispatchTouchStart(target, touches[0])
  const moveAndEnd = () => {
    dispatchTouchMove(target, touches[1] || touches[0])
    dispatchTouchEnd(target, touches[2] || touches[1] || touches[0])
    cb && cb()
  }
  if (duration) {
    setTimeout(moveAndEnd, duration)
  } else {
    moveAndEnd()
  }
}
