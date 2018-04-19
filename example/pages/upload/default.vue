<template>
  <cube-page type="upload-view-def" title="Upload">
    <template slot="content">
      <p>Normal upload(File max size 1MB): </p>
      <div>
        <cube-upload ref="upload" :action="action" :simultaneous-uploads="1" @files-added="filesAdded" />
        <cube-button @click="upload" v-if="!isUploading">Upload</cube-button>
        <cube-button @click="pause" v-else>Pause</cube-button>
        <cube-button @click="retry">Retry</cube-button>
      </div>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'

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
      },
      filesAdded(files) {
        let hasIgnore = false
        const maxSize = 1 * 1024 * 1024 // 1M
        for (let k in files) {
          const file = files[k]
          if (file.size > maxSize) {
            file.ignore = true
            hasIgnore = true
          }
        }
        hasIgnore && this.$createToast({
          type: 'warn',
          time: 1000,
          txt: 'You selected >1M files'
        }).show()
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .upload-view-def
    .content
      >
        p, div
          margin: 20px 0
        div
          .cube-btn, .cube-upload
            margin: 10px 0
</style>
