<template>
  <span class="langs">
    <a href="javascript:;" @click="toggle" >{{ current === 'zh-CN' ? 'English' : '中文' }}</a>
  </span>
</template>

<script>
  import { setItem, getCurrentLang } from '../../common/js/utils'
  const CUBE_LANGUAGE = 'CUBE_LANGUAGE'

  export default {
    data() {
      return {
        current: getCurrentLang()
      }
    },
    methods: {
      toggle () {
        this.current = this.current === 'zh-CN' ? 'en-US' : 'zh-CN'
        setItem(CUBE_LANGUAGE, this.current)
        this.$router.replace({
          path: this.$router.currentRoute.path.replace(/\/(zh-CN|en-US)(?=\/?)/, `/${this.current}`)
        })
      }
    }
  }
</script>

<style lang="stylus">
  @require "~@/common/stylus/variable.styl"
  .langs
    display: inline-block
    margin: 0 20px
    @media screen and (max-width: 960px)
      display: block
      line-height: 45px
      margin: 0 20px
    a
      color: #4B4B4C
      @media screen and (max-width: 960px)
        color: black
      &:active, &:hover
        color: $color-orange
</style>
