## 国际化

> 1.11.0 新增

cube-ui 内部所有非可配置的文案，都是中文的形式，所以如果你的应用是需要做对应的国际化文案翻译，那么 cube-ui  `1.11.0` 这个版本是提供了给 cube-ui 组件的文案翻译的能力，甚至这种能力也能延伸至你的应用。

## cube-ui 组件的国际化

cube-ui 默认是用的中文语言包，并且已经注册了。cube-ui 内部也内置了对应的英文语言包，但是你需要如下的逻辑来注册语言包，同时切换至对应的语言。

```js
  import Vue from 'vue'
  import { Locale } from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US'

  Vue.use(Locale)
  // 切换至英语，并且缓存当前语言包
  Locale.use('en-US', enUSMessages)
```

cube-ui 会监听当前的语言类型，因此自动渲染组件对应的文案，同时缓存加载过的文案，在做组件语言切换的时候，如果语言包已经安装，cube-ui 直接取缓存的文案。类似伪代码如下：

```js
  import Vue from 'vue'
  import { Locale } from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US'

  // 默认加载中文语言包
  Vue.use(Locale)

  // 切换至英语，并且需要导入英语语言包
  one.click(() =>{
    Locale.use('en-US', enUSMessages)
  })

  another.click(() => {
    // 从缓存取之前的语言包
    Locale.use('zh-CN')
  })
```

但是可能你有其他国家的翻译需求，比如日语、韩语，那么你需要自己提供语言包，并且切换至对应语言。代码如下：

```js
  import Vue from 'vue'
  import { Locale } from 'cube-ui'
  import jPMessages from '/somewhere/ja-JP.js' // 自己的语言包

  Vue.use(Locale)

  // 切换至日语，并且需要导入日语语言包
  Locale.use('ja-JP', jPMessages)
```

你导入的语言包的配置项形式应该与下面相仿，默认的中文语言包如下：

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

## 程序应用的国际化<sup>1.12.23+</sup>

如上面所述，cube-ui 给自己的组件提供了国际化的能力，但是这种能力也能延伸至你的应用，分两步进行：

1. **导入语言包**

  首先，得导入语言包，这个语言包应该是包含 cube-ui 默认语言包的全集。比如你的语言包配置可能如下：

  ```js
    // default.js

    export default {
      "application_key": "这是我应用的翻译",
      "country": {
        "province": "北京"
      }

      /* cube-ui 的默认配置*/
      "cancel": "Cancel",
      // ...忽略中间部分的配置，
      "validator": {/* */}
    }
  ```

  接着在你应用的入口文件导入这个语言包。

  ```js
    import Vue from 'vue'
    import { Locale } from 'cube-ui'
    import defaultMessages from 'default.js' // 自己的语言包

    Vue.use(Locale)
    Locale.use('zh-CN', defaultMessages)
  ```

2. **在组件内部通过 mixins 注入翻译的能力**

  然后借助于 `Vue` 提供的 mixin 能力。cube-ui 提供了语言包 `key=>value` 的转换函数 `$t`，你只需要在组件的 `mixins` 属性注入它，之后就可以在模版使用。示例如下：

  ```js
  // dialog.vue

  import { Locale } from 'cube-ui'
  <script>
    export default {
      //...
      mixins: [Locale.localeMixin] // 注入 mixin，拥有 $t 的能力，1.12.23 版本新加
    }
  </script>
  ```

  接着，只需要在模版使用它就行：

  ```html
  <template>
    <div>
      {{$t('application_key')}}
    </div>
  </template>
  ```

  最后，`{{$t('application_key')}}` 就被渲染成 `"这是我应用的翻译"`。考虑到你的语言包可能是多层级嵌套，`$t` 还接受一个以 `"."` 为分隔符的字符串，来获取深层次的属性，例如：

  ```js
  // 你的语言包结构形式
  export default {
    a: {
      b: {
        c: "嵌套的 c"
      }
    }
  }
  ```

  那么你在 `template` 的使用就很简单。

  ```html
  <template>
    <div>
      {{$t('a.b.c')}}
    </div>
  </template>
  ```
