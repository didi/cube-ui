<template>
  <li ref="swipeItem" class="cube-swipe-item"
      @transitionend="onTransitionEnd"
      @touchstart="onTouchStart"
      @touchmove="onTouchMove"
      @touchend="onTouchEnd">
    <slot>
      <div @click="clickItem(item)" class="cube-swipe-item-inner border-bottom-1px">
        <span>{{item.text}}</span>
      </div>
    </slot>
    <ul class="cube-swipe-btns">
      <li ref="btns"
          v-for="btn in btns"
          class="cube-swipe-btn"
          :style="genBtnStyl(btn)"
          @click.prevent="clickBtn(btn)">
        <span class="text">{{btn.text}}</span>
      </li>
    </ul>
  </li>
</template>

<script type="text/ecmascript-6">
  import {
    getRect,
    prefixStyle
  } from '../../common/helpers/dom'

  import { easeOutQuart, easeOutCubic } from '../../common/helpers/ease'
  import { requestAnimationFrame, cancelAnimationFrame } from '../../common/helpers/raf'
  import { getNow } from '../../common/helpers/util'

  const COMPONENT_NAME = 'cube-swipe-item'
  const EVENT_ITEM_CLICK = 'item_click'
  const EVENT_BTN_CLICK = 'btn_click'
  const EVENT_SCROLL = 'scroll'
  const EVENT_ACTIVE = 'active'
  const DIRECTION_LEFT = 1
  const DIRECTION_RIGHT = -1
  const STATE_SHRINK = 0
  const STATE_GROW = 1
  const easingTime = 600
  const momentumLimitTime = 300
  const momentumLimitDistance = 15
  const directionLockThreshold = 5

  const transform = prefixStyle('transform')
  const transitionProperty = prefixStyle('transitionProperty')
  const transitionDuration = prefixStyle('transitionDuration')
  const transitionTimingFunction = prefixStyle('transitionTimingFunction')

  export default {
    name: COMPONENT_NAME,
    props: {
      item: {
        type: Object,
        default() {
          return {
            text: '测试',
            val: 1
          }
        }
      },
      btns: {
        type: Array,
        default() {
          return [
            {
              text: '不再关注',
              color: '#c8c7cd'
            },
            {
              text: '删除',
              color: '#ff3a32'
            }
          ]
        }
      },
      autoShrink: {
        type: Boolean,
        default: true
      }
    },
    created() {
      this.x = 0
      this.state = STATE_SHRINK
    },
    mounted() {
      this.scrollerStyle = this.$refs.swipeItem.style
      this.refresh()
      this.$on(EVENT_SCROLL, this._handleBtns)
    },
    methods: {
      _initCachedBtns() {
        this.cachedBtns = []
        const len = this.$refs.btns.length
        for (let i = 0; i < len; i++) {
          this.cachedBtns.push({
            width: getRect(this.$refs.btns[i]).width
          })
        }
      },
      _handleBtns(x) {
        const len = this.$refs.btns.length
        let delta = 0
        let totalWidth = -this.maxScrollX
        for (let i = 0; i < len; i++) {
          const btn = this.$refs.btns[i]
          let rate = (totalWidth - delta) / totalWidth
          let width
          let translate = rate * x - x
          if (x < this.maxScrollX) {
            width = this.cachedBtns[i].width + rate * (this.maxScrollX - x)
          } else {
            width = this.cachedBtns[i].width
          }
          delta += this.cachedBtns[i].width
          btn.style.width = `${width}px`
          btn.style[transform] = `translate(${translate}px)`
        }
      },
      _isInBtns(target) {
        let parent = target
        let flag = false
        while (parent && parent.className.indexOf('cube-swipe-item') < 0) {
          if (parent.className.indexOf('cube-swipe-btns') >= 0) {
            flag = true
            break
          }
          parent = parent.parentNode
        }
        return flag
      },
      _calculateBtnsWidth() {
        let width = 0
        const len = this.cachedBtns.length
        for (let i = 0; i < len; i++) {
          width += this.cachedBtns[i].width
        }
        this.maxScrollX = -width
      },
      _translate(x, useZ) {
        let translateZ = useZ ? ' translateZ(0)' : ''
        this.scrollerStyle[transform] = `translate(${x}px,0)${translateZ}`
        this.x = x
      },
      _transitionProperty(property = 'transform') {
        this.scrollerStyle[transitionProperty] = property
      },
      _transitionTimingFunction(easing) {
        this.scrollerStyle[transitionTimingFunction] = easing
      },
      _transitionTime(time = 0) {
        this.scrollerStyle[transitionDuration] = `${time}ms`
      },
      _startProbe() {
        cancelAnimationFrame(this.probeTimer)
        this.probeTimer = requestAnimationFrame(probe)

        let me = this

        function probe() {
          let pos = me._getComputedPositionX()
          me.$emit(EVENT_SCROLL, pos)
          if (!me.isInTransition) {
            return
          }
          me.probeTimer = requestAnimationFrame(probe)
        }
      },
      _getComputedPositionX() {
        let matrix = window.getComputedStyle(this.$refs.swipeItem, null)
        matrix = matrix[transform].split(')')[0].split(', ')
        let x = +(matrix[12] || matrix[4])
        return x
      },
      refresh() {
        this._initCachedBtns()
        this._calculateBtnsWidth()
        this.endTime = 0
      },
      shrink() {
        this.state = STATE_SHRINK
        this.scrollTo(0, easingTime, easeOutQuart)
      },
      grow() {
        this.state = STATE_GROW
        let easing = this.x < this.maxScrollX ? easeOutCubic : easeOutCubic
        this.scrollTo(this.maxScrollX, easingTime, easing)
      },
      scrollTo(x, time, easing) {
        this._transitionProperty()
        this._transitionTimingFunction(easing)
        this._transitionTime(time)
        this._translate(x, true)
        if (time) {
          this.isInTransition = true
          this._startProbe()
        }
      },
      genBtnStyl(btn) {
        return `background: ${btn.color}`
      },
      clickItem(item) {
        this.$emit(EVENT_ITEM_CLICK, item)
      },
      clickBtn(btn) {
        this.$emit(EVENT_BTN_CLICK, btn)
        if (this.autoShrink) {
          this.shrink()
        }
      },
      stop() {
        if (this.isInTransition) {
          this.isInTransition = false
          let x = this._getComputedPositionX()
          this._translate(x)
          if (this.state === STATE_SHRINK) {
            this._translate(0)
          }
        }
      },
      onTouchStart(e) {
        this.$emit(EVENT_ACTIVE)
        this.stop()
        this.moved = false
        this.movingDirectionX = 0
        const point = e.touches[0]
        this.pointX = point.pageX
        this.pointY = point.pageY
        this.distX = 0
        this.distY = 0
        this.startX = this.x
        this._transitionTime()
        this.startTime = getNow()
        if (this.state === STATE_GROW && !this._isInBtns(e.target)) {
          this.shrinkTimer = setTimeout(() => {
            this.shrink()
          }, 300)
        }
      },
      onTouchMove(e) {
        if (this.moved) {
          clearTimeout(this.shrinkTimer)
          e.stopPropagation()
        }
        if (this.isInTransition) {
          return
        }
        e.preventDefault()
        const point = e.touches[0]
        let deltaX = point.pageX - this.pointX
        let deltaY = point.pageY - this.pointY
        this.pointX = point.pageX
        this.pointY = point.pageY

        this.distX += deltaX
        this.distY += deltaY
        let absDistX = Math.abs(this.distX)
        let absDistY = Math.abs(this.distY)

        if (absDistX + directionLockThreshold <= absDistY) {
          return
        }

        let timestamp = getNow()

        if (timestamp - this.endTime > momentumLimitTime && absDistX < momentumLimitDistance) {
          return
        }

        this.movingDirectionX = deltaX > 0 ? DIRECTION_RIGHT : deltaX < 0 ? DIRECTION_LEFT : 0

        let newX = this.x + deltaX
        if (newX > 0) {
          newX = 0
        }
        if (newX < this.maxScrollX) {
          newX = this.x + deltaX / 3
        }
        if (!this.moved) {
          this.moved = true
        }

        this._translate(newX, true)

        if (timestamp - this.startTime > momentumLimitTime) {
          this.startTime = timestamp
          this.startX = this.x
        }

        this.$emit('scroll', this.x)
      },
      onTouchEnd() {
        if (!this.moved) {
          return
        }
        if (this.movingDirectionX === DIRECTION_RIGHT) {
          this.shrink()
          return
        }
        this.endTime = getNow()
        let duration = this.endTime - this.startTime
        let absDistX = Math.abs(this.x - this.startX)

        if (duration < momentumLimitTime && absDistX > momentumLimitDistance || this.x < this.maxScrollX / 2) {
          this.grow()
        } else {
          this.shrink()
        }
      },
      onTransitionEnd() {
        this.isInTransition = false
        this._transitionTime()
        this._translate(this.x)
      }
    },
    watch: {
      btns() {
        this.refresh()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-swipe-item
    position: relative

  .cube-swipe-item-inner
    height: 60px
    line-height: 60px
    font-size: $fontsize-large
    padding-left: 20px

  .cube-swipe-btn
    display: flex
    align-items: center
    position: absolute
    top: 0
    left: 100%
    height: 100%
    text-align: left
    font-size: $fontsize-medium
    .text
      flex: 1
      padding: 0 20px
      white-space: nowrap
      color: $color-white
</style>
