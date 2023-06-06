import "./css.mjs";
import { p as x, P as n, a as k } from "../api-39513968.mjs";
import { C as c } from "../cascade-picker-fe710ede.mjs";
import { v as T } from "../visibility-5370f02a.mjs";
import { p as _ } from "../popup-c9badb65.mjs";
import { l as E, L as P } from "../locale-72b46132.mjs";
import { openBlock as a, createElementBlock as h, Fragment as b, renderList as C, createBlock as V, resolveDynamicComponent as g, mergeProps as N } from "vue";
import { _ as v } from "../_plugin-vue_export-helper-dad06003.mjs";
import { a as w } from "../api-5cf76254.mjs";
import { c as y } from "../create-api-056c0420.mjs";
import "../bscroll.esm-986d5802.mjs";
import "../popup-e92a5a70.mjs";
import "../constants-5ce69144.mjs";
import "../env-c05026db.mjs";
import "../util-ec61f3da.mjs";
import "../date-7a142ee6.mjs";
import "../debug-2fc173dc.mjs";
const I = "cube-segment-picker", m = "next", d = "prev", u = "select", f = "cancel", p = "change", S = {
  name: I,
  mixins: [T, _, x, E],
  emits: [m, d, u, f, p],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    nextTxt: {
      type: String,
      default: ""
    },
    prevTxt: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      current: 0,
      selectedVal: [],
      selectedIndex: [],
      selectedText: []
    };
  },
  computed: {
    currentPicker() {
      for (let e = 0; e < this.data.length; e++) {
        let r = this.$refs.pickers[e];
        if (r.$attrs.index === this.current)
          return r;
      }
    },
    _nextTxt() {
      return this.nextTxt || this.$t("next");
    },
    _prevTxt() {
      return this.prevTxt || this.$t("prev");
    }
  },
  watch: {
    data() {
      this.current = 0, this.selectedVal = [], this.selectedIndex = [], this.selectedText = [];
    }
  },
  methods: {
    show() {
      this.isVisible || !this.data.length || (this.isVisible = !0, this.currentPicker.show());
    },
    hide() {
      !this.isVisible || !this.data.length || (this.isVisible = !1, this.currentPicker.hide());
    },
    _select(...e) {
      this.selectedVal[this.current] = e[0], this.selectedIndex[this.current] = e[1], this.selectedText[this.current] = e[2], this.current < this.data.length - 1 ? (this.$emit(m, this.current, ...e), this.current++, this.currentPicker.show()) : (this.isVisible = !1, this.$emit(u, this.selectedVal, this.selectedIndex, this.selectedText), this.current = 0);
    },
    _cancel(...e) {
      this.current > 0 ? (this.$emit(d, this.current, ...e), this.current--, this.currentPicker.show()) : (this.isVisible = !1, this.$emit(f));
    },
    _change(...e) {
      this.$emit(p, this.current, ...e);
    }
  }
}, M = { class: "cube-segment-picker" };
function $(e, r, o, L, z, s) {
  return a(), h("div", M, [
    (a(!0), h(b, null, C(o.data, (t, l) => (a(), V(g(t.is || "cube-picker"), N({
      key: l,
      index: l,
      ref_for: !0,
      ref: "pickers",
      title: t.title || e.title,
      subtitle: t.subtitle || e.subtitle,
      "confirm-txt": t.confirmTxt || (l === o.data.length - 1 ? e._confirmTxt : s._nextTxt),
      "cancel-txt": t.cancelTxt || (l === 0 ? e._cancelTxt : s._prevTxt),
      "swipe-time": t.swipeTime || e.swipeTime,
      "z-index": t.zIndex || e.zIndex,
      "mask-closable": e.maskClosable
    }, t, {
      onSelect: s._select,
      onCancel: s._cancel,
      onChange: s._change
    }), null, 16, ["index", "title", "subtitle", "confirm-txt", "cancel-txt", "swipe-time", "z-index", "mask-closable", "onSelect", "onCancel", "onChange"]))), 128))
  ]);
}
const i = /* @__PURE__ */ v(S, [["render", $]]);
function A(e, r) {
  y(e, r);
}
i.install = function(e) {
  e.component(n.name, n), e.component(c.name, c), e.component(i.name, i), P.install(e), k(e, n), w(e, c), A(e, i);
};
i.Picker = n;
c.Picker = n;
i.CascadePicker = c;
export {
  i as default
};
