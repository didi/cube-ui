import "./css.mjs";
import { openBlock as v, createElementBlock as T, createElementVNode as y, normalizeStyle as nt, Fragment as rt, renderList as at, resolveComponent as z, renderSlot as I, toDisplayString as O, createVNode as Z, createCommentVNode as St, withDirectives as X, vShow as C, normalizeClass as Qt, createTextVNode as zt, createBlock as wt, Transition as Bt, withCtx as Pt, withModifiers as Dt } from "vue";
const Ft = typeof window < "u", F = Ft && navigator.userAgent.toLowerCase();
F && F.indexOf("android") > 0;
const te = F && /iphone|ipad|ipod|ios/.test(F);
function q(e) {
  return {
    top: e.offsetTop,
    left: e.offsetLeft,
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
let pt = (() => {
  if (!Ft)
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
function ee(e) {
  return pt === !1 ? !1 : pt === "standard" ? e === "transitionEnd" ? "transitionend" : e : pt + e.charAt(0).toUpperCase() + e.substr(1);
}
const Et = "update:visible", Vt = {
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
  emits: [Et],
  watch: {
    isVisible(e) {
      this.$emit(Et, e);
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
};
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var ie = function() {
  function e(t, i) {
    var s = [], o = !0, n = !1, r = void 0;
    try {
      for (var a = t[Symbol.iterator](), l; !(o = (l = a.next()).done) && (s.push(l.value), !(i && s.length === i)); o = !0)
        ;
    } catch (h) {
      n = !0, r = h;
    } finally {
      try {
        !o && a.return && a.return();
      } finally {
        if (n)
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
}(), se = function(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++)
      i[t] = e[t];
    return i;
  } else
    return Array.from(e);
};
function oe(e) {
  e.prototype.on = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    this._events[t] || (this._events[t] = []), this._events[t].push([i, s]);
  }, e.prototype.once = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    function o() {
      this.off(t, o), i.apply(s, arguments);
    }
    o.fn = i, this.on(t, o);
  }, e.prototype.off = function(t, i) {
    var s = this._events[t];
    if (s)
      for (var o = s.length; o--; )
        (s[o][0] === i || s[o][0] && s[o][0].fn === i) && (s[o][0] = void 0);
  }, e.prototype.trigger = function(t) {
    var i = this._events[t];
    if (i)
      for (var s = i.length, o = [].concat(se(i)), n = 0; n < s; n++) {
        var r = o[n], a = ie(r, 2), l = a[0], h = a[1];
        l && l.apply(h, [].slice.call(arguments, 1));
      }
  };
}
var Y = typeof window < "u", et = Y && navigator.userAgent.toLowerCase(), ne = et && /wechatdevtools/.test(et), re = et && et.indexOf("android") > 0;
function E() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function V(e) {
  for (var t = arguments.length, i = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    i[s - 1] = arguments[s];
  for (var o = 0; o < i.length; o++) {
    var n = i[o];
    for (var r in n)
      e[r] = n[r];
  }
  return e;
}
function G(e) {
  return e == null;
}
function Mt(e, t) {
  return Math.sqrt(e * e + t * t);
}
var Tt = Y && document.createElement("div").style, ut = function() {
  if (!Y)
    return !1;
  var e = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  };
  for (var t in e)
    if (Tt[e[t]] !== void 0)
      return t;
  return !1;
}();
function M(e) {
  return ut === !1 ? !1 : ut === "standard" ? e === "transitionEnd" ? "transitionend" : e : ut + e.charAt(0).toUpperCase() + e.substr(1);
}
function lt(e, t, i, s) {
  e.addEventListener(t, i, { passive: !1, capture: !!s });
}
function ht(e, t, i, s) {
  e.removeEventListener(t, i, { passive: !1, capture: !!s });
}
function qt(e) {
  for (var t = 0, i = 0; e; )
    t -= e.offsetLeft, i -= e.offsetTop, e = e.offsetParent;
  return {
    left: t,
    top: i
  };
}
function yt(e) {
  var t = e.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var jt = M("transform"), ae = Y && M("perspective") in Tt, _t = Y && ("ontouchstart" in window || ne), le = jt !== !1, he = Y && M("transition") in Tt, x = {
  transform: jt,
  transitionTimingFunction: M("transitionTimingFunction"),
  transitionDuration: M("transitionDuration"),
  transitionDelay: M("transitionDelay"),
  transformOrigin: M("transformOrigin"),
  transitionEnd: M("transitionEnd")
}, K = 1, dt = 2, N = {
  touchstart: K,
  touchmove: K,
  touchend: K,
  mousedown: dt,
  mousemove: dt,
  mouseup: dt
};
function L(e) {
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
function J(e, t) {
  for (var i in t)
    if (t[i].test(e[i]))
      return !0;
  return !1;
}
function ce(e, t) {
  var i = document.createEvent("Event");
  i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i);
}
function Zt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click", i = void 0;
  e.type === "mouseup" || e.type === "mousecancel" ? i = e : (e.type === "touchend" || e.type === "touchcancel") && (i = e.changedTouches[0]);
  var s = {};
  i && (s.screenX = i.screenX || 0, s.screenY = i.screenY || 0, s.clientX = i.clientX || 0, s.clientY = i.clientY || 0);
  var o = void 0, n = !0, r = !0;
  if (typeof MouseEvent < "u")
    try {
      o = new MouseEvent(t, V({
        bubbles: n,
        cancelable: r
      }, s));
    } catch {
      a();
    }
  else
    a();
  function a() {
    o = document.createEvent("Event"), o.initEvent(t, n, r), V(o, s);
  }
  o.forwardedTouchEvent = !0, o._constructed = !0, e.target.dispatchEvent(o);
}
function pe(e) {
  Zt(e, "dblclick");
}
function ue(e, t) {
  t.firstChild ? de(e, t.firstChild) : t.appendChild(e);
}
function de(e, t) {
  t.parentNode.insertBefore(e, t);
}
function Yt(e, t) {
  e.removeChild(t);
}
var fe = {
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
function me(e) {
  e.prototype._init = function(t, i) {
    this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }, e.prototype.setScale = function(t) {
    this.lastScale = G(this.scale) ? t : this.scale, this.scale = t;
  }, e.prototype._handleOptions = function(t) {
    this.options = V({}, fe, t), this.translateZ = this.options.HWCompositing && ae ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && he, this.options.useTransform = this.options.useTransform && le, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = this.options.eventPassthrough === "horizontal" ? !1 : this.options.scrollX, this.options.scrollY = this.options.eventPassthrough === "vertical" ? !1 : this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.tap === !0 && (this.options.tap = "tap");
  }, e.prototype._addDOMEvents = function() {
    var t = lt;
    this._handleDOMEvents(t);
  }, e.prototype._removeDOMEvents = function() {
    var t = ht;
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
        set: function(n) {
          i = n;
          for (var r = t.scroller.children.length ? t.scroller.children : [t.scroller], a = i && !t.pulling ? "none" : "auto", l = 0; l < r.length; l++)
            r[l].style.pointerEvents = a;
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
      var i = void 0, s = new MutationObserver(function(n) {
        if (!t._shouldNotRefresh()) {
          for (var r = !1, a = !1, l = 0; l < n.length; l++) {
            var h = n[l];
            if (h.type !== "attributes") {
              r = !0;
              break;
            } else if (h.target !== t.scroller) {
              a = !0;
              break;
            }
          }
          r ? t.refresh() : a && (clearTimeout(i), i = setTimeout(function() {
            t._shouldNotRefresh() || t.refresh();
          }, 60));
        }
      }), o = {
        attributes: !0,
        childList: !0,
        subtree: !0
      };
      s.observe(this.scroller, o), this.on("destroy", function() {
        s.disconnect();
      });
    } else
      this._checkDOMUpdate();
  }, e.prototype._shouldNotRefresh = function() {
    var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
    return this.isInTransition || this.stopFromTransition || t;
  }, e.prototype._checkDOMUpdate = function() {
    var t = L(this.scroller), i = t.width, s = t.height;
    function o() {
      if (!this.destroyed) {
        t = L(this.scroller);
        var r = t.width, a = t.height;
        (i !== r || s !== a) && this.refresh(), i = r, s = a, n.call(this);
      }
    }
    function n() {
      var r = this;
      setTimeout(function() {
        o.call(r);
      }, 1e3);
    }
    n.call(this);
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
        this.enabled && !t._constructed && (J(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._onMouseWheel(t);
        break;
    }
  }, e.prototype.refresh = function() {
    var t = window.getComputedStyle(this.wrapper, null).position === "static", i = L(this.wrapper);
    this.wrapperWidth = i.width, this.wrapperHeight = i.height;
    var s = L(this.scroller);
    this.scrollerWidth = Math.round(s.width * this.scale), this.scrollerHeight = Math.round(s.height * this.scale), this.relativeX = s.left, this.relativeY = s.top, t && (this.relativeX -= i.left, this.relativeY -= i.top), this.minScrollX = 0, this.minScrollY = 0;
    var o = this.options.wheel;
    o ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, this.selectedIndex === void 0 && (this.selectedIndex = o.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = qt(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition();
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
function Xt(e, t, i, s, o, n, r) {
  var a = e - t, l = Math.abs(a) / i, h = r.deceleration, u = r.itemHeight, p = r.swipeBounceTime, f = r.wheel, d = r.swipeTime, c = d, m = f ? 4 : 15, _ = e + l / h * (a < 0 ? -1 : 1);
  return f && u && (_ = Math.round(_ / u) * u), _ < s ? (_ = n ? Math.max(s - n / 4, s - n / m * l) : s, c = p) : _ > o && (_ = n ? Math.min(o + n / 4, o + n / m * l) : o, c = p), {
    destination: Math.round(_),
    duration: c
  };
}
var ge = 100 / 60;
function Gt() {
}
var ft = function() {
  return Y ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(e) {
    return window.setTimeout(e, (e.interval || ge) / 2);
  } : Gt;
}(), H = function() {
  return Y ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(e) {
    window.clearTimeout(e);
  } : Gt;
}(), $ = 1, Q = -1, mt = 1, gt = -1, Ct = 1, A = 3;
function it(e) {
  console.error("[BScroll warn]: " + e);
}
function B(e, t) {
  if (!e)
    throw new Error("[BScroll] " + t);
}
function ve(e) {
  e.prototype._start = function(t) {
    var i = N[t.type];
    if (!(i !== K && t.button !== 0) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
      this.initiated = i, this.options.preventDefault && !J(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = E(), this.options.wheel && (this.target = t.target), this.stop();
      var s = t.touches ? t.touches[0] : t;
      this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = s.pageX, this.pointY = s.pageY, this.trigger("beforeScrollStart");
    }
  }, e.prototype._move = function(t) {
    if (!(!this.enabled || this.destroyed || N[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches ? t.touches[0] : t, s = i.pageX - this.pointX, o = i.pageY - this.pointY;
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX += s, this.distY += o;
      var n = Math.abs(this.distX), r = Math.abs(this.distY), a = E();
      if (!(a - this.endTime > this.options.momentumLimitTime && r < this.options.momentumLimitDistance && n < this.options.momentumLimitDistance)) {
        if (!this.directionLocked && !this.options.freeScroll && (n > r + this.options.directionLockThreshold ? this.directionLocked = "h" : r >= n + this.options.directionLockThreshold ? this.directionLocked = "v" : this.directionLocked = "n"), this.directionLocked === "h") {
          if (this.options.eventPassthrough === "vertical")
            t.preventDefault();
          else if (this.options.eventPassthrough === "horizontal") {
            this.initiated = !1;
            return;
          }
          o = 0;
        } else if (this.directionLocked === "v") {
          if (this.options.eventPassthrough === "horizontal")
            t.preventDefault();
          else if (this.options.eventPassthrough === "vertical") {
            this.initiated = !1;
            return;
          }
          s = 0;
        }
        s = this.hasHorizontalScroll ? s : 0, o = this.hasVerticalScroll ? o : 0, this.movingDirectionX = s > 0 ? gt : s < 0 ? mt : 0, this.movingDirectionY = o > 0 ? Q : o < 0 ? $ : 0;
        var l = this.x + s, h = this.y + o, u = !1, p = !1, f = !1, d = !1, c = this.options.bounce;
        c !== !1 && (u = c.top === void 0 ? !0 : c.top, p = c.bottom === void 0 ? !0 : c.bottom, f = c.left === void 0 ? !0 : c.left, d = c.right === void 0 ? !0 : c.right), (l > this.minScrollX || l < this.maxScrollX) && (l > this.minScrollX && f || l < this.maxScrollX && d ? l = this.x + s / 3 : l = l > this.minScrollX ? this.minScrollX : this.maxScrollX), (h > this.minScrollY || h < this.maxScrollY) && (h > this.minScrollY && u || h < this.maxScrollY && p ? h = this.y + o / 3 : h = h > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(l, h), a - this.startTime > this.options.momentumLimitTime && (this.startTime = a, this.startX = this.x, this.startY = this.y, this.options.probeType === Ct && this.trigger("scroll", {
          x: this.x,
          y: this.y
        })), this.options.probeType > Ct && this.trigger("scroll", {
          x: this.x,
          y: this.y
        });
        var m = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, _ = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, D = this.pointX - m, P = this.pointY - _;
        (D > document.documentElement.clientWidth - this.options.momentumLimitDistance || D < this.options.momentumLimitDistance || P < this.options.momentumLimitDistance || P > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
      }
    }
  }, e.prototype._end = function(t) {
    if (!(!this.enabled || this.destroyed || N[t.type] !== this.initiated)) {
      this.initiated = !1, this.options.preventDefault && !J(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), this.isInTransition = !1;
      var i = Math.round(this.x), s = Math.round(this.y), o = i - this.absStartX, n = s - this.absStartY;
      if (this.directionX = o > 0 ? gt : o < 0 ? mt : 0, this.directionY = n > 0 ? Q : n < 0 ? $ : 0, !(this.options.pullDownRefresh && this._checkPullDown())) {
        if (this._checkClick(t)) {
          this.trigger("scrollCancel");
          return;
        }
        if (!this.resetPosition(this.options.bounceTime, b.bounce)) {
          this._translate(i, s), this.endTime = E();
          var r = this.endTime - this.startTime, a = Math.abs(i - this.startX), l = Math.abs(s - this.startY);
          if (this._events.flick && r < this.options.flickLimitTime && a < this.options.flickLimitDistance && l < this.options.flickLimitDistance) {
            this.trigger("flick");
            return;
          }
          var h = 0;
          if (this.options.momentum && r < this.options.momentumLimitTime && (l > this.options.momentumLimitDistance || a > this.options.momentumLimitDistance)) {
            var u = !1, p = !1, f = !1, d = !1, c = this.options.bounce;
            c !== !1 && (u = c.top === void 0 ? !0 : c.top, p = c.bottom === void 0 ? !0 : c.bottom, f = c.left === void 0 ? !0 : c.left, d = c.right === void 0 ? !0 : c.right);
            var m = this.directionX === gt && f || this.directionX === mt && d ? this.wrapperWidth : 0, _ = this.directionY === Q && u || this.directionY === $ && p ? this.wrapperHeight : 0, D = this.hasHorizontalScroll ? Xt(this.x, this.startX, r, this.maxScrollX, this.minScrollX, m, this.options) : { destination: i, duration: 0 }, P = this.hasVerticalScroll ? Xt(this.y, this.startY, r, this.maxScrollY, this.minScrollY, _, this.options) : { destination: s, duration: 0 };
            i = D.destination, s = P.destination, h = Math.max(D.duration, P.duration), this.isInTransition = !0;
          } else
            this.options.wheel && (s = Math.round(s / this.itemHeight) * this.itemHeight, h = this.options.wheel.adjustTime || 400);
          var ct = b.swipe;
          if (this.options.snap) {
            var U = this._nearestSnap(i, s);
            this.currentPage = U, h = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - U.x), 1e3), Math.min(Math.abs(s - U.y), 1e3)), 300), i = U.x, s = U.y, this.directionX = 0, this.directionY = 0, ct = this.options.snap.easing || b.bounce;
          }
          if (i !== this.x || s !== this.y) {
            (i > this.minScrollX || i < this.maxScrollX || s > this.minScrollY || s < this.maxScrollY) && (ct = b.swipeBounce), this.scrollTo(i, s, h, ct);
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
          var s = Math.abs(Math.round(this.y / this.itemHeight)), o = Math.round((this.pointY + yt(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[s + o];
        }
        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, b.swipe), !0;
      } else {
        if (!i) {
          var n = this.options.dblclick, r = !1;
          if (n && this.lastClickTime) {
            var a = n.delay, l = a === void 0 ? 300 : a;
            E() - this.lastClickTime < l && (r = !0, pe(t));
          }
          return this.options.tap && ce(t, this.options.tap), this.options.click && !J(t.target, this.options.preventDefaultException) && Zt(t), this.lastClickTime = r ? null : E(), !0;
        }
        return !1;
      }
    return !1;
  }, e.prototype._resize = function() {
    var t = this;
    this.enabled && (re && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
      t.refresh();
    }, this.options.resizePolling));
  }, e.prototype._startProbe = function() {
    H(this.probeTimer), this.probeTimer = ft(i);
    var t = this;
    function i() {
      var s = t.getComputedPosition();
      if (t.trigger("scroll", s), !t.isInTransition) {
        t.trigger("scrollEnd", s);
        return;
      }
      t.probeTimer = ft(i);
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
      var i = !this.pulling || this.movingDirectionY === $;
      i && !this.resetPosition(this.options.bounceTime, b.bounce) && (this.isInTransition = !1, this.options.probeType !== A && this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }
  }, e.prototype._translate = function(t, i, s) {
    if (B(!G(t) && !G(i), "Translate x or y is null or undefined."), G(s) && (s = this.scale), this.options.useTransform ? this.scrollerStyle[x.transform] = "translate(" + t + "px," + i + "px) scale(" + s + ")" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel)
      for (var o = this.options.wheel.rotate, n = o === void 0 ? 25 : o, r = 0; r < this.items.length; r++) {
        var a = n * (i / this.itemHeight + r);
        this.items[r].style[x.transform] = "rotateX(" + a + "deg)";
      }
    if (this.x = t, this.y = i, this.setScale(s), this.indicators)
      for (var l = 0; l < this.indicators.length; l++)
        this.indicators[l].updatePosition();
  }, e.prototype._animate = function(t, i, s, o) {
    var n = this, r = this.x, a = this.y, l = this.lastScale, h = this.scale, u = E(), p = u + s;
    function f() {
      var d = E();
      if (d >= p) {
        n.isAnimating = !1, n._translate(t, i, h), n.trigger("scroll", {
          x: n.x,
          y: n.y
        }), !n.pulling && !n.resetPosition(n.options.bounceTime) && n.trigger("scrollEnd", {
          x: n.x,
          y: n.y
        });
        return;
      }
      d = (d - u) / s;
      var c = o(d), m = (t - r) * c + r, _ = (i - a) * c + a, D = (h - l) * c + l;
      n._translate(m, _, D), n.isAnimating && (n.animateTimer = ft(f)), n.options.probeType === A && n.trigger("scroll", {
        x: n.x,
        y: n.y
      });
    }
    this.isAnimating = !0, H(this.animateTimer), f();
  }, e.prototype.scrollBy = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : b.bounce;
    t = this.x + t, i = this.y + i, this.scrollTo(t, i, s, o);
  }, e.prototype.scrollTo = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : b.bounce;
    this.isInTransition = this.options.useTransition && s > 0 && (t !== this.x || i !== this.y), !s || this.options.useTransition ? (this._transitionTimingFunction(o.style), this._transitionTime(s), this._translate(t, i), s && this.options.probeType === A && this._startProbe(), !s && (t !== this.x || i !== this.y) && (this.trigger("scroll", {
      x: t,
      y: i
    }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, b.bounce) || this.trigger("scrollEnd", {
      x: t,
      y: i
    })), this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, s, o.fn);
  }, e.prototype.scrollToElement = function(t, i, s, o, n) {
    if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !(this.options.wheel && !t.classList.contains(this.options.wheel.wheelItemClass)))) {
      var r = qt(t);
      r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= o || 0, r.left = r.left > this.minScrollX ? this.minScrollX : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > this.minScrollY ? this.minScrollY : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, i, n);
    }
  }, e.prototype.resetPosition = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : b.bounce, s = this.x, o = Math.round(s);
    !this.hasHorizontalScroll || o > this.minScrollX ? s = this.minScrollX : o < this.maxScrollX && (s = this.maxScrollX);
    var n = this.y, r = Math.round(n);
    return !this.hasVerticalScroll || r > this.minScrollY ? n = this.minScrollY : r < this.maxScrollY && (n = this.maxScrollY), s === this.x && n === this.y ? !1 : (this.scrollTo(s, n, t, i), !0);
  }, e.prototype.getComputedPosition = function() {
    var t = window.getComputedStyle(this.scroller, null), i = void 0, s = void 0;
    return this.options.useTransform ? (t = t[x.transform].split(")")[0].split(", "), i = +(t[12] || t[4]), s = +(t[13] || t[5])) : (i = +t.left.replace(/[^-\d.]/g, ""), s = +t.top.replace(/[^-\d.]/g, "")), {
      x: i,
      y: s
    };
  }, e.prototype.stop = function() {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = !1, H(this.probeTimer);
      var t = this.getComputedPosition();
      this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0;
    } else
      !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, H(this.animateTimer), this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0);
  }, e.prototype.destroy = function() {
    this.destroyed = !0, this.trigger("destroy"), this.options.useTransition ? H(this.probeTimer) : H(this.animateTimer), this._removeDOMEvents(), this._events = {};
  };
}
function we(e) {
  e.prototype._initSnap = function() {
    var t = this;
    this.currentPage = {};
    var i = this.options.snap;
    if (i.loop) {
      var s = this.scroller.children;
      s.length > 1 ? (ue(s[s.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(s[1].cloneNode(!0))) : i.loop = !1;
    }
    var o = i.el;
    typeof o == "string" && (o = this.scroller.querySelectorAll(o)), this.on("refresh", function() {
      if (t.pages = [], !(!t.wrapperWidth || !t.wrapperHeight || !t.scrollerWidth || !t.scrollerHeight)) {
        var n = i.stepX || t.wrapperWidth, r = i.stepY || t.wrapperHeight, a = 0, l = void 0, h = void 0, u = void 0, p = 0, f = void 0, d = 0, c = void 0, m = void 0;
        if (o)
          for (f = o.length, c = -1; p < f; p++)
            m = L(o[p]), (p === 0 || m.left <= L(o[p - 1]).left) && (d = 0, c++), t.pages[d] || (t.pages[d] = []), a = Math.max(-m.left, t.maxScrollX), l = Math.max(-m.top, t.maxScrollY), h = a - Math.round(m.width / 2), u = l - Math.round(m.height / 2), t.pages[d][c] = {
              x: a,
              y: l,
              width: m.width,
              height: m.height,
              cx: h,
              cy: u
            }, a > t.maxScrollX && d++;
        else
          for (h = Math.round(n / 2), u = Math.round(r / 2); a > -t.scrollerWidth; ) {
            for (t.pages[p] = [], f = 0, l = 0; l > -t.scrollerHeight; )
              t.pages[p][f] = {
                x: Math.max(a, t.maxScrollX),
                y: Math.max(l, t.maxScrollY),
                width: n,
                height: r,
                cx: a - h,
                cy: l - u
              }, l -= r, f++;
            a -= n, p++;
          }
        t._checkSnapLoop();
        var _ = i._loopX ? 1 : 0, D = i._loopY ? 1 : 0;
        t._goToPage(t.currentPage.pageX || _, t.currentPage.pageY || D, 0);
        var P = i.threshold;
        P % 1 === 0 ? (t.snapThresholdX = P, t.snapThresholdY = P) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * P), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * P));
      }
    }), this.on("scrollEnd", function() {
      i.loop && (i._loopX ? (t.currentPage.pageX === 0 && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (t.currentPage.pageY === 0 && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)));
    }), i.listenFlick !== !1 && this.on("flick", function() {
      var n = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
      t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, n);
    }), this.on("destroy", function() {
      if (i.loop) {
        var n = t.scroller.children;
        n.length > 2 && (Yt(t.scroller, n[n.length - 1]), Yt(t.scroller, n[0]));
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
    for (var o = this.pages.length; s < o; s++)
      if (t >= this.pages[s][0].cx) {
        t = this.pages[s][0].x;
        break;
      }
    o = this.pages[s].length;
    for (var n = 0; n < o; n++)
      if (i >= this.pages[0][n].cy) {
        i = this.pages[0][n].y;
        break;
      }
    return s === this.currentPage.pageX && (s += this.directionX, s < 0 ? s = 0 : s >= this.pages.length && (s = this.pages.length - 1), t = this.pages[s][0].x), n === this.currentPage.pageY && (n += this.directionY, n < 0 ? n = 0 : n >= this.pages[0].length && (n = this.pages[0].length - 1), i = this.pages[0][n].y), {
      x: t,
      y: i,
      pageX: s,
      pageY: n
    };
  }, e.prototype._goToPage = function(t) {
    var i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments[2], o = arguments[3], n = this.options.snap;
    if (!(!n || !this.pages || !this.pages.length) && (o = o || n.easing || b.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), !!this.pages[t])) {
      i >= this.pages[t].length ? i = this.pages[t].length - 1 : i < 0 && (i = 0);
      var r = this.pages[t][i].x, a = this.pages[t][i].y;
      s = s === void 0 ? n.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(a - this.y), 1e3)), 300) : s, this.currentPage = {
        x: r,
        y: a,
        pageX: t,
        pageY: i
      }, this.scrollTo(r, a, s, o);
    }
  }, e.prototype.goToPage = function(t, i, s, o) {
    var n = this.options.snap;
    if (!(!n || !this.pages || !this.pages.length)) {
      if (n.loop) {
        var r = void 0;
        n._loopX ? (r = this.pages.length - 2, t >= r ? t = r - 1 : t < 0 && (t = 0), t += 1) : (r = this.pages[0].length - 2, i >= r ? i = r - 1 : i < 0 && (i = 0), i += 1);
      }
      this._goToPage(t, i, s, o);
    }
  }, e.prototype.next = function(t, i) {
    var s = this.options.snap;
    if (s) {
      var o = this.currentPage.pageX, n = this.currentPage.pageY;
      o++, o >= this.pages.length && this.hasVerticalScroll && (o = 0, n++), this._goToPage(o, n, t, i);
    }
  }, e.prototype.prev = function(t, i) {
    var s = this.options.snap;
    if (s) {
      var o = this.currentPage.pageX, n = this.currentPage.pageY;
      o--, o < 0 && this.hasVerticalScroll && (o = 0, n--), this._goToPage(o, n, t, i);
    }
  }, e.prototype.getCurrentPage = function() {
    var t = this.options.snap;
    if (!t)
      return null;
    if (t.loop) {
      var i = void 0;
      return t._loopX ? i = V({}, this.currentPage, {
        pageX: this.currentPage.pageX - 1
      }) : i = V({}, this.currentPage, {
        pageY: this.currentPage.pageY - 1
      }), i;
    }
    return this.currentPage;
  };
}
function ye(e) {
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
var R = 8;
function _e(e) {
  e.prototype._initScrollbar = function() {
    var t = this, i = this.options.scrollbar, s = i.fade, o = s === void 0 ? !0 : s, n = i.interactive, r = n === void 0 ? !1 : n;
    this.indicators = [];
    var a = void 0;
    this.options.scrollX && (a = {
      el: It("horizontal"),
      direction: "horizontal",
      fade: o,
      interactive: r
    }, this._insertScrollBar(a.el), this.indicators.push(new g(this, a))), this.options.scrollY && (a = {
      el: It("vertical"),
      direction: "vertical",
      fade: o,
      interactive: r
    }, this._insertScrollBar(a.el), this.indicators.push(new g(this, a))), this.on("refresh", function() {
      for (var l = 0; l < t.indicators.length; l++)
        t.indicators[l].refresh();
    }), o && (this.on("scrollEnd", function() {
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
function It(e) {
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
    e = e ? "1" : "0", this.wrapperStyle[x.transitionDuration] = s + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
      i.wrapperStyle.opacity = e, i.visible = +e;
    }, 0);
  }
};
g.prototype.updatePosition = function() {
  if (this.direction === "vertical") {
    var e = Math.round(this.sizeRatioY * this.scroller.y);
    if (e < 0) {
      this.transitionTime(500);
      var t = Math.max(this.indicatorHeight + e * 3, R);
      this.indicatorStyle.height = t + "px", e = 0;
    } else if (e > this.maxPosY) {
      this.transitionTime(500);
      var i = Math.max(this.indicatorHeight - (e - this.maxPosY) * 3, R);
      this.indicatorStyle.height = i + "px", e = this.maxPosY + this.indicatorHeight - i;
    } else
      this.indicatorStyle.height = this.indicatorHeight + "px";
    this.y = e, this.scroller.options.useTransform ? this.indicatorStyle[x.transform] = "translateY(" + e + "px)" + this.scroller.translateZ : this.indicatorStyle.top = e + "px";
  } else {
    var s = Math.round(this.sizeRatioX * this.scroller.x);
    if (s < 0) {
      this.transitionTime(500);
      var o = Math.max(this.indicatorWidth + s * 3, R);
      this.indicatorStyle.width = o + "px", s = 0;
    } else if (s > this.maxPosX) {
      this.transitionTime(500);
      var n = Math.max(this.indicatorWidth - (s - this.maxPosX) * 3, R);
      this.indicatorStyle.width = n + "px", s = this.maxPosX + this.indicatorWidth - n;
    } else
      this.indicatorStyle.width = this.indicatorWidth + "px";
    this.x = s, this.scroller.options.useTransform ? this.indicatorStyle[x.transform] = "translateX(" + s + "px)" + this.scroller.translateZ : this.indicatorStyle.left = s + "px";
  }
};
g.prototype.transitionTime = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  this.indicatorStyle[x.transitionDuration] = e + "ms";
};
g.prototype.transitionTimingFunction = function(e) {
  this.indicatorStyle[x.transitionTimingFunction] = e;
};
g.prototype.destroy = function() {
  this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper);
};
g.prototype._start = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = E(), this._handleMoveEvents(lt), this.scroller.trigger("beforeScrollStart");
};
g.prototype._move = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
  var i = t.pageX - this.lastPointX;
  this.lastPointX = t.pageX;
  var s = t.pageY - this.lastPointY;
  this.lastPointY = t.pageY;
  var o = this.x + i, n = this.y + s;
  this._pos(o, n);
};
g.prototype._end = function(e) {
  if (this.initiated) {
    this.initiated = !1, e.preventDefault(), e.stopPropagation(), this._handleMoveEvents(ht);
    var t = this.scroller.options.snap;
    if (t) {
      var i = t.speed, s = t.easing, o = s === void 0 ? b.bounce : s, n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), r = i || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - n.x), 1e3), Math.min(Math.abs(this.scroller.y - n.y), 1e3)), 300);
      (this.scroller.x !== n.x || this.scroller.y !== n.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, r, o));
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
    this.indicatorHeight = Math.max(Math.round(e * e / (this.scroller.scrollerHeight || e || 1)), R), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = e - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var t = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(t * t / (this.scroller.scrollerWidth || t || 1)), R), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = t - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};
