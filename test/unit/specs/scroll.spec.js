import Vue from 'vue2'
import Scroll from '@/modules/scroll'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'

const data = [
  '我是第 1 行',
  '我是第 2 行',
  '我是第 3 行',
  '我是第 4 行'
]

describe('Scroll', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Scroll)
    expect(Vue.component(Scroll.name))
      .to.be.a('function')
  })

  it('should render correct contents', () => {
    vm = createScroll({
      data
    })
    const listItems = vm.$el.querySelectorAll('.cube-scroll-content li')
    expect(listItems.length)
      .to.equal(4)
    expect(listItems[1].textContent)
      .to.equal('我是第 2 行')
    expect(listItems[3].textContent)
      .to.equal('我是第 4 行')
  })

  it('should trigger pullingDown', function (done) {
    this.timeout(10000)

    const pullingDownHandle = sinon.spy()
    vm = createScroll({
      data
    })

    vm.$parent.updateRenderData({
      props: {
        data,
        options: {
          pullDownRefresh: true
        }
      },
      on: {
        'pulling-down': pullingDownHandle
      }
    })
    vm.$parent.$forceUpdate()

    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    setTimeout(() => {
      const listFirstItem = vm.$el.querySelector('.cube-scroll-content li:first-child')
      dispatchSwipe(listFirstItem, [
        {
          pageX: 10,
          pageY: 10
        },
        {
          pageX: 10,
          pageY: 300
        }
      ], 100)
      setTimeout(() => {
        expect(pullingDownHandle)
          .to.be.callCount(1)
        const newData = data.concat(['我是插入的一行'])
        vm.$parent.updateRenderData({
          props: {
            data: newData,
            options: {
              pullDownRefresh: {
                threshold: 10,
                stop: 40,
                txt: '刷新成功'
              }
            }
          }
        })
        vm.$parent.$forceUpdate()
        setTimeout(() => {
          expect(vm.beforePullDown).to.be.true
          expect(vm.isPullingDown).to.be.false

          done()
        }, 1500)
      }, 400)
    }, 150)
  })

  it('should trigger pullingUp', function (done) {
    this.timeout(10000)

    const pullingUpHandle = sinon.spy()
    vm = createScroll()

    vm.$parent.updateRenderData({
      props: {
        data,
        options: {
          pullUpLoad: true
        }
      },
      on: {
        'pulling-up': pullingUpHandle
      }
    })
    vm.$parent.$forceUpdate()

    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    setTimeout(() => {
      const listItem = vm.$el.querySelector('.cube-scroll-content li:nth-child(3)')
      dispatchSwipe(listItem, [
        {
          pageX: 10,
          pageY: 200
        },
        {
          pageX: 10,
          pageY: 10
        }
      ], 100)

      setTimeout(() => {
        expect(pullingUpHandle)
          .to.be.callCount(1)
        const newData = data.concat(['我是新附加1', '我是新附加2'])
        vm.$parent.updateRenderData({
          props: {
            data: newData,
            options: {
              pullUpLoad: true
            }
          }
        })
        vm.$parent.$forceUpdate()
        setTimeout(() => {
          expect(vm.isPullUpLoad).to.be.false
          expect(vm.pullUpDirty).to.be.true

          done()
        }, 50)
      }, 400)
    }, 150)
  })

  it('should trigger click', function () {
    this.timeout(10000)

    const clickHandler = sinon.spy()
    vm = createScroll({
      data,
      options: {
        click: false
      }
    }, {
      click: clickHandler
    })
    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    return new Promise((resolve) => {
      setTimeout(() => {
        const listItem = vm.$el.querySelector('.cube-scroll-content li')
        listItem.click()
        expect(clickHandler).to.be.calledWith(data[0])
        resolve()
      }, 50)
    })
  })

  function createScroll (props = {}, events = {}) {
    return instantiateComponent(Vue, Scroll, {
      props: props,
      on: events
    })
  }
})
