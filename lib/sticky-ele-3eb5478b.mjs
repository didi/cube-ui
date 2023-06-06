import { p as E, r as g, a as $, c as k } from "./dom-d693ece1.mjs";
import { openBlock as p, createElementBlock as _, renderSlot as l, createVNode as C, Transition as S, withCtx as N, withDirectives as v, createElementVNode as y, vShow as H } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-dad06003.mjs";
const T = "cube-sticky", u = "change", a = "diff-change", b = E("transform"), K = {
  name: T,
  provide() {
    return {
      sticky: this
    };
  },
  emits: [u, a],
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
      e >= 0 && (e = 0), e = Math.ceil(e), this._fixedTop !== e && (this._fixedTop = e, this.$refs.fixedEle.style[b] = `translate3d(0, ${e}px, 0)`);
    },
    pos: "computeCurrentSticky",
    currentIndex(e, s) {
      const i = this.eles[s], c = this.eles[e], h = c && c.eleKey !== void 0 ? c.eleKey : e === -1 ? "" : e, t = this.$refs.fixedEle, r = this.$slots.fixed;
      this.$nextTick(() => {
        if (r)
          this.fixedEleHeight = t.offsetHeight;
        else {
          const o = t.firstElementChild;
          i && (i.$el.appendChild(o), i.refresh()), c ? (t.appendChild(c.$el.firstElementChild), this.fixedEleHeight = t.offsetHeight) : this.fixedEleHeight = 0;
        }
        const n = "cube-sticky-ele-on";
        i && g(i.$el, n), c && $(c.$el, n);
      }), this.currentKey = h, this.$emit(u, h, e);
    },
    currentDiff(e) {
      const s = this.heights[this.currentIndex] || 0;
      this.$emit(a, e, s);
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
      const s = this.eles.indexOf(e);
      this.eles.splice(s, 1), this.positions.splice(s, 1);
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
      const s = this.positions, i = this.heights, c = this.checkTop, h = s.length;
      for (let t = h - 1; t >= 0; t--) {
        const r = t === h - 1, n = r ? e : s[t + 1];
        let o, f;
        c ? (o = s[t], f = o + i[t]) : (o = s[t] + i[t], f = o);
        const x = Math.max(f, n);
        if (e >= o && e <= x) {
          this.currentIndex = t, this.currentDiff = e - o;
          const d = n - e;
          d >= 0 && !r ? this.diff = d - (this.fixedEleHeight || i[t]) : this.diff = 0;
          return;
        }
      }
      this.currentIndex = -1, this.currentDiff = 0;
    },
    _calculateHeight() {
      this.eles.forEach((s, i) => {
        const { top: c, height: h } = k(s.$el);
        this.positions[i] = c, this.heights[i] = h;
      }), this.fixedEleHeight = this.$refs.fixedEle.offsetHeight;
    }
  }
}, A = { class: "cube-sticky" }, D = {
  ref: "fixedEle",
  class: "cube-sticky-fixed"
};
function M(e, s, i, c, h, t) {
  return p(), _("div", A, [
    l(e.$slots, "default"),
    C(S, { name: i.fixedShowAni }, {
      default: N(() => [
        v(y("div", D, [
          l(e.$slots, "fixed", {
            current: h.currentKey,
            index: h.currentIndex
          })
        ], 512), [
          [H, t.fixedShow]
        ])
      ]),
      _: 3
    }, 8, ["name"])
  ]);
}
const L = /* @__PURE__ */ m(K, [["render", M]]);
const I = "cube-sticky-ele", O = {
  name: I,
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
}, B = { class: "cube-sticky-ele" }, F = { class: "cube-sticky-content" };
function G(e, s, i, c, h, t) {
  return p(), _("div", B, [
    y("div", F, [
      l(e.$slots, "default")
    ])
  ]);
}
const R = /* @__PURE__ */ m(O, [["render", G]]);
export {
  L as S,
  R as a
};
