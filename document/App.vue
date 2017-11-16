<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldPath: window.location.hash
    }
  },
  mounted () {
    const docViewEle = document.body
    docViewEle.addEventListener('click', (e) => {
      e.preventDefault()
      let target = e.target
      while (target && target.className !== 'anchor') {
        target = target.parentNode
      }
      if (target) {
        this.scrollToHash(target.getAttribute('href'))
      }
    })
  },
  watch: {
    $route (to, from) {
      this.oldPath = `#${to.path}`
      this.scrollToHash()
    }
  },
  methods: {
    scrollToHash (hash) {
      const pattern = /#cube-(.*)-anchor/
      let newUrl = ''
      let matcher
      if (!hash) {
        matcher = window.location.hash.match(pattern)
        if (matcher) {
          hash = matcher[0]
        }
      }
      matcher = hash.match(pattern)
      newUrl = this.oldPath + hash
      window.location.hash = newUrl
      const anchor = matcher[1]
      const el = document.querySelector(`#${anchor}`)
      el && el.scrollIntoView()
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
</style>
