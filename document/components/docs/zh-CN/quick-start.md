## 快速上手

### 安装

```shell
$ npm install cube-ui --save
```

### 使用

推荐使用 [babel-plugin-transform-modules](https://www.npmjs.com/package/babel-plugin-transform-modules) 插件，可以更优雅引入组件模块以及对应的样式。

但在使用之前，需要配置下这个插件，修改 .babelrc：

- webpack 1.x
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
- webpack 2+
  ```json
  {
    "plugins": ["transform-modules", {
      "cube-ui": {
        "transform": "cube-ui/src/modules/${member}",
        "kebabCase": true
      }
    }]
  }
  ```

> [为何要区分 webpack 版本？](#/zh-CN/docs/post-compile)

如果不使用 babel-plugin-transform-modules 插件的话，需要手工引入对应的样式文件。

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
