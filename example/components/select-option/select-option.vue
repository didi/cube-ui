<template>
  <div class="select-option">
    <span class="name">{{ name }}</span>
    <select v-model="selected">
      <option v-for="option in options"  :value="option">
        {{ option }}
      </option>
    </select>
  </div>
</template>

<script type="text/ecmascript-6">
  const COMPONENT_NAME = 'select-option'
  export default {
    name: COMPONENT_NAME,
    props: {
      name: {
        type: String
      },
      options: {
        type: Array
      },
      value: null
    },
    data() {
      return {
        selected: this.value
      }
    },
    watch: {
      selected: function (newValue) {
        this.$emit('update:value', newValue)
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "../../../src/common/stylus/variable.styl"

  .select-option
    display: flex
    height: 100%
    justify-content space-between
    align-items stretch
    padding-left: 15px
    .name
      flex: 0 1 auto
      width: 10rem
      display inline-flex
      align-items center
    select
      flex: 1 1 auto
      background-color: $color-white
      border: none
      border-left: 1px solid rgba(0, 0, 0, .1)
      box-shadow: 0 0 1px 1px #eee inset
      outline: none
      border-radius: 0
      &:focus
        border: 1px solid $color-orange

</style>
