<template>
  <transition name="cube-picker-fade">
    <!-- Transition animation need use with v-show in the same template. -->
    <cube-popup
      type="picker"
      :mask="true"
      :center="false"
      :z-index="zIndex"
      v-show="isVisible"
      @touchmove.prevent
      @mask-click="maskClick">
      <transition name="cube-picker-move">
        <div class="cube-picker-panel cube-safe-area-pb" v-show="isVisible" @click.stop>
          <div class="cube-picker-choose border-bottom-1px">
            <span class="cube-picker-cancel" @click="cancel">{{cancelTxt}}</span>
            <span class="cube-picker-confirm" @click="confirm">{{confirmTxt}}</span>
            <div class="cube-picker-title-group">
              <h1 class="cube-picker-title" v-html="title"></h1>
              <h2 v-if="subtitle" class="cube-picker-subtitle" v-html="subtitle"></h2>
            </div>
          </div>

          <div class="cube-picker-content">
            <i class="border-bottom-1px"></i>
            <i class="border-top-1px"></i>
            <div class="cube-picker-wheel-wrapper" ref="wheelWrapper">
              <div v-for="(data,index) in pickerData" :key="index">
                <!-- The class name of the ul and li need be configured to BetterScroll. -->
                <ul class="cube-picker-wheel-scroll">
                  <li v-for="(item,index) in data" class="cube-picker-wheel-item" :key="index" v-html="item[textKey]">
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div class="cube-picker-footer"></div>
        </div>
      </transition>
    </cube-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'
  import CubePopup from '../popup/popup.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import basicPickerMixin from '../../common/mixins/basic-picker'
  import pickerMixin from '../../common/mixins/picker'

  const COMPONENT_NAME = 'cube-picker'

  const EVENT_SELECT = 'select'
  const EVENT_VALUE_CHANGE = 'value-change'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, basicPickerMixin, pickerMixin],
    props: {
      pending: {
        type: Boolean,
        default: false
      }
    },
    data() {
      return {
        pickerData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex
      }
    },
    created() {
      this.pickerSelectedVal = []
      if (!this.pickerSelectedIndex.length) {
        this.pickerSelectedIndex = []
        for (let i = 0; i < this.pickerData.length; i++) {
          this.pickerSelectedIndex[i] = 0
        }
      }
    },
    methods: {
      confirm() {
        if (!this._canConfirm()) {
          return
        }
        this.hide()

        let changed = false
        let pickerSelectedText = []

        const dataLength = this.pickerData.length
        const selectedValLength = this.pickerSelectedVal.length

        if (selectedValLength !== dataLength) {
          if (selectedValLength > dataLength) {
            this.pickerSelectedVal.splice(dataLength)
            this.pickerSelectedIndex.splice(dataLength)
          }
          changed = true
        }

        for (let i = 0; i < dataLength; i++) {
          let index = this.wheels[i].getSelectedIndex()
          this.pickerSelectedIndex[i] = index

          let value = null
          let text = ''
          if (this.pickerData[i].length) {
            value = this.pickerData[i][index][this.valueKey]
            text = this.pickerData[i][index][this.textKey]
          }
          if (this.pickerSelectedVal[i] !== value) {
            changed = true
          }
          this.pickerSelectedVal[i] = value
          pickerSelectedText[i] = text
        }

        this.$emit(EVENT_SELECT, this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText)

        if (changed) {
          this.$emit(EVENT_VALUE_CHANGE, this.pickerSelectedVal, this.pickerSelectedIndex, pickerSelectedText)
        }
      },
      maskClick() {
        this.maskClosable && this.cancel()
      },
      cancel() {
        this.hide()
        this.$emit(EVENT_CANCEL)
      },
      show() {
        if (this.isVisible) {
          return
        }

        this.isVisible = true
        if (!this.wheels || this.dirty) {
          this.$nextTick(() => {
            this.wheels = this.wheels || []
            let wheelWrapper = this.$refs.wheelWrapper
            for (let i = 0; i < this.pickerData.length; i++) {
              this._createWheel(wheelWrapper, i).enable()
              this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
            }
            this.dirty && this._destroyExtraWheels()
            this.dirty = false
          })
        } else {
          for (let i = 0; i < this.pickerData.length; i++) {
            this.wheels[i].enable()
            this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
          }
        }
      },
      hide() {
        if (!this.isVisible) {
          return
        }
        this.isVisible = false

        for (let i = 0; i < this.pickerData.length; i++) {
          this.wheels[i].disable()
        }
      },
      setData(data, selectedIndex) {
        this.pickerSelectedIndex = selectedIndex ? [...selectedIndex] : []
        this.pickerData = data.slice()
        if (this.isVisible) {
          this.$nextTick(() => {
            const wheelWrapper = this.$refs.wheelWrapper
            this.pickerData.forEach((item, i) => {
              this._createWheel(wheelWrapper, i)
              this.wheels[i].wheelTo(this.pickerSelectedIndex[i])
            })
            this._destroyExtraWheels()
          })
        } else {
          this.dirty = true
        }
      },
      refill(datas) {
        let ret = []
        if (!datas.length) {
          return ret
        }
        datas.forEach((data, index) => {
          ret[index] = this.refillColumn(index, data)
        })
        return ret
      },
      refillColumn(index, data) {
        const wheelWrapper = this.$refs.wheelWrapper
        let scroll = wheelWrapper.children[index].querySelector('.cube-picker-wheel-scroll')
        let wheel = this.wheels ? this.wheels[index] : false
        let dist = 0
        if (scroll && wheel) {
          let oldData = this.pickerData[index]
          this.$set(this.pickerData, index, data)
          let selectedIndex = wheel.getSelectedIndex()
          if (oldData.length) {
            let oldValue = oldData[selectedIndex][this.valueKey]
            for (let i = 0; i < data.length; i++) {
              if (data[i][this.valueKey] === oldValue) {
                dist = i
                break
              }
            }
          }
          this.pickerSelectedIndex[index] = dist
          this.$nextTick(() => {
            // recreate wheel so that the wrapperHeight will be correct.
            wheel = this._createWheel(wheelWrapper, index)
            wheel.wheelTo(dist)
          })
        }
        return dist
      },
      scrollTo(index, dist) {
        const wheel = this.wheels[index]
        this.pickerSelectedIndex[index] = dist
        wheel.wheelTo(dist)
      },
      refresh() {
        this.$nextTick(() => {
          this.wheels.forEach((wheel) => {
            wheel.refresh()
          })
        })
      },
      _createWheel(wheelWrapper, i) {
        if (!this.wheels[i]) {
          const wheel = this.wheels[i] = new BScroll(wheelWrapper.children[i], {
            wheel: {
              selectedIndex: this.pickerSelectedIndex[i] || 0,
              wheelWrapperClass: 'cube-picker-wheel-scroll',
              wheelItemClass: 'cube-picker-wheel-item'
            },
            swipeTime: this.swipeTime,
            observeDOM: false
          })
          wheel.on('scrollEnd', () => {
            this.$emit(EVENT_CHANGE, i, wheel.getSelectedIndex())
          })
        } else {
          this.wheels[i].refresh()
        }
        return this.wheels[i]
      },
      _destroyExtraWheels() {
        const dataLength = this.pickerData.length
        if (this.wheels.length > dataLength) {
          const extraWheels = this.wheels.splice(dataLength)
          extraWheels.forEach((wheel) => {
            wheel.destroy()
          })
        }
      },
      _canConfirm() {
        return !this.pending && this.wheels.every((wheel) => {
          return !wheel.isInTransition
        })
      }
    },
    beforeDestroy() {
      this.wheels && this.wheels.forEach((wheel) => {
        wheel.destroy()
      })
      this.wheels = null
    },
    components: {
      CubePopup
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/mixin.styl"
  @require "../../common/stylus/variable.styl"

  $picker-lr-padding = 16px

  .cube-picker-fade-enter, .cube-picker-fade-leave-active
    opacity: 0

  .cube-picker-fade-enter-active, .cube-picker-fade-leave-active
    transition: all .3s ease-in-out

  .cube-picker-panel
    height: 273px
    text-align: center
    font-size: $fontsize-medium
    background: $picker-bgc

  .cube-picker-move-enter, .cube-picker-move-leave-active
    transform: translate3d(0, 100%, 0)

  .cube-picker-move-enter-active, .cube-picker-move-leave-active
    transition: all .3s ease-in-out

  .cube-picker-choose
    position: relative
    height: 60px

  .cube-picker-confirm, .cube-picker-cancel
    font-size: $fontsize-medium
    line-height: 60px
    padding: 0 $picker-lr-padding
    box-sizing: content-box
    font-size: $fontsize-medium

  .cube-picker-confirm
    position: absolute
    right: 0
    color: $picker-confirm-btn-color
    &:active
      color: $picker-confirm-btn-active-color

  .cube-picker-cancel
    position: absolute
    left: 0
    color: $picker-cancel-btn-color
    &:active
      color: $picker-cancel-btn-active-color

  .cube-picker-title-group
    padding: 0 60px
    display: flex
    height: 100%
    flex-flow: column
    justify-content: center
    text-align: center

  .cube-picker-title
    font-size: $fontsize-large-x
    line-height: 25px
    font-weight: normal
    color: $picker-title-color

  .cube-picker-subtitle
    margin-top: 2px
    line-height: 16px
    font-size: $fontsize-small
    color: $picker-subtitle-color

  .cube-picker-content
    position: relative
    top: 20px
    > i
      position: absolute
      z-index: 10
      left: 0
      width: 100%
      height: 68px
      pointer-events: none
      transform: translateZ(0)
    > .border-bottom-1px
      top: 0
      background: linear-gradient(to top, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))
    > .border-top-1px
      bottom: 0
      background: linear-gradient(to bottom, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))

  .cube-picker-wheel-wrapper
    display: flex
    padding: 0 $picker-lr-padding
    > div
      flex-fix()
      height: 173px
      overflow: hidden
      font-size: $fontsize-large-xx

  .cube-picker-wheel-scroll
    padding: 0
    margin-top: 68px
    line-height: 36px
    list-style: none

  .cube-picker-wheel-item
    list-style: none
    height: 36px
    overflow: hidden
    white-space: nowrap
    color: $picker-item-color

  .cube-picker-footer
    height: 20px
</style>
