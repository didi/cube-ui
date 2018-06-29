## Sticky 组件

> 1.10.0 新增

吸附组件，当滚动位置到达目标元素位置后，目标元素就会自动吸附。

### 示例

- 综合使用 - Scroll

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

  `cube-sticky` 需要和 `cube-sticky-ele` 组件配合使用。

  `cube-sticky` 组件依赖 `pos` Prop 来指定当前实时位置，由于 Scroll 组件中派发的 `y` 为负值，所以我们需要将其转换为滚动位置，直接取 `-y` 即可。

  `cube-sticky-ele` 组件的 `ele-key` Prop 是可选的，用于指定当前吸附元素的 key 值，默认为当前组件的索引值，即在 `cube-sticky` 组件中的第几个 `cube-sticky-ele`。

  我们还可以利用 `cube-sticky` 组件的 `fixed` 插槽实现自定义吸附效果，如果没有插槽的话，内部默认会将吸附的 `cube-sticky-ele` 的内容显示出来。

- 综合使用 - Native Scroll

  利用原生滚动实现效果。

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

  这个示例展示的就是利用原生滚动实现吸附效果的。

  `check-top` Prop 则是用来控制检查条件的，默认为 `true`，意味着当 `cube-sticky-ele` 元素的顶部达到 `cube-sticky` 的顶部的时候就会被吸附；这个例子中我们设置为了 `false`，意味着当 `cube-sticky-ele` 的底部达到 `cube-sticky` 的顶部的时候会被吸附。

- 模拟微信效果 - WeChat

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

  可以通过 `fixed-show-ani` 指定当元素吸附时出现的 `transition` 名字，我们这里指定 `sticky-fixed-show`，所以相对应的我们在样式中加了对应的动画控制效果。

  同时可以通过 `diff-change` 事件得到当前 sticky 元素滚动的差值，一般我们可以和当前 sticky 元素的高做除法得到相对百分比，可以精细控制出现的具体细节。

### Props

#### CubeSticky

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| pos | 必须，滚动位置 | Number | - | - |
| checkTop | 是否检测顶部位置，如果为 false，则检查 sticky-ele 元素的底部边界 | Boolean | true/false | true |
| fixedShowAni | 元素吸附时指定 transition 的 name 值 | String | - | 如果 checkTop 为 true，则为 ''，如果为 false，则为 'cube-sticky-fixed-fade' |
| offset | 偏移值，传入的 pos 的值会加上这个值修正 | Number | - | 0 |

#### CubeStickyEle

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| eleKey | 吸顶元素的 key 值 | Number/String | - | - |

当 `eleKey` 不存在时，CubeSticky 组件会获取当前 CubeStickyEle 组件的次序索引作为吸附元素的标示。

### 插槽

| 名字 | 说明 | 作用域参数 |
| - | - | - |
| default | 默认内容 | - |
| fixed | 元素吸附时内容如何展示 | current: 当前吸附元素的 key 值<br>index: 吸附元素索引值（非响应式的） |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| change | 吸附的元素发生改变时触发 | current - 吸附的元素的 key 值，如果没有的话，则为 '' | index - 吸附元素的索引值，没有的话，则为 -1（非响应式的） |
| diff-change | sticky 元素滚动的差值改变时触发 | diff - 差值，最小 0 | height: 当前 sticky 元素的高度 |

### 实例方法

| 方法名 | 说明 |
| - | - |
| refresh | 刷新，当内容发生变化时可用于重新计算高度和位置 |
