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

- 复选框图标样式

  ```html
  <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">
    Styled Checkbox
  </cube-checkbox>
  ```
  设置 `position` 为 `'right'` 则复选框图标位置在右边，且可以通过 `shape` 配置图标形状以及设置 `hollow-style` 为 `true` 代表显示的是镂空样式的（即使 `shape` 不是 `square` 表现的也是方形的）。

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

- 处理点击事件

  如果你需要处理点击事件，你需要修改下样式：

  ```html
  <cube-checkbox class="with-click" v-model="checked">
    Agree <a href="javascript:;" @click.stop>《xxx》</a>
  </cube-checkbox>
  ```
  ```styl
  .with-click
    .cube-checkbox-label
      a
        position: relative
        z-index: 1
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| option | 配置项（如果 options 中的项为字符串，此时默认 label 和 value 的值都为该字符串的值） | Boolean/String/Object | - | - |
| position | 位置 | String | left/right | left |
| shape | 图标形状 | String | circle/square | circle |
| hollowStyle | 是否是镂空样式的 | Boolean | true/false | false |

* `option` 子配置项

| 参数 | 说明 | 类型 |
| - | - | - |
| label | 复选框显示文字 | String |
| value | 复选框的值 | String/Number |
| disabled | 复选框是否被禁用 | Boolean |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 当绑定值变化时触发 | 更新后的复选框的值（若option中设置了value，且勾选复选框时，该值为option.value；否则，该值为复选框的v-model值）|
