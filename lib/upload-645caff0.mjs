import { openBlock as g, createElementBlock as b, renderSlot as O, createElementVNode as c, normalizeClass as C, normalizeStyle as K, withModifiers as G, toDisplayString as J, resolveComponent as L, Fragment as X, renderList as Y, createBlock as Q, withDirectives as W, createVNode as Z, vShow as ee } from "vue";
import { _ as k } from "./_plugin-vue_export-helper-dad06003.mjs";
import { a as te } from "./env-c05026db.mjs";
const z = {
  props: {
    multiple: {
      type: Boolean,
      default: !0
    },
    accept: {
      type: String,
      default: "image/*"
    }
  }
};
const se = "cube-upload-btn", ne = {
  name: se,
  mixins: [z],
  methods: {
    changeHandler(e) {
      const s = e.currentTarget, i = s.files;
      i && (this.$parent.addFiles(i), s.value = null);
    }
  }
}, oe = { class: "cube-upload-btn" }, ie = /* @__PURE__ */ c("div", { class: "cube-upload-btn-def" }, [
  /* @__PURE__ */ c("i")
], -1), le = ["multiple", "accept"];
function re(e, s, i, r, n, t) {
  return g(), b("div", oe, [
    O(e.$slots, "default", {}, () => [
      ie
    ]),
    c("input", {
      class: "cube-upload-input",
      type: "file",
      onChange: s[0] || (s[0] = (...o) => t.changeHandler && t.changeHandler(...o)),
      multiple: e.multiple,
      accept: e.accept
    }, null, 40, le)
  ]);
}
const ae = /* @__PURE__ */ k(ne, [["render", re]]), N = te ? window.URL || window.webkitURL || window.mozURL : null, U = "ready", $ = "uploading", f = "error", S = "success";
function ue(e, s, i, r) {
  const n = [], t = e.length;
  let o = 0;
  for (let u = 0; u < t; u++)
    ce(e[u], u, s, function(d, h) {
      if (o++, n[h] = d, i(d, h), o === t)
        return r(n);
    });
}
function ce(e, s, i, r) {
  i(e, function(n) {
    const t = de(n.name, n.size, U, 0, n);
    r(t, s);
  });
}
function de(e = "", s = 0, i = "", r = 0, n = null) {
  const t = n && n.base64 || "", o = t ? "" : pe(n);
  return {
    name: e,
    size: s,
    url: o,
    base64: t,
    status: i,
    progress: r,
    file: n
  };
}
function pe(e) {
  return e && N ? N.createObjectURL(e) : "";
}
function v(e, ...s) {
  return typeof e == "function" ? e.apply(this, s) : e;
}
const fe = "cube-upload-file", he = {
  success: "cubeic-right",
  error: "cubeic-warn"
}, A = "click", me = {
  name: fe,
  props: {
    file: {
      type: Object,
      required: !0
    }
  },
  emits: [A],
  computed: {
    fileCls() {
      return `cube-upload-file_${this.file.status}`;
    },
    fileStatusCls() {
      const e = this.file, s = e.status;
      if (e.progress >= 0.01 || s === S || s === f)
        return "cube-upload-file_stat";
    },
    fileStyle() {
      const e = this.file.url || this.file.base64;
      if (e)
        return {
          "background-image": `url("${e}")`
        };
    },
    statusCls() {
      const e = this.file.status;
      return he[e];
    },
    fileProgress() {
      return this.statusCls ? "100%" : `${Math.min(Math.floor(this.file.progress * 100), 99)}%`;
    }
  },
  methods: {
    clickHandler() {
      this.$emit(A, this.file);
    },
    removeFile() {
      this.$parent.removeFile(this.file);
    }
  }
}, _e = { class: "cube-upload-file-progress" };
function ge(e, s, i, r, n, t) {
  return g(), b("div", {
    class: C(["cube-upload-file", t.fileCls]),
    onClick: s[1] || (s[1] = (...o) => t.clickHandler && t.clickHandler(...o))
  }, [
    O(e.$slots, "default", {
      imgStyle: t.fileStyle,
      progress: t.fileProgress
    }, () => [
      c("div", {
        class: "cube-upload-file-def",
        style: K(t.fileStyle)
      }, [
        c("i", {
          class: "cubeic-wrong",
          onClick: s[0] || (s[0] = G((...o) => t.removeFile && t.removeFile(...o), ["stop"]))
        }),
        c("div", {
          class: C(["cube-upload-file-state", t.fileStatusCls])
        }, [
          c("i", {
            class: C(["cube-upload-file-status", t.statusCls])
          }, null, 2),
          c("span", _e, J(t.fileProgress), 1)
        ], 2)
      ], 4)
    ])
  ], 2);
}
const be = /* @__PURE__ */ k(me, [["render", ge]]);
function Se(e, s, i) {
  const {
    target: r,
    headers: n = {},
    data: t = {},
    fileName: o = "file",
    withCredentials: u,
    timeout: d,
    prop: h = "file",
    progressInterval: x = 100,
    checkSuccess: E = function() {
      return !0;
    }
  } = s, q = v(r, e);
  e.progress = 0, e.status = $;
  const a = new window.XMLHttpRequest();
  e._xhr = a;
  let m = 0;
  if (a.upload) {
    let l = Date.now();
    a.upload.onprogress = function(p) {
      if (p.total > 0)
        if (m) {
          clearTimeout(m);
          const D = Date.now() - l;
          D >= x ? T() : m = setTimeout(T, D);
        } else
          T(), m = 1;
      function T() {
        e.progress = p.loaded / p.total, l = Date.now();
      }
    };
  }
  const y = new window.FormData(), R = v(t, e);
  Object.keys(R).forEach((l) => {
    y.append(l, R[l]);
  }), y.append(o, e[h]), a.onload = function() {
    if (a.status < 200 || a.status >= 300) {
      _(f);
      return;
    }
    w();
    const l = e.response;
    if (E.length <= 2) {
      const p = E(l, e);
      _(p ? S : f);
    } else
      E(l, e, (p) => {
        _(p ? S : f);
      });
  }, a.onerror = function() {
    w(), _(f);
  }, a.ontimeout = function() {
    w(), _(f);
  }, a.open("POST", q, !0), u && (a.withCredentials = !0);
  const F = v(n, e);
  Object.keys(F).forEach((l) => {
    a.setRequestHeader(l, F[l]);
  }), d > 0 && (a.timeout = d), a.send(y);
  function _(l) {
    clearTimeout(m), m = 0, e.progress = 1, e.status = l, i && i(e);
  }
  function w() {
    let l = a.responseText || a.response;
    try {
      l = JSON.parse(l);
    } catch {
    }
    e.response = l, e.responseHeaders = a.getAllResponseHeaders();
  }
}
const Ee = "cube-upload", V = "update:modelValue", M = "files-added", I = "file-submitted", P = "file-removed", B = "file-success", H = "file-error", j = "file-click", ye = {
  name: Ee,
  mixins: [z],
  emits: [V, M, I, P, B, H, j],
  props: {
    modelValue: {
      type: Array,
      default() {
        return [];
      }
    },
    action: {
      type: [String, Object],
      default: ""
    },
    max: {
      type: Number,
      default: 10
    },
    auto: {
      type: Boolean,
      default: !0
    },
    simultaneousUploads: {
      type: Number,
      default: 1
    },
    processFile: {
      type: Function,
      default: function(e, s) {
        s(e);
      }
    }
  },
  data() {
    return {
      files: this.modelValue,
      paused: !this.auto
    };
  },
  computed: {
    actionOptions() {
      const e = this.action;
      return typeof e == "string" ? e ? {
        target: e
      } : null : e;
    },
    isShowBtn() {
      return this.files.length < this.max;
    }
  },
  watch: {
    modelValue(e) {
      this.files = e;
    },
    files(e) {
      this.$emit(V, e);
    }
  },
  methods: {
    addFiles(e) {
      this.$emit(M, e);
      const s = this.files.length, i = [], r = this.max - s;
      let n = 0, t = e[n];
      for (; i.length < r && t; )
        t.ignore || i.push(t), t = e[++n];
      ue(i, this.processFile, (o, u) => {
        this.files.push(o), this.$emit(I, o);
      }, () => {
        this.$nextTick(() => {
          this.upload();
        });
      });
    },
    removeFile(e) {
      this.$emit(P, e), e._xhr && e._xhr.abort(), e.url && N.revokeObjectURL(e.url);
      const s = this.files.indexOf(e);
      this.files.splice(s, 1), this.upload();
    },
    fileClick(e, s) {
      this.$emit(j, e, s);
    },
    upload(e) {
      const s = this.actionOptions;
      if (this.paused || !s)
        return;
      const i = this.files.length;
      let r = 0, n = 0;
      for (; n < i && r < this.simultaneousUploads; ) {
        const t = this.files[n], o = t.status;
        o === U || e && o === f && t._retryId !== this.retryId ? (Se(t, s, (u) => {
          o === f && (u._retryId = this.retryId), this.$emit(u.status === S ? B : H, u), this.upload(e);
        }), r++) : o === $ && r++, n++;
      }
    },
    start() {
      this.paused = !1, this.upload();
    },
    pause() {
      this.paused = !0, this.files.forEach((e) => {
        e.status === $ && (e._xhr.abort(), e.status = U);
      });
    },
    retry() {
      this.retryId = Date.now(), this.paused = !1, this.upload(!0);
    }
  },
  components: {
    UploadBtn: ae,
    UploadFile: be
  }
}, we = { class: "cube-upload" }, Te = { class: "cube-upload-def clear-fix" };
function Ce(e, s, i, r, n, t) {
  const o = L("upload-file"), u = L("upload-btn");
  return g(), b("div", we, [
    O(e.$slots, "default", {}, () => [
      c("div", Te, [
        (g(!0), b(X, null, Y(n.files, (d, h) => (g(), Q(o, {
          file: d,
          key: h,
          onClick: (x) => t.fileClick(d, h)
        }, null, 8, ["file", "onClick"]))), 128)),
        W(Z(u, {
          multiple: e.multiple,
          accept: e.accept
        }, null, 8, ["multiple", "accept"]), [
          [ee, t.isShowBtn]
        ])
      ])
    ])
  ]);
}
const Oe = /* @__PURE__ */ k(ye, [["render", Ce]]);
export {
  Oe as U,
  ae as a,
  be as b
};
