<template>
  <cube-page type="sticky-view-scroll" title="Sticky">
    <template slot="content">
      <div class="sticky-view-container">
        <cube-sticky :pos="scrollY">
          <cube-scroll
            :scroll-events="scrollEvents"
            @scroll="scrollHandler">
            <ul>
              <li>title</li>
            </ul>
            <cube-sticky-ele ele-key="11">
              <ul class="sticky-header">
                <li>111</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items">{{item}}</li>
            </ul>
            <cube-sticky-ele ele-key="22">
              <ul class="sticky-header">
                <li>222</li>
                <li>222</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items2">{{item}}</li>
            </ul>
            <cube-sticky-ele ele-key="33">
              <ul class="sticky-header">
                <li>333</li>
              </ul>
            </cube-sticky-ele>
            <ul>
              <li v-for="item in items3">{{item}}</li>
            </ul>
          </cube-scroll>
          <template slot="fixed" slot-scope="props">
            <ul class="sticky-header">
              <li>{{props.current}}</li>
            </ul>
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
        scrollEvents: ['scroll'],
        scrollY: 0,
        items: _data.concat(),
        items2: _data.concat(),
        items3: _data.concat()
      }
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
  .sticky-view-scroll
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
      .cube-sticky-fixed
        .sticky-header
          margin: 0 10px
</style>
