import "./css.mjs";
import { openBlock as m, createElementBlock as v, createElementVNode as w, normalizeStyle as bt, Fragment as F, renderList as V, resolveComponent as q, renderSlot as D, toDisplayString as R, createVNode as K, createCommentVNode as st, withDirectives as N, vShow as O, normalizeClass as qt, createBlock as jt, createSlots as ie, withCtx as ut, createTextVNode as Et, withModifiers as se } from "vue";
const xt = typeof window < "u", j = xt && navigator.userAgent.toLowerCase();
j && j.indexOf("android") > 0;
const oe = j && /iphone|ipad|ipod|ios/.test(j);
function St(e, t) {
  return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
}
function ne(e, t) {
  if (St(e, t))
    return;
  const i = e.className.split(" ");
  i.push(t), e.className = i.join(" ");
}
function re(e, t) {
  if (!St(e, t))
    return;
  const i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
  e.className = e.className.replace(i, " ");
}
function le(e, t) {
  const i = "data-";
  return e.getAttribute(i + t);
}
function L(e) {
  return {
    top: e.offsetTop,
    left: e.offsetLeft,
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
let pt = (() => {
  if (!xt)
    return !1;
  let e = document.createElement("div").style, t = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let i in t)
    if (e[t[i]] !== void 0)
      return i;
  return !1;
})();
function he(e) {
  return pt === !1 ? !1 : pt === "standard" ? e === "transitionEnd" ? "transitionend" : e : pt + e.charAt(0).toUpperCase() + e.substr(1);
}
function ae(e, t) {
  let i = e.target;
  for (; i && !St(i, t); ) {
    if (i === e.currentTarget)
      return null;
    i = i.parentNode;
  }
  return i;
}
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var ce = function() {
  function e(t, i) {
    var s = [], n = !0, o = !1, r = void 0;
    try {
      for (var h = t[Symbol.iterator](), l; !(n = (l = h.next()).done) && (s.push(l.value), !(i && s.length === i)); n = !0)
        ;
    } catch (a) {
      o = !0, r = a;
    } finally {
      try {
        !n && h.return && h.return();
      } finally {
        if (o)
          throw r;
      }
    }
    return s;
  }
  return function(t, i) {
    if (Array.isArray(t))
      return t;
    if (Symbol.iterator in Object(t))
      return e(t, i);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), ue = function(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++)
      i[t] = e[t];
    return i;
  } else
    return Array.from(e);
};
function pe(e) {
  e.prototype.on = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    this._events[t] || (this._events[t] = []), this._events[t].push([i, s]);
  }, e.prototype.once = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    function n() {
      this.off(t, n), i.apply(s, arguments);
    }
    n.fn = i, this.on(t, n);
  }, e.prototype.off = function(t, i) {
    var s = this._events[t];
    if (s)
      for (var n = s.length; n--; )
        (s[n][0] === i || s[n][0] && s[n][0].fn === i) && (s[n][0] = void 0);
  }, e.prototype.trigger = function(t) {
    var i = this._events[t];
    if (i)
      for (var s = i.length, n = [].concat(ue(i)), o = 0; o < s; o++) {
        var r = n[o], h = ce(r, 2), l = h[0], a = h[1];
        l && l.apply(a, [].slice.call(arguments, 1));
      }
  };
}
var X = typeof window < "u", ot = X && navigator.userAgent.toLowerCase(), de = ot && /wechatdevtools/.test(ot), fe = ot && ot.indexOf("android") > 0;
function M() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function G(e) {
  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    i[s - 1] = arguments[s];
  for (var n = 0; n < i.length; n++) {
    var o = i[n];
    for (var r in o)
      e[r] = o[r];
  }
  return e;
}
function J(e) {
  return e == null;
}
function Mt(e, t) {
  return Math.sqrt(e * e + t * t);
}
var Pt = X && document.createElement("div").style, dt = function() {
  if (!X)
    return !1;
  var e = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  };
  for (var t in e)
    if (Pt[e[t]] !== void 0)
      return t;
  return !1;
}();
function Y(e) {
  return dt === !1 ? !1 : dt === "standard" ? e === "transitionEnd" ? "transitionend" : e : dt + e.charAt(0).toUpperCase() + e.substr(1);
}
function ht(e, t, i, s) {
  e.addEventListener(t, i, { passive: !1, capture: !!s });
}
function at(e, t, i, s) {
  e.removeEventListener(t, i, { passive: !1, capture: !!s });
}
function Gt(e) {
  for (var t = 0, i = 0; e; )
    t -= e.offsetLeft, i -= e.offsetTop, e = e.offsetParent;
  return {
    left: t,
    top: i
  };
}
function wt(e) {
  var t = e.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var Zt = Y("transform"), me = X && Y("perspective") in Pt, _t = X && ("ontouchstart" in window || de), ge = Zt !== !1, ve = X && Y("transition") in Pt, x = {
  transform: Zt,
  transitionTimingFunction: Y("transitionTimingFunction"),
  transitionDuration: Y("transitionDuration"),
  transitionDelay: Y("transitionDelay"),
  transformOrigin: Y("transformOrigin"),
  transitionEnd: Y("transitionEnd")
}, Q = 1, ft = 2, $ = {
  touchstart: Q,
  touchmove: Q,
  touchend: Q,
  mousedown: ft,
  mousemove: ft,
  mouseup: ft
};
function C(e) {
  if (e instanceof window.SVGElement) {
    var t = e.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      width: t.width,
      height: t.height
    };
  } else
    return {
      top: e.offsetTop,
      left: e.offsetLeft,
      width: e.offsetWidth,
      height: e.offsetHeight
    };
}
function B(e, t) {
  for (var i in t)
    if (t[i].test(e[i]))
      return !0;
  return !1;
}
function ye(e, t) {
  var i = document.createEvent("Event");
  i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i);
}
function Kt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click", i = void 0;
  e.type === "mouseup" || e.type === "mousecancel" ? i = e : (e.type === "touchend" || e.type === "touchcancel") && (i = e.changedTouches[0]);
  var s = {};
  i && (s.screenX = i.screenX || 0, s.screenY = i.screenY || 0, s.clientX = i.clientX || 0, s.clientY = i.clientY || 0);
  var n = void 0, o = !0, r = !0;
  if (typeof MouseEvent < "u")
    try {
      n = new MouseEvent(t, G({
        bubbles: o,
        cancelable: r
      }, s));
    } catch {
      h();
    }
  else
    h();
  function h() {
    n = document.createEvent("Event"), n.initEvent(t, o, r), G(n, s);
  }
  n.forwardedTouchEvent = !0, n._constructed = !0, e.target.dispatchEvent(n);
}
function we(e) {
  Kt(e, "dblclick");
}
function _e(e, t) {
  t.firstChild ? Te(e, t.firstChild) : t.appendChild(e);
}
function Te(e, t) {
  t.parentNode.insertBefore(e, t);
}
function Yt(e, t) {
  e.removeChild(t);
}
var be = {
  startX: 0,
  startY: 0,
  scrollX: !1,
  scrollY: !0,
  freeScroll: !1,
  directionLockThreshold: 5,
  eventPassthrough: "",
  click: !1,
  tap: !1,
  /**
   * support any side
   * bounce: {
   *   top: true,
   *   bottom: true,
   *   left: true,
   *   right: true
   * }
   */
  bounce: !0,
  bounceTime: 800,
  momentum: !0,
  momentumLimitTime: 300,
  momentumLimitDistance: 15,
  swipeTime: 2500,
  swipeBounceTime: 500,
  deceleration: 15e-4,
  flickLimitTime: 200,
  flickLimitDistance: 100,
  resizePolling: 60,
  probeType: 0,
  preventDefault: !0,
  preventDefaultException: {
    tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT)$/
  },
  HWCompositing: !0,
  useTransition: !0,
  useTransform: !0,
  bindToWrapper: !1,
  disableMouse: _t,
  disableTouch: !_t,
  observeDOM: !0,
  autoBlur: !0,
  /**
   * for picker
   * wheel: {
   *   selectedIndex: 0,
   *   rotate: 25,
   *   adjustTime: 400
   *   wheelWrapperClass: 'wheel-scroll',
   *   wheelItemClass: 'wheel-item'
   * }
   */
  wheel: !1,
  /**
   * for slide
   * snap: {
   *   loop: false,
   *   el: domEl,
   *   threshold: 0.1,
   *   stepX: 100,
   *   stepY: 100,
   *   speed: 400,
   *   easing: {
   *     style: 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
   *     fn: function (t) {
   *       return t * (2 - t)
   *     }
   *   }
   *   listenFlick: true
   * }
   */
  snap: !1,
  /**
   * for scrollbar
   * scrollbar: {
   *   fade: true,
   *   interactive: false
   * }
   */
  scrollbar: !1,
  /**
   * for pull down and refresh
   * pullDownRefresh: {
   *   threshold: 50,
   *   stop: 20
   * }
   */
  pullDownRefresh: !1,
  /**
   * for pull up and load
   * pullUpLoad: {
   *   threshold: 50
   * }
   */
  pullUpLoad: !1,
  /**
   * for mouse wheel
   * mouseWheel: {
   *   speed: 20,
   *   invert: false,
   *   easeTime: 300
   * }
   */
  mouseWheel: !1,
  stopPropagation: !1,
  /**
   * for zoom
   * zoom: {
   *   start: 1,
   *   min: 1,
   *   max: 4
   * }
   */
  zoom: !1,
  /**
   * for infinity
   * infinity: {
   *   render(item, div) {
   *   },
   *   createTombstone() {
   *   },
   *   fetch(count) {
   *   }
   * }
   */
  infinity: !1,
  /**
   * for double click
   * dblclick: {
   *   delay: 300
   * }
   */
  dblclick: !1
};
function xe(e) {
  e.prototype._init = function(t, i) {
    this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }, e.prototype.setScale = function(t) {
    this.lastScale = J(this.scale) ? t : this.scale, this.scale = t;
  }, e.prototype._handleOptions = function(t) {
    this.options = G({}, be, t), this.translateZ = this.options.HWCompositing && me ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && ve, this.options.useTransform = this.options.useTransform && ge, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = this.options.eventPassthrough === "horizontal" ? !1 : this.options.scrollX, this.options.scrollY = this.options.eventPassthrough === "vertical" ? !1 : this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.tap === !0 && (this.options.tap = "tap");
  }, e.prototype._addDOMEvents = function() {
    var t = ht;
    this._handleDOMEvents(t);
  }, e.prototype._removeDOMEvents = function() {
    var t = at;
    this._handleDOMEvents(t);
  }, e.prototype._handleDOMEvents = function(t) {
    var i = this.options.bindToWrapper ? this.wrapper : window;
    t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), _t && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, x.transitionEnd, this);
  }, e.prototype._initExtFeatures = function() {
    this.options.snap && this._initSnap(), this.options.scrollbar && this._initScrollbar(), this.options.pullUpLoad && this._initPullUp(), this.options.pullDownRefresh && this._initPullDown(), this.options.wheel && this._initWheel(), this.options.mouseWheel && this._initMouseWheel(), this.options.zoom && this._initZoom(), this.options.infinity && this._initInfinite();
  }, e.prototype._watchTransition = function() {
    if (typeof Object.defineProperty == "function") {
      var t = this, i = !1, s = this.useTransition ? "isInTransition" : "isAnimating";
      Object.defineProperty(this, s, {
        get: function() {
          return i;
        },
        set: function(o) {
          i = o;
          for (var r = t.scroller.children.length ? t.scroller.children : [t.scroller], h = i && !t.pulling ? "none" : "auto", l = 0; l < r.length; l++)
            r[l].style.pointerEvents = h;
        }
      });
    }
  }, e.prototype._handleAutoBlur = function() {
    this.on("scrollStart", function() {
      var t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur();
    });
  }, e.prototype._initDOMObserver = function() {
    var t = this;
    if (typeof MutationObserver < "u") {
      var i = void 0, s = new MutationObserver(function(o) {
        if (!t._shouldNotRefresh()) {
          for (var r = !1, h = !1, l = 0; l < o.length; l++) {
            var a = o[l];
            if (a.type !== "attributes") {
              r = !0;
              break;
            } else if (a.target !== t.scroller) {
              h = !0;
              break;
            }
          }
          r ? t.refresh() : h && (clearTimeout(i), i = setTimeout(function() {
            t._shouldNotRefresh() || t.refresh();
          }, 60));
        }
      }), n = {
        attributes: !0,
        childList: !0,
        subtree: !0
      };
      s.observe(this.scroller, n), this.on("destroy", function() {
        s.disconnect();
      });
    } else
      this._checkDOMUpdate();
  }, e.prototype._shouldNotRefresh = function() {
    var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
    return this.isInTransition || this.stopFromTransition || t;
  }, e.prototype._checkDOMUpdate = function() {
    var t = C(this.scroller), i = t.width, s = t.height;
    function n() {
      if (!this.destroyed) {
        t = C(this.scroller);
        var r = t.width, h = t.height;
        (i !== r || s !== h) && this.refresh(), i = r, s = h, o.call(this);
      }
    }
    function o() {
      var r = this;
      setTimeout(function() {
        n.call(r);
      }, 1e3);
    }
    o.call(this);
  }, e.prototype.handleEvent = function(t) {
    switch (t.type) {
      case "touchstart":
      case "mousedown":
        this._start(t), this.options.zoom && t.touches && t.touches.length > 1 && this._zoomStart(t);
        break;
      case "touchmove":
      case "mousemove":
        this.options.zoom && t.touches && t.touches.length > 1 ? this._zoom(t) : this._move(t);
        break;
      case "touchend":
      case "mouseup":
      case "touchcancel":
      case "mousecancel":
        this.scaled ? this._zoomEnd(t) : this._end(t);
        break;
      case "orientationchange":
      case "resize":
        this._resize();
        break;
      case "transitionend":
      case "webkitTransitionEnd":
      case "oTransitionEnd":
      case "MSTransitionEnd":
        this._transitionEnd(t);
        break;
      case "click":
        this.enabled && !t._constructed && (B(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._onMouseWheel(t);
        break;
    }
  }, e.prototype.refresh = function() {
    var t = window.getComputedStyle(this.wrapper, null).position === "static", i = C(this.wrapper);
    this.wrapperWidth = i.width, this.wrapperHeight = i.height;
    var s = C(this.scroller);
    this.scrollerWidth = Math.round(s.width * this.scale), this.scrollerHeight = Math.round(s.height * this.scale), this.relativeX = s.left, this.relativeY = s.top, t && (this.relativeX -= i.left, this.relativeY -= i.top), this.minScrollX = 0, this.minScrollY = 0;
    var n = this.options.wheel;
    n ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, this.selectedIndex === void 0 && (this.selectedIndex = n.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = Gt(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition();
  }, e.prototype.enable = function() {
    this.enabled = !0;
  }, e.prototype.disable = function() {
    this.enabled = !1;
  };
}
var b = {
  // easeOutQuint
  swipe: {
    style: "cubic-bezier(0.23, 1, 0.32, 1)",
    fn: function(t) {
      return 1 + --t * t * t * t * t;
    }
  },
  // easeOutQuard
  swipeBounce: {
    style: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
    fn: function(t) {
      return t * (2 - t);
    }
  },
  // easeOutQuart
  bounce: {
    style: "cubic-bezier(0.165, 0.84, 0.44, 1)",
    fn: function(t) {
      return 1 - --t * t * t * t;
    }
  }
};
function Xt(e, t, i, s, n, o, r) {
  var h = e - t, l = Math.abs(h) / i, a = r.deceleration, p = r.itemHeight, u = r.swipeBounceTime, f = r.wheel, d = r.swipeTime, c = d, g = f ? 4 : 15, T = e + l / a * (h < 0 ? -1 : 1);
  return f && p && (T = Math.round(T / p) * p), T < s ? (T = o ? Math.max(s - o / 4, s - o / g * l) : s, c = u) : T > n && (T = o ? Math.min(n + o / 4, n + o / g * l) : n, c = u), {
    destination: Math.round(T),
    duration: c
  };
}
var Se = 100 / 60;
function Jt() {
}
var mt = function() {
  return X ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(e) {
    return window.setTimeout(e, (e.interval || Se) / 2);
  } : Jt;
}(), I = function() {
  return X ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(e) {
    window.clearTimeout(e);
  } : Jt;
}(), A = 1, tt = -1, gt = 1, vt = -1, It = 1, W = 3;
function nt(e) {
  console.error("[BScroll warn]: " + e);
}
function et(e, t) {
  if (!e)
    throw new Error("[BScroll] " + t);
}
function Pe(e) {
  e.prototype._start = function(t) {
    var i = $[t.type];
    if (!(i !== Q && t.button !== 0) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
      this.initiated = i, this.options.preventDefault && !B(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = M(), this.options.wheel && (this.target = t.target), this.stop();
      var s = t.touches ? t.touches[0] : t;
      this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = s.pageX, this.pointY = s.pageY, this.trigger("beforeScrollStart");
    }
  }, e.prototype._move = function(t) {
    if (!(!this.enabled || this.destroyed || $[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches ? t.touches[0] : t, s = i.pageX - this.pointX, n = i.pageY - this.pointY;
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX += s, this.distY += n;
      var o = Math.abs(this.distX), r = Math.abs(this.distY), h = M();
      if (!(h - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && o < this.options.momentumLimitDistance)) {
        if (!this.directionLocked && !this.options.freeScroll && (o > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= o + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), this.directionLocked === "h") {
          if (this.options.eventPassthrough === "vertical")
            t.preventDefault();
          else if (this.options.eventPassthrough === "horizontal") {
            this.initiated = !1;
            return;
          }
          n = 0;
        } else if (this.directionLocked === "v") {
          if (this.options.eventPassthrough === "horizontal")
            t.preventDefault();
          else if (this.options.eventPassthrough === "vertical") {
            this.initiated = !1;
            return;
          }
          s = 0;
        }
        s = this.hasHorizontalScroll ? s : 0, n = this.hasVerticalScroll ? n : 0, this.movingDirectionX = s > 0 ? vt : s < 0 ? gt : 0, this.movingDirectionY = n > 0 ? tt : n < 0 ? A : 0;
        var l = this.x + s, a = this.y + n, p = !1, u = !1, f = !1, d = !1, c = this.options.bounce;
        c !== !1 && (p = c.top === void 0 ? !0 : c.top, u = c.bottom === void 0 ? !0 : c.bottom, f = c.left === void 0 ? !0 : c.left, d = c.right === void 0 ? !0 : c.right), (l > this.minScrollX || l < this.maxScrollX) && (l > this.minScrollX && f || l < this.maxScrollX && d ? l = this.x + s / 3 : l = l > this.minScrollX ? this.minScrollX : this.maxScrollX), (a > this.minScrollY || a < this.maxScrollY) && (a > this.minScrollY && p || a < this.maxScrollY && u ? a = this.y + n / 3 : a = a > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(l, a), h - this.startTime > this.options.momentumLimitTime && (this.startTime = h, this.startX = this.x, this.startY = this.y, this.options.probeType === It && this.trigger("scroll", {
          x: this.x,
          y: this.y
        })), this.options.probeType > It && this.trigger("scroll", {
          x: this.x,
          y: this.y
        });
        var g = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, T = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, E = this.pointX - g, P = this.pointY - T;
        (E > document.documentElement.clientWidth - this.options.momentumLimitDistance || E < this.options.momentumLimitDistance || P < this.options.momentumLimitDistance || P > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
      }
    }
  }, e.prototype._end = function(t) {
    if (!(!this.enabled || this.destroyed || $[t.type] !== this.initiated)) {
      this.initiated = !1, this.options.preventDefault && !B(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), this.isInTransition = !1;
      var i = Math.round(this.x), s = Math.round(this.y), n = i - this.absStartX, o = s - this.absStartY;
      if (this.directionX = n > 0 ? vt : n < 0 ? gt : 0, this.directionY = o > 0 ? tt : o < 0 ? A : 0, !(this.options.pullDownRefresh && this._checkPullDown())) {
        if (this._checkClick(t)) {
          this.trigger("scrollCancel");
          return;
        }
        if (!this.resetPosition(this.options.bounceTime, b.bounce)) {
          this._translate(i, s), this.endTime = M();
          var r = this.endTime - this.startTime, h = Math.abs(i - this.startX), l = Math.abs(s - this.startY);
          if (this._events.flick && r < this.options.flickLimitTime && h < this.options.flickLimitDistance && l < this.options.flickLimitDistance) {
            this.trigger("flick");
            return;
          }
          var a = 0;
          if (this.options.momentum && r < this.options.momentumLimitTime && (l > this.options.momentumLimitDistance || h > this.options.momentumLimitDistance)) {
            var p = !1, u = !1, f = !1, d = !1, c = this.options.bounce;
            c !== !1 && (p = c.top === void 0 ? !0 : c.top, u = c.bottom === void 0 ? !0 : c.bottom, f = c.left === void 0 ? !0 : c.left, d = c.right === void 0 ? !0 : c.right);
            var g = this.directionX === vt && f || this.directionX === gt && d ? this.wrapperWidth : 0, T = this.directionY === tt && p || this.directionY === A && u ? this.wrapperHeight : 0, E = this.hasHorizontalScroll ? Xt(this.x, this.startX, r, this.maxScrollX, this.minScrollX, g, this.options) : { destination: i, duration: 0 }, P = this.hasVerticalScroll ? Xt(this.y, this.startY, r, this.maxScrollY, this.minScrollY, T, this.options) : { destination: s, duration: 0 };
            i = E.destination, s = P.destination, a = Math.max(E.duration, P.duration), this.isInTransition = !0;
          } else
            this.options.wheel && (s = Math.round(s / this.itemHeight) * this.itemHeight, a = this.options.wheel.adjustTime || 400);
          var ct = b.swipe;
          if (this.options.snap) {
            var k = this._nearestSnap(i, s);
            this.currentPage = k, a = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - k.x), 1e3), Math.min(Math.abs(s - k.y), 1e3)), 300), i = k.x, s = k.y, this.directionX = 0, this.directionY = 0, ct = this.options.snap.easing || b.bounce;
          }
          if (i !== this.x || s !== this.y) {
            (i > this.minScrollX || i < this.maxScrollX || s > this.minScrollY || s < this.maxScrollY) && (ct = b.swipeBounce), this.scrollTo(i, s, a, ct);
            return;
          }
          this.options.wheel && (this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight))), this.trigger("scrollEnd", {
            x: this.x,
            y: this.y
          });
        }
      }
    }
  }, e.prototype._checkClick = function(t) {
    var i = this.stopFromTransition && !this.pulling;
    if (this.stopFromTransition = !1, !this.moved)
      if (this.options.wheel) {
        if (this.target && this.target.classList.contains(this.options.wheel.wheelWrapperClass)) {
          var s = Math.abs(Math.round(this.y / this.itemHeight)), n = Math.round((this.pointY + wt(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[s + n];
        }
        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, b.swipe), !0;
      } else {
        if (!i) {
          var o = this.options.dblclick, r = !1;
          if (o && this.lastClickTime) {
            var h = o.delay, l = h === void 0 ? 300 : h;
            M() - this.lastClickTime < l && (r = !0, we(t));
          }
          return this.options.tap && ye(t, this.options.tap), this.options.click && !B(t.target, this.options.preventDefaultException) && Kt(t), this.lastClickTime = r ? null : M(), !0;
        }
        return !1;
      }
    return !1;
  }, e.prototype._resize = function() {
    var t = this;
    this.enabled && (fe && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
      t.refresh();
    }, this.options.resizePolling));
  }, e.prototype._startProbe = function() {
    I(this.probeTimer), this.probeTimer = mt(i);
    var t = this;
    function i() {
      var s = t.getComputedPosition();
      if (t.trigger("scroll", s), !t.isInTransition) {
        t.trigger("scrollEnd", s);
        return;
      }
      t.probeTimer = mt(i);
    }
  }, e.prototype._transitionTime = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (this.scrollerStyle[x.transitionDuration] = t + "ms", this.options.wheel)
      for (var i = 0; i < this.items.length; i++)
        this.items[i].style[x.transitionDuration] = t + "ms";
    if (this.indicators)
      for (var s = 0; s < this.indicators.length; s++)
        this.indicators[s].transitionTime(t);
  }, e.prototype._transitionTimingFunction = function(t) {
    if (this.scrollerStyle[x.transitionTimingFunction] = t, this.options.wheel)
      for (var i = 0; i < this.items.length; i++)
        this.items[i].style[x.transitionTimingFunction] = t;
    if (this.indicators)
      for (var s = 0; s < this.indicators.length; s++)
        this.indicators[s].transitionTimingFunction(t);
  }, e.prototype._transitionEnd = function(t) {
    if (!(t.target !== this.scroller || !this.isInTransition)) {
      this._transitionTime();
      var i = !this.pulling || this.movingDirectionY === A;
      i && !this.resetPosition(this.options.bounceTime, b.bounce) && (this.isInTransition = !1, this.options.probeType !== W && this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }
  }, e.prototype._translate = function(t, i, s) {
    if (et(!J(t) && !J(i), "Translate x or y is null or undefined."), J(s) && (s = this.scale), this.options.useTransform ? this.scrollerStyle[x.transform] = "translate(" + t + "px," + i + "px) scale(" + s + ")" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel)
      for (var n = this.options.wheel.rotate, o = n === void 0 ? 25 : n, r = 0; r < this.items.length; r++) {
        var h = o * (i / this.itemHeight + r);
        this.items[r].style[x.transform] = "rotateX(" + h + "deg)";
      }
    if (this.x = t, this.y = i, this.setScale(s), this.indicators)
      for (var l = 0; l < this.indicators.length; l++)
        this.indicators[l].updatePosition();
  }, e.prototype._animate = function(t, i, s, n) {
    var o = this, r = this.x, h = this.y, l = this.lastScale, a = this.scale, p = M(), u = p + s;
    function f() {
      var d = M();
      if (d >= u) {
        o.isAnimating = !1, o._translate(t, i, a), o.trigger("scroll", {
          x: o.x,
          y: o.y
        }), !o.pulling && !o.resetPosition(o.options.bounceTime) && o.trigger("scrollEnd", {
          x: o.x,
          y: o.y
        });
        return;
      }
      d = (d - p) / s;
      var c = n(d), g = (t - r) * c + r, T = (i - h) * c + h, E = (a - l) * c + l;
      o._translate(g, T, E), o.isAnimating && (o.animateTimer = mt(f)), o.options.probeType === W && o.trigger("scroll", {
        x: o.x,
        y: o.y
      });
    }
    this.isAnimating = !0, I(this.animateTimer), f();
  }, e.prototype.scrollBy = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : b.bounce;
    t = this.x + t, i = this.y + i, this.scrollTo(t, i, s, n);
  }, e.prototype.scrollTo = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : b.bounce;
    this.isInTransition = this.options.useTransition && s > 0 && (t !== this.x || i !== this.y), !s || this.options.useTransition ? (this._transitionTimingFunction(n.style), this._transitionTime(s), this._translate(t, i), s && this.options.probeType === W && this._startProbe(), !s && (t !== this.x || i !== this.y) && (this.trigger("scroll", {
      x: t,
      y: i
    }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, b.bounce) || this.trigger("scrollEnd", {
      x: t,
      y: i
    })), this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, s, n.fn);
  }, e.prototype.scrollToElement = function(t, i, s, n, o) {
    if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !(this.options.wheel && !t.classList.contains(this.options.wheel.wheelItemClass)))) {
      var r = Gt(t);
      r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= n || 0, r.left = r.left > this.minScrollX ? this.minScrollX : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > this.minScrollY ? this.minScrollY : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, i, o);
    }
  }, e.prototype.resetPosition = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b.bounce, s = this.x, n = Math.round(s);
    !this.hasHorizontalScroll || n > this.minScrollX ? s = this.minScrollX : n < this.maxScrollX && (s = this.maxScrollX);
    var o = this.y, r = Math.round(o);
    return !this.hasVerticalScroll || r > this.minScrollY ? o = this.minScrollY : r < this.maxScrollY && (o = this.maxScrollY), s === this.x && o === this.y ? !1 : (this.scrollTo(s, o, t, i), !0);
  }, e.prototype.getComputedPosition = function() {
    var t = window.getComputedStyle(this.scroller, null), i = void 0, s = void 0;
    return this.options.useTransform ? (t = t[x.transform].split(")")[0].split(", "), i = +(t[12] || t[4]), s = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), s = +t.top.replace(/[^-\d.]/g, "")), {
      x: i,
      y: s
    };
  }, e.prototype.stop = function() {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = !1, I(this.probeTimer);
      var t = this.getComputedPosition();
      this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0;
    } else
      !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, I(this.animateTimer), this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0);
  }, e.prototype.destroy = function() {
    this.destroyed = !0, this.trigger("destroy"), this.options.useTransition ? I(this.probeTimer) : I(this.animateTimer), this._removeDOMEvents(), this._events = {};
  };
}
function De(e) {
  e.prototype._initSnap = function() {
    var t = this;
    this.currentPage = {};
    var i = this.options.snap;
    if (i.loop) {
      var s = this.scroller.children;
      s.length > 1 ? (_e(s[s.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(s[1].cloneNode(!0))) : i.loop = !1;
    }
    var n = i.el;
    typeof n == "string" && (n = this.scroller.querySelectorAll(n)), this.on("refresh", function() {
      if (t.pages = [], !(!t.wrapperWidth || !t.wrapperHeight || !t.scrollerWidth || !t.scrollerHeight)) {
        var o = i.stepX || t.wrapperWidth, r = i.stepY || t.wrapperHeight, h = 0, l = void 0, a = void 0, p = void 0, u = 0, f = void 0, d = 0, c = void 0, g = void 0;
        if (n)
          for (f = n.length, c = -1; u < f; u++)
            g = C(n[u]), (u === 0 || g.left <= C(n[u - 1]).left) && (d = 0, c++), t.pages[d] || (t.pages[d] = []), h = Math.max(-g.left, t.maxScrollX), l = Math.max(-g.top, t.maxScrollY), a = h - Math.round(g.width / 2), p = l - Math.round(g.height / 2), t.pages[d][c] = {
              x: h,
              y: l,
              width: g.width,
              height: g.height,
              cx: a,
              cy: p
            }, h > t.maxScrollX && d++;
        else
          for (a = Math.round(o / 2), p = Math.round(r / 2); h > -t.scrollerWidth; ) {
            for (t.pages[u] = [], f = 0, l = 0; l > -t.scrollerHeight; )
              t.pages[u][f] = {
                x: Math.max(h, t.maxScrollX),
                y: Math.max(l, t.maxScrollY),
                width: o,
                height: r,
                cx: h - a,
                cy: l - p
              }, l -= r, f++;
            h -= o, u++;
          }
        t._checkSnapLoop();
        var T = i._loopX ? 1 : 0, E = i._loopY ? 1 : 0;
        t._goToPage(t.currentPage.pageX || T, t.currentPage.pageY || E, 0);
        var P = i.threshold;
        P % 1 === 0 ? (t.snapThresholdX = P, t.snapThresholdY = P) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * P), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * P));
      }
    }), this.on("scrollEnd", function() {
      i.loop && (i._loopX ? (t.currentPage.pageX === 0 && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (t.currentPage.pageY === 0 && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)));
    }), i.listenFlick !== !1 && this.on("flick", function() {
      var o = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
      t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, o);
    }), this.on("destroy", function() {
      if (i.loop) {
        var o = t.scroller.children;
        o.length > 2 && (Yt(t.scroller, o[o.length - 1]), Yt(t.scroller, o[0]));
      }
    });
  }, e.prototype._checkSnapLoop = function() {
    var t = this.options.snap;
    !t.loop || !this.pages || !this.pages.length || (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && nt("Loop does not support two direction at the same time."));
  }, e.prototype._nearestSnap = function(t, i) {
    if (!this.pages.length)
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    var s = 0;
    if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(i - this.absStartY) <= this.snapThresholdY)
      return this.currentPage;
    t > this.minScrollX ? t = this.minScrollX : t < this.maxScrollX && (t = this.maxScrollX), i > this.minScrollY ? i = this.minScrollY : i < this.maxScrollY && (i = this.maxScrollY);
    for (var n = this.pages.length; s < n; s++)
      if (t >= this.pages[s][0].cx) {
        t = this.pages[s][0].x;
        break;
      }
    n = this.pages[s].length;
    for (var o = 0; o < n; o++)
      if (i >= this.pages[0][o].cy) {
        i = this.pages[0][o].y;
        break;
      }
    return s === this.currentPage.pageX && (s += this.directionX, s < 0 ? s = 0 : s >= this.pages.length && (s = this.pages.length - 1), t = this.pages[s][0].x), o === this.currentPage.pageY && (o += this.directionY, o < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), i = this.pages[0][o].y), {
      x: t,
      y: i,
      pageX: s,
      pageY: o
    };
  }, e.prototype._goToPage = function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments[2], n = arguments[3], o = this.options.snap;
    if (!(!o || !this.pages || !this.pages.length) && (n = n || o.easing || b.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), !!this.pages[t])) {
      i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
      var r = this.pages[t][i].x, h = this.pages[t][i].y;
      s = s === void 0 ? o.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(h - this.y), 1e3)), 300) : s, this.currentPage = {
        x: r,
        y: h,
        pageX: t,
        pageY: i
      }, this.scrollTo(r, h, s, n);
    }
  }, e.prototype.goToPage = function(t, i, s, n) {
    var o = this.options.snap;
    if (!(!o || !this.pages || !this.pages.length)) {
      if (o.loop) {
        var r = void 0;
        o._loopX ? (r = this.pages.length - 2, t >= r ? t = r - 1 : t < 0 && (t = 0), t += 1) : (r = this.pages[0].length - 2, i >= r ? i = r - 1 : i < 0 && (i = 0), i += 1);
      }
      this._goToPage(t, i, s, n);
    }
  }, e.prototype.next = function(t, i) {
    var s = this.options.snap;
    if (s) {
      var n = this.currentPage.pageX, o = this.currentPage.pageY;
      n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, o++), this._goToPage(n, o, t, i);
    }
  }, e.prototype.prev = function(t, i) {
    var s = this.options.snap;
    if (s) {
      var n = this.currentPage.pageX, o = this.currentPage.pageY;
      n--, n < 0 && this.hasVerticalScroll && (n = 0, o--), this._goToPage(n, o, t, i);
    }
  }, e.prototype.getCurrentPage = function() {
    var t = this.options.snap;
    if (!t)
      return null;
    if (t.loop) {
      var i = void 0;
      return t._loopX ? i = G({}, this.currentPage, {
        pageX: this.currentPage.pageX - 1
      }) : i = G({}, this.currentPage, {
        pageY: this.currentPage.pageY - 1
      }), i;
    }
    return this.currentPage;
  };
}
function Ee(e) {
  e.prototype.wheelTo = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y));
  }, e.prototype.getSelectedIndex = function() {
    return this.options.wheel && this.selectedIndex;
  }, e.prototype._initWheel = function() {
    var t = this.options.wheel;
    t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"), t.wheelItemClass || (t.wheelItemClass = "wheel-item"), t.selectedIndex === void 0 && (t.selectedIndex = 0, nt("wheel option selectedIndex is required!"));
  };
}
var H = 8;
function Me(e) {
  e.prototype._initScrollbar = function() {
    var t = this, i = this.options.scrollbar, s = i.fade, n = s === void 0 ? !0 : s, o = i.interactive, r = o === void 0 ? !1 : o;
    this.indicators = [];
    var h = void 0;
    this.options.scrollX && (h = {
      el: Lt("horizontal"),
      direction: "horizontal",
      fade: n,
      interactive: r
    }, this._insertScrollBar(h.el), this.indicators.push(new y(this, h))), this.options.scrollY && (h = {
      el: Lt("vertical"),
      direction: "vertical",
      fade: n,
      interactive: r
    }, this._insertScrollBar(h.el), this.indicators.push(new y(this, h))), this.on("refresh", function() {
      for (var l = 0; l < t.indicators.length; l++)
        t.indicators[l].refresh();
    }), n && (this.on("scrollEnd", function() {
      for (var l = 0; l < t.indicators.length; l++)
        t.indicators[l].fade();
    }), this.on("scrollCancel", function() {
      for (var l = 0; l < t.indicators.length; l++)
        t.indicators[l].fade();
    }), this.on("scrollStart", function() {
      for (var l = 0; l < t.indicators.length; l++)
        t.indicators[l].fade(!0);
    }), this.on("beforeScrollStart", function() {
      for (var l = 0; l < t.indicators.length; l++)
        t.indicators[l].fade(!0, !0);
    })), this.on("destroy", function() {
      t._removeScrollBars();
    });
  }, e.prototype._insertScrollBar = function(t) {
    this.wrapper.appendChild(t);
  }, e.prototype._removeScrollBars = function() {
    for (var t = 0; t < this.indicators.length; t++)
      this.indicators[t].destroy();
  };
}
function Lt(e) {
  var t = document.createElement("div"), i = document.createElement("div");
  return t.style.cssText = "position:absolute;z-index:9999;pointerEvents:none", i.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", i.className = "bscroll-indicator", e === "horizontal" ? (t.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", i.style.height = "100%", t.className = "bscroll-horizontal-scrollbar") : (t.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", i.style.width = "100%", t.className = "bscroll-vertical-scrollbar"), t.style.cssText += ";overflow:hidden", t.appendChild(i), t;
}
function y(e, t) {
  this.wrapper = t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.direction = t.direction, t.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.x = 0, this.y = 0, t.interactive && this._addDOMEvents();
}
y.prototype.handleEvent = function(e) {
  switch (e.type) {
    case "touchstart":
    case "mousedown":
      this._start(e);
      break;
    case "touchmove":
    case "mousemove":
      this._move(e);
      break;
    case "touchend":
    case "mouseup":
    case "touchcancel":
    case "mousecancel":
      this._end(e);
      break;
  }
};
y.prototype.refresh = function() {
  this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition());
};
y.prototype.fade = function(e, t) {
  var i = this;
  if (!(t && !this.visible)) {
    var s = e ? 250 : 500;
    e = e ? "1" : "0", this.wrapperStyle[x.transitionDuration] = s + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
      i.wrapperStyle.opacity = e, i.visible = +e;
    }, 0);
  }
};
y.prototype.updatePosition = function() {
  if (this.direction === "vertical") {
    var e = Math.round(this.sizeRatioY * this.scroller.y);
    if (e < 0) {
      this.transitionTime(500);
      var t = Math.max(this.indicatorHeight + e * 3, H);
      this.indicatorStyle.height = t + "px", e = 0;
    } else if (e > this.maxPosY) {
      this.transitionTime(500);
      var i = Math.max(this.indicatorHeight - (e - this.maxPosY) * 3, H);
      this.indicatorStyle.height = i + "px", e = this.maxPosY + this.indicatorHeight - i;
    } else
      this.indicatorStyle.height = this.indicatorHeight + "px";
    this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[x.transform] = "translateY(" + e + "px)" + this.scroller.translateZ : this.indicatorStyle.top = e + "px";
  } else {
    var s = Math.round(this.sizeRatioX * this.scroller.x);
    if (s < 0) {
      this.transitionTime(500);
      var n = Math.max(this.indicatorWidth + s * 3, H);
      this.indicatorStyle.width = n + "px", s = 0;
    } else if (s > this.maxPosX) {
      this.transitionTime(500);
      var o = Math.max(this.indicatorWidth - (s - this.maxPosX) * 3, H);
      this.indicatorStyle.width = o + "px", s = this.maxPosX + this.indicatorWidth - o;
    } else
      this.indicatorStyle.width = this.indicatorWidth + "px";
    this.x = s, this.scroller.options.useTransform ? this.indicatorStyle[x.transform] = "translateX(" + s + "px)" + this.scroller.translateZ : this.indicatorStyle.left = s + "px";
  }
};
y.prototype.transitionTime = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  this.indicatorStyle[x.transitionDuration] = e + "ms";
};
y.prototype.transitionTimingFunction = function(e) {
  this.indicatorStyle[x.transitionTimingFunction] = e;
};
y.prototype.destroy = function() {
  this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper);
};
y.prototype._start = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = M(), this._handleMoveEvents(ht), this.scroller.trigger("beforeScrollStart");
};
y.prototype._move = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
  var i = t.pageX - this.lastPointX;
  this.lastPointX = t.pageX;
  var s = t.pageY - this.lastPointY;
  this.lastPointY = t.pageY;
  var n = this.x + i, o = this.y + s;
  this._pos(n, o);
};
y.prototype._end = function(e) {
  if (this.initiated) {
    this.initiated = !1, e.preventDefault(), e.stopPropagation(), this._handleMoveEvents(at);
    var t = this.scroller.options.snap;
    if (t) {
      var i = t.speed, s = t.easing, n = s === void 0 ? b.bounce : s, o = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), r = i || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - o.x), 1e3), Math.min(Math.abs(this.scroller.y - o.y), 1e3)), 300);
      (this.scroller.x !== o.x || this.scroller.y !== o.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = o, this.scroller.scrollTo(o.x, o.y, r, n));
    }
    this.moved && this.scroller.trigger("scrollEnd", {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};
y.prototype._pos = function(e, t) {
  e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = Math.round(e / this.sizeRatioX), t = Math.round(t / this.sizeRatioY), this.scroller.scrollTo(e, t), this.scroller.trigger("scroll", {
    x: this.scroller.x,
    y: this.scroller.y
  });
};
y.prototype._shouldShow = function() {
  return this.direction === "vertical" && this.scroller.hasVerticalScroll || this.direction === "horizontal" && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1);
};
y.prototype._calculate = function() {
  if (this.direction === "vertical") {
    var e = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(e * e / (this.scroller.scrollerHeight || e || 1)), H), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = e - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var t = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(t * t / (this.scroller.scrollerWidth || t || 1)), H), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = t - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};
