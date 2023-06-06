import { B as x } from "./bscroll.esm-986d5802.mjs";
import { L as v } from "./loading-0018ccd1.mjs";
import { openBlock as a, createElementBlock as u, normalizeStyle as E, resolveComponent as m, createElementVNode as n, renderSlot as _, Fragment as N, renderList as M, toDisplayString as D, createVNode as b, createCommentVNode as y, withDirectives as p, vShow as d } from "vue";
import { _ as L } from "./_plugin-vue_export-helper-dad06003.mjs";
import { s as k, d as O, c as B } from "./deprecated-9057b427.mjs";
import { c as f } from "./dom-d693ece1.mjs";
import { U as I } from "./constants-5ce69144.mjs";
const Y = {
  props: {
    y: {
      type: Number,
      default: 0
    }
  },
  data() {
    return {
      width: 50,
      height: 80,
      ratio: 2
    };
  },
  computed: {
    distance() {
      return Math.max(0, Math.min(this.y * this.ratio, this.maxDistance));
    },
    style() {
      return `width:${this.width / this.ratio}px;height:${this.height / this.ratio}px`;
    }
  },
  mounted() {
    this.ratio = window.devicePixelRatio, this.width *= this.ratio, this.height *= this.ratio, this.initRadius = 18 * this.ratio, this.minHeadRadius = 12 * this.ratio, this.minTailRadius = 5 * this.ratio, this.initArrowRadius = 10 * this.ratio, this.minArrowRadius = 6 * this.ratio, this.arrowWidth = 3 * this.ratio, this.maxDistance = 40 * this.ratio, this.initCenterX = 25 * this.ratio, this.initCenterY = 25 * this.ratio, this.headCenter = {
      x: this.initCenterX,
      y: this.initCenterY
    }, this._draw();
  },
  methods: {
    _draw() {
      const t = this.$refs.bubble;
      let e = t.getContext("2d");
      e.clearRect(0, 0, t.width, t.height), this._drawBubble(e), this._drawArrow(e);
    },
    _drawBubble(t) {
      t.save(), t.beginPath();
      const e = this.distance / this.maxDistance, s = this.initRadius - (this.initRadius - this.minHeadRadius) * e;
      this.headCenter.y = this.initCenterY - (this.initRadius - this.minHeadRadius) * e, t.arc(this.headCenter.x, this.headCenter.y, s, 0, Math.PI, !0);
      const o = this.initRadius - (this.initRadius - this.minTailRadius) * e, l = {
        x: this.headCenter.x,
        y: this.headCenter.y + this.distance
      }, i = {
        x: l.x - o,
        y: l.y
      }, r = {
        x: i.x,
        y: i.y - this.distance / 2
      };
      t.quadraticCurveTo(r.x, r.y, i.x, i.y), t.arc(l.x, l.y, o, Math.PI, 0, !0);
      const c = {
        x: this.headCenter.x + s,
        y: this.headCenter.y
      }, h = {
        x: l.x + o,
        y: c.y + this.distance / 2
      };
      t.quadraticCurveTo(h.x, h.y, c.x, c.y), t.fillStyle = "rgb(170,170,170)", t.fill(), t.strokeStyle = "rgb(153,153,153)", t.stroke(), t.restore();
    },
    _drawArrow(t) {
      t.save(), t.beginPath();
      const e = this.distance / this.maxDistance, s = this.initArrowRadius - (this.initArrowRadius - this.minArrowRadius) * e;
      t.arc(this.headCenter.x, this.headCenter.y, s - (this.arrowWidth - e), -Math.PI / 2, 0, !0), t.arc(this.headCenter.x, this.headCenter.y, s, 0, Math.PI * 3 / 2, !1), t.lineTo(this.headCenter.x, this.headCenter.y - s - this.arrowWidth / 2 + e), t.lineTo(this.headCenter.x + this.arrowWidth * 2 - e * 2, this.headCenter.y - s + this.arrowWidth / 2), t.lineTo(this.headCenter.x, this.headCenter.y - s + this.arrowWidth * 3 / 2 - e), t.fillStyle = "rgb(255,255,255)", t.fill(), t.strokeStyle = "rgb(170,170,170)", t.stroke(), t.restore();
    }
  },
  watch: {
    y() {
      this._draw();
    }
  }
}, A = ["width", "height"];
function $(t, e, s, o, l, i) {
  return a(), u("canvas", {
    ref: "bubble",
    width: l.width,
    height: l.height,
    style: E(i.style)
  }, null, 12, A);
}
const W = /* @__PURE__ */ L(Y, [["render", $]]);
const X = "cube-scroll", F = "horizontal", P = "vertical", V = "Refresh success", z = 600, S = "click", R = "pulling-down", U = "pulling-up", w = "scroll", g = "before-scroll-start", C = "scroll-end", T = "none", j = "native", q = [w, g, C], G = {
  observeDOM: !0,
  click: !0,
  probeType: 1,
  scrollbar: !1,
  pullDownRefresh: !1,
  pullUpLoad: !1
}, K = {
  name: X,
  mixins: [k, O],
  provide() {
    return {
      parentScroll: this
    };
  },
  inject: {
    parentScroll: {
      default: null
    }
  },
  emits: [S, R, U, w, g, C],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    scrollEvents: {
      type: Array,
      default() {
        return [];
      },
      validator(t) {
        return t.every((e) => q.indexOf(e) !== -1);
      }
    },
    // TODO: plan to remove at 1.10.0
    listenScroll: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "scroll-events"
      }
    },
    listenBeforeScroll: {
      type: Boolean,
      default: void 0,
      deprecated: {
        replacedBy: "scroll-events"
      }
    },
    direction: {
      type: String,
      default: P
    },
    refreshDelay: {
      type: Number,
      default: 20
    },
    nestMode: {
      type: String,
      default: T
    }
  },
  data() {
    return {
      beforePullDown: !0,
      isPullingDown: !1,
      isPullUpLoad: !1,
      pullUpNoMore: !1,
      bubbleY: 0,
      pullDownStyle: "",
      pullDownStop: 40,
      pullDownHeight: 60,
      pullUpHeight: 0
    };
  },
  computed: {
    pullDownRefresh() {
      let t = this.options.pullDownRefresh;
      return t && (t === !0 && (t = {}), Object.assign({ stop: this.pullDownStop }, t));
    },
    pullUpLoad() {
      return this.options.pullUpLoad;
    },
    pullUpTxt() {
      const t = this.pullUpLoad, e = t && t.txt, s = e && e.more || "", o = e && e.noMore || "";
      return this.pullUpNoMore ? o : s;
    },
    refreshTxt() {
      const t = this.pullDownRefresh;
      return t && t.txt || V;
    },
    finalScrollEvents() {
      const t = this.scrollEvents.slice();
      return t.length || (this.listenScroll && t.push(w), this.listenBeforeScroll && t.push(g)), t;
    },
    needListenScroll() {
      return this.finalScrollEvents.indexOf(w) !== -1 || this.parentScroll;
    }
  },
  watch: {
    data: {
      handler() {
        setTimeout(() => {
          this.forceUpdate(!0);
        }, this.refreshDelay);
      },
      deep: !0
    },
    pullDownRefresh: {
      handler(t, e) {
        t && (this.scroll.openPullDown(t), e || (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler())), !t && e && (this.scroll.closePullDown(), this._offPullDownRefresh(), this._pullDownRefreshChangeHandler());
      },
      deep: !0
    },
    pullUpLoad: {
      handler(t, e) {
        t && (this.scroll.openPullUp(t), e || (this._onPullUpLoad(), this._pullUpLoadChangeHandler())), !t && e && (this.scroll.closePullUp(), this._offPullUpLoad(), this._pullUpLoadChangeHandler());
      },
      deep: !0
    }
  },
  activated() {
    this.enable();
  },
  deactivated() {
    this.disable();
  },
  mounted() {
    this.$nextTick(() => {
      this.initScroll();
    });
  },
  beforeUnmount() {
    this.destroy();
  },
  methods: {
    initScroll() {
      if (!this.$refs.wrapper)
        return;
      this._calculateMinHeight();
      let t = {
        scrollY: this.direction === P,
        scrollX: this.direction === F,
        probeType: this.needListenScroll ? 3 : 1,
        useTransition: I
      }, e = Object.assign({}, G, t, this.options);
      this.scroll = new x(this.$refs.wrapper, e), this.parentScroll && this.nestMode !== T && this._handleNestScroll(), this._listenScrollEvents(), this.pullDownRefresh && (this._onPullDownRefresh(), this._pullDownRefreshChangeHandler()), this.pullUpLoad && (this._onPullUpLoad(), this._pullUpLoadChangeHandler());
    },
    disable() {
      this.scroll && this.scroll.disable();
    },
    enable() {
      this.scroll && this.scroll.enable();
    },
    refresh() {
      this._calculateMinHeight(), this.scroll && this.scroll.refresh();
    },
    destroy() {
      this.scroll && this.scroll.destroy(), this.scroll = null;
    },
    scrollTo() {
      this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments);
    },
    scrollToElement() {
      this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments);
    },
    clickItem(t) {
      this.$emit(S, t);
    },
    async forceUpdate(t = !1, e = !1) {
      this.isPullDownUpdating || (this.pullDownRefresh && this.isPullingDown ? (this.isPullingDown = !1, this.isPullDownUpdating = !0, await this._waitFinishPullDown(), this.isPullDownUpdating = !1, await this._waitResetPullDown(t)) : this.pullUpLoad && this.isPullUpLoad && (this.isPullUpLoad = !1, this.scroll.finishPullUp(), this.pullUpNoMore = !t || e), t && this.refresh());
    },
    resetPullUpTxt() {
      this.pullUpNoMore = !1;
    },
    _listenScrollEvents() {
      this.finalScrollEvents.forEach((t) => {
        this.scroll.on(B(t), (...e) => {
          this.$emit(t, ...e);
        });
      });
    },
    _handleNestScroll() {
      this.$nextTick(() => {
        const t = this.scroll, e = this.parentScroll.scroll;
        [t, e].forEach((o, l, i) => {
          o.on("touchEnd", () => {
            e.enable(), t.enable(), t.initiated = !1;
          }), o.on("beforeScrollStart", () => {
            this.touchStartMoment = !0;
            const r = i[(l + 1) % 2];
            r.stop(), r.resetPosition();
          });
        }), t.on("scroll", (o) => {
          if (!t.initiated || t.isInTransition || this.nestMode === j && !this.touchStartMoment)
            return;
          this._checkReachBoundary(o) ? (t.resetPosition(), t.disable(), e.pointX = t.pointX, e.pointY = t.pointY, e.enable()) : e.disable(), this.touchStartMoment = !1;
        });
      });
    },
    _checkReachBoundary(t) {
      const e = this.scroll.distX, s = this.scroll.distY, o = e > 0 ? t.x >= this.scroll.minScrollX : e < 0 ? t.x <= this.scroll.maxScrollX : !1, l = s > 0 ? t.y >= this.scroll.minScrollY : s < 0 ? t.y <= this.scroll.maxScrollY : !1, i = this.scroll.freeScroll, r = this.scroll.hasHorizontalScroll, c = this.scroll.hasVerticalScroll;
      if (!r && !c)
        return !0;
      if (i)
        return o || l;
      let h;
      return this.scroll.movingDirectionX ? h = o : this.scroll.movingDirectionY && (h = l), h;
    },
    _calculateMinHeight() {
      const { wrapper: t, listWrapper: e } = this.$refs, s = this.pullUpLoad, o = this.pullDownRefresh;
      let l = 0;
      (o || s) && (l = f(t).height + 1, s && s.visible && (l -= this.pullUpHeight)), e.style.minHeight = `${l}px`;
    },
    _onPullDownRefresh() {
      this.scroll.on("pullingDown", this._pullDownHandle), this.scroll.on("scroll", this._pullDownScrollHandle);
    },
    _offPullDownRefresh() {
      this.scroll.off("pullingDown", this._pullDownHandle), this.scroll.off("scroll", this._pullDownScrollHandle);
    },
    _pullDownRefreshChangeHandler() {
      this.$nextTick(() => {
        this._getPullDownEleHeight(), this._calculateMinHeight();
      });
    },
    _pullDownHandle() {
      this.resetPullDownTimer && clearTimeout(this.resetPullDownTimer), this.beforePullDown = !1, this.isPullingDown = !0, this.$emit(R);
    },
    _pullDownScrollHandle(t) {
      this.beforePullDown ? (this.bubbleY = Math.max(0, t.y - this.pullDownHeight), this.pullDownStyle = `top:${Math.min(t.y - this.pullDownHeight, 0)}px`) : (this.bubbleY = 0, this.pullDownStyle = `top:${Math.min(t.y - this.pullDownStop, 0)}px`);
    },
    _pullUpLoadChangeHandler() {
      this.$nextTick(() => {
        this._getPullUpEleHeight(), this._calculateMinHeight();
      });
    },
    _onPullUpLoad() {
      this.scroll.on("pullingUp", this._pullUpHandle);
    },
    _offPullUpLoad() {
      this.scroll.off("pullingUp", this._pullUpHandle);
    },
    _pullUpHandle() {
      this.isPullUpLoad = !0, this.$emit(U);
    },
    _waitFinishPullDown(t) {
      const { stopTime: e = z } = this.pullDownRefresh;
      return new Promise((s) => {
        setTimeout(() => {
          this.scroll.finishPullDown(), s();
        }, e);
      });
    },
    _waitResetPullDown(t) {
      return new Promise((e) => {
        this.resetPullDownTimer = setTimeout(() => {
          this.pullDownStyle = `top: -${this.pullDownHeight}px`, this.beforePullDown = !0, e();
        }, this.scroll.options.bounceTime);
      });
    },
    _getPullDownEleHeight() {
      let t = this.$refs.pulldown;
      t && (t = t.children[0], this.pullDownHeight = f(t).height, this.beforePullDown = !1, this.isPullingDown = !0, this.$nextTick(() => {
        this.pullDownStop = f(t).height, this.beforePullDown = !0, this.isPullingDown = !1;
      }));
    },
    _getPullUpEleHeight() {
      const e = this.$refs.listWrapper.nextElementSibling;
      if (!e) {
        this.pullUpHeight = 0;
        return;
      }
      this.pullUpHeight = f(e).height;
    }
  },
  components: {
    Loading: v,
    Bubble: W
  }
}, J = {
  ref: "wrapper",
  class: "cube-scroll-wrapper"
}, Q = { class: "cube-scroll-content" }, Z = {
  ref: "listWrapper",
  class: "cube-scroll-list-wrapper"
}, tt = { class: "cube-scroll-list" }, et = ["onClick"], lt = {
  key: 0,
  class: "cube-pullup-wrapper"
}, st = {
  key: 0,
  class: "before-trigger"
}, it = {
  key: 1,
  class: "after-trigger"
}, ot = {
  key: 0,
  class: "cube-pulldown",
  ref: "pulldown"
}, rt = { class: "before-trigger" }, nt = { class: "after-trigger" }, ht = { class: "loading" }, at = { class: "cube-pulldown-loaded" };
function ut(t, e, s, o, l, i) {
  const r = m("loading"), c = m("bubble");
  return a(), u("div", J, [
    n("div", Q, [
      n("div", Z, [
        _(t.$slots, "default", {}, () => [
          n("ul", tt, [
            (a(!0), u(N, null, M(s.data, (h, H) => (a(), u("li", {
              class: "cube-scroll-item border-bottom-1px",
              key: H,
              onClick: (ct) => i.clickItem(h)
            }, D(h), 9, et))), 128))
          ])
        ])
      ], 512),
      _(t.$slots, "pullup", {
        pullUpLoad: i.pullUpLoad,
        isPullUpLoad: l.isPullUpLoad
      }, () => [
        i.pullUpLoad ? (a(), u("div", lt, [
          l.isPullUpLoad ? (a(), u("div", it, [
            b(r)
          ])) : (a(), u("div", st, [
            n("span", null, D(i.pullUpTxt), 1)
          ]))
        ])) : y("", !0)
      ])
    ]),
    i.pullDownRefresh ? (a(), u("div", ot, [
      _(t.$slots, "pulldown", {
        pullDownRefresh: i.pullDownRefresh,
        pullDownStyle: l.pullDownStyle,
        beforePullDown: l.beforePullDown,
        isPullingDown: l.isPullingDown,
        bubbleY: l.bubbleY
      }, () => [
        n("div", {
          class: "cube-pulldown-wrapper",
          style: E(l.pullDownStyle)
        }, [
          p(n("div", rt, [
            b(c, {
              y: l.bubbleY,
              class: "bubble"
            }, null, 8, ["y"])
          ], 512), [
            [d, l.beforePullDown]
          ]),
          p(n("div", nt, [
            p(n("div", ht, [
              b(r)
            ], 512), [
              [d, l.isPullingDown]
            ]),
            p(n("div", at, [
              n("span", null, D(i.refreshTxt), 1)
            ], 512), [
              [d, !l.isPullingDown]
            ])
          ], 512), [
            [d, !l.beforePullDown]
          ])
        ], 4)
      ])
    ], 512)) : y("", !0)
  ], 512);
}
const gt = /* @__PURE__ */ L(K, [["render", ut]]);
export {
  gt as C
};
