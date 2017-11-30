<template>
  <div class="cube-slide" ref="slide">
    <div class="cube-slide-group" ref="slideGroup">
      <slot></slot>
    </div>
    <div class="cube-slide-dots">
      <span :class="{active: currentPageIndex === index}" v-for="(item, index) in dots"></span>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'cube-slide'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    props: {
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
      }
    },
    data() {
      return {
        dots: 0,
        currentPageIndex: 0
      }
    },
    methods: {
      refresh() {
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
          snap: {
            loop: this.loop,
            threshold: this.threshold,
            speed: this.speed
          },
          click: true,
          observeDOM: false
        })

        this.slide.on('scrollEnd', this._onScrollEnd)

        this.slide.on('touchend', () => {
          if (this.autoPlay) {
            this._play()
          }
        })

        this.slide.on('beforeScrollStart', () => {
          if (this.autoPlay) {
            clearTimeout(this._timer)
          }
        })
      },
      _onScrollEnd() {
        let pageIndex = this.slide.getCurrentPage().pageX
        if (this.loop) {
          pageIndex -= 1
        }
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
        let pageIndex = this.currentPageIndex + 1
        if (this.loop) {
          pageIndex += 1
        }
        clearTimeout(this._timer)
        this._timer = setTimeout(() => {
          this.slide.goToPage(pageIndex, 0, 400)
        }, this.interval)
      },
      _deactivated() {
        clearTimeout(this._timer)
        clearTimeout(this._resizeTimer)
        window.removeEventListener('resize', this._resizeHandler)
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
          this.refresh()
        }, 60)
      }
    },
    mounted() {
      this.$nextTick(() => {
        if (this._isDestroyed) {
          return
        }
        this._setSlideWidth()
        this._initDots()
        this._initSlide()

        if (this.autoPlay) {
          this._play()
        }
      })

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
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-slide
    min-height: 1px

  .cube-slide-group
    position: relative
    overflow: hidden
    white-space: nowrap

  .cube-slide-dots
    position: absolute
    bottom: 2px
    right: 0
    left: 0
    padding: 0 6px
    text-align: center
    transform: translateZ(1px)
    > span
      display: inline-block
      margin: 0 1px
      width: 10px
      height: 1px
      background: $slide-dot-bgc
      &.active
        background: $slide-dot-active-bgc
</style>
