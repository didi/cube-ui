## 快速上手

> 你正在阅读的是 `cube-ui for Vue 3` 的文档！

使用 cube-ui 之前，假设您已经了解 Vue 3 的相关知识，我们推荐您使用 Vite 来启动 Vue 3 项目，配合 Volar 您会获得上佳的开发体验

- [Vue3](https://cn.vuejs.org/guide/introduction.html)
- [Vite](https://cn.vitejs.dev/guide/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

### 安装

#### NPM

```shell
$ npm install cube-ui@alpha --save
```

#### CDN

```html
<script src="https://unpkg.com/cube-ui/lib/cube.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/cube-ui/lib/cube.min.css">
```

### 使用

#### 按需引入（推荐）

一般在入口文件中：

```javascript
import 'cube/cube.min.css'
```

在组件中导入 cube-ui 组件：

```javascript
import { Button } from 'cube-ui'
```

注：按需引入 css 需要配合类似 `babel-import` 的插件来实现

也可以直接全局注册：

```js
// 全局注册
createApp().use(Button)
// ...
```

#### 全部引入（不推荐）

一般在入口文件中：

```javascript
// main.ts
import { createApp } from 'vue'
import Cube from 'cube-ui'

import 'cube/cube.min.css'

createApp().use(Cube)
```

#### 所有的可按需引入的组件以及模块

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
### TypeScript 开发工具

我们将在 v1.12.39 开始提供对 TypeScript 更好的支持。

> 如果你使用 [Visual Studio Code](https://code.visualstudio.com/) + [Vetur](https://github.com/vuejs/vetur) 进行开发

#### TypeScript
  TypeScript 版本需 >= [4.1](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html)
#### Visual Studio Code

  Visual Studio Code 版本需 >= [1.52.0](https://github.com/vuejs/vetur/releases/tag/v0.30.3)

