<template>
  <div class="cube-toolbar">
    <div class="cube-toolbar-position">
      <div class="cube-toolbar-mod">
        <ul class="cube-toolbar-ex" v-if="exSeries" v-show="isShowEx">
          <li v-for="(item,index) in exSeries" class="border-right-1px">
            <cube-button :icon="item.icon" @click="buttonClick($event, item, index, 1)">
              <cube-checkbox v-if="item.type == 'checkbox'" v-model="item.checked" :label="item.text" class="cube-toolbar-chb" ></cube-checkbox>
              <span v-else v-html="item.text"></span>
            </cube-button>
            <div class="cube-toolbar-down" v-if="index == exSeries.length - 1">
              <i class="dd-cubeic-pulldown cube-toolbar-pulldown"></i>
            </div>
          </li>
        </ul>

        <ul class="cube-toolbar-base">
          <li v-for="(item,index) in baseSeries" class="border-right-1px">
            <cube-button :icon="item.icon" @click="buttonClick($event, item, index)">
              <cube-checkbox v-if="item.type == 'checkbox'" v-model="item.checked" :label="item.text" class="cube-toolbar-chb"></cube-checkbox>
              <span v-else v-html="item.text"></span>
            </cube-button>
          </li>
          <li v-if="exSeries" class="border-right-1px more-button">
            <cube-button icon="dd-cubeic-more" @click="moreClick"></cube-button>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  import CubeButton from '../button/button'
  import CubeCheckbox from '../checkbox/checkbox'

  const COMPONENT_NAME = 'cube-toolbar'
  const EVENT_MORE_CLICK = 'more-click'

  export default {
    name: COMPONENT_NAME,
    props: {
      baseSeries: {
        type: Array
      },
      exSeries: {
        type: Array
      }
    },
    data() {
      return {
        isShowEx: false
      }
    },
    methods: {
      buttonClick(event, data, index, isEx) {
        this.isShowEx = false
        if (data.disabled) {
          event.preventDefault()
          event.stopPropagation()
          return
        }
        data.$index = index
        data.$isExBar = isEx || 0
        typeof data.handleClick === 'function' && data.handleClick(event, data)
      },
      moreClick() {
        this.isShowEx = !this.isShowEx
        this.$emit(EVENT_MORE_CLICK, this.isShowEx)
      }
    },
    components: {
      CubeButton,
      CubeCheckbox
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  $borderspacing = 10px
  $barBgColor = #fcfcfc
  $shadow-color = rgba(0, 0, 0, 0.08)
  $shadow-active-color = #e8e8e8
  $height = 44px

  .cube-toolbar
    position: fixed
    left: 0
    bottom: $borderspacing
    height: 0
    width: 100%
    z-index: 2

  .cube-toolbar-position
    position: absolute
    left: 0
    bottom: 0
    safe-area-mixin(bottom, bottom)
    width: 100%
    box-sizing: border-box
    display: flex
    padding: 0 $borderspacing

  .cube-toolbar-mod
    flex-fix()

  .cube-toolbar-ex,
  .cube-toolbar-base
    display: flex
    border-radius: 2px
    box-shadow: 0 1px 6px rgba(0, 0, 0, .24)
    background-color: $barBgColor
    overflow: hidden
    box-sizing: border-box
    height: $height
    li
      display: flex
      flex-fix()
      align-items: center
      background-color: $barBgColor
      &:last-child
        position: static
      &:last-child::after
        border: 0 none
      &:active
        background-color: $shadow-color
      &:active .cube-toolbar-down .cube-toolbar-pulldown
        color: $shadow-active-color
        &::after
          background-color: $shadow-active-color
      &:active::after
        border-color: transparent

      /* reset cube-checkbox style */
      .cube-toolbar-chb
        height: $height
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
        i
          margin-right: 0
          font-size: $fontsize-small
        &:active::after
          display: none

  .cube-toolbar-ex
    margin-bottom: $borderspacing

  .cube-toolbar-down
    position: absolute
    top: $height
    left: 0
    width: 100%
    height: $borderspacing

  .cube-toolbar-pulldown
    position: absolute
    right: 9%
    top: -100%
    color: $barBgColor
    font-size: $fontsize-large-xxx
    text-shadow: 0 1px 3px $shadow-color
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
      background-color: $barBgColor
</style>
