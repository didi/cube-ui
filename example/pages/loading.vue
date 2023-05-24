<template>
  <cube-page type="loading-view" title="Loading">
    <template #content>
      <cube-loading></cube-loading>
      <cube-loading :size="28"></cube-loading>
      <cube-loading :size="40"></cube-loading>
    </template>
  </cube-page>
</template>

<script>
  import CubePage from '../components/cube-page.vue'

  export default {
    components: {
      CubePage
    }
  }
</script>
