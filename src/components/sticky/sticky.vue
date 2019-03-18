<template>
  <div class="cube-sticky">
    <slot></slot>
    <transition :name="fixedShowAni">
      <div
        ref="fixedEle"
        v-show="fixedShow"
        class="cube-sticky-fixed">
        <slot name="fixed" :current="currentKey" :index="currentIndex"></slot>
      </div>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getRect,
    prefixStyle
  } from '../../common/helpers/dom'

  const COMPONENT_NAME = 'cube-sticky'
  const EVENT_CHANGE = 'change'
  const EVENT_DIFF_CHANGE = 'diff-change'

  const transformStyleKey = prefixStyle('transform')

  export default {
    name: COMPONENT_NAME,
    provide() {
      return {
        sticky: this
      }
    },
    props: {
      pos: {
        type: Number,
        required: true
      },
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
      offset: {
        type: Number,
        default: 0
      }
    },
    data() {
      return {
        diff: 0,
        currentDiff: 0,
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
        newVal = Math.ceil(newVal)
        if (this._fixedTop === newVal) {
          return
        }
        this._fixedTop = newVal
        this.$refs.fixedEle.style[transformStyleKey] = `translate3d(0, ${newVal}px, 0)`
      },
      pos: 'computeCurrentSticky',
      currentIndex(newIndex, oldIndex) {
        const oldEle = this.eles[oldIndex]
        const newEle = this.eles[newIndex]

        const currentKey = (newEle && newEle.eleKey !== undefined) ? newEle.eleKey : newIndex === -1 ? '' : newIndex
        const fixedEle = this.$refs.fixedEle
        const fixedSlot = this.$slots.fixed || this.$scopedSlots.fixed

        this.$nextTick(() => {
          if (fixedSlot) {
            this.fixedEleHeight = fixedEle.offsetHeight
          } else {
            const oldChild = fixedEle.firstElementChild
            if (oldEle) {
              oldEle.$el.appendChild(oldChild)
              oldEle.refresh()
            }
            if (newEle) {
              fixedEle.appendChild(newEle.$el.firstElementChild)
              this.fixedEleHeight = fixedEle.offsetHeight
            } else {
              this.fixedEleHeight = 0
            }
          }
        })

        this.currentKey = currentKey
        this.$emit(EVENT_CHANGE, currentKey, newIndex)
      },
      currentDiff(newVal) {
        const height = this.heights[this.currentIndex] || 0
        this.$emit(EVENT_DIFF_CHANGE, newVal, height)
      }
    },
    created() {
      this.fixedEleHeight = 0
      this.eles = []
      this.positions = []
      this.heights = []
    },
    mounted() {
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
        this.$nextTick(() => {
          this.eles.forEach((ele) => {
            ele.refresh()
          })
          this._calculateHeight()
          this.computeCurrentSticky(this.pos)
        })
      },
      computeCurrentSticky(scrollY) {
        scrollY += this.offset

        const positions = this.positions
        const heights = this.heights
        const checkTop = this.checkTop

        const len = positions.length
        for (let i = len - 1; i >= 0; i--) {
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
            this.currentDiff = scrollY - top
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
        this.currentDiff = 0
      },
      _calculateHeight() {
        const eles = this.eles
        eles.forEach((ele, i) => {
          const { top, height } = getRect(ele.$el)
          this.positions[i] = top
          this.heights[i] = height
        })
        this.fixedEleHeight = this.$refs.fixedEle.offsetHeight
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
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
  .cube-sticky-fixed-fade-enter, .cube-sticky-fixed-fade-leave-active
    opacity: 0
  .cube-sticky-fixed-fade-enter-active, .cube-sticky-fixed-fade-leave-active
    transition: all .2s ease-in-out
</style>
