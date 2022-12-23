import Sticky from '../../components/sticky/sticky.vue'
import StickyEle from '../../components/sticky/sticky-ele.vue'

Sticky.install = function (app) {
  app.component(Sticky.name, Sticky)
  app.component(StickyEle.name, StickyEle)
}

Sticky.Ele = StickyEle

export default Sticky
