import "./css.mjs";
import { C as H } from "../popup-e92a5a70.mjs";
import { S as I, a as C } from "../slide-8f851b5c.mjs";
import { C as y } from "../scroll-626bf378.mjs";
import { v as w } from "../visibility-5370f02a.mjs";
import { p as P } from "../popup-c9badb65.mjs";
import { i as u } from "../env-c05026db.mjs";
import { U as f } from "../constants-5ce69144.mjs";
import { resolveComponent as a, openBlock as d, createBlock as m, Transition as N, withCtx as o, withDirectives as D, createVNode as p, createElementVNode as t, renderSlot as b, createElementBlock as z, Fragment as V, renderList as $, createCommentVNode as M, toDisplayString as _, vShow as O } from "vue";
import { _ as B } from "../_plugin-vue_export-helper-dad06003.mjs";
import { c as X } from "../create-api-056c0420.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../deprecated-9057b427.mjs";
import "../debug-2fc173dc.mjs";
import "../loading-0018ccd1.mjs";
import "../dom-d693ece1.mjs";
import "../util-ec61f3da.mjs";
const A = "cube-image-preview", g = "change", S = "hide", L = {
  name: A,
  mixins: [w, P],
  emits: [g, S],
  props: {
    initialIndex: {
      type: Number,
      default: 0
    },
    imgs: {
      type: Array,
      default() {
        return [];
      }
    },
    loop: {
      type: Boolean,
      default: !0
    },
    speed: {
      type: Number,
      default: 400
    },
    preventDefault: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      currentPageIndex: this.initialIndex,
      options: {
        observeDOM: !1,
        bounce: {
          left: !0,
          right: !0
        },
        useTransition: u ? !1 : f,
        probeType: 3,
        preventDefault: this.preventDefault
      },
      scrollOptions: {
        useTransition: f,
        HWCompositing: u,
        observeDOM: !1,
        zoom: !0,
        bindToWrapper: !0,
        freeScroll: !0,
        scrollX: !0,
        scrollY: !0,
        probeType: 3,
        bounce: !1,
        click: !1,
        dblclick: !0,
        bounceTime: 300,
        preventDefault: this.preventDefault
      }
    };
  },
  watch: {
    initialIndex(e) {
      this.setPageIndex(e);
    }
  },
  methods: {
    show() {
      this.isVisible = !0, this.$nextTick(() => {
        this._listenSlide(), this._listenScroll();
      });
    },
    _listenSlide() {
      this.$nextTick(() => {
        const e = this.$refs.slide.slide;
        e.on("scrollStart", this.slideScrollStartHandler), e.on("scrollEnd", this.slideScrollEndHandler);
      });
    },
    _listenScroll() {
      this.$nextTick(() => {
        this.$refs.items.forEach((e) => {
          const i = e.scroll;
          i.on("zoomStart", this.zoomStartHandler.bind(this, i)), i.on("beforeScrollStart", this.beforeScrollHandler), i.on("scroll", this.checkBoundary.bind(this, i)), i.on("scrollEnd", this.scrollEndHandler.bind(this, i));
        });
      });
    },
    hide() {
      this.isVisible = !1, this.$emit(S);
    },
    prev() {
      const e = this.$refs.slide.slide;
      e && e.prev();
    },
    next() {
      const e = this.$refs.slide.slide;
      e && e.next();
    },
    goTo(e) {
      const i = this.$refs.slide.slide;
      i && i.goToPage(e, 0);
    },
    imgLoad(e) {
      this.isVisible && this.$refs.items && this.$refs.items[e].scroll.refresh();
    },
    setPageIndex(e) {
      if (this.currentPageIndex >= 0 && this.currentPageIndex !== e) {
        const i = this.$refs.items[this.currentPageIndex];
        if (i) {
          const s = i.scroll;
          s.scale !== 1 && (s.scale = 1, s.lastcale = 1, s.refresh());
        }
      }
      this.currentPageIndex = e;
    },
    slideChangeHandler(e) {
      this.setPageIndex(e), this.slideScrollEndHandler(), this.$emit(g, e);
    },
    slideScrollStartHandler() {
      const e = this.$refs.slide.slide;
      this._scrolling && !this._hasEnableSlide ? e.disable() : e.enable();
    },
    slideScrollEndHandler() {
      this.$refs.items.forEach((e) => {
        this.scrollEndHandler(e.scroll);
      });
    },
    _scroll(e) {
      const i = this.$refs.slide.slide;
      i.disable(), i.refresh(), e.enable();
    },
    _slide(e) {
      this.$refs.slide.slide.enable(), e.disable();
    },
    beforeScrollHandler() {
      clearTimeout(this.enableSlideTid);
    },
    scrollEndHandler(e) {
      clearTimeout(this.enableSlideTid), this.dblZooming && (this.dblZooming = !1, clearTimeout(this.clickTid)), this._hasEnableSlide = !1, this._scrolling = !1, e.enable(), this.enableSlideTid = setTimeout(() => {
        this.$refs.slide.slide.enable();
      });
    },
    checkBoundary(e, i) {
      e.distX && Math.abs(e.distX) > Math.abs(e.distY) ? (this._scrolling = !0, (e.distX > 0 ? i.x >= e.minScrollX : i.x <= e.maxScrollX) ? (this._hasEnableSlide = !0, this._slide(e)) : this._hasEnableSlide || this._scroll(e)) : e.distY && (this._scrolling = !0, this._scroll(e));
    },
    zoomStartHandler(e) {
      this._scroll(e);
    },
    dblclickHandler(e, i) {
      const s = this.$refs.items[e].scroll;
      this.dblZooming = !0, this.zoomTo(s, s.scale > 1 ? 1 : 2, i), s.disable();
    },
    itemClickHandler() {
      clearTimeout(this.clickTid), this.clickTid = setTimeout(() => {
        !this.dblZooming && this.hide();
      }, this.scrollOptions.bounceTime);
    },
    zoomTo(e, i, s) {
      e.zoomTo(i, s.pageX, s.pageY);
    }
  },
  components: {
    CubePopup: H,
    CubeSlide: I,
    CubeSlideItem: C,
    CubeScroll: y
  }
}, Y = { class: "cube-image-preview-container" }, Z = { class: "cube-image-preview-header" }, U = ["src", "onLoad"], W = /* @__PURE__ */ t("i", null, null, -1), F = { class: "cube-image-preview-footer" }, G = { class: "cube-image-preview-counter" };
function R(e, i, s, q, l, r) {
  const v = a("cube-scroll"), T = a("cube-slide-item"), x = a("cube-slide"), E = a("cube-popup");
  return d(), m(N, { name: "cube-image-preview-fade" }, {
    default: o(() => [
      D(p(E, {
        type: "image-preview",
        "z-index": e.zIndex,
        center: !1
      }, {
        default: o(() => [
          t("div", Y, [
            t("div", Z, [
              b(e.$slots, "header", { current: l.currentPageIndex })
            ]),
            e.isVisible ? (d(), m(x, {
              key: 0,
              ref: "slide",
              data: s.imgs,
              "initial-index": l.currentPageIndex,
              "auto-play": !1,
              loop: s.loop,
              speed: s.speed,
              options: l.options,
              onChange: r.slideChangeHandler
            }, {
              dots: o(() => [
                W
              ]),
              default: o(() => [
                (d(!0), z(V, null, $(s.imgs, (k, h) => (d(), m(T, { key: h }, {
                  default: o(() => [
                    t("div", {
                      class: "cube-image-preview-item",
                      onClick: i[0] || (i[0] = (...n) => r.itemClickHandler && r.itemClickHandler(...n))
                    }, [
                      p(v, {
                        ref_for: !0,
                        ref: "items",
                        options: l.scrollOptions,
                        onDblclick: (n) => r.dblclickHandler(h, n)
                      }, {
                        default: o(() => [
                          t("img", {
                            class: "cube-image-preview-img",
                            src: k,
                            onLoad: (n) => r.imgLoad(h)
                          }, null, 40, U)
                        ]),
                        _: 2
                      }, 1032, ["options", "onDblclick"])
                    ])
                  ]),
                  _: 2
                }, 1024))), 128))
              ]),
              _: 1
            }, 8, ["data", "initial-index", "loop", "speed", "options", "onChange"])) : M("", !0),
            t("div", F, [
              b(e.$slots, "footer", { current: l.currentPageIndex }, () => [
                t("span", G, _(l.currentPageIndex + 1) + "/" + _(s.imgs.length), 1)
              ])
            ])
          ])
        ]),
        _: 3
      }, 8, ["z-index"]), [
        [O, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const c = /* @__PURE__ */ B(L, [["render", R]]);
function j(e, i) {
  X(e, i, ["change", "hide"], !0);
}
c.install = function(e) {
  e.component(c.name, c), j(e, c);
};
export {
  c as default
};
