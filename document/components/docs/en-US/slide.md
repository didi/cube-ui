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
      clickHandle(item, index) {
        console.log(item, index)
      }
    }
  }
  ```

- Loop play

  Loop play is turned on by default. You can cnfigure that with `loop` attribute.

  ```html
  <cube-slide></cube-slide>
  <cube-slide :loop="false"></cube-slide>
  ```

- Automatic play

  Automatic play is turned on by default. You can cnfigure that with `auto-play` attribute.

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

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| loop | whether to loop play | Boolean | true/false | true |
| autoPlay | whether to play  automatically | Boolean | true/false | true |
| interval | interval of play | Number | - | 4000 |
| threshold | sliding threshold of switching pages | Number | (0, 1) | 0.3 |
| speed | speed of switching pages | Number | - | 400 |

### Events

| Event Name | Description | Parameters |
| - | - | - |
| change | triggers when current slide changes | index of current slide |


### Instance methods

| Method name | Description |
| - | - |
| refresh | You can call this method when slide items added or removed |
