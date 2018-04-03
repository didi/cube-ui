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
      let target = e.target
      while (target && target.className !== 'anchor') {
        target = target.parentNode
      }
      if (target) {
        e.preventDefault()
        this.scrollToHash(target.getAttribute('href'))
      }
    })
  },
  watch: {
    $route (to, from) {
      this.oldPath = `#${to.path}`
      this.scrollToHash(to.hash)
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
      if (hash) {
        matcher = hash.match(pattern)
        newUrl = this.oldPath + hash
        window.location.hash = newUrl
        setTimeout(() => {
          const anchor = decodeURIComponent(matcher[1])
          const el = document.querySelector(`#${anchor}`)
          el && el.scrollIntoView()
        })
      }
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
    background-color: white
  .ov-hidden
    overflow: hidden
</style>
