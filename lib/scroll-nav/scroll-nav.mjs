import "./css.mjs";
import { openBlock as y, createElementBlock as _, renderSlot as D, createVNode as P, Transition as te, withCtx as X, withDirectives as O, createElementVNode as g, vShow as U, normalizeStyle as wt, Fragment as bt, renderList as Tt, resolveComponent as k, toDisplayString as lt, createCommentVNode as Pt, normalizeClass as mt, createSlots as ee } from "vue";
const xt = {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, Ft = typeof window < "u", V = Ft && navigator.userAgent.toLowerCase();
V && V.indexOf("android") > 0;
const ie = V && /iphone|ipad|ipod|ios/.test(V);
function jt(e, t) {
  return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
}
function se(e, t) {
  if (jt(e, t))
    return;
  const i = e.className.split(" ");
  i.push(t), e.className = i.join(" ");
}
function oe(e, t) {
  if (!jt(e, t))
    return;
  const i = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
  e.className = e.className.replace(i, " ");
}
function A(e) {
  return {
    top: e.offsetTop,
    left: e.offsetLeft,
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
let at = (() => {
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
function ne(e) {
  return at === !1 ? !1 : at === "standard" ? e === "transitionEnd" ? "transitionend" : e : at + e.charAt(0).toUpperCase() + e.substr(1);
}
const H = (e, t) => {
  const i = e.__vccOpts || e;
  for (const [s, o] of t)
    i[s] = o;
  return i;
}, re = "cube-sticky", Dt = "change", Mt = "diff-change", le = ne("transform"), ae = {
  name: re,
  provide() {
    return {
      sticky: this
    };
  },
  emits: [Dt, Mt],
  props: {
    pos: {
      type: Number,
      required: !0
    },
    checkTop: {
      type: Boolean,
      default: !0
    },
    fixedShowAni: {
      type: String,
      default(e) {
        return e.checkTop ? "" : "cube-sticky-fixed-fade";
      }
    },
    offset: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      diff: 0,
      currentDiff: 0,
      currentIndex: -1,
      currentKey: ""
    };
  },
  computed: {
    fixedShow() {
      return !!this.eles[this.currentIndex];
    }
  },
  watch: {
    diff(e) {
      e >= 0 && (e = 0), e = Math.ceil(e), this._fixedTop !== e && (this._fixedTop = e, this.$refs.fixedEle.style[le] = `translate3d(0, ${e}px, 0)`);
    },
    pos: "computeCurrentSticky",
    currentIndex(e, t) {
      const i = this.eles[t], s = this.eles[e], o = s && s.eleKey !== void 0 ? s.eleKey : e === -1 ? "" : e, n = this.$refs.fixedEle, r = this.$slots.fixed;
      this.$nextTick(() => {
        if (r)
          this.fixedEleHeight = n.offsetHeight;
        else {
          const l = n.firstElementChild;
          i && (i.$el.appendChild(l), i.refresh()), s ? (n.appendChild(s.$el.firstElementChild), this.fixedEleHeight = n.offsetHeight) : this.fixedEleHeight = 0;
        }
        const a = "cube-sticky-ele-on";
        i && oe(i.$el, a), s && se(s.$el, a);
      }), this.currentKey = o, this.$emit(Dt, o, e);
    },
    currentDiff(e) {
      const t = this.heights[this.currentIndex] || 0;
      this.$emit(Mt, e, t);
    }
  },
  created() {
    this.fixedEleHeight = 0, this.eles = [], this.positions = [], this.heights = [];
  },
  mounted() {
    this.refresh();
  },
  methods: {
    addEle(e) {
      this.eles.push(e);
    },
    removeEle(e) {
      const t = this.eles.indexOf(e);
      this.eles.splice(t, 1), this.positions.splice(t, 1);
    },
    refresh() {
      this.$nextTick(() => {
        this.eles.forEach((e) => {
          e.refresh();
        }), this._calculateHeight(), this.computeCurrentSticky(this.pos);
      });
    },
    computeCurrentSticky(e) {
      e += this.offset;
      const t = this.positions, i = this.heights, s = this.checkTop, o = t.length;
      for (let n = o - 1; n >= 0; n--) {
        const r = n === o - 1, a = r ? e : t[n + 1];
        let l, h;
        s ? (l = t[n], h = l + i[n]) : (l = t[n] + i[n], h = l);
        const u = Math.max(h, a);
        if (e >= l && e <= u) {
          this.currentIndex = n, this.currentDiff = e - l;
          const p = a - e;
          p >= 0 && !r ? this.diff = p - (this.fixedEleHeight || i[n]) : this.diff = 0;
          return;
        }
      }
      this.currentIndex = -1, this.currentDiff = 0;
    },
    _calculateHeight() {
      this.eles.forEach((t, i) => {
        const { top: s, height: o } = A(t.$el);
        this.positions[i] = s, this.heights[i] = o;
      }), this.fixedEleHeight = this.$refs.fixedEle.offsetHeight;
    }
  }
}, he = { class: "cube-sticky" }, ce = {
  ref: "fixedEle",
  class: "cube-sticky-fixed"
};
function ue(e, t, i, s, o, n) {
  return y(), _("div", he, [
    D(e.$slots, "default"),
    P(te, { name: i.fixedShowAni }, {
      default: X(() => [
        O(g("div", ce, [
          D(e.$slots, "fixed", {
            current: o.currentKey,
            index: o.currentIndex
          })
        ], 512), [
          [U, n.fixedShow]
        ])
      ]),
      _: 3
    }, 8, ["name"])
  ]);
}
const pe = /* @__PURE__ */ H(ae, [["render", ue]]);
const fe = "cube-sticky-ele", de = {
  name: fe,
  inject: ["sticky"],
  props: {
    eleKey: {
      type: [Number, String]
    }
  },
  mounted() {
    this.sticky.addEle(this);
  },
  methods: {
    refresh() {
      const e = this.$el;
      e.firstElementChild && (e.style.height = "", e.style.height = `${e.offsetHeight}px`);
    }
  },
  beforeUnmount() {
    this.sticky.removeEle(this);
  }
}, me = { class: "cube-sticky-ele" }, ge = { class: "cube-sticky-content" };
function ve(e, t, i, s, o, n) {
  return y(), _("div", me, [
    g("div", ge, [
      D(e.$slots, "default")
    ])
  ]);
}
const Vt = /* @__PURE__ */ H(de, [["render", ve]]);
/*!
 * better-normal-scroll v1.12.6
 * (c) 2016-2018 ustbhuangyi
 * Released under the MIT License.
 */
var ye = function() {
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
}(), _e = function(e) {
  if (Array.isArray(e)) {
    for (var t = 0, i = Array(e.length); t < e.length; t++)
      i[t] = e[t];
    return i;
  } else
    return Array.from(e);
};
function we(e) {
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
      for (var s = i.length, o = [].concat(_e(i)), n = 0; n < s; n++) {
        var r = o[n], a = ye(r, 2), l = a[0], h = a[1];
        l && l.apply(h, [].slice.call(arguments, 1));
      }
  };
}
var I = typeof window < "u", et = I && navigator.userAgent.toLowerCase(), be = et && /wechatdevtools/.test(et), Te = et && et.indexOf("android") > 0;
function Y() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
function q(e) {
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
function Yt(e, t) {
  return Math.sqrt(e * e + t * t);
}
var St = I && document.createElement("div").style, ht = function() {
  if (!I)
    return !1;
  var e = {
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform",
    standard: "transform"
  };
  for (var t in e)
    if (St[e[t]] !== void 0)
      return t;
  return !1;
}();
function C(e) {
  return ht === !1 ? !1 : ht === "standard" ? e === "transitionEnd" ? "transitionend" : e : ht + e.charAt(0).toUpperCase() + e.substr(1);
}
function ot(e, t, i, s) {
  e.addEventListener(t, i, { passive: !1, capture: !!s });
}
function nt(e, t, i, s) {
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
function gt(e) {
  var t = e.getBoundingClientRect();
  return {
    left: -(t.left + window.pageXOffset),
    top: -(t.top + window.pageYOffset)
  };
}
var Kt = C("transform"), xe = I && C("perspective") in St, vt = I && ("ontouchstart" in window || be), Se = Kt !== !1, Ee = I && C("transition") in St, x = {
  transform: Kt,
  transitionTimingFunction: C("transitionTimingFunction"),
  transitionDuration: C("transitionDuration"),
  transitionDelay: C("transitionDelay"),
  transformOrigin: C("transformOrigin"),
  transitionEnd: C("transitionEnd")
}, Z = 1, ct = 2, W = {
  touchstart: Z,
  touchmove: Z,
  touchend: Z,
  mousedown: ct,
  mousemove: ct,
  mouseup: ct
};
function N(e) {
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
function Pe(e, t) {
  var i = document.createEvent("Event");
  i.initEvent(t, !0, !0), i.pageX = e.pageX, i.pageY = e.pageY, e.target.dispatchEvent(i);
}
function Gt(e) {
  var t = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "click", i = void 0;
  e.type === "mouseup" || e.type === "mousecancel" ? i = e : (e.type === "touchend" || e.type === "touchcancel") && (i = e.changedTouches[0]);
  var s = {};
  i && (s.screenX = i.screenX || 0, s.screenY = i.screenY || 0, s.clientX = i.clientX || 0, s.clientY = i.clientY || 0);
  var o = void 0, n = !0, r = !0;
  if (typeof MouseEvent < "u")
    try {
      o = new MouseEvent(t, q({
        bubbles: n,
        cancelable: r
      }, s));
    } catch {
      a();
    }
  else
    a();
  function a() {
    o = document.createEvent("Event"), o.initEvent(t, n, r), q(o, s);
  }
  o.forwardedTouchEvent = !0, o._constructed = !0, e.target.dispatchEvent(o);
}
function De(e) {
  Gt(e, "dblclick");
}
function Me(e, t) {
  t.firstChild ? Ye(e, t.firstChild) : t.appendChild(e);
}
function Ye(e, t) {
  t.parentNode.insertBefore(e, t);
}
function Xt(e, t) {
  e.removeChild(t);
}
var Xe = {
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
  disableMouse: vt,
  disableTouch: !vt,
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
function Ce(e) {
  e.prototype._init = function(t, i) {
    this._handleOptions(i), this._events = {}, this.x = 0, this.y = 0, this.directionX = 0, this.directionY = 0, this.setScale(1), this._addDOMEvents(), this._initExtFeatures(), this._watchTransition(), this.options.observeDOM && this._initDOMObserver(), this.options.autoBlur && this._handleAutoBlur(), this.refresh(), this.options.snap || this.scrollTo(this.options.startX, this.options.startY), this.enable();
  }, e.prototype.setScale = function(t) {
    this.lastScale = G(this.scale) ? t : this.scale, this.scale = t;
  }, e.prototype._handleOptions = function(t) {
    this.options = q({}, Xe, t), this.translateZ = this.options.HWCompositing && xe ? " translateZ(0)" : "", this.options.useTransition = this.options.useTransition && Ee, this.options.useTransform = this.options.useTransform && Se, this.options.preventDefault = !this.options.eventPassthrough && this.options.preventDefault, this.options.scrollX = this.options.eventPassthrough === "horizontal" ? !1 : this.options.scrollX, this.options.scrollY = this.options.eventPassthrough === "vertical" ? !1 : this.options.scrollY, this.options.freeScroll = this.options.freeScroll && !this.options.eventPassthrough, this.options.directionLockThreshold = this.options.eventPassthrough ? 0 : this.options.directionLockThreshold, this.options.tap === !0 && (this.options.tap = "tap");
  }, e.prototype._addDOMEvents = function() {
    var t = ot;
    this._handleDOMEvents(t);
  }, e.prototype._removeDOMEvents = function() {
    var t = nt;
    this._handleDOMEvents(t);
  }, e.prototype._handleDOMEvents = function(t) {
    var i = this.options.bindToWrapper ? this.wrapper : window;
    t(window, "orientationchange", this), t(window, "resize", this), this.options.click && t(this.wrapper, "click", this, !0), this.options.disableMouse || (t(this.wrapper, "mousedown", this), t(i, "mousemove", this), t(i, "mousecancel", this), t(i, "mouseup", this)), vt && !this.options.disableTouch && (t(this.wrapper, "touchstart", this), t(i, "touchmove", this), t(i, "touchcancel", this), t(i, "touchend", this)), t(this.scroller, x.transitionEnd, this);
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
    var t = N(this.scroller), i = t.width, s = t.height;
    function o() {
      if (!this.destroyed) {
        t = N(this.scroller);
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
        this.enabled && !t._constructed && (B(t.target, this.options.preventDefaultException) || (t.preventDefault(), t.stopPropagation()));
        break;
      case "wheel":
      case "DOMMouseScroll":
      case "mousewheel":
        this._onMouseWheel(t);
        break;
    }
  }, e.prototype.refresh = function() {
    var t = window.getComputedStyle(this.wrapper, null).position === "static", i = N(this.wrapper);
    this.wrapperWidth = i.width, this.wrapperHeight = i.height;
    var s = N(this.scroller);
    this.scrollerWidth = Math.round(s.width * this.scale), this.scrollerHeight = Math.round(s.height * this.scale), this.relativeX = s.left, this.relativeY = s.top, t && (this.relativeX -= i.left, this.relativeY -= i.top), this.minScrollX = 0, this.minScrollY = 0;
    var o = this.options.wheel;
    o ? (this.items = this.scroller.children, this.options.itemHeight = this.itemHeight = this.items.length ? this.scrollerHeight / this.items.length : 0, this.selectedIndex === void 0 && (this.selectedIndex = o.selectedIndex || 0), this.options.startY = -this.selectedIndex * this.itemHeight, this.maxScrollX = 0, this.maxScrollY = -this.itemHeight * (this.items.length - 1)) : (this.maxScrollX = this.wrapperWidth - this.scrollerWidth, this.options.infinity || (this.maxScrollY = this.wrapperHeight - this.scrollerHeight), this.maxScrollX < 0 ? (this.maxScrollX -= this.relativeX, this.minScrollX = -this.relativeX) : this.scale > 1 && (this.maxScrollX = this.maxScrollX / 2 - this.relativeX, this.minScrollX = this.maxScrollX), this.maxScrollY < 0 ? (this.maxScrollY -= this.relativeY, this.minScrollY = -this.relativeY) : this.scale > 1 && (this.maxScrollY = this.maxScrollY / 2 - this.relativeY, this.minScrollY = this.maxScrollY)), this.hasHorizontalScroll = this.options.scrollX && this.maxScrollX < this.minScrollX, this.hasVerticalScroll = this.options.scrollY && this.maxScrollY < this.minScrollY, this.hasHorizontalScroll || (this.maxScrollX = this.minScrollX, this.scrollerWidth = this.wrapperWidth), this.hasVerticalScroll || (this.maxScrollY = this.minScrollY, this.scrollerHeight = this.wrapperHeight), this.endTime = 0, this.directionX = 0, this.directionY = 0, this.wrapperOffset = qt(this.wrapper), this.trigger("refresh"), !this.scaled && this.resetPosition();
  }, e.prototype.enable = function() {
    this.enabled = !0;
  }, e.prototype.disable = function() {
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
function Ct(e, t, i, s, o, n, r) {
  var a = e - t, l = Math.abs(a) / i, h = r.deceleration, u = r.itemHeight, p = r.swipeBounceTime, d = r.wheel, f = r.swipeTime, c = f, m = d ? 4 : 15, b = e + l / h * (a < 0 ? -1 : 1);
  return d && u && (b = Math.round(b / u) * u), b < s ? (b = n ? Math.max(s - n / 4, s - n / m * l) : s, c = p) : b > o && (b = n ? Math.min(o + n / 4, o + n / m * l) : o, c = p), {
    destination: Math.round(b),
    duration: c
  };
}
var ke = 100 / 60;
function Zt() {
}
var ut = function() {
  return I ? window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || window.oRequestAnimationFrame || // if all else fails, use setTimeout
  function(e) {
    return window.setTimeout(e, (e.interval || ke) / 2);
  } : Zt;
}(), $ = function() {
  return I ? window.cancelAnimationFrame || window.webkitCancelAnimationFrame || window.mozCancelAnimationFrame || window.oCancelAnimationFrame || function(e) {
    window.clearTimeout(e);
  } : Zt;
}(), z = 1, J = -1, pt = 1, ft = -1, kt = 1, F = 3;
function it(e) {
  console.error("[BScroll warn]: " + e);
}
function Q(e, t) {
  if (!e)
    throw new Error("[BScroll] " + t);
}
function He(e) {
  e.prototype._start = function(t) {
    var i = W[t.type];
    if (!(i !== Z && t.button !== 0) && !(!this.enabled || this.destroyed || this.initiated && this.initiated !== i)) {
      this.initiated = i, this.options.preventDefault && !B(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.moved = !1, this.distX = 0, this.distY = 0, this.directionX = 0, this.directionY = 0, this.movingDirectionX = 0, this.movingDirectionY = 0, this.directionLocked = 0, this._transitionTime(), this.startTime = Y(), this.options.wheel && (this.target = t.target), this.stop();
      var s = t.touches ? t.touches[0] : t;
      this.startX = this.x, this.startY = this.y, this.absStartX = this.x, this.absStartY = this.y, this.pointX = s.pageX, this.pointY = s.pageY, this.trigger("beforeScrollStart");
    }
  }, e.prototype._move = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches ? t.touches[0] : t, s = i.pageX - this.pointX, o = i.pageY - this.pointY;
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX += s, this.distY += o;
      var n = Math.abs(this.distX), r = Math.abs(this.distY), a = Y();
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
        s = this.hasHorizontalScroll ? s : 0, o = this.hasVerticalScroll ? o : 0, this.movingDirectionX = s > 0 ? ft : s < 0 ? pt : 0, this.movingDirectionY = o > 0 ? J : o < 0 ? z : 0;
        var l = this.x + s, h = this.y + o, u = !1, p = !1, d = !1, f = !1, c = this.options.bounce;
        c !== !1 && (u = c.top === void 0 ? !0 : c.top, p = c.bottom === void 0 ? !0 : c.bottom, d = c.left === void 0 ? !0 : c.left, f = c.right === void 0 ? !0 : c.right), (l > this.minScrollX || l < this.maxScrollX) && (l > this.minScrollX && d || l < this.maxScrollX && f ? l = this.x + s / 3 : l = l > this.minScrollX ? this.minScrollX : this.maxScrollX), (h > this.minScrollY || h < this.maxScrollY) && (h > this.minScrollY && u || h < this.maxScrollY && p ? h = this.y + o / 3 : h = h > this.minScrollY ? this.minScrollY : this.maxScrollY), this.moved || (this.moved = !0, this.trigger("scrollStart")), this._translate(l, h), a - this.startTime > this.options.momentumLimitTime && (this.startTime = a, this.startX = this.x, this.startY = this.y, this.options.probeType === kt && this.trigger("scroll", {
          x: this.x,
          y: this.y
        })), this.options.probeType > kt && this.trigger("scroll", {
          x: this.x,
          y: this.y
        });
        var m = document.documentElement.scrollLeft || window.pageXOffset || document.body.scrollLeft, b = document.documentElement.scrollTop || window.pageYOffset || document.body.scrollTop, M = this.pointX - m, E = this.pointY - b;
        (M > document.documentElement.clientWidth - this.options.momentumLimitDistance || M < this.options.momentumLimitDistance || E < this.options.momentumLimitDistance || E > document.documentElement.clientHeight - this.options.momentumLimitDistance) && this._end(t);
      }
    }
  }, e.prototype._end = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.initiated = !1, this.options.preventDefault && !B(t.target, this.options.preventDefaultException) && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.trigger("touchEnd", {
        x: this.x,
        y: this.y
      }), this.isInTransition = !1;
      var i = Math.round(this.x), s = Math.round(this.y), o = i - this.absStartX, n = s - this.absStartY;
      if (this.directionX = o > 0 ? ft : o < 0 ? pt : 0, this.directionY = n > 0 ? J : n < 0 ? z : 0, !(this.options.pullDownRefresh && this._checkPullDown())) {
        if (this._checkClick(t)) {
          this.trigger("scrollCancel");
          return;
        }
        if (!this.resetPosition(this.options.bounceTime, T.bounce)) {
          this._translate(i, s), this.endTime = Y();
          var r = this.endTime - this.startTime, a = Math.abs(i - this.startX), l = Math.abs(s - this.startY);
          if (this._events.flick && r < this.options.flickLimitTime && a < this.options.flickLimitDistance && l < this.options.flickLimitDistance) {
            this.trigger("flick");
            return;
          }
          var h = 0;
          if (this.options.momentum && r < this.options.momentumLimitTime && (l > this.options.momentumLimitDistance || a > this.options.momentumLimitDistance)) {
            var u = !1, p = !1, d = !1, f = !1, c = this.options.bounce;
            c !== !1 && (u = c.top === void 0 ? !0 : c.top, p = c.bottom === void 0 ? !0 : c.bottom, d = c.left === void 0 ? !0 : c.left, f = c.right === void 0 ? !0 : c.right);
            var m = this.directionX === ft && d || this.directionX === pt && f ? this.wrapperWidth : 0, b = this.directionY === J && u || this.directionY === z && p ? this.wrapperHeight : 0, M = this.hasHorizontalScroll ? Ct(this.x, this.startX, r, this.maxScrollX, this.minScrollX, m, this.options) : { destination: i, duration: 0 }, E = this.hasVerticalScroll ? Ct(this.y, this.startY, r, this.maxScrollY, this.minScrollY, b, this.options) : { destination: s, duration: 0 };
            i = M.destination, s = E.destination, h = Math.max(M.duration, E.duration), this.isInTransition = !0;
          } else
            this.options.wheel && (s = Math.round(s / this.itemHeight) * this.itemHeight, h = this.options.wheel.adjustTime || 400);
          var rt = T.swipe;
          if (this.options.snap) {
            var L = this._nearestSnap(i, s);
            this.currentPage = L, h = this.options.snapSpeed || Math.max(Math.max(Math.min(Math.abs(i - L.x), 1e3), Math.min(Math.abs(s - L.y), 1e3)), 300), i = L.x, s = L.y, this.directionX = 0, this.directionY = 0, rt = this.options.snap.easing || T.bounce;
          }
          if (i !== this.x || s !== this.y) {
            (i > this.minScrollX || i < this.maxScrollX || s > this.minScrollY || s < this.maxScrollY) && (rt = T.swipeBounce), this.scrollTo(i, s, h, rt);
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
          var s = Math.abs(Math.round(this.y / this.itemHeight)), o = Math.round((this.pointY + gt(this.wrapper).top - this.wrapperHeight / 2) / this.itemHeight);
          this.target = this.items[s + o];
        }
        return this.scrollToElement(this.target, this.options.wheel.adjustTime || 400, !0, !0, T.swipe), !0;
      } else {
        if (!i) {
          var n = this.options.dblclick, r = !1;
          if (n && this.lastClickTime) {
            var a = n.delay, l = a === void 0 ? 300 : a;
            Y() - this.lastClickTime < l && (r = !0, De(t));
          }
          return this.options.tap && Pe(t, this.options.tap), this.options.click && !B(t.target, this.options.preventDefaultException) && Gt(t), this.lastClickTime = r ? null : Y(), !0;
        }
        return !1;
      }
    return !1;
  }, e.prototype._resize = function() {
    var t = this;
    this.enabled && (Te && (this.wrapper.scrollTop = 0), clearTimeout(this.resizeTimeout), this.resizeTimeout = setTimeout(function() {
      t.refresh();
    }, this.options.resizePolling));
  }, e.prototype._startProbe = function() {
    $(this.probeTimer), this.probeTimer = ut(i);
    var t = this;
    function i() {
      var s = t.getComputedPosition();
      if (t.trigger("scroll", s), !t.isInTransition) {
        t.trigger("scrollEnd", s);
        return;
      }
      t.probeTimer = ut(i);
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
      var i = !this.pulling || this.movingDirectionY === z;
      i && !this.resetPosition(this.options.bounceTime, T.bounce) && (this.isInTransition = !1, this.options.probeType !== F && this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }));
    }
  }, e.prototype._translate = function(t, i, s) {
    if (Q(!G(t) && !G(i), "Translate x or y is null or undefined."), G(s) && (s = this.scale), this.options.useTransform ? this.scrollerStyle[x.transform] = "translate(" + t + "px," + i + "px) scale(" + s + ")" + this.translateZ : (t = Math.round(t), i = Math.round(i), this.scrollerStyle.left = t + "px", this.scrollerStyle.top = i + "px"), this.options.wheel)
      for (var o = this.options.wheel.rotate, n = o === void 0 ? 25 : o, r = 0; r < this.items.length; r++) {
        var a = n * (i / this.itemHeight + r);
        this.items[r].style[x.transform] = "rotateX(" + a + "deg)";
      }
    if (this.x = t, this.y = i, this.setScale(s), this.indicators)
      for (var l = 0; l < this.indicators.length; l++)
        this.indicators[l].updatePosition();
  }, e.prototype._animate = function(t, i, s, o) {
    var n = this, r = this.x, a = this.y, l = this.lastScale, h = this.scale, u = Y(), p = u + s;
    function d() {
      var f = Y();
      if (f >= p) {
        n.isAnimating = !1, n._translate(t, i, h), n.trigger("scroll", {
          x: n.x,
          y: n.y
        }), !n.pulling && !n.resetPosition(n.options.bounceTime) && n.trigger("scrollEnd", {
          x: n.x,
          y: n.y
        });
        return;
      }
      f = (f - u) / s;
      var c = o(f), m = (t - r) * c + r, b = (i - a) * c + a, M = (h - l) * c + l;
      n._translate(m, b, M), n.isAnimating && (n.animateTimer = ut(d)), n.options.probeType === F && n.trigger("scroll", {
        x: n.x,
        y: n.y
      });
    }
    this.isAnimating = !0, $(this.animateTimer), d();
  }, e.prototype.scrollBy = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : T.bounce;
    t = this.x + t, i = this.y + i, this.scrollTo(t, i, s, o);
  }, e.prototype.scrollTo = function(t, i) {
    var s = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : 0, o = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : T.bounce;
    this.isInTransition = this.options.useTransition && s > 0 && (t !== this.x || i !== this.y), !s || this.options.useTransition ? (this._transitionTimingFunction(o.style), this._transitionTime(s), this._translate(t, i), s && this.options.probeType === F && this._startProbe(), !s && (t !== this.x || i !== this.y) && (this.trigger("scroll", {
      x: t,
      y: i
    }), this._reflow = document.body.offsetHeight, this.resetPosition(this.options.bounceTime, T.bounce) || this.trigger("scrollEnd", {
      x: t,
      y: i
    })), this.options.wheel && (i > this.minScrollY ? this.selectedIndex = 0 : i < this.maxScrollY ? this.selectedIndex = this.items.length - 1 : this.selectedIndex = Math.round(Math.abs(i / this.itemHeight)))) : this._animate(t, i, s, o.fn);
  }, e.prototype.scrollToElement = function(t, i, s, o, n) {
    if (t && (t = t.nodeType ? t : this.scroller.querySelector(t), !(this.options.wheel && !t.classList.contains(this.options.wheel.wheelItemClass)))) {
      var r = qt(t);
      r.left -= this.wrapperOffset.left, r.top -= this.wrapperOffset.top, s === !0 && (s = Math.round(t.offsetWidth / 2 - this.wrapper.offsetWidth / 2)), o === !0 && (o = Math.round(t.offsetHeight / 2 - this.wrapper.offsetHeight / 2)), r.left -= s || 0, r.top -= o || 0, r.left = r.left > this.minScrollX ? this.minScrollX : r.left < this.maxScrollX ? this.maxScrollX : r.left, r.top = r.top > this.minScrollY ? this.minScrollY : r.top < this.maxScrollY ? this.maxScrollY : r.top, this.options.wheel && (r.top = Math.round(r.top / this.itemHeight) * this.itemHeight), this.scrollTo(r.left, r.top, i, n);
    }
  }, e.prototype.resetPosition = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0, i = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : T.bounce, s = this.x, o = Math.round(s);
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
      this.isInTransition = !1, $(this.probeTimer);
      var t = this.getComputedPosition();
      this._translate(t.x, t.y), this.options.wheel ? this.target = this.items[Math.round(-t.y / this.itemHeight)] : this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0;
    } else
      !this.options.useTransition && this.isAnimating && (this.isAnimating = !1, $(this.animateTimer), this.trigger("scrollEnd", {
        x: this.x,
        y: this.y
      }), this.stopFromTransition = !0);
  }, e.prototype.destroy = function() {
    this.destroyed = !0, this.trigger("destroy"), this.options.useTransition ? $(this.probeTimer) : $(this.animateTimer), this._removeDOMEvents(), this._events = {};
  };
}
function Ie(e) {
  e.prototype._initSnap = function() {
    var t = this;
    this.currentPage = {};
    var i = this.options.snap;
    if (i.loop) {
      var s = this.scroller.children;
      s.length > 1 ? (Me(s[s.length - 1].cloneNode(!0), this.scroller), this.scroller.appendChild(s[1].cloneNode(!0))) : i.loop = !1;
    }
    var o = i.el;
    typeof o == "string" && (o = this.scroller.querySelectorAll(o)), this.on("refresh", function() {
      if (t.pages = [], !(!t.wrapperWidth || !t.wrapperHeight || !t.scrollerWidth || !t.scrollerHeight)) {
        var n = i.stepX || t.wrapperWidth, r = i.stepY || t.wrapperHeight, a = 0, l = void 0, h = void 0, u = void 0, p = 0, d = void 0, f = 0, c = void 0, m = void 0;
        if (o)
          for (d = o.length, c = -1; p < d; p++)
            m = N(o[p]), (p === 0 || m.left <= N(o[p - 1]).left) && (f = 0, c++), t.pages[f] || (t.pages[f] = []), a = Math.max(-m.left, t.maxScrollX), l = Math.max(-m.top, t.maxScrollY), h = a - Math.round(m.width / 2), u = l - Math.round(m.height / 2), t.pages[f][c] = {
              x: a,
              y: l,
              width: m.width,
              height: m.height,
              cx: h,
              cy: u
            }, a > t.maxScrollX && f++;
        else
          for (h = Math.round(n / 2), u = Math.round(r / 2); a > -t.scrollerWidth; ) {
            for (t.pages[p] = [], d = 0, l = 0; l > -t.scrollerHeight; )
              t.pages[p][d] = {
                x: Math.max(a, t.maxScrollX),
                y: Math.max(l, t.maxScrollY),
                width: n,
                height: r,
                cx: a - h,
                cy: l - u
              }, l -= r, d++;
            a -= n, p++;
          }
        t._checkSnapLoop();
        var b = i._loopX ? 1 : 0, M = i._loopY ? 1 : 0;
        t._goToPage(t.currentPage.pageX || b, t.currentPage.pageY || M, 0);
        var E = i.threshold;
        E % 1 === 0 ? (t.snapThresholdX = E, t.snapThresholdY = E) : (t.snapThresholdX = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].width * E), t.snapThresholdY = Math.round(t.pages[t.currentPage.pageX][t.currentPage.pageY].height * E));
      }
    }), this.on("scrollEnd", function() {
      i.loop && (i._loopX ? (t.currentPage.pageX === 0 && t._goToPage(t.pages.length - 2, t.currentPage.pageY, 0), t.currentPage.pageX === t.pages.length - 1 && t._goToPage(1, t.currentPage.pageY, 0)) : (t.currentPage.pageY === 0 && t._goToPage(t.currentPage.pageX, t.pages[0].length - 2, 0), t.currentPage.pageY === t.pages[0].length - 1 && t._goToPage(t.currentPage.pageX, 1, 0)));
    }), i.listenFlick !== !1 && this.on("flick", function() {
      var n = i.speed || Math.max(Math.max(Math.min(Math.abs(t.x - t.startX), 1e3), Math.min(Math.abs(t.y - t.startY), 1e3)), 300);
      t._goToPage(t.currentPage.pageX + t.directionX, t.currentPage.pageY + t.directionY, n);
    }), this.on("destroy", function() {
      if (i.loop) {
        var n = t.scroller.children;
        n.length > 2 && (Xt(t.scroller, n[n.length - 1]), Xt(t.scroller, n[0]));
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
    if (!(!n || !this.pages || !this.pages.length) && (o = o || n.easing || T.bounce, t >= this.pages.length ? t = this.pages.length - 1 : t < 0 && (t = 0), !!this.pages[t])) {
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
      return t._loopX ? i = q({}, this.currentPage, {
        pageX: this.currentPage.pageX - 1
      }) : i = q({}, this.currentPage, {
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
var R = 8;
function Ne(e) {
  e.prototype._initScrollbar = function() {
    var t = this, i = this.options.scrollbar, s = i.fade, o = s === void 0 ? !0 : s, n = i.interactive, r = n === void 0 ? !1 : n;
    this.indicators = [];
    var a = void 0;
    this.options.scrollX && (a = {
      el: Ht("horizontal"),
      direction: "horizontal",
      fade: o,
      interactive: r
    }, this._insertScrollBar(a.el), this.indicators.push(new v(this, a))), this.options.scrollY && (a = {
      el: Ht("vertical"),
      direction: "vertical",
      fade: o,
      interactive: r
    }, this._insertScrollBar(a.el), this.indicators.push(new v(this, a))), this.on("refresh", function() {
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
function Ht(e) {
  var t = document.createElement("div"), i = document.createElement("div");
  return t.style.cssText = "position:absolute;z-index:9999;pointerEvents:none", i.style.cssText = "box-sizing:border-box;position:absolute;background:rgba(0,0,0,0.5);border:1px solid rgba(255,255,255,0.9);border-radius:3px;", i.className = "bscroll-indicator", e === "horizontal" ? (t.style.cssText += ";height:7px;left:2px;right:2px;bottom:0", i.style.height = "100%", t.className = "bscroll-horizontal-scrollbar") : (t.style.cssText += ";width:7px;bottom:2px;top:2px;right:1px", i.style.width = "100%", t.className = "bscroll-vertical-scrollbar"), t.style.cssText += ";overflow:hidden", t.appendChild(i), t;
}
function v(e, t) {
  this.wrapper = t.el, this.wrapperStyle = this.wrapper.style, this.indicator = this.wrapper.children[0], this.indicatorStyle = this.indicator.style, this.scroller = e, this.direction = t.direction, t.fade ? (this.visible = 0, this.wrapperStyle.opacity = "0") : this.visible = 1, this.sizeRatioX = 1, this.sizeRatioY = 1, this.maxPosX = 0, this.maxPosY = 0, this.x = 0, this.y = 0, t.interactive && this._addDOMEvents();
}
v.prototype.handleEvent = function(e) {
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
v.prototype.refresh = function() {
  this._shouldShow() && (this.transitionTime(), this._calculate(), this.updatePosition());
};
v.prototype.fade = function(e, t) {
  var i = this;
  if (!(t && !this.visible)) {
    var s = e ? 250 : 500;
    e = e ? "1" : "0", this.wrapperStyle[x.transitionDuration] = s + "ms", clearTimeout(this.fadeTimeout), this.fadeTimeout = setTimeout(function() {
      i.wrapperStyle.opacity = e, i.visible = +e;
    }, 0);
  }
};
v.prototype.updatePosition = function() {
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
v.prototype.transitionTime = function() {
  var e = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : 0;
  this.indicatorStyle[x.transitionDuration] = e + "ms";
};
v.prototype.transitionTimingFunction = function(e) {
  this.indicatorStyle[x.transitionTimingFunction] = e;
};
v.prototype.destroy = function() {
  this._removeDOMEvents(), this.wrapper.parentNode.removeChild(this.wrapper);
};
v.prototype._start = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.transitionTime(), this.initiated = !0, this.moved = !1, this.lastPointX = t.pageX, this.lastPointY = t.pageY, this.startTime = Y(), this._handleMoveEvents(ot), this.scroller.trigger("beforeScrollStart");
};
v.prototype._move = function(e) {
  var t = e.touches ? e.touches[0] : e;
  e.preventDefault(), e.stopPropagation(), this.moved || this.scroller.trigger("scrollStart"), this.moved = !0;
  var i = t.pageX - this.lastPointX;
  this.lastPointX = t.pageX;
  var s = t.pageY - this.lastPointY;
  this.lastPointY = t.pageY;
  var o = this.x + i, n = this.y + s;
  this._pos(o, n);
};
v.prototype._end = function(e) {
  if (this.initiated) {
    this.initiated = !1, e.preventDefault(), e.stopPropagation(), this._handleMoveEvents(nt);
    var t = this.scroller.options.snap;
    if (t) {
      var i = t.speed, s = t.easing, o = s === void 0 ? T.bounce : s, n = this.scroller._nearestSnap(this.scroller.x, this.scroller.y), r = i || Math.max(Math.max(Math.min(Math.abs(this.scroller.x - n.x), 1e3), Math.min(Math.abs(this.scroller.y - n.y), 1e3)), 300);
      (this.scroller.x !== n.x || this.scroller.y !== n.y) && (this.scroller.directionX = 0, this.scroller.directionY = 0, this.scroller.currentPage = n, this.scroller.scrollTo(n.x, n.y, r, o));
    }
    this.moved && this.scroller.trigger("scrollEnd", {
      x: this.scroller.x,
      y: this.scroller.y
    });
  }
};
v.prototype._pos = function(e, t) {
  e < 0 ? e = 0 : e > this.maxPosX && (e = this.maxPosX), t < 0 ? t = 0 : t > this.maxPosY && (t = this.maxPosY), e = Math.round(e / this.sizeRatioX), t = Math.round(t / this.sizeRatioY), this.scroller.scrollTo(e, t), this.scroller.trigger("scroll", {
    x: this.scroller.x,
    y: this.scroller.y
  });
};
v.prototype._shouldShow = function() {
  return this.direction === "vertical" && this.scroller.hasVerticalScroll || this.direction === "horizontal" && this.scroller.hasHorizontalScroll ? (this.wrapper.style.display = "", !0) : (this.wrapper.style.display = "none", !1);
};
v.prototype._calculate = function() {
  if (this.direction === "vertical") {
    var e = this.wrapper.clientHeight;
    this.indicatorHeight = Math.max(Math.round(e * e / (this.scroller.scrollerHeight || e || 1)), R), this.indicatorStyle.height = this.indicatorHeight + "px", this.maxPosY = e - this.indicatorHeight, this.sizeRatioY = this.maxPosY / this.scroller.maxScrollY;
  } else {
    var t = this.wrapper.clientWidth;
    this.indicatorWidth = Math.max(Math.round(t * t / (this.scroller.scrollerWidth || t || 1)), R), this.indicatorStyle.width = this.indicatorWidth + "px", this.maxPosX = t - this.indicatorWidth, this.sizeRatioX = this.maxPosX / this.scroller.maxScrollX;
  }
};
v.prototype._addDOMEvents = function() {
  var e = ot;
  this._handleDOMEvents(e);
};
v.prototype._removeDOMEvents = function() {
  var e = nt;
  this._handleDOMEvents(e), this._handleMoveEvents(e);
};
v.prototype._handleMoveEvents = function(e) {
  this.scroller.options.disableTouch || e(window, "touchmove", this), this.scroller.options.disableMouse || e(window, "mousemove", this);
};
v.prototype._handleDOMEvents = function(e) {
  this.scroller.options.disableTouch || (e(this.indicator, "touchstart", this), e(window, "touchend", this)), this.scroller.options.disableMouse || (e(this.indicator, "mousedown", this), e(window, "mouseup", this));
};
function Re(e) {
  e.prototype._initPullDown = function() {
    this.options.probeType = F;
  }, e.prototype._checkPullDown = function() {
    var t = this.options.pullDownRefresh, i = t.threshold, s = i === void 0 ? 90 : i, o = t.stop, n = o === void 0 ? 40 : o;
    return this.directionY !== J || this.y < s ? !1 : (this.pulling || (this.pulling = !0, this.trigger("pullingDown")), this.scrollTo(this.x, n, this.options.bounceTime, T.bounce), this.pulling);
  }, e.prototype.finishPullDown = function() {
    this.pulling = !1, this.resetPosition(this.options.bounceTime, T.bounce);
  }, e.prototype.openPullDown = function() {
    var t = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : !0;
    this.options.pullDownRefresh = t, this._initPullDown();
  }, e.prototype.closePullDown = function() {
    this.options.pullDownRefresh = !1;
  };
}
function Le(e) {
  e.prototype._initPullUp = function() {
    this.options.probeType = F, this.pullupWatching = !1, this._watchPullUp();
  }, e.prototype._watchPullUp = function() {
    this.pullupWatching || (this.pullupWatching = !0, this.on("scroll", this._checkToEnd));
  }, e.prototype._checkToEnd = function(t) {
    var i = this, s = this.options.pullUpLoad.threshold, o = s === void 0 ? 0 : s;
    this.movingDirectionY === z && t.y <= this.maxScrollY + o && (this.once("scrollEnd", function() {
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
function Oe(e) {
  e.prototype._initMouseWheel = function() {
    var t = this;
    this._handleMouseWheelEvent(ot), this.on("destroy", function() {
      clearTimeout(t.mouseWheelTimer), clearTimeout(t.mouseWheelEndTimer), t._handleMouseWheelEvent(nt);
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
      var d = a ? -1 : 1;
      u *= d, p *= d, this.hasVerticalScroll || (u = p, p = 0);
      var f = void 0, c = void 0;
      if (this.options.snap) {
        f = this.currentPage.pageX, c = this.currentPage.pageY, u > 0 ? f-- : u < 0 && f++, p > 0 ? c-- : p < 0 && c++, this._goToPage(f, c);
        return;
      }
      f = this.x + Math.round(this.hasHorizontalScroll ? u : 0), c = this.y + Math.round(this.hasVerticalScroll ? p : 0), this.movingDirectionX = this.directionX = u > 0 ? -1 : u < 0 ? 1 : 0, this.movingDirectionY = this.directionY = p > 0 ? -1 : p < 0 ? 1 : 0, f > this.minScrollX ? f = this.minScrollX : f < this.maxScrollX && (f = this.maxScrollX), c > this.minScrollY ? c = this.minScrollY : c < this.maxScrollY && (c = this.maxScrollY);
      var m = this.y === c;
      this.scrollTo(f, c, h, T.swipe), this.trigger("scroll", {
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
function Ue(e) {
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
    var o = gt(this.wrapper), n = o.left, r = o.top, a = i + n - this.x, l = s + r - this.y;
    this._zoomTo(t, a, l);
  }, e.prototype._zoomStart = function(t) {
    var i = t.touches[0], s = t.touches[1], o = Math.abs(i.pageX - s.pageX), n = Math.abs(i.pageY - s.pageY);
    this.startDistance = Yt(o, n), this.startScale = this.scale;
    var r = gt(this.wrapper), a = r.left, l = r.top;
    this.originX = Math.abs(i.pageX + s.pageX) / 2 + a - this.x, this.originY = Math.abs(i.pageY + s.pageY) / 2 + l - this.y, this.trigger("zoomStart");
  }, e.prototype._zoom = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation();
      var i = t.touches[0], s = t.touches[1], o = Math.abs(i.pageX - s.pageX), n = Math.abs(i.pageY - s.pageY), r = Yt(o, n), a = r / this.startDistance * this.startScale;
      this.scaled = !0;
      var l = this.options.zoom, h = l.min, u = h === void 0 ? 1 : h, p = l.max, d = p === void 0 ? 4 : p;
      a < u ? a = 0.5 * u * Math.pow(2, a / u) : a > d && (a = 2 * d * Math.pow(0.5, d / a));
      var f = a / this.startScale, c = this.startX - (this.originX - this.relativeX) * (f - 1), m = this.startY - (this.originY - this.relativeY) * (f - 1);
      this.setScale(a), this.scrollTo(c, m, 0);
    }
  }, e.prototype._zoomEnd = function(t) {
    if (!(!this.enabled || this.destroyed || W[t.type] !== this.initiated)) {
      this.options.preventDefault && t.preventDefault(), this.options.stopPropagation && t.stopPropagation(), this.isInTransition = !1, this.isAnimating = !1, this.initiated = 0;
      var i = this.options.zoom, s = i.min, o = s === void 0 ? 1 : s, n = i.max, r = n === void 0 ? 4 : n, a = this.scale > r ? r : this.scale < o ? o : this.scale;
      this._zoomTo(a, this.originX, this.originY, this.startScale), this.trigger("zoomEnd");
    }
  };
}
var It = 30, $t = 10, K = 200, Bt = 2e3;
function Ae(e) {
  e.prototype._initInfinite = function() {
    this.options.probeType = 3, this.maxScrollY = -Bt, this.infiniteScroller = new w(this, this.options.infinity);
  };
}
function Et(e) {
  if (e && e.classList)
    return e.classList.contains("tombstone");
}
function w(e, t) {
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
w.prototype.onScroll = function() {
  var e = -this.scroller.y, t = e - this.anchorScrollTop;
  e === 0 ? this.anchorItem = {
    index: 0,
    offset: 0
  } : this.anchorItem = this._calculateAnchoredItem(this.anchorItem, t), this.anchorScrollTop = e;
  var i = this._calculateAnchoredItem(this.anchorItem, this.wrapperEl.offsetHeight), s = this.anchorItem.index, o = i.index;
  t < 0 ? (s -= It, o += $t) : (s -= $t, o += It), this.fill(s, o), this.maybeRequestContent();
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
    (!o || Et(o)) && !n && (e || (e = s), o && this.scrollerEl.removeChild(o));
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
    i && (Et(i) ? (this.tombstones.push(i), this.tombstones[this.tombstones.length - 1].style.display = "none") : e.push(i)), this.items[t].node = null;
  }
  return e;
};
w.prototype._createDOMNodes = function(e) {
  for (var t = {}, i = this.firstAttachedItem; i < this.lastAttachedItem; i++) {
    for (; this.items.length <= i; )
      this._addItem();
    var s = this.items[i].node, o = this.items[i].data;
    if (s)
      if (Et(s) && o)
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
    this.items[s].node.style.transform = "translateY(" + (this.anchorScrollTop + o[1]) + "px) scale(" + this.tombstoneWidth / this.items[s].width + ", " + this.tombstoneHeight / this.items[s].height + ")", this.items[s].node.offsetTop, o[0].offsetTop, this.items[s].node.style.transition = "transform " + K + "ms";
  }
  for (var n = this.firstAttachedItem; n < this.lastAttachedItem; n++) {
    var r = e[n];
    if (r) {
      var a = r[0];
      a.style.transition = "transform " + K + "ms, opacity " + K + "ms", a.style.transform = "translateY(" + t + "px) scale(" + this.items[n].width / this.tombstoneWidth + ", " + this.items[n].height / this.tombstoneHeight + ")", a.style.opacity = 0;
    }
    t !== this.items[n].top && (r || (this.items[n].node.style.transition = ""), this.items[n].node.style.transform = "translateY(" + t + "px)"), this.items[n].top = t, t += this.items[n].height || this.tombstoneHeight;
  }
  this.scroller.maxScrollY = -(t - this.wrapperEl.offsetHeight + (this.hasMore ? Bt : 0)), setTimeout(function() {
    for (var l in e) {
      var h = e[l];
      h[0].style.display = "none", i.tombstones.push(h[0]);
    }
  }, K);
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
Ce(S);
He(S);
we(S);
Ie(S);
$e(S);
Ne(S);
Re(S);
Le(S);
Oe(S);
Ue(S);
Ae(S);
S.Version = "1.12.6";
const ze = "cube-loading", We = {
  name: ze,
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
}, Fe = { class: "cube-loading" }, je = { class: "cube-loading-spinner" };
function Ve(e, t, i, s, o, n) {
  return y(), _("div", Fe, [
    g("span", {
      class: "cube-loading-spinners",
      style: wt(n.style)
    }, [
      (y(!0), _(bt, null, Tt(o.balde, (r) => (y(), _("i", je))), 256))
    ], 4)
  ]);
}
const qe = /* @__PURE__ */ H(We, [["render", Ve]]), Ke = {
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
}, Ge = ["width", "height"];
function Ze(e, t, i, s, o, n) {
  return y(), _("canvas", {
    ref: "bubble",
    width: o.width,
    height: o.height,
    style: wt(n.style)
  }, null, 12, Ge);
}
const Be = /* @__PURE__ */ H(Ke, [["render", Ze]]), Je = function(e, t) {
}, Qe = /-(\w)/g;
function ti(e) {
  return e = String(e), e.replace(Qe, function(t, i) {
    return i ? i.toUpperCase() : "";
  });
}
function ei(e) {
  return e = String(e), e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
const ii = {
  methods: {
    _checkDeprecated() {
      const e = this.$options.props, t = this.$options.name;
      Object.entries(e).forEach(([i, s]) => {
        const o = s.deprecated;
        o && this[i] !== void 0 && Je(`The property "${ei(i)}" is deprecated, please use the recommended property "${o.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${t.substr(5)}#cube-Propsconfiguration-anchor`);
      });
    }
  },
  mounted() {
    this._checkDeprecated();
  }
};
function si(e) {
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
function oi() {
  let e = !0;
  if (ie) {
    const t = si(V);
    if (!t)
      return e;
    t.major >= 13 && t.minor >= 3 && (e = !1);
  }
  return e;
}
const ni = oi();
const ri = "cube-scroll", li = "horizontal", Nt = "vertical", ai = "Refresh success", hi = 600, Rt = "click", Lt = "pulling-down", Ot = "pulling-up", tt = "scroll", yt = "before-scroll-start", Jt = "scroll-end", Ut = "none", ci = "native", ui = [tt, yt, Jt], pi = {
  observeDOM: !0,
  click: !0,
  probeType: 1,
  scrollbar: !1,
  pullDownRefresh: !1,
  pullUpLoad: !1
}, fi = {
  name: ri,
  mixins: [xt, ii],
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
  emits: [Rt, Lt, Ot, tt, yt, Jt],
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
        return e.every((t) => ui.indexOf(t) !== -1);
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
      default: Nt
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    nestMode: {
      type: String,
      default: Ut
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
      return e && e.txt || ai;
    },
    finalScrollEvents() {
      const e = this.scrollEvents.slice();
      return e.length || (this.listenScroll && e.push(tt), this.listenBeforeScroll && e.push(yt)), e;
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
        scrollY: this.direction === Nt,
        scrollX: this.direction === li,
        probeType: this.needListenScroll ? 3 : 1,
        useTransition: ni
      }, t = Object.assign({}, pi, e, this.options);
      this.scroll = new S(this.$refs.wrapper, t), this.parentScroll && this.nestMode !== Ut && this._handleNestScroll(), this._listenScrollEvents(), this.pullDownRefresh && (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler()), this.pullUpLoad && (this._onPullUpLoad(), this._pullUpLoadChangeHandler());
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
      this.$emit(Rt, e);
    },
    async forceUpdate(e = !1, t = !1) {
      this.isPullDownUpdating || (this.pullDownRefresh && this.isPullingDown ? (this.isPullingDown = !1, this.isPullDownUpdating = !0, await this._waitFinishPullDown(), this.isPullDownUpdating = !1, await this._waitResetPullDown(e)) : this.pullUpLoad && this.isPullUpLoad && (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpNoMore = !e || t), e && this.refresh());
    },
    resetPullUpTxt() {
      this.pullUpNoMore = !1;
    },
    _listenScrollEvents() {
      this.finalScrollEvents.forEach((e) => {
        this.scroll.on(ti(e), (...t) => {
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
          if (!e.initiated || e.isInTransition || this.nestMode === ci && !this.touchStartMoment)
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
      (s || i) && (o = A(e).height + 1, i && i.visible && (o -= this.pullUpHeight)), t.style.minHeight = `${o}px`;
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
      this.resetPullDownTimer && clearTimeout(this.resetPullDownTimer), this.beforePullDown = !1, this.isPullingDown = !0, this.$emit(Lt);
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
      this.isPullUpLoad = !0, this.$emit(Ot);
    },
    _waitFinishPullDown(e) {
      const { stopTime: t = hi } = this.pullDownRefresh;
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
      e && (e = e.children[0], this.pullDownHeight = A(e).height, this.beforePullDown = !1, this.isPullingDown = !0, this.$nextTick(() => {
        this.pullDownStop = A(e).height, this.beforePullDown = !0, this.isPullingDown = !1;
      }));
    },
    _getPullUpEleHeight() {
      const t = this.$refs.listWrapper.nextElementSibling;
      if (!t) {
        this.pullUpHeight = 0;
        return;
      }
      this.pullUpHeight = A(t).height;
    }
  },
  components: {
    Loading: qe,
    Bubble: Be
  }
}, di = {
  ref: "wrapper",
  class: "cube-scroll-wrapper"
}, mi = { class: "cube-scroll-content" }, gi = {
  ref: "listWrapper",
  class: "cube-scroll-list-wrapper"
}, vi = { class: "cube-scroll-list" }, yi = ["onClick"], _i = {
  key: 0,
  class: "cube-pullup-wrapper"
}, wi = {
  key: 0,
  class: "before-trigger"
}, bi = {
  key: 1,
  class: "after-trigger"
}, Ti = {
  key: 0,
  class: "cube-pulldown",
  ref: "pulldown"
}, xi = { class: "before-trigger" }, Si = { class: "after-trigger" }, Ei = { class: "loading" }, Pi = { class: "cube-pulldown-loaded" };
function Di(e, t, i, s, o, n) {
  const r = k("loading"), a = k("bubble");
  return y(), _("div", di, [
    g("div", mi, [
      g("div", gi, [
        D(e.$slots, "default", {}, () => [
          g("ul", vi, [
            (y(!0), _(bt, null, Tt(i.data, (l, h) => (y(), _("li", {
              class: "cube-scroll-item border-bottom-1px",
              key: h,
              onClick: (u) => n.clickItem(l)
            }, lt(l), 9, yi))), 128))
          ])
        ])
      ], 512),
      D(e.$slots, "pullup", {
        pullUpLoad: n.pullUpLoad,
        isPullUpLoad: o.isPullUpLoad
      }, () => [
        n.pullUpLoad ? (y(), _("div", _i, [
          o.isPullUpLoad ? (y(), _("div", bi, [
            P(r)
          ])) : (y(), _("div", wi, [
            g("span", null, lt(n.pullUpTxt), 1)
          ]))
        ])) : Pt("", !0)
      ])
    ]),
    n.pullDownRefresh ? (y(), _("div", Ti, [
      D(e.$slots, "pulldown", {
        pullDownRefresh: n.pullDownRefresh,
        pullDownStyle: o.pullDownStyle,
        beforePullDown: o.beforePullDown,
        isPullingDown: o.isPullingDown,
        bubbleY: o.bubbleY
      }, () => [
        g("div", {
          class: "cube-pulldown-wrapper",
          style: wt(o.pullDownStyle)
        }, [
          O(g("div", xi, [
            P(a, {
              y: o.bubbleY,
              class: "bubble"
            }, null, 8, ["y"])
          ], 512), [
            [U, o.beforePullDown]
          ]),
          O(g("div", Si, [
            O(g("div", Ei, [
              P(r)
            ], 512), [
              [U, o.isPullingDown]
            ]),
            O(g("div", Pi, [
              g("span", null, lt(n.refreshTxt), 1)
            ], 512), [
              [U, !o.isPullingDown]
            ])
          ], 512), [
            [U, !o.beforePullDown]
          ])
        ], 4)
      ])
    ], 512)) : Pt("", !0)
  ], 512);
}
const Qt = /* @__PURE__ */ H(fi, [["render", Di]]);
const dt = "horizontal", Mi = "vertical", Yi = "cube-scroll-nav-bar", At = "change", Xi = {
  name: Yi,
  inject: {
    scrollNav: {
      default: null
    }
  },
  mixins: [xt],
  emits: [At],
  props: {
    direction: {
      type: String,
      default: dt,
      validator(e) {
        return e === dt || e === Mi;
      }
    },
    labels: {
      type: Array,
      default() {
        return [];
      }
    },
    txts: {
      type: Array,
      default(e) {
        return e._defaultTxts = !0, e.labels;
      }
    },
    current: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      active: this.current,
      usedTxts: this.txts
    };
  },
  watch: {
    labels(e) {
      this._defaultTxts && (this.usedTxts = e);
    },
    txts(e) {
      this.usedTxts = e;
    },
    current(e) {
      this.active = e;
    },
    active(e) {
      this.$emit(At, e), this._adjust();
    }
  },
  mounted() {
    this.scrollNav && this.scrollNav.setBar(this), this.active && this.$nextTick(() => {
      this._adjust();
    });
  },
  beforeUnmount() {
    this.scrollNav && this.scrollNav.setBar(null);
  },
  methods: {
    clickHandler(e) {
      e !== this.active && (this.active = e, this.scrollNav && this.scrollNav.barChange(e));
    },
    refresh() {
      this.$refs.scroll.refresh(), this._adjust();
    },
    _adjust() {
      this.$nextTick(() => {
        const e = this.direction === dt, t = e ? "clientWidth" : "clientHeight", i = this.active, s = this.$refs.scroll.$el[t], o = this.$refs.items, n = o[t], r = Math.min(0, s - n), a = s / 2, l = o.children;
        let h = 0;
        this.labels.every((p, d) => p === i ? (h += l[d][t] / 2, !1) : (h += l[d][t], !0));
        let u = a - h;
        u = Math.max(r, Math.min(0, u)), this.$refs.scroll.scrollTo(e ? u : 0, e ? 0 : u, 300);
      });
    }
  },
  components: {
    CubeScroll: Qt
  }
}, Ci = {
  class: "cube-scroll-nav-bar-items",
  ref: "items"
}, ki = ["onClick"], Hi = ["innerHTML"];
function Ii(e, t, i, s, o, n) {
  const r = k("cube-scroll");
  return y(), _("div", {
    class: mt(["cube-scroll-nav-bar", "cube-scroll-nav-bar_" + i.direction])
  }, [
    P(r, {
      ref: "scroll",
      nestMode: "none",
      options: e.options,
      direction: i.direction
    }, {
      default: X(() => [
        g("div", Ci, [
          (y(!0), _(bt, null, Tt(o.usedTxts, (a, l) => (y(), _("div", {
            class: mt(["cube-scroll-nav-bar-item", { "cube-scroll-nav-bar-item_active": o.active === i.labels[l] }]),
            key: l,
            onClick: (h) => n.clickHandler(i.labels[l])
          }, [
            D(e.$slots, "default", {
              txt: a,
              index: l,
              active: o.active,
              label: i.labels[l]
            }, () => [
              g("span", { innerHTML: a }, null, 8, Hi)
            ])
          ], 10, ki))), 128))
        ], 512)
      ]),
      _: 3
    }, 8, ["options", "direction"])
  ], 2);
}
const st = /* @__PURE__ */ H(Xi, [["render", Ii]]);
const $i = "horizontal", Ni = "vertical", Ri = "cube-scroll-nav", zt = "change", Wt = "sticky-change", Li = {
  name: Ri,
  provide() {
    return {
      scrollNav: this
    };
  },
  mixins: [xt],
  emits: [zt, Wt],
  props: {
    data: {
      type: Array
    },
    speed: {
      type: Number,
      default: 300
    },
    side: {
      type: Boolean,
      default: !1
    },
    current: {
      type: [String, Number],
      default: ""
    }
  },
  data() {
    return {
      scrollEvents: ["scroll", "scroll-end"],
      scrollY: 0,
      panels: [],
      active: this.current,
      pageStickyOffset: 0
    };
  },
  computed: {
    labels() {
      return this.panels.map((e) => e.label);
    },
    barTxts() {
      return this.panels.map((e) => e.title);
    },
    barDirection() {
      return this.side ? Ni : $i;
    }
  },
  watch: {
    current(e) {
      this.stickyCurrent = e, this.active = e, this.jumpTo(e);
    },
    active(e) {
      this.$emit(zt, e);
    }
  },
  created() {
    this.navBar = null, this.stickyCurrent = this.current;
  },
  mounted() {
    this.$nextTick(() => {
      if (this.side) {
        const e = this.$refs.pageSticky.$refs.fixedEle;
        this.$refs.scroll.$el.appendChild(e);
      }
      this.current || (this.active = this.stickyCurrent = this.labels[0]), this.refresh(), this.jumpTo(this.current);
    });
  },
  methods: {
    scrollTo() {
      this.$refs.scroll && this.$refs.scroll.scrollTo.apply(this.$refs.scroll, arguments);
    },
    refresh() {
      this.navBar && this.navBar.refresh(), this.$refs.sticky.refresh(), this.$refs.pageSticky.refresh(), this.pageStickyOffset = this.side ? 0 : this.$refs.navBarEle.$el.offsetHeight, this.$refs.scroll.refresh();
    },
    setBar(e) {
      this.navBar = e;
    },
    barChange(e) {
      this.active = e, setTimeout(() => {
        this.jumpTo(e);
      });
    },
    jumpTo(e) {
      if (!e)
        return;
      const t = this.getPanel(e);
      if (t) {
        this._jumping = !0;
        const i = this.pageStickyOffset;
        this.$refs.scroll.scrollToElement(t.$el, this.speed, 0, this.side ? i : -i);
      }
    },
    getPanel(e) {
      let t = null;
      return this.panels.some((i) => {
        if (i.label === e)
          return t = i, !0;
      }), t;
    },
    pageStickyChangeHandler(e) {
      e === "" && (e = this.labels[0]), this.stickyCurrent = e, !this._jumping && (this.active = e);
    },
    stickyChangeHandler(e) {
      this.$nextTick(() => {
        this.navBar && this.navBar.refresh();
      }), this.$emit(Wt, e);
    },
    scrollHandler(e) {
      this.scrollY = -e.y, this._jumping || (this.active = this.stickyCurrent);
    },
    scrollEndHandler() {
      this._jumping = !1;
    },
    addPanel(e) {
      this.panels.push(e);
    },
    removePanel(e) {
      const t = this.panels.indexOf(e);
      this.panels.splice(t, 1);
    }
  },
  components: {
    CubeSticky: pe,
    CubeStickyEle: Vt,
    CubeScroll: Qt,
    CubeScrollNavBar: st
  }
}, Oi = { class: "cube-scroll-nav-main" }, Ui = { class: "cube-scroll-nav-panels" }, Ai = /* @__PURE__ */ g("div", null, null, -1);
function zi(e, t, i, s, o, n) {
  const r = k("cube-scroll-nav-bar"), a = k("cube-sticky-ele"), l = k("cube-sticky"), h = k("cube-scroll");
  return y(), _("div", {
    class: mt(["cube-scroll-nav", { "cube-scroll-nav_side": i.side }])
  }, [
    P(l, {
      ref: "sticky",
      pos: o.scrollY,
      onChange: n.stickyChangeHandler
    }, {
      default: X(() => [
        P(h, {
          ref: "scroll",
          "scroll-events": o.scrollEvents,
          options: e.options,
          data: i.data,
          onScroll: n.scrollHandler,
          onScrollEnd: n.scrollEndHandler
        }, {
          default: X(() => [
            D(e.$slots, "prepend"),
            g("div", Oi, [
              P(a, {
                ref: "navBarEle",
                "ele-key": "cube-scroll-nav-bar"
              }, {
                default: X(() => [
                  D(e.$slots, "bar", {
                    txts: n.barTxts,
                    labels: n.labels,
                    current: o.active
                  }, () => [
                    P(r, {
                      direction: n.barDirection,
                      txts: n.barTxts,
                      labels: n.labels,
                      current: o.active
                    }, null, 8, ["direction", "txts", "labels", "current"])
                  ])
                ]),
                _: 3
              }, 512),
              P(l, {
                ref: "pageSticky",
                offset: o.pageStickyOffset,
                pos: o.scrollY,
                onChange: n.pageStickyChangeHandler
              }, ee({
                default: X(() => [
                  g("div", Ui, [
                    D(e.$slots, "default")
                  ])
                ]),
                _: 2
              }, [
                i.side ? void 0 : {
                  name: "fixed",
                  fn: X(() => [
                    Ai
                  ]),
                  key: "0"
                }
              ]), 1032, ["offset", "pos", "onChange"])
            ])
          ]),
          _: 3
        }, 8, ["scroll-events", "options", "data", "onScroll", "onScrollEnd"])
      ]),
      _: 3
    }, 8, ["pos", "onChange"])
  ], 2);
}
const j = /* @__PURE__ */ H(Li, [["render", zi]]), Wi = "cube-scroll-nav-panel", Fi = {
  name: Wi,
  inject: ["scrollNav"],
  props: {
    label: {
      type: [String, Number],
      required: !0
    },
    title: {
      type: [String, Number],
      default(e) {
        return e.label;
      }
    }
  },
  mounted() {
    this.scrollNav.addPanel(this);
  },
  beforeUnmount() {
    this.scrollNav.removePanel(this);
  },
  components: {
    CubeStickyEle: Vt
  }
}, ji = { class: "cube-scroll-nav-panel" }, Vi = ["innerHTML"];
function qi(e, t, i, s, o, n) {
  const r = k("cube-sticky-ele");
  return y(), _("div", ji, [
    P(r, { "ele-key": i.label }, {
      default: X(() => [
        g("h2", {
          class: "cube-scroll-nav-panel-title",
          innerHTML: i.title
        }, null, 8, Vi)
      ]),
      _: 1
    }, 8, ["ele-key"]),
    D(e.$slots, "default")
  ]);
}
const _t = /* @__PURE__ */ H(Fi, [["render", qi]]);
j.install = function(e) {
  e.component(j.name, j), e.component(_t.name, _t), e.component(st.name, st);
};
j.Panel = _t;
j.Bar = st;
export {
  j as default
};
