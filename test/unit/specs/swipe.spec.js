import Vue from 'vue2'
import Swipe from '@/modules/swipe'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'

const props = {
  data: [{
    item: {
      text: '测试1',
      val: 1
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }, {
    item: {
      text: '测试2',
      val: 2
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }, {
    item: {
      text: '测试3',
      val: 3
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }, {
    item: {
      text: '测试',
      val: 4
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }, {
    item: {
      text: '测试',
      val: 5
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }, {
    item: {
      text: '测试',
      val: 6
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }, {
    item: {
      text: '测试',
      val: 7
    },
    btns: [
      {
        action: 'clear',
        text: '不再关注',
        color: '#c8c7cd'
      },
      {
        action: 'delete',
        text: '删除',
        color: '#ff3a32'
      }
    ]
  }],
  autoShrink: true
}

describe('Swipe', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Swipe)
    expect(Vue.component(Swipe.name))
      .to.be.a('function')
  })

  it('should render correct contents', () => {
    vm = createSwipe(props)
    const listItems = vm.$el.querySelectorAll('.cube-swipe-item-inner')
    expect(listItems.length).to.equal(7)
    expect(listItems[0].children[0].textContent).to.equal('测试1')

    const btns = vm.$el.querySelectorAll('.cube-swipe-btns')
    expect(btns.length).to.equal(7)
    expect(btns[0].)
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

  function createSwipe(props = {}, events = {}) {
    return instantiateComponent(Vue, Swipe, {
      props: props,
      on: events
    })
  }
})
