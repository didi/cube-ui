<template>
  <div class="cube-sticky">
    <slot></slot>
    <transition :name="fixedShowAni">
      <div
        ref="fixedEle"
        v-show="fixedShow"
        class="cube-sticky-fixed"
        :class="!checkTop && 'cube-sticky-fixed_shadow'">
          <slot name="fixed" :current="currentKey"></slot>
        </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getRect,
    prefixStyle
  } from '../../common/helpers/dom'

  import CubeScroll from '../scroll/scroll.vue'

  const COMPONENT_NAME = 'cube-sticky'
  const EVENT_CHANGE = 'change'

  const transformStyleKey = prefixStyle('transform')

  export default {
    name: COMPONENT_NAME,
    props: {
      checkTop: {
        type: Boolean,
        default: true
      },
      fixedShowAni: {
        type: String,
        default() {
          return this.checkTop ? '' : 'cube-sticky-fixed-fade'
        }
      },
      pos: {
        type: Number,
        default: 0
      },
      offset: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        positions: [],
        heights: [],
        diff: 0,
        currentIndex: -1,
        currentKey: ''
      }
    },
    computed: {
      fixedShow() {
        const targetEle = this.eles[this.currentIndex]
        return !!targetEle
      }
    },
    watch: {
      diff(newVal) {
        if (newVal >= 0) {
          newVal = 0
        }
        this.$refs.fixedEle.style[transformStyleKey] = `translate3d(0, ${newVal}px, 0)`
      },
      pos(newY) {
        this.computeCurrentSticky(newY)
      }
    },
    beforeCreate() {
      this.isSticky = true
    },
    created() {
      this.fixedEle = null
      this.fixedEleHeight = 0
      this.eles = []
    },
    mounted() {
      this.$watch('currentIndex', (newIndex, oldIndex) => {
        if (newIndex === oldIndex) {
          return
        }

        const oldEle = this.eles[oldIndex]
        const newEle = this.eles[newIndex]

        this.currentKey = (newEle && newEle.eleKey) || newIndex

        const fixedEle = this.$refs.fixedEle
        if (this.$slots.fixed || this.$scopedSlots.fixed) {
          this.fixedEleHeight = fixedEle.offsetHeight
          this.$emit(EVENT_CHANGE, this.currentKey)
          return
        }

        const oldChild = fixedEle.firstElementChild
        if (oldEle) {
          oldEle.$el.appendChild(oldChild)
        }
        if (newEle) {
          fixedEle.appendChild(newEle.$el.firstElementChild)
          this.fixedEleHeight = fixedEle.offsetHeight
        } else {
          this.fixedEleHeight = 0
        }
        this.$emit(EVENT_CHANGE, this.currentKey)
      })
      this.refresh()
    },
    methods: {
      addEle(ele) {
        this.eles.push(ele)
      },
      removeEle(ele) {
        const i = this.eles.indexOf(ele)
        this.eles.splice(i, 1)
        this.positions.splice(i, 1)
      },
      refresh() {
        this.eles.forEach((ele) => {
          ele.refresh()
        })
        this.$nextTick(() => {
          this._calculateHeight()
          this.computeCurrentSticky(this.pos)
        })
      },
      computeCurrentSticky(scrollY) {
        scrollY = Math.round(scrollY)
        scrollY += this.offset

        const positions = this.positions
        const heights = this.heights
        const checkTop = this.checkTop

        const len = positions.length
        for (let i = 0; i < len; i++) {
          const isLast = i === len - 1
          const nextTop = isLast ? scrollY : positions[i + 1]
          let top
          let bottom
          if (checkTop) {
            top = positions[i]
            bottom = top + heights[i]
          } else {
            top = positions[i] + heights[i]
            bottom = top
          }
          const max = Math.max(bottom, nextTop)

          if (scrollY >= top && scrollY <= max) {
            this.currentIndex = i
            const diff = nextTop - scrollY
            if (diff >= 0 && !isLast) {
              this.diff = diff - (this.fixedEleHeight || heights[i])
            } else {
              this.diff = 0
            }
            return
          }
        }
        this.currentIndex = -1
      },
      _calculateHeight() {
        const eles = this.eles
        eles.forEach((ele, i) => {
          const { top, height } = getRect(ele.$el)
          this.$set(this.positions, i, top)
          this.$set(this.heights, i, height)
        })
        this.fixedEleHeight = this.$refs.fixedEle.offsetHeight
      }
    },
    components: {
      CubeScroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-sticky
    position: relative
    height: 100%
    overflow: hidden
  .cube-sticky-fixed
    z-index: 1
    position: absolute
    top: 0
    left: 0
    right: 0
  .cube-sticky-fixed_shadow
    box-shadow: 0 2px 2px rgba(0, 0, 0, .2)

  .cube-sticky-fixed-fade-enter, .cube-sticky-fixed-fade-leave-active
    opacity: 0
  .cube-sticky-fixed-fade-enter-active, .cube-sticky-fixed-fade-leave-active
    transition: all .2s ease-in-out
</style>
