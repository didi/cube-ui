<template>
  <cube-page type="sticky-view-complex" title="Sticky">
    <template slot="content">
      <div class="sticky-view-container">
        <cube-sticky ref="sticky" :pos="scrollY" :offset="offsetTop" @diff-change="diffChange">
          <cube-scroll
            ref="scroll"
            :data="scrollData"
            :scroll-events="scrollEvents"
            :options="options"
            @scroll="scrollHandler"
            @scroll-end="scrollEndHandler"
            @pulling-up="onPullingUp"
          >
            <ul>
              <li>title</li>
              <li>title</li>
              <li>title</li>
              <li>title</li>
              <li>title</li>
            </ul>
            <cube-sticky-ele>
              <cube-tab-bar
                v-model="currentTab"
                show-slider
                :data="tabs"
                :use-transition="false"
              />
            </cube-sticky-ele>
            <ul v-if="currentTab === 1">
              <li v-for="item in items1">{{item}}</li>
            </ul>
            <ul v-else-if="currentTab === 2">
              <li v-for="item in items2">{{item}}</li>
            </ul>
            <ul v-else>
              <li v-for="item in items3">{{item}}</li>
            </ul>
          </cube-scroll>
          <template slot="fixed" slot-scope="props">
            <ul class="sticky-header">
              <li ref="stickyHeader">111</li>
            </ul>
            <cube-tab-bar
              v-if="props.index >= 0"
              v-model="currentTab"
              show-slider
              :data="tabs"
              :use-transition="false"
            />
          </template>
        </cube-sticky>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'

const _data = [
  '😀 😁 😂 🤣 😃 😄 ',
  '🙂 🤗 🤩 🤔 🤨 😐 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 scroll up/down 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]
export default {
  data() {
    return {
      offsetTop: 56,
      scrollY: 0,
      scrollEvents: ['scroll', 'scroll-end'],
      items1: _data.slice(),
      items2: [],
      items3: [],
      tabPullUpMap: {
        1: {
          enable: true,
          pos: 0
        },
        2: {
          enable: true,
          pos: 0
        },
        3: {
          enable: true,
          pos: 0
        }
      },
      tabOpacity: 0,
      currentTab: 1,
      tabs: [
        {
          label: 'tab1',
          value: 1
        },
        {
          label: 'tab2',
          value: 2
        },
        {
          label: 'tab3',
          value: 3
        }
      ]
    }
  },
  computed: {
    options() {
      return {
        pullUpLoad: this.tabPullUpMap[this.currentTab].enable,
        observeDOM: false
      }
    },
    scrollData() {
      return [this.items1, this.items2, this.items3]
    },
    stickyPos() {
      return this.$refs.sticky.positions[0] - this.offsetTop
    }
  },
  watch: {
    currentTab(newTab, oldTab) {
      // 第一件事 记录位置
      this.tabPullUpMap[oldTab].pos = this.scrollY
      // 第二件事 重新回到之前的位置
      // 计算这个位置需要换算下
      // 因为只有一个 sticky-ele
      const stickyPos = this.stickyPos
      const stickyPos2 = stickyPos + this.offsetTop
      const memoryPos = this.tabPullUpMap[newTab].pos
      let keyPos
      // 如果当前位置比 stickyPos 还要大
      if (this.scrollY >= stickyPos2) {
        // 说明此时是完全 sticky 状态 opacity = 1
        keyPos = Math.max(memoryPos, stickyPos)
        // 修复半透明问题
        this.tabOpacity = 1
      } else if (this.scrollY >= stickyPos) {
        // 说明此时是 sticky 状态 opacity 半透明
        keyPos = Math.max(memoryPos, stickyPos)
      } else {
        this.tabOpacity = 0
        // 说明此时是 未 sticky 状态
        keyPos = this.scrollY
      }
      this.tabChangeing = true
      // 必须触发 scroll 事件 所以第三个参数的时间 不是 0
      this.$refs.scroll.scrollTo(0, -keyPos, 1)
      this.$nextTick(() => {
        if (this.tabPullUpMap[newTab].enable && !this[`items${newTab}`].length) {
          // 数据还是空的 主动触发
          // 其他场景 不主动触发
          // 等待 UI 高度变化 让其能够达到触发 pullup 条件
          // hack maxScrollY 此时不能 refresh 因为需要 hack sticky 状态
          // 不让其 reset position
          this.$refs.scroll.scroll.movingDirectionY = 1
          this.$refs.scroll.scroll.maxScrollY = -keyPos
        } else {
          // 当不能加载更多的时候 切换就不会更新数据了 所以这里手工刷新
          this.$refs.scroll.refresh()
        }
      })
    }
  },
  methods: {
    onPullingUp() {
      // 这里分别模拟不同 tab 下的请求
      const currentTab = this.currentTab
      setTimeout(() => {
        if (currentTab !== this.currentTab) {
          // 已经在其他tab了
          this.$refs.scroll.forceUpdate()
          return
        }
        const targetItems = `items${currentTab}`
        const items = this[targetItems] = this[targetItems].concat(_data)
        if (items.length >= currentTab * 20) {
          // 某个 tab 没有更多了
          this.tabPullUpMap[currentTab].enable = false
        }
      }, 300)
    },
    scrollHandler({ y }) {
      this.scrollY = -y
    },
    scrollEndHandler () {
      this.tabChangeing && this.$nextTick(() => {
        this.tabChangeing = false
      })
    },
    diffChange(diff, height) {
      let opacity = 0
      if (height) {
        opacity = diff * 3 / height
      }
      if (this.tabChangeing) {
        opacity = Math.max(opacity, this.tabOpacity)
      }
      opacity = Math.min(opacity, 1)
      this.tabOpacity = opacity
      this.$refs.stickyHeader.style.opacity = opacity
    }
  },
  components: {
    CubePage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sticky-view-complex
    .content
      >
        *
          margin: 10px 0
    .sticky-view-container
      position: absolute
      top: 45px
      bottom: 0
      left: 0
      width: 100%
      li
        padding: 20px 10px
      .sticky-header
        background-color: #666
      .cube-sticky
        padding: 0 10px
        .cube-scroll-wrapper
          background-color: #fff
      .cube-sticky-ele-on
        visibility: hidden
      .cube-sticky-fixed
        .sticky-header
          margin: 0 10px
          background-color: transparent
          li
            background-color: #666
        .cube-tab-bar
          margin: 0 10px
          background-color: #fff
          box-shadow: 0 3px 3px rgba(0, 0, 0, .1)
</style>
