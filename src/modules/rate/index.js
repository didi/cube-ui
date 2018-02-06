import Rate from '../../components/rate/rate.vue'
import RateItem from '../../components/rate/rate-item.vue'

Rate.install = function(Vue) {
  Vue.component(Rate.name, Rate)
  Vue.component(RateItem.name, RateItem)
}
Rate.Item = RateItem
export default Rate
