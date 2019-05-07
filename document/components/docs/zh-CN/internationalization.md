## 国际化

> 1.11.0 新增

cube-ui 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：

```js

  // 完整引入 cube-ui
  import Vue from 'vue'
  import CubeUI from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US' // cube-ui 内置
  import jaJPMessages from '../some/path/lang/ja-JP' // 自己引入日语语言包
  const Locale = CubeUI.Locale
  Vue.use(CubeUI)
  Locale.use('en-US', enUSMessages)
  Locale.use('ja-JP', jaJPMessages)

```

或者按需引入

```js

  // 按需引入 ActionSheet
  import Vue from 'vue'
  import { ActionSheet, Locale } from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US'

  Vue.use(Locale)
  Locale.use('en-US', enUSMessages)

```

cube-ui 会监听当前的语言类型，因此自动渲染组件对应的文案，同时缓存加载过的文案，在做组件语言切换的时候，如果语言包已经安装，cube-ui 直接取缓存的文案。类似伪代码如下：

```js

  // 按需引入 ActionSheet
  import Vue from 'vue'
  import { ActionSheet, Locale } from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US'

  // 默认加载中文语言包
  Vue.use(Locale)

  // 点击切换英文语言包
  one.click(() =>{
    Locale.use('en-US', enUSMessages)
  })

  // 再次切换回中文语言包
  another.click(() => {
    // 直接从缓存取
    Locale.use('zh-CN')
  })

```

默认的中文语言包如下

```js

  export default {
    cancel: '取消',
    confirm: '确认',
    ok: '确定',
    prev: '上一步',
    next: '下一步',
    selectText: '请选择',
    now: '现在',
    selectTime: '选择时间',
    today: '今日',
    formatDate: 'M月D日',
    hours: '点',
    minutes: '分',
    validator: {
      required: '此为必填项',
      type: {
        string: '请输入字符',
        number: '请输入数字',
        array: '数据类型应为数组',
        date: '请选择有效日期',
        email: '请输入有效邮箱',
        tel: '请输入有效的手机号码',
        url: '请输入有效网址'
      },
      min: {
        string: '至少输入 {{config}} 位字符',
        number: '不得小于 {{config}}',
        array: '请选择至少 {{config}} 项',
        date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之后的时间',
        email: '至少输入 {{config}} 位字符',
        tel: '至少输入 {{config}} 位字符',
        url: '至少输入 {{config}} 位字符'
      },
      max: {
        string: '请勿超过 {{config}} 位字符',
        number: '请勿大于 {{config}}',
        array: '最多选择 {{config}} 项',
        date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
        email: '请勿超过 {{config}} 位字符',
        tel: '请勿超过 {{config}} 位字符',
        url: '请勿超过 {{config}} 位字符'
      },
      len: {
        string: '请输入 {{config}} 位字符',
        number: '长度应等于 {{config}}',
        array: '请选择 {{config}} 项',
        date: '请选择 {{config | toLocaleDateString("yyyy年MM月dd日")}} 之前的时间',
        email: '请输入 {{config}} 位字符',
        tel: '请输入 {{config}} 位字符',
        url: '请输入 {{config}} 位字符'
      },
      pattern: '格式错误',
      custom: '未通过校验',
      notWhitespace: '空白内容无效'
    }
  }

```
