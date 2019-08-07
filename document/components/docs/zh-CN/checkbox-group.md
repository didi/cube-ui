## CheckboxGroup 复选框组

复选框组就是一组复选框，主要用来选择一组可选项；有垂直和水平两种样式。

### 示例

- 垂直排列

  默认就是垂直排列样式
  ```html
  <cube-checkbox-group v-model="checkList" :options="options" />
  ```
  ```js
  export default {
    data() {
      return {
        checkList: ['1', '4'],
        options: [
          '1',
          '2',
          {
            label: '3',
            value: '3',
            disabled: true
          },
          {
            label: '4',
            value: '4',
            disabled: true
          }
        ]
      }
    }
  }
  ```
  `checkList` 的值是一个数组，代表的是选中的复选框 `value` 的值的集合。

- 水平排列、图标形状、镂空样式

  可通过设置 `horizontal` 改变样式为水平排列，另外，还可以通过 `shape` 配置图标形状以及通过设置 `hollow-style` 为 `true` 改变为镂空样式。

  ```html
  <cube-checkbox-group v-model="checkList" :options="options" :horizontal="true" shape="square" :hollow-style="true" />
  ```

- 自定义 label

  ```html
  <cube-checkbox-group v-model="checkList">
    <cube-checkbox option="1"><i>Checkbox 1</i></cube-checkbox>
    <cube-checkbox option="2"><i>Checkbox 2</i></cube-checkbox>
    <cube-checkbox :option="{value: '3', disabled: true}"><i>Disabled Checkbox</i></cube-checkbox>
    <cube-checkbox :option="{value: '4', disabled: true}"><i>Disabled & Checked Checkbox</i></cube-checkbox>
  </cube-checkbox-group>
  ```

  可通过默认插槽插入 `cube-checkbox` 实现自定义每项的结构样子，关于 `cube-checkbox`，请参考其[文档](#/zh-CN/docs/checkbox)。

- 自定义列数<sup>1.12.28</sup>

  可通过设计 `colNum` 控制一行中有几列，colNum 小于1时，按1处理
  ```html
    <cube-checkbox-group v-model="colCheckList" :options="colOptions" :col-num="3" />
  ```
  ```js
  export default {
    data() {
      return {
        colCheckList: [],
        colOptions: ['1', '2', '3', '4', '5', '6', '7', '8']
      }
    }
  }
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| options | 选项数组 | Array | - | - |
| horizontal | 是否水平排列 | Boolean | true/false | false |
| colNum<sup>1.12.28</sup> | 一行有几列 | Number | - | 1 |
| shape | 图标形状 | String | circle/square | circle |
| hollowStyle | 是否是镂空样式的 | Boolean | true/false | false |
| min<sup>1.11.0</sup> | 最小选择个数 | Number | - | 0 |
| max<sup>1.11.0</sup> | 最大选择个数 | Number | - | Infinite |

* `options` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 复选框显示文字 | String |
| value | 复选框的值 | String/Number |
| disabled | 复选框是否被禁用 | Boolean |

注：如果 `options` 中的项为字符串也是可以的，此时默认 `label` 和 `value` 的值都为该字符串的值。

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| checked | 勾选复选框组中的某一项时触发 | 当前勾选的复选框值 |
| cancel-checked | 取消勾选复选框组中的某一项时触发 | 当前取消勾选的复选框值 |
| input | 当绑定值变化时触发 | 当前选中的复选框值的集合 |
