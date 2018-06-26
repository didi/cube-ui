## Sticky

> New in 1.10.0+

Sticky component, the element will be sticky when the scroll position matched the target elements position.

### Example

- Default usage - Scroll

  ```html
  <cube-sticky :pos="scrollY">
    <cube-scroll
      :scroll-events="scrollEvents"
      @scroll="scrollHandler">
      <ul>
        <li>title</li>
      </ul>
      <cube-sticky-ele ele-key="11">
        <ul class="sticky-header">
          <li>111</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items">{{item}}</li>
      </ul>
      <cube-sticky-ele ele-key="22">
        <ul class="sticky-header">
          <li>222</li>
          <li>222</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items2">{{item}}</li>
      </ul>
      <cube-sticky-ele ele-key="33">
        <ul class="sticky-header">
          <li>333</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items3">{{item}}</li>
      </ul>
    </cube-scroll>
    <template slot="fixed" slot-scope="props">
      <ul class="sticky-header">
        <li>{{props.current}}</li>
      </ul>
    </template>
  </cube-sticky>
  ```
  ```js
  const _data = [
    '😀 😁 😂 🤣 😃 😄 ',
    '🙂 🤗 🤩 🤔 🤨 😐 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]
  export default {
    data() {
      return {
        scrollEvents: ['scroll'],
        scrollY: 0,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
    },
    methods: {
      scrollHandler({ y }) {
        this.scrollY = -y
      }
    }
  }
  ```

  `cube-sticky` need to use with `cube-sticky-ele` component.

  The `pos` Prop of `cube-sticky` component is the scroll runtime position value.

  The `ele-key` Prop of `cube-sticky-ele` component is optional, it is used to define the key value of sticky ele. The default  `ele-key` value is the current sticky ele's index value.

  You can alse use `cube-sticky`'s `fixed` slot to define your own sticky HTML. If you do not use `fixed` slot then the default sticky content will be the active `cube-sticky-ele`'s content.

- Default usage - Native Scroll

  ```html
  <cube-sticky :pos="scrollY" :check-top="checkTop">
    <div class="scroll-ele" @scroll="scrollHandler">
      <ul>
        <li>title</li>
      </ul>
      <cube-sticky-ele>
        <ul class="sticky-header">
          <li>111</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items">{{item}}</li>
      </ul>
      <cube-sticky-ele>
        <ul class="sticky-header">
          <li>222</li>
          <li>222</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items2">{{item}}</li>
      </ul>
      <cube-sticky-ele>
        <ul class="sticky-header">
          <li>333</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items3">{{item}}</li>
      </ul>
    </div>
  </cube-sticky>
  ```
  ```js
  const _data = [
    '😀 😁 😂 🤣 😃 😄 ',
    '🙂 🤗 🤩 🤔 🤨 😐 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]

  export default {
    data() {
      return {
        scrollY: 0,
        checkTop: false,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
    },
    methods: {
      scrollHandler(e) {
        this.scrollY = e.currentTarget.scrollTop
      }
    }
  }
  ```
  ```stylus
  .scroll-ele
    height: 100%
    overflow: auto
    -webkit-overflow-scrolling: touch
    background-color: #fff
  ```

  `check-top` Prop is used to control the checking of boundary conditions, it's default value is `true`, this means `cube-sticky-ele` element will be sticky when the top of the `cube-sticky-ele` reaches the top of `cube-sticky`. This case the `check-top` is `false` which means `cube-sticky-ele` element will be sticky when the bottom of the `cube-sticky-ele` reaches the top of `cube-sticky`.

- Like WeChat

  ```html
  <cube-sticky
    :pos="scrollY"
    :check-top="checkTop"
    fixed-show-ani="sticky-fixed-show"
    @diff-change="diffChange">
    <cube-scroll
      :scroll-events="scrollEvents"
      @scroll="scrollHandler">
      <img src="https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/6.jpg">
      <cube-sticky-ele>
        <ul class="sticky-header">
          <li>111</li>
        </ul>
      </cube-sticky-ele>
      <ul>
        <li v-for="item in items" class="border-top-1px">{{item}}</li>
      </ul>
      <ul>
        <li v-for="item in items2" class="border-top-1px">{{item}}</li>
      </ul>
      <ul>
        <li v-for="item in items3" class="border-top-1px">{{item}}</li>
      </ul>
    </cube-scroll>
    <ul class="sticky-header" slot="fixed" ref="stickyHeader">
      <li>header</li>
    </ul>
  </cube-sticky>
  ```
  ```js
  const _data = [
    '😀 😁 😂 🤣 😃 😄 ',
    '🙂 🤗 🤩 🤔 🤨 😐 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '😔 😕 🙃 🤑 😲 ☹️ ',
    '🐣 🐣 🐣 🐣 🐣 🐣 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🐥 🐥 🐥 🐥 🐥 🐥 ',
    '🤓 🤓 🤓 🤓 🤓 🤓 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🦔 🦔 🦔 🦔 🦔 🦔 ',
    '🙈 🙈 🙈 🙈 🙈 🙈 ',
    '👆🏻 scroll up/down 👇🏻 ',
    '🚖 🚖 🚖 🚖 🚖 🚖 ',
    '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
  ]

  export default {
    data() {
      return {
        scrollEvents: ['scroll'],
        scrollY: 0,
        checkTop: true,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
    },
    methods: {
      scrollHandler({ y }) {
        this.scrollY = -y
      },
      diffChange() {
        let opacity = 0
        if (height) {
          opacity = diff / height
        }
        this.$refs.stickyHeader.style.opacity = opacity
      }
    }
  }
  ```
  ```stylus
  .sticky-fixed-show-enter, .sticky-fixed-show-leave-active
    transform: translate(0, -100%)
  .sticky-fixed-show-enter-active, .sticky-fixed-show-leave-active
    transition: all .5s ease-in-out
  ```

  `fixed-show-ani` is used to set the `transition` name of the sticky element when it's fixed.

  You can get current sticky ele's fixed diff value on `diff-change` event.

### Props

#### CubeSticky

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| pos | required, scroll position | Number | - | - |
| checkTop | whether to treat the top of sticky element as boundary, if this value is false means `cube-sticky-ele` will be sticky when the bottom of the `cube-sticky-ele` reaches the top of `cube-sticky` | Boolean | true/false | true |
| fixedShowAni | the `transition` name of the sticky element | String | - | if checkTop is true this value will be '', otherwise this value will be 'cube-sticky-fixed-fade' |
| offset | offset value, `pos+offset` will be the real pos value | Number | - | 0 |

#### CubeStickyEle

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| eleKey | the key of sticky element | Number/String | - | - |

If `eleKey` is undefined, CubeSticky will get the index of CubeStickyEle as the element's key.

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| default | default content | - |
| fixed | custom sticky content when the sticky element is fixed | current: key of the fixed sticky element<br>index: index of the sticky element(index is not reactive) |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| change | triggers when fixed sticky element changed | current - key of the fixed sticky element, if there is no fixed sticky element this value will be '' | index - index of sticky element, if there is no fixed sticky element this value will be -1 (index is not reactive) |
| diff-change | triggers when sticky element scrolling diff value changed | diff - diff value | height: height of current sticky element |

### Instance methods

| Method name | Description |
| - | - |
| refresh | You can call this method when content updated |
