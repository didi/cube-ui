## Internationalization

The ube-ui component uses Chinese internally by default. If you want to use another language, you need to set it in multiple languages. Take English as an example in main.js:

```js
  // Full import
  import Vue from 'vue'
  import CubeUI from 'cube-ui'
  import Locale from 'cube-ui/lib/locale'
  import enUSMessages from 'cube-ui/lib/locale/lang/en-US' // Built-in in Cube-ui
  import jaJPMessages from '../some/path/lang/ja-JP' // Import Japanese language by yourself

  Vue.use(CubeUI)
  Locale.use('en-US', enUSMessages)
  Locale.use('ja-JP', jaJPMessages)
```

Or, import by module

```js

  // Only import ActionSheet
  import Vue from 'vue'
  import { ActionSheet } from 'cube-ui'
  import Locale from 'cube-ui/lib/locale'
  import enUSMessages from 'cube-ui/lib/locale/lang/en-US'

  Vue.use(Locale)
  Locale.use('en-US', enUSMessages)

```

Cube-ui will watch the current language type, so it automatically renders once language type has changed, and caches the loaded translation. When the language type is switched and the language translation is already installed, cube-ui directly takes the cached copy. Similar pseudo code is as follows:

```js

  // Only import ActionSheet
  import Vue from 'vue'
  import { ActionSheet } from 'cube-ui'
  import Locale from 'cube-ui/lib/locale'
  import enUSMessages from 'cube-ui/lib/locale/lang/en-US'

  // Chinese translation by default
  Vue.use(Locale)

  // Click to switch English language translation
  one.click(() =>{
    Locale.use('en-US', enUSMessages)
  })

  // Switch back to default
  another.click(() => {
    // Take the translation from the cache
    Locale.use('zh-CN')
  })

```
