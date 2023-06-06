import "./css.mjs";
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var ut = function() {
  function i(t, e) {
    var s = [], n = !0, o = !1, r = void 0;
    try {
      for (var h = t[Symbol.iterator](), a; !(n = (a = h.next()).done) && (s.push(a.value), !(e && s.length === e)); n = !0)
        ;
    } catch (c) {
      o = !0, r = c;
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
  return function(t, e) {
    if (Array.isArray(t))
      return t;
    if (Symbol.iterator in Object(t))
      return i(t, e);
    throw new TypeError("Invalid attempt to destructure non-iterable instance");
  };
}(), dt = function(i) {
  if (Array.isArray(i)) {
    for (var t = 0, e = Array(i.length); t < i.length; t++)
      e[t] = i[t];
    return e;
  } else
    return Array.from(i);
};
function mt(i) {
  i.prototype.on = function(t, e) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    this._events[t] || (this._events[t] = []), this._events[t].push([e, s]);
  }, i.prototype.once = function(t, e) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : this;
    function n() {
      this.off(t, n), e.apply(s, arguments);
    }
    n.fn = e, this.on(t, n);
  }, i.prototype.off = function(t, e) {
    var s = this._events[t];
    if (s)
      for (var n = s.length; n--; )
        (s[n][0] === e || s[n][0] && s[n][0].fn === e) && (s[n][0] = void 0);
  }, i.prototype.trigger = function(t) {
    var e = this._events[t];
    if (e)
      for (var s = e.length, n = [].concat(dt(e)), o = 0; o < s; o++) {
        var r = n[o], h = ut(r, 2), a = h[0], c = h[1];
        a && a.apply(c, [].slice.call(arguments, 1));
      }
  };
}
var X = typeof window < "u", U = X && navigator.userAgent.toLowerCase(), gt = U && /wechatdevtools/.test(U), vt = U && U.indexOf("android") > 0;
function S() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function k(i) {
  for (var t = arguments.length, e = Array(t > 1 ? t - 1 : 0), s = 1; s < t; s++)
    e[s - 1] = arguments[s];
  for (var n = 0; n < e.length; n++) {
    var o = e[n];
    for (var r in o)
      i[r] = o[r];
  }
  return i;
}
function A(i) {
  return i == null;
}
function it(i, t) {
  return Math.sqrt(i * i + t * t);
}
var B = X && document.createElement("div").style, V = function() {
  if (!X)
    return !1;
  var i = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  };
  for (var t in i)
    if (B[i[t]] !== void 0)
      return t;
  return !1;
}();
function Y(i) {
  return V === !1 ? !1 : V === "standard" ? i === "transitionEnd" ? "transitionend" : i : V + i.charAt(0).toUpperCase() + i.substr(1);
}
function N(i, t, e, s) {
  i.addEventListener(t, e, { passive: !1, capture: !!s });
}
function $(i, t, e, s) {
  i.removeEventListener(t, e, { passive: !1, capture: !!s });
}
function at(i) {
  for (var t = 0, e = 0; i; )
    t -= i.offsetLeft, e -= i.offsetTop, i = i.offsetParent;
  return {
    left: t,
    top: e
  };
}
function K(i) {
  var t = i.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var lt = Y("transform"), yt = X && Y("perspective") in B, Q = X && ("ontouchstart" in window || gt), Tt = lt !== !1, wt = X && Y("transition") in B, w = {
  transform: lt,
  transitionTimingFunction: Y("transitionTimingFunction"),
  transitionDuration: Y("transitionDuration"),
  transitionDelay: Y("transitionDelay"),
  transformOrigin: Y("transformOrigin"),
  transitionEnd: Y("transitionEnd")
}, C = 1, Z = 2, W = {
  touchstart: C,
  touchmove: C,
  touchend: C,
  mousedown: Z,
  mousemove: Z,
  mouseup: Z
};
function P(i) {
  if (i instanceof window.SVGElement) {
    var t = i.getBoundingClientRect();
    return {
      top: t.top,
      left: t.left,
      width: t.width,
      height: t.height
    };
  } else
    return {
      top: i.offsetTop,
      left: i.offsetLeft,
      width: i.offsetWidth,
      height: i.offsetHeight
    };
}
function L(i, t) {
  for (var e in t)
    if (t[e].test(i[e]))
      return !0;
  return !1;
}
function xt(i, t) {
  var e = document.createEvent("Event");
  e.initEvent(t, !0, !0), e.pageX = i.pageX, e.pageY = i.pageY, i.target.dispatchEvent(e);
}
function ct(i) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click", e = void 0;
  i.type === "mouseup" || i.type === "mousecancel" ? e = i : (i.type === "touchend" || i.type === "touchcancel") && (e = i.changedTouches[0]);
  var s = {};
  e && (s.screenX = e.screenX || 0, s.screenY = e.screenY || 0, s.clientX = e.clientX || 0, s.clientY = e.clientY || 0);
  var n = void 0, o = !0, r = !0;
  if (typeof MouseEvent < "u")
    try {
      n = new MouseEvent(t, k({
        bubbles: o,
        cancelable: r
      }, s));
    } catch {
      h();
    }
  else
    h();
  function h() {
    n = document.createEvent("Event"), n.initEvent(t, o, r), k(n, s);
  }
  n.forwardedTouchEvent = !0, n._constructed = !0, i.target.dispatchEvent(n);
}
function bt(i) {
  ct(i, "dblclick");
}
function _t(i, t) {
  t.firstChild ? St(i, t.firstChild) : t.appendChild(i);
}
function St(i, t) {
  t.parentNode.insertBefore(i, t);
}
function et(i, t) {
  i.removeChild(t);
}
var Yt = {
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
  disableMouse: Q,
  disableTouch: !Q,
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
function Xt(i) {
  i.prototype._init = function(t, e) {
    this._handleOptions(e), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }, i.prototype.setScale = function(t) {
    this.lastScale = A(this.scale) ? t : this.scale, this.scale = t;
  }, i.prototype._handleOptions = function(t) {
    this.options = k({}, Yt, t), this.translateZ = this.options.HWCompositing && yt ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && wt, this.options.useTransform = this.options.useTransform && Tt, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = this.options.eventPassthrough === "horizontal" ? !1 : this.options.scrollX, this.options.scrollY = this.options.eventPassthrough === "vertical" ? !1 : this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.tap === !0 && (this.options.tap = "tap");
  }, i.prototype._addDOMEvents = function() {
    var t = N;
    this._handleDOMEvents(t);
  }, i.prototype._removeDOMEvents = function() {
    var t = $;
    this._handleDOMEvents(t);
  }, i.prototype._handleDOMEvents = function(t) {
    var e = this.options.bindToWrapper ? this.wrapper : window;
    t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(e, "mousemove", this), t(e, "mousecancel", this), t(e, "mouseup", this)), Q && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(e, "touchmove", this), t(e, "touchcancel", this), t(e, "touchend", this)), t(this.scroller, w.transitionEnd, this);
  }, i.prototype._initExtFeatures = function() {
    this.options.snap && this._initSnap(), this.options.scrollbar && this._initScrollbar(), this.options.pullUpLoad && this._initPullUp(), this.options.pullDownRefresh && this._initPullDown(), this.options.wheel && this._initWheel(), this.options.mouseWheel && this._initMouseWheel(), this.options.zoom && this._initZoom(), this.options.infinity && this._initInfinite();
  }, i.prototype._watchTransition = function() {
    if (typeof Object.defineProperty == "function") {
      var t = this, e = !1, s = this.useTransition ? "isInTransition" : "isAnimating";
      Object.defineProperty(this, s, {
        get: function() {
          return e;
        },
        set: function(o) {
          e = o;
          for (var r = t.scroller.children.length ? t.scroller.children : [t.scroller], h = e && !t.pulling ? "none" : "auto", a = 0; a < r.length; a++)
            r[a].style.pointerEvents = h;
        }
      });
    }
  }, i.prototype._handleAutoBlur = function() {
    this.on("scrollStart", function() {
      var t = document.activeElement;
      t && (t.tagName === "INPUT" || t.tagName === "TEXTAREA") && t.blur();
    });
  }, i.prototype._initDOMObserver = function() {
    var t = this;
    if (typeof MutationObserver < "u") {
      var e = void 0, s = new MutationObserver(function(o) {
        if (!t._shouldNotRefresh()) {
          for (var r = !1, h = !1, a = 0; a < o.length; a++) {
            var c = o[a];
            if (c.type !== "attributes") {
              r = !0;
              break;
            } else if (c.target !== t.scroller) {
              h = !0;
              break;
            }
          }
          r ? t.refresh() : h && (clearTimeout(e), e = setTimeout(function() {
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
  }, i.prototype._shouldNotRefresh = function() {
    var t = this.x > this.minScrollX || this.x < this.maxScrollX || this.y > this.minScrollY || this.y < this.maxScrollY;
    return this.isInTransition || this.stopFromTransition || t;
  }, i.prototype._checkDOMUpdate = function() {
    var t = P(this.scroller), e = t.width, s = t.height;
    function n() {
      if (!this.destroyed) {
        t = P(this.scroller);
        var r = t.width, h = t.height;
        (e !== r || s !== h) && this.refresh(), e = r, s = h, o.call(this);
      }
    }
    function o() {
      var r = this;
      setTimeout(function() {
        n.call(r);
      }, 1e3);
    }
    o.call(this);
  }, i.prototype.handleEvent = function(t) {
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
        this.enabled && !t._constructed && (L(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._onMouseWheel(t);
        break;
    }
  }, i.prototype.refresh = function() {
    var t = window.getComputedStyle(this.wrapper, null).position === "static", e = P(this.wrapper);
    this.wrapperWidth = e.width, this.wrapperHeight = e.height;
    var s = P(this.scroller);
    this.scrollerWidth = Math.round(s.width * this.scale), this.scrollerHeight = Math.round(s.height * this.scale), this.relativeX = s.left, this.relativeY = s.top, t && (this.relativeX -= e.left, this.relativeY -= e.top), this.minScrollX = 0, this.minScrollY = 0;
    var n = this.options.wheel;
    n ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, this.selectedIndex === void 0 && (this.selectedIndex = n.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = at(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition();
  }, i.prototype.enable = function() {
    this.enabled = !0;
  }, i.prototype.disable = function() {
    this.enabled = !1;
  };
}
var T = {
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
function st(i, t, e, s, n, o, r) {
  var h = i - t, a = Math.abs(h) / e, c = r.deceleration, f = r.itemHeight, p = r.swipeBounceTime, d = r.wheel, u = r.swipeTime, l = u, m = d ? 4 : 15, y = i + a / c * (h < 0 ? -1 : 1);
  return d && f && (y = Math.round(y / f) * f), y < s ? (y = o ? Math.max(s - o / 4, s - o / m * a) : s, l = p) : y > n && (y = o ? Math.min(n + o / 4, n + o / m * a) : n, l = p), {
    destination: Math.round(y),
    duration: l
  };
}
var Mt = 100 / 60;
function pt() {
}
var j = function() {
  return X ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(i) {
    return window.setTimeout(i, (i.interval || Mt) / 2);
  } : pt;
}(), M = function() {
  return X ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(i) {
    window.clearTimeout(i);
  } : pt;
}(), I = 1, O = -1, G = 1, J = -1, ot = 1, z = 3;
function F(i) {
  console.error("[BScroll warn]: " + i);
}
function R(i, t) {
  if (!i)
    throw new Error("[BScroll] " + t);
}
function Pt(i) {
  i.prototype._start = function(t) {
    var e = W[t.type];
    if (!(e !== C && t.button !== 0) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== e)) {
      this.initiated = e, this.options.preventDefault && !L(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = S(), this.options.wheel && (this.target = t.target), this.stop();
      var s = t.touches ? t.touches[0] : t;
      this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = s.pageX, this.pointY = s.pageY, this.trigger("beforeScrollStart");
    }
  }, i.prototype._move = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var e = t.touches ? t.touches[0] : t, s = e.pageX - this.pointX, n = e.pageY - this.pointY;
      this.pointX = e.pageX, this.pointY = e.pageY, this.distX += s, this.distY += n;
      var o = Math.abs(this.distX), r = Math.abs(this.distY), h = S();
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
        s = this.hasHorizontalScroll ? s : 0, n = this.hasVerticalScroll ? n : 0, this.movingDirectionX = s > 0 ? J : s < 0 ? G : 0, this.movingDirectionY = n > 0 ? O : n < 0 ? I : 0;
        var a = this.x + s, c = this.y + n, f = !1, p = !1, d = !1, u = !1, l = this.options.bounce;
        l !== !1 && (f = l.top === void 0 ? !0 : l.top, p = l.bottom === void 0 ? !0 : l.bottom, d = l.left === void 0 ? !0 : l.left, u = l.right === void 0 ? !0 : l.right), (a > this.minScrollX || a < this.maxScrollX) && (a > this.minScrollX && d || a < this.maxScrollX && u ? a = this.x + s / 3 : a = a > this.minScrollX ? this.minScrollX : this.maxScrollX), (c > this.minScrollY || c < this.maxScrollY) && (c > this.minScrollY && f || c < this.maxScrollY && p ? c = this.y + n / 3 : c = c > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(a, c), h - this.startTime > this.options.momentumLimitTime && (this.startTime = h, this.startX = this.x, this.startY = this.y, this.options.probeType === ot && this.trigger("scroll", {
          x: this.x,
          y: this.y
        })), this.options.probeType > ot && this.trigger("scroll", {
          x: this.x,
          y: this.y
        });
        var m = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, y = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, _ = this.pointX - m, b = this.pointY - y;
        (_ > document.documentElement.clientWidth - this.options.momentumLimitDistance || _ < this.options.momentumLimitDistance || b < this.options.momentumLimitDistance || b > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
      }
    }
  }, i.prototype._end = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.initiated = !1, this.options.preventDefault && !L(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), this.isInTransition = !1;
      var e = Math.round(this.x), s = Math.round(this.y), n = e - this.absStartX, o = s - this.absStartY;
      if (this.directionX = n > 0 ? J : n < 0 ? G : 0, this.directionY = o > 0 ? O : o < 0 ? I : 0, !(this.options.pullDownRefresh && this._checkPullDown())) {
        if (this._checkClick(t)) {
          this.trigger("scrollCancel");
          return;
        }
        if (!this.resetPosition(this.options.bounceTime, T.bounce)) {
          this._translate(e, s), this.endTime = S();
          var r = this.endTime - this.startTime, h = Math.abs(e - this.startX), a = Math.abs(s - this.startY);
          if (this._events.flick && r < this.options.flickLimitTime && h < this.options.flickLimitDistance && a < this.options.flickLimitDistance) {
            this.trigger("flick");
            return;
          }
          var c = 0;
          if (this.options.momentum && r < this.options.momentumLimitTime && (a > this.options.momentumLimitDistance || h > this.options.momentumLimitDistance)) {
            var f = !1, p = !1, d = !1, u = !1, l = this.options.bounce;
            l !== !1 && (f = l.top === void 0 ? !0 : l.top, p = l.bottom === void 0 ? !0 : l.bottom, d = l.left === void 0 ? !0 : l.left, u = l.right === void 0 ? !0 : l.right);
            var m = this.directionX === J && d || this.directionX === G && u ? this.wrapperWidth : 0, y = this.directionY === O && f || this.directionY === I && p ? this.wrapperHeight : 0, _ = this.hasHorizontalScroll ? st(this.x, this.startX, r, this.maxScrollX, this.minScrollX, m, this.options) : { destination: e, duration: 0 }, b = this.hasVerticalScroll ? st(this.y, this.startY, r, this.maxScrollY, this.minScrollY, y, this.options) : { destination: s, duration: 0 };
            e = _.destination, s = b.destination, c = Math.max(_.duration, b.duration), this.isInTransition = !0;
          } else
            this.options.wheel && (s = Math.round(s / this.itemHeight) * this.itemHeight, c = this.options.wheel.adjustTime || 400);
          var q = T.swipe;
          if (this.options.snap) {
            var D = this._nearestSnap(e, s);
            this.currentPage = D, c = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(e - D.x), 1e3), Math.min(Math.abs(s - D.y), 1e3)), 300), e = D.x, s = D.y, this.directionX = 0, this.directionY = 0, q = this.options.snap.easing || T.bounce;
          }
          if (e !== this.x || s !== this.y) {
            (e > this.minScrollX || e < this.maxScrollX || s > this.minScrollY || s < this.maxScrollY) && (q = T.swipeBounce), this.scrollTo(e, s, c, q);
            return;
          }
          this.options.wheel && (this.selectedIndex = Math.round(Math.abs(this.y / this.itemHeight))), this.trigger("scrollEnd", {
            x: this.x,
            y: this.y
          });
        }
      }
    }
  }, i.prototype._checkClick = function(t) {
    var e = this.stopFromTransition && !this.pulling;
    if (this.stopFromTransition = !1, !this.moved)
      if (this.options.wheel) {
        if (this.target && this.target.classList.contains(this.options.wheel.wheelWrapperClass)) {
          var s = Math.abs(Math.round(this.y / this.itemHeight)), n = Math.round((this.pointY + K(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[s + n];
        }
        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, T.swipe), !0;
      } else {
        if (!e) {
          var o = this.options.dblclick, r = !1;
          if (o && this.lastClickTime) {
            var h = o.delay, a = h === void 0 ? 300 : h;
            S() - this.lastClickTime < a && (r = !0, bt(t));
          }
          return this.options.tap && xt(t, this.options.tap), this.options.click && !L(t.target, this.options.preventDefaultException) && ct(t), this.lastClickTime = r ? null : S(), !0;
        }
        return !1;
      }
    return !1;
  }, i.prototype._resize = function() {
    var t = this;
    this.enabled && (vt && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
      t.refresh();
    }, this.options.resizePolling));
  }, i.prototype._startProbe = function() {
    M(this.probeTimer), this.probeTimer = j(e);
    var t = this;
    function e() {
      var s = t.getComputedPosition();
      if (t.trigger("scroll", s), !t.isInTransition) {
        t.trigger("scrollEnd", s);
        return;
      }
      t.probeTimer = j(e);
    }
  }, i.prototype._transitionTime = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    if (this.scrollerStyle[w.transitionDuration] = t + "ms", this.options.wheel)
      for (var e = 0; e < this.items.length; e++)
        this.items[e].style[w.transitionDuration] = t + "ms";
    if (this.indicators)
      for (var s = 0; s < this.indicators.length; s++)
        this.indicators[s].transitionTime(t);
  }, i.prototype._transitionTimingFunction = function(t) {
    if (this.scrollerStyle[w.transitionTimingFunction] = t, this.options.wheel)
      for (var e = 0; e < this.items.length; e++)
        this.items[e].style[w.transitionTimingFunction] = t;
    if (this.indicators)
      for (var s = 0; s < this.indicators.length; s++)
        this.indicators[s].transitionTimingFunction(t);
  }, i.prototype._transitionEnd = function(t) {
    if (!(t.target !== this.scroller || !this.isInTransition)) {
      this._transitionTime();
      var e = !this.pulling || this.movingDirectionY === I;
      e && !this.resetPosition(this.options.bounceTime, T.bounce) && (this.isInTransition = !1, this.options.probeType !== z && this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }
  }, i.prototype._translate = function(t, e, s) {
    if (R(!A(t) && !A(e), "Translate x or y is null or undefined."), A(s) && (s = this.scale), this.options.useTransform ? this.scrollerStyle[w.transform] = "translate(" + t + "px," + e + "px) scale(" + s + ")" + this.translateZ : (t = Math.round(t), e = Math.round(e), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = e + "px"), this.options.wheel)
      for (var n = this.options.wheel.rotate, o = n === void 0 ? 25 : n, r = 0; r < this.items.length; r++) {
        var h = o * (e / this.itemHeight + r);
        this.items[r].style[w.transform] = "rotateX(" + h + "deg)";
      }
    if (this.x = t, this.y = e, this.setScale(s), this.indicators)
      for (var a = 0; a < this.indicators.length; a++)
        this.indicators[a].updatePosition();
  }, i.prototype._animate = function(t, e, s, n) {
    var o = this, r = this.x, h = this.y, a = this.lastScale, c = this.scale, f = S(), p = f + s;
    function d() {
      var u = S();
      if (u >= p) {
        o.isAnimating = !1, o._translate(t, e, c), o.trigger("scroll", {
          x: o.x,
          y: o.y
        }), !o.pulling && !o.resetPosition(o.options.bounceTime) && o.trigger("scrollEnd", {
          x: o.x,
          y: o.y
        });
        return;
      }
      u = (u - f) / s;
      var l = n(u), m = (t - r) * l + r, y = (e - h) * l + h, _ = (c - a) * l + a;
      o._translate(m, y, _), o.isAnimating && (o.animateTimer = j(d)), o.options.probeType === z && o.trigger("scroll", {
        x: o.x,
        y: o.y
      });
    }
    this.isAnimating = !0, M(this.animateTimer), d();
  }, i.prototype.scrollBy = function(t, e) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : T.bounce;
    t = this.x + t, e = this.y + e, this.scrollTo(t, e, s, n);
  }, i.prototype.scrollTo = function(t, e) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, n = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : T.bounce;
    this.isInTransition = this.options.useTransition && s > 0 && (t !== this.x || e !== this.y), !s || this.options.useTransition ? (this._transitionTimingFunction(n.style), this._transitionTime(s), this._translate(t, e), s && this.options.probeType === z && this._startProbe(), !s && (t !== this.x || e !== this.y) && (this.trigger("scroll", {
      x: t,
      y: e
    }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, T.bounce) || this.trigger("scrollEnd", {
      x: t,
      y: e
    })), this.options.wheel && (e > this.minScrollY ? this.selectedIndex = 0 : e < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(e / this.itemHeight)))) : this._animate(t, e, s, n.fn);
  }, i.prototype.scrollToElement = function(t, e, s, n, o) {
    if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !(this.options.wheel && !t.classList.contains(this.options.wheel.wheelItemClass)))) {
      var r = at(t);
      r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), n === !0 && (n = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= n || 0, r.left = r.left > this.minScrollX ? this.minScrollX : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > this.minScrollY ? this.minScrollY : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, e, o);
    }
  }, i.prototype.resetPosition = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T.bounce, s = this.x, n = Math.round(s);
    !this.hasHorizontalScroll || n > this.minScrollX ? s = this.minScrollX : n < this.maxScrollX && (s = this.maxScrollX);
    var o = this.y, r = Math.round(o);
    return !this.hasVerticalScroll || r > this.minScrollY ? o = this.minScrollY : r < this.maxScrollY && (o = this.maxScrollY), s === this.x && o === this.y ? !1 : (this.scrollTo(s, o, t, e), !0);
  }, i.prototype.getComputedPosition = function() {
    var t = window.getComputedStyle(this.scroller, null), e = void 0, s = void 0;
    return this.options.useTransform ? (t = t[w.transform].split(")")[0].split(", "), e = +(t[12] || t[4]), s = +(t[13] || t[5])) : (e = +t.left.replace(/[^-\d.]/g, ""), s = +t.top.replace(/[^-\d.]/g, "")), {
      x: e,
      y: s
    };
  }, i.prototype.stop = function() {
    if (this.options.useTransition && this.isInTransition) {
      this.isInTransition = !1, M(this.probeTimer);
      var t = this.getComputedPosition();
      this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0;
    } else
      !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, M(this.animateTimer), this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0);
  }, i.prototype.destroy = function() {
    this.destroyed = !0, this.trigger("destroy"), this.options.useTransition ? M(this.probeTimer) : M(this.animateTimer), this._removeDOMEvents(), this._events = {};
  };
}
function Et(i) {
  i.prototype._initSnap = function() {
    var t = this;
    this.currentPage = {};
    var e = this.options.snap;
    if (e.loop) {
      var s = this.scroller.children;
      s.length > 1 ? (_t(s[s.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(s[1].cloneNode(!0))) : e.loop = !1;
    }
    var n = e.el;
    typeof n == "string" && (n = this.scroller.querySelectorAll(n)), this.on("refresh", function() {
      if (t.pages = [], !(!t.wrapperWidth || !t.wrapperHeight || !t.scrollerWidth || !t.scrollerHeight)) {
        var o = e.stepX || t.wrapperWidth, r = e.stepY || t.wrapperHeight, h = 0, a = void 0, c = void 0, f = void 0, p = 0, d = void 0, u = 0, l = void 0, m = void 0;
        if (n)
          for (d = n.length, l = -1; p < d; p++)
            m = P(n[p]), (p === 0 || m.left <= P(n[p - 1]).left) && (u = 0, l++), t.pages[u] || (t.pages[u] = []), h = Math.max(-m.left, t.maxScrollX), a = Math.max(-m.top, t.maxScrollY), c = h - Math.round(m.width / 2), f = a - Math.round(m.height / 2), t.pages[u][l] = {
              x: h,
              y: a,
              width: m.width,
              height: m.height,
              cx: c,
              cy: f
            }, h > t.maxScrollX && u++;
        else
          for (c = Math.round(o / 2), f = Math.round(r / 2); h > -t.scrollerWidth; ) {
            for (t.pages[p] = [], d = 0, a = 0; a > -t.scrollerHeight; )
              t.pages[p][d] = {
                x: Math.max(h, t.maxScrollX),
                y: Math.max(a, t.maxScrollY),
                width: o,
                height: r,
                cx: h - c,
                cy: a - f
              }, a -= r, d++;
            h -= o, p++;
          }
        t._checkSnapLoop();
        var y = e._loopX ? 1 : 0, _ = e._loopY ? 1 : 0;
        t._goToPage(t.currentPage.pageX || y, t.currentPage.pageY || _, 0);
        var b = e.threshold;
        b % 1 === 0 ? (t.snapThresholdX = b, t.snapThresholdY = b) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * b), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * b));
      }
    }), this.on("scrollEnd", function() {
      e.loop && (e._loopX ? (t.currentPage.pageX === 0 && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (t.currentPage.pageY === 0 && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)));
    }), e.listenFlick !== !1 && this.on("flick", function() {
      var o = e.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
      t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, o);
    }), this.on("destroy", function() {
      if (e.loop) {
        var o = t.scroller.children;
        o.length > 2 && (et(t.scroller, o[o.length - 1]), et(t.scroller, o[0]));
      }
    });
  }, i.prototype._checkSnapLoop = function() {
    var t = this.options.snap;
    !t.loop || !this.pages || !this.pages.length || (this.pages.length > 1 && (t._loopX = !0), this.pages[0] && this.pages[0].length > 1 && (t._loopY = !0), t._loopX && t._loopY && F("Loop does not support two direction at the same time."));
  }, i.prototype._nearestSnap = function(t, e) {
    if (!this.pages.length)
      return { x: 0, y: 0, pageX: 0, pageY: 0 };
    var s = 0;
    if (Math.abs(t - this.absStartX) <= this.snapThresholdX && Math.abs(e - this.absStartY) <= this.snapThresholdY)
      return this.currentPage;
    t > this.minScrollX ? t = this.minScrollX : t < this.maxScrollX && (t = this.maxScrollX), e > this.minScrollY ? e = this.minScrollY : e < this.maxScrollY && (e = this.maxScrollY);
    for (var n = this.pages.length; s < n; s++)
      if (t >= this.pages[s][0].cx) {
        t = this.pages[s][0].x;
        break;
      }
    n = this.pages[s].length;
    for (var o = 0; o < n; o++)
      if (e >= this.pages[0][o].cy) {
        e = this.pages[0][o].y;
        break;
      }
    return s === this.currentPage.pageX && (s += this.directionX, s < 0 ? s = 0 : s >= this.pages.length && (s = this.pages.length - 1), t = this.pages[s][0].x), o === this.currentPage.pageY && (o += this.directionY, o < 0 ? o = 0 : o >= this.pages[0].length && (o = this.pages[0].length - 1), e = this.pages[0][o].y), {
      x: t,
      y: e,
      pageX: s,
      pageY: o
    };
  }, i.prototype._goToPage = function(t) {
    var e = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : 0, s = arguments[2], n = arguments[3], o = this.options.snap;
    if (!(!o || !this.pages || !this.pages.length) && (n = n || o.easing || T.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), !!this.pages[t])) {
      e >= this.pages[t].length ? e = this.pages[t].length - 1 : e < 0 && (e = 0);
      var r = this.pages[t][e].x, h = this.pages[t][e].y;
      s = s === void 0 ? o.speed || Math.max(Math.max(Math.min(Math.abs(r - this.x), 1e3), Math.min(Math.abs(h - this.y), 1e3)), 300) : s, this.currentPage = {
        x: r,
        y: h,
        pageX: t,
        pageY: e
      }, this.scrollTo(r, h, s, n);
    }
  }, i.prototype.goToPage = function(t, e, s, n) {
    var o = this.options.snap;
    if (!(!o || !this.pages || !this.pages.length)) {
      if (o.loop) {
        var r = void 0;
        o._loopX ? (r = this.pages.length - 2, t >= r ? t = r - 1 : t < 0 && (t = 0), t += 1) : (r = this.pages[0].length - 2, e >= r ? e = r - 1 : e < 0 && (e = 0), e += 1);
      }
      this._goToPage(t, e, s, n);
    }
  }, i.prototype.next = function(t, e) {
    var s = this.options.snap;
    if (s) {
      var n = this.currentPage.pageX, o = this.currentPage.pageY;
      n++, n >= this.pages.length && this.hasVerticalScroll && (n = 0, o++), this._goToPage(n, o, t, e);
    }
  }, i.prototype.prev = function(t, e) {
    var s = this.options.snap;
    if (s) {
      var n = this.currentPage.pageX, o = this.currentPage.pageY;
      n--, n < 0 && this.hasVerticalScroll && (n = 0, o--), this._goToPage(n, o, t, e);
    }
  }, i.prototype.getCurrentPage = function() {
    var t = this.options.snap;
    if (!t)
      return null;
    if (t.loop) {
      var e = void 0;
      return t._loopX ? e = k({}, this.currentPage, {
        pageX: this.currentPage.pageX - 1
      }) : e = k({}, this.currentPage, {
        pageY: this.currentPage.pageY - 1
      }), e;
    }
    return this.currentPage;
  };
}
function Dt(i) {
  i.prototype.wheelTo = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
    this.options.wheel && (this.y = -t * this.itemHeight, this.scrollTo(0, this.y));
  }, i.prototype.getSelectedIndex = function() {
    return this.options.wheel && this.selectedIndex;
  }, i.prototype._initWheel = function() {
    var t = this.options.wheel;
    t.wheelWrapperClass || (t.wheelWrapperClass = "wheel-scroll"), t.wheelItemClass || (t.wheelItemClass = "wheel-item"), t.selectedIndex === void 0 && (t.selectedIndex = 0, F("wheel option selectedIndex is required!"));
  };
}
var E = 8;
function It(i) {
  i.prototype._initScrollbar = function() {
    var t = this, e = this.options.scrollbar, s = e.fade, n = s === void 0 ? !0 : s, o = e.interactive, r = o === void 0 ? !1 : o;
    this.indicators = [];
    var h = void 0;
    this.options.scrollX && (h = {
      el: nt("horizontal"),
      direction: "horizontal",
      fade: n,
      interactive: r
    }, this._insertScrollBar(h.el), this.indicators.push(new g(this, h))), this.options.scrollY && (h = {
      el: nt("vertical"),
      direction: "vertical",
      fade: n,
      interactive: r
    }, this._insertScrollBar(h.el), this.indicators.push(new g(this, h))), this.on("refresh", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].refresh();
    }), n && (this.on("scrollEnd", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade();
    }), this.on("scrollCancel", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade();
    }), this.on("scrollStart", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade(!0);
    }), this.on("beforeScrollStart", function() {
      for (var a = 0; a < t.indicators.length; a++)
        t.indicators[a].fade(!0, !0);
    })), this.on("destroy", function() {
      t._removeScrollBars();
    });
  }, i.prototype._insertScrollBar = function(t) {
    this.wrapper.appendChild(t);
  }, i.prototype._removeScrollBars = function() {
    for (var t = 0; t < this.indicators.length; t++)
      this.indicators[t].destroy();
  };
}
function nt(i) {
  var t = document.createElement("div"), e = document.createElement("div");
  return t.style.cssText = "position:absolute;z-index:9999;pointerEvents:none", e.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", e.className = "bscroll-indicator", i === "horizontal" ? (t.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", e.style.height = "100%", t.className = "bscroll-horizontal-scrollbar") : (t.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", e.style.width = "100%", t.className = "bscroll-vertical-scrollbar"), t.style.cssText += ";overflow:hidden", t.appendChild(e), t;
}
function g(i, t) {
  this.wrapper = t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = i, this.direction = t.direction, t.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.x = 0, this.y = 0, t.interactive && this._addDOMEvents();
}
g.prototype.handleEvent = function(i) {
  switch (i.type) {
    case "touchstart":
    case "mousedown":
      this._start(i);
      break;
    case "touchmove":
    case "mousemove":
      this._move(i);
      break;
    case "touchend":
    case "mouseup":
    case "touchcancel":
    case "mousecancel":
      this._end(i);
      break;
  }
};
g.prototype.refresh = function() {
  this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition());
};
g.prototype.fade = function(i, t) {
  var e = this;
  if (!(t && !this.visible)) {
    var s = i ? 250 : 500;
    i = i ? "1" : "0", this.wrapperStyle[w.transitionDuration] = s + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
      e.wrapperStyle.opacity = i, e.visible = +i;
    }, 0);
  }
};
g.prototype.updatePosition = function() {
  if (this.direction === "vertical") {
    var i = Math.round(this.sizeRatioY * this.scroller.y);
    if (i < 0) {
      this.transitionTime(500);
      var t = Math.max(this.indicatorHeight + i * 3, E);
      this.indicatorStyle.height = t + "px", i = 0;
    } else if (i > this.maxPosY) {
      this.transitionTime(500);
      var e = Math.max(this.indicatorHeight - (i - this.maxPosY) * 3, E);
      this.indicatorStyle.height = e + "px", i = this.maxPosY + this.indicatorHeight - e;
    } else
      this.indicatorStyle.height = this.indicatorHeight + "px";
    this.y = i, this.scroller.options.useTransform ? this.indicatorStyle[w.transform] = "translateY(" + i + "px)" + this.scroller.translateZ : this.indicatorStyle.top = i + "px";
  } else {
    var s = Math.round(this.sizeRatioX * this.scroller.x);
    if (s < 0) {
      this.transitionTime(500);
      var n = Math.max(this.indicatorWidth + s * 3, E);
      this.indicatorStyle.width = n + "px", s = 0;
    } else if (s > this.maxPosX) {
      this.transitionTime(500);
      var o = Math.max(this.indicatorWidth - (s - this.maxPosX) * 3, E);
      this.indicatorStyle.width = o + "px", s = this.maxPosX + this.indicatorWidth - o;
    } else
      this.indicatorStyle.width = this.indicatorWidth + "px";
    this.x = s, this.scroller.options.useTransform ? this.indicatorStyle[w.transform] = "translateX(" + s + "px)" + this.scroller.translateZ : this.indicatorStyle.left = s + "px";
  }
};
g.prototype.transitionTime = function() {
  var i = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  this.indicatorStyle[w.transitionDuration] = i + "ms";
};
g.prototype.transitionTimingFunction = function(i) {
  this.indicatorStyle[w.transitionTimingFunction] = i;
};
g.prototype.destroy = function() {
  this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper);
};
g.prototype._start = function(i) {
  var t = i.touches ? i.touches[0] : i;
  i.preventDefault(), i.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = S(), this._handleMoveEvents(N), this.scroller.trigger("beforeScrollStart");
};
g.prototype._move = function(i) {
  var t = i.touches ? i.touches[0] : i;
  i.preventDefault(), i.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
  var e = t.pageX - this.lastPointX;
  this.lastPointX = t.pageX;
  var s = t.pageY - this.lastPointY;
  this.lastPointY = t.pageY;
  var n = this.x + e, o = this.y + s;
  this._pos(n, o);
};
g.prototype._end = function(i) {
  if (this.initiated) {
    this.initiated = !1, i.preventDefault(), i.stopPropagation(), this._handleMoveEvents($);
    var t = this.scroller.options.snap;
    if (t) {
      var e = t.speed, s = t.easing, n = s === void 0 ? T.bounce : s, o = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), r = e || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - o.x), 1e3), Math.min(Math.abs(this.scroller.y - o.y), 1e3)), 300);
      (this.scroller.x !== o.x || this.scroller.y !== o.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = o, this.scroller.scrollTo(o.x, o.y, r, n));
    }
    this.moved && this.scroller.trigger("scrollEnd", {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};
g.prototype._pos = function(i, t) {
  i < 0 ? i = 0 : i > this.maxPosX && (i = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), i = Math.round(i / this.sizeRatioX), t = Math.round(t / this.sizeRatioY), this.scroller.scrollTo(i, t), this.scroller.trigger("scroll", {
    x: this.scroller.x,
    y: this.scroller.y
  });
};
g.prototype._shouldShow = function() {
  return this.direction === "vertical" && this.scroller.hasVerticalScroll || this.direction === "horizontal" && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1);
};
g.prototype._calculate = function() {
  if (this.direction === "vertical") {
    var i = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(i * i / (this.scroller.scrollerHeight || i || 1)), E), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = i - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var t = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(t * t / (this.scroller.scrollerWidth || t || 1)), E), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = t - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};
