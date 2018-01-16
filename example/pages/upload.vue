<template>
  <cube-page type="upload-view" title="Upload">
    <template slot="content">
      <p>Normal upload: </p>
      <div>
        <cube-upload ref="upload" :action="action" :simultaneous-uploads="1"></cube-upload>
        <cube-button @click="upload" v-if="!isUploading">Upload</cube-button>
        <cube-button @click="pause" v-else>Pause</cube-button>
        <cube-button @click="retry">Retry</cube-button>
      </div>
      <p>Compress&Base64 upload: </p>
      <div>
        <cube-upload
          ref="upload2"
          :action="action2"
          :simultaneous-uploads="1"
          :parse-file="parseFile"
          @file-submitted="fileSubmitted"></cube-upload>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import compress from '../modules/image'

  export default {
    data() {
      return {
        action: '//jsonplaceholder.typicode.com/photos/',
        action2: {
          target: '//jsonplaceholder.typicode.com/photos/',
          prop: 'base64Value'
        },
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
      },
      parseFile(file, next) {
        compress(file, {
          compress: {
            width: 1600,
            height: 1600,
            quality: 0.5
          }
        }, next)
      },
      fileSubmitted(file) {
        file.base64Value = file.file.base64
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
        p, div
          margin: 20px 0
        div
          .cube-btn, .cube-upload
            margin: 10px 0
</style>
