import { f as p } from "./util-ec61f3da.mjs";
import { l as _ } from "./locale-72b46132.mjs";
import { openBlock as c, createElementBlock as l, normalizeClass as x, toDisplayString as a, createElementVNode as f } from "vue";
import { _ as m } from "./_plugin-vue_export-helper-dad06003.mjs";
const T = "cube-select", n = "change", r = "update:modelValue", o = "picker-show", d = "picker-hide", k = {
  name: T,
  mixins: [_],
  emits: [n, r, o, d],
  props: {
    options: {
      type: Array,
      default() {
        return [];
      }
    },
    modelValue: null,
    placeholder: {
      type: String,
      default: ""
    },
    autoPop: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    title: {
      type: String,
      default: ""
    },
    cancelTxt: {
      type: String,
      default: ""
    },
    confirmTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      active: !1,
      picker: null
    };
  },
  computed: {
    adaptOptions() {
      return [this.options.map((e) => (typeof e != "object" && (e = {
        value: e,
        text: e
      }), e))];
    },
    valueIndex() {
      const e = this.modelValue, t = p(this.adaptOptions[0], (s) => s.value === e);
      return this.picker && this.picker.setData(this.adaptOptions, t !== -1 ? [t] : [0]), t;
    },
    selectedIndex() {
      return this.valueIndex !== -1 ? [this.valueIndex] : [0];
    },
    selectedText() {
      return this.valueIndex !== -1 ? this.adaptOptions[0][this.valueIndex].text : "";
    },
    _placeholder() {
      return this.placeholder || this.$t("selectText");
    },
    _title() {
      return this.title || this.$t("selectText");
    },
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    },
    _confirmTxt() {
      return this.confirmTxt || this.$t("ok");
    }
  },
  created() {
    this.picker = this.$createPicker({
      title: this._title,
      data: this.adaptOptions,
      selectedIndex: this.selectedIndex,
      cancelTxt: this._cancelTxt,
      confirmTxt: this._confirmTxt,
      onSelect: this.selectHandler,
      onCancel: this.hided
    }), this.autoPop && this.showPicker();
  },
  methods: {
    showPicker() {
      this.disabled || (this.picker.show(), this.active = !0, this.$emit(o));
    },
    hided() {
      this.active = !1, this.$emit(d);
    },
    selectHandler(e, t, s) {
      this.hided(), e[0] !== this.modelValue && (this.$emit(r, e[0]), this.$emit(n, e[0], t[0], s[0]));
    }
  }
}, v = {
  key: 0,
  class: "cube-select-text"
}, E = {
  key: 1,
  class: "cube-select-placeholder"
}, y = /* @__PURE__ */ f("i", { class: "cube-select-icon" }, null, -1);
function I(e, t, s, b, h, i) {
  return c(), l("div", {
    class: x(["cube-select", { "cube-select_active": h.active, "cube-select_disabled": s.disabled }]),
    onClick: t[0] || (t[0] = (...u) => i.showPicker && i.showPicker(...u))
  }, [
    i.selectedText ? (c(), l("span", v, a(i.selectedText), 1)) : (c(), l("span", E, a(i._placeholder), 1)),
    y
  ], 2);
}
const g = /* @__PURE__ */ m(k, [["render", I]]);
export {
  g as S
};
