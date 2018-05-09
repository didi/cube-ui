<template>
  <cube-page type="toolbar-view" title="Toolbar">
    <div slot="content">
      <div>
        <h2>组件：底部操作区</h2>
        <h2>参数定义</h2>
        <p>baseSeries：底部显示的按钮Array，组内元素item(text, handleClick, icon)。</p>
        <p>exSeries：底部显示的按钮Array，组内元素item(text, handleClick, icon)；当传入改参数，则会出现更多按钮，baseSeries建议最多传3个。</p>
        <p>cls：底部操作区自定义样式名，叠加到 "cube-toolbar" 样式后面。</p>
      </div>

      <cube-toolbar v-for="(item, index) in propsArray" :key="index" :base-series="item.baseSeries" :cls="item.cls" :ex-series="item.exSeries" @more-click="item.moreClickHandler"></cube-toolbar>
    </div>

  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      let money = 10
      return {
        baseArray: [
          [
            {
              text: '操作a',
              handleClick(event) {
                console.log(event)
              }
            }
          ],
          [
            {
              text: '取消订单',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '一口价<span class="orange">10元</span>',
              handleClick(event, data) {
                money += 10
                data.text = '一口价<span class="orange">' + money + '元</span>'
              }
            }
          ],
          [
            {
              text: '取消订单',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '打勾',
              checked: false,
              type: 'checkbox'
            },
            {
              text: '小费',
              handleClick(event) {
                console.log(event)
              }
            }
          ],
          [
            {
              text: '取消订单',
              type: 'button',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '打车来接',
              checked: false,
              type: 'checkbox',
              handleClick: function(e, d) {
                console.log(e, d)
              }
            },
            {
              text: '小费',
              handleClick(event, d) {
                console.log(event, d)
              }
            }
          ],
          [
            {
              text: '操作a',
              handleClick(event, data) {
                data.text = '点击过了'
              }
            },
            {
              text: '操作b',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '操作c',
              icon: 'dd-cubeic-purse orange',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '操作d',
              handleClick(event) {
                console.log(event)
              }
            }
          ]
        ],
        exArray: [
          [
            {
              text: '线上支付',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '完成订单',
              handleClick(event) {
                console.log(event)
              }
            }
          ],
          [
            {
              text: '操作a',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '操作b',
              handleClick(event) {
                console.log(event)
              }
            },
            {
              text: '操作c',
              icon: 'dd-cubeic-right',
              handleClick(event, data) {
                console.log(event, data)
              }
            }
          ]
        ]
      }
    },
    computed: {
      propsArray() {
        return [
          {
            cls: 'base1',
            baseSeries: this.baseArray[0],
            moreClickHandler: () => {}
          },
          {
            cls: 'base2',
            baseSeries: this.baseArray[1],
            moreClickHandler: () => {}
          },
          {
            cls: 'base3',
            baseSeries: this.baseArray[2],
            moreClickHandler: () => {}
          },
          {
            cls: 'base4',
            baseSeries: this.baseArray[4],
            moreClickHandler: () => {}
          },
          {
            cls: 'base2-ex2',
            baseSeries: this.baseArray[1],
            exSeries: this.exArray[0],
            moreClickHandler: () => {}
          },
          {
            cls: 'base3-ex3',
            baseSeries: this.baseArray[3],
            exSeries: this.exArray[1],
            moreClickHandler: function(isShowEx) {
              console.log('isShowEx:', isShowEx)
            }
          }
        ]
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  $color-orange = #fc9153

  .toolbar-view
    line-height: 24px
    h2
      margin: 5px 0

    .orange
      color: $color-orange

    .base1
      bottom: 285px

    .base2
      bottom: 220px

    .base3
      bottom: 80px

    .base4
      bottom: 150px

    .base2-ex2
      bottom: 350px
      z-index: 3

    .base3-ex3
      bottom: 10px
      z-index: 2
</style>
