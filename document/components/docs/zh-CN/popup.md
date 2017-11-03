## Popup 弹层

底层弹层组件，主要用于基于此组件实现上层组件封装，只提供了基础功能：指定类型、是否有背景层、显示内容（HTML）以及是否居中。

内置所有的弹层类组件都是基于此组件实现，包括：[Toast](#/zh-CN/docs/toast)、[Picker](#/zh-CN/docs/picker)、[TimePicker](#/zh-CN/docs/time-picker)、[Dialog](#/zh-CN/docs/dialog)、[ActionSheet](#/zh-CN/docs/action-sheet)。

### 示例

组件

- 基本用法
  ```html
  <cube-popup type="my-popup" ref="myPopup">
    My Popup Content 1
  </cube-popup>
  <cube-button @click="showPopup('myPopup')">
    Show Popup
  </cube-button>
  ```
  指定类型 `type`，这样方便根据类型做 class 控制，如示例，会在根元素上会增加 `cube-my-popup` 的 class
  ```js
  export default {
    methods: {
      showPopup(refId) {
        const component = this.$refs[refId]
        component.show()
        setTimeout(() => {
          component.hide()
        }, 1000)
      }
    }
  }
  ```
  组件默认是隐藏的，需要调用组件实例的 `show()` 方法才会显示，调用组件实例的 `hide()` 方法隐藏，这里的 `showPopup()` 就是做的这件事情（首先显示，1 秒钟后隐藏）
- 不要背景层
  ```html
  <cube-popup type="my-popup" :mask="false" ref="myPopup2">
    My Popup Content 2
  </cube-popup>
  <cube-button @click="showPopup('myPopup2')">
    Show Popup - no mask
  </cube-button>
  ```
  设置 `mask` 为 `false`，即不显示背景层
- 显示内容 HTML
  ```html
  <cube-popup
    type="my-popup"
    :mask="false"
    content="<i>My Popup Content 3</i>"
    ref="myPopup3" />
  <cube-button @click="showPopup('myPopup3')">
    Show Popup - with content
  </cube-button>
  ```
  只需要传入 `content`，内容是一段 HTML 片段
- 置底
  ```html
  <cube-popup type="my-popup" :center="false" ref="myPopup4">
    My Popup Content 4
  </cube-popup>
  <cube-button @click="showPopup('myPopup4')">
    Show Popup - bottom
  </cube-button>
  ```
  考虑移动端场景，大部分时候弹层类都是居中或置底的（置底的时候是在水平方向铺满的），所以如果设置了 `center` 为 `false` 的话，就是置底的效果
- 上层封装
  ```html
  <template>
    <cube-popup type="extend-popup" ref="popup">
      <div class="cube-extend-popup-content" @click="hide">
        <slot>{{content}}</slot>
      </div>
   </cube-popup>
  </template>
  <script type="text/ecmascript-6">
    const COMPONENT_NAME = 'cube-extend-popup'
    export default {
      name: COMPONENT_NAME,
      props: {
        content: {
          type: String
        }
      },
      methods: {
        show() {
          this.$refs.popup.show()
        },
        hide() {
          this.$refs.popup.hide()
          this.$emit('hide')
        }
      }
    }
  </script>
  <style lang="stylus" rel="stylesheet/stylus">
    .cube-extend-popup
      .cube-extend-popup-content
        padding: 20px
        color: #fff
        background-color: rgba(0, 0, 0, .8)
  </style>
  ```
  这样就实现了一个上层封装的 CubeExtendPopup 组件，自带了一些样式，支持传入内容还有默认插槽，点击内容可隐藏。你可以这样使用（需要全局注册或者局部注册到使用的组件中）：
  ```html
  <cube-extend-popup content="lala" ref="extendPopup"></cube-extend-popup>
  <cube-button @click="$refs.extendPopup.show()">
    Show Extend Popup
  </cube-button>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 弹层类型 | String | - | '' |
| mask | 是否显示背景层 | Boolean | true/false | true |
| content | 内容，HTML 字符串，在无插槽的时候有效 | String | - | '' |
| center | 是否水平垂直居中的 | Boolean | true/false | true |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| mask-click | 背景层点击 | 点击事件对象 |
