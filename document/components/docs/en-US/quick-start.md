## Quick start

- [Application Guide](https://github.com/cube-ui/cube-application-guide)
- Have problems? See [QA](https://github.com/cube-ui/question-answer/issues)
- In nuxt application, see [demo repo](https://github.com/cube-ui/cube-nuxt-demo)

### CLI


#### vue-cli >= 3

If you are using vue-cli@3, you can use [vue-cli-plugin-cube-ui](https://github.com/cube-ui/vue-cli-plugin-cube-ui) plugin. After you inited your project, just run `vue add cube-ui`. About options, see [cube-template WIKI](https://github.com/cube-ui/cube-template/wiki).

Then you can see the <a href="#cube-Usage-anchor" class="anchor">Usage</a> part directly.

#### vue-cli < 3

If you are going to create a new project with cube-ui, use the [cli tools](https://github.com/cube-ui/cube-template) base on [vue-cli](https://github.com/vuejs/vue-cli) to init the config and base code, then you can ignore the <a href="#cube-Install-anchor" class="anchor">Install</a> steps and see the <a href="#cube-Usage-anchor" class="anchor">Usage</a> part directly.

```shell
$ vue init cube-ui/cube-template projectname
```

About cube-template special options: [cube-template WIKI](https://github.com/cube-ui/cube-template/wiki).

If you are going to use cube-ui in an existing project, see the <a href="#cube-Install-anchor" class="anchor">Install</a> part first.

### Install

> This section only used in the case of vue-cli < 3

#### NPM

```shell
$ npm install cube-ui --save
```

Since cube-ui support two compile ways such as [post-compile] (#/en-US/docs/post-compile) and normal compile with webpack 2+(by default using post-compile), you need to modify your application's dependencies and configuration before using it.

- post-compile

  1. Modify package.json and install the dependencies

    ```json
    {
      // webpack-transform-modules-plugin depends on transformModules
      "transformModules": {
        "cube-ui": {
          "transform": "cube-ui/src/modules/${member}",
          "kebabCase": true
        }
      },
      "devDependencies": {
        // add stylus dependencies
        "stylus": "^0.54.5",
        "stylus-loader": "^2.1.1",
        "webpack-post-compile-plugin": "^1.0.0",
        "webpack-transform-modules-plugin": "^0.4.3"
      }
    }
    ```

  2. Modify webpack.base.conf.js

    ```js
    var PostCompilePlugin = require('webpack-post-compile-plugin')
    var TransformModulesPlugin = require('webpack-transform-modules-plugin')
    module.exports = {
      // ...
      plugins: [
        // ...
        new PostCompilePlugin(),
        new TransformModulesPlugin()
      ]
      // ...
    }
    ```

  3. Modify `exports.cssLoaders` function in build/utils.js

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
  4. Modify vue-loader.conf.js

    ```javascript
    module.exports = {
      loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: false
      }),
      // ...
    }

    ```

    See [https://github.com/vuejs-templates/webpack/pull/970/files](https://github.com/vuejs-templates/webpack/pull/970/files)

- Normal compile

  1. Modify package.json and install the dependencies

    ```json
    {
      // webpack-transform-modules-plugin depends on transformModules
      "transformModules": {
        "cube-ui": {
          "transform": "cube-ui/lib/${member}",
          "kebabCase": true,
          "style": {
            "ignore": ["create-api", "better-scroll", "locale"]
          }
        }
      },
      "devDependencies": {
        "webpack-transform-modules-plugin": "^0.4.3"
      }
    }
    ```

  2. Modify webpack config

    ```js
    // webpack.config.js
    var TransformModulesPlugin = require('webpack-transform-modules-plugin')
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
      plugins: [
        // ...
        new TransformModulesPlugin()
      ]
      // ...
    }
    ```

#### CDN

```html
<script src="https://unpkg.com/cube-ui/lib/cube.min.js"></script>
<link rel="stylesheet" href="https://unpkg.com/cube-ui/lib/cube.min.css">
```

### Usage

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

Then register globally:

```js
// register globally
Vue.use(Button)
// ...
```
All the components and modules that can be imported on demand are listed below:

```js
import {
  // basic style
  Style,
  // basic
  Button,
  Loading,
  Tip,
  Toolbar,
  // form
  Checkbox,
  CheckboxGroup,
  Radio,
  Checker,
  Input,
  Textarea,
  Select,
  Switch,
  Rate,
  Validator,
  Upload,
  Form,
  // popup
  Popup,
  Toast,
  Picker,
  CascadePicker,
  DatePicker,
  TimePicker,
  SegmentPicker,
  Dialog,
  ActionSheet,
  Drawer,
  // scroll
  Scroll,
  Slide,
  IndexList,
  Swipe
} from 'cube-ui'
```

You can also import [create-api](#/en-US/docs/create-api) and [better-scroll](#/en-US/docs/better-scroll) module:

```js
import { createAPI, BetterScroll, Locale } from 'cube-ui'
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
