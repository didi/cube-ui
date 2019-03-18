<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="options">
        <div class="title">Options</div>
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="Pull Down Refresh" :value="pullDownRefresh"
                           @update:value="updatePullDownRefresh"></switch-option>
            <input-option v-if="pullDownRefresh" class="item sub first" name="threshold (≥ 40)"
                          :value="pullDownRefreshThreshold" min-value="40"
                          @update:value="updatePullDownRefreshThreshold"></input-option>
            <!-- <input-option v-if="pullDownRefresh" class="item sub" name="stop (≥ 40)" :value="pullDownRefreshStop"
                          min-value="40"
                          @update:value="updatePullDownRefreshStop"></input-option> -->
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
        </div>
      </div>
      <div class="demo">
        <div class="title">Demo</div>
        <div class="scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="items"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <ul class="foods-wrapper">
              <li v-for="food in items" class="food-item border-1px">
                <div class="icon">
                  <img width="57" height="57" :src="food.icon">
                </div>
                <div class="food-content">
                  <h2 class="name">{{food.name}}</h2>
                  <p class="description">{{food.description}}</p>
                  <div class="extra">
                    <span class="count">月售{{food.sellCount}}份</span><span>好评率{{food.rating}}%</span>
                  </div>
                  <div class="price">
                    <span class="now">￥{{food.price}}</span>
                    <span class="old" v-show="food.oldPrice">￥{{food.oldPrice}}</span>
                  </div>
                </div>
              </li>
            </ul>
            <template v-if="customPullDown" slot="pulldown" slot-scope="props">
              <div
                  v-if="props.pullDownRefresh"
                  class="cube-pulldown-wrapper"
                  :style="props.pullDownStyle">
                <div
                    v-show="props.beforePullDown"
                    class="before-trigger"
                    :style="{paddingTop: props.bubbleY + 'px'}">
                  <span :class="{rotate: props.bubbleY > pullDownRefreshThreshold - 40}">↓</span>
                </div>
                <div class="after-trigger" v-show="!props.beforePullDown">
                  <div v-show="props.isPullingDown" class="loading">
                    <cube-loading></cube-loading>
                  </div>
                  <div v-show="!props.isPullingDown" class="text"><span class="refresh-text">Refresh success</span></div>
                </div>
              </div>
            </template>
          </cube-scroll>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import Vue from 'vue'
import CubePage from '../../components/cube-page.vue'
import SwitchOption from '../../components/switch-option'
import InputOption from '../../components/input-option'
import SelectOption from '../../components/select-option'
import goodsData from 'example/data/goods-list.json'

let _foods = []

goodsData.goods.forEach(item => {
  _foods = _foods.concat(item.foods)
})

export default {
  data() {
    return {
      items: _foods,
      pullDownRefresh: false,
      pullDownRefreshThreshold: 60,
      pullDownRefreshStop: 40,
      pullDownRefreshTxt: 'Refresh success',
      pullUpLoad: false,
      pullUpLoadThreshold: 0,
      pullUpLoadMoreTxt: 'Load more',
      pullUpLoadNoMoreTxt: 'No more data',
      customPullDown: false
    }
  },
  components: {
    CubePage,
    SwitchOption,
    InputOption,
    SelectOption
  },
  computed: {
    options() {
      return {
        pullDownRefresh: this.pullDownRefreshObj,
        pullUpLoad: this.pullUpLoadObj,
        scrollbar: true
      }
    },
    pullDownRefreshObj: function() {
      return this.pullDownRefresh ? {
        threshold: parseInt(this.pullDownRefreshThreshold),
        // Do not need to set stop value, but you can if you want
        // stop: parseInt(this.pullDownRefreshStop),
        txt: this.pullDownRefreshTxt
      } : false
    },
    pullUpLoadObj: function() {
      return this.pullUpLoad ? {
        threshold: parseInt(this.pullUpLoadThreshold),
        txt: {
          more: this.pullUpLoadMoreTxt,
          noMore: this.pullUpLoadNoMoreTxt
        }
      } : false
    }
  },
  methods: {
    onPullingDown() {
      // 模拟更新数据
      setTimeout(() => {
        if (Math.random() > 0.5) {
          // 如果有新数据
          this.items.unshift(_foods[1])
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
          let newPage = _foods.slice(0, 5)
          this.items = this.items.concat(newPage)
        } else {
          // 如果没有新数据
          this.$refs.scroll.forceUpdate()
        }
      }, 1000)
    },
    updatePullDownRefresh(val) {
      this.pullDownRefresh = val
    },
    updatePullDownRefreshThreshold(val) {
      this.pullDownRefreshThreshold = val
    },
    // updatePullDownRefreshStop(val) {
    //   this.pullDownRefreshStop = val
    // },
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
    updateCustomPullDown(val) {
      this.customPullDown = val
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
.scroll-wrapper 
  .cube-pulldown-wrapper 
    .before-trigger 
      font-size: 30px
      line-height: 30px
      align-self: flex-end
      span 
        display: inline-block
        transition: all 0.3s
        color: #666
        &.rotate 
          transform: rotate(180deg)
    .after-trigger
      .refresh-text
        color: grey

.scroll-list-wrap 
  height: 350px
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  overflow: hidden

.foods-wrapper 
  .food-item 
    display: flex
    padding: 18px
    border-bottom: 1px solid rgba(7, 17, 27, 0.1)

    &:last-child 
      border-none()
      margin-bottom: 0
    .icon 
      flex: 0 0 57px
      margin-right: 10px

    .food-content 
      flex: 1
      .name 
        margin: 2px 0 8px 0
        height: 14px
        line-height: 14px
        font-size: 14px
        color: rgb(7, 17, 27)
      .description, .extra 
        line-height: 10px
        font-size: 10px
        color: rgb(147, 153, 159)
      .description 
        line-height: 12px
        margin-bottom: 8px
      .extra 
        .count 
          margin-right: 12px
      .price 
        font-weight: 700
        line-height: 24px
        .now 
          margin-right: 8px
          font-size: 14px
          color: rgb(240, 20, 20)
        .old 
          text-decoration: line-through
          font-size: 10px
          color: rgb(147, 153, 159)
      .cartcontrol-wrapper 
        position: absolute
        right: 0
        bottom: 12px
</style>
