## Checkbox

`Checkbox` component. You can set the state, pass on special class and set the position of the checkbox's icon.

### Example

- Basic usage

  ```html
  <cube-checkbox v-model="checked">
    Checkbox
  </cube-checkbox>
  ```

  If selected, the value of `checked` is `true`.

- Position and shape of the checkbox icon

  ```html
  <cube-checkbox v-model="checked" position="right" shape="square">
    Position Checkbox
  </cube-checkbox>
  ```

  If setting `position` to `'right'`, the position of the checkbox's icon is on the right. And you could use `shape` to configure the shape of icon

- Change the value of model

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

  If `option` is setted, and when the checkbox is selected, the value of `checked` is `'optionValue'`. When not selected, the value is `false`; Therefore, in circumstances of single checkbox, better not set `option`.

- Disabled state

  ```html
  <cube-checkbox v-model="checked" :option="{disabled: true}">
    Disabled Checkbox
  </cube-checkbox>
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| option | option value | Boolean/String/Object | - | - |
| position | icon position | String | left/right | left |
| shape | icon shape | String | circle/square | circle |

* `option` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | the text of label | String |
| value | the value of checkbox item | String/Number |
| disabled | whether the checkbox item is disabled | Boolean |
