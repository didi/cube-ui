import Slide from '../../components/slide/slide.vue'
import SlideItem from '../../components/slide/slide-item.vue'

Slide.install = function (Vue) {
  Vue.component(Slide.name, Slide)
  Vue.component(SlideItem.name, SlideItem)
}

Slide.Item = SlideItem

export default Slide
