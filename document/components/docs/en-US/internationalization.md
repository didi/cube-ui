## Internationalization

> New in 1.11.0+

All non-configurable copy files inside `cube-ui` are in Chinese, so if your application needs to do the corresponding international translation, then `1.11.0` is available for cube-ui provide ability to translate a component's copywriting, even this ability can be extended to your application.

## Internationalization within components

Cube-ui is the Chinese language pack used by default and is already registered. The corresponding English language pack is also built into the cube-ui, but you need the following logic to register the language pack and switch to the corresponding language.

```js
  import Vue from 'vue'
  import { Locale } from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US'

  Vue.use(Locale)
  // Switch to English and cache the current language pack
  Locale.use('en-US', enUSMessages)
```

Cube-ui will listen to the current language type, so it automatically renders the corresponding copy of the component, and caches the loaded copy. When the component language is switched, if the language pack is already installed, cube-ui directly takes the cached copy. Similar pseudo code is as follows:

```js
  import Vue from 'vue'
  import { Locale } from 'cube-ui'
  import enUSMessages from 'cube-ui/src/locale/lang/en-US'

  // Load Chinese language pack by default
  Vue.use(Locale)

  // Switch to English and need to import the English language pack
  one.click(() =>{
    Locale.use('en-US', enUSMessages)
  })

  another.click(() => {
    // load Chinese from cache
    Locale.use('zh-CN')
  })
```

But maybe you have translation needs in other countries, such as Japanese and Korean, then you need to provide the language pack yourself and switch to the corresponding language. code show as below:

```js
  import Vue from 'vue'
  import { Locale } from 'cube-ui'
  import jPMessages from '/somewhere/ja-JP.js' // Your own language

  Vue.use(Locale)

  // Switch to Japanese and need to import Japanese language packs
  Locale.use('ja-JP', jPMessages)
```

The configuration item format of the language pack you import should be similar to the following. The default Chinese language pack is as follows:

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

## Internationalization of applications<sup>1.12.23+</sup>

As mentioned above, cube-ui provides international capabilities for its own components, but this capability can be extended to your application in two steps:

1. Import language packs

  you must import the language pack, which should be the full set containing the `cube-ui` default language pack. For example, your language pack configuration might look like this:

  ```js
    // default.js
    export default {
      "application_key": "this is application text",
      "country": {
        "province": "Beijing"
      }

      /* defaults of cube-ui*/
      "cancel": "Cancel",
      // ...ignore
      "validator": {/* */}
    }
  ```

  Then import the language pack in your app's entry file.

  ```js
    import Vue from 'vue'
    import { Locale } from 'cube-ui'
    import defaultMessages from 'default.js' // your own language

    Vue.use(Locale)
    Locale.use('zh-CN', defaultMessages)
  ```

2. Ability to inject translations through mixins inside components

  Then use the `mixin` capability provided by `Vue`. cube-ui provides the conversion function `$t` for the language package `key=>value`. You only need to inject it into the component's `mixins` property, and then you can use it in the template. An example is as follows:

  ```js
  // dialog.vue

  import { Locale } from 'cube-ui'
  <script>
    export default {
      //...
      mixins: [Locale.localeMixin] // Inject mixin, have the ability to $t. After v1.12.23
    }
  </script>
  ```

  Then you can reference the `$t()` method in the template.

  ```html
    <template>
      <div>{{$t('application_key')}}</div>
    </template>
  ```

  Finally, `{{$t('application_key')}}` is rendered as `"this is application text"`. Considering that your language pack may be multi-level nested, `$t` also accepts a string with a separator of `"."` to get deep-level properties, such as:

  ```js
  // your language packs structure
  export default {
    a: {
      b: {
        c: "nested c"
      }
    }
  }
  ```

  It is easy to use it in `template`。

  ```html
  <template>
    <div>
      {{$t('a.b.c')}}
    </div>
  </template>
  ```
