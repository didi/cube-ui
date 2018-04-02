## Quick start

### CLI

If you are going to create a new project with cube-ui, use the [cli tools](https://github.com/cube-ui/cube-template) base on [vue-cli](https://github.com/vuejs/vue-cli) to init the config and base code, then you can ignore the <a href="#cube-Install-anchor" class="anchor">Install</a> steps and see the <a href="#cube-Usage-anchor" class="anchor">Usage</a> part directly.

```shell
$ vue init cube-ui/cube-template projectname
```

About cube-template special options: [cube-template WIKI](https://github.com/cube-ui/cube-template/wiki).

If you are going to use cube-ui in an existing project, see the <a href="#cube-Install-anchor" class="anchor">Install</a> part first.

### Install

#### NPM
```shell
$ npm install cube-ui --save
```

Since cube-ui support two compile ways such as [post-compile] (#/en-US/docs/post-compile) and normal compile with webpack 2+(by default using post-compile), you need to modify your application's dependencies and configuration before using it.

- post-compile

  1. Modify package.json and install the dependencies

    ```json
    {
      // webpack-post-compile-plugin depends on compileDependencies
      "compileDependencies": ["cube-ui"],
      // webpack-transform-modules-plugin depends on transformModules
      "transformModules": {
        "cube-ui": {
          "transform": "cube-ui/src/modules/${member}",
          "kebabCase": true
        }
      },
      "devDependencies": {
        "babel-plugin-transform-modules": "^0.1.0",
        // add stylus dependencies
        "stylus": "^0.54.5",
        "stylus-loader": "^2.1.1",
        "webpack-post-compile-plugin": "^0.1.2",
        "webpack-transform-modules-plugin": "^0.3.1"
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
            "ignore": ["create-api", "better-scroll"]
          }
        }
      },
      "devDependencies": {
        "webpack-transform-modules-plugin": "^0.3.1"
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
  // ... more
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
