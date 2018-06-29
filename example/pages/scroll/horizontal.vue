<template>
  <cube-page type="scroll-view" title="Scroll" class="option-demo">
    <div slot="content" class="scroll-wrapper">
      <div class="demo">
        <div class="title">horizontal Demo</div>
        <div class="horizontal-scroll-list-wrap">
          <cube-scroll
            ref="scroll"
            :data="items"
            direction="horizontal">
            <ul class="list-wrapper">
              <li v-for="item in items" class="list-item">{{ item }}</li>
            </ul>
          </cube-scroll>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'

const _data = [
  '😀 😁 😂 🤣 😃 🙃 ',
  '👈🏻  scroll 👉🏻 ',
  '🙂 🤔 😄 🤨 😐 🙃 ',
  '👈🏻  scroll 👉🏻 ',
  '😔 😕 🙃 🤑 😲 ☹️ ',
  '👈🏻  scroll 👉🏻 ',
  '🐣 🐣 🐣 🐣 🐣 🐣 ',
  '👈🏻  scroll 👉🏻 ',
  '🐥 🐥 🐥 🐥 🐥 🐥 ',
  '👈🏻  scroll 👉🏻 ',
  '🤓 🤓 🤓 🤓 🤓 🤓 ',
  '👈🏻  scroll 👉🏻 ',
  '🦔 🦔 🦔 🦔 🦔 🦔 ',
  '👈🏻  scroll 👉🏻 ',
  '🙈 🙈 🙈 🙈 🙈 🙈 ',
  '👈🏻  scroll 👉🏻 ',
  '🚖 🚖 🚖 🚖 🚖 🚖 ',
  '👈🏻  scroll 👉🏻 ',
  '✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 ✌🏻 '
]

export default {
  data() {
    return {
      items: _data
    }
  },
  components: {
    CubePage
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">
.horizontal-scroll-list-wrap
  border: 1px solid rgba(0, 0, 0, 0.1)
  border-radius: 5px
  transform: rotate(0deg) // fix 子元素超出边框圆角部分不隐藏的问题
  position: relative
  .cube-scroll-content
    display: inline-block
    .list-wrapper
      padding: 0 10px
      line-height: 60px
      white-space: nowrap
      .list-item
        display: inline-block
</style>
