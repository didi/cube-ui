import ScrollNav from '../../components/scroll-nav/scroll-nav.vue'
import ScrollNavPanel from '../../components/scroll-nav/scroll-nav-panel.vue'
import ScrollNavBar from '../../components/scroll-nav-bar/scroll-nav-bar.vue'

ScrollNav.install = function (app) {
  app.component(ScrollNav.name, ScrollNav)
  app.component(ScrollNavPanel.name, ScrollNavPanel)
  app.component(ScrollNavBar.name, ScrollNavBar)
}

ScrollNav.Panel = ScrollNavPanel
ScrollNav.Bar = ScrollNavBar

export default ScrollNav
