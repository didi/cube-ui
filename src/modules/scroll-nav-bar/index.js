import ScrollNavBar from '../../components/scroll-nav-bar/scroll-nav-bar.vue'

ScrollNavBar.install = function (app) {
  app.component(ScrollNavBar.name, ScrollNavBar)
}

export default ScrollNavBar
