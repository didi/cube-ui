import Sticky from '../../components/sticky/sticky.vue'
import StickyEle from '../../components/sticky/sticky-ele.vue'

Sticky.install = function (Vue) {
  Vue.component(Sticky.name, Sticky)
  Vue.component(StickyEle.name, StickyEle)
}

Sticky.Ele = StickyEle

export default Sticky
