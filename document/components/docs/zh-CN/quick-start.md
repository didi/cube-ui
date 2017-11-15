## 快速上手

### 脚手架

如果你打算用在一个新项目中使用 cube-ui，可以通过我们提供的一套基于 [vue-cli](https://github.com/vuejs/vue-cli) 实现的[脚手架](https://github.com/cube-ui/cube-template)去初始化 cube-ui 项目的配置和基础代码，这样你就可以忽略后续的安装步骤，直接看使用部分。

```shell
$ vue init cube-ui/cube-template projectname
```

如果你打算在现有项目中使用 cube-ui，请先参考安装部分。

### 安装

#### NPM

```shell
$ npm install cube-ui --save
```

cube-ui 搭配 webpack 2+ 支持[后编译](#/zh-CN/docs/post-compile)和普通编译 2 种构建方式（默认使用后编译），使用前都需要修改应用的依赖和配置。

- 后编译

1. 修改 package.json 并安装依赖

  ```json
  {
    // webpack-post-compile-plugin 依赖 compileDependencies
    "compileDependencies": ["cube-ui"],
    "devDependencies": {
      "babel-plugin-transform-modules": "^0.1.0",
      // 新增 stylus 相关依赖
      "stylus": "^0.54.5",
      "stylus-loader": "^2.1.1",
      "webpack-post-compile-plugin": "^0.1.2"
    }
  }
  ```

2. 修改 .babelrc，依赖 [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules)：

  ```json
  {
    "plugins": [
      ["transform-modules", {
        "cube-ui": {
          // 注意: 这里的路径需要修改到 src/modules 下
          "transform": "cube-ui/src/modules/${member}",
          "kebabCase": true
        }
      }]
    ]
  }
  ```

3. 修改 webpack.base.conf.js

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

4. 修改 build/utils.js 中的 `exports.cssLoaders` 函数

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

  具体参见 [https://github.com/vuejs-templates/webpack/pull/970/files](https://github.com/vuejs-templates/webpack/pull/970/files)

- 普通编译

1. 修改 package.json 并安装依赖
  ```json
  {
    "devDependencies": {
      "babel-plugin-transform-modules": "^0.1.0"
    }
  }
  ```

2. 修改 .babelrc

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

3. 修改 webpack 配置：

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

你可以选择全局注册也可以选择局部注册：

```js
// 全局注册
Vue.use(Button)

// 或者局部注册
// 某个组件中
{
  components: {
    CubeButton: Button
  }
}
```

所有的可按需引入的组件：

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

也可以引入[create-api](#/zh-CN/docs/create-api)和[better-scroll](#/zh-CN/docs/better-scroll)模块：

```js
import { createAPI, BetterScroll } from 'cube-ui'
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