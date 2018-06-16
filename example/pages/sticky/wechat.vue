<template>
  <cube-page type="sticky-view-wechat" title="Sticky">
    <template slot="content">
      <div class="sticky-view-container">
        <cube-sticky
          :pos="scrollY"
          :check-top="checkTop"
          fixed-show-ani="sticky-fixed-show">
          <cube-scroll
            :scroll-events="scrollEvents"
            @scroll="scrollHandler">
            <img src="https://ss3.bdstatic.com/iPoZeXSm1A5BphGlnYG/skin/6.jpg">
            <cube-sticky-ele>
              <ul class="sticky-header">
                <li>111</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items" class="border-top-1px">{{item}}</li>
            </ul>
            <ul>
              <li v-for="item in items2" class="border-top-1px">{{item}}</li>
            </ul>
            <ul>
              <li v-for="item in items3" class="border-top-1px">{{item}}</li>
            </ul>
          </cube-scroll>
          <ul class="sticky-header" slot="fixed">
            <li>header</li>
          </ul>
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
        scrollEvents: ['scroll'],
        scrollY: 0,
        checkTop: true,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
    },
    mounted() {
    },
    methods: {
      scrollHandler({ y }) {
        this.scrollY = -y
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .sticky-view-wechat
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
        color: #fff
        visibility: hidden
        background-color: #666
      .cube-sticky
        .cube-scroll-wrapper
          background-color: #fff
        img
          vertical-align: top
          height: 250px
          transform: rotate(180deg)
      .cube-sticky-ele
        margin-top: -60px
        margin-bottom: 4px
      .cube-sticky-fixed
        .sticky-header
          visibility: visible
          background-color: rgba(0, 0, 0, .6)
      .sticky-fixed-show-enter, .sticky-fixed-show-leave-active
        opacity: 0
        transform: translate(0, -100%)
      .sticky-fixed-show-enter-active, .sticky-fixed-show-leave-active
        transition: all .5s ease-in-out
</style>
