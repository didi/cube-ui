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
            <li v-for="group in data" ref="listGroup">
              <h2 class="cube-index-list-anchor">{{group.name}}</h2>
              <ul>
                <li
                  class="cube-index-list-item border-bottom-1px"
                  v-for="item in group.items"
                  @touchstart="addActiveCls"
                  @touchend="removeActiveCls"
                  @click="selectItem(item)">
                  {{item.name}}
                </li>
              </ul>
            </li>
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
    addClass,
    removeClass
  } from '../../common/helpers/dom'

  import CubeScroll from '../scroll/scroll.vue'

  const COMPONENT_NAME = 'cube-index-list'
  const EVENT_SELECT = 'select'
  const EVENT_TITLE_CLICK = 'title-click'
  const ACTIVE_CLS = 'cube-index-list-item_active'

  const TITLE_HEIGHT = 50
  const SUBTITLE_HEIGHT = 40
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
        default: []
      }
    },
    data() {
      return {
        currentIndex: 0,
        scrollY: -1,
        diff: -1,
        options: {
          probeType: 3
        }
      }
    },
    created() {
      this.listenScroll = true
      this.listHeight = []
      this.touch = {}
    },
    mounted() {
      setTimeout(() => {
        this._calculateHeight()
      }, 20)
    },
    computed: {
      fixedTitle() {
        if (this.scrollY > -TITLE_HEIGHT) {
          return ''
        }
        return this.data[this.currentIndex] ? this.data[this.currentIndex].name : ''
      },
      shortcutList() {
        return this.data.map((group) => {
          return group.name.substr(0, 1)
        })
      }
    },
    methods: {
      refresh() {
        this.$refs.indexList.refresh()
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
      addActiveCls(e) {
        addClass(e.currentTarget, ACTIVE_CLS)
      },
      removeActiveCls(e) {
        removeClass(e.currentTarget, ACTIVE_CLS)
      },
      _calculateHeight() {
        this.groupList = []
        if (this.$refs.listGroup) {
          this.groupList = this.$refs.listGroup
        } else {
          if (!this.$slots.default) {
            return
          }

          this.$slots.default.forEach(item => {
            this.groupList.push(item.elm)
          })
        }

        this.listHeight = []
        let height = TITLE_HEIGHT
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
        setTimeout(() => {
          this._calculateHeight()
        }, 20)
      },
      diff(newVal) {
        let fixedTop = (newVal > 0 && newVal < SUBTITLE_HEIGHT) ? newVal - SUBTITLE_HEIGHT : 0
        if (this.fixedTop === fixedTop) {
          return
        }
        this.fixedTop = fixedTop
        this.$refs.fixed.style.transform = `translate3d(0,${fixedTop}px,0)`
      },
      scrollY(newY) {
        const listHeight = this.listHeight
        // top
        if (newY > -TITLE_HEIGHT) {
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
