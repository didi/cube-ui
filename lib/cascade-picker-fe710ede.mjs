import { b as o, p as h, P as k } from "./api-39513968.mjs";
import { v as m } from "./visibility-5370f02a.mjs";
import { p as u } from "./popup-c9badb65.mjs";
import { l as f } from "./locale-72b46132.mjs";
import { resolveComponent as x, openBlock as b, createBlock as C } from "vue";
import { _ as D } from "./_plugin-vue_export-helper-dad06003.mjs";
const _ = "cube-cascade-picker", n = "select", l = "cancel", r = "change", g = {
  name: _,
  mixins: [m, u, o, h, f],
  emits: [n, l, r],
  props: {
    async: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      cascadeData: this.data.slice(),
      pickerSelectedIndex: this.selectedIndex.slice(),
      pickerData: [],
      pending: !1
    };
  },
  created() {
    this._updatePickerData();
  },
  methods: {
    setData(e, i = []) {
      this.pending = !1, this.cascadeData = e.slice(), this.pickerSelectedIndex = i.slice(), this._updatePickerData();
    },
    _pickerSelect(e, i, t) {
      this.$emit(n, e, i, t);
    },
    _pickerCancel() {
      this.$emit(l);
    },
    _pickerChange(e, i) {
      i !== this.pickerSelectedIndex[e] && (this.pickerSelectedIndex.splice(e, 1, i), this.async ? this.pending = e !== this.pickerData.length - 1 : this._updatePickerData(e + 1)), this.$emit(r, e, i);
    },
    _updatePickerData(e = 0) {
      let i = this.cascadeData, t = 0;
      for (; i; ) {
        if (t >= e) {
          let s = [];
          i.forEach((c) => {
            s.push({
              value: c[this.valueKey],
              text: c[this.textKey],
              order: c[this.orderKey]
            });
          }), this.pickerData[t] = s, this.pickerSelectedIndex[t] = e === 0 ? this.pickerSelectedIndex[t] < i.length && this.pickerSelectedIndex[t] || 0 : this.$refs.picker.refillColumn(t, s);
        }
        i = i.length ? i[this.pickerSelectedIndex[t]].children : null, t++;
      }
      t < this.pickerData.length && this.pickerData.splice(t, this.pickerData.length - t), this.pickerData = this.pickerData.slice();
    }
  },
  components: {
    CubePicker: k
  }
};
function S(e, i, t, s, c, a) {
  const p = x("cube-picker");
  return b(), C(p, {
    ref: "picker",
    visible: e.isVisible,
    "onUpdate:visible": i[0] || (i[0] = (d) => e.isVisible = d),
    data: c.pickerData,
    "selected-index": c.pickerSelectedIndex,
    pending: c.pending,
    title: e.title,
    subtitle: e.subtitle,
    "z-index": e.zIndex,
    "cancel-txt": e._cancelTxt,
    "confirm-txt": e._confirmTxt,
    "swipe-time": e.swipeTime,
    "mask-closable": e.maskClosable,
    onSelect: a._pickerSelect,
    onCancel: a._pickerCancel,
    onChange: a._pickerChange
  }, null, 8, ["visible", "data", "selected-index", "pending", "title", "subtitle", "z-index", "cancel-txt", "confirm-txt", "swipe-time", "mask-closable", "onSelect", "onCancel", "onChange"]);
}
const y = /* @__PURE__ */ D(g, [["render", S]]);
export {
  y as C
};
