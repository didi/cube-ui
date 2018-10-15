<template>
  <cube-page type="scroll-view" title="Scroll" class="toutiao">
    <template slot="content">
      <header ref="topHeader"><img src="http://om0jxp12h.bkt.clouddn.com/toutiao_header2.png"></header>
      <div class="nav-scroll-list-wrap">
        <cube-scroll ref="navScroll" direction="horizontal">
          <ul class="nav-wrapper">
            <li v-for="(item, index) in navTxts" :key="index" class="nav-item">{{ item }}</li>
          </ul>
        </cube-scroll>
        <div class="more-wrapper">
          <span class="more"></span>
        </div>
      </div>
      <div class="content-scroll-wrapper">
        <div class="content-scroll-list-wrap" ref="scrollWrapper">
          <cube-scroll
            ref="contentScroll"
            :data="content"
            :options="options"
            @pulling-down="onPullingDown"
            @pulling-up="onPullingUp">
            <ul class="imgs-wrapper">
              <li v-for="(item, index) in content" :key="index" class="imgs-item">
                <img :src="item.url" @load="onImgLoad">
              </li>
            </ul>
            <template slot="pulldown" slot-scope="props">
              <div v-if="props.pullDownRefresh"
                class="cube-pulldown-wrapper"
                :style="props.pullDownStyle">
                <div v-if="props.beforePullDown"
                  class="before-trigger"
                  :style="{paddingTop: props.bubbleY + 'px'}">
                  <span :class="{rotate: props.bubbleY > 0}">↓</span>
                </div>
                <div class="after-trigger" v-else>
                  <div v-show="props.isPullingDown" class="loading">
                    <cube-loading></cube-loading>
                  </div>
                  <transition name="success">
                    <div v-show="!props.isPullingDown" class="text-wrapper"><span class="refresh-text">今日头条推荐引擎有x条更新</span></div>
                  </transition>
                </div>
              </div>
            </template>
          </cube-scroll>
        </div>
      </div>
      <footer ref="footer"><img src="http://om0jxp12h.bkt.clouddn.com/toutiao_footer2.png"></footer>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'

const imgs = [
  {
    url: 'http://om0jxp12h.bkt.clouddn.com/toutiao_12.JPG'
  },
  {
    url: 'http://om0jxp12h.bkt.clouddn.com/toutiao_21.JPG'
  },
  {
    url: 'http://om0jxp12h.bkt.clouddn.com/toutiao_31.JPG'
  }
]

const txts = ['关注', '推荐', '新时代', '热点', '体育', '娱乐', '科技', '头条号', '问答', '国际', 'cube-ui666']

let cnt = 1
export default {
  data() {
    return {
      content: imgs.slice(),
      options: {
        pullDownRefresh: {
          threshold: 60,
          // stop: 44,
          stopTime: 1000,
          txt: '更新成功'
        },
        pullUpLoad: true
      },
      navTxts: txts,
      secondStop: 26
    }
  },
  components: {
    CubePage
  },
  methods: {
    onPullingDown() {
      setTimeout(() => {
        this.content.unshift(imgs[cnt++ % 3])
        this.$refs.contentScroll.scrollTo(0, this.secondStop, 300)
      }, 1000)
    },
    onPullingUp() {
      setTimeout(() => {
        this.content = this.content.concat(imgs)
      }, 1000)
    },
    onImgLoad() {
      const contentScroll = this.$refs.contentScroll
      contentScroll.scroll.beforePullDown && contentScroll.refresh()
    }
  },
  mounted() {
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.toutiao
  .content
    margin: 0 !important
    height: 100%
    display: flex
    flex-flow: column
    >header
      line-height: 0
      img 
        width: 100%
    footer
      line-height: 0
      img
        width: 100%
  .nav-scroll-list-wrap
    transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
    position: relative
    background-color: white
    border-bottom : 1px solid rgba(0, 0, 0, 0.1)
    padding-right: 30px
    .cube-scroll-content
      display: inline-block
      .nav-wrapper
        display: inline-block
        white-space: nowrap
        line-height: 36px
        padding: 0 5px
        .nav-item
          display: inline-block
          padding: 0 5px
          &:nth-child(2)
            color: #fa7b7a
    .more-wrapper
      position: absolute
      right: 0
      top: 0
      bottom: 0
      z-index: 1
      background-color: #fff
      opacity: 0.95
      .more
        display: inline-block
        height: 1px
        width: 20px
        padding: 5px 0
        border: 1px solid #000
        border-right: transparent
        border-left: transparent
        background-color: #000
        background-clip: content-box
        margin: 11px
  .content-scroll-wrapper
    flex: 1
    position: relative
    .content-scroll-list-wrap
      height: 100%
      transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
      position: absolute
      top: 0
      bottom: 0
      overflow: hidden
      .imgs-wrapper
        .imgs-item
          >img 
            width: 100%
  .cube-pulldown-wrapper
    text-align: center
    .before-trigger
      height: auto
      font-size: 30px
      align-self: flex-end
      span
        display: inline-block
        line-height: 1
        transition: all 0.3s
        color: #666
        padding: 15px 0
        &.rotate 
          transform: rotate(180deg)
    .after-trigger
      flex: 1
      margin: 0
      .text-wrapper
        margin: 0 auto
        margin-top: 14px
        padding: 5px 0
        color: #498ec2
        background-color: #d6eaf8
      .cube-loading-spinners
        margin: auto
  .success-enter-active, .success-leave-active
    transition: width .5s
  .success-enter, .success-leave-to
    width: 70%
  .success-enter-to, .success-leave
    width: 100%
</style>
