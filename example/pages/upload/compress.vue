<template>
  <cube-page type="upload-view-compress" title="Upload">
    <template slot="content">
      <p>Compress&Base64 upload: </p>
      <div>
        <cube-upload
          ref="upload"
          :action="action"
          :simultaneous-uploads="1"
          :process-file="processFile"
          @file-submitted="fileSubmitted" />
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  import compress from '../../modules/image'

  export default {
    data() {
      return {
        action: {
          target: '//jsonplaceholder.typicode.com/photos/',
          prop: 'base64Value',
          checkSuccess(res) {
            // success
            return true
          }
        }
      }
    },
    methods: {
      processFile(file, next) {
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
  .upload-view-compress
    .content
      >
        p, div
          margin: 20px 0
        div
          .cube-btn, .cube-upload
            margin: 10px 0
</style>
