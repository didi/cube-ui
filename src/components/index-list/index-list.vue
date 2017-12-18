<template>
  <div class="cube-index-list">
    <cube-scroll
      ref="indexList"
      :listen-scroll="listenScroll"
      :options="options"
      :data="data"
      @scroll="scroll">
      <div class="cube-index-list-content" ref="content">
        <h1 class="cube-index-list-title" v-if="title" ref="title" @click="titleClick">
          {{title}}
        </h1>
        <ul ref="groups">
          <slot>
            <cube-index-list-group v-for="(group, index) in data" :key="index" :group="group">
            </cube-index-list-group>
          </slot>
        </ul>
      </div>
    </cube-scroll>
    <div class="cube-index-list-nav" @touchstart="onShortcutTouchStart" @touchmove.stop.prevent="onShortcutTouchMove">
      <ul>
        <li v-for="(item, index) in shortcutList" :data-index="index" :class="{active: currentIndex === index}">{{item}}</li>
      </ul>
    </div>
    <div class="cube-index-list-fixed" ref="fixed" v-show="fixedTitle">
      {{fixedTitle}}
    </div>
  </div>
</template>

<script type="text/ecmascript-6">
  import {
    getData,
    getRect
  } from '../../common/helpers/dom'

  import CubeScroll from '../scroll/scroll.vue'

  const COMPONENT_NAME = 'cube-index-list'

  /* eslint-disable no-unused-vars */
  const EVENT_SELECT = 'select' // emit in index-list-item.vue
  const EVENT_TITLE_CLICK = 'title-click'

  const ACTIVE_CLS = 'cube-index-list-item_active'
  const ANCHOR_HEIGHT = window.innerHeight <= 480 ? 17 : 18

  export default {
    name: COMPONENT_NAME,
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
      }
    },
    data() {
      return {
        currentIndex: 0,
        scrollY: -1,
        diff: -1,
        options: {
          probeType: 3
        },
        titleHeight: null
      }
    },
    created() {
      this.listenScroll = true
      this.groupList = []
      this.listHeight = []
      this.touch = {}
      this.subTitleHeight = 0
    },
    mounted() {
      this.$nextTick(() => {
        this.titleHeight = this.title && this.$refs.title ? getRect(this.$refs.title).height : 0

        const subTitleEl = this.$el.querySelector('.cube-index-list-anchor')
        this.subTitleHeight = subTitleEl ? getRect(subTitleEl).height : 0
        this._calculateHeight()
      })
    },
    computed: {
      fixedTitle() {
        if (this.titleHeight === null || this.scrollY > -this.titleHeight) {
          return ''
        }
        return this.data[this.currentIndex] ? this.data[this.currentIndex].name : ''
      },
      shortcutList() {
        return this.data.map((group) => {
          return group.shortcut || group.name.substr(0, 1)
        })
      }
    },
    methods: {
      refresh() {
        this.$refs.indexList.refresh()
      },
      scroll(pos) {
        this.scrollY = pos.y
      },
      titleClick() {
        this.$emit(EVENT_TITLE_CLICK, this.title)
      },
      onShortcutTouchStart(e) {
        let anchorIndex = getData(e.target, 'index')
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
      _calculateHeight() {
        this.groupList = this.$el.querySelectorAll('.cube-index-list-group')

        if (!this.groupList) {
          return
        }

        this.listHeight = []
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
        this.$refs.indexList.scrollToElement(this.groupList[index], 0)
        this.scrollY = this.$refs.indexList.scroll.y
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
          this.titleHeight = newVal && this.$refs.title ? getRect(this.$refs.title).height : 0
          this._calculateHeight()
        })
      },
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < this.subTitleHeight) ? newVal - this.subTitleHeight : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
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
      CubeScroll
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-index-list
    position: relative
    width: 100%
    height: 100%
    .cube-scroll-wrapper
      position: absolute
      left: 0
      top: 0
      right: 0
      bottom: 0
      overflow: hidden
  .cube-index-list-content
    background: $index-list-bgc
    box-shadow: $index-list-box-shadow
    border-radius: 2px
  .cube-index-list-title
    padding: 14px 16px
    font-size: $fontsize-medium
    line-height: 1.6
    color: $index-list-title-color
  .cube-index-list-anchor, .cube-index-list-fixed
    padding: 16px 16px 10px 16px
    line-height: 1
    font-size: $fontsize-medium
    color: $index-list-anchor-color
    background: $index-list-anchor-bgc
  .cube-index-list-item
    position: relative
    height: 50px
    line-height: 50px
    padding: 0 16px
    font-size: $fontsize-medium
    color: $index-list-item-color
    &:last-child
      border-none()
  .cube-index-list-item_active
    background: $index-list-item-active-bgc
  .cube-index-list-fixed
    z-index: 1
    position: absolute
    top: 0
    left: 0
    width: 100%
    box-sizing: border-box
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
