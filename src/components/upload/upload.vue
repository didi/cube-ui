<template>
  <div class="cube-upload">
    <slot>
      <div class="cube-upload-def clear-fix">
        <upload-file v-for="(file, i) in files" :file="file" :key="i"></upload-file>
        <upload-btn></upload-btn>
      </div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import UploadBtn from './btn.vue'
  import UploadFile from './file.vue'
  import ajaxUpload from './ajax'
  import { parseFiles, newFile, URL } from './util'

  const COMPONENT_NAME = 'cube-upload'
  const EVENT_ADDED = 'files-added'
  const EVENT_REMOVED = 'file-removed'
  const EVENT_SUCCESS = 'file-success'
  const EVENT_ERROR = 'file-error'

  export default {
    name: COMPONENT_NAME,
    props: {
      action: {
        type: [String, Object],
        default: ''
      },
      max: {
        type: Number,
        default: 10
      },
      auto: {
        type: Boolean,
        default: true
      },
      simultaneousUploads: {
        type: Number,
        default: 3
      },
      parseFile: {
        type: Function,
        default: function (file, cb) {
          cb(file)
        }
      }
    },
    data() {
      return {
        files: [],
        paused: !this.auto
      }
    },
    computed: {
      actionOptions() {
        const action = this.action
        if (typeof action === 'string') {
          return action ? {
            target: action
          } : null
        } else {
          return action
        }
      }
    },
    methods: {
      addFiles(files) {
        this.$emit(EVENT_ADDED, files)
        const filesLen = this.files.length
        const newFiles = []
        const maxLen = this.max - filesLen
        let i = 0
        while (newFiles.length < maxLen && files[i]) {
          if (files[i].ignore) {
            i++
            continue
          } else {
            newFiles.push(files[i++])
            this.files.push(newFile())
          }
        }
        parseFiles(newFiles, this.parseFile, (file, index) => {
          this.$set(this.files, filesLen + index, file)
        }, () => {
          // waiting ui
          setTimeout(() => {
            this.upload()
          }, 100)
        })
      },
      removeFile(file) {
        this.$emit(EVENT_REMOVED, file)
        file.xhr && file.xhr.abort()
        if (file.url) {
          URL.revokeObjectURL(file.url)
        }
        const index = this.files.indexOf(file)
        this.files.splice(index, 1)
        this.upload()
      },
      upload(retry) {
        const options = this.actionOptions
        if (this.paused || !options) {
          return
        }
        const len = this.files.length
        let uploadingCount = 0
        let i = 0
        while (i < len && uploadingCount < this.simultaneousUploads) {
          const file = this.files[i]
          const status = file.status
          if (status === 'ready' || (retry && status === 'error' && file.retryId !== this.retryId)) {
            ajaxUpload(file, options, (file) => {
              if (status === 'error') {
                file.retryId = this.retryId
              }
              this._done(file, retry)
            })
            uploadingCount++
          } else if (status === 'uploading') {
            uploadingCount++
          }
          i++
        }
      },
      start() {
        this.paused = false
        this.upload()
      },
      pause() {
        this.paused = true
        this.files.forEach((file) => {
          if (file.status === 'uploading') {
            file.xhr.abort()
            file.status = 'ready'
          }
        })
      },
      retry() {
        this.retryId = Date.now()
        this.paused = false
        this.upload(true)
      },
      _done(file, retry) {
        this.$emit(file.status === 'success' ? EVENT_SUCCESS : EVENT_ERROR, file)
        this.upload(retry)
      }
    },
    components: {
      UploadBtn,
      UploadFile
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  .cube-upload
    position: relative
  .cube-upload-def
    margin-right: -10px
    .cube-upload-btn, .cube-upload-file
      float: left
      margin: 0 10px 10px 0
</style>
