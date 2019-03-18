## Swipe

> New in 1.5.0+

The Swipe component, which provides a WeChat list left slip function, makes it easy to do some functional operations on the list items.

### Example

`Swipe` demo code is [here](https://github.com/didi/cube-ui/tree/master/example/pages/swipe)

- Basic Usage

  The common scenario of `Swipe` component is to match `Scroll` components. It can not only scroll vertically, but also slide out some buttons to do list items. Of course, `Swipe` components can also be used separately.

  ```html
  <template>
   <div class="swipe-wrapper">
      <cube-scroll>
        <cube-swipe
            @item-click="onItemClick"
            @btn-click="onBtnClick"
            :data="swipeData">
        </cube-swipe>
      </cube-scroll>
    </div>
  </template>
  ```

  ```js
  export default {
    data() {
      return {
        swipeData: [{
          item: {
            text: '测试1',
            value: 1
          },
          btns: [
            {
              action: 'clear',
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        }, {
          item: {
            text: '测试2',
            value: 2
          },
          btns: [
            {
              action: 'clear',
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        }, {
          item: {
            text: '测试3',
            value: 3
          },
          btns: [
            {
              action: 'clear',
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              action: 'delete',
              text: '删除',
              color: '#ff3a32'
            }
          ]
        }]
      }
    },
    methods: {
      onItemClick(item) {
        console.log('click item:', item)
      },
      onBtnClick(btn, index) {
        if (btn.action === 'delete') {
          this.$createActionSheet({
            title: '确认要删除吗',
            active: 0,
            data: [
              {content: '删除'}
            ],
            onSelect: () => {
              this.swipeData.splice(index, 1)
            }
          }).show()
        }
      }
    }
  }
  ```
  If the `Swipe` component uses a default slot, you need to pass the data structure shown in the example.

- Custom slots

  In fact, our more common requirement is the need for a display of the content of a custom list, so the `Swipe` component also supports the use of slots.

  The default slot can be used with the `cube-swipe-item` component to realize the loop of the list. A custom slot is very flexible, but it also need to manually write some logic, for example if you want to customize the list when deleted animation, need to use `transition-group` to manage each need to manually activate the `swipe-item` contraction, as shown in the example code.

  - 1.11+

    ```html
    <template>
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe>
            <transition-group name="swipe" tag="ul">
              <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
                <cube-swipe-item
                    ref="swipeItem"
                    :btns="data.btns"
                    :index="index"
                    @btn-click="onBtnClick">
                  <div @click="onItemClick(data.item, index)" class="item-inner">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                  </div>
                </cube-swipe-item>
              </li>
            </transition-group>
          </cube-swipe>
        </cube-scroll>
      </div>
    </template>
    ```

    ```js
    export default {
      data() {
        return {
          swipeData: [
            {
              item: {
                id: '3646653877',
                name: '还不是因为你长得不好看',
                desc: '伤感：歌词再狠，也抵不过现实伤人',
                imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
              },
              btns: [
                {
                  action: 'clear',
                  text: '不再关注',
                  color: '#c8c7cd'
                },
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
            {
              item: {
                id: '1789676645',
                name: '秋水浮萍任飘渺',
                desc: '『武侠配乐』快意恩仇江湖情',
                imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
              },
              btns: [
                {
                  action: 'clear',
                  text: '不再关注',
                  color: '#c8c7cd'
                },
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
            {
              item: {
                id: '3649034125',
                name: '念葳蕊',
                desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
                imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
              },
              btns: [
                {
                  action: 'clear',
                  text: '不再关注',
                  color: '#c8c7cd'
                },
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
          ]
        }
      },
      methods: {
        onItemClick(item) {
          console.log('click item:', item)
        },
        onBtnClick(btn, index) {
          if (btn.action === 'delete') {
            this.$createActionSheet({
              title: '确认要删除吗',
              active: 0,
              data: [
                {content: '删除'}
              ],
              onSelect: () => {
                this.swipeData.splice(index, 1)
              }
            }).show()
          } else {
            this.$refs.swipeItem[index].shrink()
          }
        }
      }
    }
    ```

  - Before 1.11

    You need to handle CubeSwipeItem `active` event `onItemActive`:

    ```html
    <template>
      <div class="swipe-wrapper">
        <cube-scroll>
          <cube-swipe>
            <transition-group name="swipe" tag="ul">
              <li class="swipe-item-wrapper" v-for="(data,index) in swipeData" :key="data.item.id">
                <cube-swipe-item
                    ref="swipeItem"
                    :btns="data.btns"
                    :index="index"
                    @btn-click="onBtnClick"
                    @active="onItemActive">
                  <div @click="onItemClick(data.item, index)" class="item-inner">
                    <div class="icon">
                      <img width="60" height="60" :src="data.item.imgurl">
                    </div>
                    <div class="text">
                      <h2 class="item-name" v-html="data.item.name"></h2>
                      <p class="item-desc" v-html="data.item.desc"></p>
                    </div>
                  </div>
                </cube-swipe-item>
              </li>
            </transition-group>
          </cube-swipe>
        </cube-scroll>
      </div>
    </template>
    ```

    ```js
    export default {
      data() {
        return {
          swipeData: [
            {
              item: {
                id: '3646653877',
                name: '还不是因为你长得不好看',
                desc: '伤感：歌词再狠，也抵不过现实伤人',
                imgurl: 'http://p.qpic.cn/music_cover/MhQ4bJBPt3Yt5icXyBGNhyPJnE9O51CqaN72iaDgvFmDKaia12UFhU5uQ/600?n=1'
              },
              btns: [
                {
                  action: 'clear',
                  text: '不再关注',
                  color: '#c8c7cd'
                },
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
            {
              item: {
                id: '1789676645',
                name: '秋水浮萍任飘渺',
                desc: '『武侠配乐』快意恩仇江湖情',
                imgurl: 'http://p.qpic.cn/music_cover/8KfvDey9cibtZ5xkWxRic6vhXgdPic3wnB7reibI4pdPQBCP8u57uqcjsQ/600?n=1'
              },
              btns: [
                {
                  action: 'clear',
                  text: '不再关注',
                  color: '#c8c7cd'
                },
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
            {
              item: {
                id: '3649034125',
                name: '念葳蕊',
                desc: '江海迦：热恋后哼一首歌为自己悲悯的歌',
                imgurl: 'http://p.qpic.cn/music_cover/jXFicBvicUcfIWSoCNT1OrbAoHG2fqqnrJVnGV4iaLCapWUpCKqbmAicJg/600?n=1'
              },
              btns: [
                {
                  action: 'clear',
                  text: '不再关注',
                  color: '#c8c7cd'
                },
                {
                  action: 'delete',
                  text: '删除',
                  color: '#ff3a32'
                }
              ]
            },
          ]
        }
      },
      created() {
        this.activeIndex = -1
      },
      methods: {
        onItemClick(item) {
          console.log('click item:', item)
        },
        onBtnClick(btn, index) {
          if (btn.action === 'delete') {
            this.$createActionSheet({
              title: '确认要删除吗',
              active: 0,
              data: [
                {content: '删除'}
              ],
              onSelect: () => {
                this.swipeData.splice(index, 1)
              }
            }).show()
          } else {
            this.$refs.swipeItem[index].shrink()
          }
        },
        onItemActive(index) {
          if (index === this.activeIndex) {
            return
          }
          if (this.activeIndex !== -1) {
            const activeItem = this.$refs.swipeItem[this.activeIndex]
            activeItem.shrink()
          }
          this.activeIndex = index
        }
      }
    }
    ```

### Props configuration

- `cube-swipe` configuration

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | For `swipe` list rendered data, when you need to use the built-in default slot, this parameter will be passed. Every item in the array is an Object type, including `item` and `btns`. These two parameters are described in `cube-swipe-item`. If a custom slot is used, this value may not be passed.  | Array | - | [] |
| autoShrink | Decide whether to automatically shrink the slider when the button is clicked, If you use a custom slot, you can pass this value directly to the `cube-swipe-item`. | Boolean | - | false |

- `cube-swipe-item` 配置

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| item | Data for `swipe-item` list item rendering, when you need to use the built-in default slot, this parameter must be transmitted, and there are 2 fields, `value` and `text`, representing the value of the data item and the displayed copy respectively, but if you use custom slot, you can not pass this value. | Object | - | {} |
| btns | For `swipe-item` list item rendering button array, each item of the array is a Object type. It contains at least 2 fields, `text` and `color`, which represent the copy and color of the button respectively. | Array | - | [] |
| index | The index value of the current `swpie-item` in the entire list, must be passed. | Number | - | -1
| autoShrink | Decide whether to automatically shrink the slider when the button is clicked. | Boolean | - | false

### Events

- `cube-swipe` event

When you use a custom slot, you can listen directly to the events on the `cube-swipe-item`.

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| item-click | Triggered when the list item is clicked | Clicked list item | The Index of the clicked list item in the list | - |
| btn-click | Triggered when the button is clicked | Clicked button | The index of the clicked button in the list | the list item<sup>1.9.7</sup> |

- `cube-swipe-item` event

| Event Name | Description | Parameters 1 | Parameters 2 |
| - | - | - | - |
| item-click | Triggered when the list item is clicked | Clicked list item | The Index of the clicked list item |
| btn-click | Triggered when the button is clicked | Clicked button | The index of the clicked button in the list |
| active | Triggered when you start sliding one of the list item | The index of the activation item in the list | - |

### Instance methods

- `cube-swipe-item` instance methods

| Method name | Description |
| - | - |
| shrink | Shrink the swipe item |

