<template>
  <cube-sticky ref="sticky"
    :pos="scrollY"
    @change="indexChange"
    class="cube-index-list">
    <cube-scroll
      ref="scroll"
      :scroll-events="scrollEvents"
      :options="scrollOptions"
      :data="data"
      @scroll="scroll"
      @pulling-down="onPullingDown"
      @pulling-up="onPullingUp">
      <div class="cube-index-list-content" ref="content">
        <h1 class="cube-index-list-title" v-if="title" ref="title" @click="titleClick">
          {{ title }}
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
  </cube-sticky>
</template>

<script type="text/ecmascript-6">
  import {
    getData,
    getMatchedTarget
  } from '../../common/helpers/dom'
  import { inBrowser } from '../../common/helpers/env'

  import CubeSticky from '../sticky/sticky.vue'
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
        scrollY: -1
      }
    },
    computed: {
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
    watch: {
      data() {
        this.$refs.sticky.refresh()
      },
      title() {
        this.$refs.sticky.refresh()
      }
    },
    created() {
      this.touch = {}
    },
    methods: {
      /* TODO: remove refresh next minor version */
      refresh() {
        this.$refs.scroll.refresh()
      },
      selectItem(item) {
        this.$emit(EVENT_SELECT, item)
      },
      scroll(pos) {
        this.scrollY = -pos.y
      },
      indexChange(currentKey, currentIndex) {
        this.currentIndex = currentIndex >= 0 ? currentIndex : 0
      },
      titleClick() {
        this.$emit(EVENT_TITLE_CLICK, this.title)
      },
      forceUpdate() {
        this.$refs.scroll.forceUpdate()
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
      _scrollTo(index) {
        const maxScrollY = this.$refs.scroll.scroll.maxScrollY
        const positionY = Math.max(-this.$refs.sticky.positions[index], maxScrollY)
        this.$refs.scroll.scrollTo(0, positionY, this.speed)

        this.scrollY = -this.$refs.scroll.scroll.y
      }
    },
    components: {
      CubeSticky,
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
