import "./css.mjs";
import { d as D } from "../dom-d693ece1.mjs";
import { a as q, c as $, r as Y } from "../util-ec61f3da.mjs";
import { V as n, a as z, b as W, c as J } from "../validator-d3bc4805.mjs";
import { B as Q } from "../button-10f1417a.mjs";
import { C as X } from "../checkbox-e64fe430.mjs";
import { C as Z } from "../checkbox-group-95df0a53.mjs";
import { C as ee } from "../checker-513ba745.mjs";
import { I as te } from "../input-fe42065f.mjs";
import { R as ie, a as se } from "../radio-group-e26ae2b4.mjs";
import { R as le } from "../rate-2d95a1b7.mjs";
import { S as ae } from "../select-4c6749ba.mjs";
import { S as de } from "../switch-8eeffd8b.mjs";
import { T as re } from "../textarea-2896dae7.mjs";
import { U as oe } from "../upload-645caff0.mjs";
import { resolveComponent as V, openBlock as o, createElementBlock as f, normalizeClass as B, Fragment as M, renderSlot as p, withDirectives as ne, createElementVNode as g, toDisplayString as F, vShow as ue, createBlock as c, withCtx as H, resolveDynamicComponent as N, mergeProps as _, toHandlers as I, createTextVNode as fe, renderList as L } from "vue";
import { _ as C } from "../_plugin-vue_export-helper-dad06003.mjs";
import { L as P } from "../locale-72b46132.mjs";
import "../env-c05026db.mjs";
import "../locale/locale.mjs";
import "../group-col-19fd44a2.mjs";
import "../input-97db147c.mjs";
import "../date-7a142ee6.mjs";
import "../debug-2fc173dc.mjs";
const me = (e, t, i) => {
  const a = e.rules && e.rules[t];
  t !== "custom" && a && typeof a != "function" && (e.rules[t] = i);
}, he = (e) => (t, i) => me(t, e, i), w = he("required"), R = (e) => w(e, (t) => t !== !1), ce = (e) => w(e, (t) => t > 0), S = (e, t) => {
  e.type = "button", e.props || (e.props = {}), e.props.type = t;
}, ve = {
  submit(e) {
    S(e, "submit");
  },
  reset(e) {
    S(e, "reset");
  },
  checkbox(e) {
    R(e);
  },
  switch(e) {
    R(e);
  },
  rate(e) {
    ce(e);
  }
};
function pe(e) {
  const t = ve[e.type];
  t && t(e);
}
function Ve(e) {
  const t = {
    ...e
  };
  return pe(t), t;
}
const ge = {
  STANDARD: "standard",
  CLASSIC: "classic",
  FRESH: "fresh"
}, h = ge, ye = {
  checkbox() {
    return !1;
  },
  select() {
    return null;
  }
};
function be(e) {
  const t = ye[e];
  return t && t();
}
const G = {
  data() {
    return {
      validating: !1,
      pending: !1,
      originValid: void 0
    };
  },
  computed: {
    valid() {
      const e = this.originValid, t = this.pending, i = this.validating;
      return t || i ? void 0 : e;
    },
    invalid() {
      const e = this.valid;
      return e === void 0 ? e : !e;
    }
  }
}, _e = [
  Q,
  X,
  Z,
  ee,
  te,
  ie,
  se,
  le,
  ae,
  de,
  re,
  oe
], j = {};
_e.forEach((e) => {
  j[e.name] = e;
});
const T = j;
T.CubeValidator = n;
const Ie = "cube-form-item", k = "focusin", A = "focusout", Ee = {
  name: Ie,
  mixins: [G],
  props: {
    field: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  data() {
    const e = "value", t = this.field.modelKey, i = t ? this.form.model[t] : null;
    return {
      validatorDisabled: !1,
      validatorModelKey: e,
      modelValue: i,
      validatorModel: {
        [e]: i
      }
    };
  },
  computed: {
    fieldValue() {
      return Ve(this.field);
    },
    hasRules() {
      return Object.keys(this.fieldValue.rules || {}).length > 0;
    },
    isBtnField() {
      return this.fieldValue.type === "button";
    },
    itemClass() {
      const e = this.fieldValue.rules;
      return {
        // only handle required rule for now
        "cube-form-item_required": e && e.required,
        "cube-form-item_btn": this.isBtnField,
        "cube-form-item_validating": this.validating,
        "cube-form-item_pending": this.pending,
        "cube-form-item_valid": this.valid,
        "cube-form-item_invalid": this.invalid
      };
    },
    modelVal() {
      return this.form.model[this.fieldValue.modelKey];
    },
    componentName() {
      const e = this.fieldValue, t = e.component;
      if (t)
        return t;
      const i = e.type, a = `cube-${i}`;
      return T[a] ? a : i;
    }
  },
  watch: {
    modelVal(e) {
      this.modelValue !== e && (this.modelValue = e);
    },
    modelValue: {
      handler(e) {
        this.form.model[this.fieldValue.modelKey] = e, this.updateValidatorModel();
      },
      flush: "sync"
    },
    originValid(e) {
      this.lastOriginValid = e;
    }
  },
  beforeCreate() {
    this.form = this.$parent.form;
  },
  created() {
    this.form.addField(this), this.getValidatorModel = (e) => (this.pending = !1, e);
  },
  mounted() {
    this.initDebounce(), this.initFocusEvents();
  },
  methods: {
    initDebounce() {
      let e = this.fieldValue.debounce;
      e === !0 && (e = 200), !(!e && e !== 0 || e < 0 || this.fieldValue.trigger === "blur") && (this.getValidatorModel = q((t) => (this.syncValidatorValue(), this.validate(), t), e, !1, this.validatorModel[this.validatorModelKey]));
    },
    focusInHandler() {
      this.focused = !0;
    },
    focusOutHandler() {
      this.focused = !1, this.updateValidatorModel(), this.validate();
    },
    initFocusEvents() {
      if (this.fieldValue.trigger === "blur") {
        const e = this.$refs.formItem;
        e.addEventListener(k, this.focusInHandler, !1), e.addEventListener(A, this.focusOutHandler, !1), this.getValidatorModel = (t) => this.focused ? this.validatorModel[this.validatorModelKey] : (this.pending = !1, this.form.updatePending(), t);
      }
    },
    removeFocusEvents() {
      const e = this.$refs.formItem;
      e.removeEventListener(k, this.focusInHandler, !1), e.removeEventListener(A, this.focusOutHandler, !1);
    },
    updateValidatorModel() {
      this.pending = !0, this.validatorModel[this.validatorModelKey] = this.getValidatorModel(this.modelValue), this.pending && (this.form.setPending(this.pending), this.originValid = void 0);
    },
    syncValidatorValue() {
      this.pending = !1, this.validatorModel[this.validatorModelKey] = this.modelValue, this.form.updatePending();
    },
    validatorChangeHandler() {
      this.validatorDisabled || this.originValid && this.lastOriginValid || this.updateValidity();
    },
    validatingHandler() {
      this.validating = !0, this.form.setValidating(!0);
    },
    validatedHandler() {
      this.validating = !1, this.form.updateValidating();
    },
    updateValidity() {
      const e = this.$refs.validator;
      e && this.form.updateValidity(this.fieldValue.modelKey, e.valid, e.result, e.dirty);
    },
    validate(e) {
      const t = $(e);
      t && (e = t.resolve);
      const i = this.$refs.validator;
      return i ? i.validate(() => {
        this.validatorDisabled = !0, this.updateValidity(), e && e(), this.$nextTick(() => {
          this.validatorDisabled = !1;
        });
      }) : e && e(), t;
    },
    reset() {
      const e = this.fieldValue;
      if (e.modelKey) {
        const t = be(e.type);
        this.validatorDisabled = !0, Y(this, "modelValue", t), this.syncValidatorValue(), this.$refs.validator && this.$refs.validator.reset(), this.$nextTick(() => {
          this.validatorDisabled = !1;
        });
      }
      this.validating = !1, this.pending = !1;
    },
    msgClick() {
      console.log("error-msg"), this.form.layout === h.STANDARD && this.$createToast && this.$createToast({
        type: "warn",
        txt: this.$refs.validator.msg,
        time: 1e3
      }).show();
    }
  },
  beforeUnmount() {
    this.removeFocusEvents(), this.form.destroyField(this), this.form = null;
  },
  components: T
}, Fe = { class: "cube-form-label" }, Te = {
  key: 1,
  class: "cube-form-field"
};
function Me(e, t, i, a, l, s) {
  const u = V("cube-validator"), d = V("cube-button");
  return o(), f("div", {
    class: B(["cube-form-item border-bottom-1px", s.itemClass]),
    ref: "formItem"
  }, [
    s.isBtnField ? (o(), c(d, _({ key: 1 }, s.fieldValue.props, I(s.fieldValue.events || {})), {
      default: H(() => [
        fe(F(s.fieldValue.label), 1)
      ]),
      _: 1
    }, 16)) : (o(), f(M, { key: 0 }, [
      p(e.$slots, "label", {}, () => [
        ne(g("div", Fe, [
          g("span", null, F(s.fieldValue.label), 1)
        ], 512), [
          [ue, s.fieldValue.label]
        ])
      ]),
      s.hasRules ? (o(), c(u, {
        key: 0,
        class: "cube-form-field",
        ref: "validator",
        modelValue: e.originValid,
        "onUpdate:modelValue": [
          t[1] || (t[1] = (r) => e.originValid = r),
          s.validatorChangeHandler
        ],
        disabled: l.validatorDisabled,
        model: l.validatorModel,
        "model-key": l.validatorModelKey,
        rules: s.fieldValue.rules,
        messages: s.fieldValue.messages,
        onValidating: s.validatingHandler,
        onValidated: s.validatedHandler,
        onMsgClick: s.msgClick
      }, {
        default: H(() => [
          p(e.$slots, "default", {}, () => [
            (o(), c(N(s.componentName), _({
              modelValue: l.modelValue,
              "onUpdate:modelValue": t[0] || (t[0] = (r) => l.modelValue = r)
            }, s.fieldValue.props, I(s.fieldValue.events || {})), null, 16, ["modelValue"]))
          ])
        ]),
        _: 3
      }, 8, ["modelValue", "disabled", "model", "model-key", "rules", "messages", "onUpdate:modelValue", "onValidating", "onValidated", "onMsgClick"])) : (o(), f("div", Te, [
        p(e.$slots, "default", {}, () => [
          (o(), c(N(s.componentName), _({
            modelValue: l.modelValue,
            "onUpdate:modelValue": t[2] || (t[2] = (r) => l.modelValue = r)
          }, s.fieldValue.props, I(s.fieldValue.events || {})), null, 16, ["modelValue"]))
        ])
      ]))
    ], 64))
  ], 2);
}
const y = /* @__PURE__ */ C(Ee, [["render", Me]]);
const Ce = "cube-form-group", De = {
  name: Ce,
  props: {
    legend: {
      type: String,
      default: ""
    },
    fields: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  beforeCreate() {
    this.form = this.$parent.form;
  },
  beforeUnmount() {
    this.form = null;
  },
  components: {
    CubeFormItem: y
  }
}, He = { class: "cube-form-group" }, Ne = { class: "cube-form-group-legend" }, Re = { class: "cube-form-group-content" };
function Se(e, t, i, a, l, s) {
  const u = V("cube-form-item");
  return o(), f("div", He, [
    g("p", Ne, F(i.legend), 1),
    g("div", Re, [
      p(e.$slots, "default", {}, () => [
        (o(!0), f(M, null, L(i.fields, (d, r) => (o(), c(u, {
          key: d.key || r,
          field: d
        }, null, 8, ["field"]))), 128))
      ])
    ])
  ]);
}
const b = /* @__PURE__ */ C(De, [["render", Se]]);
const ke = "cube-form", E = "submit", O = "reset", x = "validate", K = "valid", U = "invalid", Ae = {
  name: ke,
  mixins: [G],
  emits: [E, O, x, K, U],
  props: {
    action: String,
    model: {
      type: Object,
      default() {
        return {};
      }
    },
    schema: {
      type: Object,
      default() {
        return {};
      }
    },
    options: {
      type: Object,
      default() {
        return {
          scrollToInvalidField: !1,
          layout: h.STANDARD
        };
      }
    },
    immediateValidate: {
      type: Boolean,
      default: !1
    },
    submitAlwaysValidate: {
      type: Boolean,
      default: !1
    }
  },
  data() {
    return {
      validatedCount: 0,
      dirty: !1,
      firstInvalidField: null,
      firstInvalidFieldIndex: -1
    };
  },
  computed: {
    fieldsModel() {
      const e = {};
      return this.fields.forEach((t) => {
        t.isBtnField || (e[t.fieldValue.modelKey] = t.modelValue);
      }), e;
    },
    groups() {
      const e = this.schema, t = e.groups || [];
      return e.fields && t.unshift({
        fields: e.fields
      }), t;
    },
    fieldsData() {
      return this.groups.reduce((e, t) => (t.fields.reduce((i, a) => (i.push(a), i), e), e), []);
    },
    layout() {
      const e = this.options;
      return e && e.layout || h.STANDARD;
    },
    formClass() {
      const e = this.invalid, t = this.valid, i = this.layout;
      return {
        "cube-form_standard": i === h.STANDARD,
        "cube-form_groups": this.groups.length > 1,
        "cube-form_validating": this.validating,
        "cube-form_pending": this.pending,
        "cube-form_valid": t,
        "cube-form_invalid": e,
        "cube-form_classic": i === h.CLASSIC,
        "cube-form_fresh": i === h.FRESH
      };
    }
  },
  watch: {
    validatedCount() {
      this.$emit(x, {
        validity: this.validity,
        valid: this.valid,
        invalid: this.invalid,
        dirty: this.dirty,
        firstInvalidFieldIndex: this.firstInvalidFieldIndex
      });
    }
  },
  beforeCreate() {
    this.form = this, this.fields = [], this.validity = {}, this.isMounted = !1;
  },
  mounted() {
    this.isMounted = !0, this.immediateValidate && this.validate();
  },
  methods: {
    submit(e = !1) {
      this.skipValidate = e, D(this.$refs.form, "submit"), this.skipValidate = !1;
    },
    reset() {
      D(this.$refs.form, "reset");
    },
    submitHandler(e) {
      if (this.syncValidatorValues(), this.skipValidate) {
        this.$emit(E, e, this.model, this.fieldsModel);
        return;
      }
      const t = (i) => {
        i ? (this.$emit(K, this.validity), this.$emit(E, e, this.model, this.fieldsModel)) : (this.options.scrollToInvalidField && this.firstInvalidField && this.firstInvalidField.$el.scrollIntoView(), e.preventDefault(), this.$emit(U, this.validity));
      };
      this.submitAlwaysValidate || this.valid === void 0 ? (this._submit(t), (this.validating || this.pending) && e.preventDefault()) : t(this.valid);
    },
    resetHandler(e) {
      this._reset(), this.$emit(O, e);
    },
    _submit(e) {
      this.validate(() => {
        e && e(this.valid);
      });
    },
    _reset() {
      this.fields.forEach((e) => {
        e.reset();
      }), this.setValidity(), this.setValidating(), this.setPending();
    },
    syncValidatorValues() {
      this.fields.forEach((e) => {
        e.syncValidatorValue();
      });
    },
    validate(e) {
      const t = $(e);
      t && (e = t.resolve);
      let i = 0;
      const a = this.fields.length;
      return this.originValid = void 0, this.fields.forEach((l) => {
        l.validate(() => {
          i++, i === a && e && e(this.valid);
        });
      }), t;
    },
    updateValidating() {
      const e = this.fields.some((t) => t.validating);
      this.setValidating(e);
    },
    updatePending() {
      const e = this.fields.some((t) => t.pending);
      this.setPending(e);
    },
    setValidating(e = !1) {
      this.validating = e;
    },
    setPending(e = !1) {
      this.pending = e;
    },
    updateValidity(e, t, i, a) {
      const l = this.validity[e];
      l && l.valid === t && l.result === i && l.dirty === a || this.setValidity(e, {
        valid: t,
        result: i,
        dirty: a
      });
    },
    setValidity(e, t) {
      let i = {};
      e && (Object.assign(i, this.validity), t === void 0 ? delete i[e] : i[e] = t);
      let a = !1, l = !1, s = !0, u = "";
      this.fields.forEach((d) => {
        const r = d.fieldValue.modelKey;
        if (r) {
          const m = i[r];
          m ? (m.dirty && (a = !0), m.valid === !1 ? s = !1 : s && !m.valid && (s = m.valid), !l && m.valid === !1 && (l = !0, u = r)) : d.hasRules && (s && (s = void 0), i[r] = {
            valid: void 0,
            result: {},
            dirty: !1
          });
        }
      }), this.validity = i, this.dirty = a, this.originValid = s, this.setFirstInvalid(u), this.isMounted && this.validatedCount++;
    },
    setFirstInvalid(e) {
      if (!e) {
        this.firstInvalidField = null, this.firstInvalidFieldIndex = -1;
        return;
      }
      this.fields.some((t, i) => {
        if (t.fieldValue.modelKey === e)
          return this.firstInvalidField = t, this.firstInvalidFieldIndex = i, !0;
      });
    },
    addField(e) {
      const t = this.fieldsData.indexOf(e.field);
      this.fields.splice(t, 0, e);
      const i = e.fieldValue.modelKey;
      i && this.setValidity(i);
    },
    destroyField(e) {
      const t = this.fields.indexOf(e);
      this.fields.splice(t, 1);
      const i = e.fieldValue.modelKey;
      i && this.setValidity(i);
    }
  },
  beforeUnmount() {
    this.form = null, this.firstInvalidField = null;
  },
  components: {
    CubeFormGroup: b
  }
}, Oe = ["action"];
function xe(e, t, i, a, l, s) {
  const u = V("cube-form-group");
  return o(), f("form", {
    ref: "form",
    class: B(["cube-form", s.formClass]),
    action: i.action,
    onSubmit: t[0] || (t[0] = (...d) => s.submitHandler && s.submitHandler(...d)),
    onReset: t[1] || (t[1] = (...d) => s.resetHandler && s.resetHandler(...d))
  }, [
    p(e.$slots, "default", {}, () => [
      (o(!0), f(M, null, L(s.groups, (d, r) => (o(), c(u, {
        fields: d.fields,
        legend: d.legend,
        key: d.key || r
      }, null, 8, ["fields", "legend"]))), 128))
    ])
  ], 42, Oe);
}
const v = /* @__PURE__ */ C(Ae, [["render", xe]]);
v.install = function(e) {
  e.component(v.name, v), e.component(b.name, b), e.component(y.name, y), e.component(n.name, n), P.install(e), n._base = e;
};
v.Group = b;
v.Item = y;
v.Validator = n;
n.addRule = z;
n.addMessage = W;
n.addType = J;
n.addHelper = P.addHelper;
export {
  v as default
};
