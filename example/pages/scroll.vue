<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="options">
        <div class="title">Options</div>
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="Scrollbar" :value="scrollbar"
                           @update:value="updateScrollbar"></switch-option>
            <switch-option v-if="scrollbar" class="item sub first last" name="fade" :value="scrollbarFade"
                           @update:value="updateScrollbarFade"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="Pull Down Refresh" :value="pullDownRefresh"
                           @update:value="updatePullDownRefresh"></switch-option>
            <input-option v-if="pullDownRefresh" class="item sub first" name="threshold (≥ 40)"
                          :value="pullDownRefreshThreshold" min-value="40"
                          @update:value="updatePullDownRefreshThreshold"></input-option>
            <input-option v-if="pullDownRefresh" class="item sub" name="stop (≥ 40)" :value="pullDownRefreshStop"
                          min-value="40"
                          @update:value="updatePullDownRefreshStop"></input-option>
            <input-option v-if="pullDownRefresh" class="item sub" name="txt" :value="pullDownRefreshTxt"
                          @update:value="updatePullDownRefreshTxt"></input-option>
            <switch-option v-if="pullDownRefresh" class="item sub last" name="Custom Animation" :value="customPullDown"
                           @update:value="updateCustomPullDown"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="Pull Up Load" :value="pullUpLoad"
                           @update:value="updatePullUpLoad"></switch-option>
            <input-option v-if="pullUpLoad" class="item sub first" name="threshold" :value="pullUpLoadThreshold"
                          @update:value="updatePullUpLoadThreshold"></input-option>
            <input-option v-if="pullUpLoad" class="item sub" name="moreTxt" :value="pullUpLoadMoreTxt"
                          @update:value="updatePullUpLoadMoreTxt"></input-option>
            <input-option v-if="pullUpLoad" class="item sub last" name="noMoreTxt" :value="pullUpLoadNoMoreTxt"
                          @update:value="updatePullUpLoadNoMoreTxt"></input-option>
          </div>
          <div class="group">
            <input-option class="item" name="startY" :value="startY"
                          @update:value="updateStartY"></input-option>
          </div>
        </div>
      </div>
      <div class="demo">
        <div class="title sub">Demo</div>
        <div class="scroll-list-wrap">
          <cube-scroll
              ref="scroll"
              :data="items"
              :scrollbar="scrollbarObj"
              :pull-down-refresh="pullDownRefreshObj"
              :pull-up-load="pullUpLoadObj"
              @pulling-down="onPullingDown"
              @pulling-up="onPullingUp">
            <template v-if="customPullDown" slot="pulldown" slot-scope="props">
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
        </div>
      </div>
      <div class="methods">
        <div class="title sub">Methods</div>
        <ul class="method-list">
          <div class="group">
            <input-option class="item" name="x" :value="scrollToX"
                          @update:value="updateScrollToX"></input-option>
            <input-option class="item" name="y" :value="scrollToY"
                          @update:value="updateScrollToY"></input-option>
            <input-option class="item" name="time" :value="scrollToTime"
                          @update:value="updateScrollToTime"></input-option>
            <select-option class="item" name="easing" :value="scrollToEasing" :options="scrollToEasingOptions"
                           @update:value="updateScrollToEasing"></select-option>
            <button @click="scrollTo">scrollTo</button>
          </div>
        </ul>
      </div>

    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import Vue from 'vue'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option/switch-option.vue'
  import InputOption from '../components/input-option/input-option.vue'
  import SelectOption from '../components/select-option/select-option.vue'

  import { ease } from '../data/ease'

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
        scrollbar: true,
        scrollbarFade: true,
        pullDownRefresh: true,
        pullDownRefreshThreshold: 90,
        pullDownRefreshStop: 40,
        pullDownRefreshTxt: 'Refresh success',
        pullUpLoad: true,
        pullUpLoadThreshold: 0,
        pullUpLoadMoreTxt: 'Load more',
        pullUpLoadNoMoreTxt: 'No more data',
        startY: 0,
        scrollToX: 0,
        scrollToY: -200,
        scrollToTime: 700,
        scrollToEasing: 'bounce',
        scrollToEasingOptions: ['bounce', 'swipe', 'swipeBounce'],
        customPullDown: false
      }
    },
    components: {
      CubePage,
      SwitchOption,
      InputOption,
      SelectOption
    },
    watch: {
      scrollbarObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullDownRefreshObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      pullUpLoadObj: {
        handler() {
          this.rebuildScroll()
        },
        deep: true
      },
      startY() {
        this.rebuildScroll()
      }
    },
    computed: {
      scrollbarObj: function () {
        return this.scrollbar ? {fade: this.scrollbarFade} : false
      },
      pullDownRefreshObj: function () {
        return this.pullDownRefresh ? {
          threshold: parseInt(this.pullDownRefreshThreshold),
          stop: parseInt(this.pullDownRefreshStop),
          txt: this.pullDownRefreshTxt
        } : false
      },
      pullUpLoadObj: function () {
        return this.pullUpLoad ? {
          threshold: parseInt(this.pullUpLoadThreshold),
          txt: {more: this.pullUpLoadMoreTxt, noMore: this.pullUpLoadNoMoreTxt}
        } : false
      }
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
      },
      scrollTo() {
        this.$refs.scroll.scrollTo(this.scrollToX, this.scrollToY, this.scrollToTime, ease[this.scrollToEasing])
      },
      updateScrollbar(val) {
        this.scrollbar = val
      },
      updateScrollbarFade(val) {
        this.scrollbarFade = val
      },
      updatePullDownRefresh(val) {
        this.pullDownRefresh = val
      },
      updatePullDownRefreshThreshold(val) {
        this.pullDownRefreshThreshold = val
      },
      updatePullDownRefreshStop(val) {
        this.pullDownRefreshStop = val
      },
      updatePullDownRefreshTxt(val) {
        this.pullDownRefreshTxt = val
      },
      updatePullUpLoad(val) {
        this.pullUpLoad = val
      },
      updatePullUpLoadThreshold(val) {
        this.pullUpLoadThreshold = val
      },
      updatePullUpLoadMoreTxt(val) {
        this.pullUpLoadMoreTxt = val
      },
      updatePullUpLoadNoMoreTxt(val) {
        this.pullUpLoadNoMoreTxt = val
      },
      updateStartY(val) {
        this.startY = val
      },
      updateCustomPullDown(val) {
        this.customPullDown = val
      },
      updateScrollToX(val) {
        this.scrollToX = val
      },
      updateScrollToY(val) {
        this.scrollToY = val
      },
      updateScrollToTime(val) {
        this.scrollToTime = val
      },
      updateScrollToEasing(val) {
        this.scrollToEasing = val
      },
      rebuildScroll() {
        Vue.nextTick(() => {
          this.$refs.scroll.destroy()
          this.$refs.scroll.initScroll()
        })
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "../../src/common/stylus/variable.styl"

  .scroll-wrapper
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
