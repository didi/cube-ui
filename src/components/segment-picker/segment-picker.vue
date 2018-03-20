<template>
  <div class="cube-segment-picker">
    <component
      v-for="item in data"
      ref="pickers"
      :is="item.cascade ? 'cube-cascade-picker' : 'cube-picker'"
      :data="item.data">
    </component>
  </div>
</template>

<script>
const COMPONENT_NAME = 'cube-segment-picker'

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
  methods: {
    show() {
      this.$refs.pickers[0].show()
    }
  }
}
</script>
