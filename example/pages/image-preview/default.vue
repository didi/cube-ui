<template>
  <cube-page type="image-preview-def" title="ImagePreview">
    <div slot="content">
      <div class="view-wrapper">
        <cube-button @click="showImagePreview">Show ImagePreview</cube-button>
        <cube-image-preview ref="imagePreview" />
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'

  export default {
    data() {
      return {
      }
    },
    methods: {
      showImagePreview() {
        this.$refs.imagePreview.show()
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .view-wrapper
    position: fixed
    top: 54px
    left: 0
    bottom: 0
    width: 100%
</style>
