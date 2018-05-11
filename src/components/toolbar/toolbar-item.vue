<template>
  <li class="cube-toolbar-item">
    <cube-button :icon="action.icon" @click="clickHandler($event, action)">
      <cube-checkbox
        v-if="action.type == 'checkbox'"
        v-model="action.checked" :label="action.text"
        class="cube-toolbar-chb">
      </cube-checkbox>
      <span v-else v-html="action.text"></span>
    </cube-button>
  </li>
</template>

<script>
  import CubeButton from '../button/button'
  import CubeCheckbox from '../checkbox/checkbox'

  const COMPONENT_NAME = 'cube-toolbar-item'

  export default {
    name: COMPONENT_NAME,
    components: {
      CubeButton,
      CubeCheckbox
    },
    props: {
      action: {
        type: Object,
        default() {
          return {}
        }
      }
    },
    methods: {
      clickHandler($event, action) {
        action.clickHandler && action.clickHandler($event, action)
      }
    }
  }
</script>

<style lang="stylus">

</style>
