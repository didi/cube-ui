<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="demo">
        <div class="title">Herizontal Demo</div>
        <div class="scroll-list-outer-wrap">
          <cube-scroll
            ref="scroll1"
            :scroll-events="['scroll', 'scroll-end']"
            @scroll-end="handleScrollEnd"
            :options="options1">
            <ul class="cube-scroll-list">
              <li
                class="cube-scroll-item border-bottom-1px"
                v-for="(item, index) in items1"
                :key="index">{{item}}</li>
            </ul>
            <div class="scroll-list-inner-wrap">
              <cube-scroll
                ref="scroll2"
                @scroll="handleScroll2"
                @scroll-end="handleScrollEnd"
                :scroll-events="['scroll', 'scroll-end']"
                :options="options2">
                <ul class="cube-scroll-list">
                  <li
                    class="cube-scroll-item border-bottom-1px"
                    v-for="(item, index) in items2"
                    :key="index">{{item}}</li>
                </ul>
              </cube-scroll>
            </div>
            <ul class="cube-scroll-list">
              <li
                class="cube-scroll-item border-bottom-1px"
                v-for="(item, index) in items1"
                :key="index">{{item}}</li>
            </ul>
          </cube-scroll>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'

const _data1 = [
  '😀 😁 😂 🤣 😃 🙃 ',
  '👆🏻 outer 👇🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👆🏻 outer 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ '
]

const _data2 = [
  '😀 😁 😂 🤣 😃 🙃 ',
  '👆🏻 inner 👇🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👆🏻 inner 👇🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '👆🏻 inner 👇🏻 ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👆🏻 inner 👇🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '👆🏻 inner 👇🏻 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👆🏻 inner 👇🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '👆🏻 inner 👇🏻 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👆🏻 inner 👇🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '👆🏻 inner 👇🏻 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]

export default {
  data() {
    return {
      items1: _data1,
      items2: _data2,
      options2: {
        bounce: false
      },
    }
  },
  methods: {
    handleScrollEnd(pos) {
      console.log('scroll End, bs enable')
      this.hasInit = false
      this.$refs.scroll2.enable()
      this.$refs.scroll1.enable()
    },
    handleScroll2(pos) {
      const y = pos.y
      const bscroll2 = this.$refs.scroll2.scroll
      const bscroll1 = this.$refs.scroll1.scroll
      if (!this.hasInit) {
        this.reached = bscroll2.movingDirectionY === -1 ? y >= 0 : y <= bscroll2.maxScrollY
        if (this.reached) {
          console.log('inner disable')
          bscroll2.disable()
          bscroll1.enable()
        } else {
          console.log('outer disable')
          bscroll1.disable()
        }
        this.hasInit = true
      }
    }
  },
  components: {
    CubePage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.scroll-list-outer-wrap
.scroll-list-inner-wrap
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  position: relative
.scroll-list-outer-wrap
  height: 600px
.scroll-list-inner-wrap
  height: 400px
</style>
