<template>
  <div class="cube-form-group">
    <p class="cube-form-group-legend">{{data.legend}}</p>
    <div class="cube-form-group-content">
      <slot>
        <cube-form-item
          v-for="(field, index) in data.fields"
          :key="index"
          :field="field"
          :model="model"
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
      data: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      },
      model: {
        type: Object,
        default() {
          /* istanbul ignore next */
          return {}
        }
      }
    },
    created() {
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
    padding: 10px 15px
    font-size: $fontsize-medium
    color: $color-light-grey
    background-color: $color-background
    &:empty
      padding-top: 5px
      padding-bottom: 5px
</style>
