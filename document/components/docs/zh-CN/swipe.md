## Swipe 滑块组件

> 1.5.0 新增

滑块组件，提供类似微信列表左滑功能，可以方便地对列表项做一些功能操作。

### 示例

`Swipe` 组件的示例相关代码在[这里](https://github.com/didi/cube-ui/tree/master/example/pages/swipe)

- 基本使用

  `Swipe` 组件常见的场景是搭配 `Scroll` 组件使用，既可以纵向滚动，又可以横向左滑出一些按钮对列表项做操作，当然，`Swipe` 组件也可以单独使用。

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
  `Swipe` 组件如果使用默认插槽，则需要传递示例所示的数据结构。

- 自定义插槽

  实际上我们更常见的需求是需要自定义列表的内容展示，因此 `Swipe` 组件也支持了插槽的使用方式。

  默认插槽可以搭配 `cube-swipe-item` 组件实现列表的循环。自定义插槽非常灵活，但它也需要自己手动去写一些逻辑，比如如果你想要在列表删除的时候自定义动画，需要使用 `transition-group`，需要手动去管理每个激活的 `swipe-item` 的收缩，如示例代码所示。

  - 1.11 之后

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
  - 1.11 之前

    需要自己手工处理 CubeSwipeItem 的 `active` 事件逻辑 `onItemActive` 中。

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

### Props 配置

- `cube-swipe` 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 用于 `swipe` 列表渲染的数据，当需要使用内置的默认插槽，此参数必传，数组的每一项是一个 Object 类型，包括 `item` 和 `btns`，这俩参数见 `cube-swipe-item` 的描述。如果使用自定义插槽，可不传此值。 | Array | - | [] |
| autoShrink | 用于当点击滑块的按钮后，是否需要自动收缩滑块，如果使用自定义插槽，则直接给 `cube-swipe-item` 传递此值即可。 | Boolean | - | false |

- `cube-swipe-item` 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| item | 用于 `swipe-item` 列表项渲染的数据，当需要使用内置的默认插槽，此参数必传，且需要有 `value` 和 `text` 2 个字段，分别表示数据项的值和显示的文案，但如果使用自定义插槽，可不传此值。 | Object | - | {} |
| btns | 用于 `swipe-item` 列表项渲染按钮数组，数组的每一项是一个 Object 类型，至少要包含 `text` 和 `color` 2 个字段，分别表示按钮的文案和颜色。 | Array | - | [] |
| index | 表示当前的 `swpie-item` 在整个列表中的索引值，必传。 | Number | - | -1
| autoShrink | 用于当点击滑块的按钮后，是否需要自动收缩滑块。 | Boolean | - | false

### 事件

- `cube-swipe` 事件

当使用自定义插槽时，直接监听 `cube-swipe-item` 上的事件即可。

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| item-click | 当列表项目被点击时派发 | 点击的列表项 | 点击项在列表中的索引 | - |
| btn-click | 当按钮被点击时派发 | 点击的按钮 | 点击按钮在列表中的索引 | 列表项<sup>1.9.7</sup> |

- `cube-swipe-item` 事件

| 事件名 | 说明 | 参数1 | 参数2 |
| - | - | - | - |
| item-click | 当列表项目被点击时派发 | 点击的列表项 | 点击项在列表中的索引 |
| btn-click | 当按钮被点击时派发 | 点击的按钮 | 点击按钮在列表中的索引 |
| active | 当开始滑动某个列表项目时派发 | 激活项在列表中的索引 | - |

### 实例方法

- `cube-swipe-item` 实例方法

| 方法名 | 说明 |
| - | - |
| shrink | 收缩该滑块项 |

