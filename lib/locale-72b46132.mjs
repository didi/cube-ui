import { b as c, i as o, p as l } from "./util-ec61f3da.mjs";
import { a as g } from "./date-7a142ee6.mjs";
import { w as u } from "./debug-2fc173dc.mjs";
const f = {
  cancel: "取消",
  confirm: "确认",
  ok: "确定",
  prev: "上一步",
  next: "下一步",
  selectText: "请选择",
  now: "现在",
  selectTime: "选择时间",
  today: "今日",
  formatDate: "M月D日",
  hours: "点",
  minutes: "分",
  validator: {
    required: "此为必填项",
    type: {
      string: "请输入字符",
      number: "请输入数字",
      array: "数据类型应为数组",
      date: "请选择有效日期",
      email: "请输入有效邮箱",
      tel: "请输入有效的手机号码",
      url: "请输入有效网址"
    },
    min: {
      string: "至少输入 {{config}} 位字符",
      number: "不得小于 {{config}}",
      array: "请选择至少 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
      email: "至少输入 {{config}} 位字符",
      tel: "至少输入 {{config}} 位字符",
      url: "至少输入 {{config}} 位字符"
    },
    max: {
      string: "请勿超过 {{config}} 位字符",
      number: "请勿大于 {{config}}",
      array: "最多选择 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: "请勿超过 {{config}} 位字符",
      tel: "请勿超过 {{config}} 位字符",
      url: "请勿超过 {{config}} 位字符"
    },
    len: {
      string: "请输入 {{config}} 位字符",
      number: "长度应等于 {{config}}",
      array: "请选择 {{config}} 项",
      date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
      email: "请输入 {{config}} 位字符",
      tel: "请输入 {{config}} 位字符",
      url: "请输入 {{config}} 位字符"
    },
    pattern: "格式错误",
    custom: "未通过校验",
    notWhitespace: "空白内容无效"
  }
}, m = {
  cancel: "Cancel",
  confirm: "Confirm",
  ok: "OK",
  prev: "Prev",
  next: "Next",
  selectText: "Please select",
  now: "Now",
  selectTime: "Select time",
  today: "Today",
  formatDate: "M-D",
  hours: "",
  minutes: "",
  validator: {
    required: "Required.",
    type: {
      string: "Please input characters.",
      number: "Please input numbers.",
      array: "The data type should be array.",
      date: "Please select a valid date.",
      email: "Please input a valid E-mail.",
      tel: "Please input a valid telphone number.",
      url: "Please input a valid web site."
    },
    min: {
      string: "Please input at least {{config}} characters.",
      number: "The number could not smaller than {{config}}.",
      array: "Please select at least {{config}} items.",
      date: 'Please select a date after {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input at least {{config}} characters.",
      tel: "Please input at least {{config}} characters.",
      url: "Please input at least {{config}} characters."
    },
    max: {
      string: "Please input no more than {{config}} characters.",
      number: "The number could not bigger than {{config}}",
      array: "Please select no more than  {{config}} items",
      date: 'Please select a date before {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input no more than {{config}} characters.",
      tel: "Please input no more than {{config}} characters.",
      url: "Please input no more than {{config}} characters."
    },
    len: {
      string: "Please input {{config}} characters.",
      number: "The length should equal {{config}}",
      array: "Please select {{config}} items",
      date: 'Please select {{config | toLocaleDateString("yyyy-MM-dd")}}.',
      email: "Please input {{config}} characters.",
      tel: "Please input {{config}} characters.",
      url: "Please input {{config}} characters."
    },
    pattern: 'The input don"t match pattern.',
    custom: "Invalid.",
    notWhitespace: "Whitespace is invalid."
  }
};
let n;
const s = "zh-CN", r = {
  name: "locale",
  install(e) {
    r.installed || (n = e.config.globalProperties, n.$cubeLang = s, n.$cubeMessages = { [s]: f, "en-US": m }, r.installed = !0);
  },
  use(e, t) {
    n.$cubeLang = e;
    const a = n.$cubeMessages;
    e in a || (a[[e]] = t);
  },
  helpers: {
    toLocaleDateString(e, t) {
      const a = c(e) ? e : e.replace(/-/g, "/"), i = new Date(a);
      return o(t) ? i.toDateString() : g(i, t);
    }
  },
  addHelper(e, t) {
    e in r.helpers || (r.helpers[e] = t);
  }
}, d = r, p = "Translation is not registered correctly, you can call Locale.use() to install it.", P = {
  computed: {
    $t() {
      const e = this.$cubeLang, t = this.$cubeMessages[e];
      return o(t) ? (u(p), "") : (a) => l(t, a);
    }
  },
  beforeCreate() {
    d.install(this._.appContext.app);
  }
};
export {
  d as L,
  P as l
};
