## 快速上手

- 新手教程项目：[cube-application-guide](https://github.com/cube-ui/cube-application-guide)
- 遇到问题，先移步 [QA](https://github.com/cube-ui/question-answer/issues)
- 使用 nuxt，请参考[示例仓库](https://github.com/cube-ui/cube-nuxt-demo)

### 脚手架

#### vue-cli >= 3

如果你正在使用新版本的 Vue CLI vue-cli@3，那么推荐你直接使用 [vue-cli-plugin-cube-ui](https://github.com/cube-ui/vue-cli-plugin-cube-ui) 插件。在你初始化完项目后直接执行 `vue add cube-ui` 即可。

在执行的时候，会询问一些配置项，这个和老版本的 [模板](https://github.com/cube-ui/cube-template) 配置是一样的，参见 [cube-template WIKI](https://github.com/cube-ui/cube-template/wiki)。

执行完成后，你可以直接进入<a href="#cube-使用-anchor" class="anchor">使用部分</a>。

#### vue-cli < 3

如果你打算用在一个新项目中使用 cube-ui，可以通过我们提供的一套基于 [vue-cli](https://github.com/vuejs/vue-cli) 实现的[脚手架模板](https://github.com/cube-ui/cube-template)去初始化 cube-ui 项目的配置和基础代码，这样你就可以忽略<a href="#cube-安装-anchor" class="anchor">安装</a>步骤，直接看<a href="#cube-使用-anchor" class="anchor">使用部分</a>。

```shell
$ vue init cube-ui/cube-template projectname
```

关于初始化时特殊的配置项，请参考 [cube-template WIKI](https://github.com/cube-ui/cube-template/wiki)。

如果你打算在现有项目中使用 cube-ui，请先参考<a href="#cube-安装-anchor" class="anchor">安装</a>部分。

### 安装

> 此安装部分只针对于 vue-cli < 3 的情况

#### NPM

```shell
$ npm install cube-ui --save
```

cube-ui 搭配 webpack 2+ 支持[后编译](#/zh-CN/docs/post-compile)和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。

- 后编译

  1. 修改 package.json 并安装依赖

    ```json
    {
      // webpack-transform-modules-plugin 依赖 transformModules
      "transformModules": {
        "cube-ui": {
          "transform": "cube-ui/src/modules/${member}",
          "kebabCase": true
        }
      },
      "devDependencies": {
        // 新增 stylus 相关依赖
        "stylus": "^0.54.5",
        "stylus-loader": "^2.1.1",
        "webpack-post-compile-plugin": "^1.0.0",
        "webpack-transform-modules-plugin": "^0.4.3"
      }
    }
    ```

  2. 修改 webpack.base.conf.js

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

  3. 修改 build/utils.js 中的 `exports.cssLoaders` 函数

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

  4. 修改 vue-loader.conf.js

    ```javascript
    module.exports = {
      loaders: utils.cssLoaders({
        sourceMap: sourceMapEnabled,
        extract: false
      }),
      // ...
    }
    ```

    具体参见 [https://github.com/vuejs-templates/webpack/pull/970/files](https://github.com/vuejs-templates/webpack/pull/970/files)

- 普通编译

  1. 修改 package.json 并安装依赖
    ```json
    {
      // webpack-transform-modules-plugin 依赖 transformModules
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

  2. 修改 webpack 配置：

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

### 使用

#### 全部引入

一般在入口文件中：

```javascript
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### 按需引入

```javascript
import {
  /* eslint-disable no-unused-vars */
  Style,
  Button
} from 'cube-ui'
```

**注意：** 按需引入的话，是不会打包[基础样式](#/zh-CN/docs/style)部分的，所以在使用的时候需要引入 style 模块。

我们推荐直接全局注册：

```js
// 全局注册
Vue.use(Button)
// ...
```

所有的可按需引入的组件以及模块：

```js
import {
  // 基础样式
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

也可以引入[create-api](#/zh-CN/docs/create-api)和[better-scroll](#/zh-CN/docs/better-scroll)模块：

```js
import { createAPI, BetterScroll, Locale } from 'cube-ui'
```

#### 示例

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
