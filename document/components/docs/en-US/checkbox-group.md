## CheckboxGroup

`CheckboxGroup` is a group of checkboxs, which is used to select a group of options. It has vertical and horizontal styles.

### Example

- Vertical order

  Default is vertical order style.

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

  The value of `checkList` is an array, which represents the set of the values of `value` in selected checkboxs.

- Horizontal order and icon shape

  You can set `horizontal` to change the style to horizontal order. Besides, you could use `shape` to configure the shape of icon and set `hollow-style=true` to use hollow-out style.

  ```html
  <cube-checkbox-group v-model="checkList" :options="options" :horizontal="true" shape="square" :hollow-style="true" />
  ```

- Use slot

  ```html
  <cube-checkbox-group v-model="checkList">
    <cube-checkbox option="1"><i>Checkbox 1</i></cube-checkbox>
    <cube-checkbox option="2"><i>Checkbox 2</i></cube-checkbox>
    <cube-checkbox :option="{value: '3', disabled: true}"><i>Disabled Checkbox</i></cube-checkbox>
    <cube-checkbox :option="{value: '4', disabled: true}"><i>Disabled & Checked Checkbox</i></cube-checkbox>
  </cube-checkbox-group>
  ```

  Use `cube-checkbox`, [cube-checkbox doc](#/en-US/docs/checkbox).

- Set column number<sup>1.12.28</sup>

  You can use `colNum` to control the display columns
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

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| options | array of checkbox options | Array | - | - |
| horizontal | whether in horizontal order | Boolean | true/false | false |
| colNum<sup>1.12.28</sup> | column number | Number | - | 1 |
| shape | icon shape | String | circle/square | circle |
| hollowStyle | whether is hollow-out style | Boolean | true/false | false |
| min<sup>1.11.0</sup> | min selected items count | Number | - | 0 |
| max<sup>1.11.0</sup> | max selected items count | Number | - | Infinite |

* `options` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | label content | String |
| value | checkbox item value | String/Number |
| disabled | whether disabled | Boolean |

Note: each `options` item can be an string value, now both the`label` and `value` values are the string value.

### Events

| Event Name | Description | Parameter |
| - | - | - |
| checked | triggers when an checkbox in the checkboxGroup is checked | the currently checked checkbox value |
| cancel-checked | triggers when an checkbox in the checkboxGroup is unchecked | the currently unchecked checkbox value |
| input | triggers when the binding value changes | a set of the values of selected checkboxs |