g.prototype._addDOMEvents = function() {
  var i = N;
  this._handleDOMEvents(i);
};
g.prototype._removeDOMEvents = function() {
  var i = $;
  this._handleDOMEvents(i), this._handleMoveEvents(i);
};
g.prototype._handleMoveEvents = function(i) {
  this.scroller.options.disableTouch || i(window, "touchmove", this), this.scroller.options.disableMouse || i(window, "mousemove", this);
};
g.prototype._handleDOMEvents = function(i) {
  this.scroller.options.disableTouch || (i(this.indicator, "touchstart", this), i(window, "touchend", this)), this.scroller.options.disableMouse || (i(this.indicator, "mousedown", this), i(window, "mouseup", this));
};
function Wt(i) {
  i.prototype._initPullDown = function() {
    this.options.probeType = z;
  }, i.prototype._checkPullDown = function() {
    var t = this.options.pullDownRefresh, e = t.threshold, s = e === void 0 ? 90 : e, n = t.stop, o = n === void 0 ? 40 : n;
    return this.directionY !== O || this.y < s ? !1 : (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, o, this.options.bounceTime, T.bounce), this.pulling);
  }, i.prototype.finishPullDown = function() {
    this.pulling = !1, this.resetPosition(this.options.bounceTime, T.bounce);
  }, i.prototype.openPullDown = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullDownRefresh = t, this._initPullDown();
  }, i.prototype.closePullDown = function() {
    this.options.pullDownRefresh = !1;
  };
}
function zt(i) {
  i.prototype._initPullUp = function() {
    this.options.probeType = z, this.pullupWatching = !1, this._watchPullUp();
  }, i.prototype._watchPullUp = function() {
    this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd));
  }, i.prototype._checkToEnd = function(t) {
    var e = this, s = this.options.pullUpLoad.threshold, n = s === void 0 ? 0 : s;
    this.movingDirectionY === I && t.y <= this.maxScrollY + n && (this.once("scrollEnd", function() {
      e.pullupWatching = !1;
    }), this.trigger("pullingUp"), this.off("scroll", this._checkToEnd));
  }, i.prototype.finishPullUp = function() {
    var t = this;
    this.pullupWatching ? this.once("scrollEnd", function() {
      t._watchPullUp();
    }) : this._watchPullUp();
  }, i.prototype.openPullUp = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullUpLoad = t, this._initPullUp();
  }, i.prototype.closePullUp = function() {
    this.options.pullUpLoad = !1, this.pullupWatching && (this.pullupWatching = !1, this.off("scroll", this._checkToEnd));
  };
}
function kt(i) {
  i.prototype._initMouseWheel = function() {
    var t = this;
    this._handleMouseWheelEvent(N), this.on("destroy", function() {
      clearTimeout(t.mouseWheelTimer), clearTimeout(t.mouseWheelEndTimer), t._handleMouseWheelEvent($);
    }), this.firstWheelOpreation = !0;
  }, i.prototype._handleMouseWheelEvent = function(t) {
    t(this.wrapper, "wheel", this), t(this.wrapper, "mousewheel", this), t(this.wrapper, "DOMMouseScroll", this);
  }, i.prototype._onMouseWheel = function(t) {
    var e = this;
    if (this.enabled) {
      t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.firstWheelOpreation && this.trigger("scrollStart"), this.firstWheelOpreation = !1;
      var s = this.options.mouseWheel, n = s.speed, o = n === void 0 ? 20 : n, r = s.invert, h = r === void 0 ? !1 : r, a = s.easeTime, c = a === void 0 ? 300 : a;
      clearTimeout(this.mouseWheelTimer), this.mouseWheelTimer = setTimeout(function() {
        !e.options.snap && !c && e.trigger("scrollEnd", {
          x: e.x,
          y: e.y
        }), e.firstWheelOpreation = !0;
      }, 400);
      var f = void 0, p = void 0;
      switch (!0) {
        case "deltaX" in t:
          t.deltaMode === 1 ? (f = -t.deltaX * o, p = -t.deltaY * o) : (f = -t.deltaX, p = -t.deltaY);
          break;
        case "wheelDeltaX" in t:
          f = t.wheelDeltaX / 120 * o, p = t.wheelDeltaY / 120 * o;
          break;
        case "wheelDelta" in t:
          f = p = t.wheelDelta / 120 * o;
          break;
        case "detail" in t:
          f = p = -t.detail / 3 * o;
          break;
        default:
          return;
      }
      var d = h ? -1 : 1;
      f *= d, p *= d, this.hasVerticalScroll || (f = p, p = 0);
      var u = void 0, l = void 0;
      if (this.options.snap) {
        u = this.currentPage.pageX, l = this.currentPage.pageY, f > 0 ? u-- : f < 0 && u++, p > 0 ? l-- : p < 0 && l++, this._goToPage(u, l);
        return;
      }
      u = this.x + Math.round(this.hasHorizontalScroll ? f : 0), l = this.y + Math.round(this.hasVerticalScroll ? p : 0), this.movingDirectionX = this.directionX = f > 0 ? -1 : f < 0 ? 1 : 0, this.movingDirectionY = this.directionY = p > 0 ? -1 : p < 0 ? 1 : 0, u > this.minScrollX ? u = this.minScrollX : u < this.maxScrollX && (u = this.maxScrollX), l > this.minScrollY ? l = this.minScrollY : l < this.maxScrollY && (l = this.maxScrollY);
      var m = this.y === l;
      this.scrollTo(u, l, c, T.swipe), this.trigger("scroll", {
        x: this.x,
        y: this.y
      }), clearTimeout(this.mouseWheelEndTimer), m && (this.mouseWheelEndTimer = setTimeout(function() {
        e.trigger("scrollEnd", {
          x: e.x,
          y: e.y
        });
      }, c));
    }
  };
}
function Ht(i) {
  i.prototype._initZoom = function() {
    var t = this.options.zoom, e = t.start, s = e === void 0 ? 1 : e, n = t.min, o = n === void 0 ? 1 : n, r = t.max, h = r === void 0 ? 4 : r;
    this.scale = Math.min(Math.max(s, o), h), this.setScale(this.scale), this.scrollerStyle[w.transformOrigin] = "0 0";
  }, i.prototype._zoomTo = function(t, e, s, n) {
    this.scaled = !0;
    var o = t / (n || this.scale);
    this.setScale(t), this.refresh();
    var r = Math.round(this.startX - (e - this.relativeX) * (o - 1)), h = Math.round(this.startY - (s - this.relativeY) * (o - 1));
    r > this.minScrollX ? r = this.minScrollX : r < this.maxScrollX && (r = this.maxScrollX), h > this.minScrollY ? h = this.minScrollY : h < this.maxScrollY && (h = this.maxScrollY), (this.x !== r || this.y !== h) && this.scrollTo(r, h, this.options.bounceTime), this.scaled = !1;
  }, i.prototype.zoomTo = function(t, e, s) {
    var n = K(this.wrapper), o = n.left, r = n.top, h = e + o - this.x, a = s + r - this.y;
    this._zoomTo(t, h, a);
  }, i.prototype._zoomStart = function(t) {
    var e = t.touches[0], s = t.touches[1], n = Math.abs(e.pageX - s.pageX), o = Math.abs(e.pageY - s.pageY);
    this.startDistance = it(n, o), this.startScale = this.scale;
    var r = K(this.wrapper), h = r.left, a = r.top;
    this.originX = Math.abs(e.pageX + s.pageX) / 2 + h - this.x, this.originY = Math.abs(e.pageY + s.pageY) / 2 + a - this.y, this.trigger("zoomStart");
  }, i.prototype._zoom = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var e = t.touches[0], s = t.touches[1], n = Math.abs(e.pageX - s.pageX), o = Math.abs(e.pageY - s.pageY), r = it(n, o), h = r / this.startDistance * this.startScale;
      this.scaled = !0;
      var a = this.options.zoom, c = a.min, f = c === void 0 ? 1 : c, p = a.max, d = p === void 0 ? 4 : p;
      h < f ? h = 0.5 * f * Math.pow(2, h / f) : h > d && (h = 2 * d * Math.pow(0.5, d / h));
      var u = h / this.startScale, l = this.startX - (this.originX - this.relativeX) * (u - 1), m = this.startY - (this.originY - this.relativeY) * (u - 1);
      this.setScale(h), this.scrollTo(l, m, 0);
    }
  }, i.prototype._zoomEnd = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
      var e = this.options.zoom, s = e.min, n = s === void 0 ? 1 : s, o = e.max, r = o === void 0 ? 4 : o, h = this.scale > r ? r : this.scale < n ? n : this.scale;
      this._zoomTo(h, this.originX, this.originY, this.startScale), this.trigger("zoomEnd");
    }
  };
}
var rt = 30, ht = 10, H = 200, ft = 2e3;
function At(i) {
  i.prototype._initInfinite = function() {
    this.options.probeType = 3, this.maxScrollY = -ft, this.infiniteScroller = new v(this, this.options.infinity);
  };
}
function tt(i) {
  if (i && i.classList)
    return i.classList.contains("tombstone");
}
function v(i, t) {
  var e = this;
  this.options = t, R(typeof this.options.createTombstone == "function", "Infinite scroll need createTombstone Function to create tombstone"), R(typeof this.options.fetch == "function", "Infinite scroll need fetch Function to fetch new data."), R(typeof this.options.render == "function", "Infinite scroll need render Function to render each item."), this.firstAttachedItem = 0, this.lastAttachedItem = 0, this.anchorScrollTop = 0, this.anchorItem = {
    index: 0,
    offset: 0
  }, this.tombstoneHeight = 0, this.tombstoneWidth = 0, this.tombstones = [], this.items = [], this.loadedItems = 0, this.requestInProgress = !1, this.hasMore = !0, this.scroller = i, this.wrapperEl = this.scroller.wrapper, this.scrollerEl = this.scroller.scroller, this.scroller.on("scroll", function() {
    e.onScroll();
  }), this.scroller.on("resize", function() {
    e.onResize();
  }), this.onResize();
}
v.prototype.onScroll = function() {
  var i = -this.scroller.y, t = i - this.anchorScrollTop;
  i === 0 ? this.anchorItem = {
    index: 0,
    offset: 0
  } : this.anchorItem = this._calculateAnchoredItem(this.anchorItem, t), this.anchorScrollTop = i;
  var e = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight), s = this.anchorItem.index, n = e.index;
  t < 0 ? (s -= rt, n += ht) : (s -= ht, n += rt), this.fill(s, n), this.maybeRequestContent();
};
v.prototype.onResize = function() {
  var i = this.options.createTombstone();
  i.style.position = "absolute", this.scrollerEl.appendChild(i), i.style.display = "", this.tombstoneHeight = i.offsetHeight, this.tombstoneWidth = i.offsetWidth, this.scrollerEl.removeChild(i);
  for (var t = 0; t < this.items.length; t++)
    this.items[t].height = this.items[t].width = 0;
  this.onScroll();
};
v.prototype.fill = function(i, t) {
  this.firstAttachedItem = Math.max(0, i), this.hasMore || (t = Math.min(t, this.items.length)), this.lastAttachedItem = t, this.attachContent();
};
v.prototype.maybeRequestContent = function() {
  var i = this;
  if (!(this.requestInProgress || !this.hasMore)) {
    var t = this.lastAttachedItem - this.loadedItems;
    t <= 0 || (this.requestInProgress = !0, this.options.fetch(t).then(function(e) {
      if (i.requestInProgress = !1, e)
        i.addContent(e);
      else {
        i.hasMore = !1;
        var s = i._removeTombstones(), n = 0;
        i.anchorItem.index <= i.items.length ? (n = i._fixScrollPosition(), i._setupAnimations({}, n), i.scroller.resetPosition(i.scroller.options.bounceTime)) : (i.anchorItem.index -= s, n = i._fixScrollPosition(), i._setupAnimations({}, n), i.scroller.stop(), i.scroller.resetPosition(), i.onScroll());
      }
    }));
  }
};
v.prototype.addContent = function(i) {
  for (var t = 0; t < i.length; t++)
    this.items.length <= this.loadedItems && this._addItem(), this.items[this.loadedItems++].data = i[t];
  this.attachContent(), this.maybeRequestContent();
};
v.prototype.attachContent = function() {
  var i = this._collectUnusedNodes(), t = this._createDOMNodes(i);
  this._cleanupUnusedNodes(i), this._cacheNodeSize();
  var e = this._fixScrollPosition();
  this._setupAnimations(t, e);
};
v.prototype.resetMore = function() {
  this.hasMore = !0;
};
v.prototype._removeTombstones = function() {
  for (var i = void 0, t = 0, e = this.items.length, s = 0; s < e; s++) {
    var n = this.items[s].node, o = this.items[s].data;
    (!n || tt(n)) && !o && (i || (i = s), n && this.scrollerEl.removeChild(n));
  }
  return t = e - i, this.items.splice(i), this.lastAttachedItem = Math.min(this.lastAttachedItem, this.items.length), t;
};
v.prototype._collectUnusedNodes = function() {
  for (var i = [], t = 0; t < this.items.length; t++) {
    if (t === this.firstAttachedItem) {
      t = this.lastAttachedItem - 1;
      continue;
    }
    var e = this.items[t].node;
    e && (tt(e) ? (this.tombstones.push(e), this.tombstones[this.tombstones.length - 1].style.display = "none") : i.push(e)), this.items[t].node = null;
  }
  return i;
};
v.prototype._createDOMNodes = function(i) {
  for (var t = {}, e = this.firstAttachedItem; e < this.lastAttachedItem; e++) {
    for (; this.items.length <= e; )
      this._addItem();
    var s = this.items[e].node, n = this.items[e].data;
    if (s)
      if (tt(s) && n)
        s.style.zIndex = 1, t[e] = [s, this.items[e].top - this.anchorScrollTop], this.items[e].node = null;
      else
        continue;
    var o = n ? this.options.render(n, i.pop()) : this._getTombStone();
    o.style.position = "absolute", this.items[e].top = -1, this.scrollerEl.appendChild(o), this.items[e].node = o;
  }
  return t;
};
v.prototype._cleanupUnusedNodes = function(i) {
  for (; i.length; )
    this.scrollerEl.removeChild(i.pop());
};
v.prototype._cacheNodeSize = function() {
  for (var i = this.firstAttachedItem; i < this.lastAttachedItem; i++)
    this.items[i].data && !this.items[i].height && (this.items[i].height = this.items[i].node.offsetHeight, this.items[i].width = this.items[i].node.offsetWidth);
};
v.prototype._fixScrollPosition = function() {
  this.anchorScrollTop = 0;
  for (var i = 0; i < this.anchorItem.index; i++)
    this.anchorScrollTop += this.items[i].height || this.tombstoneHeight;
  this.anchorScrollTop += this.anchorItem.offset;
  for (var t = this.anchorScrollTop - this.anchorItem.offset, e = this.anchorItem.index; e > this.firstAttachedItem; )
    t -= this.items[e - 1].height || this.tombstoneHeight, e--;
  return t;
};
v.prototype._setupAnimations = function(i, t) {
  var e = this;
  for (var s in i) {
    var n = i[s];
    this.items[s].node.style.transform = "translateY(" + (this.anchorScrollTop + n[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")", this.items[s].node.offsetTop, n[0].offsetTop, this.items[s].node.style.transition = "transform " + H + "ms";
  }
  for (var o = this.firstAttachedItem; o < this.lastAttachedItem; o++) {
    var r = i[o];
    if (r) {
      var h = r[0];
      h.style.transition = "transform " + H + "ms, opacity " + H + "ms", h.style.transform = "translateY(" + t + "px) scale(" + this.items[o].width / this.tombstoneWidth + ", " + this.items[o].height / this.tombstoneHeight + ")", h.style.opacity = 0;
    }
    t !== this.items[o].top && (r || (this.items[o].node.style.transition = ""), this.items[o].node.style.transform = "translateY(" + t + "px)"), this.items[o].top = t, t += this.items[o].height || this.tombstoneHeight;
  }
  this.scroller.maxScrollY = -(t - this.wrapperEl.offsetHeight + (this.hasMore ? ft : 0)), setTimeout(function() {
    for (var a in i) {
      var c = i[a];
      c[0].style.display = "none", e.tombstones.push(c[0]);
    }
  }, H);
};
v.prototype._getTombStone = function() {
  var i = this.tombstones.pop();
  return i ? (i.style.display = "", i.style.opacity = 1, i.style.transform = "", i.style.transition = "", i) : this.options.createTombstone();
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
v.prototype._calculateAnchoredItem = function(i, t) {
  if (t === 0)
    return i;
  var e = i.index, s = 0;
  if (t += i.offset, t < 0) {
    for (; t < 0 && e > 0 && this.items[e - 1].height; )
      t += this.items[e - 1].height, e--;
    s = Math.max(-e, Math.ceil(Math.min(t, 0) / this.tombstoneHeight));
  } else {
    for (; t > 0 && e < this.items.length && this.items[e].height && this.items[e].height < t; )
      t -= this.items[e].height, e++;
    (e >= this.items.length || !this.items[e].height) && (s = Math.floor(Math.max(t, 0) / this.tombstoneHeight));
  }
  return e += s, t -= s * this.tombstoneHeight, {
    index: e,
    offset: t
  };
};
function x(i, t) {
  this.wrapper = typeof i == "string" ? document.querySelector(i) : i, this.wrapper || F("Can not resolve the wrapper DOM."), this.scroller = this.wrapper.children[0], this.scroller || F("The wrapper need at least one child element to be scroller."), this.scrollerStyle = this.scroller.style, this._init(i, t);
}
Xt(x);
Pt(x);
mt(x);
Et(x);
Dt(x);
It(x);
Wt(x);
zt(x);
kt(x);
Ht(x);
At(x);
x.Version = "1.12.6";
export {
  x as default
};
