import "./css.mjs";
import { openBlock as h, createElementBlock as l, renderSlot as M, createElementVNode as c, toDisplayString as v, Fragment as D, renderList as L, normalizeStyle as P, withModifiers as V, resolveComponent as R, createVNode as k, TransitionGroup as F, withCtx as z } from "vue";
const A = typeof window < "u", y = A && navigator.userAgent.toLowerCase();
y && y.indexOf("android") > 0;
function K(t) {
  return {
    top: t.offsetTop,
    left: t.offsetLeft,
    width: t.offsetWidth,
    height: t.offsetHeight
  };
}
let _ = (() => {
  if (!A)
    return !1;
  let t = document.createElement("div").style, e = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let i in e)
    if (t[e[i]] !== void 0)
      return i;
  return !1;
})();
function p(t) {
  return _ === !1 ? !1 : _ === "standard" ? t === "transitionEnd" ? "transitionend" : t : _ + t.charAt(0).toUpperCase() + t.substr(1);
}
const S = "cubic-bezier(0.165, 0.84, 0.44, 1)", W = "cubic-bezier(0.22, 0.61, 0.36, 1)";
function w() {
  return window.performance && window.performance.now ? window.performance.now() + window.performance.timing.navigationStart : +/* @__PURE__ */ new Date();
}
const Y = (t, e) => {
  const i = t.__vccOpts || t;
  for (const [a, o] of e)
    i[a] = o;
  return i;
}, G = "cube-swipe-item", H = "item-click", Z = "btn-click", B = "scroll", j = "active", U = 1, E = -1, x = 0, b = 1, m = 600, g = 300, C = 15, Q = 5, d = p("transform"), X = p("transitionProperty"), I = p("transitionDuration"), $ = p("transitionTimingFunction"), q = {
  name: G,
  inject: ["swipe"],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    },
    btns: {
      type: Array,
      default() {
        return [];
      }
    },
    index: {
      type: Number,
      index: -1
    },
    autoShrink: {
      type: Boolean,
      default: !1
    }
  },
  watch: {
    btns() {
      this.$nextTick(() => {
        this.refresh();
      });
    }
  },
  created() {
    this.x = 0, this.state = x, this.swipe.addItem(this);
  },
  mounted() {
    this.scrollerStyle = this.$refs.swipeItem.style, this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    _initCachedBtns() {
      this.cachedBtns = [];
      const t = this.$refs.btns.length;
      for (let e = 0; e < t; e++)
        this.cachedBtns.push({
          width: K(this.$refs.btns[e]).width
        });
    },
    _handleBtns(t) {
      if (this.btns.length === 0)
        return;
      const e = this.$refs.btns.length;
      let i = 0, a = -this.maxScrollX;
      for (let o = 0; o < e; o++) {
        const n = this.$refs.btns[o];
        let s = (a - i) / a, r, T = s * t - t;
        t < this.maxScrollX ? r = this.cachedBtns[o].width + s * (this.maxScrollX - t) : r = this.cachedBtns[o].width, i += this.cachedBtns[o].width, n.style.width = `${r}px`, n.style[d] = `translate(${T}px)`, n.style[I] = "0ms";
      }
    },
    _isInBtns(t) {
      let e = t, i = !1;
      for (; e && e.className.indexOf("cube-swipe-item") < 0; ) {
        if (e.className.indexOf("cube-swipe-btns") >= 0) {
          i = !0;
          break;
        }
        e = e.parentNode;
      }
      return i;
    },
    _calculateBtnsWidth() {
      let t = 0;
      const e = this.cachedBtns.length;
      for (let i = 0; i < e; i++)
        t += this.cachedBtns[i].width;
      this.maxScrollX = -t;
    },
    _translate(t, e) {
      let i = e ? " translateZ(0)" : "";
      this.scrollerStyle[d] = `translate(${t}px,0)${i}`, this.x = t;
    },
    _transitionProperty(t = "transform") {
      this.scrollerStyle[X] = t;
    },
    _transitionTimingFunction(t) {
      this.scrollerStyle[$] = t;
    },
    _transitionTime(t = 0) {
      this.scrollerStyle[I] = `${t}ms`;
    },
    _getComputedPositionX() {
      let t = window.getComputedStyle(this.$refs.swipeItem, null);
      return t = t[d].split(")")[0].split(", "), +(t[12] || t[4]);
    },
    _translateBtns(t, e, i) {
      if (this.btns.length === 0)
        return;
      const a = this.$refs.btns.length;
      let o = 0, n = 0;
      for (let s = 0; s < a; s++) {
        const r = this.$refs.btns[s];
        this.state === b ? n = o : n = 0, o += this.cachedBtns[s].width, r.style[d] = `translate(${n}px,0) translateZ(0)`, r.style[X] = "all", r.style[$] = e, r.style[I] = `${t}ms`, i && (r.style.width = `${this.cachedBtns[s].width}px`);
      }
    },
    refresh() {
      this.btns.length > 0 && (this._initCachedBtns(), this._calculateBtnsWidth()), this.endTime = 0;
    },
    shrink() {
      this.stop(), this.state = x, this.$nextTick(() => {
        this.scrollTo(0, m, S), this._translateBtns(m, S);
      });
    },
    grow() {
      this.state = b;
      const t = this.x < this.maxScrollX;
      let e = W;
      this.scrollTo(this.maxScrollX, m, e), this._translateBtns(m, e, t);
    },
    scrollTo(t, e, i) {
      this._transitionProperty(), this._transitionTimingFunction(i), this._transitionTime(e), this._translate(t, !0), e && (this.isInTransition = !0);
    },
    genBtnStyl(t) {
      return `background: ${t.color}`;
    },
    clickItem() {
      this.swipe.onItemClick(this.item, this.index), this.$emit(H, this.item, this.index);
    },
    clickBtn(t) {
      this.swipe.onBtnClick(t, this.index), this.$emit(Z, t, this.index), this.autoShrink && this.shrink();
    },
    stop() {
      if (this.isInTransition) {
        this.isInTransition = !1;
        let t = this.state === x ? 0 : this._getComputedPositionX();
        this._translate(t), this.$emit(B, this.x), this._handleBtns();
      }
    },
    onTouchStart(t) {
      this.swipe.onItemActive(this.index), this.$emit(j, this.index), this.stop(), this.moved = !1, this.movingDirectionX = 0;
      const e = t.touches[0];
      this.pointX = e.pageX, this.pointY = e.pageY, this.distX = 0, this.distY = 0, this.startX = this.x, this._transitionTime(), this.startTime = w(), this.state === b && !this._isInBtns(t.target) && (this.shrinkTimer = setTimeout(() => {
        this.shrink();
      }, 300));
    },
    onTouchMove(t) {
      if (this.moved && (clearTimeout(this.shrinkTimer), t.stopPropagation()), this.isInTransition)
        return;
      t.preventDefault();
      const e = t.touches[0];
      let i = e.pageX - this.pointX, a = e.pageY - this.pointY;
      this.pointX = e.pageX, this.pointY = e.pageY, this.distX += i, this.distY += a;
      let o = Math.abs(this.distX), n = Math.abs(this.distY);
      if (o + Q <= n)
        return;
      let s = w();
      if (s - this.endTime > g && o < C)
        return;
      this.movingDirectionX = i > 0 ? E : i < 0 ? U : 0;
      let r = this.x + i;
      r > 0 && (r = 0), r < this.maxScrollX && (r = this.x + i / 3), this.moved || (this.moved = !0), this._translate(r, !0), s - this.startTime > g && (this.startTime = s, this.startX = this.x), this.$emit(B, this.x), this._handleBtns();
    },
    onTouchEnd() {
      if (!this.moved)
        return;
      if (this.movingDirectionX === E) {
        this.shrink();
        return;
      }
      this.endTime = w();
      let t = this.endTime - this.startTime, e = Math.abs(this.x - this.startX);
      t < g && e > C || this.x < this.maxScrollX / 2 ? this.grow() : this.shrink();
    },
    onTransitionEnd() {
      this.isInTransition = !1, this._transitionTime(), this._translate(this.x);
    }
  },
  beforeUnmount() {
    this.swipe.removeItem(this);
  }
}, J = { class: "cube-swipe-btns" }, tt = ["onClick"], et = { class: "text" };
function it(t, e, i, a, o, n) {
  return h(), l("div", {
    ref: "swipeItem",
    onTransitionend: e[1] || (e[1] = (...s) => n.onTransitionEnd && n.onTransitionEnd(...s)),
    onTouchstart: e[2] || (e[2] = (...s) => n.onTouchStart && n.onTouchStart(...s)),
    onTouchmove: e[3] || (e[3] = (...s) => n.onTouchMove && n.onTouchMove(...s)),
    onTouchend: e[4] || (e[4] = (...s) => n.onTouchEnd && n.onTouchEnd(...s)),
    class: "cube-swipe-item"
  }, [
    M(t.$slots, "default", {}, () => [
      c("div", {
        onClick: e[0] || (e[0] = (...s) => n.clickItem && n.clickItem(...s)),
        class: "cube-swipe-item-inner border-bottom-1px"
      }, [
        c("span", null, v(i.item.text), 1)
      ])
    ]),
    c("ul", J, [
      (h(!0), l(D, null, L(i.btns, (s) => (h(), l("li", {
        ref_for: !0,
        ref: "btns",
        class: "cube-swipe-btn",
        style: P(n.genBtnStyl(s)),
        onClick: V((r) => n.clickBtn(s), ["prevent"])
      }, [
        c("span", et, v(s.text), 1)
      ], 12, tt))), 256))
    ])
  ], 544);
}
const f = /* @__PURE__ */ Y(q, [["render", it]]);
const st = "cube-swipe", N = "item-click", O = "btn-click", nt = {
  name: st,
  provide() {
    return {
      swipe: this
    };
  },
  emits: [N, O],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    autoShrink: {
      type: Boolean,
      default: !1
    }
  },
  created() {
    this.activeIndex = -1, this.items = [];
  },
  methods: {
    addItem(t) {
      this.items.push(t);
    },
    removeItem(t) {
      const e = this.items.indexOf(t);
      this.items.splice(e, 1), e <= this.activeIndex && (this.activeIndex -= 1);
    },
    onItemClick(t, e) {
      this.$emit(N, t, e);
    },
    onBtnClick(t, e) {
      const i = this.data[e];
      this.$emit(O, t, e, i);
    },
    onItemActive(t) {
      t !== this.activeIndex && (this.activeIndex !== -1 && this.items[this.activeIndex].shrink(), this.activeIndex = t);
    }
  },
  components: {
    CubeSwipeItem: f
  }
}, rt = { class: "cube-swipe" };
function ot(t, e, i, a, o, n) {
  const s = R("cube-swipe-item");
  return h(), l("div", rt, [
    M(t.$slots, "default", {}, () => [
      k(F, {
        name: "cube-swipe",
        tag: "ul"
      }, {
        default: z(() => [
          (h(!0), l(D, null, L(i.data, (r, T) => (h(), l("li", {
            key: r.item.value
          }, [
            k(s, {
              btns: r.btns,
              item: r.item,
              index: T,
              "auto-shrink": i.autoShrink
            }, null, 8, ["btns", "item", "index", "auto-shrink"])
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const u = /* @__PURE__ */ Y(nt, [["render", ot]]);
u.install = function(t) {
  t.component(u.name, u), t.component(f.name, f);
};
u.Item = f;
export {
  u as default
};
