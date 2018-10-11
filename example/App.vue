<template>
  <div id="app">
    <header class="cube-bar">
      <h1>cube-ui</h1>
    </header>
    <section class="cube-content" ref="mfct">
      <cube-index-list :data="components" class="cube-list">
        <cube-index-list-group v-for="(group, index) in components" :key="index" :group="group">
          <cube-index-list-item v-for="(component, index) in group.items" :key="index" :item="component">
            <div class="cube-item border-bottom-1px" >
              <router-link class="link" :to="component.path">{{component.text}}<i
                class="cubeic-arrow"></i>
              </router-link>
            </div>
          </cube-index-list-item>
        </cube-index-list-group>
        <span class="custom-nav-item" slot="nav-item" slot-scope="props">{{props.item}}</span>
      </cube-index-list>
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
            'name': 'Basic 基础组件',
            'shortcut': 'Basic',
            'items': [
              {
                path: '/button',
                text: 'Button'
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
                path: '/toolbar',
                text: 'Toolbar'
              },
              {
                path: '/tab-bar',
                text: 'TabBar'
              }
            ]
          },
          {
            'name': 'Form 表单组件',
            'shortcut': 'Form',
            'items': [
              {
                path: '/checkbox',
                text: 'Checkbox'
              },
              {
                path: '/checkbox-group',
                text: 'CheckboxGroup'
              },
              {
                path: '/checker',
                text: 'Checker'
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
                path: '/textarea',
                text: 'Textarea'
              },
              {
                path: '/select',
                text: 'Select'
              },
              {
                path: '/switch',
                text: 'Switch'
              },
              {
                path: '/rate',
                text: 'Rate'
              },
              {
                path: '/validator',
                text: 'Validator'
              },
              {
                path: '/upload',
                text: 'Upload'
              },
              {
                path: '/form',
                text: 'Form'
              }
            ]
          },
          {
            'name': 'Popup 弹窗组件',
            'shortcut': 'Popup',
            'items': [
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
                path: '/cascade-picker',
                text: 'CascadePicker'
              },
              {
                path: '/segment-picker',
                text: 'SegmentPicker'
              },
              {
                path: '/date-picker',
                text: 'DatePicker'
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
                path: '/drawer',
                text: 'Drawer'
              },
              {
                path: '/image-preview',
                text: 'ImagePreview'
              }
            ]
          },
          {
            'name': 'Scroll 滚动组件',
            'shortcut': 'Scroll',
            'items': [
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
                path: '/swipe',
                text: 'Swipe'
              },
              {
                path: '/sticky',
                text: 'Sticky'
              },
              {
                path: '/scroll-nav-bar',
                text: 'ScrollNavBar'
              },
              {
                path: '/scroll-nav',
                text: 'ScrollNav'
              }
            ]
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
    background-color: #EDF0F4
    box-shadow: 0 2px 1px #e9eaea
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
      z-index: 1
      .cube-index-list-group
        .cube-index-list-anchor
          font-size: 16px
        ul
          .cube-item
            height: 40px
            line-height: 40px
            padding-left: 16px
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
      .cube-index-list-nav
          margin-right: 0px
          padding: 8px 5px
          border-radius: 3px 0 0 3px
          background: #f7f7f7
          box-shadow: 0 0 5px #80808047
          >ul
            >li
              padding: 8px 0
      .cube-index-list-fixed
        font-size: 16px
</style>
