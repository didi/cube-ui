<template>
  <div class="nav-loading" :class="loadingCls"></div>
</template>

<script>
  import { eventHub } from '../../common/js/utils'

  export default {
    data() {
      return {
        loading: false,
        toEnd: false
      }
    },
    computed: {
      loadingCls() {
        const cls = {}
        if (this.loading) {
          cls['nav-loading-ani'] = true
        }
        if (this.toEnd) {
          cls['nav-loading-ani-end'] = true
        }
        return cls
      }
    },
    created() {
      let tid
      let startTime
      eventHub.$on('begin-loading', () => {
        startTime = Date.now()
        clearTimeout(tid)
        this.loading = true
      })
      eventHub.$on('finish-loading', () => {
        const time = Date.now() - startTime
        if (time > 500) {
          this.resetLoading()
        } else {
          tid = setTimeout(this.resetLoading, 500 - time)
        }
      })
    },
    methods: {
      resetLoading() {
        this.toEnd = true
        setTimeout(() => {
          this.toEnd = false
          this.loading = false
        }, 100)
      }
    }
  }
</script>

<style lang="stylus">
  @require "~@/common/stylus/variable.styl"

  .nav-loading
    z-index: 10
    position: fixed
    top: 70px
    width: 100%
    height: 2px
    background: #3ca0e6
    transform: translateX(-100%)
    @media screen and (max-width: 960px)
      top: 48px
  .nav-loading-ani
    animation: navloading 2s linear forwards
  .nav-loading-ani-end
    animation: navloadingend .1s linear
  @keyframes navloading
    0%
      opacity: 0
      transform: translateX(-100%)
    20%
      opacity: .5
      transform: translateX(-60%)
    50%
      opacity: .8
      transform: translateX(-40%)
    80%
      opacity: .8
      transform: translateX(-20%)
    100%
      opacity: .8
      transform: translateX(-10%)
  @keyframes navloadingend
    0%
      opacity: .8
      transform: translateX(-10%)
    100%
      opacity: 0
      transform: translateX(0)
</style>
