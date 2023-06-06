import { openBlock as l, createElementBlock as o, normalizeClass as r, renderSlot as m, createElementVNode as _, resolveComponent as v, withModifiers as a, Fragment as E, renderList as y, createBlock as x } from "vue";
import { _ as h } from "./_plugin-vue_export-helper-dad06003.mjs";
const V = "cube-rate-item", b = {
  name: V,
  props: {
    index: {
      type: Number,
      default: 0
    }
  }
}, M = /* @__PURE__ */ _("div", { class: "cube-rate-item-def" }, null, -1);
function N(e, t, u, f, p, s) {
  return l(), o("li", {
    class: r(["cube-rate-item", { "cube-rate-item_active": u.index <= e.$parent.tempValue }])
  }, [
    m(e.$slots, "default", {}, () => [
      M
    ])
  ], 2);
}
const T = /* @__PURE__ */ h(b, [["render", N]]);
const O = "cube-rate", i = "update:modelValue", d = "mouse", C = {
  name: O,
  emits: [i],
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
        e.type.indexOf(d) > -1 && (this.mousePressed = !0, document.addEventListener("mouseup", this.handleEnd), document.addEventListener("mousemove", this.handleMove));
        const t = this.$refs.rateContainer.getBoundingClientRect();
        this.left = t.left, this.containerWidth = t.width;
      }
    },
    handleMove(e) {
      !this.disabled && (e.type.indexOf(d) === -1 || this.mousePressed) && this.computeTempValue(e.type.indexOf(d) === -1 ? e.touches[0] : e);
    },
    handleEnd(e) {
      !this.disabled && (e.type.indexOf(d) === -1 || this.mousePressed) && (e.type.indexOf(d) > -1 && (this.mousePressed = !1, document.removeEventListener("mouseup", this.handleEnd), document.removeEventListener("mousemove", this.handleMove)), this.computeTempValue(e.type.indexOf(d) > -1 ? e : e.changedTouches[0]), this.$emit(i, this.tempValue));
    },
    computeTempValue(e) {
      let t = Math.ceil((e.clientX - this.left) / this.containerWidth * this.max);
      t > 0 && t <= this.max ? this.tempValue = t : t <= 0 ? this.tempValue = 0 : this.tempValue = this.max;
    }
  },
  components: {
    CubeRateItem: T
  }
};
function P(e, t, u, f, p, s) {
  const c = v("cube-rate-item");
  return l(), o("ul", {
    ref: "rateContainer",
    class: r(["cube-rate", s.rateClass]),
    onTouchstart: t[0] || (t[0] = a((...n) => s.handleStart && s.handleStart(...n), ["stop"])),
    onTouchmove: t[1] || (t[1] = a((...n) => s.handleMove && s.handleMove(...n), ["stop", "prevent"])),
    onTouchend: t[2] || (t[2] = a((...n) => s.handleEnd && s.handleEnd(...n), ["stop"])),
    onMousedown: t[3] || (t[3] = a((...n) => s.handleStart && s.handleStart(...n), ["stop"])),
    onMousemove: t[4] || (t[4] = a((...n) => s.handleMove && s.handleMove(...n), ["stop"])),
    onMouseup: t[5] || (t[5] = a((...n) => s.handleEnd && s.handleEnd(...n), ["stop"]))
  }, [
    m(e.$slots, "default", {}, () => [
      (l(!0), o(E, null, y(u.max, (n) => (l(), x(c, {
        key: n,
        index: n
      }, null, 8, ["index"]))), 128))
    ])
  ], 34);
}
const B = /* @__PURE__ */ h(C, [["render", P]]);
export {
  B as R,
  T as a
};
