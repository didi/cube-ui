import "./css.mjs";
import { C as v } from "../popup-e92a5a70.mjs";
import { v as y } from "../visibility-5370f02a.mjs";
import { p as x } from "../popup-c9badb65.mjs";
import { l as E, L as S } from "../locale-72b46132.mjs";
import { resolveComponent as T, openBlock as l, createBlock as M, Transition as d, withCtx as o, withDirectives as r, createVNode as p, normalizeClass as h, createElementVNode as i, withModifiers as N, toDisplayString as _, vShow as u, createElementBlock as f, Fragment as g, renderList as L } from "vue";
import { _ as A } from "../_plugin-vue_export-helper-dad06003.mjs";
import { c as V } from "../create-api-056c0420.mjs";
import "../util-ec61f3da.mjs";
import "../date-7a142ee6.mjs";
import "../debug-2fc173dc.mjs";
const B = "cube-action-sheet", b = "select", k = "cancel", w = {
  name: B,
  mixins: [y, x, E],
  emits: [b, k],
  props: {
    data: {
      type: Array,
      default() {
        return [];
      }
    },
    active: {
      type: Number,
      default: -1
    },
    title: {
      type: String,
      default: ""
    },
    pickerStyle: {
      type: Boolean,
      default: !1
    },
    maskClosable: {
      type: Boolean,
      default: !0
    },
    cancelTxt: {
      type: String,
      default: ""
    }
  },
  computed: {
    _cancelTxt() {
      return this.cancelTxt || this.$t("cancel");
    }
  },
  methods: {
    maskClick() {
      this.maskClosable && this.cancel();
    },
    cancel() {
      this.hide(), this.$emit(k);
    },
    itemClick(e, t) {
      this.hide(), this.$emit(b, e, t);
    }
  },
  components: {
    CubePopup: v
  }
}, z = { class: "cube-action-sheet-content" }, P = { class: "cube-action-sheet-list" }, D = ["data-align", "innerHTML", "onClick"], H = /* @__PURE__ */ i("div", { class: "cube-action-sheet-space" }, null, -1);
function I(e, t, c, F, j, a) {
  const C = T("cube-popup");
  return l(), M(d, { name: "cube-action-sheet-fade" }, {
    default: o(() => [
      r(p(C, {
        type: "action-sheet",
        class: h({ "cube-action-sheet_picker": c.pickerStyle }),
        center: !1,
        mask: !0,
        "z-index": e.zIndex,
        onMaskClick: a.maskClick
      }, {
        default: o(() => [
          p(d, { name: "cube-action-sheet-move" }, {
            default: o(() => [
              r(i("div", {
                class: "cube-action-sheet-panel cube-safe-area-pb",
                onClick: t[1] || (t[1] = N(() => {
                }, ["stop"]))
              }, [
                r(i("h1", { class: "cube-action-sheet-title border-bottom-1px" }, _(c.title), 513), [
                  [u, c.pickerStyle || c.title]
                ]),
                i("div", z, [
                  i("ul", P, [
                    (l(!0), f(g, null, L(c.data, (n, m) => (l(), f("li", {
                      class: h(["cube-action-sheet-item border-bottom-1px", [
                        n.class || "",
                        m === c.active ? "cube-action-sheet-item_active" : ""
                      ]]),
                      "data-align": n.align,
                      innerHTML: n.content,
                      onClick: (q) => a.itemClick(n, m)
                    }, null, 10, D))), 256))
                  ])
                ]),
                H,
                i("div", {
                  class: "cube-action-sheet-cancel",
                  onClick: t[0] || (t[0] = (...n) => a.cancel && a.cancel(...n))
                }, [
                  i("span", null, _(a._cancelTxt), 1)
                ])
              ], 512), [
                [u, e.isVisible]
              ])
            ]),
            _: 1
          })
        ]),
        _: 1
      }, 8, ["class", "z-index", "onMaskClick"]), [
        [u, e.isVisible]
      ])
    ]),
    _: 1
  });
}
const s = /* @__PURE__ */ A(w, [["render", I]]);
function O(e, t) {
  V(e, t, ["select", "cancel"], !0);
}
s.install = function(e) {
  e.component(s.name, s), S.install(e), O(e, s);
};
export {
  s as default
};
