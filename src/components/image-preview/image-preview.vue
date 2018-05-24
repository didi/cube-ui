<template>
  <cube-popup type="image-preview" v-show="isVisible">
  </cube-popup>
</template>
<script type="text/ecmascript-6">
  import CubePopup from '../popup/popup.vue'
  import visibilityMixin from '../../common/mixins/visibility'
  import popupMixin from '../../common/mixins/popup'

  const COMPONENT_NAME = 'cube-image-preview'

  export default {
    name: COMPONENT_NAME,
    mixins: [visibilityMixin, popupMixin],
    props: {
    },
    computed: {
    },
    methods: {
      show() {
        this.isVisible = true
      },
      hide() {
        this.isVisible = false
      }
    },
    components: {
      CubePopup
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-image-preview
    .cube-popup-content
      display: flex
      align-items: center
</style>
