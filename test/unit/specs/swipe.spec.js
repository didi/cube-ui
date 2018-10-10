import Vue from 'vue2'
import Swipe from '@/modules/swipe'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe, dispatchTouch } from '../utils/event'

const STATE_SHRINK = 0
const STATE_GROW = 1

const props = {
  data: [{
    item: {
      text: '测试1',
      value: 1
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
      value: 2
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
      value: 3
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
      value: 4
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
      value: 5
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
      value: 6
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
      value: 7
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
  it('use', () => {
    Vue.use(Swipe)
    expect(Vue.component(Swipe.name))
      .to.be.a('function')
  })

  it('should render correct contents', () => {
    let vm = createSwipe(props)
    const swipeItems = vm.$el.querySelectorAll('.cube-swipe-item')
    expect(swipeItems.length).to.equal(7)
    const swipeItem = swipeItems[0]
    expect(swipeItem.querySelectorAll('.cube-swipe-item-inner')[0].children[0].textContent).to.equal('测试1')

    const btnGroup = swipeItem.querySelectorAll('.cube-swipe-btn')
    expect(btnGroup.length).to.equal(2)
    expect(btnGroup[0].querySelectorAll('.text')[0].textContent).to.equal('不再关注')
    expect(btnGroup[1].querySelectorAll('.text')[0].textContent).to.equal('删除')
  })

  it('should shrink if the swipe width not enough', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem, btnWidth} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 300 - btnWidth / 2 + 10,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 400, () => {
      expect(swipeItemInstance.state).to.equal(STATE_SHRINK)
      done()
    })
  })

  it('should shrink if the last moving direction is right', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem, btnWidth} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 300 - btnWidth / 2 - 100,
      pageY: 10
    }, {
      pageX: 300 - btnWidth / 2 - 50,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 400, () => {
      expect(swipeItemInstance.state).to.equal(STATE_SHRINK)
      done()
    })
  })

  it('should shrink and not moved if the duration is more than momentumLimitTime and moving distance is less than momentumLimitDistance', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 290,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 400, () => {
      expect(swipeItemInstance.state).to.equal(STATE_SHRINK)
      expect(swipeItemInstance.moved).to.equal(false)
      done()
    })
  })

  it('should shrink and not moved if y-axis distance is more than x-axis distance', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 250,
      pageY: 80
    }]

    dispatchSwipe(swipeItem, touches, 200, () => {
      expect(swipeItemInstance.state).to.equal(STATE_SHRINK)
      expect(swipeItemInstance.moved).to.equal(false)
      done()
    })
  })

  it('should grow if the swipe width enough', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem, btnWidth} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 300 - btnWidth / 2 - 10,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 400, () => {
      expect(swipeItemInstance.state).to.equal(STATE_GROW)
      done()
    })
  })

  it('should grow if the duration is less than momentumLimitTime and moving distance is more than momentumLimitDistance', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 280,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 100, () => {
      expect(swipeItemInstance.state).to.equal(STATE_GROW)
      done()
    })
  })

  it('should not swipe out of the boundaries when swiping left', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 200,
      pageY: 10
    }, {
      pageX: 100,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 400, () => {
      expect(swipeItemInstance.x).to.equal(swipeItemInstance.maxScrollX)
      done()
    })
  })

  it('should not swipe out of the boundaries when swiping right', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 350,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 400, () => {
      expect(swipeItemInstance.x).to.equal(0)
      done()
    })
  })

  it('should trigger events', () => {
    const btnClickHandler = sinon.spy()
    const itemClickHandler = sinon.spy()

    let vm = createSwipe(props, {
      'btn-click': btnClickHandler,
      'item-click': itemClickHandler
    })

    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)
    swipeItem.querySelectorAll('.cube-swipe-item-inner')[0].click()
    expect(itemClickHandler).to.be.calledOnce
    swipeItem.querySelectorAll('.cube-swipe-btn')[0].click()
    expect(btnClickHandler).to.be.calledOnce
    expect(swipeItemInstance.state).to.equal(STATE_SHRINK)
  })

  it('should shrink if another swipe item active', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)
    let context = createSwipeContext(vm, 1)
    let swipeItemInstance1 = context.swipeItemInstance
    let swipeItem1 = context.swipeItem

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 280,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 100, () => {
      dispatchSwipe(swipeItem1, touches, 100, () => {
        expect(swipeItemInstance1.state).to.equal(STATE_GROW)
        done()
      })
      expect(swipeItemInstance.state).to.equal(STATE_SHRINK)
    })
  })

  it('should do nothing if active the same swipe item', (done) => {
    let vm = createSwipe(props)
    let {swipeItemInstance, swipeItem} = createSwipeContext(vm)

    const touches = [{
      pageX: 300,
      pageY: 10
    }, {
      pageX: 280,
      pageY: 10
    }]

    dispatchSwipe(swipeItem, touches, 100, () => {
      dispatchTouch(swipeItem, 'touchstart', touches[0])
      expect(swipeItemInstance.state).to.equal(STATE_GROW)
      done()
    })
  })

  it('should call refresh if the btns prop has changed', (done) => {
    let vm = new Vue({
      template: '<cube-swipe :data="swipeData"></cube-swipe>',
      data() {
        return {
          swipeData: props.data
        }
      },
      components: {
        CubeSwipe: Swipe
      }
    })
    vm.$mount()
    vm = vm.$children[0]
    let {swipeItemInstance} = createSwipeContext(vm)

    vm.data[0].btns.push({
      action: 'new',
      text: '新增',
      color: '#fc9153'
    })

    setTimeout(() => {
      expect(swipeItemInstance.cachedBtns.length).to.be.equal(3)
      done()
    }, 0)
  })

  it('should use default props if do not pass any prop', () => {
    let vm = createSwipe()
    expect(vm.data.length).to.be.equal(0)

    vm = createSwipe({
      data: [{
        item: {
          value: 1
        }
      }]
    })

    let {swipeItemInstance} = createSwipeContext(vm)
    expect(swipeItemInstance.btns.length).to.be.equal(0)
  })

  function createSwipe(props = {}, events = {}) {
    return instantiateComponent(Vue, Swipe, {
      props,
      on: events
    })
  }

  function createSwipeContext(vm, index = 0) {
    const swipeItemInstance = vm.items[index]
    const swipeItem = swipeItemInstance.$el
    const btnGroup = swipeItem.querySelectorAll('.cube-swipe-btn')
    let btnWidth = 0
    for (let i = 0; i < btnGroup.length; i++) {
      btnWidth += btnGroup[i].offsetWidth
    }

    return {
      swipeItemInstance,
      swipeItem,
      btnWidth
    }
  }
})
