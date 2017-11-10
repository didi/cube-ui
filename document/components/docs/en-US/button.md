## Button

`Button` provides various types, styles, states and icons.

### Example

- Button type

  The default type is `button`, and you can set that to `submit` in form.

  ```html
  <cube-button>Button</cube-button>
  <cube-button type="submit">Submit Button</cube-button>
  ```

- Button state

  Default is normal, can be set to active or disabled state.

  ```html
  <cube-button :active="true">Active Button</cube-button>
  <cube-button :disabled="true">Disabled Button</cube-button>
  ```

- Icon

  You can set the class of `icon`.

  ```html
  <cube-button icon="cubeic-right">Button With Icon</cube-button>
  ```

- Style

  You can set attributes like `light`, `inline`, `outline`, and `primary` to change the button's style.

  ```html
  <cube-button :light="true">Light Button</cube-button>
  <cube-button :inline="true">Inline Button</cube-button>
  <cube-button :outline="true">Outline Button</cube-button>
  <cube-button :primary="true">Primary Button</cube-button>
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | Button type | String | button/submit | button |
| active | active state | Boolean | true/false | false |
| disabled | disabled state | Boolean | true/false | false |
| icon | Icon | String | the class of icon | - |
| light | light style | Boolean | true/false | false |
| inline | whether inline | Boolean | true/false | false |
| outline | outline style | Boolean | true/false | false |
| primary | primary style | Boolean | true/false | false |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| click | triggers when the button is clicked. If in disabled state, then it won't trigger | e - event target |
