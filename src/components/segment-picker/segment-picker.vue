<template>
  <div class="cube-segment-picker">
    <component
      v-for="(item, index) in data"
      :key="index"
      ref="pickers"
      :is="item.cascade ? 'cube-cascade-picker' : 'cube-picker'"
      :data="item.data"
      @select="select"
      @cancel="cancel">
    </component>
  </div>
</template>

<script>
const COMPONENT_NAME = 'cube-segment-picker'
const EVENT_SUB_SELECT = 'sub-select'
const EVENT_SUB_CANCEL = 'sub-cancel'
const EVENT_SELECT = 'select'
const EVENT_CANCEL = 'cancel'

export default {
  name: COMPONENT_NAME,
  props: {
    data: {
      type: Array,
      default() {
        return []
      }
    },
    cascade: {
      type: Boolean,
      default: false
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
  methods: {
    show() {
      this.$refs.pickers[this.current].show()
    },
    select(...args) {
      this.$emit(EVENT_SUB_SELECT, this.current, ...args)
      this.selectedVal[this.current] = args[0]
      this.selectedIndex[this.current] = args[1]
      this.selectedText[this.current] = args[2]

      if (this.current < this.data.length - 1) {
        this.current++
        this.$refs.pickers[this.current].show()
      } else {
        this.$emit(EVENT_SELECT, this.selectedVal, this.selectedIndex, this.selectedText)
        this.current = 0
      }
    },
    cancel(...args) {
      this.$emit(EVENT_SUB_CANCEL, this.current, ...args)
      if (this.current > 0) {
        this.current--
        this.$refs.pickers[this.current].show()
      } else {
        this.$emit(EVENT_CANCEL)
      }
    }
  }
}
</script>
