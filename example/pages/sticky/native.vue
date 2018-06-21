<template>
  <cube-page type="sticky-view-native" title="Sticky">
    <template slot="content">
      <div class="sticky-view-container">
        <cube-sticky :pos="scrollY" :check-top="checkTop">
          <div class="scroll-ele" @scroll="scrollHandler">
            <ul>
              <li>title</li>
            </ul>
            <cube-sticky-ele>
              <ul class="sticky-header">
                <li>111</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items">{{item}}</li>
            </ul>
            <cube-sticky-ele>
              <ul class="sticky-header">
                <li>222</li>
                <li>222</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items2">{{item}}</li>
            </ul>
            <cube-sticky-ele>
              <ul class="sticky-header">
                <li>333</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items3">{{item}}</li>
            </ul>
          </div>
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
        scrollY: 0,
        checkTop: false,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
    },
    methods: {
      scrollHandler(e) {
        this.scrollY = e.currentTarget.scrollTop
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sticky-view-native
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
      .scroll-ele
        height: 100%
        overflow: auto
        -webkit-overflow-scrolling: touch
        background-color: #fff
      .cube-sticky-fixed
        .sticky-header
          background-color: rgba(0, 0, 0, .6)
</style>
