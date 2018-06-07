<template>
  <transition name="cube-image-preview-fade">
    <cube-popup type="image-preview" :center="false" v-show="isVisible">
      <div class="cube-image-preview-container">
        <cube-slide
          ref="slide"
          v-if="isVisible"
          :data="imgs"
          :initial-index="lastPageIndex"
          :auto-play="false"
          :loop="loop"
          :speed="speed"
          :options="options"
          @change="slideChangeHanlder"
        >
          <cube-slide-item
            v-for="(img, index) in imgs"
            :key="index"
          >
            <div class="cube-image-preview-item" @click="itemClickHandler">
              <cube-scroll
                ref="items"
                :options="scrollOptions"
                @dblclick.native="dblclickHandler(index, $event)"
              >
                <img class="cube-image-preview-img" :src="img" @load="imgLoad(index)">
              </cube-scroll>
            </div>
          </cube-slide-item>
          <template
            slot="dots"
            slot-scope="props"
          >
            <slot name="footer" :current="props.current">
              <span class="cube-image-preview-counter">{{props.current + 1}}/{{props.dots.length}}</span>
            </slot>
          </template>
        </cube-slide>
      </div>
    </cube-popup>
  </transition>
</template>
<script type="text/ecmascript-6">
  import CubePopup from '../popup/popup.vue'
  import CubeSlide from '../slide/slide.vue'
  import CubeSlideItem from '../slide/slide-item.vue'
  import CubeScroll from '../scroll/scroll.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import { isAndroid } from '../../common/helpers/env'

  const COMPONENT_NAME = 'cube-image-preview'
  const EVENT_CHANGE = 'change'
  const EVENT_HIDE = 'hide'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin],
    props: {
      initialIndex: {
        type: Number,
        default: 0
      },
      imgs: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      },
      loop: {
        type: Boolean,
        default: true
      },
      speed: {
        type: Number,
        default: 400
      }
    },
    data() {
      return {
        lastPageIndex: this.initialIndex,
        options: {
          observeDOM: false,
          bounce: {
            left: true,
            right: true
          },
          useTransition: !isAndroid,
          probeType: 3
        },
        scrollOptions: {
          observeDOM: false,
          zoom: true,
          bindToWrapper: true,
          freeScroll: true,
          scrollX: true,
          scrollY: true,
          probeType: 3,
          bounce: false,
          useTransition: isAndroid,
          click: false,
          dblclick: true,
          bounceTime: 300
        }
      }
    },
    watch: {
      initialIndex(newIndex) {
        this.setPageIndex(newIndex)
      }
    },
    methods: {
      show() {
        this.isVisible = true
        this.$nextTick(() => {
          this.$refs.items.forEach((scrollItem) => {
            this.$nextTick(() => {
              this.$refs.slide.slide.on('scrollStart', this.slideScrollStartHandler)
              this.$refs.slide.slide.on('scrollEnd', this.slideScrollEndHandler)
              scrollItem.scroll.on('zoomStart', this.zoomStartHandler.bind(this, scrollItem.scroll))
              scrollItem.scroll.on('scroll', this.checkBoundary.bind(this, scrollItem.scroll))
              scrollItem.scroll.on('scrollEnd', this.scrollEndHandler.bind(this, scrollItem.scroll))
            })
          })
        })
      },
      hide() {
        this.isVisible = false
        this.$emit(EVENT_HIDE)
      },
      prev() {
        const slide = this.$refs.slide.slide
        slide && slide.prev()
      },
      next() {
        const slide = this.$refs.slide.slide
        slide && slide.next()
      },
      goTo(index) {
        const slide = this.$refs.slide.slide
        slide && slide.goToPage(index, 0)
      },
      imgLoad(i) {
        /* istanbul ignore if */
        if (this.isVisible && this.$refs.items) {
          this.$refs.items[i].scroll.refresh()
        }
      },
      setPageIndex(currentPageIndex) {
        if (this.lastPageIndex >= 0 && this.lastPageIndex !== currentPageIndex) {
          const scroll = this.$refs.items[this.lastPageIndex].scroll
          /* istanbul ignore if */
          if (scroll.scale !== 1) {
            scroll.scale = 1
            scroll.lastcale = 1
            scroll.refresh()
          }
        }
        this.lastPageIndex = currentPageIndex
      },
      slideChangeHanlder(currentPageIndex) {
        this.setPageIndex(currentPageIndex)
        this.slideScrollEndHandler()
        this.$emit(EVENT_CHANGE, currentPageIndex)
      },
      slideScrollStartHandler() {
        if (this._scrolling && !this._hasEnableSlide) {
          this.$refs.slide.slide.disable()
        } else {
          this.$refs.slide.slide.enable()
        }
      },
      slideScrollEndHandler() {
        this.$refs.items.forEach((scrollItem) => {
          this.scrollEndHandler(scrollItem.scroll)
        })
      },
      _scroll(scroll) {
        this.$refs.slide.slide.disable()
        this.$refs.slide.slide.refresh()
        scroll.enable()
      },
      _slide(scroll) {
        this.$refs.slide.slide.enable()
        scroll.disable()
      },
      scrollEndHandler(scroll) {
        if (this.dblZooming) {
          this.dblZooming = false
          clearTimeout(this.clickTid)
        }
        this._hasEnableSlide = false
        this._scrolling = false
        scroll.enable()
        setTimeout(() => {
          this.$refs.slide.slide.enable()
        })
      },
      checkBoundary(scroll, pos) {
        if (scroll.movingDirectionX) {
          this._scrolling = true
          const reached = scroll.movingDirectionX === -1 ? pos.x >= scroll.minScrollX : pos.x <= scroll.maxScrollX
          if (reached) {
            this._hasEnableSlide = true
            this._slide(scroll)
          } else {
            if (!this._hasEnableSlide) {
              this._scroll(scroll)
            }
          }
        } else if (scroll.movingDirectionY) {
          this._scrolling = true
          this._scroll(scroll)
        }
      },
      zoomStartHandler(scroll) {
        this._scroll(scroll)
      },
      dblclickHandler(index, e) {
        const scroll = this.$refs.items[index].scroll
        this.dblZooming = true
        this.zoomTo(scroll, scroll.scale > 1 ? 1 : 2, e)
        scroll.disable()
      },
      itemClickHandler() {
        clearTimeout(this.clickTid)
        this.clickTid = setTimeout(() => {
          !this.dblZooming && this.hide()
        }, this.scrollOptions.bounceTime)
      },
      zoomTo(scroll, scale, e) {
        scroll.zoomTo(scale, e.pageX, e.pageY)
      }
    },
    components: {
      CubePopup,
      CubeSlide,
      CubeSlideItem,
      CubeScroll
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-image-preview-fade-enter, .cube-image-preview-fade-leave-active
    opacity: 0
  .cube-image-preview-fade-enter-active, .cube-image-preview-fade-leave-active
    transition: all .3s ease-in-out

  .cube-image-preview
    .cube-popup-mask
      opacity: .6
    .cube-popup-content
      width: 100%
      height: 100%
    .cube-slide-item
      display: flex
      align-items: center
      justify-content: center
      overflow: hidden
    .cube-slide-dots
      bottom: 50px
      .cube-image-preview-counter
        width: auto
        height: auto
        font-size: $fontsize-medium
        color: $image-preview-counter-color
        background: none
  .cube-image-preview-container
    height: 100%
    margin: 0 -10px
  .cube-image-preview-item
    position: relative
    padding: 0 10px
    height: 100%
    .cube-scroll-wrapper
      display: flex
      align-items: center
      justify-content: center
    .cube-image-preview-img
      display: block
      height: auto
      max-width: 100%
      max-height: 100%
</style>
