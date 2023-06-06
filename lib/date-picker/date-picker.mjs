import "./css.mjs";
import { withDirectives as vt, openBlock as M, createElementBlock as D, normalizeClass as Dt, normalizeStyle as re, createElementVNode as b, withModifiers as B, renderSlot as kt, vShow as yt, resolveComponent as Tt, createBlock as _t, Transition as Xt, withCtx as lt, createVNode as tt, toDisplayString as Ct, createCommentVNode as ve, Fragment as It, renderList as At, camelize as ye, h as Lt, render as Wt, isVNode as $t, mergeProps as xe } from "vue";
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var be = function() {
  function e(t, i) {
    var s = [], n = !0, o = !1, r = void 0;
    try {
      for (var a = t[Symbol.iterator](), h; !(n = (h = a.next()).done) && (s.push(h.value), !(i && s.length === i)); n = !0)
        ;
    } catch (l) {
      o = !0, r = l;
    } finally {
      try {
        !n && a.return && a.return();
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
}(), Te = function(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++)
      i[t] = e[t];
    return i;
  } else
    return Array.from(e);
};
function _e(e) {
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
      for (var s = i.length, n = [].concat(Te(i)), o = 0; o < s; o++) {
        var r = n[o], a = be(r, 2), h = a[0], l = a[1];
        h && h.apply(l, [].slice.call(arguments, 1));
      }
  };
}
var X = typeof window < "u", et = X && navigator.userAgent.toLowerCase(), we = et && /wechatdevtools/.test(et), Me = et && et.indexOf("android") > 0;
function Y() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function F(e) {
  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    i[s - 1] = arguments[s];
  for (var n = 0; n < i.length; n++) {
    var o = i[n];
    for (var r in o)
      e[r] = o[r];
  }
  return e;
}
function K(e) {
  return e == null;
}
function Nt(e, t) {
  return Math.sqrt(e * e + t * t);
}
var wt = X && document.createElement("div").style, ct = function() {
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
    if (wt[e[t]] !== void 0)
      return t;
  return !1;
}();
function k(e) {
  return ct === !1 ? !1 : ct === "standard" ? e === "transitionEnd" ? "transitionend" : e : ct + e.charAt(0).toUpperCase() + e.substr(1);
}
function st(e, t, i, s) {
  e.addEventListener(t, i, { passive: !1, capture: !!s });
}
function nt(e, t, i, s) {
  e.removeEventListener(t, i, { passive: !1, capture: !!s });
}
function ae(e) {
  for (var t = 0, i = 0; e; )
    t -= e.offsetLeft, i -= e.offsetTop, e = e.offsetParent;
  return {
    left: t,
    top: i
  };
}
function xt(e) {
  var t = e.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var he = k("transform"), Se = X && k("perspective") in wt, bt = X && ("ontouchstart" in window || we), Ee = he !== !1, Pe = X && k("transition") in wt, T = {
  transform: he,
  transitionTimingFunction: k("transitionTimingFunction"),
  transitionDuration: k("transitionDuration"),
  transitionDelay: k("transitionDelay"),
  transformOrigin: k("transformOrigin"),
  transitionEnd: k("transitionEnd")
}, G = 1, ut = 2, R = {
  touchstart: G,
  touchmove: G,
  touchend: G,
  mousedown: ut,
  mousemove: ut,
  mouseup: ut
};
function I(e) {
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
function Z(e, t) {
  for (var i in t)
    if (t[i].test(e[i]))
      return !0;
  return !1;
}
function Ye(e, t) {
  var i = document.createEvent("Event");
  i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i);
}
function le(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click", i = void 0;
  e.type === "mouseup" || e.type === "mousecancel" ? i = e : (e.type === "touchend" || e.type === "touchcancel") && (i = e.changedTouches[0]);
  var s = {};
  i && (s.screenX = i.screenX || 0, s.screenY = i.screenY || 0, s.clientX = i.clientX || 0, s.clientY = i.clientY || 0);
  var n = void 0, o = !0, r = !0;
  if (typeof MouseEvent < "u")
    try {
      n = new MouseEvent(t, F({
        bubbles: o,
        cancelable: r
      }, s));
    } catch {
      a();
    }
  else
    a();
  function a() {
    n = document.createEvent("Event"), n.initEvent(t, o, r), F(n, s);
  }
  n.forwardedTouchEvent = !0, n._constructed = !0, e.target.dispatchEvent(n);
}
function De(e) {
  le(e, "dblclick");
}
function ke(e, t) {
  t.firstChild ? Xe(e, t.firstChild) : t.appendChild(e);
}
function Xe(e, t) {
  t.parentNode.insertBefore(e, t);
}
function zt(e, t) {
  e.removeChild(t);
}
var Ce = {
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
  disableMouse: bt,
  disableTouch: !bt,
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
function Ie(e) {
  e.prototype._init = function(t, i) {
    this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }, e.prototype.setScale = function(t) {
    this.lastScale = K(this.scale) ? t : this.scale, this.scale = t;
  }, e.prototype._handleOptions = function(t) {
    this.options = F({}, Ce, t), this.translateZ = this.options.HWCompositing && Se ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && Pe, this.options.useTransform = this.options.useTransform && Ee, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = this.options.eventPassthrough === "horizontal" ? !1 : this.options.scrollX, this.options.scrollY = this.options.eventPassthrough === "vertical" ? !1 : this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.tap === !0 && (this.options.tap = "tap");
  }, e.prototype._addDOMEvents = function() {
    var t = st;
    this._handleDOMEvents(t);
  }, e.prototype._removeDOMEvents = function() {
    var t = nt;
    this._handleDOMEvents(t);
  }, e.prototype._handleDOMEvents = function(t) {
    var i = this.options.bindToWrapper ? this.wrapper : window;
    t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), bt && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, T.transitionEnd, this);
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
          for (var r = t.scroller.children.length ? t.scroller.children : [t.scroller], a = i && !t.pulling ? "none" : "auto", h = 0; h < r.length; h++)
            r[h].style.pointerEvents = a;
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
          for (var r = !1, a = !1, h = 0; h < o.length; h++) {
            var l = o[h];
            if (l.type !== "attributes") {
              r = !0;
              break;
            } else if (l.target !== t.scroller) {
              a = !0;
              break;
            }
          }
          r ? t.refresh() : a && (clearTimeout(i), i = setTimeout(function() {
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
    var t = I(this.scroller), i = t.width, s = t.height;
    function n() {
      if (!this.destroyed) {
        t = I(this.scroller);
        var r = t.width, a = t.height;
        (i !== r || s !== a) && this.refresh(), i = r, s = a, o.call(this);
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
        this.enabled && !t._constructed && (Z(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._onMouseWheel(t);
        break;
    }
  }, e.prototype.refresh = function() {
    var t = window.getComputedStyle(this.wrapper, null).position === "static", i = I(this.wrapper);
    this.wrapperWidth = i.width, this.wrapperHeight = i.height;
    var s = I(this.scroller);
    this.scrollerWidth = Math.round(s.width * this.scale), this.scrollerHeight = Math.round(s.height * this.scale), this.relativeX = s.left, this.relativeY = s.top, t && (this.relativeX -= i.left, this.relativeY -= i.top), this.minScrollX = 0, this.minScrollY = 0;
    var n = this.options.wheel;
    n ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, this.selectedIndex === void 0 && (this.selectedIndex = n.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = ae(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition();
  }, e.prototype.enable = function() {
    this.enabled = !0;
  }, e.prototype.disable = function() {
    this.enabled = !1;
  };
}
var x = {
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
function Ot(e, t, i, s, n, o, r) {
  var a = e - t, h = Math.abs(a) / i, l = r.deceleration, c = r.itemHeight, p = r.swipeBounceTime, d = r.wheel, f = r.swipeTime, u = f, m = d ? 4 : 15, y = e + h / l * (a < 0 ? -1 : 1);
  return d && c && (y = Math.round(y / c) * c), y < s ? (y = o ? Math.max(s - o / 4, s - o / m * h) : s, u = p) : y > n && (y = o ? Math.min(n + o / 4, n + o / m * h) : n, u = p), {
    destination: Math.round(y),
    duration: u
  };
}
var Ae = 100 / 60;
function ce() {
}
var pt = function() {
  return X ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(e) {
    return window.setTimeout(e, (e.interval || Ae) / 2);
  } : ce;
}(), C = function() {
  return X ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(e) {
    window.clearTimeout(e);
  } : ce;
}(), O = 1, J = -1, ft = 1, dt = -1, Ht = 1, U = 3;
function it(e) {
  console.error("[BScroll warn]: " + e);
}
function Q(e, t) {
  if (!e)
    throw new Error("[BScroll] " + t);
}
function Le(e) {
  e.prototype._start = function(t) {
    var i = R[t.type];
    if (!(i !== G && t.button !== 0) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
      this.initiated = i, this.options.preventDefault && !Z(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = Y(), this.options.wheel && (this.target = t.target), this.stop();
      var s = t.touches ? t.touches[0] : t;
      this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = s.pageX, this.pointY = s.pageY, this.trigger("beforeScrollStart");
    }
  }, e.prototype._move = function(t) {
    if (!(!this.enabled || this.destroyed || R[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches ? t.touches[0] : t, s = i.pageX - this.pointX, n = i.pageY - this.pointY;
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX += s, this.distY += n;
      var o = Math.abs(this.distX), r = Math.abs(this.distY), a = Y();
      if (!(a - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && o < this.options.momentumLimitDistance)) {
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
        s = this.hasHorizontalScroll ? s : 0, n = this.hasVerticalScroll ? n : 0, this.movingDirectionX = s > 0 ? dt : s < 0 ? ft : 0, this.movingDirectionY = n > 0 ? J : n < 0 ? O : 0;
        var h = this.x + s, l = this.y + n, c = !1, p = !1, d = !1, f = !1, u = this.options.bounce;
        u !== !1 && (c = u.top === void 0 ? !0 : u.top, p = u.bottom === void 0 ? !0 : u.bottom, d = u.left === void 0 ? !0 : u.left, f = u.right === void 0 ? !0 : u.right), (h > this.minScrollX || h < this.maxScrollX) && (h > this.minScrollX && d || h < this.maxScrollX && f ? h = this.x + s / 3 : h = h > this.minScrollX ? this.minScrollX : this.maxScrollX), (l > this.minScrollY || l < this.maxScrollY) && (l > this.minScrollY && c || l < this.maxScrollY && p ? l = this.y + n / 3 : l = l > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(h, l), a - this.startTime > this.options.momentumLimitTime && (this.startTime = a, this.startX = this.x, this.startY = this.y, this.options.probeType === Ht && this.trigger("scroll", {
          x: this.x,
          y: this.y
        })), this.options.probeType > Ht && this.trigger("scroll", {
          x: this.x,
          y: this.y
        });
        var m = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, y = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, E = this.pointX - m, w = this.pointY - y;
        (E > document.documentElement.clientWidth - this.options.momentumLimitDistance || E < this.options.momentumLimitDistance || w < this.options.momentumLimitDistance || w > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
      }
    }
  }, e.prototype._end = function(t) {
    if (!(!this.enabled || this.destroyed || R[t.type] !== this.initiated)) {
      this.initiated = !1, this.options.preventDefault && !Z(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), this.isInTransition = !1;
      var i = Math.round(this.x), s = Math.round(this.y), n = i - this.absStartX, o = s - this.absStartY;
      if (this.directionX = n > 0 ? dt : n < 0 ? ft : 0, this.directionY = o > 0 ? J : o < 0 ? O : 0, !(this.options.pullDownRefresh && this._checkPullDown())) {
        if (this._checkClick(t)) {
          this.trigger("scrollCancel");
          return;
        }
        if (!this.resetPosition(this.options.bounceTime, x.bounce)) {
          this._translate(i, s), this.endTime = Y();
          var r = this.endTime - this.startTime, a = Math.abs(i - this.startX), h = Math.abs(s - this.startY);
          if (this._events.flick && r < this.options.flickLimitTime && a < this.options.flickLimitDistance && h < this.options.flickLimitDistance) {
            this.trigger("flick");
            return;
          }
          var l = 0;
          if (this.options.momentum && r < this.options.momentumLimitTime && (h > this.options.momentumLimitDistance || a > this.options.momentumLimitDistance)) {
            var c = !1, p = !1, d = !1, f = !1, u = this.options.bounce;
            u !== !1 && (c = u.top === void 0 ? !0 : u.top, p = u.bottom === void 0 ? !0 : u.bottom, d = u.left === void 0 ? !0 : u.left, f = u.right === void 0 ? !0 : u.right);
            var m = this.directionX === dt && d || this.directionX === ft && f ? this.wrapperWidth : 0, y = this.directionY === J && c || this.directionY === O && p ? this.wrapperHeight : 0, E = this.hasHorizontalScroll ? Ot(this.x, this.startX, r, this.maxScrollX, this.minScrollX, m, this.options) : { destination: i, duration: 0 }, w = this.hasVerticalScroll ? Ot(this.y, this.startY, r, this.maxScrollY, this.minScrollY, y, this.options) : { destination: s, duration: 0 };
            i = E.destination, s = w.destination, l = Math.max(E.duration, w.duration), this.isInTransition = !0;
          } else
            this.options.wheel && (s = Math.round(s / this.itemHeight) * this.itemHeight, l = this.options.wheel.adjustTime || 400);
          var ht = x.swipe;
          if (this.options.snap) {
            var N = this._nearestSnap(i, s);
            this.currentPage = N, l = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - N.x), 1e3), Math.min(Math.abs(s - N.y), 1e3)), 300), i = N.x, s = N.y, this.directionX = 0, this.directionY = 0, ht = this.options.snap.easing || x.bounce;
          }
          if (i !== this.x || s !== this.y) {
            (i > this.minScrollX || i < this.maxScrollX || s > this.minScrollY || s < this.maxScrollY) && (ht = x.swipeBounce), this.scrollTo(i, s, l, ht);
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
          var s = Math.abs(Math.round(this.y / this.itemHeight)), n = Math.round((this.pointY + xt(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[s + n];
        }
        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, x.swipe), !0;
      } else {
        if (!i) {
          var o = this.options.dblclick, r = !1;
          if (o && this.lastClickTime) {
            var a = o.delay, h = a === void 0 ? 300 : a;
            Y() - this.lastClickTime < h && (r = !0, De(t));
          }
          return this.options.tap && Ye(t, this.options.tap), this.options.click && !Z(t.target, this.options.preventDefaultException) && le(t), this.lastClickTime = r ? null : Y(), !0;
        }
        return !1;
      }
    return !1;
  }, e.prototype._resize = function() {
    var t = this;
    this.enabled && (Me && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
      t.refresh();
    }, this.options.resizePolling));
  }, e.prototype._startProbe = function() {
    C(this.probeTimer), this.probeTimer = pt(i);
    var t = this;
    function i() {
      var s = t.getComputedPosition();
      if (t.trigger("scroll", s), !t.isInTransition) {
        t.trigger("scrollEnd", s);
        return;
      }
      t.probeTimer = pt(i);
    }
  }, e.prototype._transitionTime = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (this.scrollerStyle[T.transitionDuration] = t + "ms", this.options.wheel)
      for (var i = 0; i < this.items.length; i++)
        this.items[i].style[T.transitionDuration] = t + "ms";
    if (this.indicators)
      for (var s = 0; s < this.indicators.length; s++)
        this.indicators[s].transitionTime(t);
  }, e.prototype._transitionTimingFunction = function(t) {
    if (this.scrollerStyle[T.transitionTimingFunction] = t, this.options.wheel)
      for (var i = 0; i < this.items.length; i++)
        this.items[i].style[T.transitionTimingFunction] = t;
    if (this.indicators)
      for (var s = 0; s < this.indicators.length; s++)
        this.indicators[s].transitionTimingFunction(t);
  }, e.prototype._transitionEnd = function(t) {
    if (!(t.target !== this.scroller || !this.isInTransition)) {
      this._transitionTime();
      var i = !this.pulling || this.movingDirectionY === O;
      i && !this.resetPosition(this.options.bounceTime, x.bounce) && (this.isInTransition = !1, this.options.probeType !== U && this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }
  }, e.prototype._translate = function(t, i, s) {
    if (Q(!K(t) && !K(i), "Translate x or y is null or undefined."), K(s) && (s = this.scale), this.options.useTransform ? this.scrollerStyle[T.transform] = "translate(" + t + "px," + i + "px) scale(" + s + ")" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel)
      for (var n = this.options.wheel.rotate, o = n === void 0 ? 25 : n, r = 0; r < this.items.length; r++) {
        var a = o * (i / this.itemHeight + r);
        this.items[r].style[T.transform] = "rotateX(" + a + "deg)";
      }
    if (this.x = t, this.y = i, this.setScale(s), this.indicators)
      for (var h = 0; h < this.indicators.length; h++)
        this.indicators[h].updatePosition();
  }, e.prototype._animate = function(t, i, s, n) {
    var o = this, r = this.x, a = this.y, h = this.lastScale, l = this.scale, c = Y(), p = c + s;
    function d() {
      var f = Y();
      if (f >= p) {
        o.isAnimating = !1, o._translate(t, i, l), o.trigger("scroll", {
          x: o.x,
          y: o.y
        }), !o.pulling && !o.resetPosition(o.options.bounceTime) && o.trigger("scrollEnd", {
          x: o.x,
          y: o.y
        });
        return;
      }
      f = (f - c) / s;
      var u = n(f), m = (t - r) * u + r, y = (i - a) * u + a, E = (l - h) * u + h;
      o._translate(m, y, E), o.isAnimating && (o.animateTimer = pt(d)), o.options.probeType === U && o.trigger("scroll", {
        x: o.x,
        y: o.y
      });
    }
    this.isAnimating = !0, C(this.animateTimer), d();
  }, e.prototype.scrollBy = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : x.bounce;
    t = this.x + t, i = this.y + i, this.scrollTo(t, i, s, n);
  }, e.prototype.scrollTo = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : x.bounce;
    this.isInTransition = this.options.useTransition && s > 0 && (t !== this.x || i !== this.y), !s || this.options.useTransition ? (this._transitionTimingFunction(n.style), this._transitionTime(s), this._translate(t, i), s && this.options.probeType === U && this._startProbe(), !s && (t !== this.x || i !== this.y) && (this.trigger("scroll", {
      x: t,
      y: i
    }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, x.bounce) || this.trigger("scrollEnd", {
      x: t,
      y: i
    })), this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, s, n.fn);
  }, e.prototype.scrollToElement = function(t, i, s, n, o) {
    if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !(this.options.wheel && !t.classList.contains(this.options.wheel.wheelItemClass)))) {
      var r = ae(t);
      r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= n || 0, r.left = r.left > this.minScrollX ? this.minScrollX : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > this.minScrollY ? this.minScrollY : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, i, o);
    }
  }, e.prototype.resetPosition = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : x.bounce, s = this.x, n = Math.round(s);
    !this.hasHorizontalScroll || n > this.minScrollX ? s = this.minScrollX : n < this.maxScrollX && (s = this.maxScrollX);
    var o = this.y, r = Math.round(o);
    return !this.hasVerticalScroll || r > this.minScrollY ? o = this.minScrollY : r < this.maxScrollY && (o = this.maxScrollY), s === this.x && o === this.y ? !1 : (this.scrollTo(s, o, t, i), !0);
  }, e.prototype.getComputedPosition = function() {
    var t = window.getComputedStyle(this.scroller, null), i = void 0, s = void 0;
    return this.options.useTransform ? (t = t[T.transform].split(")")[0].split(", "), i = +(t[12] || t[4]), s = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), s = +t.top.replace(/[^-\d.]/g, "")), {
      x: i,
      y: s
    };
  }, e.prototype.stop = function() {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = !1, C(this.probeTimer);
      var t = this.getComputedPosition();
      this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0;
    } else
      !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, C(this.animateTimer), this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0);
  }, e.prototype.destroy = function() {
    this.destroyed = !0, this.trigger("destroy"), this.options.useTransition ? C(this.probeTimer) : C(this.animateTimer), this._removeDOMEvents(), this._events = {};
  };
}
function We(e) {
  e.prototype._initSnap = function() {
    var t = this;
    this.currentPage = {};
    var i = this.options.snap;
    if (i.loop) {
      var s = this.scroller.children;
      s.length > 1 ? (ke(s[s.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(s[1].cloneNode(!0))) : i.loop = !1;
    }
    var n = i.el;
    typeof n == "string" && (n = this.scroller.querySelectorAll(n)), this.on("refresh", function() {
      if (t.pages = [], !(!t.wrapperWidth || !t.wrapperHeight || !t.scrollerWidth || !t.scrollerHeight)) {
        var o = i.stepX || t.wrapperWidth, r = i.stepY || t.wrapperHeight, a = 0, h = void 0, l = void 0, c = void 0, p = 0, d = void 0, f = 0, u = void 0, m = void 0;
        if (n)
          for (d = n.length, u = -1; p < d; p++)
            m = I(n[p]), (p === 0 || m.left <= I(n[p - 1]).left) && (f = 0, u++), t.pages[f] || (t.pages[f] = []), a = Math.max(-m.left, t.maxScrollX), h = Math.max(-m.top, t.maxScrollY), l = a - Math.round(m.width / 2), c = h - Math.round(m.height / 2), t.pages[f][u] = {
              x: a,
              y: h,
              width: m.width,
              height: m.height,
              cx: l,
              cy: c
            }, a > t.maxScrollX && f++;
        else
          for (l = Math.round(o / 2), c = Math.round(r / 2); a > -t.scrollerWidth; ) {
            for (t.pages[p] = [], d = 0, h = 0; h > -t.scrollerHeight; )
              t.pages[p][d] = {
                x: Math.max(a, t.maxScrollX),
                y: Math.max(h, t.maxScrollY),
                width: o,
                height: r,
                cx: a - l,
                cy: h - c
              }, h -= r, d++;
            a -= o, p++;
          }
        t._checkSnapLoop();
        var y = i._loopX ? 1 : 0, E = i._loopY ? 1 : 0;
        t._goToPage(t.currentPage.pageX || y, t.currentPage.pageY || E, 0);
        var w = i.threshold;
        w % 1 === 0 ? (t.snapThresholdX = w, t.snapThresholdY = w) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * w), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * w));
      }
    }), this.on("scrollEnd", function() {
      i.loop && (i._loopX ? (t.currentPage.pageX === 0 && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (t.currentPage.pageY === 0 && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)));
    }), i.listenFlick !== !1 && this.on("flick", function() {
      var o = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
      t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, o);
    }), this.on("destroy", function() {
      if (i.loop) {
        var o = t.scroller.children;
        o.length > 2 && (zt(t.scroller, o[o.length - 1]), zt(t.scroller, o[0]));
      }
    });
  }, e.prototype._checkSnapLoop = function() {
    var t = this.options.snap;
    !t.loop || !this.pages || !this.pages.length || (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && it("Loop does not support two direction at the same time."));
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
    if (!(!o || !this.pages || !this.pages.length) && (n = n || o.easing || x.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), !!this.pages[t])) {
      i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
      var r = this.pages[t][i].x, a = this.pages[t][i].y;
      s = s === void 0 ? o.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(a - this.y), 1e3)), 300) : s, this.currentPage = {
        x: r,
        y: a,
        pageX: t,
        pageY: i
      }, this.scrollTo(r, a, s, n);
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
      return t._loopX ? i = F({}, this.currentPage, {
        pageX: this.currentPage.pageX - 1
      }) : i = F({}, this.currentPage, {
        pageY: this.currentPage.pageY - 1
      }), i;
    }
    return this.currentPage;
  };
}
function $e(e) {
  e.prototype.wheelTo = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y));
  }, e.prototype.getSelectedIndex = function() {
    return this.options.wheel && this.selectedIndex;
  }, e.prototype._initWheel = function() {
    var t = this.options.wheel;
    t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"), t.wheelItemClass || (t.wheelItemClass = "wheel-item"), t.selectedIndex === void 0 && (t.selectedIndex = 0, it("wheel option selectedIndex is required!"));
  };
}
var A = 8;
function Ne(e) {
  e.prototype._initScrollbar = function() {
    var t = this, i = this.options.scrollbar, s = i.fade, n = s === void 0 ? !0 : s, o = i.interactive, r = o === void 0 ? !1 : o;
    this.indicators = [];
    var a = void 0;
    this.options.scrollX && (a = {
      el: Rt("horizontal"),
      direction: "horizontal",
      fade: n,
      interactive: r
    }, this._insertScrollBar(a.el), this.indicators.push(new g(this, a))), this.options.scrollY && (a = {
      el: Rt("vertical"),
      direction: "vertical",
      fade: n,
      interactive: r
    }, this._insertScrollBar(a.el), this.indicators.push(new g(this, a))), this.on("refresh", function() {
      for (var h = 0; h < t.indicators.length; h++)
        t.indicators[h].refresh();
    }), n && (this.on("scrollEnd", function() {
      for (var h = 0; h < t.indicators.length; h++)
        t.indicators[h].fade();
    }), this.on("scrollCancel", function() {
      for (var h = 0; h < t.indicators.length; h++)
        t.indicators[h].fade();
    }), this.on("scrollStart", function() {
      for (var h = 0; h < t.indicators.length; h++)
        t.indicators[h].fade(!0);
    }), this.on("beforeScrollStart", function() {
      for (var h = 0; h < t.indicators.length; h++)
        t.indicators[h].fade(!0, !0);
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
function Rt(e) {
  var t = document.createElement("div"), i = document.createElement("div");
  return t.style.cssText = "position:absolute;z-index:9999;pointerEvents:none", i.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", i.className = "bscroll-indicator", e === "horizontal" ? (t.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", i.style.height = "100%", t.className = "bscroll-horizontal-scrollbar") : (t.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", i.style.width = "100%", t.className = "bscroll-vertical-scrollbar"), t.style.cssText += ";overflow:hidden", t.appendChild(i), t;
}
function g(e, t) {
  this.wrapper = t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.direction = t.direction, t.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.x = 0, this.y = 0, t.interactive && this._addDOMEvents();
}
g.prototype.handleEvent = function(e) {
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
g.prototype.refresh = function() {
  this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition());
};
g.prototype.fade = function(e, t) {
  var i = this;
  if (!(t && !this.visible)) {
    var s = e ? 250 : 500;
    e = e ? "1" : "0", this.wrapperStyle[T.transitionDuration] = s + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
      i.wrapperStyle.opacity = e, i.visible = +e;
    }, 0);
  }
};
g.prototype.updatePosition = function() {
  if (this.direction === "vertical") {
    var e = Math.round(this.sizeRatioY * this.scroller.y);
    if (e < 0) {
      this.transitionTime(500);
      var t = Math.max(this.indicatorHeight + e * 3, A);
      this.indicatorStyle.height = t + "px", e = 0;
    } else if (e > this.maxPosY) {
      this.transitionTime(500);
      var i = Math.max(this.indicatorHeight - (e - this.maxPosY) * 3, A);
      this.indicatorStyle.height = i + "px", e = this.maxPosY + this.indicatorHeight - i;
    } else
      this.indicatorStyle.height = this.indicatorHeight + "px";
    this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[T.transform] = "translateY(" + e + "px)" + this.scroller.translateZ : this.indicatorStyle.top = e + "px";
  } else {
    var s = Math.round(this.sizeRatioX * this.scroller.x);
    if (s < 0) {
      this.transitionTime(500);
      var n = Math.max(this.indicatorWidth + s * 3, A);
      this.indicatorStyle.width = n + "px", s = 0;
    } else if (s > this.maxPosX) {
      this.transitionTime(500);
      var o = Math.max(this.indicatorWidth - (s - this.maxPosX) * 3, A);
      this.indicatorStyle.width = o + "px", s = this.maxPosX + this.indicatorWidth - o;
    } else
      this.indicatorStyle.width = this.indicatorWidth + "px";
    this.x = s, this.scroller.options.useTransform ? this.indicatorStyle[T.transform] = "translateX(" + s + "px)" + this.scroller.translateZ : this.indicatorStyle.left = s + "px";
  }
};
g.prototype.transitionTime = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  this.indicatorStyle[T.transitionDuration] = e + "ms";
};
g.prototype.transitionTimingFunction = function(e) {
  this.indicatorStyle[T.transitionTimingFunction] = e;
};
g.prototype.destroy = function() {
  this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper);
};
g.prototype._start = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = Y(), this._handleMoveEvents(st), this.scroller.trigger("beforeScrollStart");
};
g.prototype._move = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
  var i = t.pageX - this.lastPointX;
  this.lastPointX = t.pageX;
  var s = t.pageY - this.lastPointY;
  this.lastPointY = t.pageY;
  var n = this.x + i, o = this.y + s;
  this._pos(n, o);
};
g.prototype._end = function(e) {
  if (this.initiated) {
    this.initiated = !1, e.preventDefault(), e.stopPropagation(), this._handleMoveEvents(nt);
    var t = this.scroller.options.snap;
    if (t) {
      var i = t.speed, s = t.easing, n = s === void 0 ? x.bounce : s, o = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), r = i || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - o.x), 1e3), Math.min(Math.abs(this.scroller.y - o.y), 1e3)), 300);
      (this.scroller.x !== o.x || this.scroller.y !== o.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = o, this.scroller.scrollTo(o.x, o.y, r, n));
    }
    this.moved && this.scroller.trigger("scrollEnd", {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};
g.prototype._pos = function(e, t) {
  e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = Math.round(e / this.sizeRatioX), t = Math.round(t / this.sizeRatioY), this.scroller.scrollTo(e, t), this.scroller.trigger("scroll", {
    x: this.scroller.x,
    y: this.scroller.y
  });
};
g.prototype._shouldShow = function() {
  return this.direction === "vertical" && this.scroller.hasVerticalScroll || this.direction === "horizontal" && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1);
};
g.prototype._calculate = function() {
  if (this.direction === "vertical") {
    var e = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(e * e / (this.scroller.scrollerHeight || e || 1)), A), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = e - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var t = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(t * t / (this.scroller.scrollerWidth || t || 1)), A), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = t - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};
