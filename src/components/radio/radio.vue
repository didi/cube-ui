<template>
  <div class="cube-radio" :class="_containerClass" :data-pos="position">
    <label class="cube-radio-wrap" :class="_wrapClass(option)">
      <input class="cube-radio-input" type="radio" :disabled="option.disabled" v-model="radioValue"   :value="option.value || option">
      <span class="cube-radio-ui cubeic-round-border">
        <i></i>
      </span>
      <slot>
        <span class="cube-radio-label">{{option.label || option}}</span>
      </slot>
    </label>
  </div>
</template>

<script  type="text/ecmascript-6">
const COMPONENT_NAME = 'cube-radio'
const EVENT_INPUT = 'input'

export default {
  name: COMPONENT_NAME,
  props: {
    value: String,
    option: {
      type: [String, Object],
      required: true
    },
    position: {
      type: String,
      default: 'left'
    },
    horizontal: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      radioValue: this.value
    }
  },
  watch: {
    value(newV) {
      this.radioValue = newV
    },
    radioValue(newV) {
      this.$emit(EVENT_INPUT, newV)
    }
  },
  computed: {
    _containerClass() {
      if (this.horizontal) {
        return 'border-right-1px'
      }
    }
  },
  methods: {
    _wrapClass(option) {
      return {
        'cube-radio_selected': this.radioValue === (option.value || option),
        'cube-radio_disabled': option.disabled,
        'border-bottom-1px': !this.horizontal
      }
    }
  }
}
</script>

