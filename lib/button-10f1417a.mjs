import { openBlock as i, createElementBlock as a, normalizeClass as o, createCommentVNode as u, renderSlot as c } from "vue";
import { _ as r } from "./_plugin-vue_export-helper-dad06003.mjs";
const d = "cube-button", b = {
  name: d,
  emits: ["click"],
  props: {
    icon: {
      type: String,
      default: ""
    },
    active: {
      type: Boolean,
      default: !1
    },
    disabled: {
      type: Boolean,
      default: !1
    },
    inline: {
      type: Boolean,
      default: !1
    },
    primary: {
      type: Boolean,
      default: !1
    },
    outline: {
      type: Boolean,
      default: !1
    },
    light: {
      type: Boolean,
      default: !1
    },
    type: {
      type: String,
      default: "button"
    }
  },
  computed: {
    btnClass() {
      return {
        "cube-btn_active": this.active,
        "cube-btn_disabled": this.disabled,
        "cube-btn-inline": this.inline,
        "cube-btn-primary": this.primary,
        "cube-btn-outline": this.outline,
        "cube-btn-outline-primary": this.outline && this.primary,
        "cube-btn-light": this.light
      };
    }
  },
  methods: {
    handleClick(e) {
      if (this.disabled) {
        e.preventDefault(), e.stopPropagation();
        return;
      }
      this.$emit("click", e);
    }
  }
}, p = ["type"];
function f(e, n, t, y, m, l) {
  return i(), a("button", {
    class: o(["cube-btn", l.btnClass]),
    type: t.type,
    onClick: n[0] || (n[0] = (...s) => l.handleClick && l.handleClick(...s))
  }, [
    t.icon ? (i(), a("i", {
      key: 0,
      class: o(t.icon)
    }, null, 2)) : u("", !0),
    c(e.$slots, "default")
  ], 10, p);
}
const B = /* @__PURE__ */ r(b, [["render", f]]);
export {
  B
};
