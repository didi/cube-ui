import InfinityScroll from '../../components/infinity-scroll/infinity-scroll.vue'

InfinityScroll.install = function (Vue) {
  Vue.component(InfinityScroll.name, InfinityScroll)
}

export default InfinityScroll
