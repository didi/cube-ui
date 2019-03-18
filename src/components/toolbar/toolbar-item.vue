<template>
  <li class="cube-toolbar-item border-right-1px">
    <cube-button :icon="action.icon">
      <cube-checkbox
        class="cube-toolbar-chb"
        v-model="action.checked"
        v-if="action.type == 'checkbox'"
        :label="action.text">
      </cube-checkbox>
      <span v-else v-html="action.text"></span>
    </cube-button>
    <i class="cube-toolbar-down"></i>
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
          /* istanbul ignore next */
          return {}
        }
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
      &::after
        display: none
    &:active
      background-color: $toolbar-active-bgc
    &:active
      &::after
        border-color: transparent

    /* reset cube-checkbox style */
    .cube-toolbar-chb
      height: 44px
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
      padding: 0 5px
      background-color: transparent
      border: 0 none
      color: $color-grey
      font-size: $fontsize-small
      &:active
        background-color: transparent
      &:active::after
        display: none
      i
        margin-right: 0
        &.cubeic-more
          color: $color-light-grey
          font-size: $fontsize-large
</style>
