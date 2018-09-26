<template>
  <cube-page type="scroll-view" title="Scroll" class="jd">
    <div slot="content" class="scroll-list-wrap">
      <header ref="topHeader"><img src="http://om0jxp12h.bkt.clouddn.com/jd_header2.png"></header>
      <cube-scroll
        ref="scroll"
        :data="[]"
        :scroll-events="['scroll']"
        :options="options"
        @scroll="onScrollHandle"
        @pulling-down="onPullingDown">
        <img src="http://om0jxp12h.bkt.clouddn.com/jd_content.JPG">
        <template slot="pulldown" slot-scope="props">
          <div
              v-if="props.pullDownRefresh"
              class="cube-pulldown-wrapper"
              :style="pullDownStyle">
            <div class="pulldown-content">
              <img src="http://om0jxp12h.bkt.clouddn.com/pulldow-img.jpg" @load="onImgLoad">
              <span v-if="props.beforePullDown">{{ pullDownTip }}</span>
              <template v-else>
                <span v-if="props.isPullingDown">正在更新...</span>
                <span v-else>更新成功</span>
              </template>
            </div>
          </div>
        </template>
      </cube-scroll>
      <footer><img src="http://om0jxp12h.bkt.clouddn.com/jd_footer2.png"></footer>
      <transition name="surprise-page">
        <div v-if="triggerSurprise"
          @click="surpriseHandle"
          class="surprise-page">
          <img src="http://om0jxp12h.bkt.clouddn.com/ad_fullpage2.jpg">
        </div>
      </transition>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'

export default {
  data() {
    return {
      options: {
        pullDownRefresh: {
          threshold: 60,
          stop: 40,
          txt: '更新成功'
        }
      },
      pullDownY: 0,
      pullDownStyle: '',
      opacityStyle: '',
      triggerSurpriseFlag: false,
      triggerSurprise: false
    }
  },
  components: {
    CubePage
  },
  computed: {
    pullDownTip() {
      if (this.pullDownY <= 60) {
        return '下拉刷新...'
      } else if (this.pullDownY <= 90) {
        return '继续下拉有惊喜...'
      } else {
        return '松手得惊喜！'
      }
    },
    headerStyle() {
      return Math.min(1, Math.max(0, 1 - this.pullDownY / 40))
    }
  },
  methods: {
    onScrollHandle(pos) {
      this.pullDownY = pos.y
      if (pos.y > 0) {
        this.pullDownStyle = `top:${pos.y}px`
        this.triggerSurpriseFlag = false
        if (this.pullDownY > 90) {
          this.triggerSurpriseFlag = true
        }
      }
      this.$refs.topHeader.style.opacity = this.headerStyle
    },
    onPullingDown() {
      if (this.triggerSurpriseFlag) {
        this.triggerSurprise = true
        this.$refs.scroll.forceUpdate()
        return
      }
      setTimeout(() => {
        this.$refs.scroll.forceUpdate()
      }, 1000)
    },
    surpriseHandle() {
      this.triggerSurpriseFlag = false
      this.triggerSurprise = false
      this.$refs.topHeader.style.opacity = 1
      // go to other page
    },
    onImgLoad() {
      this.$refs.scroll.refresh()
    }
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.jd
  .content
    margin: 0 !important
    height: 100%
  .scroll-list-wrap
    position: relative
    height: 100%
    border: 1px solid rgba(0, 0, 0, 0.1)
    border-radius: 5px
    transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
    overflow: hidden
    header
    footer
      position: absolute
      left: 0
      z-index: 32
      line-height: 0
      width: 100%
    header
      top: 0
    footer
      bottom: 0
    img
      width: 100%
      // height: 50px
    .cube-pulldown-wrapper
      transform: translateY(-100%)
      line-height: 0
      .pulldown-content
        width: 100%
        span
          position: absolute
          bottom: 15px
          left: 0
          right: 0
          margin: auto
          width: 200px
          text-align: center
          color: #eee
          font-size: 14px
  .surprise-page
    position absolute
    top: 0
    bottom: 0
    right: 0
    left: 0
    z-index: 33
    line-height: 0
    img 
      height: 100%
      width: 100%
  .surprise-page-enter, .surprise-page-leave-to
    transform: translateY(-100%)
  .surprise-page-enter-active, .surprise-page-leave-active
    transition: transform .3s
</style>
