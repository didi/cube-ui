import { openBlock as l, createElementBlock as s, normalizeClass as d, createElementVNode as i, withDirectives as V, vModelRadio as y, renderSlot as c, toDisplayString as g, resolveComponent as v, Fragment as N, renderList as C, createBlock as G } from "vue";
import { _ as h } from "./_plugin-vue_export-helper-dad06003.mjs";
import { g as w } from "./group-col-19fd44a2.mjs";
const S = "cube-radio", n = "update:modelValue", E = {
  name: S,
  inject: {
    radioGroup: {
      default: null
    }
  },
  emits: [n],
  props: {
    modelValue: [String, Number],
    option: {
      type: [String, Object],
      required: !0
    },
    position: {
      type: String,
      default: "left"
    },
    hollowStyle: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      radioValue: this.modelValue
    };
  },
  created() {
    const o = this.radioGroup;
    o && o.radioValue !== void 0 && (this.radioValue = o.radioValue, this._cancelWatchGroup = this.$watch(
      () => o.radioValue,
      (e) => {
        this.radioValue = e;
      }
    ));
  },
  beforeUnmount() {
    this._cancelWatchGroup && this._cancelWatchGroup(), this._cancelWatchGroup = null;
  },
  watch: {
    modelValue(o) {
      this.radioValue = o;
    },
    radioValue(o) {
      typeof this.modelValue == "number" && (o = Number(o)), this.$emit(n, o), this.radioGroup && (this.radioGroup.radioValue = o);
    }
  },
  computed: {
    computedOption() {
      const o = this.option;
      return typeof o == "string" ? {
        value: o,
        label: o
      } : o;
    },
    _containerClass() {
      const o = this.computedOption;
      return {
        "cube-radio-hollow": this.hollowStyle,
        "cube-radio_selected": this.radioValue === o.value,
        "cube-radio_disabled": o.disabled,
        "border-right-1px": this.$parent.horizontal
      };
    },
    _wrapClass() {
      let o = this.$parent;
      if (!(o.horizontal || o.$props.colNum > 1))
        return "border-bottom-1px";
    }
  }
}, O = ["data-pos"], x = ["disabled", "value"], z = /* @__PURE__ */ i("span", { class: "cube-radio-ui cubeic-round-border" }, [
  /* @__PURE__ */ i("i")
], -1), B = { class: "cube-radio-label" };
function T(o, e, t, _, r, a) {
  return l(), s("div", {
    class: d(["cube-radio", a._containerClass]),
    "data-pos": t.position
  }, [
    i("label", {
      class: d(["cube-radio-wrap", a._wrapClass])
    }, [
      V(i("input", {
        class: "cube-radio-input",
        type: "radio",
        disabled: t.option.disabled,
        "onUpdate:modelValue": e[0] || (e[0] = (u) => r.radioValue = u),
        value: a.computedOption.value
      }, null, 8, x), [
        [y, r.radioValue]
      ]),
      z,
      c(o.$slots, "default", {}, () => [
        i("span", B, g(a.computedOption.label), 1)
      ])
    ], 2)
  ], 10, O);
}
const $ = /* @__PURE__ */ h(E, [["render", T]]);
const M = "cube-radio-group", p = "update:modelValue", R = {
  name: M,
  mixins: [w],
  provide() {
    return {
      radioGroup: this
    };
  },
  emits: [p],
  props: {
    modelValue: [String, Number],
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    position: {
      type: String,
      default: "left"
    },
    horizontal: {
      type: Boolean,
      default: !1
    },
    hollowStyle: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      radioValue: this.modelValue
    };
  },
  watch: {
    modelValue(o) {
      this.radioValue = o;
    },
    radioValue(o) {
      this.$emit(p, o);
    }
  },
  computed: {
    _groupClass() {
      if (!this.horizontal)
        return "border-top-1px border-bottom-1px";
    }
  },
  components: {
    CubeRadio: $
  }
}, U = ["data-horz", "data-col"];
function k(o, e, t, _, r, a) {
  const u = v("cube-radio");
  return l(), s("div", {
    class: d(["cube-radio-group", a._groupClass]),
    ref: "group",
    "data-horz": t.horizontal,
    "data-col": o.colNum > 1
  }, [
    c(o.$slots, "default", {}, () => [
      (l(!0), s(N, null, C(t.options, (m, b) => (l(), G(u, {
        key: b,
        option: m,
        position: t.position,
        "hollow-style": t.hollowStyle,
        modelValue: r.radioValue,
        "onUpdate:modelValue": e[0] || (e[0] = (f) => r.radioValue = f)
      }, null, 8, ["option", "position", "hollow-style", "modelValue"]))), 128))
    ])
  ], 10, U);
}
const j = /* @__PURE__ */ h(R, [["render", k]]);
export {
  $ as R,
  j as a
};
