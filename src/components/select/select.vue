<template>
  <div class="cube-select" :class="{ 'cube-select_active': active, 'cube-select_disabled': disabled }" @click="showPicker">
    <span v-if="selectedText" class="cube-select-text">{{ selectedText }}</span>
    <span v-else class="cube-select-placeholder">{{ placeholder }}</span>
    <i class="cubeic-select cube-select-icon"></i>
  </div>
</template>

<script>
  const COMPONENT_NAME = 'cube-select'

  const EVENT_CHANGE = 'change'
  const EVENT_INPUT = 'input' // only used for v-modal

  export default {
    name: COMPONENT_NAME,
    data() {
      return {
        active: false
      }
    },
    props: {
      options: {
        type: Array,
        default() {
          return []
        }
      },
      value: null,
      placeholder: {
        type: String,
        default: '请选择'
      },
      autoPop: {
        type: Boolean,
        default: false
      },
      disabled: {
        type: Boolean,
        default: false
      },
      title: {
        type: String,
        default: '请选择'
      },
      cancelTxt: {
        type: String,
        default: '取消'
      },
      confirmTxt: {
        type: String,
        default: '确定'
      }
    },
    computed: {
      adaptOptions() {
        return [this.options.map(item => {
          if (typeof item !== 'object') {
            item = {
              value: item,
              text: item
            }
          }
          return item
        })]
      },
      findIndex() {
        const findIndex = this.adaptOptions[0].findIndex((item) => {
          return item.value === this.value
        })
        this.picker && this.picker.setData(this.adaptOptions, findIndex !== -1 ? [findIndex] : [0])

        return findIndex
      },
      selectedText() {
        return this.findIndex !== -1 ? this.adaptOptions[0][this.findIndex].text : ''
      }
    },
    created() {
      this.picker = this.$createPicker({
        title: this.title,
        data: this.adaptOptions,
        selectedIndex: this.findIndex !== -1 ? [this.findIndex] : [0],
        cancelTxt: this.cancelTxt,
        confirmTxt: this.confirmTxt,
        onSelect: this.hided,
        onValueChange: this.changeHandle,
        onCancel: this.hided
      })
      this.autoPop && this.showPicker()
    },
    methods: {
      showPicker() {
        if (this.disabled) {
          return
        }
        this.picker.show()
        this.active = true
      },
      hided() {
        this.active = false
      },
      changeHandle(selectedVal, selectedIndex, selectedText) {
        if (selectedVal[0] !== this.value) {
          this.$emit(EVENT_INPUT, selectedVal[0])
          this.$emit(EVENT_CHANGE, selectedVal[0], selectedIndex[0], selectedText[0])
        }
      }
    }
  }
</script>
<style lang="stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-select
    position: relative
    box-sizing: border-box
    padding: 11px 28px 11px 10px
    border-radius: 2px
    font-size: $fontsize-large
    line-height: 1
    color: $select-color
    background-color: $select-bgc
    border-1px($select-border-color, 2px)
    > span
      display: inline-block
    &.cube-select_active
      border-color: $select-border-active-color
      .cube-select-icon
        color: $select-icon-active-color
    &.cube-select_disabled
      background-color: $select-disabled-bgc
      color: $select-disabled-color
      cursor: not-allowed
    .cube-select-placeholder
      color: $select-placeholder-color
    .cube-select-icon
      position: absolute
      right: 10px
      top: 50%
      font-size: $fontsize-large-xx
      color: $select-icon-color
      transform: translate(0, -50%)
</style>
