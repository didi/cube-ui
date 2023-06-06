import "./css.mjs";
import { openBlock as o, createElementBlock as h, normalizeClass as f, renderSlot as p, createElementVNode as E, resolveComponent as y, withModifiers as d, Fragment as x, renderList as V, createBlock as b } from "vue";
const _ = (e, t) => {
  const a = e.__vccOpts || e;
  for (const [r, m] of t)
    a[r] = m;
  return a;
}, M = "cube-rate-item", N = {
  name: M,
  props: {
    index: {
      type: Number,
      default: 0
    }
  }
}, T = /* @__PURE__ */ E("div", { class: "cube-rate-item-def" }, null, -1);
function O(e, t, a, r, m, n) {
  return o(), h("li", {
    class: f(["cube-rate-item", { "cube-rate-item_active": a.index <= e.$parent.tempValue }])
  }, [
    p(e.$slots, "default", {}, () => [
      T
    ])
  ], 2);
}
const i = /* @__PURE__ */ _(N, [["render", O]]);
const C = "cube-rate", c = "update:modelValue", l = "mouse", P = {
  name: C,
  emits: [c],
  props: {
    modelValue: {
      type: Number,
      default: 0
    },
    max: {
      type: Number,
      default: 5
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    justify: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      tempValue: this.modelValue
    };
  },
  created() {
    this.mousePressed = !1;
  },
  computed: {
    rateClass() {
      return this.justify && "cube-rate-justify";
    }
  },
  watch: {
    modelValue(e) {
      e !== this.tempValue && (this.tempValue = e);
    }
  },
  methods: {
    handleStart(e) {
      if (!this.disabled) {
        e.type.indexOf(l) > -1 && (this.mousePressed = !0, document.addEventListener("mouseup", this.handleEnd), document.addEventListener("mousemove", this.handleMove));
        const t = this.$refs.rateContainer.getBoundingClientRect();
        this.left = t.left, this.containerWidth = t.width;
      }
    },
    handleMove(e) {
      !this.disabled && (e.type.indexOf(l) === -1 || this.mousePressed) && this.computeTempValue(e.type.indexOf(l) === -1 ? e.touches[0] : e);
    },
    handleEnd(e) {
      !this.disabled && (e.type.indexOf(l) === -1 || this.mousePressed) && (e.type.indexOf(l) > -1 && (this.mousePressed = !1, document.removeEventListener("mouseup", this.handleEnd), document.removeEventListener("mousemove", this.handleMove)), this.computeTempValue(e.type.indexOf(l) > -1 ? e : e.changedTouches[0]), this.$emit(c, this.tempValue));
    },
    computeTempValue(e) {
      let t = Math.ceil((e.clientX - this.left) / this.containerWidth * this.max);
      t > 0 && t <= this.max ? this.tempValue = t : t <= 0 ? this.tempValue = 0 : this.tempValue = this.max;
    }
  },
  components: {
    CubeRateItem: i
  }
};
function g(e, t, a, r, m, n) {
  const v = y("cube-rate-item");
  return o(), h("ul", {
    ref: "rateContainer",
    class: f(["cube-rate", n.rateClass]),
    onTouchstart: t[0] || (t[0] = d((...s) => n.handleStart && n.handleStart(...s), ["stop"])),
    onTouchmove: t[1] || (t[1] = d((...s) => n.handleMove && n.handleMove(...s), ["stop", "prevent"])),
    onTouchend: t[2] || (t[2] = d((...s) => n.handleEnd && n.handleEnd(...s), ["stop"])),
    onMousedown: t[3] || (t[3] = d((...s) => n.handleStart && n.handleStart(...s), ["stop"])),
    onMousemove: t[4] || (t[4] = d((...s) => n.handleMove && n.handleMove(...s), ["stop"])),
    onMouseup: t[5] || (t[5] = d((...s) => n.handleEnd && n.handleEnd(...s), ["stop"]))
  }, [
    p(e.$slots, "default", {}, () => [
      (o(!0), h(x, null, V(a.max, (s) => (o(), b(v, {
        key: s,
        index: s
      }, null, 8, ["index"]))), 128))
    ])
  ], 34);
}
const u = /* @__PURE__ */ _(P, [["render", g]]);
u.install = function(e) {
  e.component(u.name, u), e.component(i.name, i);
};
u.Item = i;
export {
  u as default
};
