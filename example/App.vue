<template>
  <div id="app">
    <header class="cube-bar">
      <h1>cube-ui</h1>
    </header>
    <section class="cube-content" ref="mfct">
      <ul class="cube-list">
        <li class="cube-item border-bottom-1px" v-for="component in components">
          <router-link class="link" :to="component.path">{{component.text}}<i
              class="cubeic-arrow"></i>
          </router-link>
        </li>
      </ul>
    </section>
    <transition name="move">
      <router-view class="cube-view"></router-view>
    </transition>
  </div>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        components: [
          {
            path: '/button',
            text: 'Button'
          },
          {
            path: '/checkbox',
            text: 'Checkbox'
          },
          {
            path: '/checkbox-group',
            text: 'CheckboxGroup'
          },
          {
            path: '/loading',
            text: 'Loading'
          },
          {
            path: '/tip',
            text: 'Tip'
          },
          {
            path: '/popup',
            text: 'Popup'
          },
          {
            path: '/toast',
            text: 'Toast'
          },
          {
            path: '/picker',
            text: 'Picker'
          },
          {
            path: '/time-picker',
            text: 'TimePicker'
          },
          {
            path: '/dialog',
            text: 'Dialog'
          },
          {
            path: '/action-sheet',
            text: 'ActionSheet'
          },
          {
            path: '/scroll',
            text: 'Scroll'
          },
          {
            path: '/slide',
            text: 'Slide'
          },
          {
            path: '/index-list',
            text: 'IndexList'
          }
        ]
      }
    },
    mounted() {
      this.$nextTick(() => {
        /* eslint-disable no-new */
        new BScroll(this.$refs.mfct, {
          click: true
        })
      })
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  body
    background-color: #fff
  .cube-bar
    position: fixed
    z-index: 10
    right: 0
    left: 0
    height: 44px
    line-height: 44px
    text-align: center
    background-color: #f7f7f7
    box-shadow: 0 1px 6px #ccc
    -webkit-backface-visibility: hidden
    backface-visibility: hidden
    h1
      font-size: 18px
      font-weight: 500

  .cube-content
    position: fixed
    width: 100%
    top: 44px
    left: 0
    bottom: 0
    overflow: scroll
    .cube-list
      padding-left: 10px
      .cube-item
        height: 40px
        line-height: 40px
        .link
          display: block
          position: relative
          width: 100%
          color: #333
          text-decoration: none
          outline: 0
          .cubeic-arrow
            position: absolute
            right: 0
            padding: 0 5px
            color: #ccc

  .cube-view
    transition: all 0.3s
    transform: translate3d(0, 0, 0)
    &.move-enter-active, &.move-leave-active
      transform: translate3d(100%, 0, 0)

</style>
