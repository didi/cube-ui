## ActionSheet

`ActionSheet`操作列表提供了两种常见的样式，灵活可控内容。

__注：__ 由于此组件基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 基本用法

  ```html
  <cube-button @click="showDefault">操作列表</cube-button>
  ```
  ```js
  export default {
    methods: {
      showDefault() {
        this.$createActionSheet({
          title: '我是标题~~~',
          data: [
            {
              content: '<em>align - center</em>',
              class: 'cube-foo'
            },
            {
              content: 'align - left',
              align: 'left'
            },
            {
              content: 'align - right',
              align: 'right'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  配置标题 `title` 和 `data` 数据项，注意 `data` 中内容是 `content`，一段 HTML 字符串，额外还可以配置自定义 class：`class` 和方向：`align`（值可以是 `left`、`right`）。

- 高亮设置

  ```html
  <cube-button @click="showActive">ActionSheet - active</cube-button>
  ```
  ```js
  export default {
    methods: {
      showActive() {
        this.$createActionSheet({
          title: '我是标题~~~',
          active: 0,
          data: [
            {
              content: '舒适型'
            },
            {
              content: '七座商务'
            },
            {
              content: '豪华型'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              txt: `Clicked canceled`,
              type: 'warn',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  通过设置 `active` 属性来控制高亮的是第几个。

- Picker 样式设定
  ```html
  <cube-button @click="showPickerStyle">ActionSheet - picker style</cube-button>
  ```
  ```js
  export default {
    methods: {
      showPickerStyle() {
        this.$createActionSheet({
          title: '我是标题~~~',
          pickerStyle: true,
          data: [
            {
              content: '舒适型'
            },
            {
              content: '七座商务'
            },
            {
              content: '豪华型'
            }
          ],
          onSelect: (item, index) => {
            this.$createToast({
              txt: `Clicked ${item.content}`,
              type: 'correct',
              time: 1000
            }).show()
          },
          onCancel: () => {
            this.$createToast({
              txt: `Clicked canceled`,
              type: 'warn',
              time: 1000
            }).show()
          }
        }).show()
      }
    }
  }
  ```

  `pickerStyle` 属性决定是否使用 Picker 样式。


### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | 组件的标题 | String | - | '' |
| cancelTxt<sup>1.9.9</sup> | 取消文案 | String | - | '取消' |
| data | 需要展示的数据列表 | Array | - | [] |
| active | 高亮第几个选项 | Number | - | -1 |
| pickerStyle | Picker 样式 | Boolean | true/false | false |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |
| maskClosable<sup>1.9.6</sup> | 点击蒙层是否隐藏 | Boolean | true/false | true |
| zIndex<sup>1.9.6</sup> | 样式 z-index 的值 | Number | - | 100 |

* `data` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| content | 展示的内容 | String | 任意 HTML 字符串 | '' |
| align | 内容对齐方向 | String | left/right | '' |
| class | 自定义 class | String | - | '' |

### 事件

| 参数 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| cancel | 点击取消 | - | - |
| select | 点击某项 | 点击项 item，即 data[index] | 点击项的索引值 index |

### 实例方法

| 方法名 | 说明 |
| - | - |
| show | 显示 |
| hide | 隐藏 |
