## Select

> 1.5.0 新增

Select 组件，用于单项选择。

__注：__ 由于此组件依赖 [Picker](#/zh-CN/docs/picker) 组件，而 Picker 组件是基于 create-api 实现，所以在使用之前，请确保自己了解过 [create-api](#/zh-CN/docs/create-api)。

### 示例

- 基本用法

  对于 Select 选择组件，你需要传入 options 定义各个选项，选择的结果则绑定在 v-model 上。

  ```html
  <cube-select
    v-model="value"
    :options="options">
  </cube-select>
  ```
  ```js
  export default {
    data() {
      return {
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016
      }
    }
  }
  ```

- 配置和事件

  Select 支持选择器标题（title）、占位符（placeholder）、自动弹出选择器（autoPop）、禁用（disabled）的配置。并且在选择时，如果选择的值改变了，会派发 change 事件。

  ```html
  <cube-select
    v-model="value"
    :title="title"
    :options="options"
    :placeholder="placeholder"
    :auto-pop="autoPop"
    :disabled="disabled"
    @change="change">
  </cube-select>
  ```
  ```js
  export default {
    data() {
      return {
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        value: 2016,
        title: '入职时间',
        placeholder: '请选择入职时间',
        autoPop: false,
        disabled: false
      }
    },
    methods: {
      change(value, index, text) {
        console.log('change', value, index, text)
      }
    }
  }
  ```

  需要注意的一点是，change 事件在你直接赋值修改 value 的值时，不会触发，只会在选择导致的修改时触发。如果你只是想监听 value 的改变，请直接监听 value。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| options | 选项 | Array | - | [] |
| v-model | 选中的值 | Any | - | - |
| placeholder | 占位文案 | String | - | '请选择' |
| autoPop | 是否自动弹出选择器 | Boolean | true/false | false |
| disabled | 是否禁用 | Boolean | true/false | false |
| title | 选择器的标题 | String | - | '请选择' |
| cancelTxt | 选择器的取消按钮文案 | String | - | '取消' |
| confirmTxt | 选择器的确认按钮文案 | String | - | '确认' |

- `options ` 子配置项

| 参数 | 说明 | 类型 | 可选值 | 示例 |
| - | - | - | - | - |
| value | 该选项的值 | Any | - | - |
| text | 该选项的文案 | String | - | - |

你可以将每个选项定义成一个对象，其中 text 为选项文案，value为选项的值，若没有将该选项定义为对象，比如 2014，则我们内部会把它转化成 { value: 2014, text: 2014 }

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| input | 在选择时，如果选择的值改变了派发 | 选中项的值 | - | - |
| change | 在选择时，如果选择的值改变了派发 | 选中项的值 | 选中项的索引 | 选中项的文案 |
| picker-show | 使用的 Picker 显示的时候派发 | - | - | - |
| picker-hide | 使用的 Picker 隐藏的时候派发（确定或取消都会派发） | - | - | - |
