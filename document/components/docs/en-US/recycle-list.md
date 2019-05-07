## RecycleList

> New in 1.12.0+

A recyclable scrolling list that always keeps the number of DOMs at a very low range. Excellent performance in the rendering list of massive data.

### Precautions

  - To achieve infinite scrolling, you must ensure that you have a fixed-height parent container element to wrapper component. For details, please refer to the example.

  - If there is an image with a fixed width and height in the list content, due to the mechanism of image loading, when DOM of each item is rendered, the image may not be loaded, resulting in incorrect calculation of the position of each item, so the caller need use CSS to specify image to avoid height calculation errors.

  - The internal implementation relies on Promise, so you need a polyfill for compatibility.

### Example

- **1. Basic usage**

  ```html
  <div class="view-wrapper">
    <cube-recycle-list class="list" :size="size" :on-fetch="onFetch" :offset="offset">
      <template slot="item" slot-scope="{ data }">
        <div :id="data.id" class="item" @click="handleClick(data)">
          <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
          <div class="bubble">
            <p>{{ data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ data.time }}</time>
            </div>
          </div>
        </div>
      </template>
    </cube-recycle-list>
  </div>
  ```
  ```js
  export default {
    data() {
      return {
        size: 50,
        offset: 100
      }
    },
    methods: {
      onFetch() {
        let items = []
        return new Promise((resolve) => {
          // Simulation request for 50 items, because size is set to 50
          setTimeout(() => {
            for (let i = 0; i < 50; i++) {
              items.push({
                id: i,
                avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/danpliego/128.jpg',
                msg: '123',
                time: 'Thu Oct 25 2018 15:02:12 GMT+0800 (中国标准时间)'
              })
            }
            resolve(items)
          }, 1000)
        })
      },
      handleClick(data) {
        console.log('Item:' + data)
      }
    }
  }
  ```

  ```stylus
  /* Limit viewport to wrap component*/
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
  ```

    The vast majority of list interactions are when the user scrolls to the bottom and requests the next page of data. The default implementation of the component is based on this interaction.

    The component accepts `size` as props and controls how many counts of data are rendered at a time. `offset` is the distance to configure the bottom pull data, `onFetch` is a function, which is mandatory, and the return value of the function must be a Promise, and the `items` ( **Array** ) must be the first parameter when calling `resolve` function, so the component can get `items`. Of course, if you want to stop scrolling, pass `false` or an array whose length is smaller than `size` props.

    The component supports the scope slot. You can use the destructuring assignment of the above example to get the `data` (each data item of item) that the component passes to the caller.

    The samples demo [Here](https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-default.vue).

- **2. Infinite**

  However, the component also supports the second mode - infinite. With `tombstone` as a placeholder, which gives the user a perceptible page element, and makes the interaction more friendly and user-friendly.
  The samples demo [Here](https://github.com/didi/cube-ui/blob/master/example/pages/recycle-list/recycle-list-tombstone.vue).

  ```html
  <div class="view-wrapper">
    <cube-recycle-list class="list" :infinite="infinite" :size="size" :on-fetch="onFetch">
      <!-- tombstone slot-scope is mandatory -->
      <template slot="tombstone" slot-scope="props">
        <div class="item tombstone">
          <div class="avatar"></div>
          <div class="bubble">
            <p></p>
            <p></p>
            <p></p>
            <div class="meta">
              <time class="posted-date"></time>
            </div>
          </div>
        </div>
      </template>
      <template slot="item" slot-scope="{ data }">
        <div :id="data.id" class="item" @click="handleClick(data)">
          <div class="avatar" :style="{backgroundImage: 'url(' + (data.avatar || '') + ')'}"></div>
          <div class="bubble">
            <p>{{ data.msg }}</p>
            <div class="meta">
              <time class="posted-date">{{ data.time }}</time>
            </div>
          </div>
        </div>
      </template>
      <!-- <div slot="spinner">Loading Data</div> -->
      <!-- <div slot="noMore">No more data</div> -->
    </cube-recycle-list>
  </div>
  ```

  `infinite` is used to enable infinite scroll mode. When you enable this configuration, you must implement a personalized style through the `tombstone` scope slot. The `spinner` and `noMore` slots are supported to customize the display of views that load more and no more data. `spinner` slot is built-in in component.

### Props configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| infinite | Enable infinite scroll mode | Boolean | - | false |
| size | Amount of data loaded at one time | Number | - | 20 |
| offset | The distance to fetch more data at the bottom | Number | - | 200 |
| onFetch | Fetch data | Function | - | - |

The `onFetch` function must return a Promise, and the first argument to Promise's resolve function must be an array or `false`, so that the component can internally get the corresponding data to decide whether to load more or stop scrolling.

### Slot

| Name | Description | Scope parameters |
| - | - | - |
| tombstone | Implement a customized `tombstone` view scope slot | - |
| item | Scope slot for each data item | data: An item in items |
| spinner | Named slot for loading more | - |
| noMore | Named slot for no more data | - |

### Instance methods

| Method name | Description |
| - | - |
| reset | To clean up all the contents |
