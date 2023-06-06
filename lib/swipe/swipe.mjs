import "./css.mjs";
import { p as f, c as L } from "../dom-d693ece1.mjs";
import { g as T } from "../date-7a142ee6.mjs";
import { openBlock as a, createElementBlock as l, renderSlot as N, createElementVNode as c, toDisplayString as g, Fragment as O, renderList as D, normalizeStyle as Y, withModifiers as A, resolveComponent as P, createVNode as k, TransitionGroup as V, withCtx as R } from "vue";
import { _ as M } from "../_plugin-vue_export-helper-dad06003.mjs";
import "../env-c05026db.mjs";
const v = "cubic-bezier(0.165, 0.84, 0.44, 1)", F = "cubic-bezier(0.22, 0.61, 0.36, 1)";
const K = "cube-swipe-item", W = "item-click", z = "btn-click", y = "scroll", G = "active", Z = 1, S = -1, x = 0, b = 1, m = 600, w = 300, B = 15, j = 5, d = f("transform"), E = f("transitionProperty"), I = f("transitionDuration"), C = f("transitionTimingFunction"), H = {
  name: K,
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
      for (let i = 0; i < t; i++)
        this.cachedBtns.push({
          width: L(this.$refs.btns[i]).width
        });
    },
    _handleBtns(t) {
      if (this.btns.length === 0)
        return;
      const i = this.$refs.btns.length;
      let e = 0, h = -this.maxScrollX;
      for (let o = 0; o < i; o++) {
        const n = this.$refs.btns[o];
        let s = (h - e) / h, r, _ = s * t - t;
        t < this.maxScrollX ? r = this.cachedBtns[o].width + s * (this.maxScrollX - t) : r = this.cachedBtns[o].width, e += this.cachedBtns[o].width, n.style.width = `${r}px`, n.style[d] = `translate(${_}px)`, n.style[I] = "0ms";
      }
    },
    _isInBtns(t) {
      let i = t, e = !1;
      for (; i && i.className.indexOf("cube-swipe-item") < 0; ) {
        if (i.className.indexOf("cube-swipe-btns") >= 0) {
          e = !0;
          break;
        }
        i = i.parentNode;
      }
      return e;
    },
    _calculateBtnsWidth() {
      let t = 0;
      const i = this.cachedBtns.length;
      for (let e = 0; e < i; e++)
        t += this.cachedBtns[e].width;
      this.maxScrollX = -t;
    },
    _translate(t, i) {
      let e = i ? " translateZ(0)" : "";
      this.scrollerStyle[d] = `translate(${t}px,0)${e}`, this.x = t;
    },
    _transitionProperty(t = "transform") {
      this.scrollerStyle[E] = t;
    },
    _transitionTimingFunction(t) {
      this.scrollerStyle[C] = t;
    },
    _transitionTime(t = 0) {
      this.scrollerStyle[I] = `${t}ms`;
    },
    _getComputedPositionX() {
      let t = window.getComputedStyle(this.$refs.swipeItem, null);
      return t = t[d].split(")")[0].split(", "), +(t[12] || t[4]);
    },
    _translateBtns(t, i, e) {
      if (this.btns.length === 0)
        return;
      const h = this.$refs.btns.length;
      let o = 0, n = 0;
      for (let s = 0; s < h; s++) {
        const r = this.$refs.btns[s];
        this.state === b ? n = o : n = 0, o += this.cachedBtns[s].width, r.style[d] = `translate(${n}px,0) translateZ(0)`, r.style[E] = "all", r.style[C] = i, r.style[I] = `${t}ms`, e && (r.style.width = `${this.cachedBtns[s].width}px`);
      }
    },
    refresh() {
      this.btns.length > 0 && (this._initCachedBtns(), this._calculateBtnsWidth()), this.endTime = 0;
    },
    shrink() {
      this.stop(), this.state = x, this.$nextTick(() => {
        this.scrollTo(0, m, v), this._translateBtns(m, v);
      });
    },
    grow() {
      this.state = b;
      const t = this.x < this.maxScrollX;
      let i = F;
      this.scrollTo(this.maxScrollX, m, i), this._translateBtns(m, i, t);
    },
    scrollTo(t, i, e) {
      this._transitionProperty(), this._transitionTimingFunction(e), this._transitionTime(i), this._translate(t, !0), i && (this.isInTransition = !0);
    },
    genBtnStyl(t) {
      return `background: ${t.color}`;
    },
    clickItem() {
      this.swipe.onItemClick(this.item, this.index), this.$emit(W, this.item, this.index);
    },
    clickBtn(t) {
      this.swipe.onBtnClick(t, this.index), this.$emit(z, t, this.index), this.autoShrink && this.shrink();
    },
    stop() {
      if (this.isInTransition) {
        this.isInTransition = !1;
        let t = this.state === x ? 0 : this._getComputedPositionX();
        this._translate(t), this.$emit(y, this.x), this._handleBtns();
      }
    },
    onTouchStart(t) {
      this.swipe.onItemActive(this.index), this.$emit(G, this.index), this.stop(), this.moved = !1, this.movingDirectionX = 0;
      const i = t.touches[0];
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX = 0, this.distY = 0, this.startX = this.x, this._transitionTime(), this.startTime = T(), this.state === b && !this._isInBtns(t.target) && (this.shrinkTimer = setTimeout(() => {
        this.shrink();
      }, 300));
    },
    onTouchMove(t) {
      if (this.moved && (clearTimeout(this.shrinkTimer), t.stopPropagation()), this.isInTransition)
        return;
      t.preventDefault();
      const i = t.touches[0];
      let e = i.pageX - this.pointX, h = i.pageY - this.pointY;
      this.pointX = i.pageX, this.pointY = i.pageY, this.distX += e, this.distY += h;
      let o = Math.abs(this.distX), n = Math.abs(this.distY);
      if (o + j <= n)
        return;
      let s = T();
      if (s - this.endTime > w && o < B)
        return;
      this.movingDirectionX = e > 0 ? S : e < 0 ? Z : 0;
      let r = this.x + e;
      r > 0 && (r = 0), r < this.maxScrollX && (r = this.x + e / 3), this.moved || (this.moved = !0), this._translate(r, !0), s - this.startTime > w && (this.startTime = s, this.startX = this.x), this.$emit(y, this.x), this._handleBtns();
    },
    onTouchEnd() {
      if (!this.moved)
        return;
      if (this.movingDirectionX === S) {
        this.shrink();
        return;
      }
      this.endTime = T();
      let t = this.endTime - this.startTime, i = Math.abs(this.x - this.startX);
      t < w && i > B || this.x < this.maxScrollX / 2 ? this.grow() : this.shrink();
    },
    onTransitionEnd() {
      this.isInTransition = !1, this._transitionTime(), this._translate(this.x);
    }
  },
  beforeUnmount() {
    this.swipe.removeItem(this);
  }
}, Q = { class: "cube-swipe-btns" }, U = ["onClick"], q = { class: "text" };
function J(t, i, e, h, o, n) {
  return a(), l("div", {
    ref: "swipeItem",
    onTransitionend: i[1] || (i[1] = (...s) => n.onTransitionEnd && n.onTransitionEnd(...s)),
    onTouchstart: i[2] || (i[2] = (...s) => n.onTouchStart && n.onTouchStart(...s)),
    onTouchmove: i[3] || (i[3] = (...s) => n.onTouchMove && n.onTouchMove(...s)),
    onTouchend: i[4] || (i[4] = (...s) => n.onTouchEnd && n.onTouchEnd(...s)),
    class: "cube-swipe-item"
  }, [
    N(t.$slots, "default", {}, () => [
      c("div", {
        onClick: i[0] || (i[0] = (...s) => n.clickItem && n.clickItem(...s)),
        class: "cube-swipe-item-inner border-bottom-1px"
      }, [
        c("span", null, g(e.item.text), 1)
      ])
    ]),
    c("ul", Q, [
      (a(!0), l(O, null, D(e.btns, (s) => (a(), l("li", {
        ref_for: !0,
        ref: "btns",
        class: "cube-swipe-btn",
        style: Y(n.genBtnStyl(s)),
        onClick: A((r) => n.clickBtn(s), ["prevent"])
      }, [
        c("span", q, g(s.text), 1)
      ], 12, U))), 256))
    ])
  ], 544);
}
const p = /* @__PURE__ */ M(H, [["render", J]]);
const tt = "cube-swipe", X = "item-click", $ = "btn-click", it = {
  name: tt,
  provide() {
    return {
      swipe: this
    };
  },
  emits: [X, $],
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
      const i = this.items.indexOf(t);
      this.items.splice(i, 1), i <= this.activeIndex && (this.activeIndex -= 1);
    },
    onItemClick(t, i) {
      this.$emit(X, t, i);
    },
    onBtnClick(t, i) {
      const e = this.data[i];
      this.$emit($, t, i, e);
    },
    onItemActive(t) {
      t !== this.activeIndex && (this.activeIndex !== -1 && this.items[this.activeIndex].shrink(), this.activeIndex = t);
    }
  },
  components: {
    CubeSwipeItem: p
  }
}, et = { class: "cube-swipe" };
function st(t, i, e, h, o, n) {
  const s = P("cube-swipe-item");
  return a(), l("div", et, [
    N(t.$slots, "default", {}, () => [
      k(V, {
        name: "cube-swipe",
        tag: "ul"
      }, {
        default: R(() => [
          (a(!0), l(O, null, D(e.data, (r, _) => (a(), l("li", {
            key: r.item.value
          }, [
            k(s, {
              btns: r.btns,
              item: r.item,
              index: _,
              "auto-shrink": e.autoShrink
            }, null, 8, ["btns", "item", "index", "auto-shrink"])
          ]))), 128))
        ]),
        _: 1
      })
    ])
  ]);
}
const u = /* @__PURE__ */ M(it, [["render", st]]);
u.install = function(t) {
  t.component(u.name, u), t.component(p.name, p);
};
u.Item = p;
export {
  u as default
};
