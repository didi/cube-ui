<template>
  <div class="select-option">
    <span class="name">{{ name }}</span>
    <span class="select" @click="showPicker">{{ selected }}</span>
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
    },
    mounted() {
      const self = this
      this.picker = this.$createPicker({
        title: `Choose ${this.name}`,
        data: [this.options],
        cancelTxt: 'cancel',
        confirmTxt: 'confirm',
        onValueChange(selectedVal) {
          self.selected = selectedVal[0]
        }
      })
    },
    methods: {
      showPicker() {
        this.picker.show()
      }
    }
  }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"

  .select-option
    display: flex
    height: 100%
    justify-content space-between
    align-items stretch
    .name
      flex: 0 0 auto
      width: 120px
      display inline-flex
      padding-left: 10px
      align-items center
    .select
      flex: 1 1 auto
      display inline-flex
      align-items center
      padding-left: 10px
      border-left: 1px solid rgba(0, 0, 0, .1)
      box-shadow: 0 0 1px 1px #eee inset
      &:focus
        border: 1px solid $color-orange

</style>
