## Scroll

`Scroll` component, which is encapsulated based on `better-scroll`, provides high-quality native scrolling experience and has convenient configuration along tith events.

### Example

- Basic usage

By setting `data` to an array, you can generate the list which can scrolls elegantly in the container.

```html
<div class="scroll-wrapper">
  <cube-scroll :data="items"></cube-scroll>
</div>
```

- Scroll bar

Default is without scroll bar. You can set it to fade-in-fade-out or always-show style.

```html
<!-- fade-in-fade-out style -->
<cube-scroll :data="items" :scrollbar="true"></cube-scroll>
<!-- always-show style -->
<cube-scroll :data="items" :scrollbar="scrollbar"></cube-scroll>
```
```javascript
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      scrollbar: {
        fade: false
      }
    }
  }
}
```

- Pull down to refresh

There is no pull-down-to-refresh function by default. Configuring `pull-down-refresh` can turn on the dispatching of the event `pulling-down` and the animation of pulling down. You can listen to `pulling-down` event to update data.

```html
<!-- turn on the pull-down-to-refresh function and use default configuration -->
<cube-scroll
  ref="scroll"
  :data="items"
  :pull-down-refresh="true"
  @pulling-down="onPullingDown"></cube-scroll>
<!-- turn on the pull-down-to-refresh function and use custom configuration -->
<cube-scroll
  ref="scroll"
  :data="items"
  :pull-down-refresh="pullDownRefresh"
  @pulling-down="onPullingDown"></cube-scroll>
```
```javascript
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      pullDownRefresh: {
        threshold: 90,
        stop: 40,
        txt: 'Refresh success'
      }
    }
  },
  methods: {
    onPullingDown() {
      // simulate updating data
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // if new data
          this.items.unshift('I am new data: ' + +new Date())
        } else {
          // if no new data
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  }
}
```

- Pulling up to load

There is no pull-up-to-load function by default. Configuring `pull-up-load` can turn on the dispatching of the event `pulling-up` and the animation of pulling up. You can listen to `pulling-up` event to update data.


```html
<!-- turn on the pull-up-to-load function and use default configuration -->
<cube-scroll
  ref="scroll"
  :data="items"
  :pull-up-load="true"
  @pulling-up="onPullingUp"></cube-scroll>
<!-- turn on the pull-up-to-load function and use custom configuration -->
<cube-scroll
  ref="scroll"
  :data="items"
  :pull-up-load="pullUpLoad"
  @pulling-up="onPullingUp"></cube-scroll>
```
```javascript
export default {
  data() {
    return {
      items: [1, 2, 3, 4, 5],
      itemIndex: 5,
      pullUpLoad: {
        threshold: 0,
        txt: {
          more: 'Load more',
          noMore: 'No more data'
        }
      }
    }
  },
  methods: {
    onPullingUp() {
      // simulate updating data
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // if new data
          let newPage = [
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex,
            'I am line ' + ++this.itemIndex
          ]

          this.items = this.items.concat(newPage)
        } else {
          // if  no new data
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    }
  }
}
```

- Customize the animation of pulling down refreshing and pulling up loading

If you don't like the built-in slots of pulling down refreshing and pulling up loading, you can use [scoped slots](https://vuejs.org/v2/guide/components.html#Scoped-Slots) to customize animation. The example below uses scoped slots to customize animation of pulling down refreshing, while pulling up loading keeps default built-in animation.

```html
<cube-scroll
  ref="scroll"
  :data="items"
  :pull-down-refresh="pullDownRefresh"
  :pull-up-load="pullUpLoad"
  @pulling-down="onPullingDown"
  @pulling-up="onPullingUp">
  <template slot="pulldown" slot-scope="props">
    <div
      v-if="props.pullDownRefresh"
      class="cube-pulldown-wrapper"
      :style="props.pullDownStyle">
      <div
        v-if="props.beforePullDown"
        class="before-trigger"
        :style="{paddingTop: props.bubbleY + 'px'}">
        <span :class="{rotate: props.bubbleY > 40}">↓</span>
      </div>
      <div class="after-trigger" v-else>
        <div v-if="props.isPullingDown" class="loading">
          <cube-loading></cube-loading>
        </div>
        <div v-else><span>Refresh success</span></div>
      </div>
    </div>
  </template>
</cube-scroll>
```

