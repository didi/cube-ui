## 介绍

cube-ui 是基于 Vue.js 实现的精致移动端组件库。

### 特性

- **质量可靠**

   由滴滴内部组件库精简提炼而来，经历了业务一年多的考验，并且每个组件都有充分单元测试，为后续集成提供保障。

- **体验极致**

   以迅速响应、动画流畅、接近原生为目标，在交互体验方面追求极致。

- **标准规范**

  遵循统一的设计交互标准，高度还原设计效果；接口标准化，统一规范使用方式，开发更加简单高效。

- **扩展性强**

  支持按需引入和[后编译](#/zh-CN/docs/post-compile)，轻量灵活；扩展性强，可以方便地基于现有组件实现二次开发。

### 组件

#### 基础

- [Button 按钮](#/zh-CN/docs/button)
- [Loading 加载中](#/zh-CN/docs/loading)
- [Tip 提示](#/zh-CN/docs/tip)
- [Toolbar 工具条](#/zh-CN/docs/toolbar)
- [TabBar 选项卡](#/zh-CN/docs/tab-bar)

#### 表单

- [Checkbox 复选框](#/zh-CN/docs/checkbox)
- [CheckboxGroup 复选框组](#/zh-CN/docs/checkbox-group)
- [Radio 单选框](#/zh-CN/docs/radio)
- [Input 输入框](#/zh-CN/docs/input)
- [Textarea](#/zh-CN/docs/textarea)
- [Select 选择](#/zh-CN/docs/select)
- [Switch 开关切换](#/zh-CN/docs/switch)
- [Rate 评级](#/zh-CN/docs/rate)
- [Validator 校验器](#/zh-CN/docs/validator)
- [Upload 上传](#/zh-CN/docs/upload)
- [Form 表单](#/zh-CN/docs/form)

#### 弹层

- [Popup](#/zh-CN/docs/popup)
- [Toast 提醒](#/zh-CN/docs/toast)
- [Picker 选择器](#/zh-CN/docs/picker)
- [CascadePicker 级联选择器](#/zh-CN/docs/cascade-picker)
- [DatePicker 日期选择器](#/zh-CN/docs/date-picker)
- [TimePicker 时间选择器](#/zh-CN/docs/time-picker)
- [SegmentPicker 段选择器](#/zh-CN/docs/segment-picker)
- [Dialog 弹框](#/zh-CN/docs/dialog)
- [ActionSheet 操作菜单](#/zh-CN/docs/action-sheet)
- [Drawer 抽屉](#/zh-CN/docs/drawer)
- [ImagePreview 图片预览](#/zh-CN/docs/image-preview)

绝大多数的弹层类组件可以通过组件调用和 API 调用，来看示例（`Toast` 为例）：

组件调用：

```html
<template>
  <cube-button @click="showToast">show toast</cube-button>
  <cube-toast ref="toast" :txt="toastTxt"></cube-toast>
</template>
<script>
  export default {
    data() {
      return {
        toastTxt: 'toast content'
      }
    },
    methods: {
      showToast() {
        this.$refs.toast.show()
      }
    }
  }
</script>
```

API 调用：

```html
<template>
  <cube-button @click="showToast">show toast</cube-button>
</template>
<script>
  export default {
    data() {
      return {
        toastTxt: 'toast content'
      }
    },
    methods: {
      showToast() {
        this.$createToast({
          txt: this.toastTxt
        }).show()
      }
    }
  }
</script>
```

两种方式都可以，但是我们推荐后者，通过 `$createXxYy` API 来调用；通过 API 调用的话，这个弹框是附加到 `body` 元素下的，这样的好处是可以不受外层样式的影响，因为组件调用的话，很容易受到外层 `transform`, `overflow` 等样式的影响。

注意这个 API 的名字的组合就是：`$create` + `${组件名字}`，例如 `ActionSheet` 组件的话，API 名字就是 `$createActionSheet`。

#### 滚动

- [Scroll 滚动](#/zh-CN/docs/scroll)
- [Slide 幻灯片](#/zh-CN/docs/slide)
- [IndexList 索引列表](#/zh-CN/docs/index-list)
- [Swipe 滑块](#/zh-CN/docs/swipe)
- [Sticky 吸附](#/zh-CN/docs/sticky)
- [ScrollNavBar 滚动导航条](#/zh-CN/docs/scroll-nav-bar)
- [ScrollNav 滚动导航](#/zh-CN/docs/scroll-nav)

滚动类组件一般都是基于 [better-scroll](https://github.com/ustbhuangyi/better-scroll) 实现，而 `Scroll` 组件就是对 better-scroll 的封装。

### 模块

除了组件之外，cube-ui 还有一些特殊的模块。

#### style

样式部分，如果你是在按需引入使用的场景下，那么建议在入口文件处也要引入这个模块，因为它包含基础的 reset、基础通用样式以及内置 icon。

详见 [style 模块](#/zh-CN/docs/style)。

#### create-api

有些时候，开发者可能也需要自己封装的组件支持 API 式调用，此时可以通过引入 create-api 模块或者通过全局的 `Cube.createAPI` 接口来达到封装目的。

详见 [create-api 模块](#/zh-CN/docs/create-api)。

#### better-scroll

[better-scroll](https://github.com/ustbhuangyi/better-scroll) 是组件库依赖的一个库，为了避免重复引入问题，我们暴露出了这个模块。

详见 [better-scroll 模块](#/zh-CN/docs/better-scroll)。
