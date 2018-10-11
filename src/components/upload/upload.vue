<template>
  <div class="cube-upload">
    <slot>
      <div class="cube-upload-def clear-fix">
        <upload-file v-for="(file, i) in files" :file="file" :key="i" @click="fileClick"></upload-file>
        <upload-btn :multiple="multiple" :accept="accept" v-show="isShowBtn"></upload-btn>
      </div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import UploadBtn from './btn.vue'
  import UploadFile from './file.vue'
  import ajaxUpload from './ajax'
  import btnMixin from './btn-mixin'
  import {
    processFiles,
    newFile,
    URL,
    STATUS_READY,
    STATUS_UPLOADING,
    STATUS_ERROR,
    STATUS_SUCCESS
  } from './util'

  const COMPONENT_NAME = 'cube-upload'
  const EVENT_INPUT = 'input'
  const EVENT_ADDED = 'files-added'
  const EVENT_SUBMITTED = 'file-submitted'
  const EVENT_REMOVED = 'file-removed'
  const EVENT_SUCCESS = 'file-success'
  const EVENT_ERROR = 'file-error'
  const EVENT_CLICK = 'file-click'

  export default {
    name: COMPONENT_NAME,
    mixins: [btnMixin],
    props: {
      value: {
        type: Array,
        default() {
          return []
        }
      },
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
        default: 1
      },
      processFile: {
        type: Function,
        default: function (file, cb) {
          cb(file)
        }
      }
    },
    data() {
      return {
        files: this.value,
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
      },
      isShowBtn() {
        return this.files.length < this.max
      }
    },
    watch: {
      value(newVal) {
        this.files = newVal
      },
      files(newFiles) {
        this.$emit(EVENT_INPUT, newFiles)
      }
    },
    methods: {
      addFiles(files) {
        this.$emit(EVENT_ADDED, files)
        const filesLen = this.files.length
        const newFiles = []
        const maxLen = this.max - filesLen
        let i = 0
        let file = files[i]
        while (newFiles.length < maxLen && file) {
          if (!file.ignore) {
            newFiles.push(file)
            this.files.push(newFile())
          }
          file = files[++i]
        }
        processFiles(newFiles, this.processFile, (file, index) => {
          this.$set(this.files, filesLen + index, file)
          this.$emit(EVENT_SUBMITTED, file)
        }, () => {
          // waiting ui
          this.$nextTick(() => {
            this.upload()
          })
        })
      },
      removeFile(file) {
        this.$emit(EVENT_REMOVED, file)
        file._xhr && file._xhr.abort()
        if (file.url) {
          URL.revokeObjectURL(file.url)
        }
        const index = this.files.indexOf(file)
        this.files.splice(index, 1)
        this.upload()
      },
      fileClick(file) {
        this.$emit(EVENT_CLICK, file)
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
          if (status === STATUS_READY || (retry && status === STATUS_ERROR && file._retryId !== this.retryId)) {
            ajaxUpload(file, options, (file) => {
              if (status === STATUS_ERROR) {
                file._retryId = this.retryId
              }
              this.$emit(file.status === STATUS_SUCCESS ? EVENT_SUCCESS : EVENT_ERROR, file)
              this.upload(retry)
            })
            uploadingCount++
          } else if (status === STATUS_UPLOADING) {
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
          if (file.status === STATUS_UPLOADING) {
            file._xhr.abort()
            file.status = STATUS_READY
          }
        })
      },
      retry() {
        this.retryId = Date.now()
        this.paused = false
        this.upload(true)
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
