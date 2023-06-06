import "./css.mjs";
import { p } from "../dom-d693ece1.mjs";
import { f as S } from "../util-ec61f3da.mjs";
import { openBlock as s, createElementBlock as r, normalizeClass as c, renderSlot as u, createElementVNode as h, resolveComponent as $, Fragment as g, renderList as E, createBlock as N, createCommentVNode as x } from "vue";
import { _ as T } from "../_plugin-vue_export-helper-dad06003.mjs";
import "../env-c05026db.mjs";
const V = "cube-tab", w = {
  name: V,
  props: {
    label: {
      type: [String, Number],
      required: !0
    },
    modelValue: {
      type: [String, Number],
      default(e) {
        return e.label;
      }
    },
    icon: {
      type: String,
      default: ""
    }
  },
  mounted() {
    this.$parent.addTab(this);
  },
  destroyed() {
    this.$parent.removeTab(this);
  },
  computed: {
    isActive() {
      return this.$parent.modelValue === this.modelValue;
    }
  },
  methods: {
    handleClick(e) {
      this.$parent.trigger(this.modelValue);
    }
  }
}, C = ["innerHTML"];
function k(e, t, i, y, v, a) {
  return s(), r("div", {
    class: c(["cube-tab", { "cube-tab_active": a.isActive }]),
    onClick: t[0] || (t[0] = (...o) => a.handleClick && a.handleClick(...o))
  }, [
    u(e.$slots, "icon", {}, () => [
      h("i", {
        class: c(i.icon)
      }, null, 2)
    ]),
    u(e.$slots, "default", {}, () => [
      h("div", { innerHTML: i.label }, null, 8, C)
    ])
  ], 2);
}
const d = /* @__PURE__ */ T(w, [["render", k]]);
const z = "cube-tab-bar", m = "update:modelValue", _ = "change", b = "click", f = p("transform"), A = p("transition"), L = {
  name: z,
  components: {
    CubeTab: d
  },
  emits: [m, _, b],
  props: {
    modelValue: {
      type: [String, Number],
      required: !0
    },
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    inline: {
      type: Boolean,
      default: !1
    },
    showSlider: {
      type: Boolean,
      default: !1
    },
    useTransition: {
      type: Boolean,
      default: !0
    }
  },
  watch: {
    modelValue() {
      this._updateSliderStyle();
    }
  },
  created() {
    this.tabs = [];
  },
  mounted() {
    this._updateSliderStyle(), window.addEventListener("resize", this._resizeHandler);
  },
  activated() {
    window.addEventListener("resize", this._resizeHandler);
  },
  deactivated() {
    this._cleanUp();
  },
  beforeUnmount() {
    this._cleanUp();
  },
  methods: {
    addTab(e) {
      this.tabs.push(e);
    },
    removeTab(e) {
      const t = this.tabs.indexOf(e);
      t > -1 && this.tabs.splice(t, 1);
    },
    trigger(e) {
      this.$emit(b, e), e !== this.modelValue && [m, _].forEach((i) => {
        this.$emit(i, e);
      });
    },
    _updateSliderStyle() {
      if (!this.showSlider)
        return;
      const e = this.$refs.slider;
      this.$nextTick(() => {
        const { width: t, index: i } = this._getSliderWidthAndIndex();
        e.style.width = `${t}px`, this.setSliderTransform(this._getOffsetLeft(i));
      });
    },
    setSliderTransform(e) {
      const t = this.$refs.slider;
      typeof e == "number" && (e = `${e}px`), t && (this.useTransition && (t.style[A] = `${f} 0.2s linear`), t.style[f] = `translateX(${e}) translateZ(0)`);
    },
    _getSliderWidthAndIndex() {
      let e = 0, t = 0;
      return this.tabs.length > 0 && (t = S(this.tabs, (i) => i.modelValue === this.modelValue), e = this.tabs[t].$el.clientWidth), {
        width: e,
        index: t
      };
    },
    _getOffsetLeft(e) {
      return this.tabs[e].$el.offsetLeft || 0;
    },
    _resizeHandler() {
      clearTimeout(this._resizeTimer), this._resizeTimer = setTimeout(() => {
        this._updateSliderStyle();
      }, 60);
    },
    _cleanUp() {
      clearTimeout(this._resizeTimer), window.removeEventListener("resize", this._resizeHandler);
    }
  }
}, O = {
  key: 0,
  ref: "slider",
  class: "cube-tab-bar-slider"
};
function B(e, t, i, y, v, a) {
  const o = $("cube-tab");
  return s(), r("div", {
    class: c(["cube-tab-bar", { "cube-tab-bar_inline": i.inline }])
  }, [
    u(e.$slots, "default", {}, () => [
      (s(!0), r(g, null, E(i.data, (n, H) => (s(), N(o, {
        label: n.label,
        "model-value": n.value,
        icon: n.icon,
        key: n.value || n.label
      }, null, 8, ["label", "model-value", "icon"]))), 128))
    ]),
    i.showSlider ? (s(), r("div", O, null, 512)) : x("", !0)
  ], 2);
}
const l = /* @__PURE__ */ T(L, [["render", B]]);
l.install = function(e) {
  e.component(l.name, l), e.component(d.name, d);
};
l.Tab = d;
export {
  l as default
};
