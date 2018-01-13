## Popup

The underlying popup component, mainly used to implement upper component encapsulation based on itself. It only provides basic functions: specifying the type, whether there's a background layer, showing content (HTML) and whether the component is in center position.

All of the built-in popup type components are implemented based on this component, including [Toast](#/en-US/docs/toast)、[Picker](#/en-US/docs/picker)、[TimePicker](#/en-US/docs/time-picker)、[Dialog](#/en-US/docs/dialog)、[ActionSheet](#/en-US/docs/action-sheet).

### Example

- Basic usage

  ```html
  <cube-popup type="my-popup" ref="myPopup">
    My Popup Content 1
  </cube-popup>
  <cube-button @click="showPopup('myPopup')">
    Show Popup
  </cube-button>
  ```

  Specifying `type` will help control class according to the type. In the example above, `cube-my-popup` will be added to the classList of the root element.

  ```js
  export default {
    methods: {
      showPopup(refId) {
        const component = this.$refs[refId]
        component.show()
        setTimeout(() => {
          component.hide()
        }, 1000)
      }
    }
  }
  ```

  The component is hidden by default and won't show up unless invoking the `show()` method of the instance of the component. And of course, invoking the `hide()` method of the instance of the component will hide itself. That's what `showPopup()` does in the example above (first show and hide in one second).

- Without background layer

  ```html
  <cube-popup type="my-popup" :mask="false" ref="myPopup2">
    My Popup Content 2
  </cube-popup>
  <cube-button @click="showPopup('myPopup2')">
    Show Popup - no mask
  </cube-button>
  ```

  Setting `mask` to `false` and the background layer is hidden.

- Show the HTML content

  ```html
  <cube-popup
    type="my-popup"
    :mask="false"
    content="<i>My Popup Content 3</i>"
    ref="myPopup3" />
  <cube-button @click="showPopup('myPopup3')">
    Show Popup - with content
  </cube-button>
  ```

  You only need to pass the HTML fragment on to `content`.

- Setting to bottom

  ```html
  <cube-popup type="my-popup" :center="false" ref="myPopup4">My Popup Content 4</cube-popup>
  <cube-button @click="showPopup('myPopup4')">
    Show Popup - bottom
  </cube-button>
  ```

  Considering that in mobile secnes, popup is in center or bottom most of the time (covered in horizontal direction when setted to bottom). So if setting `center` to `false`, you'll set the component to bottom.

- Upper layer encapsulation

  ```html
  <template>
    <cube-popup type="extend-popup" ref="popup">
      <div class="cube-extend-popup-content" @click="hide">
        <slot>{{content}}</slot>
      </div>
    </cube-popup>
  </template>
  <script type="text/ecmascript-6">
    const COMPONENT_NAME = 'cube-extend-popup'
    export default {
      name: COMPONENT_NAME,
      props: {
        content: {
          type: String
        }
      },
      methods: {
        show() {
          this.$refs.popup.show()
        },
        hide() {
          this.$refs.popup.hide()
          this.$emit('hide')
        }
      }
    }
  </script>
  <style lang="stylus" rel="stylesheet/stylus">
    .cube-extend-popup
      .cube-extend-popup-content
        padding: 20px
        color: #fff
        background-color: rgba(0, 0, 0, .8)
  </style>
  ```

  An upper layer encapsulated CubeExtendPopup component with some styles is implemented. It supports passing the content on, has default slot and can be hidden if clicking the content. You can use it in this way (need to be registers globally or partially):

  ```html
  <cube-extend-popup content="click here hide" ref="extendPopup"></cube-extend-popup>
  <cube-button @click="$refs.extendPopup.show()">
    Show Extend Popup
  </cube-button>
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| type | the type of popup | String | - | '' |
| mask | whether to show background layer | Boolean | true/false | true |
| content | content, HTML string, valid when there's no slot | String | - | '' |
| center | whether to be in center in horizontal and vertical direction | Boolean | true/false | true |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| mask-click | triggers when the background layer is clicked | click event target |
