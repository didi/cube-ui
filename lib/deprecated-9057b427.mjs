import { t as r } from "./debug-2fc173dc.mjs";
const i = /-(\w)/g;
function a(e) {
  return e = String(e), e.replace(i, function(o, t) {
    return t ? t.toUpperCase() : "";
  });
}
function p(e) {
  return e = String(e), e.replace(/([A-Z])/g, "-$1").toLowerCase();
}
const d = {
  props: {
    // the options of BetterScroll
    options: {
      type: Object,
      default() {
        return {};
      }
    }
  }
}, u = {
  methods: {
    _checkDeprecated() {
      const e = this.$options.props, o = this.$options.name;
      Object.entries(e).forEach(([t, n]) => {
        const c = n.deprecated;
        c && this[t] !== void 0 && r(`The property "${p(t)}" is deprecated, please use the recommended property "${c.replacedBy}" to replace it. Details could be found in https://didi.github.io/cube-ui/#/en-US/docs/${o.substr(5)}#cube-Propsconfiguration-anchor`);
      });
    }
  },
  mounted() {
    this._checkDeprecated();
  }
};
export {
  a as c,
  u as d,
  d as s
};
