<template>
  <cube-page type="scroll-view" title="Scroll">
    <div slot="content" class="scroll-wrapper">
      <cube-scroll
        ref="scroll"
        :data="items"
        :scrollbar="scrollbar"
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
              <div v-if="props.pulling" class="loading">
                <cube-loading></cube-loading>
              </div>
              <div v-else><span>Refresh success</span></div>
            </div>
          </div>
        </template>
      </cube-scroll>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  const _data = [
    'I am line 1',
    'I am line 2',
    'I am line 3',
    'I am line 4',
    'I am line 5',
    'I am line 6',
    'I am line 7',
    'I am line 8',
    'I am line 9',
    'I am line 10',
    'I am line 11',
    'I am line 12',
    'I am line 13',
    'I am line 14',
    'I am line 15'
  ]

  export default {
    data() {
      return {
        items: _data,
        itemIndex: _data.length,
        scrollbar: {
          fade: true
        },
        pullDownRefresh: {
          threshold: 90,
          stop: 40,
          txt: 'Refresh success'
        },
        pullUpLoad: {
          threshold: 0,
          txt: {
            more: 'Load more',
            noMore: 'No more data'
          }
        }
      }
    },
    components: {
      CubePage
    },
    methods: {
      onPullingDown() {
        // 模拟更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            this.items.unshift('I am new data: ' + +new Date())
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      },
      onPullingUp() {
        // 更新数据
        setTimeout(() => {
          if (Math.random() > 0.5) {
            // 如果有新数据
            let newPage = [
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex,
              'I am line ' + ++this.itemIndex
            ]

            this.items = this.items.concat(newPage)
          } else {
            // 如果没有新数据
            this.$refs.scroll.forceUpdate()
          }
        }, 1000)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .scroll-wrapper
    position: relative
    height: 510px
    .cube-scroll-wrapper
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0
      overflow: hidden
      background: #fff
      .cube-scroll-content
        position: relative
        z-index: 10
        background: #fff
        .scroll-item
          height: 60px
          line-height: 60px
          font-size: 18px
          padding-left: 20px
          border-bottom: 1px solid #e5e5e5
      .cube-pulldown-wrapper
        .before-trigger
          font-size: 30px
          align-self: flex-end
          span
            display: inline-block
            transition: all 0.3s
            color: #666
            &.rotate
              transform: rotate(180deg)
</style>
