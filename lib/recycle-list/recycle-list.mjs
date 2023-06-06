import "./css.mjs";
import { L as S } from "../loading-0018ccd1.mjs";
import { i as T } from "../util-ec61f3da.mjs";
import { resolveComponent as z, openBlock as h, createElementBlock as c, createElementVNode as r, normalizeStyle as d, Fragment as g, renderList as b, normalizeClass as y, renderSlot as a, createCommentVNode as m, withDirectives as v, vShow as _, createVNode as E } from "vue";
import { _ as L } from "../_plugin-vue_export-helper-dad06003.mjs";
const x = "cube-recycle-list", u = "scroll", f = "resize", M = {
  name: x,
  emits: [u, f],
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
    this.checkPromiseCompatibility(), this.$el.addEventListener(u, this._onScroll), window.addEventListener(f, this._onResize), this.load();
  },
  beforeUnmount() {
    this.$el.removeEventListener(u, this._onScroll), window.removeEventListener(f, this._onResize);
  },
  methods: {
    checkPromiseCompatibility() {
      T(window.Promise);
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
      let t, o = this.size, i = s * o, l = (s + 1) * o;
      for (t = i; t < l && !(e[t] && e[t].isTombstone); t++)
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
      for (let l = e; l < s; l++)
        i = t[l], !(i && i.loaded) && (this.setItem(l, this.list[l]), o.push(this.$nextTick().then(() => {
          this.updateItemHeight(l);
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
    CubeLoading: S
  }
}, w = { class: "cube-recycle-list" }, N = { class: "cube-recycle-list-main" }, C = { class: "cube-recycle-list-pool" }, $ = {
  ref: "tomb",
  class: "cube-recycle-list-item cube-recycle-list-invisible"
}, H = { class: "cube-recycle-list-loading-content" }, R = { class: "cube-recycle-list-noMore" }, B = /* @__PURE__ */ r("div", { class: "cube-recycle-list-fake" }, null, -1);
function F(e, s, t, o, i, l) {
  const I = z("cube-loading");
  return h(), c("div", w, [
    r("div", N, [
      r("div", {
        class: "cube-recycle-list-items",
        style: d({ height: i.heights + "px" })
      }, [
        (h(!0), c(g, null, b(l.visibleItems, (n) => (h(), c("div", {
          class: "cube-recycle-list-item",
          style: d({ transform: "translate(0," + n.top + "px)" })
        }, [
          t.infinite ? (h(), c("div", {
            key: 0,
            class: y({ "cube-recycle-list-transition": t.infinite }),
            style: d({ opacity: +!n.loaded })
          }, [
            a(e.$slots, "tombstone")
          ], 6)) : m("", !0),
          r("div", {
            class: y({ "cube-recycle-list-transition": t.infinite }),
            style: d({ opacity: n.loaded })
          }, [
            a(e.$slots, "item", {
              data: n.data
            })
          ], 6)
        ], 4))), 256)),
        r("div", C, [
          !t.infinite && i.preload ? (h(!0), c(g, { key: 0 }, b(i.items, (n, k) => v((h(), c("div", {
            class: "cube-recycle-list-item cube-recycle-list-invisible",
            ref_for: !0,
            ref: "preloads" + k
          }, [
            a(e.$slots, "item", {
              data: n.data
            })
          ], 512)), [
            [_, n && !n.isTombstone && !n.height]
          ])), 256)) : m("", !0),
          r("div", $, [
            a(e.$slots, "tombstone")
          ], 512)
        ])
      ], 4),
      !t.infinite && !i.noMore ? (h(), c("div", {
        key: 0,
        class: "cube-recycle-list-loading",
        style: d({ visibility: l.loading ? "visible" : "hidden" })
      }, [
        a(e.$slots, "spinner", {}, () => [
          r("div", H, [
            E(I, { class: "cube-recycle-list-spinner" })
          ])
        ])
      ], 4)) : m("", !0),
      v(r("div", R, [
        a(e.$slots, "noMore")
      ], 512), [
        [_, i.noMore]
      ])
    ]),
    B
  ]);
}
const p = /* @__PURE__ */ L(M, [["render", F]]);
p.install = function(e) {
  e.component(p.name, p);
};
export {
  p as default
};
