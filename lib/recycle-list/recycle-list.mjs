import "./css.mjs";
import { openBlock as l, createElementBlock as r, createElementVNode as h, normalizeStyle as d, Fragment as g, renderList as y, resolveComponent as T, normalizeClass as b, renderSlot as a, createCommentVNode as m, withDirectives as v, vShow as I, createVNode as z } from "vue";
const k = (e, s) => {
  const t = e.__vccOpts || e;
  for (const [o, i] of s)
    t[o] = i;
  return t;
}, E = "cube-loading", $ = {
  name: E,
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
}, x = { class: "cube-loading" }, M = { class: "cube-loading-spinner" };
function N(e, s, t, o, i, n) {
  return l(), r("div", x, [
    h("span", {
      class: "cube-loading-spinners",
      style: d(n.style)
    }, [
      (l(!0), r(g, null, y(i.balde, (_) => (l(), r("i", M))), 256))
    ], 4)
  ]);
}
const L = /* @__PURE__ */ k($, [["render", N]]);
function w(e) {
  const s = Object.prototype.toString;
  return function(o) {
    return s.call(o) === `[object ${e}]`;
  };
}
const C = w("Undefined");
const H = "cube-recycle-list", u = "scroll", p = "resize", O = {
  name: H,
  emits: [u, p],
  data() {
    return {
      items: [],
      heights: 0,
      startIndex: 0,
      loadings: [],
      noMore: !1,
      preload: !1
    };
  },
  props: {
    infinite: {
      type: Boolean,
      default: !1
    },
    size: {
      type: Number,
      default: 20
    },
    offset: {
      type: Number,
      default: 100
    },
    onFetch: {
      type: Function,
      required: !0
    }
  },
  computed: {
    visibleItems() {
      return this.items.slice(Math.max(0, this.startIndex - this.size), Math.min(this.items.length, this.startIndex + this.size));
    },
    tombHeight() {
      return this.infinite ? this.$refs.tomb && this.$refs.tomb.offsetHeight : 0;
    },
    loading() {
      return this.loadings.length;
    }
  },
  created() {
    this.list = [], this.promiseStack = [];
  },
  mounted() {
    this.checkPromiseCompatibility(), this.$el.addEventListener(u, this._onScroll), window.addEventListener(p, this._onResize), this.load();
  },
  beforeUnmount() {
    this.$el.removeEventListener(u, this._onScroll), window.removeEventListener(p, this._onResize);
  },
  methods: {
    checkPromiseCompatibility() {
      C(window.Promise);
    },
    load() {
      if (this.infinite) {
        const e = this.items, s = e.length;
        e.length += this.size;
        const t = e.length;
        this.loadItems(s, t), this.getItems();
      } else
        this.loading || this.getItems();
    },
    getItems() {
      const e = this.promiseStack.length, s = this.onFetch();
      this.loadings.push("pending"), this.promiseStack.push(s), this.preload = !0, s.then((t) => {
        this.loadings.pop(), t ? (this.setList(e, t), this.loadItemsByIndex(e), t.length < this.size && this.stopScroll(e)) : this.stopScroll(e), setTimeout(() => {
          this.preload = !1;
        }, 0);
      });
    },
    removeUnusedTombs(e, s) {
      let t, o = this.size, i = s * o, n = (s + 1) * o;
      for (t = i; t < n && !(e[t] && e[t].isTombstone); t++)
        ;
      this.items = e.slice(0, t);
    },
    stopScroll(e) {
      this.noMore = !0, this.removeUnusedTombs(this.items.slice(0), e), this.updateItemTop(), this.updateStartIndex();
    },
    setList(e, s) {
      const t = this.list, o = e * this.size;
      for (let i = 0; i < s.length; i++)
        t[o + i] = s[i];
    },
    loadItemsByIndex(e) {
      const s = this.size, t = e * s, o = (e + 1) * s;
      this.loadItems(t, o);
    },
    loadItems(e, s) {
      const t = this.items;
      let o = [], i;
      for (let n = e; n < s; n++)
        i = t[n], !(i && i.loaded) && (this.setItem(n, this.list[n]), o.push(this.$nextTick().then(() => {
          this.updateItemHeight(n);
        })));
      window.Promise.all(o).then(() => {
        this.updateItemTop(), this.updateStartIndex();
      });
    },
    setItem(e, s) {
      this.items[e] = {
        data: s || {},
        height: 0,
        top: -1e3,
        isTombstone: !s,
        loaded: s ? 1 : 0
      };
    },
    updateItemHeight(e) {
      let s = this.items[e], t = this.$refs["preloads" + e];
      t && t[0] ? s.height = t[0].offsetHeight : s && (s.height = this.tombHeight);
    },
    updateItemTop() {
      let e = 0;
      const s = this.items;
      let t, o;
      for (let i = 0; i < s.length; i++)
        t = s[i - 1], o = s[i], s[i] ? (o.top = t ? t.top + t.height : 0, e += o.height) : e += 0;
      this.heights = e;
    },
    updateStartIndex() {
      let e = this.$el.scrollTop, s;
      const t = this.items;
      for (let o = 0; o < t.length; o++)
        if (s = t[o], !s || s.top > e) {
          this.startIndex = Math.max(0, o - 1);
          break;
        }
    },
    reset() {
      [
        {
          key: "items",
          value: []
        },
        {
          key: "heights",
          value: 0
        },
        {
          key: "startIndex",
          value: 0
        },
        {
          key: "loadings",
          value: []
        },
        {
          key: "noMore",
          value: !1
        },
        {
          key: "list",
          value: []
        },
        {
          key: "promiseStack",
          value: []
        }
      ].forEach(({ key: s, value: t }) => {
        this[s] = t;
      }), this.$el.scrollTop = 0, this.load();
    },
    _onScroll() {
      !this.noMore && this.$el.scrollTop + this.$el.offsetHeight > this.heights - this.offset && this.load(), this.updateStartIndex();
    },
    _onResize() {
      const e = this.items;
      e.forEach((s) => {
        s.loaded = !1;
      }), this.loadItems(0, e.length);
    }
  },
  components: {
    CubeLoading: L
  }
}, F = { class: "cube-recycle-list" }, P = { class: "cube-recycle-list-main" }, R = { class: "cube-recycle-list-pool" }, B = {
  ref: "tomb",
  class: "cube-recycle-list-item cube-recycle-list-invisible"
}, U = { class: "cube-recycle-list-loading-content" }, V = { class: "cube-recycle-list-noMore" }, j = /* @__PURE__ */ h("div", { class: "cube-recycle-list-fake" }, null, -1);
function A(e, s, t, o, i, n) {
  const _ = T("cube-loading");
  return l(), r("div", F, [
    h("div", P, [
      h("div", {
        class: "cube-recycle-list-items",
        style: d({ height: i.heights + "px" })
      }, [
        (l(!0), r(g, null, y(n.visibleItems, (c) => (l(), r("div", {
          class: "cube-recycle-list-item",
          style: d({ transform: "translate(0," + c.top + "px)" })
        }, [
          t.infinite ? (l(), r("div", {
            key: 0,
            class: b({ "cube-recycle-list-transition": t.infinite }),
            style: d({ opacity: +!c.loaded })
          }, [
            a(e.$slots, "tombstone")
          ], 6)) : m("", !0),
          h("div", {
            class: b({ "cube-recycle-list-transition": t.infinite }),
            style: d({ opacity: c.loaded })
          }, [
            a(e.$slots, "item", {
              data: c.data
            })
          ], 6)
        ], 4))), 256)),
        h("div", R, [
          !t.infinite && i.preload ? (l(!0), r(g, { key: 0 }, y(i.items, (c, S) => v((l(), r("div", {
            class: "cube-recycle-list-item cube-recycle-list-invisible",
            ref_for: !0,
            ref: "preloads" + S
          }, [
            a(e.$slots, "item", {
              data: c.data
            })
          ], 512)), [
            [I, c && !c.isTombstone && !c.height]
          ])), 256)) : m("", !0),
          h("div", B, [
            a(e.$slots, "tombstone")
          ], 512)
        ])
      ], 4),
      !t.infinite && !i.noMore ? (l(), r("div", {
        key: 0,
        class: "cube-recycle-list-loading",
        style: d({ visibility: n.loading ? "visible" : "hidden" })
      }, [
        a(e.$slots, "spinner", {}, () => [
          h("div", U, [
            z(_, { class: "cube-recycle-list-spinner" })
          ])
        ])
      ], 4)) : m("", !0),
      v(h("div", V, [
        a(e.$slots, "noMore")
      ], 512), [
        [I, i.noMore]
      ])
    ]),
    j
  ]);
}
const f = /* @__PURE__ */ k(O, [["render", A]]);
f.install = function(e) {
  e.component(f.name, f);
};
export {
  f as default
};
