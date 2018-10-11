<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="demo">
        <cube-scroll
          ref="scroll1"
          class="scroll-list-outer-wrap">
          <ul class="cube-scroll-list">
            <li class="cube-scroll-item border-bottom-1px"
              v-for="(item, index) in items1"
              :key="index">{{item}}</li>
          </ul>
          <cube-scroll
            ref="scroll2"
            class="scroll-list-inner-wrap">
            <ul class="cube-scroll-list">
              <li class="cube-scroll-item border-bottom-1px"
                v-for="(item, index) in items2"
                :key="index">{{item}}</li>
            </ul>
          </cube-scroll>
          <ul class="cube-scroll-list">
            <li
              class="cube-scroll-item border-bottom-1px"
              v-for="(item, index) in items1"
              :key="index">{{item}}</li>
          </ul>
        </cube-scroll>
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
      items2: _data2
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
  height: 500px
.scroll-list-inner-wrap
  height: 300px
</style>
