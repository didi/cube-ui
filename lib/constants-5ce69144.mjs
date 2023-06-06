import { b as o, u as s } from "./env-c05026db.mjs";
import { g as t } from "./util-ec61f3da.mjs";
function n() {
  let r = !0;
  if (o) {
    const i = t(s);
    if (!i)
      return r;
    i.major >= 13 && i.minor >= 3 && (r = !1);
  }
  return r;
}
const f = n();
export {
  f as U
};
