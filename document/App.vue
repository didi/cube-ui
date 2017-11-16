<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  data () {
    return {
      oldHash: window.location.hash
    }
  },
  mounted () {
    const docViewEle = document.body
    const pattern = /#cube-(.*)-anchor/
    docViewEle.addEventListener('click', (e) => {
      e.preventDefault()
      let target = e.target
      while (target && target.className !== 'anchor') {
        target = target.parentNode
      }
      if (target) {
        const href = target.getAttribute('href')
        let newHash = ''
        if (pattern.test(this.oldHash)) {
          newHash = this.oldHash.replace(pattern, href)
        } else {
          newHash = this.oldHash + href
        }
        window.location.hash = newHash
      }
    })
  },
  watch: {
    $route (to, from) {
      this.oldHash = `#${to.path}`
    }
  }
}
</script>


<style lang="stylus" rel="stylesheet/stylus">
  #app
    width: 100%
    height: 100%
</style>
