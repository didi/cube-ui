<template>
  <div class="cube-upload-file" :class="fileCls" @click="clickHandler">
    <slot
      :img-style="fileStyle"
      :progress="fileProgress"
    >
      <div class="cube-upload-file-def" :style="fileStyle">
        <i class="cubeic-wrong" @click.stop="removeFile"></i>
        <div class="cube-upload-file-state" :class="fileStatusCls">
          <i class="cube-upload-file-status" :class="statusCls"></i>
          <span class="cube-upload-file-progress">{{fileProgress}}</span>
        </div>
      </div>
    </slot>
  </div>
</template>
<script type="text/ecmascript-6">
  import { STATUS_SUCCESS, STATUS_ERROR } from './util'

  const COMPONENT_NAME = 'cube-upload-file'
  const STATUS_CLASS_MAP = {
    success: 'cubeic-right',
    error: 'cubeic-warn'
  }
  const EVENT_CLICK = 'click'

  export default {
    name: COMPONENT_NAME,
    props: {
      file: {
        type: Object,
        required: true
      }
    },
    computed: {
      fileCls() {
        return `cube-upload-file_${this.file.status}`
      },
      fileStatusCls() {
        const file = this.file
        const status = file.status
        if (file.progress >= 0.01 || status === STATUS_SUCCESS || status === STATUS_ERROR) {
          return 'cube-upload-file_stat'
        }
      },
      fileStyle() {
        const url = this.file.url || this.file.base64
        if (!url) {
          return
        }
        return {
          'background-image': `url("${url}")`
        }
      },
      statusCls() {
        const status = this.file.status
        return STATUS_CLASS_MAP[status]
      },
      fileProgress() {
        if (this.statusCls) {
          return '100%'
        }
        const p = Math.min(Math.floor(this.file.progress * 100), 99)
        return `${p}%`
      }
    },
    methods: {
      clickHandler() {
        this.$emit(EVENT_CLICK, this.file)
      },
      removeFile() {
        this.$parent.removeFile(this.file)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @require "../../common/stylus/variable.styl"
  @require "../../common/stylus/mixin.styl"
  .cube-upload-file
    position: relative

  .cube-upload-file-def
    position: relative
    width: 80px
    height: 80px
    box-sizing: border-box
    background: $upload-file-bgc no-repeat center
    background-size: cover
    border-radius: 2px
    > .cubeic-wrong
      position: absolute
      z-index: 2
      top: -2px
      right: -2px
      color: $upload-file-remove-color
      font-size: $fontsize-large
      background-color: $upload-file-remove-bgc
      border-radius: 50%
      &::before
        display: inline-block
        transform: scale(1.625)
        transform-origin: center

  .cube-upload-file-state
    position: relative
    width: 100%
    height: 100%
    display: flex
    align-items: center
    justify-content: center
    overflow: hidden
    opacity: 0
    background-color: $upload-file-state-bgc
    border-radius: 2px
    transition: opacity .1s
    &::before
      content: "."
      position: relative
      left: -50%
      display: block
      width: 1px
      height: 1px
      margin-left: -1px
      background-color: rgba(0, 0, 0, .1)

  .cube-upload-file_stat
    opacity: 1

  .cube-upload-file-status
    position: relative
    z-index: 1
    font-size: $fontsize-large-xxxx
    display: none

  .cube-upload-file-status.cubeic-right
    display: block
    color: $upload-file-success-color

  .cube-upload-file-status.cubeic-warn
    display: block
    color: $upload-file-error-color

  .cube-upload-file-status.cubeic-right, .cube-upload-file-status.cubeic-warn
    &::after
      content: ""
      z-index: -1
      position: absolute
      left: 50%
      top: 50%
      transform: translate(-50%, -50%)
      width: .56em
      height: .56em
      border-radius: 50%
      background-color: $upload-file-status-bgc
    + .cube-upload-file-progress
        display: none

  .cube-upload-file-progress
    color: $upload-file-progress-color
    font-size: $fontsize-large-xx
</style>
