<template>
  <span class="langs">
    <a href="javascript:;" :class="{active: current === k}" @click="to(k)" v-for="(v, k) of langs">{{v}}</a>
  </span>
</template>

<script>
  import { setItem, getCurrentLang } from '../../common/js/utils'
  const CUBE_LANGUAGE = 'CUBE_LANGUAGE'

  export default {
    data() {
      return {
        current: getCurrentLang(),
        langs: {
          'zh-CN': '中',
          'en-US': 'En'
        }
      }
    },
    methods: {
      to(lang) {
        if (this.current === lang) {
          return
        }
        this.current = lang
        setItem(CUBE_LANGUAGE, lang)
        this.$router.replace({
          path: this.$router.currentRoute.path.replace(/\/(zh-CN|en-US)(?=\/?)/, `/${lang}`)
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
      color: $color-white
      &::after
        content: "/"
        padding: 0 5px
      &.active
        color: $color-orange
</style>
