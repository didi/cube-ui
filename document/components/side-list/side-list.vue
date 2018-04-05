<template>
  <nav class="page-sidelist">
    <side-nav :data="navList"></side-nav>
  </nav>
</template>

<script>
  import SideNav from '../side-nav/side-nav.vue'

  let rootNav = {}

  export default {
    props: {
      navList: {
        type: Object,
        default () {
          return {}
        }
      }
    },
    components: {
      SideNav
    },
    mounted() {
      let docPath = ''
      let root = ''
      const navList = this.navList
      this.$watch('$route.path', (newPath) => {
        docPath = newPath.split('/').pop()
        if (rootNav) {
          rootNav.hasActived = false
          if (!root) {
            rootNav.isRootActive = false
            if (window.innerWidth > 960) {
              setTimeout(() => {
                const el = document.querySelector('.page-sidelist .nav-active')
                el && el.scrollIntoViewIfNeeded()
              }, 0)
            }
          }
        }
        root = this.seekRoot(navList, docPath)
        rootNav = root && navList[root]
        this.$set(rootNav, 'isRootActive', true)
        this.$set(rootNav, 'hasActived', true)
      }, {immediate: true})
    },
    methods: {
      seekRoot (navList, key, root) {
        const keys = Object.keys(navList)
        for (let i = 0; i < keys.length; i++) {
          let name = keys[i]
          if (name === key) {
            return root
          } else if (navList[name].subList) {
            let subList = navList[name].subList
            const subRoot = this.seekRoot(subList, key, root || name)
            if (subRoot) {
              return subRoot
            }
          }
        }
      }
    }
  }
</script>

<style lang="stylus">
  @require "~@/common/stylus/variable.styl"

  .page-sidelist
    font-size: $fontsize-large
</style>
