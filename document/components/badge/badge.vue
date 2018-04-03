<template>
  <a class="badge" href="https://github.com/didi/cube-ui" target="_blank">
    <span class="badge-left">{{badgeName||type}}</span>
    <span class="badge-right">{{badgeValue || '...'}}</span>
  </a>
</template>
<script>
  import ajax from '../../common/js/ajax.js'
  const urlMap = {
    star: 'https://img.shields.io/github/stars/didi/cube-ui.json',
    fork: 'https://img.shields.io/github/forks/didi/cube-ui.json',
    watch: 'https://img.shields.io/github/watchers/didi/cube-ui.json'
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
    color: #545454
    margin: 5px
    overflow: hidden
    &:hover
      color: #545454
    span
      display: inline-block
      font-size: 12px
    .badge-left
      padding: 4px 10px
      color: #fff
      background-color: #89C6FF
    .badge-right
      padding: 4px 10px
      border-left: 1px #4AA8FF solid
      background-color: white
</style>
