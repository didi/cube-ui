## CheckboxGroup

`CheckboxGroup` is a group of checkboxs, which is used to select a group of options. It has vertical and horizontal styles.

### Example

- Vertical order

  Default is vertical order style.

  ```html
  <cube-checkbox-group v-model="checkList">
    <cube-checkbox label="1">
      Checkbox 1
    </cube-checkbox>
    <cube-checkbox label="2">
      Checkbox 2
    </cube-checkbox>
    <cube-checkbox label="3" :disabled="true">
      Disabled Checkbox
    </cube-checkbox>
    <cube-checkbox label="4" :disabled="true">
      Disabled & Checked Checkbox
    </cube-checkbox>
  </cube-checkbox-group>
  ```

  The value of `checkList` is an array, which represents the set of the values of `label` in selected checkboxs.

- Set options

  Set options to generate checkboxes.

  ```html
  <cube-checkbox-group v-model="checkList" :options="options" />
  ```
  ```js
  export default {
    data() {
      return {
        checkList: ['1', '4'],
        options: [
          {
            label: 'Option1',
            value: '1'
          },
          {
            label: 'Option2',
            value: '2'
          },
          {
            label: 'Option3',
            value: '3',
            disabled: true
          },
          {
            label: 'Option4',
            value: '4',
            disabled: true
          }
        ]
      }
    }
  }
  ```

- Horizontal order

  You can set `horizontal` to change the style to horizontal order.

  ```html
  <cube-checkbox-group v-model="checkList" :horizontal="true">
    <cube-checkbox label="1">1</cube-checkbox>
    <cube-checkbox label="2">2</cube-checkbox>
    <cube-checkbox label="3" :disabled="true">3</cube-checkbox>
    <cube-checkbox label="4" :disabled="true">4</cube-checkbox>
  </cube-checkbox-group>
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| horizontal | whether in horizontal order | Boolean | true/false | false |
| options | array of checkbox options | Array | - | - |

* `options` sub configuration

| Attribute | Description | Type  |
| - | - | - |
| label | label content | String |
| value | checkbox item value | String/Number |
| disabled | whether disabled | Boolean |

Note: each `options` item can be an string value, now both the`label` and `value` values are the string value.
