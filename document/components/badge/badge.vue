<template>
  <div class="badge">
    <span class="badge-left">{{badgeName}}</span>
    <span class="badge-right">
    {{badgeValue}}</span>
  </div>
</template>
<script>
  import ajax from '../../common/js/ajax.js'
  const urlMap = {
    Star: 'https://img.shields.io/github/stars/didi/cube-ui.json',
    Fork: 'https://img.shields.io/github/forks/didi/cube-ui.json',
    Watch: 'https://img.shields.io/github/watchers/didi/cube-ui.json'
  }
  export default{
    data() {
      return {
        badgeName: '',
        badgeValue: ''
      }
    },
    props: {
      type: {
        type: String,
        default () {
          return ''
        }
      }
    },
    mounted() {
      let badge = this.type
      this.getData(badge)
    },
    methods: {
      getData (badge) {
        let url = urlMap[badge]
        ajax(url).then((response) => {
          let result = JSON.parse(response)
          console.log(result)
          this.badgeName = result.name
          this.badgeValue = result.value
        })
      }
    }
  }
</script>
<style lang="stylus">
  .badge
    display: inline-block
    text-align: center
    border: 1px #4AA8FF solid
    border-radius: 3px
    font-size: 0px
    color: #000000
    margin-right: 3px
    span
      display: inline-block
      font-size: 12px
    .badge-left
      padding: 4px 11px
      background-color: #89C6FF
    .badge-right
      padding: 4px 11px
      border-left: 1px #4AA8FF solid
      background-color: white
</style>