g.prototype._addDOMEvents = function() {
  var e = st;
  this._handleDOMEvents(e);
};
g.prototype._removeDOMEvents = function() {
  var e = nt;
  this._handleDOMEvents(e), this._handleMoveEvents(e);
};
g.prototype._handleMoveEvents = function(e) {
  this.scroller.options.disableTouch || e(window, "touchmove", this), this.scroller.options.disableMouse || e(window, "mousemove", this);
};
g.prototype._handleDOMEvents = function(e) {
  this.scroller.options.disableTouch || (e(this.indicator, "touchstart", this), e(window, "touchend", this)), this.scroller.options.disableMouse || (e(this.indicator, "mousedown", this), e(window, "mouseup", this));
};
function ze(e) {
  e.prototype._initPullDown = function() {
    this.options.probeType = U;
  }, e.prototype._checkPullDown = function() {
    var t = this.options.pullDownRefresh, i = t.threshold, s = i === void 0 ? 90 : i, n = t.stop, o = n === void 0 ? 40 : n;
    return this.directionY !== J || this.y < s ? !1 : (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, o, this.options.bounceTime, x.bounce), this.pulling);
  }, e.prototype.finishPullDown = function() {
    this.pulling = !1, this.resetPosition(this.options.bounceTime, x.bounce);
  }, e.prototype.openPullDown = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullDownRefresh = t, this._initPullDown();
  }, e.prototype.closePullDown = function() {
    this.options.pullDownRefresh = !1;
  };
}
function Oe(e) {
  e.prototype._initPullUp = function() {
    this.options.probeType = U, this.pullupWatching = !1, this._watchPullUp();
  }, e.prototype._watchPullUp = function() {
    this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd));
  }, e.prototype._checkToEnd = function(t) {
    var i = this, s = this.options.pullUpLoad.threshold, n = s === void 0 ? 0 : s;
    this.movingDirectionY === O && t.y <= this.maxScrollY + n && (this.once("scrollEnd", function() {
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
function He(e) {
  e.prototype._initMouseWheel = function() {
    var t = this;
    this._handleMouseWheelEvent(st), this.on("destroy", function() {
      clearTimeout(t.mouseWheelTimer), clearTimeout(t.mouseWheelEndTimer), t._handleMouseWheelEvent(nt);
    }), this.firstWheelOpreation = !0;
  }, e.prototype._handleMouseWheelEvent = function(t) {
    t(this.wrapper, "wheel", this), t(this.wrapper, "mousewheel", this), t(this.wrapper, "DOMMouseScroll", this);
  }, e.prototype._onMouseWheel = function(t) {
    var i = this;
    if (this.enabled) {
      t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.firstWheelOpreation && this.trigger("scrollStart"), this.firstWheelOpreation = !1;
      var s = this.options.mouseWheel, n = s.speed, o = n === void 0 ? 20 : n, r = s.invert, a = r === void 0 ? !1 : r, h = s.easeTime, l = h === void 0 ? 300 : h;
      clearTimeout(this.mouseWheelTimer), this.mouseWheelTimer = setTimeout(function() {
        !i.options.snap && !l && i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        }), i.firstWheelOpreation = !0;
      }, 400);
      var c = void 0, p = void 0;
      switch (!0) {
        case "deltaX" in t:
          t.deltaMode === 1 ? (c = -t.deltaX * o, p = -t.deltaY * o) : (c = -t.deltaX, p = -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          c = t.wheelDeltaX / 120 * o, p = t.wheelDeltaY / 120 * o;
          break;
        case "wheelDelta" in t:
          c = p = t.wheelDelta / 120 * o;
          break;
        case "detail" in t:
          c = p = -t.detail / 3 * o;
          break;
        default:
          return;
      }
      var d = a ? -1 : 1;
      c *= d, p *= d, this.hasVerticalScroll || (c = p, p = 0);
      var f = void 0, u = void 0;
      if (this.options.snap) {
        f = this.currentPage.pageX, u = this.currentPage.pageY, c > 0 ? f-- : c < 0 && f++, p > 0 ? u-- : p < 0 && u++, this._goToPage(f, u);
        return;
      }
      f = this.x + Math.round(this.hasHorizontalScroll ? c : 0), u = this.y + Math.round(this.hasVerticalScroll ? p : 0), this.movingDirectionX = this.directionX = c > 0 ? -1 : c < 0 ? 1 : 0, this.movingDirectionY = this.directionY = p > 0 ? -1 : p < 0 ? 1 : 0, f > this.minScrollX ? f = this.minScrollX : f < this.maxScrollX && (f = this.maxScrollX), u > this.minScrollY ? u = this.minScrollY : u < this.maxScrollY && (u = this.maxScrollY);
      var m = this.y === u;
      this.scrollTo(f, u, l, x.swipe), this.trigger("scroll", {
        x: this.x,
        y: this.y
      }), clearTimeout(this.mouseWheelEndTimer), m && (this.mouseWheelEndTimer = setTimeout(function() {
        i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        });
      }, l));
    }
  };
}
function Re(e) {
  e.prototype._initZoom = function() {
    var t = this.options.zoom, i = t.start, s = i === void 0 ? 1 : i, n = t.min, o = n === void 0 ? 1 : n, r = t.max, a = r === void 0 ? 4 : r;
    this.scale = Math.min(Math.max(s, o), a), this.setScale(this.scale), this.scrollerStyle[T.transformOrigin] = "0 0";
  }, e.prototype._zoomTo = function(t, i, s, n) {
    this.scaled = !0;
    var o = t / (n || this.scale);
    this.setScale(t), this.refresh();
    var r = Math.round(this.startX - (i - this.relativeX) * (o - 1)), a = Math.round(this.startY - (s - this.relativeY) * (o - 1));
    r > this.minScrollX ? r = this.minScrollX : r < this.maxScrollX && (r = this.maxScrollX), a > this.minScrollY ? a = this.minScrollY : a < this.maxScrollY && (a = this.maxScrollY), (this.x !== r || this.y !== a) && this.scrollTo(r, a, this.options.bounceTime), this.scaled = !1;
  }, e.prototype.zoomTo = function(t, i, s) {
    var n = xt(this.wrapper), o = n.left, r = n.top, a = i + o - this.x, h = s + r - this.y;
    this._zoomTo(t, a, h);
  }, e.prototype._zoomStart = function(t) {
    var i = t.touches[0], s = t.touches[1], n = Math.abs(i.pageX - s.pageX), o = Math.abs(i.pageY - s.pageY);
    this.startDistance = Nt(n, o), this.startScale = this.scale;
    var r = xt(this.wrapper), a = r.left, h = r.top;
    this.originX = Math.abs(i.pageX + s.pageX) / 2 + a - this.x, this.originY = Math.abs(i.pageY + s.pageY) / 2 + h - this.y, this.trigger("zoomStart");
  }, e.prototype._zoom = function(t) {
    if (!(!this.enabled || this.destroyed || R[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches[0], s = t.touches[1], n = Math.abs(i.pageX - s.pageX), o = Math.abs(i.pageY - s.pageY), r = Nt(n, o), a = r / this.startDistance * this.startScale;
      this.scaled = !0;
      var h = this.options.zoom, l = h.min, c = l === void 0 ? 1 : l, p = h.max, d = p === void 0 ? 4 : p;
      a < c ? a = 0.5 * c * Math.pow(2, a / c) : a > d && (a = 2 * d * Math.pow(0.5, d / a));
      var f = a / this.startScale, u = this.startX - (this.originX - this.relativeX) * (f - 1), m = this.startY - (this.originY - this.relativeY) * (f - 1);
      this.setScale(a), this.scrollTo(u, m, 0);
    }
  }, e.prototype._zoomEnd = function(t) {
    if (!(!this.enabled || this.destroyed || R[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
      var i = this.options.zoom, s = i.min, n = s === void 0 ? 1 : s, o = i.max, r = o === void 0 ? 4 : o, a = this.scale > r ? r : this.scale < n ? n : this.scale;
      this._zoomTo(a, this.originX, this.originY, this.startScale), this.trigger("zoomEnd");
    }
  };
}
var Ut = 30, Ft = 10, q = 200, ue = 2e3;
function Ue(e) {
  e.prototype._initInfinite = function() {
    this.options.probeType = 3, this.maxScrollY = -ue, this.infiniteScroller = new v(this, this.options.infinity);
  };
}
function Mt(e) {
  if (e && e.classList)
    return e.classList.contains("tombstone");
}
function v(e, t) {
  var i = this;
  this.options = t, Q(typeof this.options.createTombstone == "function", "Infinite scroll need createTombstone Function to create tombstone"), Q(typeof this.options.fetch == "function", "Infinite scroll need fetch Function to fetch new data."), Q(typeof this.options.render == "function", "Infinite scroll need render Function to render each item."), this.firstAttachedItem = 0, this.lastAttachedItem = 0, this.anchorScrollTop = 0, this.anchorItem = {
    index: 0,
    offset: 0
  }, this.tombstoneHeight = 0, this.tombstoneWidth = 0, this.tombstones = [], this.items = [], this.loadedItems = 0, this.requestInProgress = !1, this.hasMore = !0, this.scroller = e, this.wrapperEl = this.scroller.wrapper, this.scrollerEl = this.scroller.scroller, this.scroller.on("scroll", function() {
    i.onScroll();
  }), this.scroller.on("resize", function() {
    i.onResize();
  }), this.onResize();
}
v.prototype.onScroll = function() {
  var e = -this.scroller.y, t = e - this.anchorScrollTop;
  e === 0 ? this.anchorItem = {
    index: 0,
    offset: 0
  } : this.anchorItem = this._calculateAnchoredItem(this.anchorItem, t), this.anchorScrollTop = e;
  var i = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight), s = this.anchorItem.index, n = i.index;
  t < 0 ? (s -= Ut, n += Ft) : (s -= Ft, n += Ut), this.fill(s, n), this.maybeRequestContent();
};
v.prototype.onResize = function() {
  var e = this.options.createTombstone();
  e.style.position = "absolute", this.scrollerEl.appendChild(e), e.style.display = "", this.tombstoneHeight = e.offsetHeight, this.tombstoneWidth = e.offsetWidth, this.scrollerEl.removeChild(e);
  for (var t = 0; t < this.items.length; t++)
    this.items[t].height = this.items[t].width = 0;
  this.onScroll();
};
v.prototype.fill = function(e, t) {
  this.firstAttachedItem = Math.max(0, e), this.hasMore || (t = Math.min(t, this.items.length)), this.lastAttachedItem = t, this.attachContent();
};
v.prototype.maybeRequestContent = function() {
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
v.prototype.addContent = function(e) {
  for (var t = 0; t < e.length; t++)
    this.items.length <= this.loadedItems && this._addItem(), this.items[this.loadedItems++].data = e[t];
  this.attachContent(), this.maybeRequestContent();
};
v.prototype.attachContent = function() {
  var e = this._collectUnusedNodes(), t = this._createDOMNodes(e);
  this._cleanupUnusedNodes(e), this._cacheNodeSize();
  var i = this._fixScrollPosition();
  this._setupAnimations(t, i);
};
v.prototype.resetMore = function() {
  this.hasMore = !0;
};
v.prototype._removeTombstones = function() {
  for (var e = void 0, t = 0, i = this.items.length, s = 0; s < i; s++) {
    var n = this.items[s].node, o = this.items[s].data;
    (!n || Mt(n)) && !o && (e || (e = s), n && this.scrollerEl.removeChild(n));
  }
  return t = i - e, this.items.splice(e), this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length), t;
};
v.prototype._collectUnusedNodes = function() {
  for (var e = [], t = 0; t < this.items.length; t++) {
    if (t === this.firstAttachedItem) {
      t = this.lastAttachedItem - 1;
      continue;
    }
    var i = this.items[t].node;
    i && (Mt(i) ? (this.tombstones.push(i), this.tombstones[this.tombstones.length - 1].style.display = "none") : e.push(i)), this.items[t].node = null;
  }
  return e;
};
v.prototype._createDOMNodes = function(e) {
  for (var t = {}, i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    for (; this.items.length <= i; )
      this._addItem();
    var s = this.items[i].node, n = this.items[i].data;
    if (s)
      if (Mt(s) && n)
        s.style.zIndex = 1, t[i] = [s, this.items[i].top - this.anchorScrollTop], this.items[i].node = null;
      else
        continue;
    var o = n ? this.options.render(n, e.pop()) : this._getTombStone();
    o.style.position = "absolute", this.items[i].top = -1, this.scrollerEl.appendChild(o), this.items[i].node = o;
  }
  return t;
};
v.prototype._cleanupUnusedNodes = function(e) {
  for (; e.length; )
    this.scrollerEl.removeChild(e.pop());
};
v.prototype._cacheNodeSize = function() {
  for (var e = this.firstAttachedItem; e < this.lastAttachedItem; e++)
    this.items[e].data && !this.items[e].height && (this.items[e].height = this.items[e].node.offsetHeight, this.items[e].width = this.items[e].node.offsetWidth);
};
v.prototype._fixScrollPosition = function() {
  this.anchorScrollTop = 0;
  for (var e = 0; e < this.anchorItem.index; e++)
    this.anchorScrollTop += this.items[e].height || this.tombstoneHeight;
  this.anchorScrollTop += this.anchorItem.offset;
  for (var t = this.anchorScrollTop - this.anchorItem.offset, i = this.anchorItem.index; i > this.firstAttachedItem; )
    t -= this.items[i - 1].height || this.tombstoneHeight, i--;
  return t;
};
v.prototype._setupAnimations = function(e, t) {
  var i = this;
  for (var s in e) {
    var n = e[s];
    this.items[s].node.style.transform = "translateY(" + (this.anchorScrollTop + n[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")", this.items[s].node.offsetTop, n[0].offsetTop, this.items[s].node.style.transition = "transform " + q + "ms";
  }
  for (var o = this.firstAttachedItem; o < this.lastAttachedItem; o++) {
    var r = e[o];
    if (r) {
      var a = r[0];
      a.style.transition = "transform " + q + "ms, opacity " + q + "ms", a.style.transform = "translateY(" + t + "px) scale(" + this.items[o].width / this.tombstoneWidth + ", " + this.items[o].height / this.tombstoneHeight + ")", a.style.opacity = 0;
    }
    t !== this.items[o].top && (r || (this.items[o].node.style.transition = ""), this.items[o].node.style.transform = "translateY(" + t + "px)"), this.items[o].top = t, t += this.items[o].height || this.tombstoneHeight;
  }
  this.scroller.maxScrollY = -(t - this.wrapperEl.offsetHeight + (this.hasMore ? ue : 0)), setTimeout(function() {
    for (var h in e) {
      var l = e[h];
      l[0].style.display = "none", i.tombstones.push(l[0]);
    }
  }, q);
};
v.prototype._getTombStone = function() {
  var e = this.tombstones.pop();
  return e ? (e.style.display = "", e.style.opacity = 1, e.style.transform = "", e.style.transition = "", e) : this.options.createTombstone();
};
v.prototype._addItem = function() {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};
v.prototype._calculateAnchoredItem = function(e, t) {
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
function _(e, t) {
  this.wrapper = typeof e == "string" ? document.querySelector(e) : e, this.wrapper || it("Can not resolve the wrapper DOM."), this.scroller = this.wrapper.children[0], this.scroller || it("The wrapper need at least one child element to be scroller."), this.scrollerStyle = this.scroller.style, this._init(e, t);
}
Ie(_);
Le(_);
_e(_);
We(_);
$e(_);
Ne(_);
ze(_);
Oe(_);
He(_);
Re(_);
Ue(_);
_.Version = "1.12.6";
const Vt = "update:visible", ot = {
  props: {
    visible: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      // If use the prop visible directly, the toggle will failed when user haven't set v-model as a reactive property.
      // So we use the data isVisible instead.
      isVisible: !1
    };
  },
  emits: [Vt],
  watch: {
    isVisible(e) {
      this.$emit(Vt, e);
    }
  },
  mounted() {
    this.$watch("visible", (e, t) => {
      e ? this.show() : t && !this._createAPI_reuse && this.hide();
    }, {
      immediate: !0
    });
  },
  methods: {
    show() {
      this.isVisible = !0;
    },
    hide() {
      this.isVisible = !1;
    }
  }
}, rt = {
  props: {
    zIndex: {
      type: Number,
      default: 100
    },
    maskClosable: {
      type: Boolean,
      default: !1
    }
  }
};
const at = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, n] of t)
    i[s] = n;
  return i;
}, Fe = "cube-popup", qt = "mask-click", Ve = {
  name: Fe,
  mixins: [ot, rt],
  emits: [qt],
  props: {
    type: {
      type: String,
      default: ""
    },
    mask: {
      type: Boolean,
      default: !0
    },
    content: {
      type: String,
      default: ""
    },
    center: {
      type: Boolean,
      default: !0
    },
    position: {
      type: String,
      default: ""
    }
  },
  computed: {
    rootClass() {
      const e = {
        "cube-popup_mask": this.mask
      };
      return this.type && (e[`cube-${this.type}`] = !0), e;
    },
    containerClass() {
      const e = this.center, t = this.position;
      if (t)
        return {
          [`cube-popup-${t}`]: !0
        };
      if (e)
        return {
          "cube-popup-center": !0
        };
    }
  },
  methods: {
    maskClick(e) {
      this.$emit(qt, e), this.maskClosable && this.hide();
    }
  }
}, qe = {
  key: 0,
  class: "cube-popup-content"
}, je = ["innerHTML"];
function Ke(e, t, i, s, n, o) {
  return vt((M(), D("div", {
    class: Dt(["cube-popup", o.rootClass]),
    style: re({ "z-index": e.zIndex })
  }, [
    b("div", {
      class: "cube-popup-mask",
      onTouchmove: t[0] || (t[0] = B(() => {
      }, ["prevent"])),
      onClick: t[1] || (t[1] = (...r) => o.maskClick && o.maskClick(...r))
    }, [
      kt(e.$slots, "mask")
    ], 32),
    b("div", {
      class: Dt(["cube-popup-container", o.containerClass]),
      onTouchmove: t[2] || (t[2] = B(() => {
      }, ["prevent"]))
    }, [
      e.$slots.default ? (M(), D("div", qe, [
        kt(e.$slots, "default")
      ])) : (M(), D("div", {
        key: 1,
        class: "cube-popup-content",
        innerHTML: i.content
      }, null, 8, je))
    ], 34)
  ], 6)), [
    [yt, e.isVisible]
  ]);
}
const Ge = /* @__PURE__ */ at(Ve, [["render", Ke]]), mt = {
  value: "value",
  text: "text",
  order: "order"
}, pe = {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedIndex: {
      type: Array,
      default() {
        return [];
      }
    },
    alias: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    valueKey() {
      return this.alias.value || mt.value;
    },
    textKey() {
      return this.alias.text || mt.text;
    },
    orderKey() {
      return mt.order;
    },
    merge() {
      return [this.data, this.selectedIndex];
    }
  },
  watch: {
    // Merge the watch handlers of data and selectedIndex into one.
    merge(e) {
      this.setData(e[0], e[1]);
    }
  }
}, St = {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: ""
    },
    confirmTxt: {
      type: String,
      default: ""
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    maskClosable: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    },
    _confirmTxt() {
      return this.confirmTxt || this.$t("ok");
    }
  }
}, Ze = {
  cancel: "取消",
  confirm: "确认",
  ok: "确定",
  prev: "上一步",
  next: "下一步",
  selectText: "请选择",
  now: "现在",
  selectTime: "选择时间",
  today: "今日",
  formatDate: "M月D日",
  hours: "点",
  minutes: "分",
  validator: {
    required: "此为必填项",
    type: {
      string: "请输入字符",
      number: "请输入数字",
      array: "数据类型应为数组",
      date: "请选择有效日期",
      email: "请输入有效邮箱",
      tel: "请输入有效的手机号码",
      url: "请输入有效网址"
    },
    min: {
      string: "至少输入 {{config}} 位字符",
      number: "不得小于 {{config}}",
      array: "请选择至少 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
      email: "至少输入 {{config}} 位字符",
      tel: "至少输入 {{config}} 位字符",
      url: "至少输入 {{config}} 位字符"
    },
    max: {
      string: "请勿超过 {{config}} 位字符",
      number: "请勿大于 {{config}}",
      array: "最多选择 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: "请勿超过 {{config}} 位字符",
      tel: "请勿超过 {{config}} 位字符",
      url: "请勿超过 {{config}} 位字符"
    },
    len: {
      string: "请输入 {{config}} 位字符",
      number: "长度应等于 {{config}}",
      array: "请选择 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: "请输入 {{config}} 位字符",
      tel: "请输入 {{config}} 位字符",
      url: "请输入 {{config}} 位字符"
    },
    pattern: "格式错误",
    custom: "未通过校验",
    notWhitespace: "空白内容无效"
  }
}, Je = {
  cancel: "Cancel",
  confirm: "Confirm",
  ok: "OK",
  prev: "Prev",
  next: "Next",
  selectText: "Please select",
  now: "Now",
  selectTime: "Select time",
  today: "Today",
  formatDate: "M-D",
  hours: "",
  minutes: "",
  validator: {
    required: "Required.",
    type: {
      string: "Please input characters.",
      number: "Please input numbers.",
      array: "The data type should be array.",
      date: "Please select a valid date.",
      email: "Please input a valid E-mail.",
      tel: "Please input a valid telphone number.",
      url: "Please input a valid web site."
    },
    min: {
      string: "Please input at least {{config}} characters.",
      number: "The number could not smaller than {{config}}.",
      array: "Please select at least {{config}} items.",
      date: 'Please select a date after {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input at least {{config}} characters.",
      tel: "Please input at least {{config}} characters.",
      url: "Please input at least {{config}} characters."
    },
    max: {
      string: "Please input no more than {{config}} characters.",
      number: "The number could not bigger than {{config}}",
      array: "Please select no more than  {{config}} items",
      date: 'Please select a date before {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input no more than {{config}} characters.",
      tel: "Please input no more than {{config}} characters.",
      url: "Please input no more than {{config}} characters."
    },
    len: {
      string: "Please input {{config}} characters.",
      number: "The length should equal {{config}}",
      array: "Please select {{config}} items",
      date: 'Please select {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input {{config}} characters.",
      tel: "Please input {{config}} characters.",
      url: "Please input {{config}} characters."
    },
    pattern: 'The input don"t match pattern.',
    custom: "Invalid.",
    notWhitespace: "Whitespace is invalid."
  }
}, Qe = function(e, t) {
};
function Be(e, t) {
  if (e.findIndex)
    return e.findIndex(t);
  let i = -1;
  return e.some(function(s, n, o) {
    const r = t.call(this, s, n, o);
    if (r)
      return i = n, r;
  }), i;
}
function fe(e, t) {
  for (let i in t)
    !e[i] || typeof e[i] != "object" ? e[i] = t[i] : fe(e[i], t[i]);
}
function de(e) {
  const t = Object.prototype.toString;
  return function(s) {
    return t.call(s) === `[object ${e}]`;
  };
}
function ti(e, t = "") {
  const i = t.split(".");
  let s = e;
  for (let n = 0; n < i.length; n++) {
    const o = i[n];
    if (Et(s[o])) {
      s = "";
      break;
    } else
      s = s[o];
  }
  return s;
}
function ei(e) {
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
const Et = de("Undefined"), ii = de("Number");
function me(e, t, i, s) {
  const n = {
    year: "(Y+)",
    month: "(M+)",
    date: "(D+)",
    hour: "(h+)",
    minute: "(m+)",
    second: "(s+)",
    quarter: "(q+)",
    millisecond: "(S)"
  };
  if (new RegExp(n[e], s).test(t)) {
    const o = e === "year" ? i.toString().substr(4 - RegExp.$1.length) : RegExp.$1.length === 1 ? i : si(i);
    t = t.replace(RegExp.$1, o);
  }
  return t;
}
function si(e) {
  return ("00" + e).substr(("" + e).length);
}
function ni(e, t) {
  const i = {
    year: {
      value: e.getFullYear(),
      regExpAttributes: "i"
    },
    month: {
      value: e.getMonth() + 1
    },
    date: {
      value: e.getDate(),
      regExpAttributes: "i"
    },
    hour: {
      value: e.getHours(),
      regExpAttributes: "i"
    },
    minute: {
      value: e.getMinutes()
    },
    second: {
      value: e.getSeconds()
    },
    quarter: {
      value: Math.floor((e.getMonth() + 3) / 3),
      regExpAttributes: "i"
    },
    millisecond: {
      value: e.getMilliseconds()
    }
  };
  for (const s in i)
    t = me(s, t, i[s].value, i[s].regExpAttributes);
  return t;
}
function oi(e, t) {
  let i = 30;
  return [1, 3, 5, 7, 8, 10, 12].indexOf(e) > -1 ? i = 31 : e === 2 && (i = !t || !(t % 400) || !(t % 4) && t % 100 ? 29 : 28), i;
}
let z;
const jt = "zh-CN", H = {
  name: "locale",
  install(e) {
    H.installed || (z = e.config.globalProperties, z.$cubeLang = jt, z.$cubeMessages = { [jt]: Ze, "en-US": Je }, H.installed = !0);
  },
  use(e, t) {
    z.$cubeLang = e;
    const i = z.$cubeMessages;
    e in i || (i[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const i = ii(e) ? e : e.replace(/-/g, "/"), s = new Date(i);
      return Et(t) ? s.toDateString() : ni(s, t);
    }
  },
  addHelper(e, t) {
    e in H.helpers || (H.helpers[e] = t);
  }
}, ge = H, ri = "Translation is not registered correctly, you can call Locale.use() to install it.", Pt = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return Et(t) ? (Qe(ri), "") : (i) => ti(t, i);
    }
  },
  beforeCreate() {
    ge.install(this._.appContext.app);
  }
}, ai = typeof window < "u", V = ai && navigator.userAgent.toLowerCase();
V && V.indexOf("android") > 0;
const hi = V && /iphone|ipad|ipod|ios/.test(V);
function li() {
  let e = !0;
  if (hi) {
    const t = ei(V);
    if (!t)
      return e;
    t.major >= 13 && t.minor >= 3 && (e = !1);
  }
  return e;
}
const Kt = li();
const ci = "cube-picker", Gt = "select", Zt = "value-change", Jt = "cancel", Qt = "change", ui = {
  name: ci,
  mixins: [ot, rt, pe, St, Pt],
  emits: [Gt, Zt, Jt, Qt],
  props: {
    pending: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      finalData: this.data.slice(),
      _values: [],
      _indexes: []
    };
  },
  created() {
    this._values = [], this._indexes = this.selectedIndex;
  },
  methods: {
    confirm() {
      if (!this._canConfirm())
        return;
      this.hide();
      let e = !1, t = [];
      const i = this.finalData.length, s = this._values.length;
      s !== i && (e = !0, s > i && (this._values.length = this._indexes.length = i));
      for (let n = 0; n < i; n++) {
        let o = this._getSelectIndex(this.wheels[n]);
        this._indexes[n] = o;
        let r = null, a = "";
        this.finalData[n].length && (r = this.finalData[n][o][this.valueKey], a = this.finalData[n][o][this.textKey]), this._values[n] !== r && (e = !0), this._values[n] = r, t[n] = a;
      }
      this.$emit(Gt, this._values, this._indexes, t), e && this.$emit(Zt, this._values, this._indexes, t);
    },
    maskClick() {
      this.maskClosable && this.cancel();
    },
    cancel() {
      this.hide(), this.$emit(Jt);
    },
    show() {
      if (!this.isVisible)
        if (this.isVisible = !0, !this.wheels || this.dirty)
          this.$nextTick(() => {
            this.wheels = this.wheels || [];
            let e = this.$refs.wheelWrapper;
            for (let t = 0; t < this.finalData.length; t++)
              this._createWheel(e, t).enable(), this.wheels[t].wheelTo(this._indexes[t]);
            this.dirty && this._destroyExtraWheels(), this.dirty = !1;
          });
        else
          for (let e = 0; e < this.finalData.length; e++)
            this.wheels[e].enable(), this.wheels[e].wheelTo(this._indexes[e]);
    },
    hide() {
      if (this.isVisible) {
        this.isVisible = !1;
        for (let e = 0; e < this.finalData.length; e++)
          this.wheels[e].disable();
      }
    },
    setData(e, t) {
      this._indexes = t ? [...t] : [], this.finalData = e.slice(), this.isVisible ? this.$nextTick(() => {
        const i = this.$refs.wheelWrapper;
        this.finalData.forEach((s, n) => {
          this._createWheel(i, n), this.wheels[n].wheelTo(this._indexes[n]);
        }), this._destroyExtraWheels();
      }) : this.dirty = !0;
    },
    refill(e) {
      let t = [];
      return e.length && e.forEach((i, s) => {
        t[s] = this.refillColumn(s, i);
      }), t;
    },
    refillColumn(e, t) {
      const i = this.$refs.wheelWrapper;
      let s = i.children[e].querySelector(".cube-picker-wheel-scroll"), n = this.wheels ? this.wheels[e] : !1, o = 0;
      if (s && n) {
        let r = this.finalData[e];
        this.finalData[e] = t;
        let a = n.getSelectedIndex();
        if (r.length) {
          let h = r[a][this.valueKey];
          for (let l = 0; l < t.length; l++)
            if (t[l][this.valueKey] === h) {
              o = l;
              break;
            }
        }
        this._indexes[e] = o, this.$nextTick(() => {
          n = this._createWheel(i, e), n.wheelTo(o);
        });
      }
      return o;
    },
    scrollTo(e, t) {
      const i = this.wheels[e];
      this._indexes[e] = t, i.wheelTo(t);
    },
    refresh() {
      this.$nextTick(() => {
        this.wheels.forEach((e) => {
          e.refresh();
        });
      });
    },
    _createWheel(e, t) {
      if (this.wheels[t])
        this.wheels[t].refresh();
      else {
        const i = this.wheels[t] = new _(e.children[t], {
          wheel: {
            selectedIndex: this._indexes[t] || 0,
            wheelWrapperClass: "cube-picker-wheel-scroll",
            wheelItemClass: "cube-picker-wheel-item"
          },
          swipeTime: this.swipeTime,
          observeDOM: !1,
          useTransition: Kt
        });
        i.on("scrollEnd", () => {
          this.$emit(Qt, t, this._getSelectIndex(i));
        });
      }
      return this.wheels[t];
    },
    _destroyExtraWheels() {
      const e = this.finalData.length;
      this.wheels.length > e && this.wheels.splice(e).forEach((i) => {
        i.destroy();
      });
    },
    _canConfirm() {
      return !this.pending && this.wheels.every((e) => !e.isInTransition);
    },
    _getFlexOrder(e) {
      return e[0] ? e[0][this.orderKey] : 0;
    },
    // fixed BScroll not calculating selectedIndex when setting useTransition to false
    _getSelectIndex(e) {
      const t = e.y;
      let i;
      return Kt ? i = e.getSelectedIndex() : t > e.minScrollY ? i = 0 : t < e.maxScrollY ? i = e.items.length - 1 : i = Math.round(Math.abs(t / e.itemHeight)), i;
    }
  },
  beforeUnmount() {
    this.wheels && this.wheels.forEach((e) => {
      e.destroy();
    }), this.wheels = null;
  },
  components: {
    CubePopup: Ge
  }
}, pi = { class: "cube-picker-choose border-bottom-1px" }, fi = { class: "cube-picker-title-group" }, di = ["innerHTML"], mi = ["innerHTML"], gi = { class: "cube-picker-content" }, vi = /* @__PURE__ */ b("i", { class: "border-bottom-1px" }, null, -1), yi = /* @__PURE__ */ b("i", { class: "border-top-1px" }, null, -1), xi = {
  class: "cube-picker-wheel-wrapper",
  ref: "wheelWrapper"
}, bi = { class: "cube-picker-wheel-scroll" }, Ti = ["innerHTML"], _i = /* @__PURE__ */ b("div", { class: "cube-picker-footer" }, null, -1);
function wi(e, t, i, s, n, o) {
  const r = Tt("cube-popup");
  return M(), _t(Xt, { name: "cube-picker-fade" }, {
    default: lt(() => [
      vt(tt(r, {
        type: "picker",
        mask: !0,
        center: !1,
        "z-index": e.zIndex,
        onTouchmove: t[3] || (t[3] = B(() => {
        }, ["prevent"])),
        onMaskClick: o.maskClick
      }, {
        default: lt(() => [
          tt(Xt, { name: "cube-picker-move" }, {
            default: lt(() => [
              vt(b("div", {
                class: "cube-picker-panel cube-safe-area-pb",
                onClick: t[2] || (t[2] = B(() => {
                }, ["stop"]))
              }, [
                b("div", pi, [
                  b("span", {
                    class: "cube-picker-cancel",
                    onClick: t[0] || (t[0] = (...a) => o.cancel && o.cancel(...a))
                  }, Ct(e._cancelTxt), 1),
                  b("span", {
                    class: "cube-picker-confirm",
                    onClick: t[1] || (t[1] = (...a) => o.confirm && o.confirm(...a))
                  }, Ct(e._confirmTxt), 1),
                  b("div", fi, [
                    b("h1", {
                      class: "cube-picker-title",
                      innerHTML: e.title
                    }, null, 8, di),
                    e.subtitle ? (M(), D("h2", {
                      key: 0,
                      class: "cube-picker-subtitle",
                      innerHTML: e.subtitle
                    }, null, 8, mi)) : ve("", !0)
                  ])
                ]),
                b("div", gi, [
                  vi,
                  yi,
                  b("div", xi, [
                    (M(!0), D(It, null, At(n.finalData, (a, h) => (M(), D("div", {
                      key: h,
                      style: re({ order: o._getFlexOrder(a) })
                    }, [
                      b("ul", bi, [
                        (M(!0), D(It, null, At(a, (l, c) => (M(), D("li", {
                          class: "cube-picker-wheel-item",
                          key: c,
                          innerHTML: l[e.textKey]
                        }, null, 8, Ti))), 128))
                      ])
                    ], 4))), 128))
                  ], 512)
                ]),
                _i
              ], 512), [
                [yt, e.isVisible]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["z-index", "onMaskClick"]), [
        [yt, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const W = /* @__PURE__ */ at(ui, [["render", wi]]), Mi = "cube-cascade-picker", Bt = "select", te = "cancel", ee = "change", Si = {
  name: Mi,
  mixins: [ot, rt, pe, St, Pt],
  emits: [Bt, te, ee],
  props: {
    async: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      cascadeData: this.data.slice(),
      pickerSelectedIndex: this.selectedIndex.slice(),
      pickerData: [],
      pending: !1
    };
  },
  created() {
    this._updatePickerData();
  },
  methods: {
    setData(e, t = []) {
      this.pending = !1, this.cascadeData = e.slice(), this.pickerSelectedIndex = t.slice(), this._updatePickerData();
    },
    _pickerSelect(e, t, i) {
      this.$emit(Bt, e, t, i);
    },
    _pickerCancel() {
      this.$emit(te);
    },
    _pickerChange(e, t) {
      t !== this.pickerSelectedIndex[e] && (this.pickerSelectedIndex.splice(e, 1, t), this.async ? this.pending = e !== this.pickerData.length - 1 : this._updatePickerData(e + 1)), this.$emit(ee, e, t);
    },
    _updatePickerData(e = 0) {
      let t = this.cascadeData, i = 0;
      for (; t; ) {
        if (i >= e) {
          let s = [];
          t.forEach((n) => {
            s.push({
              value: n[this.valueKey],
              text: n[this.textKey],
              order: n[this.orderKey]
            });
          }), this.pickerData[i] = s, this.pickerSelectedIndex[i] = e === 0 ? this.pickerSelectedIndex[i] < t.length && this.pickerSelectedIndex[i] || 0 : this.$refs.picker.refillColumn(i, s);
        }
        t = t.length ? t[this.pickerSelectedIndex[i]].children : null, i++;
      }
      i < this.pickerData.length && this.pickerData.splice(i, this.pickerData.length - i), this.pickerData = this.pickerData.slice();
    }
  },
  components: {
    CubePicker: W
  }
};
function Ei(e, t, i, s, n, o) {
  const r = Tt("cube-picker");
  return M(), _t(r, {
    ref: "picker",
    visible: e.isVisible,
    "onUpdate:visible": t[0] || (t[0] = (a) => e.isVisible = a),
    data: n.pickerData,
    "selected-index": n.pickerSelectedIndex,
    pending: n.pending,
    title: e.title,
    subtitle: e.subtitle,
    "z-index": e.zIndex,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "mask-closable": e.maskClosable,
    onSelect: o._pickerSelect,
    onCancel: o._pickerCancel,
    onChange: o._pickerChange
  }, null, 8, ["visible", "data", "selected-index", "pending", "title", "subtitle", "z-index", "cancel-txt", "confirm-txt", "swipe-time", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const $ = /* @__PURE__ */ at(Si, [["render", Ei]]), Pi = "cube-date-picker", ie = "select", se = "cancel", ne = "change", S = ["year", "month", "date", "hour", "minute", "second"], P = {
  month: {
    natureMin: 1,
    natureMax: 12
  },
  date: {
    natureMin: 1,
    natureMax: 31
  },
  hour: {
    natureMin: 0,
    natureMax: 23
  },
  minute: {
    natureMin: 0,
    natureMax: 59
  },
  second: {
    natureMin: 0,
    natureMax: 59
  }
}, Yi = {
  year: "YYYY",
  month: "M",
  date: "D",
  hour: "hh",
  minute: "mm",
  second: "ss"
}, Di = {
  name: Pi,
  mixins: [ot, rt, St, Pt],
  emits: [ie, se, ne],
  props: {
    min: {
      type: [Date, Array],
      default() {
        return new Date(2010, 0, 1);
      }
    },
    max: {
      type: [Date, Array],
      default() {
        return [(/* @__PURE__ */ new Date()).getFullYear() + 1, 12, 31, 23, 59, 59];
      }
    },
    startColumn: {
      type: String,
      default() {
        return "year";
      }
    },
    columnCount: {
      type: Number,
      default: 3
    },
    format: {
      type: Object,
      default() {
        return {};
      }
    },
    value: {
      type: [Date, Array],
      default(e) {
        return e.min;
      }
    },
    columnOrder: {
      type: Array,
      default() {
        return ["year", "month", "date", "hour", "minute", "second"];
      }
    }
  },
  computed: {
    formatConfig() {
      const e = Object.assign({}, Yi);
      return fe(e, this.format), e;
    },
    natureRangeCache() {
      const e = {
        hour: [],
        minute: [],
        second: []
      };
      return Object.keys(e).forEach((t) => {
        e[t] = this._range(t, P[t].natureMin, P[t].natureMax);
      }), e;
    },
    startIndex() {
      const e = S.indexOf(this.startColumn);
      return e < 0 ? 0 : e;
    },
    minArray() {
      return this.min instanceof Date ? j(this.min).slice(this.startIndex, this.startIndex + this.columnCount) : this.min;
    },
    maxArray() {
      return this.max instanceof Date ? j(this.max).slice(this.startIndex, this.startIndex + this.columnCount) : this.max;
    },
    valueArray() {
      return this.value instanceof Date ? j(this.value).slice(this.startIndex, this.startIndex + this.columnCount) : this.value;
    },
    data() {
      const e = [];
      return this._generateData(this.startIndex, 0, e), e;
    },
    selectedIndex() {
      const e = [];
      let t = this.data, i;
      for (let s = 0; s < this.columnCount && s < 6 - this.startIndex; s++)
        i = Be(t, (n) => this.valueArray[s] && n.value === this.valueArray[s]), e[s] = i !== -1 ? i : 0, t = t[e[s]] && t[e[s]].children;
      return e;
    }
  },
  methods: {
    _select(e, t, i) {
      this.$emit(ie, this._arrayToDate(e), e, i);
    },
    _cancel() {
      this.$emit(se);
    },
    _change(e, t) {
      this.$emit(ne, e, t);
    },
    _generateData(e, t, i) {
      if (t === 0) {
        const s = e === 0 ? this.minArray[0] : Math.max(this.minArray[0], P[S[e]].natureMin), n = e === 0 ? this.maxArray[0] : Math.min(this.maxArray[0], P[S[e]].natureMax);
        i.push.apply(i, this._range(S[e], s, n, !0, !0));
      } else if (e < 3 || i.isMin || i.isMax) {
        const s = e === 2 ? oi(i.value, i.year) : P[S[e]].natureMax, n = i.isMin ? Math.max(this.minArray[t], P[S[e]].natureMin) : P[S[e]].natureMin, o = i.isMax ? Math.min(this.maxArray[t], s) : s, r = e === 1 && this.startIndex === 0 && this.columnCount >= 3 && i.value;
        i.children = this._range(S[e], n, o, i.isMin, i.isMax, r);
      } else
        i.children = this.natureRangeCache[S[e]];
      t < this.columnCount - 1 && e < 5 && (i.children || i).forEach((s) => {
        (!s.children || s.isMin || s.isMax) && this._generateData(e + 1, t + 1, s);
      });
    },
    _arrayToDate(e) {
      const t = [], i = j(/* @__PURE__ */ new Date(0));
      for (let s = 0; s < 6; s++)
        s < this.startIndex ? t[s] = i[s] : s >= this.startIndex + this.columnCount ? t[s] = P[S[s]].natureMin : t[s] = e[s - this.startIndex];
      return t[1]--, new Date(...t);
    },
    _range(e, t, i, s, n, o = 0) {
      this._rangeCache || (this._rangeCache = {});
      const r = e + o + t + i + s + n;
      if (this._rangeCache[r])
        return this._rangeCache[r];
      const a = [], h = this.formatConfig[e];
      for (let l = t; l <= i; l++) {
        const c = {
          text: me(e, h, l, "i"),
          value: l,
          order: this.columnOrder.indexOf(e)
        };
        s && l === t && (c.isMin = !0), n && l === i && (c.isMax = !0), o && (c.year = o), a.push(c);
      }
      return this._rangeCache[r] = a, a;
    }
  },
  components: {
    CubeCascadePicker: $
  }
};
function j(e) {
  return [e.getFullYear(), e.getMonth() + 1, e.getDate(), e.getHours(), e.getMinutes(), e.getSeconds()];
}
function ki(e, t, i, s, n, o) {
  const r = Tt("cube-cascade-picker");
  return M(), _t(r, {
    visible: e.isVisible,
    "onUpdate:visible": t[0] || (t[0] = (a) => e.isVisible = a),
    data: o.data,
    "selected-index": o.selectedIndex,
    title: e.title,
    subtitle: e.subtitle,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "z-index": e.zIndex,
    "mask-closable": e.maskClosable,
    onSelect: o._select,
    onCancel: o._cancel,
    onChange: o._change
  }, null, 8, ["visible", "data", "selected-index", "title", "subtitle", "cancel-txt", "confirm-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const L = /* @__PURE__ */ at(Di, [["render", ki]]);
let Xi = 0;
const gt = [], Ci = (e, t, i = null, s = null) => {
  let n = t, o = i ? i(Lt) : null;
  const r = document ? document.createElement("div") : null, a = "cube_create_component_" + Xi++, h = tt({
    render() {
      return tt(e, {
        ...n
        // ref: '$cre'
      }, o);
    }
  }, { id: a });
  s && (h.appContext = s), gt.push(h);
  let l;
  return r && (Wt(h, r), l = h.component.subTree.component.proxy, l.$remove = function(c) {
    Wt(null, r), e._instance = null, c && c(), r && document.body.contains(r) && document.body.removeChild(r);
    const p = gt.findIndex((d) => {
      const { id: f } = d.props;
      return a === f;
    });
    ~p && gt.splice(p, 1);
  }, l.$updateProps = function(c, p, d = !0) {
    n = { ...d ? n : {}, ...c }, o = p ? { ...o || {}, ...p(Lt) } : null, h.component.proxy.$forceUpdate();
  }, document.body.appendChild(r)), l;
};
function oe(e) {
  if (!!this && !!this._ && $t(this._.vnode)) {
    const i = this && this._ && $t(this._.vnode) ? this._.vnode.props : null;
    this._.vnode.props = xe(i || {}, {
      onVnodeBeforeUnmount() {
        e.$remove();
      }
    });
  }
}
function Yt(e, t, i, s) {
  t.$create = e.config.globalProperties[`$create${ye(t.name.replace("cube-", "")).replace(/^\w/, (n) => n.toUpperCase())}`] = function(n, o = null) {
    if (s && t._instance)
      return n && t._instance.$updateProps(n, o, !1), oe.call(this, t._instance), t._instance;
    const r = t._instance = Ci(t, n, o, this ? this._.appContext : null);
    return oe.call(this, r), r;
  };
}
function Ii(e, t) {
  Yt(e, t);
}
function Ai(e, t) {
  Yt(e, t);
}
function Li(e, t) {
  Yt(e, t);
}
L.install = function(e) {
  e.component(W.name, W), e.component($.name, $), e.component(L.name, L), ge.install(e), Li(e, W), Ai(e, $), Ii(e, L);
};
L.Picker = W;
$.Picker = W;
L.CascadePicker = $;
export {
  L as default
};
