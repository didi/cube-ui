<template>
  <div class="cube-json-view">
    <h3>{{title}}</h3>
    <pre>
      <code ref="code" v-if="changed">{{data}}</code>
    </pre>
  </div>
</template>

<script type="text/ecmascript-6">
  import hljs from 'highlight.js/lib/highlight'
  import json from 'highlight.js/lib/languages/json'
  import 'highlight.js/styles/solarized-dark.css'
  hljs.registerLanguage('json', json)

  export default {
    props: {
      data: {
        type: Object,
        default() {
          return {}
        }
      },
      title: {
        type: String,
        default: ''
      }
    },
    data() {
      return {
        changed: true
      }
    },
    watch: {
      data: {
        handler() {
          this.changed = false
          this.$nextTick(() => {
            this.changed = true
            this.$nextTick(() => {
              hljs.highlightBlock(this.$refs.code)
            })
          })
        },
        deep: true
      }
    },
    mounted() {
      hljs.highlightBlock(this.$refs.code)
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  .cube-json-view
    h3
      margin-top: 15px
      font-size: $fontsize-large
</style>
