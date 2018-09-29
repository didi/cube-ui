## Popup 弹层

底层弹层组件，主要用于基于此组件实现上层组件封装，只提供了基础功能：指定类型、是否有背景层、显示内容（HTML）以及是否居中。

内置弹层类组件基本都是基于此组件实现，包括：[Toast](#/zh-CN/docs/toast)、[Picker](#/zh-CN/docs/picker)、[CascadePicker](#/zh-CN/docs/cascade-picker)、[DatePicker](#/zh-CN/docs/date-picker)、[TimePicker](#/zh-CN/docs/time-picker)、[SegmentPicker](#/zh-CN/docs/segment-picker)、[Dialog](#/zh-CN/docs/dialog)、[ActionSheet](#/zh-CN/docs/action-sheet)。

__注：__ 以上组件都是基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

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
- 控制位置&蒙层点击隐藏<sup>1.9.6</sup>
  ```html
  <cube-popup type="my-popup" :position="position" :mask-closable="true" ref="myPopup4">My Popup Content 4</cube-popup>
  <cube-button @click="showPopup">top/right/bottom/left/center</cube-button>
  ```
  ```js
  const positions = ['top', 'right', 'bottom', 'left', 'center']
  let cur = 0
  export default {
    data() {
      return {
        position: ''
      }
    },
    methods: {
      showPopup() {
        this.position = positions[cur++]
        if (cur === positions.length) {
          cur = 0
        }
        const component = this.$refs.myPopup4
        component.show()
        setTimeout(() => {
          component.hide()
        }, 2000)
      }
    }
  }
  ```
  可通过 `position` 控制内容出现位置，通过 `mask-closable` 控制点击蒙层是否关闭。

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
  <cube-extend-popup content="click here hide" ref="extendPopup"></cube-extend-popup>
  <cube-button @click="$refs.extendPopup.show()">
    Show Extend Popup
  </cube-button>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| type | 弹层类型 | String | - | '' |
| mask | 是否显示背景层 | Boolean | true/false | true |
| content | 内容，HTML 字符串，在无插槽的时候有效 | String | - | '' |
| center | 是否水平垂直居中的 | Boolean | true/false | true |
| position<sup>1.9.6</sup> | 内容展示位置，优先级比 center 高 | String | top/right/bottom/left/center | '' |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | false |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | - | 100 |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| mask-click | 背景层点击 | 点击事件对象 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
