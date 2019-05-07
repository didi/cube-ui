<template>
  <transition name="cube-action-sheet-fade">
    <cube-popup
      type="action-sheet"
      :class="{'cube-action-sheet_picker': pickerStyle}"
      :center="false"
      :mask="true"
      :z-index="zIndex"
      v-show="isVisible"
      @mask-click="maskClick">
      <transition name="cube-action-sheet-move">
        <div class="cube-action-sheet-panel cube-safe-area-pb" v-show="isVisible" @click.stop>
          <h1 class="cube-action-sheet-title border-bottom-1px" v-show="pickerStyle || title">{{title}}</h1>
          <div class="cube-action-sheet-content">
            <ul class="cube-action-sheet-list">
              <li
                class="cube-action-sheet-item border-bottom-1px"
                v-for="(item, index) in data"
                :data-align="item.align"
                :class="[
                  item.class || '',
                  index === active ? 'cube-action-sheet-item_active': ''
                ]"
                v-html="item.content"
                @click="itemClick(item, index)"></li>
            </ul>
          </div>
          <div class="cube-action-sheet-space"></div>
          <div class="cube-action-sheet-cancel" @click="cancel"><span>{{_cancelTxt}}</span></div>
        </div>
      </transition>
    </cube-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import CubePopup from '../popup/popup.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import localeMixin from '../../common/mixins/locale'

  const COMPONENT_NAME = 'cube-action-sheet'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, localeMixin],
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      active: {
        type: Number,
        default: -1
      },
      title: {
        type: String,
        default: ''
      },
      pickerStyle: {
        type: Boolean,
        default: false
      },
      maskClosable: {
        type: Boolean,
        default: true
      },
      cancelTxt: {
        type: String,
        default: ''
      }
    },
    computed: {
      _cancelTxt () {
        return this.cancelTxt || this.$t('cancel')
      }
    },
    methods: {
      maskClick() {
        this.maskClosable && this.cancel()
      },
      cancel() {
        this.hide()
        this.$emit(EVENT_CANCEL)
      },
      itemClick(item, index) {
        this.hide()
        this.$emit(EVENT_SELECT, item, index)
      }
    },
    components: {
      CubePopup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/mixin.styl"
  @require "../../common/stylus/variable.styl"

  .cube-action-sheet-fade-enter, .cube-action-sheet-fade-leave-active
    opacity: 0
  .cube-action-sheet-fade-enter-active, .cube-action-sheet-fade-leave-active
    transition: all .3s ease-in-out

  .cube-action-sheet-panel
    text-align: center
    font-size: $fontsize-medium
    background-color: $action-sheet-bgc
  .cube-action-sheet-move-enter, .cube-action-sheet-move-leave-active
    transform: translate3d(0, 100%, 0)
  .cube-action-sheet-move-enter-active, .cube-action-sheet-move-leave-active
    transition: all .3s ease-in-out
  .cube-action-sheet-cancel
    background-color: $action-sheet-bgc
  .cube-action-sheet-cancel span, .cube-action-sheet-title, .cube-action-sheet-item
    display: block
    padding: 17px 16px
    margin: 0
    text-align: center
    overflow: hidden
    white-space: nowrap
    font-size: $fontsize-large
    font-weight: normal
    line-height: 1
    color: $action-sheet-color
    background-color: $action-sheet-bgc

  .cube-action-sheet-cancel span, .cube-action-sheet-item
    &:active
      background-color: $action-sheet-active-bgc

  .cube-action-sheet-title
    padding-top: 16px
    padding-bottom: 16px
    color: $action-sheet-title-color
    font-size: $fontsize-large-x

  .cube-action-sheet-content
    overflow: hidden
    background: $action-sheet-bgc

  .cube-action-sheet-list
    list-style: none

  .cube-action-sheet-item
    list-style: none
    user-select: none
    &:last-of-type
      border-none()
    &[data-align="left"]
      text-align: left
    &[data-align="right"]
      text-align: right

  .cube-action-sheet-space
    height: 6px
    background-color: $action-sheet-space-bgc

  .cube-action-sheet-item_active
    color: $action-sheet-active-color

  .cube-action-sheet_picker
    .cube-action-sheet-space
      height: 0
    .cube-action-sheet-title
      height: 1em
      padding-top: 21px
      padding-bottom: 21px

    .cube-action-sheet-cancel
      position: absolute
      top: 0
      background-color: transparent
      span
        padding-top: 23px
        padding-bottom: 23px
        color: $action-sheet-picker-cancel-color
        font-size: $fontsize-medium
        background-color: transparent
        &:active
          color: $action-sheet-picker-cancel-active-color
          background-color: transparent
</style>
