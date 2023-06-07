## Quick start

> You are currently reading the documentation for cube-ui for Vue 3!

Before using cube-ui, it is assumed that you have knowledge of Vue 3. We recommend using Vite to start your Vue 3 project to get the best development experience, along with Volar.

- [Vue3](https://cn.vuejs.org/guide/introduction.html)
- [Vite](https://cn.vitejs.dev/guide/)
- [Volar](https://marketplace.visualstudio.com/items?itemName=vue.volar)

### Install

#### NPM

```shell
$ npm install cube-ui@alpha --save
```

#### CDN

```html
<script src="https://unpkg.com/cube-ui/lib/cube.umd.js"></script>
<link rel="stylesheet" href="https://unpkg.com/cube-ui/lib/cube.min.css">
```

### Usage

#### Import on demand(recommended)

Commonly in the entry file:

```javascript
import 'cube/cube.min.css'
```

Importing Cube UI components in your component:

```javascript
import { Button } from 'cube-ui'
```

Note: Importing CSS on demand needs to be implemented with plugins like `babel-import`

You can also register Cube UI components globally:

```js
// 全局注册
createApp().use(Button)
// ...
```

#### Fully import(not recommended)

Commonly in the entry file:

```javascript
// main.ts
import { createApp } from 'vue'
import Cube from 'cube-ui'

import 'cube/cube.min.css'

createApp().use(Cube)
```

#### All the components and modules that can be imported on demand are listed below

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
### TypeScript Development Tooling

We will start to provide better support for TypeScript in v1.12.39.

> If you use [Visual Studio Code](https://code.visualstudio.com/) + [Vetur](https://github.com/vuejs/vetur) for development

#### TypeScript
  TypeScript version >= [4.1](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-4-1.html)
#### Visual Studio Code

  Visual Studio Code version >= [1.52.0](https://github.com/vuejs/vetur/releases/tag/v0.30.3)

#### Vetur
  Vetur version >= [0.30.3](https://github.com/microsoft/vscode/releases/tag/1.52.0)
