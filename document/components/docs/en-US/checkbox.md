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

- Styled checkbox

  ```html
  <cube-checkbox v-model="checked" position="right" shape="square" :hollow-style="true">
    Styled Checkbox
  </cube-checkbox>
  ```

  If setting `position` to `'right'`, the position of the checkbox's icon is on the right. And you could use `shape` to configure the shape of icon,  set `hollow-style=true` to use hollow-out style.

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

- With click

  If you want to handle click event, you need to handle the style:

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

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| option | option value（if the value of option is a string type, the label and value will be this string you just set for option.） | Boolean/String/Object | - | - |
| position | icon position | String | left/right | left |
| shape | icon shape | String | circle/square | circle |
| hollowStyle | whether is hollow-out style | Boolean | true/false | false |

* `option` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | the text of label | String |
| value | the value of checkbox item | String/Number |
| disabled | whether the checkbox item is disabled | Boolean |

### Events

| Event Name | Description | Parameter |
| - | - | - |
| input | triggers when the binding value changes | the updated value（ if you set value in the option and the checkbox is checked, the value is option.value; otherwise, the value is the v-model value of checkbox ）|
