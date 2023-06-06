import "./css.mjs";
import { C as S } from "../popup-e92a5a70.mjs";
import { I as u } from "../input-fe42065f.mjs";
import { v as T } from "../visibility-5370f02a.mjs";
import { p as O } from "../popup-c9badb65.mjs";
import { l as P, L as I } from "../locale-72b46132.mjs";
import { resolveComponent as _, openBlock as o, createBlock as b, Transition as w, withCtx as g, withDirectives as C, createVNode as L, createElementVNode as l, vShow as y, normalizeClass as s, createElementBlock as d, createCommentVNode as a, renderSlot as m, toDisplayString as f, mergeProps as j } from "vue";
import { _ as z } from "../_plugin-vue_export-helper-dad06003.mjs";
import { c as D } from "../create-api-056c0420.mjs";
import "../input-97db147c.mjs";
import "../util-ec61f3da.mjs";
import "../date-7a142ee6.mjs";
import "../debug-2fc173dc.mjs";
const A = "cube-dialog", k = "confirm", B = "cancel", v = "close", p = "javascript:;", x = {
  textType: "ok",
  active: !0,
  disabled: !1,
  href: p
}, V = {
  textType: "cancel",
  active: !1,
  disabled: !1,
  href: p
}, E = function(e, i) {
  typeof e == "string" && (e = {
    text: e
  });
  const n = i && this.$t(i.textType);
  return Object.assign({}, i, { text: n }, e);
}, H = {
  name: A,
  mixins: [T, O, P],
  emits: [k, B, v],
  props: {
    type: {
      type: String,
      default: "alert"
    },
    prompt: {
      type: Object,
      default() {
        return {
          value: "",
          placeholder: ""
        };
      }
    },
    icon: {
      type: String,
      default: ""
    },
    title: {
      type: String,
      default: ""
    },
    content: {
      type: String,
      default: ""
    },
    showClose: {
      type: Boolean,
      default: !1
    },
    confirmBtn: {
      type: [Object, String],
      default() {
        return {
          ...x
        };
      }
    },
    cancelBtn: {
      type: [Object, String],
      default() {
        return {
          ...V
        };
      }
    }
  },
  data() {
    return {
      defHref: p,
      promptValue: this.prompt.value
    };
  },
  computed: {
    _confirmBtn() {
      return E.call(this, this.confirmBtn, x);
    },
    _cancelBtn() {
      return E.call(this, this.cancelBtn, V);
    },
    isConfirm() {
      return this.type === "confirm";
    },
    isPrompt() {
      return this.type === "prompt";
    },
    containerClass() {
      return `cube-dialog-${this.type}`;
    }
  },
  watch: {
    "prompt.value": {
      handler: function(e) {
        this.promptValue = e;
      }
    }
  },
  methods: {
    maskClick(e) {
      this.maskClosable && this.cancel(e);
    },
    confirm(e) {
      this._confirmBtn.disabled || (this.hide(), this.$emit(k, e, this.promptValue));
    },
    cancel(e) {
      this._cancelBtn.disabled || (this.hide(), this.$emit(B, e));
    },
    close(e) {
      this.hide(), this.$emit(v, e);
    }
  },
  components: {
    CubePopup: S,
    CubeInput: u
  }
}, F = { class: "cube-dialog-main" }, R = /* @__PURE__ */ l("i", { class: "cubeic-close" }, null, -1), U = [
  R
], q = {
  key: 0,
  class: "cube-dialog-icon"
}, G = {
  key: 1,
  class: "cube-dialog-title"
}, J = { class: "cube-dialog-title-def" }, K = { class: "cube-dialog-content" }, Q = { class: "cube-dialog-content-def" }, W = ["innerHTML"], X = ["href"], Y = ["href"];
function Z(e, i, n, ee, h, t) {
  const N = _("cube-input"), M = _("cube-popup");
  return o(), b(w, { name: "cube-dialog-fade" }, {
    default: g(() => [
      C(L(M, {
        type: "dialog",
        "z-index": e.zIndex,
        mask: !0,
        center: !0,
        onMaskClick: t.maskClick
      }, {
        default: g(() => [
          l("div", F, [
            C(l("span", {
              class: "cube-dialog-close",
              onClick: i[0] || (i[0] = (...c) => t.close && t.close(...c))
            }, U, 512), [
              [y, n.showClose]
            ]),
            l("div", {
              class: s(t.containerClass)
            }, [
              n.icon ? (o(), d("p", q, [
                l("i", {
                  class: s(n.icon)
                }, null, 2)
              ])) : a("", !0),
              n.title || e.$slots.title ? (o(), d("h2", G, [
                m(e.$slots, "title", {}, () => [
                  l("p", J, f(n.title), 1)
                ])
              ])) : a("", !0),
              l("div", K, [
                m(e.$slots, "content", {}, () => [
                  l("div", Q, [
                    n.content ? (o(), d("p", {
                      key: 0,
                      innerHTML: n.content
                    }, null, 8, W)) : a("", !0),
                    t.isPrompt ? (o(), b(N, j({ key: 1 }, n.prompt, {
                      modelValue: h.promptValue,
                      "onUpdate:modelValue": i[1] || (i[1] = (c) => h.promptValue = c)
                    }), null, 16, ["modelValue"])) : a("", !0)
                  ])
                ])
              ]),
              l("div", {
                class: s(["cube-dialog-btns", { "border-right-1px": t.isConfirm || t.isPrompt }])
              }, [
                m(e.$slots, "btns", {}, () => [
                  t.isConfirm || t.isPrompt ? (o(), d("a", {
                    key: 0,
                    href: t._cancelBtn.href,
                    class: s(["cube-dialog-btn border-top-1px", { "cube-dialog-btn_highlight": t._cancelBtn.active, "cube-dialog-btn_disabled": t._cancelBtn.disabled }]),
                    onClick: i[2] || (i[2] = (...c) => t.cancel && t.cancel(...c))
                  }, f(t._cancelBtn.text), 11, X)) : a("", !0),
                  l("a", {
                    href: t._confirmBtn.href,
                    class: s(["cube-dialog-btn border-top-1px", { "cube-dialog-btn_highlight": t._confirmBtn.active, "cube-dialog-btn_disabled": t._confirmBtn.disabled }]),
                    onClick: i[3] || (i[3] = (...c) => t.confirm && t.confirm(...c))
                  }, f(t._confirmBtn.text), 11, Y)
                ])
              ], 2)
            ], 2)
          ])
        ]),
        _: 3
      }, 8, ["z-index", "onMaskClick"]), [
        [y, e.isVisible]
      ])
    ]),
    _: 3
  });
}
const r = /* @__PURE__ */ z(H, [["render", Z]]);
function $(e, i) {
  D(e, i, ["confirm", "cancel", "close", "btn-click", "link-click"], !0);
}
r.install = function(e) {
  e.component(u.name, u), e.component(r.name, r), I.install(e), $(e, r);
};
r.Input = u;
export {
  r as default
};
