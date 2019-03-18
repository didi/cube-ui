<template>
  <cube-page type="upload-view-custom" title="Upload">
    <template slot="content">
      <p>Use slots: </p>
      <div class="upload-view-custom-main">
        <cube-upload
          ref="upload"
          v-model="files"
          :action="action"
          @files-added="addedHandler"
          @file-error="errHandler">
          <div class="clear-fix">
            <cube-upload-file v-for="(file, i) in files" :file="file" :key="i"></cube-upload-file>
            <cube-upload-btn :multiple="false">
              <div>
                <i>＋</i>
                <p>Please click to upload ID card</p>
              </div>
            </cube-upload-btn>
          </div>
        </cube-upload>
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
        files: []
      }
    },
    methods: {
      addedHandler() {
        const file = this.files[0]
        file && this.$refs.upload.removeFile(file)
      },
      errHandler(file) {
        // const msg = file.response.message
        this.$createToast({
          type: 'warn',
          txt: 'Upload fail',
          time: 1000
        }).show()
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .upload-view-custom
    .content
      >
        p, div
          margin: 20px 0
  .upload-view-custom-main
    background-color: #fff
    .cube-upload
      .cube-upload-file, .cube-upload-btn
        margin: 0
        height: 200px
      .cube-upload-file
        margin: 0
        + .cube-upload-btn
          margin-top: -200px
          opacity: 0
      .cube-upload-file-def
        width: 100%
        height: 100%
        .cubeic-wrong
          display: none
      .cube-upload-btn
        display: flex
        align-items: center
        justify-content: center
        > div
          text-align: center
        i
          display: inline-flex
          align-items: center
          justify-content: center
          width: 50px
          height: 50px
          margin-bottom: 20px
          font-size: 32px
          line-height: 1
          font-style: normal
          color: #fff
          background-color: #333
          border-radius: 50%
</style>
