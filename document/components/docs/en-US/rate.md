## Rate

  Rate component. You can customize the rating star numbers, and disable the interaction, you can also customize the style of star through the slot.

### Example

- Basic usage

  You can use the v-model directive to create two-way data bindings.

  ```html
  <cube-rate v-model="value"></cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: 3
      }
    }
  }
  ```

- Multiple configurations

  For example, you can use `disabled` to make the rating component read-only and use` max` to customize the number of stars.

  ```html
  <cube-rate v-model="value" :disabled="disabled" :max="max"></cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        disabled: false,
        max: 5,
        value: 3
      }
    }
  }
  ```

- Custom star style

  You need to use the `cube-rate-item` component, and define two different styles for custom stars, normal and active (under the` .cube-rate-item.active` class).

  ```html
  <cube-rate v-model="value">
    <cube-rate-item v-for="n in max" :key="n" :value="value" :index="n">
      <!-- 定制星星示例 -->
      <div class="rate-item"></div>
    </cube-rate-item>
  </cube-rate>
  ```

  ```javascript
  export default {
    data() {
      return {
        value: 3
      }
    }
  }
  ```

  ```css
  .rate-item
    width: 100%
    height: 100%
    background-size: 100%
    background-color: grey
  .cube-rate-item.active
    .rate-item
      background-color: orange
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| v-model | bound rate value | Number | - | 0 |
| max | max star number | Number | - | false |
| disabled | disabled status | Boolean | true/false | false |

### slot

| Name | Description | Scope parameters |
| - | - | - |
| default | a cube-rate-item component | - |

### slot in cube-rate-item

| Name | Description | Scope parameters |
| - | - | - |
| default | custom star element | - |
