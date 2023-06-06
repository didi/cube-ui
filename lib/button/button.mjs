import "./css.mjs";
import { openBlock as s, createElementBlock as c, normalizeClass as u, createCommentVNode as d, renderSlot as b } from "vue";
const p = (t, n) => {
  const e = t.__vccOpts || t;
  for (const [a, o] of n)
    e[a] = o;
  return e;
}, f = "cube-button", y = {
  name: f,
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
    handleClick(t) {
      if (this.disabled) {
        t.preventDefault(), t.stopPropagation();
        return;
      }
      this.$emit("click", t);
    }
  }
}, m = ["type"];
function _(t, n, e, a, o, l) {
  return s(), c("button", {
    class: u(["cube-btn", l.btnClass]),
    type: e.type,
    onClick: n[0] || (n[0] = (...r) => l.handleClick && l.handleClick(...r))
  }, [
    e.icon ? (s(), c("i", {
      key: 0,
      class: u(e.icon)
    }, null, 2)) : d("", !0),
    b(t.$slots, "default")
  ], 10, m);
}
const i = /* @__PURE__ */ p(y, [["render", _]]);
i.install = function(t) {
  t.component(i.name, i);
};
export {
  i as default
};