g.prototype._addDOMEvents = function() {
  var e = lt;
  this._handleDOMEvents(e);
};
g.prototype._removeDOMEvents = function() {
  var e = ht;
  this._handleDOMEvents(e), this._handleMoveEvents(e);
};
g.prototype._handleMoveEvents = function(e) {
  this.scroller.options.disableTouch || e(window, "touchmove", this), this.scroller.options.disableMouse || e(window, "mousemove", this);
};
g.prototype._handleDOMEvents = function(e) {
  this.scroller.options.disableTouch || (e(this.indicator, "touchstart", this), e(window, "touchend", this)), this.scroller.options.disableMouse || (e(this.indicator, "mousedown", this), e(window, "mouseup", this));
};
function be(e) {
  e.prototype._initPullDown = function() {
    this.options.probeType = A;
  }, e.prototype._checkPullDown = function() {
    var t = this.options.pullDownRefresh, i = t.threshold, s = i === void 0 ? 90 : i, o = t.stop, n = o === void 0 ? 40 : o;
    return this.directionY !== Q || this.y < s ? !1 : (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, n, this.options.bounceTime, b.bounce), this.pulling);
  }, e.prototype.finishPullDown = function() {
    this.pulling = !1, this.resetPosition(this.options.bounceTime, b.bounce);
  }, e.prototype.openPullDown = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullDownRefresh = t, this._initPullDown();
  }, e.prototype.closePullDown = function() {
    this.options.pullDownRefresh = !1;
  };
}
function Te(e) {
  e.prototype._initPullUp = function() {
    this.options.probeType = A, this.pullupWatching = !1, this._watchPullUp();
  }, e.prototype._watchPullUp = function() {
    this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd));
  }, e.prototype._checkToEnd = function(t) {
    var i = this, s = this.options.pullUpLoad.threshold, o = s === void 0 ? 0 : s;
    this.movingDirectionY === $ && t.y <= this.maxScrollY + o && (this.once("scrollEnd", function() {
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
function xe(e) {
  e.prototype._initMouseWheel = function() {
    var t = this;
    this._handleMouseWheelEvent(lt), this.on("destroy", function() {
      clearTimeout(t.mouseWheelTimer), clearTimeout(t.mouseWheelEndTimer), t._handleMouseWheelEvent(ht);
    }), this.firstWheelOpreation = !0;
  }, e.prototype._handleMouseWheelEvent = function(t) {
    t(this.wrapper, "wheel", this), t(this.wrapper, "mousewheel", this), t(this.wrapper, "DOMMouseScroll", this);
  }, e.prototype._onMouseWheel = function(t) {
    var i = this;
    if (this.enabled) {
      t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.firstWheelOpreation && this.trigger("scrollStart"), this.firstWheelOpreation = !1;
      var s = this.options.mouseWheel, o = s.speed, n = o === void 0 ? 20 : o, r = s.invert, a = r === void 0 ? !1 : r, l = s.easeTime, h = l === void 0 ? 300 : l;
      clearTimeout(this.mouseWheelTimer), this.mouseWheelTimer = setTimeout(function() {
        !i.options.snap && !h && i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        }), i.firstWheelOpreation = !0;
      }, 400);
      var u = void 0, p = void 0;
      switch (!0) {
        case "deltaX" in t:
          t.deltaMode === 1 ? (u = -t.deltaX * n, p = -t.deltaY * n) : (u = -t.deltaX, p = -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          u = t.wheelDeltaX / 120 * n, p = t.wheelDeltaY / 120 * n;
          break;
        case "wheelDelta" in t:
          u = p = t.wheelDelta / 120 * n;
          break;
        case "detail" in t:
          u = p = -t.detail / 3 * n;
          break;
        default:
          return;
      }
      var f = a ? -1 : 1;
      u *= f, p *= f, this.hasVerticalScroll || (u = p, p = 0);
      var d = void 0, c = void 0;
      if (this.options.snap) {
        d = this.currentPage.pageX, c = this.currentPage.pageY, u > 0 ? d-- : u < 0 && d++, p > 0 ? c-- : p < 0 && c++, this._goToPage(d, c);
        return;
      }
      d = this.x + Math.round(this.hasHorizontalScroll ? u : 0), c = this.y + Math.round(this.hasVerticalScroll ? p : 0), this.movingDirectionX = this.directionX = u > 0 ? -1 : u < 0 ? 1 : 0, this.movingDirectionY = this.directionY = p > 0 ? -1 : p < 0 ? 1 : 0, d > this.minScrollX ? d = this.minScrollX : d < this.maxScrollX && (d = this.maxScrollX), c > this.minScrollY ? c = this.minScrollY : c < this.maxScrollY && (c = this.maxScrollY);
      var m = this.y === c;
      this.scrollTo(d, c, h, b.swipe), this.trigger("scroll", {
        x: this.x,
        y: this.y
      }), clearTimeout(this.mouseWheelEndTimer), m && (this.mouseWheelEndTimer = setTimeout(function() {
        i.trigger("scrollEnd", {
          x: i.x,
          y: i.y
        });
      }, h));
    }
  };
}
function Se(e) {
  e.prototype._initZoom = function() {
    var t = this.options.zoom, i = t.start, s = i === void 0 ? 1 : i, o = t.min, n = o === void 0 ? 1 : o, r = t.max, a = r === void 0 ? 4 : r;
    this.scale = Math.min(Math.max(s, n), a), this.setScale(this.scale), this.scrollerStyle[x.transformOrigin] = "0 0";
  }, e.prototype._zoomTo = function(t, i, s, o) {
    this.scaled = !0;
    var n = t / (o || this.scale);
    this.setScale(t), this.refresh();
    var r = Math.round(this.startX - (i - this.relativeX) * (n - 1)), a = Math.round(this.startY - (s - this.relativeY) * (n - 1));
    r > this.minScrollX ? r = this.minScrollX : r < this.maxScrollX && (r = this.maxScrollX), a > this.minScrollY ? a = this.minScrollY : a < this.maxScrollY && (a = this.maxScrollY), (this.x !== r || this.y !== a) && this.scrollTo(r, a, this.options.bounceTime), this.scaled = !1;
  }, e.prototype.zoomTo = function(t, i, s) {
    var o = yt(this.wrapper), n = o.left, r = o.top, a = i + n - this.x, l = s + r - this.y;
    this._zoomTo(t, a, l);
  }, e.prototype._zoomStart = function(t) {
    var i = t.touches[0], s = t.touches[1], o = Math.abs(i.pageX - s.pageX), n = Math.abs(i.pageY - s.pageY);
    this.startDistance = Mt(o, n), this.startScale = this.scale;
    var r = yt(this.wrapper), a = r.left, l = r.top;
    this.originX = Math.abs(i.pageX + s.pageX) / 2 + a - this.x, this.originY = Math.abs(i.pageY + s.pageY) / 2 + l - this.y, this.trigger("zoomStart");
  }, e.prototype._zoom = function(t) {
    if (!(!this.enabled || this.destroyed || N[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches[0], s = t.touches[1], o = Math.abs(i.pageX - s.pageX), n = Math.abs(i.pageY - s.pageY), r = Mt(o, n), a = r / this.startDistance * this.startScale;
      this.scaled = !0;
      var l = this.options.zoom, h = l.min, u = h === void 0 ? 1 : h, p = l.max, f = p === void 0 ? 4 : p;
      a < u ? a = 0.5 * u * Math.pow(2, a / u) : a > f && (a = 2 * f * Math.pow(0.5, f / a));
      var d = a / this.startScale, c = this.startX - (this.originX - this.relativeX) * (d - 1), m = this.startY - (this.originY - this.relativeY) * (d - 1);
      this.setScale(a), this.scrollTo(c, m, 0);
    }
  }, e.prototype._zoomEnd = function(t) {
    if (!(!this.enabled || this.destroyed || N[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
      var i = this.options.zoom, s = i.min, o = s === void 0 ? 1 : s, n = i.max, r = n === void 0 ? 4 : n, a = this.scale > r ? r : this.scale < o ? o : this.scale;
      this._zoomTo(a, this.originX, this.originY, this.startScale), this.trigger("zoomEnd");
    }
  };
}
var Ht = 30, Lt = 10, j = 200, Kt = 2e3;
function Pe(e) {
  e.prototype._initInfinite = function() {
    this.options.probeType = 3, this.maxScrollY = -Kt, this.infiniteScroller = new w(this, this.options.infinity);
  };
}
function xt(e) {
  if (e && e.classList)
    return e.classList.contains("tombstone");
}
function w(e, t) {
  var i = this;
  this.options = t, B(typeof this.options.createTombstone == "function", "Infinite scroll need createTombstone Function to create tombstone"), B(typeof this.options.fetch == "function", "Infinite scroll need fetch Function to fetch new data."), B(typeof this.options.render == "function", "Infinite scroll need render Function to render each item."), this.firstAttachedItem = 0, this.lastAttachedItem = 0, this.anchorScrollTop = 0, this.anchorItem = {
    index: 0,
    offset: 0
  }, this.tombstoneHeight = 0, this.tombstoneWidth = 0, this.tombstones = [], this.items = [], this.loadedItems = 0, this.requestInProgress = !1, this.hasMore = !0, this.scroller = e, this.wrapperEl = this.scroller.wrapper, this.scrollerEl = this.scroller.scroller, this.scroller.on("scroll", function() {
    i.onScroll();
  }), this.scroller.on("resize", function() {
    i.onResize();
  }), this.onResize();
}
w.prototype.onScroll = function() {
  var e = -this.scroller.y, t = e - this.anchorScrollTop;
  e === 0 ? this.anchorItem = {
    index: 0,
    offset: 0
  } : this.anchorItem = this._calculateAnchoredItem(this.anchorItem, t), this.anchorScrollTop = e;
  var i = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight), s = this.anchorItem.index, o = i.index;
  t < 0 ? (s -= Ht, o += Lt) : (s -= Lt, o += Ht), this.fill(s, o), this.maybeRequestContent();
};
w.prototype.onResize = function() {
  var e = this.options.createTombstone();
  e.style.position = "absolute", this.scrollerEl.appendChild(e), e.style.display = "", this.tombstoneHeight = e.offsetHeight, this.tombstoneWidth = e.offsetWidth, this.scrollerEl.removeChild(e);
  for (var t = 0; t < this.items.length; t++)
    this.items[t].height = this.items[t].width = 0;
  this.onScroll();
};
w.prototype.fill = function(e, t) {
  this.firstAttachedItem = Math.max(0, e), this.hasMore || (t = Math.min(t, this.items.length)), this.lastAttachedItem = t, this.attachContent();
};
w.prototype.maybeRequestContent = function() {
  var e = this;
  if (!(this.requestInProgress || !this.hasMore)) {
    var t = this.lastAttachedItem - this.loadedItems;
    t <= 0 || (this.requestInProgress = !0, this.options.fetch(t).then(function(i) {
      if (e.requestInProgress = !1, i)
        e.addContent(i);
      else {
        e.hasMore = !1;
        var s = e._removeTombstones(), o = 0;
        e.anchorItem.index <= e.items.length ? (o = e._fixScrollPosition(), e._setupAnimations({}, o), e.scroller.resetPosition(e.scroller.options.bounceTime)) : (e.anchorItem.index -= s, o = e._fixScrollPosition(), e._setupAnimations({}, o), e.scroller.stop(), e.scroller.resetPosition(), e.onScroll());
      }
    }));
  }
};
w.prototype.addContent = function(e) {
  for (var t = 0; t < e.length; t++)
    this.items.length <= this.loadedItems && this._addItem(), this.items[this.loadedItems++].data = e[t];
  this.attachContent(), this.maybeRequestContent();
};
w.prototype.attachContent = function() {
  var e = this._collectUnusedNodes(), t = this._createDOMNodes(e);
  this._cleanupUnusedNodes(e), this._cacheNodeSize();
  var i = this._fixScrollPosition();
  this._setupAnimations(t, i);
};
w.prototype.resetMore = function() {
  this.hasMore = !0;
};
w.prototype._removeTombstones = function() {
  for (var e = void 0, t = 0, i = this.items.length, s = 0; s < i; s++) {
    var o = this.items[s].node, n = this.items[s].data;
    (!o || xt(o)) && !n && (e || (e = s), o && this.scrollerEl.removeChild(o));
  }
  return t = i - e, this.items.splice(e), this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length), t;
};
w.prototype._collectUnusedNodes = function() {
  for (var e = [], t = 0; t < this.items.length; t++) {
    if (t === this.firstAttachedItem) {
      t = this.lastAttachedItem - 1;
      continue;
    }
    var i = this.items[t].node;
    i && (xt(i) ? (this.tombstones.push(i), this.tombstones[this.tombstones.length - 1].style.display = "none") : e.push(i)), this.items[t].node = null;
  }
  return e;
};
w.prototype._createDOMNodes = function(e) {
  for (var t = {}, i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    for (; this.items.length <= i; )
      this._addItem();
    var s = this.items[i].node, o = this.items[i].data;
    if (s)
      if (xt(s) && o)
        s.style.zIndex = 1, t[i] = [s, this.items[i].top - this.anchorScrollTop], this.items[i].node = null;
      else
        continue;
    var n = o ? this.options.render(o, e.pop()) : this._getTombStone();
    n.style.position = "absolute", this.items[i].top = -1, this.scrollerEl.appendChild(n), this.items[i].node = n;
  }
  return t;
};
w.prototype._cleanupUnusedNodes = function(e) {
  for (; e.length; )
    this.scrollerEl.removeChild(e.pop());
};
w.prototype._cacheNodeSize = function() {
  for (var e = this.firstAttachedItem; e < this.lastAttachedItem; e++)
    this.items[e].data && !this.items[e].height && (this.items[e].height = this.items[e].node.offsetHeight, this.items[e].width = this.items[e].node.offsetWidth);
};
w.prototype._fixScrollPosition = function() {
  this.anchorScrollTop = 0;
  for (var e = 0; e < this.anchorItem.index; e++)
    this.anchorScrollTop += this.items[e].height || this.tombstoneHeight;
  this.anchorScrollTop += this.anchorItem.offset;
  for (var t = this.anchorScrollTop - this.anchorItem.offset, i = this.anchorItem.index; i > this.firstAttachedItem; )
    t -= this.items[i - 1].height || this.tombstoneHeight, i--;
  return t;
};
w.prototype._setupAnimations = function(e, t) {
  var i = this;
  for (var s in e) {
    var o = e[s];
    this.items[s].node.style.transform = "translateY(" + (this.anchorScrollTop + o[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")", this.items[s].node.offsetTop, o[0].offsetTop, this.items[s].node.style.transition = "transform " + j + "ms";
  }
  for (var n = this.firstAttachedItem; n < this.lastAttachedItem; n++) {
    var r = e[n];
    if (r) {
      var a = r[0];
      a.style.transition = "transform " + j + "ms, opacity " + j + "ms", a.style.transform = "translateY(" + t + "px) scale(" + this.items[n].width / this.tombstoneWidth + ", " + this.items[n].height / this.tombstoneHeight + ")", a.style.opacity = 0;
    }
    t !== this.items[n].top && (r || (this.items[n].node.style.transition = ""), this.items[n].node.style.transform = "translateY(" + t + "px)"), this.items[n].top = t, t += this.items[n].height || this.tombstoneHeight;
  }
  this.scroller.maxScrollY = -(t - this.wrapperEl.offsetHeight + (this.hasMore ? Kt : 0)), setTimeout(function() {
    for (var l in e) {
      var h = e[l];
      h[0].style.display = "none", i.tombstones.push(h[0]);
    }
  }, j);
};
w.prototype._getTombStone = function() {
  var e = this.tombstones.pop();
  return e ? (e.style.display = "", e.style.opacity = 1, e.style.transform = "", e.style.transition = "", e) : this.options.createTombstone();
};
w.prototype._addItem = function() {
  this.items.push({
    data: null,
    node: null,
    height: 0,
    width: 0,
    top: 0
  });
};
w.prototype._calculateAnchoredItem = function(e, t) {
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
  this.wrapper = typeof e == "string" ? document.querySelector(e) : e, this.wrapper || it("Can not resolve the wrapper DOM."), this.scroller = this.wrapper.children[0], this.scroller || it("The wrapper need at least one child element to be scroller."), this.scrollerStyle = this.scroller.style, this._init(e, t);
}
me(S);
ve(S);
oe(S);
we(S);
ye(S);
_e(S);
be(S);
Te(S);
xe(S);
Se(S);
Pe(S);
S.Version = "1.12.6";
const k = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, o] of t)
    i[s] = o;
  return i;
}, De = "cube-loading", Ee = {
  name: De,
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
}, Me = { class: "cube-loading" }, Ye = { class: "cube-loading-spinner" };
function Xe(e, t, i, s, o, n) {
  return v(), T("div", Me, [
    y("span", {
      class: "cube-loading-spinners",
      style: nt(n.style)
    }, [
      (v(!0), T(rt, null, at(o.balde, (r) => (v(), T("i", Ye))), 256))
    ], 4)
  ]);
}
const Ce = /* @__PURE__ */ k(Ee, [["render", Xe]]), Ie = {
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
      const s = this.initRadius - (this.initRadius - this.minTailRadius) * t, o = {
        x: this.headCenter.x,
        y: this.headCenter.y + this.distance
      }, n = {
        x: o.x - s,
        y: o.y
      }, r = {
        x: n.x,
        y: n.y - this.distance / 2
      };
      e.quadraticCurveTo(r.x, r.y, n.x, n.y), e.arc(o.x, o.y, s, Math.PI, 0, !0);
      const a = {
        x: this.headCenter.x + i,
        y: this.headCenter.y
      }, l = {
        x: o.x + s,
        y: a.y + this.distance / 2
      };
      e.quadraticCurveTo(l.x, l.y, a.x, a.y), e.fillStyle = "rgb(170,170,170)", e.fill(), e.strokeStyle = "rgb(153,153,153)", e.stroke(), e.restore();
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
}, He = ["width", "height"];
function Le(e, t, i, s, o, n) {
  return v(), T("canvas", {
    ref: "bubble",
    width: o.width,
    height: o.height,
    style: nt(n.style)
  }, null, 12, He);
}
const Re = /* @__PURE__ */ k(Ie, [["render", Le]]), ke = {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, Ue = function(e, t) {
}, $e = /-(\w)/g;
function Oe(e) {
  return e = String(e), e.replace($e, function(t, i) {
    return i ? i.toUpperCase() : "";
  });
}
function Ne(e) {
  return e = String(e), e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
const Ae = {
  methods: {
    _checkDeprecated() {
      const e = this.$options.props, t = this.$options.name;
      Object.entries(e).forEach(([i, s]) => {
        const o = s.deprecated;
        o && this[i] !== void 0 && Ue(`The property "${Ne(i)}" is deprecated, please use the recommended property "${o.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${t.substr(5)}#cube-Propsconfiguration-anchor`);
      });
    }
  },
  mounted() {
    this._checkDeprecated();
  }
};
function We(e) {
  const i = /os (\d\d?_\d(_\d)?)/.exec(e);
  if (!i)
    return null;
  const s = i[1].split("_").map(function(o) {
    return parseInt(o, 10);
  });
  return {
    major: s[0],
    minor: s[1],
    patch: s[2] || 0
  };
}
function ze() {
  let e = !0;
  if (te) {
    const t = We(F);
    if (!t)
      return e;
    t.major >= 13 && t.minor >= 3 && (e = !1);
  }
  return e;
}
const Fe = ze();
const Ve = "cube-scroll", qe = "horizontal", Rt = "vertical", je = "Refresh success", Ze = 600, kt = "click", Ut = "pulling-down", $t = "pulling-up", tt = "scroll", bt = "before-scroll-start", Jt = "scroll-end", Ot = "none", Ge = "native", Ke = [tt, bt, Jt], Je = {
  observeDOM: !0,
  click: !0,
  probeType: 1,
  scrollbar: !1,
  pullDownRefresh: !1,
  pullUpLoad: !1
}, Qe = {
  name: Ve,
  mixins: [ke, Ae],
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
  emits: [kt, Ut, $t, tt, bt, Jt],
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
        return e.every((t) => Ke.indexOf(t) !== -1);
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
      return e && e.txt || je;
    },
    finalScrollEvents() {
      const e = this.scrollEvents.slice();
      return e.length || (this.listenScroll && e.push(tt), this.listenBeforeScroll && e.push(bt)), e;
    },
    needListenScroll() {
      return this.finalScrollEvents.indexOf(tt) !== -1 || this.parentScroll;
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
        scrollX: this.direction === qe,
        probeType: this.needListenScroll ? 3 : 1,
        useTransition: Fe
      }, t = Object.assign({}, Je, e, this.options);
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
      this.$emit(kt, e);
    },
    async forceUpdate(e = !1, t = !1) {
      this.isPullDownUpdating || (this.pullDownRefresh && this.isPullingDown ? (this.isPullingDown = !1, this.isPullDownUpdating = !0, await this._waitFinishPullDown(), this.isPullDownUpdating = !1, await this._waitResetPullDown(e)) : this.pullUpLoad && this.isPullUpLoad && (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpNoMore = !e || t), e && this.refresh());
    },
    resetPullUpTxt() {
      this.pullUpNoMore = !1;
    },
    _listenScrollEvents() {
      this.finalScrollEvents.forEach((e) => {
        this.scroll.on(Oe(e), (...t) => {
          this.$emit(e, ...t);
        });
      });
    },
    _handleNestScroll() {
      this.$nextTick(() => {
        const e = this.scroll, t = this.parentScroll.scroll;
        [e, t].forEach((s, o, n) => {
          s.on("touchEnd", () => {
            t.enable(), e.enable(), e.initiated = !1;
          }), s.on("beforeScrollStart", () => {
            this.touchStartMoment = !0;
            const r = n[(o + 1) % 2];
            r.stop(), r.resetPosition();
          });
        }), e.on("scroll", (s) => {
          if (!e.initiated || e.isInTransition || this.nestMode === Ge && !this.touchStartMoment)
            return;
          this._checkReachBoundary(s) ? (e.resetPosition(), e.disable(), t.pointX = e.pointX, t.pointY = e.pointY, t.enable()) : t.disable(), this.touchStartMoment = !1;
        });
      });
    },
    _checkReachBoundary(e) {
      const t = this.scroll.distX, i = this.scroll.distY, s = t > 0 ? e.x >= this.scroll.minScrollX : t < 0 ? e.x <= this.scroll.maxScrollX : !1, o = i > 0 ? e.y >= this.scroll.minScrollY : i < 0 ? e.y <= this.scroll.maxScrollY : !1, n = this.scroll.freeScroll, r = this.scroll.hasHorizontalScroll, a = this.scroll.hasVerticalScroll;
      if (!r && !a)
        return !0;
      if (n)
        return s || o;
      let l;
      return this.scroll.movingDirectionX ? l = s : this.scroll.movingDirectionY && (l = o), l;
    },
    _calculateMinHeight() {
      const { wrapper: e, listWrapper: t } = this.$refs, i = this.pullUpLoad, s = this.pullDownRefresh;
      let o = 0;
      (s || i) && (o = q(e).height + 1, i && i.visible && (o -= this.pullUpHeight)), t.style.minHeight = `${o}px`;
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
      this.resetPullDownTimer && clearTimeout(this.resetPullDownTimer), this.beforePullDown = !1, this.isPullingDown = !0, this.$emit(Ut);
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
      this.isPullUpLoad = !0, this.$emit($t);
    },
    _waitFinishPullDown(e) {
      const { stopTime: t = Ze } = this.pullDownRefresh;
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
      e && (e = e.children[0], this.pullDownHeight = q(e).height, this.beforePullDown = !1, this.isPullingDown = !0, this.$nextTick(() => {
        this.pullDownStop = q(e).height, this.beforePullDown = !0, this.isPullingDown = !1;
      }));
    },
    _getPullUpEleHeight() {
      const t = this.$refs.listWrapper.nextElementSibling;
      if (!t) {
        this.pullUpHeight = 0;
        return;
      }
      this.pullUpHeight = q(t).height;
    }
  },
  components: {
    Loading: Ce,
    Bubble: Re
  }
}, Be = {
  ref: "wrapper",
  class: "cube-scroll-wrapper"
}, ti = { class: "cube-scroll-content" }, ei = {
  ref: "listWrapper",
  class: "cube-scroll-list-wrapper"
}, ii = { class: "cube-scroll-list" }, si = ["onClick"], oi = {
  key: 0,
  class: "cube-pullup-wrapper"
}, ni = {
  key: 0,
  class: "before-trigger"
}, ri = {
  key: 1,
  class: "after-trigger"
}, ai = {
  key: 0,
  class: "cube-pulldown",
  ref: "pulldown"
}, li = { class: "before-trigger" }, hi = { class: "after-trigger" }, ci = { class: "loading" }, pi = { class: "cube-pulldown-loaded" };
function ui(e, t, i, s, o, n) {
  const r = z("loading"), a = z("bubble");
  return v(), T("div", Be, [
    y("div", ti, [
      y("div", ei, [
        I(e.$slots, "default", {}, () => [
          y("ul", ii, [
            (v(!0), T(rt, null, at(i.data, (l, h) => (v(), T("li", {
              class: "cube-scroll-item border-bottom-1px",
              key: h,
              onClick: (u) => n.clickItem(l)
            }, O(l), 9, si))), 128))
          ])
        ])
      ], 512),
      I(e.$slots, "pullup", {
        pullUpLoad: n.pullUpLoad,
        isPullUpLoad: o.isPullUpLoad
      }, () => [
        n.pullUpLoad ? (v(), T("div", oi, [
          o.isPullUpLoad ? (v(), T("div", ri, [
            Z(r)
          ])) : (v(), T("div", ni, [
            y("span", null, O(n.pullUpTxt), 1)
          ]))
        ])) : St("", !0)
      ])
    ]),
    n.pullDownRefresh ? (v(), T("div", ai, [
      I(e.$slots, "pulldown", {
        pullDownRefresh: n.pullDownRefresh,
        pullDownStyle: o.pullDownStyle,
        beforePullDown: o.beforePullDown,
        isPullingDown: o.isPullingDown,
        bubbleY: o.bubbleY
      }, () => [
        y("div", {
          class: "cube-pulldown-wrapper",
          style: nt(o.pullDownStyle)
        }, [
          X(y("div", li, [
            Z(a, {
              y: o.bubbleY,
              class: "bubble"
            }, null, 8, ["y"])
          ], 512), [
            [C, o.beforePullDown]
          ]),
          X(y("div", hi, [
            X(y("div", ci, [
              Z(r)
            ], 512), [
              [C, o.isPullingDown]
            ]),
            X(y("div", pi, [
              y("span", null, O(n.refreshTxt), 1)
            ], 512), [
              [C, !o.isPullingDown]
            ])
          ], 512), [
            [C, !o.beforePullDown]
          ])
        ], 4)
      ])
    ], 512)) : St("", !0)
  ], 512);
}
const di = /* @__PURE__ */ k(Qe, [["render", ui]]);
const fi = "cube-drawer-item", mi = {
  name: fi,
  props: {
    item: {
      type: [String, Object],
      default: ""
    },
    index: {
      type: Number,
      default: -1
    }
  },
  computed: {
    itemClass() {
      return this.$parent.$parent.$parent.selectedIndex === this.index ? "cube-drawer-item_active" : "";
    }
  },
  methods: {
    clickItem(e) {
      this.$parent.$parent.$parent.itemClickHandler(e, this.index);
    }
  }
};
function gi(e, t, i, s, o, n) {
  return v(), T("li", {
    class: Qt(["cube-drawer-item border-bottom-1px", n.itemClass]),
    onClick: t[0] || (t[0] = (r) => n.clickItem(i.item))
  }, [
    I(e.$slots, "default", {}, () => [
      zt(O(i.item.text || i.item), 1)
    ])
  ], 2);
}
const st = /* @__PURE__ */ k(mi, [["render", gi]]);
const vi = "cube-drawer-panel", wi = {
  name: vi,
  mixins: [Vt],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    index: {
      type: Number,
      default: -1
    }
  },
  computed: {
    selectedIndex() {
      const e = this.$parent.selected[this.index];
      return e === void 0 ? -1 : e;
    }
  },
  watch: {
    data() {
      this.scrollToTop();
    },
    isVisible() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  mounted() {
    this.$parent.addPanel(this);
  },
  beforeUnmount() {
    this.$parent.removePanel(this);
  },
  methods: {
    refresh() {
      this.$refs.scroll.refresh();
    },
    scrollToTop() {
      this.$refs.scroll.scroll && this.$refs.scroll.scroll.scrollTo(0, 0, 0);
    },
    itemClickHandler(e, t) {
      this.selectedIndex !== t && this.$parent.changeHandler(this.index, e, t);
    }
  },
  components: {
    CubeScroll: di,
    CubeDrawerItem: st
  }
}, yi = { class: "cube-drawer-panel" }, _i = { class: "cube-drawer-scroll-wrapper" }, bi = { class: "cube-drawer-list" };
function Ti(e, t, i, s, o, n) {
  const r = z("cube-drawer-item"), a = z("cube-scroll");
  return v(), wt(Bt, { name: "cube-drawer-move" }, {
    default: Pt(() => [
      X(y("div", yi, [
        y("div", _i, [
          Z(a, {
            ref: "scroll",
            data: i.data
          }, {
            default: Pt(() => [
              y("ul", bi, [
                I(e.$slots, "default", {}, () => [
                  (v(!0), T(rt, null, at(i.data, (l, h) => (v(), wt(r, {
                    item: l,
                    key: h,
                    index: h
                  }, null, 8, ["item", "index"]))), 128))
                ])
              ])
            ]),
            _: 3
          }, 8, ["data"])
        ])
      ], 512), [
        [C, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const ot = /* @__PURE__ */ k(wi, [["render", Ti]]), xi = {
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
const Si = "cube-drawer", Nt = "change", At = "select", Wt = "cancel", vt = ee("transform"), Pi = {
  name: Si,
  mixins: [Vt, xi],
  emits: [Nt, At, Wt],
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
    selectedIndex: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      index: -1,
      selectedVal: [],
      selectedText: [],
      selected: [...this.selectedIndex],
      slideStyle: {
        [vt]: "translate3d(0, 0, 0)"
      }
    };
  },
  watch: {
    selectedIndex(e) {
      this.selected = [...e];
    },
    index(e, t) {
      this.showPanel(), e < t && this.hidePanel();
    }
  },
  created() {
    this.panels = [];
  },
  methods: {
    show() {
      if (this.isVisible)
        return;
      this.isVisible = !0;
      let e = this.data.length;
      for (let t = 0; t < e; t++)
        if (this.index = t, this.selected[t] < 0 || this.selected[t] === void 0) {
          if (t > 0) {
            const i = t - 1, s = this.selected[i];
            this.changeHandler(i, this.data[i][s], s);
          }
          break;
        }
      this.computedStyle();
    },
    hide() {
      this.slideStyle[vt] = "translate3d(0, 0, 0)", this.shouldHide = !0;
    },
    addPanel(e) {
      this.panels.push(e);
    },
    removePanel(e) {
      const t = this.panels.indexOf(e);
      this.panels.splice(t, 1);
    },
    transitionend() {
      this.shouldHide && (this.isVisible = !1, this.shouldHide = !1);
    },
    refill(e, t, i) {
      this.data[e] = t, this.index = e, this.selected = this.selected.slice(0, e), this.selectedVal = this.selectedVal.slice(0, e), this.selectedText = this.selectedText.slice(0, e), i >= 0 && (this.selected[e] = i, this.changeHandler(e, this.data[e][i], i));
    },
    showPanel() {
      const e = this.index;
      let t = 0;
      for (; t <= e; )
        this.panels[t].show(), t++;
      this.computedStyle();
    },
    hidePanel() {
      const e = this.data.length;
      let t = this.index + 1;
      for (; t < e; )
        this.panels[t].hide(), t++;
    },
    computedStyle() {
      this.$nextTick(() => {
        let e = 0, t = 0;
        const i = this.index;
        for (; t <= i; ) {
          const s = this.panels[t].$el;
          e += s.offsetWidth;
          const o = window.getComputedStyle(s);
          e += parseInt(o.marginLeft), e += parseInt(o.marginRight), t++;
        }
        this.slideStyle[vt] = `translate3d(-${e}px, 0, 0)`;
      });
    },
    changeHandler(e, t, i) {
      typeof t == "string" ? (this.selectedVal[e] = t, this.selectedText[e] = t) : (this.selectedVal[e] = t.value, this.selectedText[e] = t.text), this.selected[e] = i, e === this.data.length - 1 ? (this.$emit(At, this.selectedVal, this.selected, this.selectedText), this.hide()) : this.$emit(Nt, e, t, this.selectedVal, this.selected, this.selectedText);
    },
    drawerClick() {
      this.hide(), this.$emit(Wt);
    }
  },
  components: {
    CubeDrawerPanel: ot
  }
}, Di = { class: "cube-drawer-title" };
function Ei(e, t, i, s, o, n) {
  const r = z("cube-drawer-panel");
  return X((v(), T("div", {
    class: "cube-drawer",
    onClick: t[3] || (t[3] = (...a) => n.drawerClick && n.drawerClick(...a))
  }, [
    y("div", {
      class: "cube-drawer-main",
      style: nt(o.slideStyle),
      onClick: t[1] || (t[1] = Dt(() => {
      }, ["stop"])),
      onTransitionend: t[2] || (t[2] = (...a) => n.transitionend && n.transitionend(...a))
    }, [
      X(y("div", Di, [
        I(e.$slots, "title", {}, () => [
          zt(O(i.title), 1)
        ])
      ], 512), [
        [C, e.$slots.title || i.title]
      ]),
      y("div", {
        class: "cube-drawer-panels",
        onTransitionend: t[0] || (t[0] = Dt(() => {
        }, ["stop"]))
      }, [
        I(e.$slots, "default", {}, () => [
          (v(!0), T(rt, null, at(i.data, (a, l) => (v(), wt(r, {
            key: l,
            index: l,
            data: a
          }, null, 8, ["index", "data"]))), 128))
        ])
      ], 32)
    ], 36)
  ], 512)), [
    [C, e.isVisible]
  ]);
}
const W = /* @__PURE__ */ k(Pi, [["render", Ei]]);
W.install = function(e) {
  e.component(W.name, W), e.component(ot.name, ot), e.component(st.name, st);
};
W.Panel = ot;
W.Item = st;
export {
  W as default
};
