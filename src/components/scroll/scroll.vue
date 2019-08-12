<template>
  <div ref="wrapper" class="cube-scroll-wrapper">
    <div class="cube-scroll-content">
      <div ref="listWrapper" class="cube-scroll-list-wrapper">
        <slot>
          <ul class="cube-scroll-list">
            <li
              class="cube-scroll-item border-bottom-1px"
              v-for="(item, index) in data"
              :key="index"
              @click="clickItem(item)">{{item}}</li>
          </ul>
        </slot>
      </div>
      <slot name="pullup" :pullUpLoad="pullUpLoad" :isPullUpLoad="isPullUpLoad">
        <div class="cube-pullup-wrapper" v-if="pullUpLoad">
          <div class="before-trigger" v-if="!isPullUpLoad">
            <span>{{ pullUpTxt }}</span>
          </div>
          <div class="after-trigger" v-else>
            <loading></loading>
          </div>
        </div>
      </slot>
    </div>
    <div v-if="pullDownRefresh" class="cube-pulldown" ref="pulldown">
      <slot
        name="pulldown"
        :pullDownRefresh="pullDownRefresh"
        :pullDownStyle="pullDownStyle"
        :beforePullDown="beforePullDown"
        :isPullingDown="isPullingDown"
        :bubbleY="bubbleY">
        <div class="cube-pulldown-wrapper" :style="pullDownStyle">
          <div class="before-trigger" v-show="beforePullDown">
            <bubble :y="bubbleY" class="bubble"></bubble>
          </div>
          <div class="after-trigger" v-show="!beforePullDown">
            <div v-show="isPullingDown" class="loading">
              <loading></loading>
            </div>
            <div v-show="!isPullingDown" class="cube-pulldown-loaded"><span>{{ refreshTxt }}</span></div>
          </div>
        </div>
      </slot>
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import Loading from '../loading/loading.vue'
  import Bubble from '../bubble/bubble.vue'
  import scrollMixin from '../../common/mixins/scroll'
  import deprecatedMixin from '../../common/mixins/deprecated'
  import { getRect } from '../../common/helpers/dom'
  import { camelize } from '../../common/lang/string'

  const COMPONENT_NAME = 'cube-scroll'
  const DIRECTION_H = 'horizontal'
  const DIRECTION_V = 'vertical'
  const DEFAULT_REFRESH_TXT = 'Refresh success'
  const DEFAULT_STOP_TIME = 600

  const EVENT_CLICK = 'click'
  const EVENT_PULLING_DOWN = 'pulling-down'
  const EVENT_PULLING_UP = 'pulling-up'

  const EVENT_SCROLL = 'scroll'
  const EVENT_BEFORE_SCROLL_START = 'before-scroll-start'
  const EVENT_SCROLL_END = 'scroll-end'

  const NEST_MODE_NONE = 'none'
  const NEST_MODE_NATIVE = 'native'

  const SCROLL_EVENTS = [EVENT_SCROLL, EVENT_BEFORE_SCROLL_START, EVENT_SCROLL_END]

  const DEFAULT_OPTIONS = {
    observeDOM: true,
    click: true,
    probeType: 1,
    scrollbar: false,
    pullDownRefresh: false,
    pullUpLoad: false
  }

  export default {
    name: COMPONENT_NAME,
    mixins: [scrollMixin, deprecatedMixin],
    provide() {
      return {
        parentScroll: this
      }
    },
    inject: {
      parentScroll: {
        default: null
      }
    },
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      scrollEvents: {
        type: Array,
        default() {
          return []
        },
        validator(arr) {
          return arr.every((item) => {
            return SCROLL_EVENTS.indexOf(item) !== -1
          })
        }
      },
      // TODO: plan to remove at 1.10.0
      listenScroll: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'scroll-events'
        }
      },
      listenBeforeScroll: {
        type: Boolean,
        default: undefined,
        deprecated: {
          replacedBy: 'scroll-events'
        }
      },
      direction: {
        type: String,
        default: DIRECTION_V
      },
      refreshDelay: {
        type: Number,
        default: 20
      },
      nestMode: {
        type: String,
        default: NEST_MODE_NONE
      }
    },
    data() {
      return {
        beforePullDown: true,
        isPullingDown: false,
        isPullUpLoad: false,
        pullUpNoMore: false,
        bubbleY: 0,
        pullDownStyle: '',
        pullDownStop: 40,
        pullDownHeight: 60,
        pullUpHeight: 0
      }
    },
    computed: {
      pullDownRefresh() {
        let pullDownRefresh = this.options.pullDownRefresh
        if (!pullDownRefresh) {
          return pullDownRefresh
        }
        if (pullDownRefresh === true) {
          pullDownRefresh = {}
        }
        return Object.assign({stop: this.pullDownStop}, pullDownRefresh)
      },
      pullUpLoad() {
        return this.options.pullUpLoad
      },
      pullUpTxt() {
        const pullUpLoad = this.pullUpLoad
        const txt = pullUpLoad && pullUpLoad.txt
        const moreTxt = (txt && txt.more) || ''
        const noMoreTxt = (txt && txt.noMore) || ''

        return this.pullUpNoMore ? noMoreTxt : moreTxt
      },
      refreshTxt() {
        const pullDownRefresh = this.pullDownRefresh
        return (pullDownRefresh && pullDownRefresh.txt) || DEFAULT_REFRESH_TXT
      },
      finalScrollEvents() {
        const finalScrollEvents = this.scrollEvents.slice()

        if (!finalScrollEvents.length) {
          this.listenScroll && finalScrollEvents.push(EVENT_SCROLL)
          this.listenBeforeScroll && finalScrollEvents.push(EVENT_BEFORE_SCROLL_START)
        }
        return finalScrollEvents
      },
      needListenScroll() {
        return this.finalScrollEvents.indexOf(EVENT_SCROLL) !== -1 || this.parentScroll
      }
    },
    watch: {
      data() {
        setTimeout(() => {
          this.forceUpdate(true)
        }, this.refreshDelay)
      },
      pullDownRefresh: {
        handler(newVal, oldVal) {
          if (newVal) {
            this.scroll.openPullDown(newVal)
            if (!oldVal) {
              this._onPullDownRefresh()
              this._pullDownRefreshChangeHandler()
            }
          }

          if (!newVal && oldVal) {
            this.scroll.closePullDown()
            this._offPullDownRefresh()
            this._pullDownRefreshChangeHandler()
          }
        },
        deep: true
      },
      pullUpLoad: {
        handler(newVal, oldVal) {
          if (newVal) {
            this.scroll.openPullUp(newVal)
            if (!oldVal) {
              this._onPullUpLoad()
              this._pullUpLoadChangeHandler()
            }
          }

          if (!newVal && oldVal) {
            this.scroll.closePullUp()
            this._offPullUpLoad()
            this._pullUpLoadChangeHandler()
          }
        },
        deep: true
      }
    },
    activated() {
      /* istanbul ignore next */
      this.enable()
    },
    deactivated() {
      /* istanbul ignore next */
      this.disable()
    },
    mounted() {
      this.$nextTick(() => {
        this.initScroll()
      })
    },
    beforeDestroy() {
      this.destroy()
    },
    methods: {
      initScroll() {
        if (!this.$refs.wrapper) {
          return
        }
        this._calculateMinHeight()

        let options = Object.assign({}, DEFAULT_OPTIONS, {
          scrollY: this.direction === DIRECTION_V,
          scrollX: this.direction === DIRECTION_H,
          probeType: this.needListenScroll ? 3 : 1
        }, this.options)

        this.scroll = new BScroll(this.$refs.wrapper, options)

        this.parentScroll && this.nestMode !== NEST_MODE_NONE && this._handleNestScroll()

        this._listenScrollEvents()

        if (this.pullDownRefresh) {
          this._onPullDownRefresh()
          this._pullDownRefreshChangeHandler()
        }

        if (this.pullUpLoad) {
          this._onPullUpLoad()
          this._pullUpLoadChangeHandler()
        }
      },
      disable() {
        this.scroll && this.scroll.disable()
      },
      enable() {
        this.scroll && this.scroll.enable()
      },
      refresh() {
        this._calculateMinHeight()
        this.scroll && this.scroll.refresh()
      },
      destroy() {
        this.scroll && this.scroll.destroy()
        this.scroll = null
      },
      scrollTo() {
        this.scroll && this.scroll.scrollTo.apply(this.scroll, arguments)
      },
      scrollToElement() {
        this.scroll && this.scroll.scrollToElement.apply(this.scroll, arguments)
      },
      clickItem(item) {
        this.$emit(EVENT_CLICK, item)
      },
      async forceUpdate(dirty = false, nomore = false) {
        if (this.isPullDownUpdating) {
          return
        }

        if (this.pullDownRefresh && this.isPullingDown) {
          this.isPullingDown = false
          this.isPullDownUpdating = true
          await this._waitFinishPullDown()
          this.isPullDownUpdating = false
          await this._waitResetPullDown(dirty)
        } else if (this.pullUpLoad && this.isPullUpLoad) {
          this.isPullUpLoad = false
          this.scroll.finishPullUp()
          this.pullUpNoMore = !dirty || nomore
        }

        dirty && this.refresh()
      },
      resetPullUpTxt() {
        this.pullUpNoMore = false
      },
      _listenScrollEvents() {
        this.finalScrollEvents.forEach((event) => {
          this.scroll.on(camelize(event), (...args) => {
            this.$emit(event, ...args)
          })
        })
      },
      _handleNestScroll() {
        // waiting scroll initial
        this.$nextTick(() => {
          const innerScroll = this.scroll
          const outerScroll = this.parentScroll.scroll
          const scrolls = [innerScroll, outerScroll]
          scrolls.forEach((scroll, index, arr) => {
            // scroll ended always enable them
            scroll.on('touchEnd', () => {
              outerScroll.enable()
              innerScroll.enable()
              // when inner scroll reaching boundary, we will disable inner scroll, so when 'touchend' event fire,
              // the inner scroll will not reset initiated within '_end' method in better-scroll.
              // then lead to inner and outer scrolls together when we touch and move on the outer scroll element,
              // so here we reset inner scroll's 'initiated' manually.
              innerScroll.initiated = false
            })

            scroll.on('beforeScrollStart', () => {
              this.touchStartMoment = true
              const anotherScroll = arr[(index + 1) % 2]
              anotherScroll.stop()
              anotherScroll.resetPosition()
            })
          })

          innerScroll.on('scroll', (pos) => {
            // if scroll event triggered not by touch event, such as by 'scrollTo' method
            if (!innerScroll.initiated || innerScroll.isInTransition) {
              return
            }

            if (this.nestMode === NEST_MODE_NATIVE && !this.touchStartMoment) {
              return
            }

            const reachBoundary = this._checkReachBoundary(pos)
            if (reachBoundary) {
              innerScroll.resetPosition()
              innerScroll.disable()
              // Prevent outer scroll have a bouncing step when enabled in 'free' nestMode.
              outerScroll.pointX = innerScroll.pointX
              outerScroll.pointY = innerScroll.pointY
              outerScroll.enable()
            } else {
              outerScroll.disable()
            }
            this.touchStartMoment = false
          })
        })
      },
      _checkReachBoundary(pos) {
        const distX = this.scroll.distX
        const distY = this.scroll.distY
        const reachBoundaryX = distX > 0 ? pos.x >= this.scroll.minScrollX : distX < 0 ? pos.x <= this.scroll.maxScrollX : false
        const reachBoundaryY = distY > 0 ? pos.y >= this.scroll.minScrollY : distY < 0 ? pos.y <= this.scroll.maxScrollY : false
        const freeScroll = this.scroll.freeScroll
        const hasHorizontalScroll = this.scroll.hasHorizontalScroll
        const hasVerticalScroll = this.scroll.hasVerticalScroll

        if (!hasHorizontalScroll && !hasVerticalScroll) {
          return true
        }

        if (freeScroll) {
          return reachBoundaryX || reachBoundaryY
        }

        let reachBoundary
        if (this.scroll.movingDirectionX) {
          reachBoundary = reachBoundaryX
        } else if (this.scroll.movingDirectionY) {
          reachBoundary = reachBoundaryY
        }
        return reachBoundary
      },
      _calculateMinHeight() {
        const { wrapper, listWrapper } = this.$refs
        const pullUpLoad = this.pullUpLoad
        const pullDownRefresh = this.pullDownRefresh
        let minHeight = 0

        if (pullDownRefresh || pullUpLoad) {
          const wrapperHeight = getRect(wrapper).height
          minHeight = wrapperHeight + 1
          if (pullUpLoad && pullUpLoad.visible) {
            // minHeight = wrapperHeight + 1 - pullUpHeight, then pullUpLoad text is visible
            // when content's height is not larger than wrapper height
            minHeight -= this.pullUpHeight
          }
        }

        listWrapper.style.minHeight = `${minHeight}px`
      },
      _onPullDownRefresh() {
        this.scroll.on('pullingDown', this._pullDownHandle)
        this.scroll.on('scroll', this._pullDownScrollHandle)
      },
      _offPullDownRefresh() {
        this.scroll.off('pullingDown', this._pullDownHandle)
        this.scroll.off('scroll', this._pullDownScrollHandle)
      },
      _pullDownRefreshChangeHandler() {
        this.$nextTick(() => {
          this._getPullDownEleHeight()
          this._calculateMinHeight()
        })
      },
      _pullDownHandle() {
        if (this.resetPullDownTimer) {
          clearTimeout(this.resetPullDownTimer)
        }
        this.beforePullDown = false
        this.isPullingDown = true
        this.$emit(EVENT_PULLING_DOWN)
      },
      _pullDownScrollHandle(pos) {
        if (this.beforePullDown) {
          this.bubbleY = Math.max(0, pos.y - this.pullDownHeight)
          this.pullDownStyle = `top:${Math.min(pos.y - this.pullDownHeight, 0)}px`
        } else {
          this.bubbleY = 0
          this.pullDownStyle = `top:${Math.min(pos.y - this.pullDownStop, 0)}px`
        }
      },
      _pullUpLoadChangeHandler() {
        this.$nextTick(() => {
          this._getPullUpEleHeight()
          this._calculateMinHeight()
        })
      },
      _onPullUpLoad() {
        this.scroll.on('pullingUp', this._pullUpHandle)
      },
      _offPullUpLoad() {
        this.scroll.off('pullingUp', this._pullUpHandle)
      },
      _pullUpHandle() {
        this.isPullUpLoad = true
        this.$emit(EVENT_PULLING_UP)
      },
      _waitFinishPullDown(next) {
        const {stopTime = DEFAULT_STOP_TIME} = this.pullDownRefresh
        return new Promise(resolve => {
          setTimeout(() => {
            this.scroll.finishPullDown()
            resolve()
          }, stopTime)
        })
      },
      _waitResetPullDown(dirty) {
        return new Promise(resolve => {
          this.resetPullDownTimer = setTimeout(() => {
            this.pullDownStyle = `top: -${this.pullDownHeight}px`
            this.beforePullDown = true
            resolve()
          }, this.scroll.options.bounceTime)
        })
      },
      _getPullDownEleHeight() {
        let pulldown = this.$refs.pulldown
        if (!pulldown) {
          return
        }
        pulldown = pulldown.firstChild
        this.pullDownHeight = getRect(pulldown).height

        this.beforePullDown = false
        this.isPullingDown = true
        this.$nextTick(() => {
          this.pullDownStop = getRect(pulldown).height

          this.beforePullDown = true
          this.isPullingDown = false
        })
      },
      _getPullUpEleHeight() {
        const listWrapper = this.$refs.listWrapper
        const pullup = listWrapper.nextElementSibling
        if (!pullup) {
          this.pullUpHeight = 0
          return
        }
        this.pullUpHeight = getRect(pullup).height
      }
    },
    components: {
      Loading,
      Bubble
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"

  .cube-scroll-wrapper
    position: relative
    height: 100%
    overflow: hidden

  .cube-scroll-list-wrapper
    overflow: hidden

  .cube-pulldown-wrapper
    position: absolute
    width: 100%
    left: 0
    display: flex
    justify-content: center
    align-items: center
    transition: all
    .before-trigger
      height: 54px
      line-height: 0
      padding-top: 6px
    .after-trigger
      .loading
        padding: 8px 0
      .cube-pulldown-loaded
        padding: 12px 0

  .cube-pullup-wrapper
    width: 100%
    display: flex
    justify-content: center
    align-items: center
    .before-trigger
      padding: 22px 0
      min-height: 1em
    .after-trigger
      padding: 19px 0

  .cube-scroll-content
    position: relative
    z-index: 1

  .cube-scroll-item
    height: 60px
    line-height: 60px
    font-size: $fontsize-large-x
    padding-left: 20px
</style>
