import Vue from 'vue2'
import InfinityScroll from '@/modules/infinity-scroll'
import createVue from '../utils/create-vue'

describe('InfinityScroll', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(InfinityScroll)
    expect(Vue.component(InfinityScroll.name))
      .to.be.a('function')
  })
  it('should provide render function as props and must return a dom', () => {
    vm = createInfinityScroll()
    expect(vm.$parent.render()).to.be.an.instanceof(window.HTMLElement)
  })
  it('should call correct method', () => {
    vm = createInfinityScroll()
    vm.disable()
    vm.enable()
    vm.destroy()
  })
  it('should call "setItems" api of InfinityScroll instance in fetchData function', (done) => {
    vm = createInfinityScroll()
    setTimeout(() => {
      expect(vm.items.length).to.equal(3)
      done()
    }, 100)
  })
  it('should call "setItems" api of InfinityScroll instance and pass false when you wanna stop infinity scroll', (done) => {
    vm = createInfinityScroll(true)
    setTimeout(() => {
      expect(vm.infinityScroll.infiniteScroller.hasMore).to.equal(false)
      done()
    }, 100)
  })

  function createInfinityScroll (stopScroll = false) {
    return createVue({
      template: `
        <cube-infinity-scroll
          ref="infinityScroll"
          @fetch="fetchData"
          :render="render">
          <div slot="render" class="render-template" ref="render"></div>
        </cube-infinity-scroll>
      `,
      data: {
        nextItem: 0
      },
      methods: {
        render (item, div) {
          div = div || this.$refs.render.cloneNode(true)
          return div
        },
        fetchData (count) {
          const infinityScroll = this.$refs.infinityScroll
          if (!stopScroll) {
            const items = [{
              text: '文本1'
            }, {
              text: '文本2'
            }, {
              text: '文本3'
            }]
            infinityScroll.setItems(items)
          } else {
            // stop scrolling
            infinityScroll.setItems(false)
          }
        }
      }
    })
  }
})
