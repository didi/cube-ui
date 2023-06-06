import { p as o } from "./dom-d693ece1.mjs";
const l = o("flexBasis"), s = {
  props: {
    colNum: {
      type: Number,
      default: 1
    }
  },
  watch: {
    colNum: {
      immediate: !0,
      handler(t) {
        if (t <= 1)
          return "";
        this.$nextTick(() => {
          let r = 100 / t + "%";
          Array.prototype.forEach.call(this.$refs.group.children, (e) => {
            e.style[l] = r;
          });
        });
      }
    }
  }
};
export {
  s as g
};
