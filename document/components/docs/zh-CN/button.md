## Button

按钮，提供了各种类型、样子、状态以及图标。

### 示例

- 按钮类型

  默认类型为 `button`，还可设置为 `submit` 用于表单中
  ```html
  <cube-button>Button</cube-button>
  <cube-button type="submit">Submit Button</cube-button>
  ```

- 按钮状态

  默认正常，可设置激活、禁用状态
  ```html
  <cube-button :active="true">Active Button</cube-button>
  <cube-button :disabled="true">Disabled Button</cube-button>
  ```
- 图标

  可设置 icon 的 class
  ```html
  <cube-button icon="cubeic-right">Button With Icon</cube-button>
  ```

- 样子

  可以通过设置 `light`、`inline`、`outline`、`primary` 属性来改变按钮样子
  ```html
  <cube-button :light="true">Light Button</cube-button>
  <cube-button :inline="true">Inline Button</cube-button>
  <cube-button :outline="true">Outline Button</cube-button>
  <cube-button :primary="true">Primary Button</cube-button>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| type | 按钮类型 | String | button/submit | button |
| active | 激活状态 | Boolean | true/false | false |
| disabled | 禁用状态 | Boolean | true/false | false |
| icon | 图表 Icon | String | icon 的 class 值 | - |
| light | 亮色 | Boolean | true/false | false |
| inline | 是否内联 | Boolean | true/false | false |
| outline | 外边框 | Boolean | true/false | false |
| primary | 主要的 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| click | 点击按钮后触发此事件，如果禁用状态，则不触发 | e - 事件对象 |
