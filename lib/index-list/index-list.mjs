import "./css.mjs";
import { a as M, r as U, p as O, g as A, b as B, c as C } from "../dom-d693ece1.mjs";
import { a as V } from "../env-c05026db.mjs";
import { C as R } from "../scroll-626bf378.mjs";
import { openBlock as n, createElementBlock as r, normalizeClass as P, renderSlot as h, createElementVNode as a, toDisplayString as x, resolveComponent as b, Fragment as v, renderList as L, createBlock as D, createVNode as G, createSlots as Y, withCtx as _, createTextVNode as E, createCommentVNode as H, withModifiers as j, withDirectives as K, vShow as z } from "vue";
import { _ as y } from "../_plugin-vue_export-helper-dad06003.mjs";
import { s as F, d as W } from "../deprecated-9057b427.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../loading-0018ccd1.mjs";
import "../constants-5ce69144.mjs";
import "../util-ec61f3da.mjs";
import "../debug-2fc173dc.mjs";
const q = "cube-index-list-item", T = "cube-index-list-item_active", I = "select", J = {
  name: q,
  emits: [I],
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    itemClass() {
      return this.item.active ? T : "";
    }
  },
  methods: {
    addActiveCls(t) {
      M(t.currentTarget, T);
    },
    removeActiveCls(t) {
      U(t.currentTarget, T);
    },
    selectItem() {
      this.$emit(I, this.item);
    }
  }
}, Q = { class: "cube-index-list-item-def border-bottom-1px" };
function X(t, e, i, o, u, s) {
  return n(), r("li", {
    class: P(["cube-index-list-item", s.itemClass]),
    onTouchstart: e[0] || (e[0] = (...c) => s.addActiveCls && s.addActiveCls(...c)),
    onTouchend: e[1] || (e[1] = (...c) => s.removeActiveCls && s.removeActiveCls(...c)),
    onClick: e[2] || (e[2] = (c) => s.selectItem())
  }, [
    h(t.$slots, "default", {}, () => [
      a("div", Q, x(i.item.name), 1)
    ])
  ], 34);
}
const f = /* @__PURE__ */ y(J, [["render", X]]), Z = "cube-index-list-group", S = "select", tt = {
  name: Z,
  emits: [S],
  props: {
    group: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  methods: {
    selectItem(t) {
      this.$emit(S, t);
    }
  },
  components: {
    CubeIndexListItem: f
  }
}, et = { class: "cube-index-list-group" }, it = ["innerHTML"];
function st(t, e, i, o, u, s) {
  const c = b("cube-index-list-item");
  return n(), r("li", et, [
    a("h2", {
      class: "cube-index-list-anchor",
      innerHTML: i.group.name
    }, null, 8, it),
    a("ul", null, [
      h(t.$slots, "default", {}, () => [
        (n(!0), r(v, null, L(i.group.items, (g, l) => (n(), D(c, {
          key: l,
          item: g,
          onSelect: s.selectItem
        }, null, 8, ["item", "onSelect"]))), 128))
      ])
    ])
  ]);
}
const p = /* @__PURE__ */ y(tt, [["render", st]]);
const lt = "cube-index-list", N = "select", $ = "title-click", w = "pulling-up", k = "pulling-down", nt = V && window.innerHeight <= 480 ? 17 : 18, ot = O("transform"), rt = {
  name: lt,
  mixins: [F, W],
  emits: [N, $, w, k],
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
    speed: {
      type: Number,
      default: 0
    },
    navbar: {
      type: Boolean,
      default: !0
    },
    pullDownRefresh: {
      type: [Object, Boolean],
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    pullUpLoad: {
      type: [Object, Boolean],
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    }
  },
  data() {
    return {
      scrollEvents: ["scroll"],
      currentIndex: 0,
      scrollY: -1,
      diff: -1,
      titleHeight: 0
    };
  },
  computed: {
    hasTitle() {
      return this.title || this.$slots.title;
    },
    fixedTitle() {
      return this.hasTitle && !this.titleHeight && this._caculateTitleHeight(), this.scrollY <= -this.titleHeight && this.data[this.currentIndex] ? this.data[this.currentIndex].name : "";
    },
    shortcutList() {
      return this.data.map((t) => t ? t.shortcut || t.name.substr(0, 1) : "");
    },
    scrollOptions() {
      return Object.assign({}, {
        pullDownRefresh: this.pullDownRefresh,
        pullUpLoad: this.pullUpLoad
      }, this.options);
    }
  },
  created() {
    this.groupList = [], this.listHeight = [], this.touch = {}, this.subTitleHeight = 0;
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh();
    });
  },
  methods: {
    /* TODO: remove refresh next minor version */
    refresh() {
      this._caculateTitleHeight(), this._calculateHeight(), this.$refs.scroll && this.$refs.scroll.refresh();
    },
    selectItem(t) {
      this.$emit(N, t);
    },
    scroll(t) {
      this.scrollY = t.y;
    },
    titleClick() {
      this.$emit($, this.title);
    },
    forceUpdate(t = !1, e = !1) {
      this.$refs.scroll.forceUpdate(t, e), t && this.$nextTick(() => {
        this._calculateHeight();
      });
    },
    onShortcutTouchStart(t) {
      const e = A(t, "cube-index-list-nav-item");
      if (!e)
        return;
      let i = B(e, "index"), o = t.touches[0];
      this.touch.y1 = o.pageY, this.touch.anchorIndex = i, this._scrollTo(i);
    },
    onShortcutTouchMove(t) {
      let e = t.touches[0];
      this.touch.y2 = e.pageY;
      let i = (this.touch.y2 - this.touch.y1) / nt | 0, o = parseInt(this.touch.anchorIndex) + i;
      this._scrollTo(o);
    },
    onPullingUp() {
      this.$emit(w);
    },
    onPullingDown() {
      this.$emit(k);
    },
    _caculateTitleHeight() {
      this.titleHeight = this.$refs.title ? C(this.$refs.title).height : 0;
    },
    _calculateHeight() {
      this.groupList = this.$el.getElementsByClassName("cube-index-list-group");
      const t = this.$el.getElementsByClassName("cube-index-list-anchor")[0];
      if (this.subTitleHeight = t ? C(t).height : 0, this.listHeight = [], !this.groupList)
        return;
      let e = this.titleHeight;
      this.listHeight.push(e);
      for (let i = 0; i < this.groupList.length; i++) {
        let o = this.groupList[i];
        e += o.clientHeight, this.listHeight.push(e);
      }
    },
    _scrollTo(t) {
      t < 0 ? t = 0 : t > this.listHeight.length - 2 && (t = this.listHeight.length - 2), this.$refs.scroll.scrollToElement(this.groupList[t], this.speed), this.scrollY = this.$refs.scroll.scroll.y;
    }
  },
  watch: {
    data() {
      this.$nextTick(() => {
        this._calculateHeight();
      });
    },
    title(t) {
      this.$nextTick(() => {
        this.refresh();
      });
    },
    diff(t) {
      let e = t > 0 && t < this.subTitleHeight ? t - this.subTitleHeight : 0;
      this.fixedTop !== e && (this.fixedTop = e, this.$refs.fixed.style[ot] = `translate3d(0,${e}px,0)`);
    },
    scrollY(t) {
      const e = this.listHeight;
      if (t > -this.titleHeight) {
        this.currentIndex = 0;
        return;
      }
      for (let i = 0; i < e.length - 1; i++) {
        let o = e[i], u = e[i + 1];
        if (-t >= o && -t < u) {
          this.currentIndex = i, this.diff = u + t;
          return;
        }
      }
      this.currentIndex = e.length - 2;
    }
  },
  components: {
    CubeScroll: R,
    CubeIndexListGroup: p
  }
}, ct = { class: "cube-index-list" }, ut = {
  class: "cube-index-list-content",
  ref: "content"
}, ht = { class: "cube-index-list-nav-list" }, at = ["data-index"], dt = ["innerHTML"];
function mt(t, e, i, o, u, s) {
  const c = b("cube-index-list-group"), g = b("cube-scroll");
  return n(), r("div", ct, [
    G(g, {
      ref: "scroll",
      "scroll-events": u.scrollEvents,
      options: s.scrollOptions,
      data: i.data,
      onScroll: s.scroll,
      onPullingDown: s.onPullingDown,
      onPullingUp: s.onPullingUp
    }, Y({
      default: _(() => [
        a("div", ut, [
          s.hasTitle ? (n(), r("h1", {
            key: 0,
            class: "cube-index-list-title",
            ref: "title",
            onClick: e[0] || (e[0] = (...l) => s.titleClick && s.titleClick(...l))
          }, [
            h(t.$slots, "title", {}, () => [
              E(x(i.title), 1)
            ])
          ], 512)) : H("", !0),
          a("ul", null, [
            h(t.$slots, "default", {}, () => [
              (n(!0), r(v, null, L(i.data, (l, d) => (n(), D(c, {
                key: d,
                group: l,
                onSelect: s.selectItem
              }, null, 8, ["group", "onSelect"]))), 128))
            ])
          ])
        ], 512)
      ]),
      _: 2
    }, [
      t.$slots.pullup ? {
        name: "pullup",
        fn: _((l) => [
          h(t.$slots, "pullup", {
            pullUpLoad: l.pullUpLoad,
            isPullUpLoad: l.isPullUpLoad
          })
        ]),
        key: "0"
      } : void 0,
      t.$slots.pulldown ? {
        name: "pulldown",
        fn: _((l) => [
          h(t.$slots, "pulldown", {
            pullDownRefresh: l.pullDownRefresh,
            pullDownStyle: l.pullDownStyle,
            beforePullDown: l.beforePullDown,
            isPullingDown: l.isPullingDown,
            bubbleY: l.bubbleY
          })
        ]),
        key: "1"
      } : void 0
    ]), 1032, ["scroll-events", "options", "data", "onScroll", "onPullingDown", "onPullingUp"]),
    i.navbar ? (n(), r("div", {
      key: 0,
      class: "cube-index-list-nav",
      onTouchstart: e[1] || (e[1] = (...l) => s.onShortcutTouchStart && s.onShortcutTouchStart(...l)),
      onTouchmove: e[2] || (e[2] = j((...l) => s.onShortcutTouchMove && s.onShortcutTouchMove(...l), ["stop", "prevent"]))
    }, [
      a("ul", ht, [
        (n(!0), r(v, null, L(s.shortcutList, (l, d) => (n(), r("li", {
          key: d,
          "data-index": d,
          class: P(["cube-index-list-nav-item", { active: u.currentIndex === d }])
        }, [
          h(t.$slots, "nav-item", { item: l }, () => [
            E(x(l), 1)
          ])
        ], 10, at))), 128))
      ])
    ], 32)) : H("", !0),
    K(a("div", {
      ref: "fixed",
      innerHTML: s.fixedTitle,
      class: "cube-index-list-fixed cube-index-list-anchor"
    }, null, 8, dt), [
      [z, s.fixedTitle]
    ])
  ]);
}
const m = /* @__PURE__ */ y(rt, [["render", mt]]);
m.install = function(t) {
  t.component(m.name, m), t.component(p.name, p), t.component(f.name, f);
};
m.Group = p;
m.Item = f;
export {
  m as default
};
