## 快速上手

### 安装

```shell
$ npm install cube-ui --save
```

### 使用

推荐使用 [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules) 插件，可以更优雅引入组件模块以及对应的样式。

但在使用之前，需要配置下这个插件，修改 .babelrc：

```json
{
  "plugins": ["transform-modules", {
    "cube-ui": {
      "transform": "cube-ui/lib/${member}",
      "kebabCase": true,
      "style": true
    }
  }]
}
```

如果不使用 babel-plugin-transform-modules 插件的话，需要手工引入对应的样式文件：

```js
import 'cube-ui/lib/style.css'
```

**注意：** cube-ui 搭配 webpack 2+ 默认就会使用[后编译](#/zh-CN/docs/post-compile)，但是后编译需要有一些依赖以及配置（参见本页最后）；如果不想使用后编译的话，可以直接修改 webpack 配置即可：

```js
// webpack.config.js

module.exports = {
  // ...
  resolve: {
    // ...
    // https://webpack.js.org/configuration/resolve/#resolve-mainfields
    mainFields: ["main"]
  }
  // ...
}
```

#### 全部引入

一般在入口文件中：

```javascript
import Vue from 'vue'
import Cube from 'cube-ui'

Vue.use(Cube)
```

#### 按需引入

```javascript
import { Button } from 'cube-ui'
```

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
  Loading,
  Tip,
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

#### 示例

```html
<template>
  <cube-button @click="showDiaog">show dialog<cube-button>
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

### 使用后编译

cube-ui 搭配 webpack 2+ 后就会默认使用[后编译](#/zh-CN/docs/post-compile)，那么应用就需要兼容 cube-ui 的依赖和配置。

1. 修改 package.json

  ```json
  {
    // webpack-post-compile-plugin 依赖 compileDependencies
    "compileDependencies": ["cube-ui"],
    "devDependencies": {
      // 新增 stylus 相关依赖
      "stylus": "^0.54.5",
      "stylus-loader": "^2.1.1",
      "webpack-post-compile-plugin": "^0.1.2"
    }
  }
  ```

2. 修改 .babelrc：

  ```json
  {
    "plugins": [
      ["transform-modules", {
        "cube-ui": {
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
