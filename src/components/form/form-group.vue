<template>
  <div class="cube-form-group">
    <p class="cube-form-group-legend">{{legend}}</p>
    <div class="cube-form-group-content">
      <slot>
        <cube-form-item
          v-for="(field, index) in fields"
          :key="field.key || index"
          :field="field"
        />
      </slot>
    </div>
  </div>
</template>

<script>
  import CubeFormItem from './form-item.vue'

  const COMPONENT_NAME = 'cube-form-group'
  export default {
    name: COMPONENT_NAME,
    props: {
      legend: {
        type: String,
        default: ''
      },
      fields: {
        type: Array,
        default() {
          /* istanbul ignore next */
          return []
        }
      }
    },
    beforeCreate() {
      this.form = this.$parent.form
    },
    beforeDestroy() {
      this.form = null
    },
    components: {
      CubeFormItem
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"

  .cube-form-group
    overflow: hidden
  .cube-form-group-legend
    font-size: $fontsize-medium
    color: $form-group-legend-color
    background-color: $form-group-legend-bgc
</style>
