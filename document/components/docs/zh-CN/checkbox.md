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

- 禁用状态

  ```html
  <cube-checkbox v-model="checked" :disabled="true">
    Disabled Checkbox
  </cube-checkbox>
  ```
  设置 `disabled` 为 `true` 即为禁用状态。

- 复选框图标位置

  ```html
  <cube-checkbox v-model="checked" position="right">
    Position Checkbox
  </cube-checkbox>
  ```
  设置 `position` 为 `'right'` 则复选框图标位置在右边。

- 改变 model 的值

  ```html
  <cube-checkbox v-model="checked" label="labelValue">
    Set label Checkbox
  </cube-checkbox>
  ```

  设置 `label`，当复选框选中的时候，`checked` 的值就是 `'labelValue'`，当未选中的时候，`checked` 的值就是 `false`；所以其实在单个复选框的场景下，最好不要设置 `label`。

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| disabled | 是否被禁用 | Boolean | true/false | false |
| position | 位置 | String | left/right | left |
| label | 如果选中的话，则是把该值映射到 v-model 上 | Boolean/String | - | '' |
