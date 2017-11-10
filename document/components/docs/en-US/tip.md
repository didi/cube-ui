## Tip

`Tip`, used to popup tip bubble box.

### Example

- Basic usage

  By adding `ref` to `Tip`, you can get the reference to the component and invoke `show` or `hide` methods which are exposed by `Tip` to control the show or hide state of the component.

  ```html
  <div class="tip" @click="showTip">
    <cube-tip ref="tip"></cube-tip>
  </div>
  ```
  ```javascript
  export default {
    methods: {
      showTip () {
        this.$refs.tip.show()
      }
    }
  }
  ```

- The position of the small triangle and the bubble box

  You can configure the direction of the small triangle by `direction` and configure the position of the bubble box by `style`. Normally, the direction of the small triangle is opposite to the position of the bubble box.

  ```html
  <p class="tip-eg">
    <span>CubeUI</span>
    <cube-tip
        ref="tip"
        :direction="direction"
        :style="tipStyle"
        @close="close"
        @click="clickHandler">
      <div>Awesome!</div>
    </cube-tip>
    </p>
  </div>
  <cube-button @click="showTip('bottom')">top</cube-button>
  <cube-button @click="showTip('top')">bottom</cube-button>
  <cube-button @click="showTip('right')">left</cube-button>
  <cube-button @click="showTip('left')">right</cube-button>
  ```
  ```javascript
  export default {
    data() {
      return {
        direction: '',
        tipStyle: ''
      }
    },
    methods: {
      showTip(direction) {
        this.direction = direction
        this.$refs.tip.show()

        switch (direction) {
          case 'top':
            this.tipStyle = 'left: 100px; top: 100px;'
            break
          case 'bottom':
            this.tipStyle = 'left: 100px; top: 20px;'
            break
          case 'left':
            this.tipStyle = 'left: 200px; top: 60px;'
            break
          case 'right':
            this.tipStyle = 'left: 5px; top: 60px;'
            break
        }
      },
      close() {
        console.log('click close button')
      },
      clickHandler() {
        console.log('click tip area')
      }
    }
  }
  ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| direction | the direction of the small triangle | String | top/bottom/left/right | left |
| offsetLeft | the distance between the small triangle and the left part of x axis | Number | - | 0 |
| offsetTop | the distance between the small triangle and the origin of y axis | Number | - | 0 |
| offsetRight | the distance between the small triangle and the right part of x axis | Number | - | 0 |
| offsetBottom | the distance between the small triangle and the bottom part of y axis | Number | - | 0 |

### Slot

| name | description |
| - | - |
| - | the content shown inside the tip component |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| close | the event that exposed when clicking the close button of tips, which will hide at the same time | None |
| clicked | the event that exposed when clicking the content of tips, which will hide at the same time | None |
