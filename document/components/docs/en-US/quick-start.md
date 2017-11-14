## Quick start

### Install

NPM:
```shell
$ npm install cube-ui --save
```

Or CDN:
```html
<script src="https://unpkg.com/cube-ui/lib/cube.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/cube-ui/lib/cube.min.css">
```

### Usage

It is recommended to use [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules),which helps you import component modules and corresponding styles more elegantly.

Before use, the plugin needs some configuration. Modify .babelrc:

```json
{
  "plugins": [
    ["transform-modules", {
      "cube-ui": {
        "transform": "cube-ui/lib/${member}",
        "kebabCase": true,
        "style": {
          "ignore": ["create-api", "better-scroll"]
        }
      }
    }]
  ]
}
```

**Notice:** By default cube-ui will use [post-compile](#/en-US/docs/post-compile) with webpack 2+, but post-complie needs some dependencies and configuration(see the last part in this page). If you don't want to use post-compile, just modify the webpack config file:

```js
// webpack.config.js

module.exports = {
  // ...
  resolve: {
    // ...
    alias: {
      // ...
      'cube-ui': 'cube-ui/lib'
      // ...
    }
    // ...
  }
  // ...
}
```

#### Fully import

Commonly in the entry file:

```javascript
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### Import on demand

```javascript
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from 'cube-ui'
```

**Notice:** In this case, you also need to import [style module](#/en-US/docs/style).

You can choose to register globally or partially:

```js
// register globally
Vue.use(Button)

// or register partially
// in certain somponents
{
  components: {
    CubeButton: Button
  }
}
```
All the components that can be imported on demand are listed below:

```js
import {
  Button,
  Checkbox,
  CheckboxGroup,
  Loading,
  Tip,
  Popup,
  Toast,
  Picker,
  TimePicker,
  Dialog,
  ActionSheet,
  Scroll,
  Slide,
  IndexList
} from 'cube-ui'
```

You can also import [create-api](#/en-US/docs/create-api) and [better-scroll](#/en-US/docs/better-scroll) module:

```js
import { createAPI, BetterScroll } from 'cube-ui'
```

#### Examples

```html
<template>
  <cube-button @click="showDialog">show dialog</cube-button>
</template>

<script>
  export default {
    methods: {
      showDialog() {
        this.$createDialog({
          type: 'alert',
          title: 'Alert',
          content: 'dialog content'
        }).show()
      }
    }
  }
</script>
```

### Use post-compile

Since cube-ui will use [post-compile](#/en-US/docs/post-compile) with webpack 2+ by default, your application's webpack and babel configuration needs to be compatible with cube-ui.

Follow the steps below:

1. Modify package.json

  ```json
  {
    // webpack-post-compile-plugin depends on compileDependencies
    "compileDependencies": ["cube-ui"],
    "devDependencies": {
      "babel-plugin-transform-modules": "^0.1.0",
      // add stylus dependencies
      "stylus": "^0.54.5",
      "stylus-loader": "^2.1.1",
      "webpack-post-compile-plugin": "^0.1.2"
    }
  }
  ```

2. Modify .babelrc, use [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules):

  ```json
  {
    "plugins": ["transform-modules", {
      "cube-ui": {
        // Notice: this path should be changed to `src/modules`
        "transform": "cube-ui/src/modules/${member}",
        "kebabCase": true
      }
    }]
  }
  ```

3. Modify webpack.base.conf.js

  ```js
  var PostCompilePlugin = require('webpack-post-compile-plugin')
  module.exports = {
    // ...
    plugins: [
      // ...
      new PostCompilePlugin()
    ]
    // ...
  }
  ```

4. Modify `exports.cssLoaders` function in build/utils.js

  ```js
  exports.cssLoaders = function (options) {
    // ...
    const stylusOptions = {
      'resolve url': true
    }
    // https://vue-loader.vuejs.org/en/configurations/extract-css.html
    return {
      css: generateLoaders(),
      postcss: generateLoaders(),
      less: generateLoaders('less'),
      sass: generateLoaders('sass', { indentedSyntax: true }),
      scss: generateLoaders('sass'),
      stylus: generateLoaders('stylus', stylusOptions),
      styl: generateLoaders('stylus', stylusOptions)
    }
  }
  ```

  See [https://github.com/vuejs-templates/webpack/pull/970/files](https://github.com/vuejs-templates/webpack/pull/970/files)
