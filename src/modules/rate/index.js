import Rate from '../../components/rate/rate.vue'
import RateItem from '../../components/rate/rate-item.vue'

Rate.install = function (app) {
  app.component(Rate.name, Rate)
  app.component(RateItem.name, RateItem)
}
Rate.Item = RateItem
export default Rate
