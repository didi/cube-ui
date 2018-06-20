import Vue from 'vue2'
import ScrollNavBar from '@/modules/scroll-nav-bar'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchTap } from '../utils/event'

const current = '快车'
const labels = [
  '快车',
  '小巴',
  '专车',
  '顺风车',
  '代驾',
  '公交',
  '自驾租车',
  '豪华车',
  '二手车',
  '出租车'
]

describe('ScrollNavBar', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(ScrollNavBar)
    expect(Vue.component(ScrollNavBar.name))
      .to.be.a('function')
  })

  it('should render correct contents', (done) => {
    vm = createScrollNavBar()
    setTimeout(() => {
      expect(vm.$el.className)
        .to.equal('cube-scroll-nav-bar cube-scroll-nav-bar_horizontal')
      const items = vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')
      expect(items.length)
        .to.equal(10)
      expect(items[0].className)
        .to.include('cube-scroll-nav-bar-item_active')
      vm.$updateProps({
        current: '二手车'
      })
      setTimeout(() => {
        expect(vm.$el.querySelector('.cube-scroll-nav-bar-item_active').textContent.trim())
          .equal('二手车')
        // click one
        dispatchTap(vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')[2])
        setTimeout(() => {
          expect(vm.$el.querySelector('.cube-scroll-nav-bar-item_active').textContent.trim())
            .equal('专车')
          done()
        })
      })
    }, 50)
  })

  it('should render correct contents - vertical', (done) => {
    vm = createScrollNavBar({
      direction: 'vertical',
      current: current,
      labels: labels
    })
    setTimeout(() => {
      vm.refresh()
      expect(vm.$el.className)
        .to.equal('cube-scroll-nav-bar cube-scroll-nav-bar_vertical')
      const items = vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')
      expect(items.length)
        .to.equal(10)
      expect(items[0].className)
        .to.include('cube-scroll-nav-bar-item_active')
      done()
    }, 50)
  })

  it('should trigger events', (done) => {
    const changeHandler = sinon.spy()

    vm = createScrollNavBar({
      current: current,
      labels: labels
    }, {
      change: changeHandler
    })
    setTimeout(() => {
      dispatchTap(vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')[0])
      setTimeout(() => {
        expect(changeHandler)
          .not.to.be.called
        dispatchTap(vm.$el.querySelectorAll('.cube-scroll-nav-bar-item')[2])
        setTimeout(() => {
          expect(changeHandler)
            .to.be.calledOnce
          expect(changeHandler)
            .to.be.calledWith('专车')
          done()
        })
      })
    }, 50)
  })

  function createScrollNavBar(props = { current: current, labels: labels }, events = {}) {
    return instantiateComponent(Vue, ScrollNavBar, {
      props,
      on: events
    })
  }
})
