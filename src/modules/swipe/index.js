import Swipe from '../../components/swipe/swipe.vue'
import SwipeItem from '../../components/swipe/swipe-item.vue'

Swipe.install = function (app) {
  app.component(Swipe.name, Swipe)
  app.component(SwipeItem.name, SwipeItem)
}

Swipe.Item = SwipeItem

export default Swipe
