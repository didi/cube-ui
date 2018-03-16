<template>
  <div class="cube-form-group">
    <p class="cube-form-group-label" v-if="data.legend">{{data.legend}}</p>
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
          return {}
        }
      },
      model: {
        type: Object,
        default() {
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
    background-color: $color-white
</style>
