<template>
  <div class="cube-slide" ref="slide">
    <div class="cube-slide-group" ref="slideGroup">
      <slot>
        <cube-slide-item v-for="(item, index) in data" :key="index" @click="clickItem(item, index)" :item="item"></cube-slide-item>
      </slot>
    </div>
    <div class="cube-slide-dots">
      <slot name="dots" :current="currentPageIndex" :dots="dots">
        <span :class="{active: currentPageIndex === index}" v-for="(item, index) in dots" :key="index"></span>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubeSlideItem from './slide-item.vue'
  import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'cube-slide'
  const EVENT_CHANGE = 'change'
  const EVENT_SELECT = 'click'

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      initialIndex: {
        type: Number,
        default: 0
      },
      loop: {
        type: Boolean,
        default: true
      },
      autoPlay: {
        type: Boolean,
        default: true
      },
      interval: {
        type: Number,
        default: 4000
      },
      threshold: {
        type: Number,
        default: 0.3
      },
      speed: {
        type: Number,
        default: 400
      },
      allowVertical: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        dots: 0,
        currentPageIndex: this.initialIndex || 0
      }
    },
    created() {
      const needRefreshProps = ['data', 'loop', 'autoPlay', 'threshold', 'speed', 'allowVertical']
      needRefreshProps.forEach((key) => {
        this.$watch(key, () => {
          this.refresh()
        })
      })
    },
    watch: {
      initialIndex(newIndex) {
        if (newIndex !== this.currentPageIndex) {
          this.slide && this.slide.goToPage(newIndex)
        }
      }
    },
    methods: {
      clickItem(item, index) {
        this.$emit(EVENT_SELECT, item, index)
      },
      refresh() {
        this.slide && this.slide.destroy()
        clearTimeout(this._timer)
        this.$nextTick(() => {
          if (this.slide === null) {
            return
          }
          if (this.slide !== undefined) {
            this.currentPageIndex = 0
          }
          this.dots = 0
          this._setSlideWidth()
          this._initDots()
          this._initSlide()

          if (this.autoPlay) {
            this._play()
          }
        })
      },
      _refresh() {
        this._setSlideWidth(true)
        this.slide.refresh()
      },
      _setSlideWidth(isResize) {
        this.children = this.$refs.slideGroup.children

        let width = 0
        let slideWidth = this.$refs.slide.clientWidth
        for (let i = 0; i < this.children.length; i++) {
          let child = this.children[i]
          child.style.width = slideWidth + 'px'
          width += slideWidth
        }
        if (this.loop && !isResize) {
          width += 2 * slideWidth
        }
        this.$refs.slideGroup.style.width = width + 'px'
      },
      _initSlide() {
        this.slide = new BScroll(this.$refs.slide, {
          scrollX: true,
          scrollY: false,
          momentum: false,
          bounce: false,
          eventPassthrough: this.allowVertical ? 'vertical' : '',
          snap: {
            loop: this.loop,
            threshold: this.threshold,
            speed: this.speed
          },
          click: true,
          observeDOM: false
        })

        this.slide.goToPage(this.currentPageIndex, 0, 0)

        this.slide.on('scrollEnd', this._onScrollEnd)

        window.removeEventListener('touchend', this._touchEndEvent, false)
        this._touchEndEvent = () => {
          if (this.autoPlay) {
            this._play()
          }
        }
        window.addEventListener('touchend', this._touchEndEvent, false)

        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this._timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        if (this.currentPageIndex !== pageIndex) {
          this.currentPageIndex = pageIndex
          this.$emit(EVENT_CHANGE, this.currentPageIndex)
        }

        if (this.autoPlay) {
          this._play()
        }
      },
      _initDots() {
        this.dots = new Array(this.children.length)
      },
      _play() {
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.slide.next()
        }, this.interval)
      },
      _deactivated() {
        clearTimeout(this._timer)
        clearTimeout(this._resizeTimer)
        window.removeEventListener('resize', this._resizeHandler)
        window.removeEventListener('touchend', this._touchEndEvent, false)
      },
      _resizeHandler() {
        if (!this.slide) {
          return
        }
        clearTimeout(this._resizeTimer)
        this._resizeTimer = setTimeout(() => {
          if (this.slide.isInTransition) {
            this._onScrollEnd()
          } else {
            if (this.autoPlay) {
              this._play()
            }
          }
          this._refresh()
        }, 60)
      }
    },
    mounted() {
      this.refresh()

      window.addEventListener('resize', this._resizeHandler)
    },
    activated() {
      if (this.autoPlay) {
        this._play()
      }
      window.addEventListener('resize', this._resizeHandler)
    },
    deactivated() {
      this._deactivated()
    },
    destroyed() {
      this._deactivated()
      if (this.slide) {
        this.slide.destroy()
        this.slide = null
      }
    },
    components: {
      CubeSlideItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-slide
    position: relative
    min-height: 1px
    height: 100%

  .cube-slide-group
    position: relative
    height: 100%
    overflow: hidden
    white-space: nowrap

  .cube-slide-dots
    position: absolute
    bottom: 2px
    right: 0
    left: 0
    padding: 0 6px
    font-size: 0
    text-align: center
    transform: translateZ(1px)
    > span
      display: inline-block
      vertical-align: bottom
      margin: 0 1px
      width: 10px
      height: 1px
      background: $slide-dot-bgc
      &.active
        background: $slide-dot-active-bgc
</style>
