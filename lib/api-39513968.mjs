import { B as M } from "./bscroll.esm-986d5802.mjs";
import { C as W } from "./popup-e92a5a70.mjs";
import { v as I } from "./visibility-5370f02a.mjs";
import { p as N } from "./popup-c9badb65.mjs";
import { l as V } from "./locale-72b46132.mjs";
import { U as m } from "./constants-5ce69144.mjs";
import { resolveComponent as L, openBlock as o, createBlock as A, Transition as _, withCtx as p, withDirectives as x, createVNode as b, withModifiers as w, createElementVNode as r, toDisplayString as k, createElementBlock as u, createCommentVNode as K, Fragment as y, renderList as T, normalizeStyle as $, vShow as g } from "vue";
import { _ as H } from "./_plugin-vue_export-helper-dad06003.mjs";
import { c as B } from "./create-api-056c0420.mjs";
const f = {
  value: "value",
  text: "text",
  order: "order"
}, O = {
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    selectedIndex: {
      type: Array,
      default() {
        return [];
      }
    },
    alias: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    valueKey() {
      return this.alias.value || f.value;
    },
    textKey() {
      return this.alias.text || f.text;
    },
    orderKey() {
      return f.order;
    },
    merge() {
      return [this.data, this.selectedIndex];
    }
  },
  watch: {
    // Merge the watch handlers of data and selectedIndex into one.
    merge(e) {
      this.setData(e[0], e[1]);
    }
  }
}, P = {
  props: {
    title: {
      type: String
    },
    subtitle: {
      type: String
    },
    cancelTxt: {
      type: String,
      default: ""
    },
    confirmTxt: {
      type: String,
      default: ""
    },
    swipeTime: {
      type: Number,
      default: 2500
    },
    maskClosable: {
      type: Boolean,
      default: !0
    }
  },
  computed: {
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    },
    _confirmTxt() {
      return this.confirmTxt || this.$t("ok");
    }
  }
};
const U = "cube-picker", v = "select", E = "value-change", C = "cancel", D = "change", z = {
  name: U,
  mixins: [I, N, O, P, V],
  emits: [v, E, C, D],
  props: {
    pending: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      finalData: this.data.slice(),
      _values: [],
      _indexes: []
    };
  },
  created() {
    this._values = [], this._indexes = this.selectedIndex;
  },
  methods: {
    confirm() {
      if (!this._canConfirm())
        return;
      this.hide();
      let e = !1, t = [];
      const s = this.finalData.length, h = this._values.length;
      h !== s && (e = !0, h > s && (this._values.length = this._indexes.length = s));
      for (let i = 0; i < s; i++) {
        let l = this._getSelectIndex(this.wheels[i]);
        this._indexes[i] = l;
        let a = null, n = "";
        this.finalData[i].length && (a = this.finalData[i][l][this.valueKey], n = this.finalData[i][l][this.textKey]), this._values[i] !== a && (e = !0), this._values[i] = a, t[i] = n;
      }
      this.$emit(v, this._values, this._indexes, t), e && this.$emit(E, this._values, this._indexes, t);
    },
    maskClick() {
      this.maskClosable && this.cancel();
    },
    cancel() {
      this.hide(), this.$emit(C);
    },
    show() {
      if (!this.isVisible)
        if (this.isVisible = !0, !this.wheels || this.dirty)
          this.$nextTick(() => {
            this.wheels = this.wheels || [];
            let e = this.$refs.wheelWrapper;
            for (let t = 0; t < this.finalData.length; t++)
              this._createWheel(e, t).enable(), this.wheels[t].wheelTo(this._indexes[t]);
            this.dirty && this._destroyExtraWheels(), this.dirty = !1;
          });
        else
          for (let e = 0; e < this.finalData.length; e++)
            this.wheels[e].enable(), this.wheels[e].wheelTo(this._indexes[e]);
    },
    hide() {
      if (this.isVisible) {
        this.isVisible = !1;
        for (let e = 0; e < this.finalData.length; e++)
          this.wheels[e].disable();
      }
    },
    setData(e, t) {
      this._indexes = t ? [...t] : [], this.finalData = e.slice(), this.isVisible ? this.$nextTick(() => {
        const s = this.$refs.wheelWrapper;
        this.finalData.forEach((h, i) => {
          this._createWheel(s, i), this.wheels[i].wheelTo(this._indexes[i]);
        }), this._destroyExtraWheels();
      }) : this.dirty = !0;
    },
    refill(e) {
      let t = [];
      return e.length && e.forEach((s, h) => {
        t[h] = this.refillColumn(h, s);
      }), t;
    },
    refillColumn(e, t) {
      const s = this.$refs.wheelWrapper;
      let h = s.children[e].querySelector(".cube-picker-wheel-scroll"), i = this.wheels ? this.wheels[e] : !1, l = 0;
      if (h && i) {
        let a = this.finalData[e];
        this.finalData[e] = t;
        let n = i.getSelectedIndex();
        if (a.length) {
          let d = a[n][this.valueKey];
          for (let c = 0; c < t.length; c++)
            if (t[c][this.valueKey] === d) {
              l = c;
              break;
            }
        }
        this._indexes[e] = l, this.$nextTick(() => {
          i = this._createWheel(s, e), i.wheelTo(l);
        });
      }
      return l;
    },
    scrollTo(e, t) {
      const s = this.wheels[e];
      this._indexes[e] = t, s.wheelTo(t);
    },
    refresh() {
      this.$nextTick(() => {
        this.wheels.forEach((e) => {
          e.refresh();
        });
      });
    },
    _createWheel(e, t) {
      if (this.wheels[t])
        this.wheels[t].refresh();
      else {
        const s = this.wheels[t] = new M(e.children[t], {
          wheel: {
            selectedIndex: this._indexes[t] || 0,
            wheelWrapperClass: "cube-picker-wheel-scroll",
            wheelItemClass: "cube-picker-wheel-item"
          },
          swipeTime: this.swipeTime,
          observeDOM: !1,
          useTransition: m
        });
        s.on("scrollEnd", () => {
          this.$emit(D, t, this._getSelectIndex(s));
        });
      }
      return this.wheels[t];
    },
    _destroyExtraWheels() {
      const e = this.finalData.length;
      this.wheels.length > e && this.wheels.splice(e).forEach((s) => {
        s.destroy();
      });
    },
    _canConfirm() {
      return !this.pending && this.wheels.every((e) => !e.isInTransition);
    },
    _getFlexOrder(e) {
      return e[0] ? e[0][this.orderKey] : 0;
    },
    // fixed BScroll not calculating selectedIndex when setting useTransition to false
    _getSelectIndex(e) {
      const t = e.y;
      let s;
      return m ? s = e.getSelectedIndex() : t > e.minScrollY ? s = 0 : t < e.maxScrollY ? s = e.items.length - 1 : s = Math.round(Math.abs(t / e.itemHeight)), s;
    }
  },
  beforeUnmount() {
    this.wheels && this.wheels.forEach((e) => {
      e.destroy();
    }), this.wheels = null;
  },
  components: {
    CubePopup: W
  }
}, F = { class: "cube-picker-choose border-bottom-1px" }, Y = { class: "cube-picker-title-group" }, G = ["innerHTML"], j = ["innerHTML"], q = { class: "cube-picker-content" }, R = /* @__PURE__ */ r("i", { class: "border-bottom-1px" }, null, -1), J = /* @__PURE__ */ r("i", { class: "border-top-1px" }, null, -1), Q = {
  class: "cube-picker-wheel-wrapper",
  ref: "wheelWrapper"
}, X = { class: "cube-picker-wheel-scroll" }, Z = ["innerHTML"], ee = /* @__PURE__ */ r("div", { class: "cube-picker-footer" }, null, -1);
function te(e, t, s, h, i, l) {
  const a = L("cube-popup");
  return o(), A(_, { name: "cube-picker-fade" }, {
    default: p(() => [
      x(b(a, {
        type: "picker",
        mask: !0,
        center: !1,
        "z-index": e.zIndex,
        onTouchmove: t[3] || (t[3] = w(() => {
        }, ["prevent"])),
        onMaskClick: l.maskClick
      }, {
        default: p(() => [
          b(_, { name: "cube-picker-move" }, {
            default: p(() => [
              x(r("div", {
                class: "cube-picker-panel cube-safe-area-pb",
                onClick: t[2] || (t[2] = w(() => {
                }, ["stop"]))
              }, [
                r("div", F, [
                  r("span", {
                    class: "cube-picker-cancel",
                    onClick: t[0] || (t[0] = (...n) => l.cancel && l.cancel(...n))
                  }, k(e._cancelTxt), 1),
                  r("span", {
                    class: "cube-picker-confirm",
                    onClick: t[1] || (t[1] = (...n) => l.confirm && l.confirm(...n))
                  }, k(e._confirmTxt), 1),
                  r("div", Y, [
                    r("h1", {
                      class: "cube-picker-title",
                      innerHTML: e.title
                    }, null, 8, G),
                    e.subtitle ? (o(), u("h2", {
                      key: 0,
                      class: "cube-picker-subtitle",
                      innerHTML: e.subtitle
                    }, null, 8, j)) : K("", !0)
                  ])
                ]),
                r("div", q, [
                  R,
                  J,
                  r("div", Q, [
                    (o(!0), u(y, null, T(i.finalData, (n, d) => (o(), u("div", {
                      key: d,
                      style: $({ order: l._getFlexOrder(n) })
                    }, [
                      r("ul", X, [
                        (o(!0), u(y, null, T(n, (c, S) => (o(), u("li", {
                          class: "cube-picker-wheel-item",
                          key: S,
                          innerHTML: c[e.textKey]
                        }, null, 8, Z))), 128))
                      ])
                    ], 4))), 128))
                  ], 512)
                ]),
                ee
              ], 512), [
                [g, e.isVisible]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["z-index", "onMaskClick"]), [
        [g, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const ue = /* @__PURE__ */ H(z, [["render", te]]);
function de(e, t) {
  B(e, t);
}
export {
  ue as P,
  de as a,
  O as b,
  P as p
};
