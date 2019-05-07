<template>
  <div class="cube-select" :class="{ 'cube-select_active': active, 'cube-select_disabled': disabled }" @click="showPicker">
    <span v-if="selectedText" class="cube-select-text">{{ selectedText }}</span>
    <span v-else class="cube-select-placeholder">{{ _placeholder }}</span>
    <i class="cube-select-icon"></i>
  </div>
</template>

<script>
  import { findIndex } from '../../common/helpers/util'
  import localeMixin from '../../common/mixins/locale'

  const COMPONENT_NAME = 'cube-select'

  const EVENT_CHANGE = 'change'
  const EVENT_INPUT = 'input' // only used for v-model
  const EVENT_PICKER_SHOW = 'picker-show'
  const EVENT_PICKER_HIDE = 'picker-hide'

  export default {
    name: COMPONENT_NAME,
    mixins: [ localeMixin ],
    data() {
      return {
        active: false
      }
    },
    props: {
      options: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      },
      value: null,
      placeholder: {
        type: String,
        default: ''
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
        default: ''
      },
      cancelTxt: {
        type: String,
        default: ''
      },
      confirmTxt: {
        type: String,
        default: ''
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
      valueIndex() {
        const val = this.value
        const index = findIndex(this.adaptOptions[0], (item) => {
          return item.value === val
        })
        this.picker && this.picker.setData(this.adaptOptions, index !== -1 ? [index] : [0])

        return index
      },
      selectedIndex() {
        return this.valueIndex !== -1 ? [this.valueIndex] : [0]
      },
      selectedText() {
        return this.valueIndex !== -1 ? this.adaptOptions[0][this.valueIndex].text : ''
      },
      _placeholder () {
        return this.placeholder || this.$t('selectText')
      },
      _title () {
        return this.title || this.$t('selectText')
      },
      _cancelTxt () {
        return this.cancelTxt || this.$t('cancel')
      },
      _confirmTxt () {
        return this.confirmTxt || this.$t('ok')
      }
    },
    created() {
      this.picker = this.$createPicker({
        $props: {
          title: '_title',
          data: 'adaptOptions',
          selectedIndex: 'selectedIndex',
          cancelTxt: '_cancelTxt',
          confirmTxt: '_confirmTxt'
        },
        $events: {
          select: 'selectHandler',
          cancel: this.hided
        }
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
        this.$emit(EVENT_PICKER_SHOW)
      },
      hided() {
        this.active = false
        this.$emit(EVENT_PICKER_HIDE)
      },
      selectHandler(selectedVal, selectedIndex, selectedText) {
        this.hided()
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
    padding: 10px 20px 10px 10px
    border-radius: 2px
    font-size: $fontsize-medium
    line-height: 1.429
    color: $select-color
    background-color: $select-bgc
    border-1px($select-border-color, 2px)
    > span
      display: inline-block
  .cube-select_active
    border-1px($select-border-active-color)
    .cube-select-icon
      transform: translate(0, -50%) rotate(180deg)
  .cube-select_disabled
    color: $select-disabled-color
    background-color: $select-disabled-bgc
    cursor: not-allowed
  .cube-select-placeholder
    color: $select-placeholder-color
  .cube-select-icon
    position: absolute
    right: 8px
    top: 50%
    transform: translate(0, -50%)
    border-style: solid
    border-color: $select-icon-color transparent transparent transparent
    border-width: 4px 4px 0 4px
    transition: transform .3s ease-in-out
</style>
