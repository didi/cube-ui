<template>
  <ul class="cube-checker">
    <slot>
      <cube-checker-item
        v-for="(option, index) in options"
        :option="option"
        :key="index" />
    </slot>
  </ul>
</template>
<script>
  import CubeCheckerItem from './checker-item.vue'
  const COMPONENT_NAME = 'cube-checker'
  const EVENT_INPUT = 'update:modelValue'

  export default {
    name: COMPONENT_NAME,
    emits: [EVENT_INPUT],
    props: {
      modelValue: [String, Number, Array],
      options: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      },
      type: {
        type: String,
        default: 'checkbox'
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default(props) {
          return props.options.length
        }
      }
    },
    data () {
      return {
        currentValue: this.modelValue
      }
    },
    computed: {
      isRadio() {
        return this.type === 'radio'
      }
    },
    watch: {
      modelValue (newValue) {
        this.currentValue = newValue
      },
      currentValue (val) {
        this.$emit(EVENT_INPUT, val)
      }
    },
    methods: {
      check(option) {
        if (this.isRadio) {
          this.checkRadio(option)
        } else {
          this.checkCheckbox(option)
        }
      },
      checkRadio(option) {
        this.currentValue = option.value
      },
      checkCheckbox(option) {
        const value = option.value
        const currentValue = this.currentValue
        const valueLen = currentValue.length
        const min = this.min
        const max = this.max

        const index = currentValue.indexOf(value)

        if (index > -1) {
          (valueLen > min) && currentValue.splice(index, 1)
        } else {
          (valueLen < max) && currentValue.push(value)
        }
      }
    },
    components: {
      CubeCheckerItem
    }
  }
</script>
