<template>
  <div class="cube-index-list">
    <cube-scroll
      ref="scroll"
      :scroll-events="scrollEvents"
      :options="scrollOptions"
      :data="data"
      @scroll="scroll"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      <div class="cube-index-list-content" ref="content">
        <h1 class="cube-index-list-title" v-if="hasTitle" ref="title" @click="titleClick">
          <slot name="title">{{ title }}</slot>
        </h1>
        <ul>
          <slot>
            <cube-index-list-group v-for="(group, index) in data" :key="index" :group="group" @select="selectItem">
            </cube-index-list-group>
          </slot>
        </ul>
      </div>
      <template v-if="$slots.pullup || $scopedSlots.pullup" slot="pullup" slot-scope="props">
        <slot name="pullup"
          :pullUpLoad="props.pullUpLoad"
          :isPullUpLoad="props.isPullUpLoad">
        </slot>
      </template>
      <template v-if="$slots.pulldown || $scopedSlots.pulldown" slot="pulldown" slot-scope="props">
        <slot name="pulldown"
          :pullDownRefresh="props.pullDownRefresh"
          :pullDownStyle="props.pullDownStyle"
          :beforePullDown="props.beforePullDown"
          :isPullingDown="props.isPullingDown"
          :bubbleY="props.bubbleY">
        </slot>
      </template>
    </cube-scroll>
    <div v-if="navbar" class="cube-index-list-nav" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul class="cube-index-list-nav-list">
        <li
          v-for="(item, index) in shortcutList"
          :key="index"
          :data-index="index"
          class="cube-index-list-nav-item"
          :class="{active: currentIndex === index}"
        >
          <slot name="nav-item" :item="item">{{ item }}</slot>
        </li>
      </ul>
    </div>
    <div ref="fixed"
      v-show="fixedTitle"
      v-html="fixedTitle"
      class="cube-index-list-fixed cube-index-list-anchor">
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getData,
    getRect,
    prefixStyle,
    getMatchedTarget
  } from '../../common/helpers/dom'
  import { inBrowser } from '../../common/helpers/env'

  import CubeScroll from '../scroll/scroll.vue'
  import CubeIndexListGroup from './index-list-group.vue'
  import scrollMixin from '../../common/mixins/scroll'
  import deprecatedMixin from '../../common/mixins/deprecated'

  const COMPONENT_NAME = 'cube-index-list'
  const EVENT_SELECT = 'select'
  const EVENT_TITLE_CLICK = 'title-click'
  const EVENT_PULLING_UP = 'pulling-up'
  const EVENT_PULLING_DOWN = 'pulling-down'

  const ANCHOR_HEIGHT = inBrowser ? window.innerHeight <= 480 ? 17 : 18 : 18
  const transformStyleKey = prefixStyle('transform')

  export default {
    name: COMPONENT_NAME,
    mixins: [scrollMixin, deprecatedMixin],
    props: {
      title: {
        type: String,
        default: ''
      },
      data: {
        type: Array,
        default() {
          return []
        }
      },
      speed: {
        type: Number,
        default: 0
      },
      navbar: {
        type: Boolean,
        default: true
      },
      pullDownRefresh: {
        type: [Object, Boolean],
        default: undefined,
        deprecated: {
          replacedBy: 'options'
        }
      },
      pullUpLoad: {
        type: [Object, Boolean],
        default: undefined,
        deprecated: {
          replacedBy: 'options'
        }
      }
    },
    data() {
      return {
        scrollEvents: ['scroll'],
        currentIndex: 0,
        scrollY: -1,
        diff: -1,
        titleHeight: 0
      }
    },
    computed: {
      hasTitle() {
        return this.title || this.$slots.title
      },
      fixedTitle() {
        this.hasTitle && !this.titleHeight && this._caculateTitleHeight()

        return this.scrollY <= -this.titleHeight && this.data[this.currentIndex] ? this.data[this.currentIndex].name : ''
      },
      shortcutList() {
        return this.data.map((group) => {
          return group ? group.shortcut || group.name.substr(0, 1) : ''
        })
      },
      scrollOptions() {
        return Object.assign({}, {
          pullDownRefresh: this.pullDownRefresh,
          pullUpLoad: this.pullUpLoad
        }, this.options)
      }
    },
    created() {
      this.groupList = []
      this.listHeight = []
      this.touch = {}
      this.subTitleHeight = 0
    },
    mounted() {
      this.$nextTick(() => {
        this.refresh()
      })
    },
    methods: {
      /* TODO: remove refresh next minor version */
      refresh() {
        this._caculateTitleHeight()
        this._calculateHeight()
        this.$refs.scroll && this.$refs.scroll.refresh()
      },
      selectItem(item) {
        this.$emit(EVENT_SELECT, item)
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      titleClick() {
        this.$emit(EVENT_TITLE_CLICK, this.title)
      },
      forceUpdate(dirty = false, nomore = false) {
        this.$refs.scroll.forceUpdate(dirty, nomore)
        dirty && this.$nextTick(() => {
          this._calculateHeight()
        })
      },
      onShortcutTouchStart(e) {
        const target = getMatchedTarget(e, 'cube-index-list-nav-item')
        if (!target) return
        let anchorIndex = getData(target, 'index')
        let firstTouch = e.touches[0]
        this.touch.y1 = firstTouch.pageY
        this.touch.anchorIndex = anchorIndex

        this._scrollTo(anchorIndex)
      },
      onShortcutTouchMove(e) {
        let firstTouch = e.touches[0]
        this.touch.y2 = firstTouch.pageY
        let delta = (this.touch.y2 - this.touch.y1) / ANCHOR_HEIGHT | 0
        let anchorIndex = parseInt(this.touch.anchorIndex) + delta

        this._scrollTo(anchorIndex)
      },
      onPullingUp() {
        this.$emit(EVENT_PULLING_UP)
      },
      onPullingDown() {
        this.$emit(EVENT_PULLING_DOWN)
      },
      _caculateTitleHeight() {
        this.titleHeight = this.$refs.title ? getRect(this.$refs.title).height : 0
      },
      _calculateHeight() {
        this.groupList = this.$el.getElementsByClassName('cube-index-list-group')
        const subTitleEl = this.$el.getElementsByClassName('cube-index-list-anchor')[0]
        this.subTitleHeight = subTitleEl ? getRect(subTitleEl).height : 0
        this.listHeight = []

        if (!this.groupList) {
          return
        }

        let height = this.titleHeight
        this.listHeight.push(height)
        for (let i = 0; i < this.groupList.length; i++) {
          let item = this.groupList[i]
          height += item.clientHeight
          this.listHeight.push(height)
        }
      },
      _scrollTo(index) {
        if (index < 0) {
          index = 0
        } else if (index > this.listHeight.length - 2) {
          index = this.listHeight.length - 2
        }
        this.$refs.scroll.scrollToElement(this.groupList[index], this.speed)
        this.scrollY = this.$refs.scroll.scroll.y
      }
    },
    watch: {
      data() {
        this.$nextTick(() => {
          this._calculateHeight()
        })
      },
      title(newVal) {
        this.$nextTick(() => {
          this.refresh()
        })
      },
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < this.subTitleHeight) ? newVal - this.subTitleHeight : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style[transformStyleKey] = `translate3d(0,${fixedTop}px,0)`
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // top
        if (newY > -this.titleHeight) {
          this.currentIndex = 0
          return
        }
        // midd
        for (let i = 0; i < listHeight.length - 1; i++) {
          let height1 = listHeight[i]
          let height2 = listHeight[i + 1]
          if (-newY >= height1 && -newY < height2) {
            this.currentIndex = i
            this.diff = height2 + newY
            return
          }
        }
        // bottom
        this.currentIndex = listHeight.length - 2
      }
    },
    components: {
      CubeScroll,
      CubeIndexListGroup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-index-list
    position: relative
    height: 100%
    overflow: hidden
    .cube-scroll-wrapper
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0
      overflow: hidden
  .cube-index-list-content
    background: $index-list-bgc
    border-radius: 2px
  .cube-index-list-title
    padding: 14px 16px
    font-size: $fontsize-medium
    line-height: 1.6
    color: $index-list-title-color
  .cube-index-list-anchor
    padding: 16px 16px 10px 16px
    line-height: 1
    font-size: $fontsize-medium
    color: $index-list-anchor-color
    background: $index-list-anchor-bgc
  .cube-index-list-fixed
    z-index: 1
    position: absolute
    top: 0
    left: 0
    right: 0
  .cube-index-list-nav
    position: absolute
    z-index: 30
    right: 0
    top: 50%
    transform: translateY(-50%)
    font-family: Helvetica
    > ul
      padding: 0
      margin: 0
      > li
        padding: 6px 16px 0 16px
        line-height: 1
        text-align: center
        box-sizing(border-box)
        font-size: $fontsize-small
        color: $index-list-nav-color
        &.active
          color: $index-list-nav-active-color
        @media (max-height: 480px)
          &
            padding-top: 3px
</style>
