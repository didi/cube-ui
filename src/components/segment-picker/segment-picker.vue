<template>
  <div class="cube-segment-picker">
    <!-- Direct props will recover the property from v-bind Object expect 'is'. -->
    <!-- To ensure the priority of v-bind Object which is from user configure, we check the property of item in every prop. -->
    <component
      v-for="(item, index) in data"
      :key="index"
      :index="index"
      ref="pickers"
      :is="item.is || 'cube-picker'"
      :title="item.title || title"
      :subtitle="item.subtitle || subtitle"
      :confirm-txt="item.confirmTxt || (index === data.length - 1 ? _confirmTxt : _nextTxt)"
      :cancel-txt="item.cancelTxt || (index === 0 ? _cancelTxt : _prevTxt)"
      :swipe-time="item.swipeTime || swipeTime"
      :z-index="item.zIndex || zIndex"
      :mask-closable="maskClosable"
      v-bind="item"
      @select="_select"
      @cancel="_cancel"
      @change="_change">
    </component>
  </div>
</template>

<script>
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'
  import pickerMixin from '../../common/mixins/picker'
  import localeMixin from '../../common/mixins/locale'

  const COMPONENT_NAME = 'cube-segment-picker'
  const EVENT_NEXT = 'next'
  const EVENT_PREV = 'prev'
  const EVENT_SELECT = 'select'
  const EVENT_CANCEL = 'cancel'
  const EVENT_CHANGE = 'change'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin, pickerMixin, localeMixin],
    props: {
      data: {
        type: Array,
        default() {
          return []
        }
      },
      nextTxt: {
        type: String,
        default: ''
      },
      prevTxt: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        current: 0,
        selectedVal: [],
        selectedIndex: [],
        selectedText: []
      }
    },
    computed: {
      currentPicker () {
        // $refs is not reactive, should not use to computed or watch, so we import this.data to responsive.
        for (let i = 0; i < this.data.length; i++) {
          let item = this.$refs.pickers[i]
          if (item.$attrs.index === this.current) {
            return item
          }
        }
      },
      _nextTxt () {
        return this.nextTxt || this.$t('next')
      },
      _prevTxt () {
        return this.prevTxt || this.$t('prev')
      }
    },
    watch: {
      data() {
        this.current = 0
        this.selectedVal = []
        this.selectedIndex = []
        this.selectedText = []
      }
    },
    methods: {
      show() {
        if (this.isVisible || !this.data.length) {
          return
        }
        this.isVisible = true
        this.currentPicker.show()
      },
      hide() {
        if (!this.isVisible || !this.data.length) {
          return
        }
        this.isVisible = false
        this.currentPicker.hide()
      },
      _select(...args) {
        this.selectedVal[this.current] = args[0]
        this.selectedIndex[this.current] = args[1]
        this.selectedText[this.current] = args[2]

        if (this.current < this.data.length - 1) {
          this.$emit(EVENT_NEXT, this.current, ...args)
          this.current++
          this.currentPicker.show()
        } else {
          this.isVisible = false
          this.$emit(EVENT_SELECT, this.selectedVal, this.selectedIndex, this.selectedText)
          this.current = 0
        }
      },
      _cancel(...args) {
        if (this.current > 0) {
          this.$emit(EVENT_PREV, this.current, ...args)
          this.current--
          this.currentPicker.show()
        } else {
          this.isVisible = false
          this.$emit(EVENT_CANCEL)
        }
      },
      _change(...args) {
        this.$emit(EVENT_CHANGE, this.current, ...args)
      }
    }
  }
</script>
