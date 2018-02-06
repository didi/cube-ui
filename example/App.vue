<template>
  <div id="app">
    <header class="cube-bar">
      <h1>cube-ui</h1>
    </header>
    <section class="cube-content" ref="mfct">
      <ul class="cube-list">
        <li class="cube-item border-bottom-1px" v-for="(component, index) in components" :key="index">
          <router-link class="link" :to="component.path">{{component.text}}<i
              class="cubeic-arrow"></i>
          </router-link>
        </li>
      </ul>
    </section>
    <cube-view></cube-view>
  </div>
</template>

<script type="text/ecmascript-6">
  import CubeView from './components/cube-view.vue'

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
            path: '/radio',
            text: 'Radio'
          },
          {
            path: '/input',
            text: 'Input'
          },
          {
            path: '/switch',
            text: 'Switch'
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
            path: '/validator',
            text: 'Validator'
          },
          {
            path: '/rate',
            text: 'Rate'
          },
          {
            path: '/picker',
            text: 'Picker'
          },
          {
            path: '/cascade-picker',
            text: 'CascadePicker'
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
          },
          {
            path: '/upload',
            text: 'Upload'
          }
        ]
      }
    },
    components: {
      CubeView
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  html, body, #app
    height: 100%
  body
    background-color: #fff
    overflow: hidden
  .cube-bar
    z-index: 10
    position: absolute
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
    position: absolute
    top: 44px
    left: 0
    right: 0
    bottom: 0
    overflow: scroll
    -webkit-overflow-scrolling: touch
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
</style>
