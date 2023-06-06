import "./css.mjs";
import { s as E } from "../deprecated-9057b427.mjs";
import { S as N, a as v } from "../sticky-ele-3eb5478b.mjs";
import { C as T } from "../scroll-626bf378.mjs";
import { S as h } from "../scroll-nav-bar-4040e421.mjs";
import { resolveComponent as c, openBlock as b, createElementBlock as y, normalizeClass as x, createVNode as n, withCtx as i, renderSlot as o, createElementVNode as u, createSlots as B } from "vue";
import { _ as k } from "../_plugin-vue_export-helper-dad06003.mjs";
import "../debug-2fc173dc.mjs";
import "../dom-d693ece1.mjs";
import "../env-c05026db.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../loading-0018ccd1.mjs";
import "../constants-5ce69144.mjs";
import "../util-ec61f3da.mjs";
const $ = "horizontal", H = "vertical", O = "cube-scroll-nav", m = "change", _ = "sticky-change", P = {
  name: O,
  provide() {
    return {
      scrollNav: this
    };
  },
  mixins: [E],
  emits: [m, _],
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
      return this.side ? H : $;
    }
  },
  watch: {
    current(e) {
      this.stickyCurrent = e, this.active = e, this.jumpTo(e);
    },
    active(e) {
      this.$emit(m, e);
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
      const l = this.getPanel(e);
      if (l) {
        this._jumping = !0;
        const t = this.pageStickyOffset;
        this.$refs.scroll.scrollToElement(l.$el, this.speed, 0, this.side ? t : -t);
      }
    },
    getPanel(e) {
      let l = null;
      return this.panels.some((t) => {
        if (t.label === e)
          return l = t, !0;
      }), l;
    },
    pageStickyChangeHandler(e) {
      e === "" && (e = this.labels[0]), this.stickyCurrent = e, !this._jumping && (this.active = e);
    },
    stickyChangeHandler(e) {
      this.$nextTick(() => {
        this.navBar && this.navBar.refresh();
      }), this.$emit(_, e);
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
      const l = this.panels.indexOf(e);
      this.panels.splice(l, 1);
    }
  },
  components: {
    CubeSticky: N,
    CubeStickyEle: v,
    CubeScroll: T,
    CubeScrollNavBar: h
  }
}, j = { class: "cube-scroll-nav-main" }, M = { class: "cube-scroll-nav-panels" }, A = /* @__PURE__ */ u("div", null, null, -1);
function I(e, l, t, g, r, s) {
  const f = c("cube-scroll-nav-bar"), C = c("cube-sticky-ele"), p = c("cube-sticky"), S = c("cube-scroll");
  return b(), y("div", {
    class: x(["cube-scroll-nav", { "cube-scroll-nav_side": t.side }])
  }, [
    n(p, {
      ref: "sticky",
      pos: r.scrollY,
      onChange: s.stickyChangeHandler
    }, {
      default: i(() => [
        n(S, {
          ref: "scroll",
          "scroll-events": r.scrollEvents,
          options: e.options,
          data: t.data,
          onScroll: s.scrollHandler,
          onScrollEnd: s.scrollEndHandler
        }, {
          default: i(() => [
            o(e.$slots, "prepend"),
            u("div", j, [
              n(C, {
                ref: "navBarEle",
                "ele-key": "cube-scroll-nav-bar"
              }, {
                default: i(() => [
                  o(e.$slots, "bar", {
                    txts: s.barTxts,
                    labels: s.labels,
                    current: r.active
                  }, () => [
                    n(f, {
                      direction: s.barDirection,
                      txts: s.barTxts,
                      labels: s.labels,
                      current: r.active
                    }, null, 8, ["direction", "txts", "labels", "current"])
                  ])
                ]),
                _: 3
              }, 512),
              n(p, {
                ref: "pageSticky",
                offset: r.pageStickyOffset,
                pos: r.scrollY,
                onChange: s.pageStickyChangeHandler
              }, B({
                default: i(() => [
                  u("div", M, [
                    o(e.$slots, "default")
                  ])
                ]),
                _: 2
              }, [
                t.side ? void 0 : {
                  name: "fixed",
                  fn: i(() => [
                    A
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
const a = /* @__PURE__ */ k(P, [["render", I]]), Y = "cube-scroll-nav-panel", D = {
  name: Y,
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
    CubeStickyEle: v
  }
}, V = { class: "cube-scroll-nav-panel" }, z = ["innerHTML"];
function G(e, l, t, g, r, s) {
  const f = c("cube-sticky-ele");
  return b(), y("div", V, [
    n(f, { "ele-key": t.label }, {
      default: i(() => [
        u("h2", {
          class: "cube-scroll-nav-panel-title",
          innerHTML: t.title
        }, null, 8, z)
      ]),
      _: 1
    }, 8, ["ele-key"]),
    o(e.$slots, "default")
  ]);
}
const d = /* @__PURE__ */ k(D, [["render", G]]);
a.install = function(e) {
  e.component(a.name, a), e.component(d.name, d), e.component(h.name, h);
};
a.Panel = d;
a.Bar = h;
export {
  a as default
};