With the parameters that scoped slots provide, you can control the process of animation according to the change of the state. Detailed scope parameters and their meaning are shown below in 'Slots'.


### Props configuration

| Attribute          | Description                              | Type           | Accepted Values          | Default    |
| ------------------ | ---------------------------------------- | -------------- | ------------------------ | ---------- |
| data               | data used for list rendering             | Array          | -                        | []         |
| direction          | scrolling direction                      | String         | 'vertical', 'horizontal' | 'vertical' |
| scrollbar          | configuration for scroll bar             | Boolean/Object | -                        | false      |
| pullDownRefresh    | configuration for pulling down refreshing | Boolean/Object | -                        | false      |
| pullUpLoad         | configuration for pulling up loading     | Boolean/Object | -                        | false      |
| listenScroll       | whether to dispatch scroll event         | Boolean        | true/false               | false      |
| probeType          | the dispatching time of  scroll event <br>1. non-real-time dispatching; <br>2. real-time dispatching during the scrolling; <br>3. real-time dispatching during the entire scrolling including inertial stage | Number         | 1, 2, 3                  | 0          |
| listenBeforeScroll | whether to dispatch  before-scroll-start event | Boolean        | true/false               | false      |

- `scrollbar` sub configuration

| Attribute | Description                            | Type    | Accepted Values | Default |
| --------- | -------------------------------------- | ------- | --------------- | ------- |
| fade      | whether to have fade-in-fade-out style | Boolean | true/false      | false   |

- `pullDownRefresh` sub configuration

| Attribute | Description                              | Type   | Accepted Values | Default           |
| --------- | ---------------------------------------- | ------ | --------------- | ----------------- |
| threshold | the threshold of  distance that pulling down for  refreshing | Number | -               | 90                |
| stop      | the position where rebounding stays      | Number | -               | 40                |
| txt       | the text shown when refreshing successfully | String | -               | 'Refresh success' |

- `pullUpLoad` sub configuration

| Attribute | Description                              | Type   | Accepted Values | Default                                  |
| --------- | ---------------------------------------- | ------ | --------------- | ---------------------------------------- |
| threshold | the threshold of  distance that pulling up for  loading | Number | -               | 0                                        |
| txt       | the text shown when pulling up loading   | Object | -               | { more: 'Load more', noMore: 'No more data' } |

### Slot

| Name     | Description                              | Scope Parameters                         |
| -------- | ---------------------------------------- | ---------------------------------------- |
| pulldown | located above the list and shown when pulling down refreshing | pullDownRefresh: whether to turn on pulling-down-refreshing function<br>pullDownStyle: the style of showing and fading<br>beforePullDown: whether in pulling down operation<br>isPullingDown: whether in the process of pulling in data<br>bubbleY: the distance of pulling down currently - 50 |
| pullup   | located below the list and shown when pulling up loading | pullUpLoad: whether to turn on pulling-up-loading function<br>isPullUpLoad: whether the data is being loaded |

### Events

| Event Name          | Description                              | Parameters                               |
| ------------------- | ---------------------------------------- | ---------------------------------------- |
| click               | triggers when clicking the list item     | item - the data of the list item         |
| scroll              | triggers according to the value of probeType, if listenScroll is true | Object {x, y} - real-time scrolling coordinates |
| before-scroll-start | triggers before scrolling start, if  listenBeforeScroll | -                                        |
| pulling-down        | triggers when the distance of pulling down exceeds the threshold, if pullDownRefresh is true | -                                        |
| pulling-up          | triggers when the distance of pulling up exceeds the threshold, if pullUpLoad is true | -                                        |
