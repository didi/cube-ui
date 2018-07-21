## Slide

`Slide` component, which is also encapsulated based on `better-scroll`,  provides common functions like `slider`  and `swipe`.

### Example

- Basic usage

  `cube-slide` element is the entire slide component while `cube-slide-item` element is the page of each slide and it's slot is the content of the page.

  ```html
  <cube-slide @change="changePage">
    <cube-slide-item v-for="(item, index) in items" :key="index" @click.native="clickHandler(item, index)">
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </cube-slide-item>
  </cube-slide>
  ```
  ```javascript
  export default {
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }, {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
          }
        ]
      }
    },
    methods: {
      changePage(current) {
        console.log('The index of current slide is ' + current)
      },
      clickHandler(item, index) {
        console.log(item, index)
      }
    }
  }
  ```

- Initial Index

  Initial Index value, default 0.

  ```html
  <cube-slide :initial-index="1"></cube-slide>
  ```

- Loop play

  Loop play is turned on by default. You can cnfigure that with `loop` attribute.

  ```html
  <cube-slide></cube-slide>
  <cube-slide :loop="false"></cube-slide>
  ```

- Automatic play

  Automatic play is turned on by default. You can configure that with `auto-play` attribute.

  ```html
  <cube-slide></cube-slide>
  <cube-slide :auto-play="false"></cube-slide>
  ```

- Interval of automatic play

  When automatic play is turned on, you can configure the interval with `interval` attribute.

  ```html
  <cube-slide :interval="4000"></cube-slide>
  ```

- Sliding threshold of switching pages

  You can configure the sliding threshold of switching pages with `threshold` attribute. It means that when the sliding distance exceeds the page's width * `threshold`, the page is switched. Default is 0.3.

  ```html
  <cube-slide :threshold="0.4"></cube-slide>
  ```

- Speed of switching pages

  Animation of switching costs 400 ms by default. You can cnfigure that with `speed` attribute.

  ```html
  <cube-slide :speed="200"></cube-slide>
  ```

- Allow vertical scroll behavior

  It can not be scrolling in the vertical direction by default. You can configure that with `allow-vertical` attribute.

  ```html
  <cube-slide :allow-vertical="true"></cube-slide>
  ```

- refresh method

  When Slide Items updated or Slide props updated, you can call `refresh` method to update Slide view.

  ```html
  <cube-slide ref="slide">
    <cube-slide-item v-for="(item, index) in items" :key="index">
      <a :href="item.url">
        <img :src="item.image">
      </a>
    </cube-slide-item>
  </cube-slide>
  ```
  ```js
  const item3 = {
    url: 'http://www.didichuxing.com/',
    image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide03.png'
  }
  export default {
    data() {
      return {
        items: [
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide01.png'
          },
          {
            url: 'http://www.didichuxing.com/',
            image: '//webapp.didistatic.com/static/webapp/shield/cube-ui-examples-slide02.png'
          }
        ]
      }
    },
    mounted() {
      setTimeout(() => {
        this.items.push(item3)
        this.$refs.slide.refresh()
      }, 2000)
    }
  }
  ```

  Added an new slide item 2 seconds later and called `refresh`.

- Modify dots style

  Default dot, you can change it by using dots slot.

  ```html
  <cube-slide>
    <template slot="dots" slot-scope="props">
      <span
        class="my-dot"
        :class="{active: props.current === index}"
        v-for="(item, index) in props.dots">
        {{index + 1}}
      </span>
    </template>
  </cube-slide>
  ```

  The scoped slots provide two parameters: current active index `current` and slide items length `dots`.

- Dispatch scroll position in real time<sup>1.10.0</sup>

  ```html
  <cube-slide :options="options" @scroll="scroll"></cube-slide>
  ```

  ```javascript
    export default {
      data() {
        return {
          options: {
            listenScroll: true,
            probeType: 3
          }
        }
      },
      methods: {
        scroll ({x, y}) {
          console.log(x, y)
        }
      }
    }
    ```

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| initialIndex | initial index | Number | - | 0 |
| loop | whether to loop play | Boolean | true/false | true |
| showDots | whether to show the indicator dots | Boolean | true/false | true |
| autoPlay | whether to play  automatically | Boolean | true/false | true |
| interval | interval of play | Number | - | 4000 |
| direction | slide direction | String | horizontal/vertical | horizontal |
| options<sup>1.9.0</sup> | the options of better-scroll, you could find details at [BS Document](https://ustbhuangyi.github.io/better-scroll/doc/zh-hans/options.html) | Object | - | {<br>  momentum: false,<br>  click: true,<br>  observeDOM: false<br>} |
| threshold | sliding threshold of switching pages | Number | (0, 1) | 0.3 |
| speed | speed of switching pages | Number | - | 400 |
| allowVertical | whether to allow vertical scrolling. `Deprecated`, please use the property `options` instead. | Boolean | true/false | false |
| stopPropagation | whether to stop propagation, which could use to solve the problem of event propagation when nest same direction slide. `Deprecated`, please use the property `options` instead. | Boolean | true/false | false |

### Slot

| Name | Description | Scope Parameters |
| - | - | - |
| default | Default content contains cube-slide-item components | - |
| dots | Dots content | dots: Slide items length <br> current: current active index |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| change | triggered when current slide changes | index of current slide |
| scroll<sup>1.10.0</sup> | triggered when slide is scrolling | Object {x, y} - scroll position |
| scroll-end<sup>1.9.0</sup> | triggered when scroll end. | index of current slide |


### Instance methods

| Method name | Description |
| - | - |
| refresh | You can call this method when slide items added or removed |
