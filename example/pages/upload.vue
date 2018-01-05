<template>
  <cube-page type="upload-view" title="Upload">
    <template slot="content">
      <cube-upload ref="upload" :action="action" :simultaneous-uploads="1"></cube-upload>
      <cube-button @click="upload" v-if="!isUploading">Upload</cube-button>
      <cube-button @click="pause" v-else>Pause</cube-button>
      <cube-button @click="retry">Retry</cube-button>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        action: '//jsonplaceholder.typicode.com/photos/',
        isUploading: true
      }
    },
    methods: {
      upload() {
        this.isUploading = true
        this.$refs.upload.start()
      },
      pause() {
        this.isUploading = false
        this.$refs.upload.pause()
      },
      retry() {
        this.$refs.upload.retry()
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .upload-view
    .content
      >
        *
          margin: 20px 0
</style>
