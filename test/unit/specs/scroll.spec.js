import Vue from 'vue2'
import 'basic-mouse-event-polyfill-phantomjs'
import Scroll from '@/modules/scroll'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'

const props = {
  data: [
    '我是第 1 行',
    '我是第 2 行',
    '我是第 3 行',
    '我是第 4 行'
  ],
  options: {
    pullDownRefresh: {
      threshold: 10,
      stop: 40,
      txt: '刷新成功'
    },
    pullUpLoad: {
      threshold: 0,
      txt: {
        more: '加载更多订单',
        noMore: '没有更多订单了'
      }
    }
  },
  listenScroll: true,
  listenBeforeScroll: true
}

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
    vm = createScroll(props)
    const listItems = vm.$el.querySelectorAll('.cube-scroll-content li')
    expect(listItems.length)
      .to.equal(4)
    expect(listItems[1].textContent)
      .to.equal('我是第 2 行')
    expect(listItems[3].textContent)
      .to.equal('我是第 4 行')
  })

  it('should trigger pullingDown', function () {
    this.timeout(10000)

    const pullingDownHandle = sinon.spy()
    vm = createScroll(props, {
      'pulling-down': pullingDownHandle
    })
    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    return new Promise((resolve) => {
      setTimeout(() => {
        const listFirstItem = vm.$el.querySelector('.cube-scroll-content li:first-child')
        dispatchSwipe(listFirstItem, [
          {
            pageX: 10,
            pageY: 10
          },
          {
            pageX: 10,
            pageY: 160
          }
        ], 100)
        setTimeout(() => {
          expect(pullingDownHandle)
            .to.be.callCount(1)
          const newData = props.data.concat(['我是插入的一行'])
          vm.$parent.updateRenderData({
            props: {
              ...props,
              data: newData
            }
          })
          vm.$parent.$forceUpdate()
          setTimeout(() => {
            setTimeout(() => {
              setTimeout(() => {
                expect(vm.beforePullDown).to.be.true
                expect(vm.isPullingDown).to.be.false
                resolve()
              }, 750)
            }, 650)
          }, 50)
        }, 400)
      }, 150)
    })
  })

  it('should trigger pullingUp', function () {
    this.timeout(10000)

    const pullingUpHandle = sinon.spy()
    vm = createScroll(props, {
      'pulling-up': pullingUpHandle
    })
    vm.$refs.wrapper.style.height = '200px'
    vm.refresh()

    return new Promise((resolve) => {
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
          const newData = props.data.concat(['我是新附加1', '我是新附加2'])
          vm.$parent.updateRenderData({
            props: {
              ...props,
              data: newData
            }
          })
          vm.$parent.$forceUpdate()
          setTimeout(() => {
            expect(vm.isPullUpLoad).to.be.false
            expect(vm.pullUpDirty).to.be.true
            resolve()
          }, 50)
        }, 400)
      }, 150)
    })
  })

  it('should trigger click', function () {
    this.timeout(10000)

    const clickHandler = sinon.spy()
    vm = createScroll({
      ...props,
      options: {
        ...props.options,
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
        expect(clickHandler).to.be.calledWith(props.data[0])
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
