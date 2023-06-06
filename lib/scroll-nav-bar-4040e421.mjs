import { s as T } from "./deprecated-9057b427.mjs";
import { C as p } from "./scroll-626bf378.mjs";
import { resolveComponent as x, openBlock as h, createElementBlock as d, normalizeClass as _, createVNode as C, withCtx as y, createElementVNode as f, Fragment as E, renderList as k, renderSlot as M } from "vue";
import { _ as g } from "./_plugin-vue_export-helper-dad06003.mjs";
const v = "horizontal", H = "vertical", S = "cube-scroll-nav-bar", b = "change", z = {
  name: S,
  inject: {
    scrollNav: {
      default: null
    }
  },
  mixins: [T],
  emits: [b],
  props: {
    direction: {
      type: String,
      default: v,
      validator(t) {
        return t === v || t === H;
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
      default(t) {
        return t._defaultTxts = !0, t.labels;
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
    labels(t) {
      this._defaultTxts && (this.usedTxts = t);
    },
    txts(t) {
      this.usedTxts = t;
    },
    current(t) {
      this.active = t;
    },
    active(t) {
      this.$emit(b, t), this._adjust();
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
    clickHandler(t) {
      t !== this.active && (this.active = t, this.scrollNav && this.scrollNav.barChange(t));
    },
    refresh() {
      this.$refs.scroll.refresh(), this._adjust();
    },
    _adjust() {
      this.$nextTick(() => {
        const t = this.direction === v, i = t ? "clientWidth" : "clientHeight", s = this.active, o = this.$refs.scroll.$el[i], r = this.$refs.items, a = r[i], u = Math.min(0, o - a), l = o / 2, e = r.children;
        let c = 0;
        this.labels.every((N, m) => N === s ? (c += e[m][i] / 2, !1) : (c += e[m][i], !0));
        let n = l - c;
        n = Math.max(u, Math.min(0, n)), this.$refs.scroll.scrollTo(t ? n : 0, t ? 0 : n, 300);
      });
    }
  },
  components: {
    CubeScroll: p
  }
}, B = {
  class: "cube-scroll-nav-bar-items",
  ref: "items"
}, j = ["onClick"], $ = ["innerHTML"];
function A(t, i, s, o, r, a) {
  const u = x("cube-scroll");
  return h(), d("div", {
    class: _(["cube-scroll-nav-bar", "cube-scroll-nav-bar_" + s.direction])
  }, [
    C(u, {
      ref: "scroll",
      nestMode: "none",
      options: t.options,
      direction: s.direction
    }, {
      default: y(() => [
        f("div", B, [
          (h(!0), d(E, null, k(r.usedTxts, (l, e) => (h(), d("div", {
            class: _(["cube-scroll-nav-bar-item", { "cube-scroll-nav-bar-item_active": r.active === s.labels[e] }]),
            key: e,
            onClick: (c) => a.clickHandler(s.labels[e])
          }, [
            M(t.$slots, "default", {
              txt: l,
              index: e,
              active: r.active,
              label: s.labels[e]
            }, () => [
              f("span", { innerHTML: l }, null, 8, $)
            ])
          ], 10, j))), 128))
        ], 512)
      ]),
      _: 3
    }, 8, ["options", "direction"])
  ], 2);
}
const L = /* @__PURE__ */ g(z, [["render", A]]);
export {
  L as S
};
