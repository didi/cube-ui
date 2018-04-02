export function createEvent(type, name) {
  const e = document.createEvent(type || 'Event')
  e.initEvent(name, true, true)
  return e
}

export function dispatchClick(target, props) {
  const event = createEvent('', 'click')
  Object.assign(event, props)
  target.dispatchEvent(event)
}

export function dispatchTap(target) {
  const touch = {
    pageX: target.offsetLeft + 1,
    pageY: target.offsetTop + 1
  }
  dispatchTouchStart(target, touch)
  dispatchTouchEnd(target, touch)
}

export function dispatchMouse (target, name = 'mousedown') {
  const event = createEvent('', name)
  const domRect = target.getBoundingClientRect()
  event.clientX = domRect.left + 1
  event.clientY = domRect.top + 1
  target.dispatchEvent(event)
}

export function dispatchTouch(target, name = 'touchstart', touches) {
  const event = createEvent('', name)
  event.touches = event.targetTouches = event.changedTouches = Array.isArray(touches) ? touches : [touches]
  target.dispatchEvent(event)
}

export function dispatchTouchStart(target, touches) {
  dispatchTouch(target, 'touchstart', touches)
}

export function dispatchTouchMove(target, touches) {
  dispatchTouch(target, 'touchmove', touches)
}

export function dispatchTouchEnd(target, touches) {
  dispatchTouch(target, 'touchend', touches)
}

export function dispatchSwipe(target, touches, duration, cb) {
  if (!Array.isArray(touches)) {
    touches = [touches]
  }
  dispatchTouchStart(target, touches[0])
  const moveAndEnd = () => {
    if (touches.length > 1) {
      for (let i = 1; i < touches.length; i++) {
        dispatchTouchMove(target, touches[i])
      }
    } else {
      dispatchTouchMove(target, touches[0])
    }
    dispatchTouchEnd(target, touches[touches.length - 1])
    cb && cb()
  }
  if (duration) {
    setTimeout(moveAndEnd, duration)
  } else {
    moveAndEnd()
  }
}
