## 国际化

cube-ui 组件内部默认使用中文，若希望使用其他语言，则需要进行多语言设置。以英文为例，在 main.js 中：

```js
  // 完整引入 cube-ui
  import Vue from 'vue'
  import CubeUI from 'cube-ui'
  import Locale from 'cube-ui/lib/locale'
  import enUSMessages from 'cube-ui/lib/locale/lang/en-US' // cube-ui 内置
  import jaJPMessages from '../some/path/lang/ja-JP' // 自己引入日语语言包

  Vue.use(CubeUI)
  Locale.use('en-US', enUSMessages)
  Locale.use('ja-JP', jaJPMessages)
```

或者按需引入

```js

  // 按需引入 ActionSheet
  import Vue from 'vue'
  import { ActionSheet } from 'cube-ui'
  import Locale from 'cube-ui/lib/locale'
  import enUSMessages from 'cube-ui/lib/locale/lang/en-US'

  Vue.use(Locale)
  Locale.use('en-US', enUSMessages)

```

cube-ui 会监听当前的语言类型，因此自动渲染组件对应的文案，同时缓存加载过的文案，在做组件语言切换的时候，如果语言包已经安装，cube-ui 直接取缓存的文案。类似伪代码如下：

```js

  // 按需引入 ActionSheet
  import Vue from 'vue'
  import { ActionSheet } from 'cube-ui'
  import Locale from 'cube-ui/lib/locale'
  import enUSMessages from 'cube-ui/lib/locale/lang/en-US'

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

