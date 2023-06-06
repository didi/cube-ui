import { openBlock as o, createElementBlock as n, renderSlot as _, createElementVNode as p, resolveComponent as T, Fragment as f, renderList as m, createBlock as S, normalizeClass as I, createCommentVNode as $ } from "vue";
import { _ as P } from "./_plugin-vue_export-helper-dad06003.mjs";
import { B as x } from "./bscroll.esm-986d5802.mjs";
import { s as N, d as b } from "./deprecated-9057b427.mjs";
const C = "cube-slide-item", w = {
  name: C,
  props: {
    item: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, z = { class: "cube-slide-item" }, B = ["href"], D = ["src"];
function L(e, t, s, d, i, r) {
  return o(), n("div", z, [
    _(e.$slots, "default", {}, () => [
      p("a", {
        href: s.item.url
      }, [
        p("img", {
          src: s.item.image
        }, null, 8, D)
      ], 8, B)
    ])
  ]);
}
const O = /* @__PURE__ */ P(w, [["render", L]]);
const k = "cube-slide", y = "change", g = "click", E = "scroll-end", v = "scroll", l = "horizontal", u = "vertical", V = {
  momentum: !1,
  click: !0,
  observeDOM: !1,
  bounce: !1
}, R = {
  name: k,
  mixins: [N, b],
  emits: [y, g, E, v],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    initialIndex: {
      type: Number,
      default: 0
    },
    loop: {
      type: Boolean,
      default: !0
    },
    threshold: {
      type: Number,
      default: 0.3
    },
    speed: {
      type: Number,
      default: 400
    },
    autoPlay: {
      type: Boolean,
      default: !0
    },
    interval: {
      type: Number,
      default: 4e3
    },
    showDots: {
      type: Boolean,
      default: !0
    },
    direction: {
      type: String,
      default: l
    },
    // The props allowVertical, stopPropagation could be removed in next minor version.
    allowVertical: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    stopPropagation: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "options"
      }
    },
    refreshResetCurrent: {
      type: Boolean,
      default: !0
    }
  },
  data() {
    return {
      dots: 0,
      currentPageIndex: this.initialIndex || 0
    };
  },
  created() {
    this._dataWatchers = [], ["data", "loop", "autoPlay", "options.eventPassthrough", "threshold", "speed", "allowVertical"].forEach((t) => {
      this._dataWatchers.push(this.$watch(t, () => {
        console.log(t), t === "data" && this._destroy(), this.$nextTick(() => {
          this.refresh();
        });
      }, { deep: !0 }));
    });
  },
  watch: {
    initialIndex(e) {
      e !== this.currentPageIndex && this._goToPage(e);
    }
  },
  methods: {
    clickItem(e, t) {
      this.$emit(g, e, t);
    },
    refresh() {
      this.slide !== null && (this._destroy(), clearTimeout(this._timer), this.slide && this.refreshResetCurrent && (this.currentPageIndex = 0), this._updateSlideDom(), this.showDots && this._initDots(), this.currentPageIndex >= this.dots.length && (this.currentPageIndex = this.dots.length - 1), this._initSlide(), this.autoPlay && this._play());
    },
    _destroy() {
      this.slide && this.slide.destroy();
    },
    _refresh() {
      this._updateSlideDom(!0), this.slide.refresh();
    },
    _updateSlideDom(e) {
      this._setSlideStyle(e);
    },
    _setSlideStyle(e) {
      this.children = this.$refs.slideGroup.children;
      const t = this.direction === l ? "width" : "height";
      let s = 0;
      const d = this.$refs.slide[`client${t[0].toUpperCase() + t.slice(1)}`], i = this.children.length;
      for (let r = 0; r < i; r++) {
        const h = this.children[r];
        h.style[t] = d + "px", s += d;
      }
      this.loop && !e && i > 1 && (s += 2 * d), this.$refs.slideGroup.style[t] = s + "px";
    },
    _initSlide() {
      const e = this.direction === l && this.allowVertical ? u : "", t = Object.assign({}, V, {
        scrollX: this.direction === l,
        scrollY: this.direction === u,
        eventPassthrough: e,
        snap: {
          loop: this.loop,
          threshold: this.threshold,
          speed: this.speed
        },
        stopPropagation: this.stopPropagation
      }, this.options);
      this.slide = new x(this.$refs.slide, t), this.slide.on("scrollEnd", this._onScrollEnd), this._goToPage(this.currentPageIndex, 0), this.options.listenScroll && this.options.probeType === 3 && this.slide.on("scroll", this._onScroll);
      const s = this.$refs.slide;
      s.removeEventListener("touchend", this._touchEndEvent, !1), this._touchEndEvent = () => {
        this.autoPlay && this._play();
      }, s.addEventListener("touchend", this._touchEndEvent, !1), this.slide.on("beforeScrollStart", () => {
        this.autoPlay && clearTimeout(this._timer);
      });
    },
    _onScrollEnd() {
      const { pageX: e, pageY: t } = this.slide.getCurrentPage();
      let s = this.direction === l ? e : t;
      this.currentPageIndex !== s && (this.currentPageIndex = s, this.$emit(y, s)), this.$emit(E, s), this.autoPlay && this._play();
    },
    _onScroll(e) {
      this.$emit(v, e);
    },
    _initDots() {
      this.dots = new Array(this.children.length);
    },
    _play() {
      clearTimeout(this._timer), this._timer = setTimeout(() => {
        this.slide.next();
      }, this.interval);
    },
    _deactivated() {
      clearTimeout(this._timer), clearTimeout(this._resizeTimer), window.removeEventListener("resize", this._resizeHandler);
      const e = this.$refs.slide;
      e && e.removeEventListener("touchend", this._touchEndEvent, !1);
    },
    _resizeHandler() {
      this.slide && (clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(() => {
        this.slide.isInTransition ? this._onScrollEnd() : this.autoPlay && this._play(), this._refresh();
      }, 60));
    },
    _goToPage(e, t) {
      this.direction === l ? this.slide && this.slide.goToPage(e, 0, t) : this.direction === u && this.slide && this.slide.goToPage(0, e, t);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.refresh();
    }), window.addEventListener("resize", this._resizeHandler);
  },
  activated() {
    this.autoPlay && this._play(), window.addEventListener("resize", this._resizeHandler);
  },
  deactivated() {
    this._deactivated();
  },
  destroyed() {
    this._deactivated(), this._destroy(), this.slide = null, this._dataWatchers.forEach((e) => {
      e();
    }), this._dataWatchers = null;
  },
  components: {
    CubeSlideItem: O
  }
}, M = {
  class: "cube-slide",
  ref: "slide"
}, A = {
  class: "cube-slide-group",
  ref: "slideGroup"
}, H = {
  key: 0,
  class: "cube-slide-dots"
};
function G(e, t, s, d, i, r) {
  const h = T("cube-slide-item");
  return o(), n("div", M, [
    p("div", A, [
      _(e.$slots, "default", {}, () => [
        (o(!0), n(f, null, m(s.data, (c, a) => (o(), S(h, {
          key: a,
          onClick: (W) => r.clickItem(c, a),
          item: c
        }, null, 8, ["onClick", "item"]))), 128))
      ])
    ], 512),
    s.showDots ? (o(), n("div", H, [
      _(e.$slots, "dots", {
        current: i.currentPageIndex,
        dots: i.dots
      }, () => [
        (o(!0), n(f, null, m(i.dots, (c, a) => (o(), n("span", {
          class: I({ active: i.currentPageIndex === a }),
          key: a
        }, null, 2))), 128))
      ])
    ])) : $("", !0)
  ], 512);
}
const Y = /* @__PURE__ */ P(R, [["render", G]]);
export {
  Y as S,
  O as a
};
