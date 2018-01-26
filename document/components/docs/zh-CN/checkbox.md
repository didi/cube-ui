## Checkbox 复选框

复选框，可设置其状态、传入特殊 class 以及复选框图标位置。

### 示例

- 基本用法

  ```html
  <cube-checkbox v-model="checked">
    Checkbox
  </cube-checkbox>
  ```
  如果选中了，则 `checked` 的值就为 `true`。

- 复选框图标位置

  ```html
  <cube-checkbox v-model="checked" position="right">
    Position Checkbox
  </cube-checkbox>
  ```
  设置 `position` 为 `'right'` 则复选框图标位置在右边。

- 改变 model 的值

  ```html
  <cube-checkbox v-model="checked" :option="option" />
  ```
  ```js
  export default {
    data() {
      return {
        checked: false,
        option: {
          label: 'Option Checkbox',
          value: 'optionValue',
          disabled: false
        }
      }
    }
  }
  ```

  设置 `option`，当复选框选中的时候，`checked` 的值就是 `'optionValue'`，当未选中的时候，`checked` 的值就是 `false`；所以其实在单个复选框的场景下，最好不要设置 `option`。

- 禁用状态

  ```html
  <cube-checkbox v-model="checked" :option="{disabled: true}">
    Disabled Checkbox
  </cube-checkbox>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| option | 配置项 | Boolean/String/Object | - | - |
| position | 位置 | String | left/right | left |

* `option` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 复选框显示文字 | String |
| value | 复选框的值 | String/Number |
| disabled | 复选框是否被禁用 | Boolean |
