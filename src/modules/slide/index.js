import Slide from '../../components/slide/slide.vue'
import SlideItem from '../../components/slide/slide-item.vue'

Slide.install = function (app) {
  app.component(Slide.name, Slide)
  app.component(SlideItem.name, SlideItem)
}

Slide.Item = SlideItem

export default Slide
