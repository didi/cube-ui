<template>
  <transition name="cube-picker-fade">
    <cube-popup
        type="picker"
        :mask="true"
        :center="true"
        :z-index="zIndex"
        v-show="isVisible"
        @touchmove.prevent
        @mask-click="cancel">
      <transition name="cube-picker-move">
        <div class="cube-picker-panel" v-show="isVisible" @click.stop>
          <div class="cube-picker-content">
            <i class="border-bottom-1px"></i>
            <i class="border-top-1px"></i>
            <div class="cube-picker-wheel-wrapper" ref="wheelWrapper">
              <div v-for="(data,index) in pickerData" :key=index>
                <ul class="wheel-scroll">
                  <li v-for="(item,index) in data" :key=index class="wheel-item">{{item[textKey]}}</li>
                </ul>
              </div>
            </div>
          </div>
          <div class="cube-picker-footer">
            <div class="cube-picker-button">
              <span data-action="cancel" @click="cancel">{{cancelTxt}}</span>
              <span data-action="confirm" @click="confirm">{{confirmTxt}}</span>
              <h1>{{title}}</h1>
            </div>
          </div>
        </div>
      </transition>
    </cube-popup>
  </transition>
</template>

<script type="text/ecmascript-6">
  import BScroll from 'better-scroll'

  const COMPONENT_NAME = 'cube-pc-picker'

  const EVENT_SELECT = 'select'
  const EVENT_VALUE_CHANGE = 'value-change'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  const DEFAULT_KEYS = {
    value: 'value',
    text: 'text'
  }

  export default {
    name: COMPONENT_NAME,
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      title: {
        type: String
      },
      cancelTxt: {
        type: String,
        default: '取消'
      },
      confirmTxt: {
        type: String,
        default: '确定'
      },
      selectedIndex: {
        type: Array,
        default() {
          return []
        }
      },
      alias: {
        type: Object,
        default() {
          return {}
        }
      },
      zIndex: {
        type: Number
      }
    },
    data() {
      return {
        pickerData: this.data.slice(),
        pickerSelectedIndex: this.selectedIndex,
        isVisible: false
      }
    },
    computed: {
      valueKey() {
        return this.alias.value || DEFAULT_KEYS.value
      },
      textKey() {
        return this.alias.text || DEFAULT_KEYS.text
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
        for (let i = 0; i < this.pickerData.length; i++) {
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
            this.wheels = []
            let wheelWrapper = this.$refs.wheelWrapper
            for (let i = 0; i < this.pickerData.length; i++) {
              this._createWheel(wheelWrapper, i)
            }
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
            this.wheels.forEach((wheel, i) => {
              wheel.refresh()
              wheel.wheelTo(this.pickerSelectedIndex[i])
            })
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
        let scroll = wheelWrapper.children[index].querySelector('.wheel-scroll')
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
              selectedIndex: this.pickerSelectedIndex[i] || 0
            },
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
      _canConfirm() {
        return this.wheels.every((wheel) => {
          return !wheel.isInTransition
        })
      }
    },
    watch: {
      data(newData) {
        this.setData(newData, this.selectedIndex)
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  flex-fix()
    flex: 1
    flex-basis: 0.000000001px
    width: 1%

  .cube-picker-fade-enter, .cube-picker-fade-leave-active
    opacity: 0

  .cube-picker-fade-enter-active, .cube-picker-fade-leave-active
    transition: all .3s ease-in-out

  .cube-picker-panel
    text-align: center
    font-size: 14px
    background: white

  .cube-picker-move-enter, .cube-picker-move-leave-active
    transform: translate3d(0, 273px, 0)

  .cube-picker-move-enter-active, .cube-picker-move-leave-active
    transition: all .3s ease-in-out

  .cube-picker-content
    position: relative
    > i
      position: absolute
      z-index: 10
      left: 0
      width: 100%
      height: 88px
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
    padding: 20px 10px
    justify-content: space-around
    min-width: 360px
    > div
      flex-fix()
      height: 173px
      overflow: hidden
      font-size: 20px

  .wheel-scroll
    padding: 0
    margin-top: 68px
    line-height: 36px
    list-style: none
    > li
      list-style: none
      height: 36px
      overflow: hidden
      white-space: nowrap
      color: black

  .cube-picker-footer
    border-top: 1px solid #eee
    font-size: 16px
    line-height: 40px
    .cube-picker-button
      display: flex
      span
        display: inline-block
        width: 50%
        &:first-child
          border-right: 1px solid #eee
</style>
