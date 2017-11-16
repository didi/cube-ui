<template>
  <cube-page type="loading-view" title="Loading">
    <div slot="content">
      <cube-loading></cube-loading>
      <cube-loading :size="28"></cube-loading>
      <cube-loading :size="40"></cube-loading>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    components: {
      CubePage
    }
  }
</script>
