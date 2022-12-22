<template>
  <div class="cube-checkbox-group" ref="group" :class="groupClass" :data-horz="horizontal" :data-col="colNum > 1">
    <slot>
      <cube-checkbox
        v-for="(option, index) in options"
        :key="index"
        :option="option"
        :shape="shape"
        :position="position"
        :hollow-style="hollowStyle"
      />
    </slot>
  </div>
</template>
<script>
  import CubeCheckbox from '../checkbox/checkbox.vue'
  import groupCol from '../../common/mixins/group-col'

  const COMPONENT_NAME = 'cube-checkbox-group'
  const EVENT_INPUT = 'update:modelValue'
  const EVENT_CHECKED = 'checked'
  const EVENT_CANCEL_CHECKED = 'cancel-checked'
  export default {
    name: COMPONENT_NAME,
    mixins: [groupCol],
    props: {
      modelValue: {
        type: Array
      },
      horizontal: {
        type: Boolean,
        default: false
      },
      shape: {
        type: String,
        default: 'circle'
      },
      position: {
        type: String,
        default: 'left'
      },
      hollowStyle: {
        type: Boolean,
        default: false
      },
      options: {
        type: Array,
        default() {
          return []
        }
      },
      min: {
        type: Number,
        default: 0
      },
      max: {
        type: Number,
        default: Infinity
      }
    },
    emits: [EVENT_INPUT],
    data () {
      return {
        _value: [],
        _checkboxGroup: true
      }
    },
    computed: {
      groupClass() {
        if (!this.horizontal || this.colNum > 1) {
          return 'border-top-1px border-bottom-1px'
        }
      }
    },
    watch: {
      modelValue: {
        immediate: true,
        handler (newValue, oldValue) {
          this._value = this.modelValue.concat()
        }
      }
    },
    components: {
      CubeCheckbox
    },
    methods: {
      checkEvent(event, value) {
        if (event === EVENT_CHECKED) {
          if (this._value.length < this.max && this._value.indexOf(value) === -1) {
            this._value.push(value)
          }
        }

        if (event === EVENT_CANCEL_CHECKED) {
          const index = this._value.indexOf(value)
          if (this._value.length > this.min && index > -1) {
            this._value.splice(index, 1)
          }
        }

        this.$emit(EVENT_INPUT, this._value)
      }
    }
  }
</script>
<style lang="stylus" >
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-checkbox-group
    z-index: 1
    overflow: hidden
    background-color: $checkbox-group-bgc
    .cube-checkbox
      &:last-child
        .cube-checkbox-wrap
          border-none()
  .cube-checkbox-group[data-horz="true"],
  .cube-checkbox-group[data-col="true"]
    display: flex
    padding-left: 0
    border-1px($checkbox-group-horizontal-bdc, 2px)
    border-radius: 2px
    .cube-checkbox
      flex-fix()
      text-align: center
      padding-left: 10px
      padding-right: 10px
      &::after
        border-color: $checkbox-group-horizontal-bdc
      &:last-child
        border-none()
      &[data-pos="right"]
        .cube-checkbox-ui
          position: relative
          margin-left: .42em
          order: 1
        .cube-checkbox-label
          margin-right: 0
    .cube-checkbox-wrap
      justify-content: center
.cube-checkbox-group[data-col="true"]
    flex-wrap: wrap
    .cube-checkbox
      flex: 0 0 auto
      box-sizing: border-box
      &::after
        display: none
</style>
