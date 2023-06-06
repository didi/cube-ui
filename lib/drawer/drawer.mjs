import "./css.mjs";
import { p as M } from "../dom-d693ece1.mjs";
import { v as k } from "../visibility-5370f02a.mjs";
import { C as A } from "../scroll-626bf378.mjs";
import { openBlock as n, createElementBlock as m, normalizeClass as O, renderSlot as u, createTextVNode as E, toDisplayString as S, resolveComponent as w, createBlock as b, Transition as D, withCtx as T, withDirectives as y, createElementVNode as d, createVNode as L, Fragment as P, renderList as H, vShow as x, normalizeStyle as B, withModifiers as v } from "vue";
import { _ as $ } from "../_plugin-vue_export-helper-dad06003.mjs";
import { p as I } from "../popup-c9badb65.mjs";
import "../env-c05026db.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../loading-0018ccd1.mjs";
import "../deprecated-9057b427.mjs";
import "../debug-2fc173dc.mjs";
import "../constants-5ce69144.mjs";
import "../util-ec61f3da.mjs";
const z = "cube-drawer-item", W = {
  name: z,
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
function j(e, t, s, i, a, l) {
  return n(), m("li", {
    class: O(["cube-drawer-item border-bottom-1px", l.itemClass]),
    onClick: t[0] || (t[0] = (c) => l.clickItem(s.item))
  }, [
    u(e.$slots, "default", {}, () => [
      E(S(s.item.text || s.item), 1)
    ])
  ], 2);
}
const p = /* @__PURE__ */ $(W, [["render", j]]);
const F = "cube-drawer-panel", G = {
  name: F,
  mixins: [k],
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
    CubeScroll: A,
    CubeDrawerItem: p
  }
}, R = { class: "cube-drawer-panel" }, U = { class: "cube-drawer-scroll-wrapper" }, q = { class: "cube-drawer-list" };
function J(e, t, s, i, a, l) {
  const c = w("cube-drawer-item"), r = w("cube-scroll");
  return n(), b(D, { name: "cube-drawer-move" }, {
    default: T(() => [
      y(d("div", R, [
        d("div", U, [
          L(r, {
            ref: "scroll",
            data: s.data
          }, {
            default: T(() => [
              d("ul", q, [
                u(e.$slots, "default", {}, () => [
                  (n(!0), m(P, null, H(s.data, (h, C) => (n(), b(c, {
                    item: h,
                    key: C,
                    index: C
                  }, null, 8, ["item", "index"]))), 128))
                ])
              ])
            ]),
            _: 3
          }, 8, ["data"])
        ])
      ], 512), [
        [x, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const f = /* @__PURE__ */ $(G, [["render", J]]);
const K = "cube-drawer", g = "change", N = "select", V = "cancel", _ = M("transform"), Q = {
  name: K,
  mixins: [k, I],
  emits: [g, N, V],
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
        [_]: "translate3d(0, 0, 0)"
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
            const s = t - 1, i = this.selected[s];
            this.changeHandler(s, this.data[s][i], i);
          }
          break;
        }
      this.computedStyle();
    },
    hide() {
      this.slideStyle[_] = "translate3d(0, 0, 0)", this.shouldHide = !0;
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
    refill(e, t, s) {
      this.data[e] = t, this.index = e, this.selected = this.selected.slice(0, e), this.selectedVal = this.selectedVal.slice(0, e), this.selectedText = this.selectedText.slice(0, e), s >= 0 && (this.selected[e] = s, this.changeHandler(e, this.data[e][s], s));
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
        const s = this.index;
        for (; t <= s; ) {
          const i = this.panels[t].$el;
          e += i.offsetWidth;
          const a = window.getComputedStyle(i);
          e += parseInt(a.marginLeft), e += parseInt(a.marginRight), t++;
        }
        this.slideStyle[_] = `translate3d(-${e}px, 0, 0)`;
      });
    },
    changeHandler(e, t, s) {
      typeof t == "string" ? (this.selectedVal[e] = t, this.selectedText[e] = t) : (this.selectedVal[e] = t.value, this.selectedText[e] = t.text), this.selected[e] = s, e === this.data.length - 1 ? (this.$emit(N, this.selectedVal, this.selected, this.selectedText), this.hide()) : this.$emit(g, e, t, this.selectedVal, this.selected, this.selectedText);
    },
    drawerClick() {
      this.hide(), this.$emit(V);
    }
  },
  components: {
    CubeDrawerPanel: f
  }
}, X = { class: "cube-drawer-title" };
function Y(e, t, s, i, a, l) {
  const c = w("cube-drawer-panel");
  return y((n(), m("div", {
    class: "cube-drawer",
    onClick: t[3] || (t[3] = (...r) => l.drawerClick && l.drawerClick(...r))
  }, [
    d("div", {
      class: "cube-drawer-main",
      style: B(a.slideStyle),
      onClick: t[1] || (t[1] = v(() => {
      }, ["stop"])),
      onTransitionend: t[2] || (t[2] = (...r) => l.transitionend && l.transitionend(...r))
    }, [
      y(d("div", X, [
        u(e.$slots, "title", {}, () => [
          E(S(s.title), 1)
        ])
      ], 512), [
        [x, e.$slots.title || s.title]
      ]),
      d("div", {
        class: "cube-drawer-panels",
        onTransitionend: t[0] || (t[0] = v(() => {
        }, ["stop"]))
      }, [
        u(e.$slots, "default", {}, () => [
          (n(!0), m(P, null, H(s.data, (r, h) => (n(), b(c, {
            key: h,
            index: h,
            data: r
          }, null, 8, ["index", "data"]))), 128))
        ])
      ], 32)
    ], 36)
  ], 512)), [
    [x, e.isVisible]
  ]);
}
const o = /* @__PURE__ */ $(Q, [["render", Y]]);
o.install = function(e) {
  e.component(o.name, o), e.component(f.name, f), e.component(p.name, p);
};
o.Panel = f;
o.Item = p;
export {
  o as default
};
