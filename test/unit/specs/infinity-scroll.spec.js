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
  it('should call return a Promise in fetch function', () => {
    vm = createInfinityScroll()
    expect(vm.$parent.fetch()).to.be.an.instanceof(window.Promise)
  })
  it('should stop infinity scroll when Promise resolves a falsy value', (done) => {
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
          :fetch="fetch"
          :render="render">
          <div slot="render" class="render-template" ref="render"></div>
        </cube-infinity-scroll>
      `,
      methods: {
        render (item, div) {
          div = div || (this.$refs.render && this.$refs.render.cloneNode(true)) || document.createElement('div')
          return div
        },
        fetch (count) {
          if (!stopScroll) {
            const items = [{
              text: '文本1'
            }, {
              text: '文本2'
            }, {
              text: '文本3'
            }]
            return window.Promise.resolve(items)
          } else {
            // stop scroll
            return window.Promise.resolve(false)
          }
        }
      }
    })
  }
})
