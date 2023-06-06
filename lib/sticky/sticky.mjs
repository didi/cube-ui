import "./css.mjs";
import { openBlock as y, createElementBlock as E, renderSlot as a, createVNode as N, Transition as T, withCtx as S, withDirectives as b, createElementVNode as g, vShow as H } from "vue";
const k = typeof window < "u", m = k && navigator.userAgent.toLowerCase();
m && m.indexOf("android") > 0;
function $(e, t) {
  return new RegExp("(^|\\s)" + t + "(\\s|$)").test(e.className);
}
function w(e, t) {
  if ($(e, t))
    return;
  const s = e.className.split(" ");
  s.push(t), e.className = s.join(" ");
}
function O(e, t) {
  if (!$(e, t))
    return;
  const s = new RegExp("(^|\\s)" + t + "(\\s|$)", "g");
  e.className = e.className.replace(s, " ");
}
function A(e) {
  return {
    top: e.offsetTop,
    left: e.offsetLeft,
    width: e.offsetWidth,
    height: e.offsetHeight
  };
}
let l = (() => {
  if (!k)
    return !1;
  let e = document.createElement("div").style, t = {
    standard: "transform",
    webkit: "webkitTransform",
    Moz: "MozTransform",
    O: "OTransform",
    ms: "msTransform"
  };
  for (let s in t)
    if (e[t[s]] !== void 0)
      return s;
  return !1;
})();
function K(e) {
  return l === !1 ? !1 : l === "standard" ? e === "transitionEnd" ? "transitionend" : e : l + e.charAt(0).toUpperCase() + e.substr(1);
}
const C = (e, t) => {
  const s = e.__vccOpts || e;
  for (const [n, r] of t)
    s[n] = r;
  return s;
}, M = "cube-sticky", _ = "change", x = "diff-change", D = K("transform"), I = {
  name: M,
  provide() {
    return {
      sticky: this
    };
  },
  emits: [_, x],
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
      e >= 0 && (e = 0), e = Math.ceil(e), this._fixedTop !== e && (this._fixedTop = e, this.$refs.fixedEle.style[D] = `translate3d(0, ${e}px, 0)`);
    },
    pos: "computeCurrentSticky",
    currentIndex(e, t) {
      const s = this.eles[t], n = this.eles[e], r = n && n.eleKey !== void 0 ? n.eleKey : e === -1 ? "" : e, i = this.$refs.fixedEle, f = this.$slots.fixed;
      this.$nextTick(() => {
        if (f)
          this.fixedEleHeight = i.offsetHeight;
        else {
          const o = i.firstElementChild;
          s && (s.$el.appendChild(o), s.refresh()), n ? (i.appendChild(n.$el.firstElementChild), this.fixedEleHeight = i.offsetHeight) : this.fixedEleHeight = 0;
        }
        const c = "cube-sticky-ele-on";
        s && O(s.$el, c), n && w(n.$el, c);
      }), this.currentKey = r, this.$emit(_, r, e);
    },
    currentDiff(e) {
      const t = this.heights[this.currentIndex] || 0;
      this.$emit(x, e, t);
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
      const t = this.positions, s = this.heights, n = this.checkTop, r = t.length;
      for (let i = r - 1; i >= 0; i--) {
        const f = i === r - 1, c = f ? e : t[i + 1];
        let o, d;
        n ? (o = t[i], d = o + s[i]) : (o = t[i] + s[i], d = o);
        const v = Math.max(d, c);
        if (e >= o && e <= v) {
          this.currentIndex = i, this.currentDiff = e - o;
          const p = c - e;
          p >= 0 && !f ? this.diff = p - (this.fixedEleHeight || s[i]) : this.diff = 0;
          return;
        }
      }
      this.currentIndex = -1, this.currentDiff = 0;
    },
    _calculateHeight() {
      this.eles.forEach((t, s) => {
        const { top: n, height: r } = A(t.$el);
        this.positions[s] = n, this.heights[s] = r;
      }), this.fixedEleHeight = this.$refs.fixedEle.offsetHeight;
    }
  }
}, B = { class: "cube-sticky" }, L = {
  ref: "fixedEle",
  class: "cube-sticky-fixed"
};
function R(e, t, s, n, r, i) {
  return y(), E("div", B, [
    a(e.$slots, "default"),
    N(T, { name: s.fixedShowAni }, {
      default: S(() => [
        b(g("div", L, [
          a(e.$slots, "fixed", {
            current: r.currentKey,
            index: r.currentIndex
          })
        ], 512), [
          [H, i.fixedShow]
        ])
      ]),
      _: 3
    }, 8, ["name"])
  ]);
}
const h = /* @__PURE__ */ C(I, [["render", R]]);
const j = "cube-sticky-ele", z = {
  name: j,
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
}, F = { class: "cube-sticky-ele" }, G = { class: "cube-sticky-content" };
function P(e, t, s, n, r, i) {
  return y(), E("div", F, [
    g("div", G, [
      a(e.$slots, "default")
    ])
  ]);
}
const u = /* @__PURE__ */ C(z, [["render", P]]);
h.install = function(e) {
  e.component(h.name, h), e.component(u.name, u);
};
h.Ele = u;
export {
  h as default
};
