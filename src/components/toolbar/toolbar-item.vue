<template>
  <li class="cube-toolbar-item">
    <cube-button :icon="action.icon" @click="clickHandler($event, action)">
      <cube-checkbox
        v-if="action.type == 'checkbox'"
        v-model="action.checked" :label="action.text"
        class="cube-toolbar-chb">
      </cube-checkbox>
      <span v-else v-html="action.text"></span>
    </cube-button>
    <div v-if="hasDown" class="cube-toolbar-down">
      <i class="cubeic-pulldown cube-toolbar-pulldown"></i>
    </div>
  </li>
</template>

<script>
  import CubeButton from '../button/button'
  import CubeCheckbox from '../checkbox/checkbox'

  const COMPONENT_NAME = 'cube-toolbar-item'

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeButton,
      CubeCheckbox
    },
    props: {
      action: {
        type: Object,
        default() {
          return {}
        }
      },
      hasDown: {
        type: Boolean,
        default: false
      }
    },
    methods: {
      clickHandler($event, action) {
        action.clickHandler && action.clickHandler($event, action)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-toolbar-item
    display: flex
    flex-fix()
    align-items: center
    background-color: $toolbar-bgc
    &:last-child
      position: static
    &:last-child::after
      border: 0 none
    &:active
      background-color: $toolbar-active-bgc
    &:active .cube-toolbar-down .cube-toolbar-pulldown
      color: $toolbar-active-bgc
      &::after
        background-color: $toolbar-active-bgc
    &:active::after
      border-color: transparent

    /* reset cube-checkbox style */
    .cube-toolbar-chb
      height: $toolbar-height
      padding: 0
      font-size: $fontsize-small
      background-color: transparent
      .cube-checkbox-wrap
        padding: 0
        justify-content: center
        .cube-checkbox-ui
          position: relative
          left: auto
          margin-right: .42em

    /* reset cube-btn style */
    .cube-btn
      position: relative
      padding-left: 5px
      padding-right: 5px
      background-color: transparent
      border: 0 none
      color: $color-grey
      font-size: $fontsize-small
      &:active
        background-color: transparent
      &:active::after
        display: none

      .orange
        color: $color-orange
      i
        margin-right: 0
        font-size: $fontsize-small
        &.cubeic-more
          color: $color-light-grey
          font-size: $fontsize-large

  .cube-toolbar-down
    position: absolute
    top: $toolbar-height
    left: 0
    width: 100%
    height: $toolbar-spacing

  .cube-toolbar-pulldown
    position: absolute
    right: 9%
    top: -100%
    color: $toolbar-bgc
    font-size: $fontsize-large-xxx
    text-shadow: 0 1px 3px $toolbar-active-bgc
    transform: scale(1.3)
    &::after
      content: ""
      display: block
      position: absolute
      left: 30%
      top: 50%
      margin-top: -4px
      width: 40%
      height: 2px
      background-color: $toolbar-bgc


</style>