y.prototype._addDOMEvents = function() {
  var e = ht;
  this._handleDOMEvents(e);
};
y.prototype._removeDOMEvents = function() {
  var e = at;
  this._handleDOMEvents(e), this._handleMoveEvents(e);
};
y.prototype._handleMoveEvents = function(e) {
  this.scroller.options.disableTouch || e(window, "touchmove", this), this.scroller.options.disableMouse || e(window, "mousemove", this);
};
y.prototype._handleDOMEvents = function(e) {
  this.scroller.options.disableTouch || (e(this.indicator, "touchstart", this), e(window, "touchend", this)), this.scroller.options.disableMouse || (e(this.indicator, "mousedown", this), e(window, "mouseup", this));
};
function Ye(e) {
  e.prototype._initPullDown = function() {
    this.options.probeType = W;
  }, e.prototype._checkPullDown = function() {
    var t = this.options.pullDownRefresh, i = t.threshold, s = i === void 0 ? 90 : i, n = t.stop, o = n === void 0 ? 40 : n;
    return this.directionY !== tt || this.y < s ? !1 : (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, o, this.options.bounceTime, b.bounce), this.pulling);
  }, e.prototype.finishPullDown = function() {
    this.pulling = !1, this.resetPosition(this.options.bounceTime, b.bounce);
  }, e.prototype.openPullDown = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullDownRefresh = t, this._initPullDown();
  }, e.prototype.closePullDown = function() {
    this.options.pullDownRefresh = !1;
  };
}
function Xe(e) {
  e.prototype._initPullUp = function() {
    this.options.probeType = W, this.pullupWatching = !1, this._watchPullUp();
  }, e.prototype._watchPullUp = function() {
    this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd));
  }, e.prototype._checkToEnd = function(t) {
    var i = this, s = this.options.pullUpLoad.threshold, n = s === void 0 ? 0 : s;
    this.movingDirectionY === A && t.y <= this.maxScrollY + n && (this.once("scrollEnd", function() {
      i.pullupWatching = !1;
    }), this.trigger("pullingUp"), this.off("scroll", this._checkToEnd));
  }, e.prototype.finishPullUp = function() {
    var t = this;
    this.pullupWatching ? this.once("scrollEnd", function() {
      t._watchPullUp();
    }) : this._watchPullUp();
  }, e.prototype.openPullUp = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullUpLoad = t, this._initPullUp();
  }, e.prototype.closePullUp = function() {
    this.options.pullUpLoad = !1, this.pullupWatching && (this.pullupWatching = !1, this.off("scroll", this._checkToEnd));
  };
}
function Ie(e) {
  e.prototype._initMouseWheel = function() {
    var t = this;
    this._handleMouseWheelEvent(ht), this.on("destroy", function() {
      clearTimeout(t.mouseWheelTimer), clearTimeout(t.mouseWheelEndTimer), t._handleMouseWheelEvent(at);
    }), this.firstWheelOpreation = !0;
  }, e.prototype._handleMouseWheelEvent = function(t) {
    t(this.wrapper, "wheel", this), t(this.wrapper, "mousewheel", this), t(this.wrapper, "DOMMouseScroll", this);
  }, e.prototype._onMouseWheel = function(t) {
    var i = this;
    if (this.enabled) {
      t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.firstWheelOpreation && this.trigger("scrollStart"), this.firstWheelOpreation = !1;
      var s = this.options.mouseWheel, n = s.speed, o = n === void 0 ? 20 : n, r = s.invert, h = r === void 0 ? !1 : r, l = s.easeTime, a = l === void 0 ? 300 : l;
      clearTimeout(this.mouseWheelTimer), this.mouseWheelTimer = setTimeout(function() {
        !i.options.snap && !a && i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        }), i.firstWheelOpreation = !0;
      }, 400);
      var p = void 0, u = void 0;
      switch (!0) {
        case "deltaX" in t:
          t.deltaMode === 1 ? (p = -t.deltaX * o, u = -t.deltaY * o) : (p = -t.deltaX, u = -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          p = t.wheelDeltaX / 120 * o, u = t.wheelDeltaY / 120 * o;
          break;
        case "wheelDelta" in t:
          p = u = t.wheelDelta / 120 * o;
          break;
        case "detail" in t:
          p = u = -t.detail / 3 * o;
          break;
        default:
          return;
      }
      var f = h ? -1 : 1;
      p *= f, u *= f, this.hasVerticalScroll || (p = u, u = 0);
      var d = void 0, c = void 0;
      if (this.options.snap) {
        d = this.currentPage.pageX, c = this.currentPage.pageY, p > 0 ? d-- : p < 0 && d++, u > 0 ? c-- : u < 0 && c++, this._goToPage(d, c);
        return;
      }
      d = this.x + Math.round(this.hasHorizontalScroll ? p : 0), c = this.y + Math.round(this.hasVerticalScroll ? u : 0), this.movingDirectionX = this.directionX = p > 0 ? -1 : p < 0 ? 1 : 0, this.movingDirectionY = this.directionY = u > 0 ? -1 : u < 0 ? 1 : 0, d > this.minScrollX ? d = this.minScrollX : d < this.maxScrollX && (d = this.maxScrollX), c > this.minScrollY ? c = this.minScrollY : c < this.maxScrollY && (c = this.maxScrollY);
      var g = this.y === c;
      this.scrollTo(d, c, a, b.swipe), this.trigger("scroll", {
        x: this.x,
        y: this.y
      }), clearTimeout(this.mouseWheelEndTimer), g && (this.mouseWheelEndTimer = setTimeout(function() {
        i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        });
      }, a));
    }
  };
}
function Le(e) {
  e.prototype._initZoom = function() {
    var t = this.options.zoom, i = t.start, s = i === void 0 ? 1 : i, n = t.min, o = n === void 0 ? 1 : n, r = t.max, h = r === void 0 ? 4 : r;
    this.scale = Math.min(Math.max(s, o), h), this.setScale(this.scale), this.scrollerStyle[x.transformOrigin] = "0 0";
  }, e.prototype._zoomTo = function(t, i, s, n) {
    this.scaled = !0;
    var o = t / (n || this.scale);
    this.setScale(t), this.refresh();
    var r = Math.round(this.startX - (i - this.relativeX) * (o - 1)), h = Math.round(this.startY - (s - this.relativeY) * (o - 1));
    r > this.minScrollX ? r = this.minScrollX : r < this.maxScrollX && (r = this.maxScrollX), h > this.minScrollY ? h = this.minScrollY : h < this.maxScrollY && (h = this.maxScrollY), (this.x !== r || this.y !== h) && this.scrollTo(r, h, this.options.bounceTime), this.scaled = !1;
  }, e.prototype.zoomTo = function(t, i, s) {
    var n = wt(this.wrapper), o = n.left, r = n.top, h = i + o - this.x, l = s + r - this.y;
    this._zoomTo(t, h, l);
  }, e.prototype._zoomStart = function(t) {
    var i = t.touches[0], s = t.touches[1], n = Math.abs(i.pageX - s.pageX), o = Math.abs(i.pageY - s.pageY);
    this.startDistance = Mt(n, o), this.startScale = this.scale;
    var r = wt(this.wrapper), h = r.left, l = r.top;
    this.originX = Math.abs(i.pageX + s.pageX) / 2 + h - this.x, this.originY = Math.abs(i.pageY + s.pageY) / 2 + l - this.y, this.trigger("zoomStart");
  }, e.prototype._zoom = function(t) {
    if (!(!this.enabled || this.destroyed || $[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches[0], s = t.touches[1], n = Math.abs(i.pageX - s.pageX), o = Math.abs(i.pageY - s.pageY), r = Mt(n, o), h = r / this.startDistance * this.startScale;
      this.scaled = !0;
      var l = this.options.zoom, a = l.min, p = a === void 0 ? 1 : a, u = l.max, f = u === void 0 ? 4 : u;
      h < p ? h = 0.5 * p * Math.pow(2, h / p) : h > f && (h = 2 * f * Math.pow(0.5, f / h));
      var d = h / this.startScale, c = this.startX - (this.originX - this.relativeX) * (d - 1), g = this.startY - (this.originY - this.relativeY) * (d - 1);
      this.setScale(h), this.scrollTo(c, g, 0);
    }
  }, e.prototype._zoomEnd = function(t) {
    if (!(!this.enabled || this.destroyed || $[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
      var i = this.options.zoom, s = i.min, n = s === void 0 ? 1 : s, o = i.max, r = o === void 0 ? 4 : o, h = this.scale > r ? r : this.scale < n ? n : this.scale;
      this._zoomTo(h, this.originX, this.originY, this.startScale), this.trigger("zoomEnd");
    }
  };
}
var Ct = 30, Ht = 10, Z = 200, Qt = 2e3;
function Ce(e) {
  e.prototype._initInfinite = function() {
    this.options.probeType = 3, this.maxScrollY = -Qt, this.infiniteScroller = new _(this, this.options.infinity);
  };
}
function Dt(e) {
  if (e && e.classList)
    return e.classList.contains("tombstone");
}
function _(e, t) {
  var i = this;
  this.options = t, et(typeof this.options.createTombstone == "function", "Infinite scroll need createTombstone Function to create tombstone"), et(typeof this.options.fetch == "function", "Infinite scroll need fetch Function to fetch new data."), et(typeof this.options.render == "function", "Infinite scroll need render Function to render each item."), this.firstAttachedItem = 0, this.lastAttachedItem = 0, this.anchorScrollTop = 0, this.anchorItem = {
    index: 0,
    offset: 0
  }, this.tombstoneHeight = 0, this.tombstoneWidth = 0, this.tombstones = [], this.items = [], this.loadedItems = 0, this.requestInProgress = !1, this.hasMore = !0, this.scroller = e, this.wrapperEl = this.scroller.wrapper, this.scrollerEl = this.scroller.scroller, this.scroller.on("scroll", function() {
    i.onScroll();
  }), this.scroller.on("resize", function() {
    i.onResize();
  }), this.onResize();
}
_.prototype.onScroll = function() {
  var e = -this.scroller.y, t = e - this.anchorScrollTop;
  e === 0 ? this.anchorItem = {
    index: 0,
    offset: 0
  } : this.anchorItem = this._calculateAnchoredItem(this.anchorItem, t), this.anchorScrollTop = e;
  var i = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight), s = this.anchorItem.index, n = i.index;
  t < 0 ? (s -= Ct, n += Ht) : (s -= Ht, n += Ct), this.fill(s, n), this.maybeRequestContent();
};
_.prototype.onResize = function() {
  var e = this.options.createTombstone();
  e.style.position = "absolute", this.scrollerEl.appendChild(e), e.style.display = "", this.tombstoneHeight = e.offsetHeight, this.tombstoneWidth = e.offsetWidth, this.scrollerEl.removeChild(e);
  for (var t = 0; t < this.items.length; t++)
    this.items[t].height = this.items[t].width = 0;
  this.onScroll();
};
_.prototype.fill = function(e, t) {
  this.firstAttachedItem = Math.max(0, e), this.hasMore || (t = Math.min(t, this.items.length)), this.lastAttachedItem = t, this.attachContent();
};
_.prototype.maybeRequestContent = function() {
  var e = this;
  if (!(this.requestInProgress || !this.hasMore)) {
    var t = this.lastAttachedItem - this.loadedItems;
    t <= 0 || (this.requestInProgress = !0, this.options.fetch(t).then(function(i) {
      if (e.requestInProgress = !1, i)
        e.addContent(i);
      else {
        e.hasMore = !1;
        var s = e._removeTombstones(), n = 0;
        e.anchorItem.index <= e.items.length ? (n = e._fixScrollPosition(), e._setupAnimations({}, n), e.scroller.resetPosition(e.scroller.options.bounceTime)) : (e.anchorItem.index -= s, n = e._fixScrollPosition(), e._setupAnimations({}, n), e.scroller.stop(), e.scroller.resetPosition(), e.onScroll());
      }
    }));
  }
};
_.prototype.addContent = function(e) {
  for (var t = 0; t < e.length; t++)
    this.items.length <= this.loadedItems && this._addItem(), this.items[this.loadedItems++].data = e[t];
  this.attachContent(), this.maybeRequestContent();
};
_.prototype.attachContent = function() {
  var e = this._collectUnusedNodes(), t = this._createDOMNodes(e);
  this._cleanupUnusedNodes(e), this._cacheNodeSize();
  var i = this._fixScrollPosition();
  this._setupAnimations(t, i);
};
_.prototype.resetMore = function() {
  this.hasMore = !0;
};
_.prototype._removeTombstones = function() {
  for (var e = void 0, t = 0, i = this.items.length, s = 0; s < i; s++) {
    var n = this.items[s].node, o = this.items[s].data;
    (!n || Dt(n)) && !o && (e || (e = s), n && this.scrollerEl.removeChild(n));
  }
  return t = i - e, this.items.splice(e), this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length), t;
};
_.prototype._collectUnusedNodes = function() {
  for (var e = [], t = 0; t < this.items.length; t++) {
    if (t === this.firstAttachedItem) {
      t = this.lastAttachedItem - 1;
      continue;
    }
    var i = this.items[t].node;
    i && (Dt(i) ? (this.tombstones.push(i), this.tombstones[this.tombstones.length - 1].style.display = "none") : e.push(i)), this.items[t].node = null;
  }
  return e;
};
_.prototype._createDOMNodes = function(e) {
  for (var t = {}, i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    for (; this.items.length <= i; )
      this._addItem();
    var s = this.items[i].node, n = this.items[i].data;
    if (s)
      if (Dt(s) && n)
        s.style.zIndex = 1, t[i] = [s, this.items[i].top - this.anchorScrollTop], this.items[i].node = null;
      else
        continue;
    var o = n ? this.options.render(n, e.pop()) : this._getTombStone();
    o.style.position = "absolute", this.items[i].top = -1, this.scrollerEl.appendChild(o), this.items[i].node = o;
  }
  return t;
};
_.prototype._cleanupUnusedNodes = function(e) {
  for (; e.length; )
    this.scrollerEl.removeChild(e.pop());
};
_.prototype._cacheNodeSize = function() {
  for (var e = this.firstAttachedItem; e < this.lastAttachedItem; e++)
    this.items[e].data && !this.items[e].height && (this.items[e].height = this.items[e].node.offsetHeight, this.items[e].width = this.items[e].node.offsetWidth);
};
_.prototype._fixScrollPosition = function() {
  this.anchorScrollTop = 0;
  for (var e = 0; e < this.anchorItem.index; e++)
    this.anchorScrollTop += this.items[e].height || this.tombstoneHeight;
  this.anchorScrollTop += this.anchorItem.offset;
  for (var t = this.anchorScrollTop - this.anchorItem.offset, i = this.anchorItem.index; i > this.firstAttachedItem; )
    t -= this.items[i - 1].height || this.tombstoneHeight, i--;
  return t;
};
_.prototype._setupAnimations = function(e, t) {
  var i = this;
  for (var s in e) {
    var n = e[s];
    this.items[s].node.style.transform = "translateY(" + (this.anchorScrollTop + n[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")", this.items[s].node.offsetTop, n[0].offsetTop, this.items[s].node.style.transition = "transform " + Z + "ms";
  }
  for (var o = this.firstAttachedItem; o < this.lastAttachedItem; o++) {
    var r = e[o];
    if (r) {
      var h = r[0];
      h.style.transition = "transform " + Z + "ms, opacity " + Z + "ms", h.style.transform = "translateY(" + t + "px) scale(" + this.items[o].width / this.tombstoneWidth + ", " + this.items[o].height / this.tombstoneHeight + ")", h.style.opacity = 0;
    }
    t !== this.items[o].top && (r || (this.items[o].node.style.transition = ""), this.items[o].node.style.transform = "translateY(" + t + "px)"), this.items[o].top = t, t += this.items[o].height || this.tombstoneHeight;
  }
  this.scroller.maxScrollY = -(t - this.wrapperEl.offsetHeight + (this.hasMore ? Qt : 0)), setTimeout(function() {
    for (var l in e) {
      var a = e[l];
      a[0].style.display = "none", i.tombstones.push(a[0]);
    }
  }, Z);
};
_.prototype._getTombStone = function() {
  var e = this.tombstones.pop();
  return e ? (e.style.display = "", e.style.opacity = 1, e.style.transform = "", e.style.transition = "", e) : this.options.createTombstone();
};
_.prototype._addItem = function() {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};
_.prototype._calculateAnchoredItem = function(e, t) {
  if (t === 0)
    return e;
  var i = e.index, s = 0;
  if (t += e.offset, t < 0) {
    for (; t < 0 && i > 0 && this.items[i - 1].height; )
      t += this.items[i - 1].height, i--;
    s = Math.max(-i, Math.ceil(Math.min(t, 0) / this.tombstoneHeight));
  } else {
    for (; t > 0 && i < this.items.length && this.items[i].height && this.items[i].height < t; )
      t -= this.items[i].height, i++;
    (i >= this.items.length || !this.items[i].height) && (s = Math.floor(Math.max(t, 0) / this.tombstoneHeight));
  }
  return i += s, t -= s * this.tombstoneHeight, {
    index: i,
    offset: t
  };
};
function S(e, t) {
  this.wrapper = typeof e == "string" ? document.querySelector(e) : e, this.wrapper || nt("Can not resolve the wrapper DOM."), this.scroller = this.wrapper.children[0], this.scroller || nt("The wrapper need at least one child element to be scroller."), this.scrollerStyle = this.scroller.style, this._init(e, t);
}
xe(S);
Pe(S);
pe(S);
De(S);
Ee(S);
Me(S);
Ye(S);
Xe(S);
Ie(S);
Le(S);
Ce(S);
S.Version = "1.12.6";
const U = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, n] of t)
    i[s] = n;
  return i;
}, He = "cube-loading", Re = {
  name: He,
  data() {
    return {
      balde: 12
    };
  },
  props: {
    size: {
      type: Number
    }
  },
  computed: {
    style() {
      if (!this.size)
        return;
      const e = `${this.size}px`;
      return {
        width: e,
        height: e
      };
    }
  }
}, Ue = { class: "cube-loading" }, ke = { class: "cube-loading-spinner" };
function Ne(e, t, i, s, n, o) {
  return m(), v("div", Ue, [
    w("span", {
      class: "cube-loading-spinners",
      style: bt(o.style)
    }, [
      (m(!0), v(F, null, V(n.balde, (r) => (m(), v("i", ke))), 256))
    ], 4)
  ]);
}
const Oe = /* @__PURE__ */ U(Re, [["render", Ne]]), Ae = {
  props: {
    y: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      width: 50,
      height: 80,
      ratio: 2
    };
  },
  computed: {
    distance() {
      return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance));
    },
    style() {
      return `width:${this.width / this.ratio}px;height:${this.height / this.ratio}px`;
    }
  },
  mounted() {
    this.ratio = window.devicePixelRatio, this.width *= this.ratio, this.height *= this.ratio, this.initRadius = 18 * this.ratio, this.minHeadRadius = 12 * this.ratio, this.minTailRadius = 5 * this.ratio, this.initArrowRadius = 10 * this.ratio, this.minArrowRadius = 6 * this.ratio, this.arrowWidth = 3 * this.ratio, this.maxDistance = 40 * this.ratio, this.initCenterX = 25 * this.ratio, this.initCenterY = 25 * this.ratio, this.headCenter = {
      x: this.initCenterX,
      y: this.initCenterY
    }, this._draw();
  },
  methods: {
    _draw() {
      const e = this.$refs.bubble;
      let t = e.getContext("2d");
      t.clearRect(0, 0, e.width, e.height), this._drawBubble(t), this._drawArrow(t);
    },
    _drawBubble(e) {
      e.save(), e.beginPath();
      const t = this.distance / this.maxDistance, i = this.initRadius - (this.initRadius - this.minHeadRadius) * t;
      this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * t, e.arc(this.headCenter.x, this.headCenter.y, i, 0, Math.PI, !0);
      const s = this.initRadius - (this.initRadius - this.minTailRadius) * t, n = {
        x: this.headCenter.x,
        y: this.headCenter.y + this.distance
      }, o = {
        x: n.x - s,
        y: n.y
      }, r = {
        x: o.x,
        y: o.y - this.distance / 2
      };
      e.quadraticCurveTo(r.x, r.y, o.x, o.y), e.arc(n.x, n.y, s, Math.PI, 0, !0);
      const h = {
        x: this.headCenter.x + i,
        y: this.headCenter.y
      }, l = {
        x: n.x + s,
        y: h.y + this.distance / 2
      };
      e.quadraticCurveTo(l.x, l.y, h.x, h.y), e.fillStyle = "rgb(170,170,170)", e.fill(), e.strokeStyle = "rgb(153,153,153)", e.stroke(), e.restore();
    },
    _drawArrow(e) {
      e.save(), e.beginPath();
      const t = this.distance / this.maxDistance, i = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * t;
      e.arc(this.headCenter.x, this.headCenter.y, i - (this.arrowWidth - t), -Math.PI / 2, 0, !0), e.arc(this.headCenter.x, this.headCenter.y, i, 0, Math.PI * 3 / 2, !1), e.lineTo(this.headCenter.x, this.headCenter.y - i - this.arrowWidth / 2 + t), e.lineTo(this.headCenter.x + this.arrowWidth * 2 - t * 2, this.headCenter.y - i + this.arrowWidth / 2), e.lineTo(this.headCenter.x, this.headCenter.y - i + this.arrowWidth * 3 / 2 - t), e.fillStyle = "rgb(255,255,255)", e.fill(), e.strokeStyle = "rgb(170,170,170)", e.stroke(), e.restore();
    }
  },
  watch: {
    y() {
      this._draw();
    }
  }
}, $e = ["width", "height"];
function We(e, t, i, s, n, o) {
  return m(), v("canvas", {
    ref: "bubble",
    width: n.width,
    height: n.height,
    style: bt(o.style)
  }, null, 12, $e);
}
const ze = /* @__PURE__ */ U(Ae, [["render", We]]), Bt = {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, Fe = function(e, t) {
}, Ve = /-(\w)/g;
function qe(e) {
  return e = String(e), e.replace(Ve, function(t, i) {
    return i ? i.toUpperCase() : "";
  });
}
function je(e) {
  return e = String(e), e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
const te = {
  methods: {
    _checkDeprecated() {
      const e = this.$options.props, t = this.$options.name;
      Object.entries(e).forEach(([i, s]) => {
        const n = s.deprecated;
        n && this[i] !== void 0 && Fe(`The property "${je(i)}" is deprecated, please use the recommended property "${n.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${t.substr(5)}#cube-Propsconfiguration-anchor`);
      });
    }
  },
  mounted() {
    this._checkDeprecated();
  }
};
function Ge(e) {
  const i = /os (\d\d?_\d(_\d)?)/.exec(e);
  if (!i)
    return null;
  const s = i[1].split("_").map(function(n) {
    return parseInt(n, 10);
  });
  return {
    major: s[0],
    minor: s[1],
    patch: s[2] || 0
  };
}
function Ze() {
  let e = !0;
  if (oe) {
    const t = Ge(j);
    if (!t)
      return e;
    t.major >= 13 && t.minor >= 3 && (e = !1);
  }
  return e;
}
const Ke = Ze();
const Je = "cube-scroll", Qe = "horizontal", Rt = "vertical", Be = "Refresh success", ti = 600, Ut = "click", kt = "pulling-down", Nt = "pulling-up", it = "scroll", Tt = "before-scroll-start", ee = "scroll-end", Ot = "none", ei = "native", ii = [it, Tt, ee], si = {
  observeDOM: !0,
  click: !0,
  probeType: 1,
  scrollbar: !1,
  pullDownRefresh: !1,
  pullUpLoad: !1
}, oi = {
  name: Je,
  mixins: [Bt, te],
  provide() {
    return {
      parentScroll: this
    };
  },
  inject: {
    parentScroll: {
      default: null
    }
  },
  emits: [Ut, kt, Nt, it, Tt, ee],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    scrollEvents: {
      type: Array,
      default() {
        return [];
      },
      validator(e) {
        return e.every((t) => ii.indexOf(t) !== -1);
      }
    },
    // TODO: plan to remove at 1.10.0
    listenScroll: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "scroll-events"
      }
    },
    listenBeforeScroll: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "scroll-events"
      }
    },
    direction: {
      type: String,
      default: Rt
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    nestMode: {
      type: String,
      default: Ot
    }
  },
  data() {
    return {
      beforePullDown: !0,
      isPullingDown: !1,
      isPullUpLoad: !1,
      pullUpNoMore: !1,
      bubbleY: 0,
      pullDownStyle: "",
      pullDownStop: 40,
      pullDownHeight: 60,
      pullUpHeight: 0
    };
  },
  computed: {
    pullDownRefresh() {
      let e = this.options.pullDownRefresh;
      return e && (e === !0 && (e = {}), Object.assign({ stop: this.pullDownStop }, e));
    },
    pullUpLoad() {
      return this.options.pullUpLoad;
    },
    pullUpTxt() {
      const e = this.pullUpLoad, t = e && e.txt, i = t && t.more || "", s = t && t.noMore || "";
      return this.pullUpNoMore ? s : i;
    },
    refreshTxt() {
      const e = this.pullDownRefresh;
      return e && e.txt || Be;
    },
    finalScrollEvents() {
      const e = this.scrollEvents.slice();
      return e.length || (this.listenScroll && e.push(it), this.listenBeforeScroll && e.push(Tt)), e;
    },
    needListenScroll() {
      return this.finalScrollEvents.indexOf(it) !== -1 || this.parentScroll;
    }
  },
  watch: {
    data: {
      handler() {
        setTimeout(() => {
          this.forceUpdate(!0);
        }, this.refreshDelay);
      },
      deep: !0
    },
    pullDownRefresh: {
      handler(e, t) {
        e && (this.scroll.openPullDown(e), t || (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler())), !e && t && (this.scroll.closePullDown(), this._offPullDownRefresh(), this._pullDownRefreshChangeHandler());
      },
      deep: !0
    },
    pullUpLoad: {
      handler(e, t) {
        e && (this.scroll.openPullUp(e), t || (this._onPullUpLoad(), this._pullUpLoadChangeHandler())), !e && t && (this.scroll.closePullUp(), this._offPullUpLoad(), this._pullUpLoadChangeHandler());
      },
      deep: !0
    }
  },
  activated() {
    this.enable();
  },
  deactivated() {
    this.disable();
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  beforeUnmount() {
    this.destroy();
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper)
        return;
      this._calculateMinHeight();
      let e = {
        scrollY: this.direction === Rt,
        scrollX: this.direction === Qe,
        probeType: this.needListenScroll ? 3 : 1,
        useTransition: Ke
      }, t = Object.assign({}, si, e, this.options);
      this.scroll = new S(this.$refs.wrapper, t), this.parentScroll && this.nestMode !== Ot && this._handleNestScroll(), this._listenScrollEvents(), this.pullDownRefresh && (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler()), this.pullUpLoad && (this._onPullUpLoad(), this._pullUpLoadChangeHandler());
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this._calculateMinHeight(), this.scroll && this.scroll.refresh();
    },
    destroy() {
      this.scroll && this.scroll.destroy(), this.scroll = null;
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    clickItem(e) {
      this.$emit(Ut, e);
    },
    async forceUpdate(e = !1, t = !1) {
      this.isPullDownUpdating || (this.pullDownRefresh && this.isPullingDown ? (this.isPullingDown = !1, this.isPullDownUpdating = !0, await this._waitFinishPullDown(), this.isPullDownUpdating = !1, await this._waitResetPullDown(e)) : this.pullUpLoad && this.isPullUpLoad && (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpNoMore = !e || t), e && this.refresh());
    },
    resetPullUpTxt() {
      this.pullUpNoMore = !1;
    },
    _listenScrollEvents() {
      this.finalScrollEvents.forEach((e) => {
        this.scroll.on(qe(e), (...t) => {
          this.$emit(e, ...t);
        });
      });
    },
    _handleNestScroll() {
      this.$nextTick(() => {
        const e = this.scroll, t = this.parentScroll.scroll;
        [e, t].forEach((s, n, o) => {
          s.on("touchEnd", () => {
            t.enable(), e.enable(), e.initiated = !1;
          }), s.on("beforeScrollStart", () => {
            this.touchStartMoment = !0;
            const r = o[(n + 1) % 2];
            r.stop(), r.resetPosition();
          });
        }), e.on("scroll", (s) => {
          if (!e.initiated || e.isInTransition || this.nestMode === ei && !this.touchStartMoment)
            return;
          this._checkReachBoundary(s) ? (e.resetPosition(), e.disable(), t.pointX = e.pointX, t.pointY = e.pointY, t.enable()) : t.disable(), this.touchStartMoment = !1;
        });
      });
    },
    _checkReachBoundary(e) {
      const t = this.scroll.distX, i = this.scroll.distY, s = t > 0 ? e.x >= this.scroll.minScrollX : t < 0 ? e.x <= this.scroll.maxScrollX : !1, n = i > 0 ? e.y >= this.scroll.minScrollY : i < 0 ? e.y <= this.scroll.maxScrollY : !1, o = this.scroll.freeScroll, r = this.scroll.hasHorizontalScroll, h = this.scroll.hasVerticalScroll;
      if (!r && !h)
        return !0;
      if (o)
        return s || n;
      let l;
      return this.scroll.movingDirectionX ? l = s : this.scroll.movingDirectionY && (l = n), l;
    },
    _calculateMinHeight() {
      const { wrapper: e, listWrapper: t } = this.$refs, i = this.pullUpLoad, s = this.pullDownRefresh;
      let n = 0;
      (s || i) && (n = L(e).height + 1, i && i.visible && (n -= this.pullUpHeight)), t.style.minHeight = `${n}px`;
    },
    _onPullDownRefresh() {
      this.scroll.on("pullingDown", this._pullDownHandle), this.scroll.on("scroll", this._pullDownScrollHandle);
    },
    _offPullDownRefresh() {
      this.scroll.off("pullingDown", this._pullDownHandle), this.scroll.off("scroll", this._pullDownScrollHandle);
    },
    _pullDownRefreshChangeHandler() {
      this.$nextTick(() => {
        this._getPullDownEleHeight(), this._calculateMinHeight();
      });
    },
    _pullDownHandle() {
      this.resetPullDownTimer && clearTimeout(this.resetPullDownTimer), this.beforePullDown = !1, this.isPullingDown = !0, this.$emit(kt);
    },
    _pullDownScrollHandle(e) {
      this.beforePullDown ? (this.bubbleY = Math.max(0, e.y - this.pullDownHeight), this.pullDownStyle = `top:${Math.min(e.y - this.pullDownHeight, 0)}px`) : (this.bubbleY = 0, this.pullDownStyle = `top:${Math.min(e.y - this.pullDownStop, 0)}px`);
    },
    _pullUpLoadChangeHandler() {
      this.$nextTick(() => {
        this._getPullUpEleHeight(), this._calculateMinHeight();
      });
    },
    _onPullUpLoad() {
      this.scroll.on("pullingUp", this._pullUpHandle);
    },
    _offPullUpLoad() {
      this.scroll.off("pullingUp", this._pullUpHandle);
    },
    _pullUpHandle() {
      this.isPullUpLoad = !0, this.$emit(Nt);
    },
    _waitFinishPullDown(e) {
      const { stopTime: t = ti } = this.pullDownRefresh;
      return new Promise((i) => {
        setTimeout(() => {
          this.scroll.finishPullDown(), i();
        }, t);
      });
    },
    _waitResetPullDown(e) {
      return new Promise((t) => {
        this.resetPullDownTimer = setTimeout(() => {
          this.pullDownStyle = `top: -${this.pullDownHeight}px`, this.beforePullDown = !0, t();
        }, this.scroll.options.bounceTime);
      });
    },
    _getPullDownEleHeight() {
      let e = this.$refs.pulldown;
      e && (e = e.children[0], this.pullDownHeight = L(e).height, this.beforePullDown = !1, this.isPullingDown = !0, this.$nextTick(() => {
        this.pullDownStop = L(e).height, this.beforePullDown = !0, this.isPullingDown = !1;
      }));
    },
    _getPullUpEleHeight() {
      const t = this.$refs.listWrapper.nextElementSibling;
      if (!t) {
        this.pullUpHeight = 0;
        return;
      }
      this.pullUpHeight = L(t).height;
    }
  },
  components: {
    Loading: Oe,
    Bubble: ze
  }
}, ni = {
  ref: "wrapper",
  class: "cube-scroll-wrapper"
}, ri = { class: "cube-scroll-content" }, li = {
  ref: "listWrapper",
  class: "cube-scroll-list-wrapper"
}, hi = { class: "cube-scroll-list" }, ai = ["onClick"], ci = {
  key: 0,
  class: "cube-pullup-wrapper"
}, ui = {
  key: 0,
  class: "before-trigger"
}, pi = {
  key: 1,
  class: "after-trigger"
}, di = {
  key: 0,
  class: "cube-pulldown",
  ref: "pulldown"
}, fi = { class: "before-trigger" }, mi = { class: "after-trigger" }, gi = { class: "loading" }, vi = { class: "cube-pulldown-loaded" };
function yi(e, t, i, s, n, o) {
  const r = q("loading"), h = q("bubble");
  return m(), v("div", ni, [
    w("div", ri, [
      w("div", li, [
        D(e.$slots, "default", {}, () => [
          w("ul", hi, [
            (m(!0), v(F, null, V(i.data, (l, a) => (m(), v("li", {
              class: "cube-scroll-item border-bottom-1px",
              key: a,
              onClick: (p) => o.clickItem(l)
            }, R(l), 9, ai))), 128))
          ])
        ])
      ], 512),
      D(e.$slots, "pullup", {
        pullUpLoad: o.pullUpLoad,
        isPullUpLoad: n.isPullUpLoad
      }, () => [
        o.pullUpLoad ? (m(), v("div", ci, [
          n.isPullUpLoad ? (m(), v("div", pi, [
            K(r)
          ])) : (m(), v("div", ui, [
            w("span", null, R(o.pullUpTxt), 1)
          ]))
        ])) : st("", !0)
      ])
    ]),
    o.pullDownRefresh ? (m(), v("div", di, [
      D(e.$slots, "pulldown", {
        pullDownRefresh: o.pullDownRefresh,
        pullDownStyle: n.pullDownStyle,
        beforePullDown: n.beforePullDown,
        isPullingDown: n.isPullingDown,
        bubbleY: n.bubbleY
      }, () => [
        w("div", {
          class: "cube-pulldown-wrapper",
          style: bt(n.pullDownStyle)
        }, [
          N(w("div", fi, [
            K(h, {
              y: n.bubbleY,
              class: "bubble"
            }, null, 8, ["y"])
          ], 512), [
            [O, n.beforePullDown]
          ]),
          N(w("div", mi, [
            N(w("div", gi, [
              K(r)
            ], 512), [
              [O, n.isPullingDown]
            ]),
            N(w("div", vi, [
              w("span", null, R(o.refreshTxt), 1)
            ], 512), [
              [O, !n.isPullingDown]
            ])
          ], 512), [
            [O, !n.beforePullDown]
          ])
        ], 4)
      ])
    ], 512)) : st("", !0)
  ], 512);
}
const wi = /* @__PURE__ */ U(oi, [["render", yi]]);
const _i = "cube-index-list-item", yt = "cube-index-list-item_active", At = "select", Ti = {
  name: _i,
  emits: [At],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    itemClass() {
      return this.item.active ? yt : "";
    }
  },
  methods: {
    addActiveCls(e) {
      ne(e.currentTarget, yt);
    },
    removeActiveCls(e) {
      re(e.currentTarget, yt);
    },
    selectItem() {
      this.$emit(At, this.item);
    }
  }
}, bi = { class: "cube-index-list-item-def border-bottom-1px" };
function xi(e, t, i, s, n, o) {
  return m(), v("li", {
    class: qt(["cube-index-list-item", o.itemClass]),
    onTouchstart: t[0] || (t[0] = (...r) => o.addActiveCls && o.addActiveCls(...r)),
    onTouchend: t[1] || (t[1] = (...r) => o.removeActiveCls && o.removeActiveCls(...r)),
    onClick: t[2] || (t[2] = (r) => o.selectItem())
  }, [
    D(e.$slots, "default", {}, () => [
      w("div", bi, R(i.item.name), 1)
    ])
  ], 34);
}
const rt = /* @__PURE__ */ U(Ti, [["render", xi]]), Si = "cube-index-list-group", $t = "select", Pi = {
  name: Si,
  emits: [$t],
  props: {
    group: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    selectItem(e) {
      this.$emit($t, e);
    }
  },
  components: {
    CubeIndexListItem: rt
  }
}, Di = { class: "cube-index-list-group" }, Ei = ["innerHTML"];
function Mi(e, t, i, s, n, o) {
  const r = q("cube-index-list-item");
  return m(), v("li", Di, [
    w("h2", {
      class: "cube-index-list-anchor",
      innerHTML: i.group.name
    }, null, 8, Ei),
    w("ul", null, [
      D(e.$slots, "default", {}, () => [
        (m(!0), v(F, null, V(i.group.items, (h, l) => (m(), jt(r, {
          key: l,
          item: h,
          onSelect: o.selectItem
        }, null, 8, ["item", "onSelect"]))), 128))
      ])
    ])
  ]);
}
const lt = /* @__PURE__ */ U(Pi, [["render", Mi]]);
const Yi = "cube-index-list", Wt = "select", zt = "title-click", Ft = "pulling-up", Vt = "pulling-down", Xi = xt && window.innerHeight <= 480 ? 17 : 18, Ii = he("transform"), Li = {
  name: Yi,
  mixins: [Bt, te],
  emits: [Wt, zt, Ft, Vt],
  props: {
    title: {
      type: String,
      default: ""
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    speed: {
      type: Number,
      default: 0
    },
    navbar: {
      type: Boolean,
      default: !0
    },
    pullDownRefresh: {
      type: [Object, Boolean],
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    pullUpLoad: {
      type: [Object, Boolean],
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    }
  },
  data() {
    return {
      scrollEvents: ["scroll"],
      currentIndex: 0,
      scrollY: -1,
      diff: -1,
      titleHeight: 0
    };
  },
  computed: {
    hasTitle() {
      return this.title || this.$slots.title;
    },
    fixedTitle() {
      return this.hasTitle && !this.titleHeight && this._caculateTitleHeight(), this.scrollY <= -this.titleHeight && this.data[this.currentIndex] ? this.data[this.currentIndex].name : "";
    },
    shortcutList() {
      return this.data.map((e) => e ? e.shortcut || e.name.substr(0, 1) : "");
    },
    scrollOptions() {
      return Object.assign({}, {
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      }, this.options);
    }
  },
  created() {
    this.groupList = [], this.listHeight = [], this.touch = {}, this.subTitleHeight = 0;
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    /* TODO: remove refresh next minor version */
    refresh() {
      this._caculateTitleHeight(), this._calculateHeight(), this.$refs.scroll && this.$refs.scroll.refresh();
    },
    selectItem(e) {
      this.$emit(Wt, e);
    },
    scroll(e) {
      this.scrollY = e.y;
    },
    titleClick() {
      this.$emit(zt, this.title);
    },
    forceUpdate(e = !1, t = !1) {
      this.$refs.scroll.forceUpdate(e, t), e && this.$nextTick(() => {
        this._calculateHeight();
      });
    },
    onShortcutTouchStart(e) {
      const t = ae(e, "cube-index-list-nav-item");
      if (!t)
        return;
      let i = le(t, "index"), s = e.touches[0];
      this.touch.y1 = s.pageY, this.touch.anchorIndex = i, this._scrollTo(i);
    },
    onShortcutTouchMove(e) {
      let t = e.touches[0];
      this.touch.y2 = t.pageY;
      let i = (this.touch.y2 - this.touch.y1) / Xi | 0, s = parseInt(this.touch.anchorIndex) + i;
      this._scrollTo(s);
    },
    onPullingUp() {
      this.$emit(Ft);
    },
    onPullingDown() {
      this.$emit(Vt);
    },
    _caculateTitleHeight() {
      this.titleHeight = this.$refs.title ? L(this.$refs.title).height : 0;
    },
    _calculateHeight() {
      this.groupList = this.$el.getElementsByClassName("cube-index-list-group");
      const e = this.$el.getElementsByClassName("cube-index-list-anchor")[0];
      if (this.subTitleHeight = e ? L(e).height : 0, this.listHeight = [], !this.groupList)
        return;
      let t = this.titleHeight;
      this.listHeight.push(t);
      for (let i = 0; i < this.groupList.length; i++) {
        let s = this.groupList[i];
        t += s.clientHeight, this.listHeight.push(t);
      }
    },
    _scrollTo(e) {
      e < 0 ? e = 0 : e > this.listHeight.length - 2 && (e = this.listHeight.length - 2), this.$refs.scroll.scrollToElement(this.groupList[e], this.speed), this.scrollY = this.$refs.scroll.scroll.y;
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this._calculateHeight();
      });
    },
    title(e) {
      this.$nextTick(() => {
        this.refresh();
      });
    },
    diff(e) {
      let t = e > 0 && e < this.subTitleHeight ? e - this.subTitleHeight : 0;
      this.fixedTop !== t && (this.fixedTop = t, this.$refs.fixed.style[Ii] = `translate3d(0,${t}px,0)`);
    },
    scrollY(e) {
      const t = this.listHeight;
      if (e > -this.titleHeight) {
        this.currentIndex = 0;
        return;
      }
      for (let i = 0; i < t.length - 1; i++) {
        let s = t[i], n = t[i + 1];
        if (-e >= s && -e < n) {
          this.currentIndex = i, this.diff = n + e;
          return;
        }
      }
      this.currentIndex = t.length - 2;
    }
  },
  components: {
    CubeScroll: wi,
    CubeIndexListGroup: lt
  }
}, Ci = { class: "cube-index-list" }, Hi = {
  class: "cube-index-list-content",
  ref: "content"
}, Ri = { class: "cube-index-list-nav-list" }, Ui = ["data-index"], ki = ["innerHTML"];
function Ni(e, t, i, s, n, o) {
  const r = q("cube-index-list-group"), h = q("cube-scroll");
  return m(), v("div", Ci, [
    K(h, {
      ref: "scroll",
      "scroll-events": n.scrollEvents,
      options: o.scrollOptions,
      data: i.data,
      onScroll: o.scroll,
      onPullingDown: o.onPullingDown,
      onPullingUp: o.onPullingUp
    }, ie({
      default: ut(() => [
        w("div", Hi, [
          o.hasTitle ? (m(), v("h1", {
            key: 0,
            class: "cube-index-list-title",
            ref: "title",
            onClick: t[0] || (t[0] = (...l) => o.titleClick && o.titleClick(...l))
          }, [
            D(e.$slots, "title", {}, () => [
              Et(R(i.title), 1)
            ])
          ], 512)) : st("", !0),
          w("ul", null, [
            D(e.$slots, "default", {}, () => [
              (m(!0), v(F, null, V(i.data, (l, a) => (m(), jt(r, {
                key: a,
                group: l,
                onSelect: o.selectItem
              }, null, 8, ["group", "onSelect"]))), 128))
            ])
          ])
        ], 512)
      ]),
      _: 2
    }, [
      e.$slots.pullup ? {
        name: "pullup",
        fn: ut((l) => [
          D(e.$slots, "pullup", {
            pullUpLoad: l.pullUpLoad,
            isPullUpLoad: l.isPullUpLoad
          })
        ]),
        key: "0"
      } : void 0,
      e.$slots.pulldown ? {
        name: "pulldown",
        fn: ut((l) => [
          D(e.$slots, "pulldown", {
            pullDownRefresh: l.pullDownRefresh,
            pullDownStyle: l.pullDownStyle,
            beforePullDown: l.beforePullDown,
            isPullingDown: l.isPullingDown,
            bubbleY: l.bubbleY
          })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["scroll-events", "options", "data", "onScroll", "onPullingDown", "onPullingUp"]),
    i.navbar ? (m(), v("div", {
      key: 0,
      class: "cube-index-list-nav",
      onTouchstart: t[1] || (t[1] = (...l) => o.onShortcutTouchStart && o.onShortcutTouchStart(...l)),
      onTouchmove: t[2] || (t[2] = se((...l) => o.onShortcutTouchMove && o.onShortcutTouchMove(...l), ["stop", "prevent"]))
    }, [
      w("ul", Ri, [
        (m(!0), v(F, null, V(o.shortcutList, (l, a) => (m(), v("li", {
          key: a,
          "data-index": a,
          class: qt(["cube-index-list-nav-item", { active: n.currentIndex === a }])
        }, [
          D(e.$slots, "nav-item", { item: l }, () => [
            Et(R(l), 1)
          ])
        ], 10, Ui))), 128))
      ])
    ], 32)) : st("", !0),
    N(w("div", {
      ref: "fixed",
      innerHTML: o.fixedTitle,
      class: "cube-index-list-fixed cube-index-list-anchor"
    }, null, 8, ki), [
      [O, o.fixedTitle]
    ])
  ]);
}
const z = /* @__PURE__ */ U(Li, [["render", Ni]]);
z.install = function(e) {
  e.component(z.name, z), e.component(lt.name, lt), e.component(rt.name, rt);
};
z.Group = lt;
z.Item = rt;
export {
  z as default
};
