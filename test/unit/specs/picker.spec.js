import Vue from 'vue2'
import Picker from '@/modules/picker'
import instantiateComponent from '@/common/helpers/instantiate-component'

const data1 = [
  {
    text: '剧毒',
    value: 1
  }, {
    text: '蚂蚁',
    value: 2
  },
  {
    text: '幽鬼',
    value: 3
  }
]

const data2 = [
  {
    text: '输出',
    value: 'a'
  }, {
    text: '控制',
    value: 'b'
  },
  {
    text: '核心',
    value: 'c'
  },
  {
    text: '爆发',
    value: 'd'
  },
  {
    text: '辅助',
    value: 'e'
  }
]
const props = {
  title: '两列选择器',
  data: [data1, data2],
  cancelTxt: '关闭',
  confirmTxt: '好的'
}

describe('Picker', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Picker)
    expect(Vue.component(Picker.name))
      .to.be.a('function')
    expect(Vue.prototype.$createPicker).to.be.a('function')
  })

  it('should render correct contents', function () {
    vm = createPicker(props)

    const cancelBtn = vm.$el.querySelector('.cube-picker-choose [data-action="cancel"]')
    expect(cancelBtn.textContent.trim())
      .to.equal('关闭')

    const confirmBtn = vm.$el.querySelector('.cube-picker-choose [data-action="confirm"]')
    expect(confirmBtn.textContent.trim())
      .to.equal('好的')

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(2)

    const firstWheelItems = wheels[0].querySelectorAll('li')
    expect(firstWheelItems.length)
      .to.equal(3)
    expect(firstWheelItems[1].textContent.trim())
      .to.equal('蚂蚁')

    const secondWheelItems = wheels[1].querySelectorAll('li')
    expect(secondWheelItems.length)
      .to.equal(5)
    expect(secondWheelItems[4].textContent.trim())
      .to.equal('辅助')
  })

  it('should trigger events', function () {
    this.timeout(10000)

    const selectHandle = sinon.spy()
    const valueChangeHandle = sinon.spy()
    const cancelHandle = sinon.spy()
    const changeHandle = sinon.spy()
    const events = {
      select: selectHandle,
      'value-change': valueChangeHandle,
      cancel: cancelHandle,
      change: changeHandle
    }

    vm = createPicker()
    return new Promise((resolve) => {
      setTimeout(() => {
        vm.$parent.updateRenderData({
          props: props,
          on: events
        })
        vm.$parent.$forceUpdate()
      }, 30)
      setTimeout(() => {
        vm.show()
        setTimeout(() => {
          const cancelBtn = vm.$el.querySelector('.cube-picker-choose [data-action="cancel"]')
          cancelBtn.click()
          expect(cancelHandle)
            .to.be.callCount(1)

          vm.show()
          setTimeout(() => {
            const confirmBtn = vm.$el.querySelector('.cube-picker-choose [data-action="confirm"]')
            confirmBtn.click()
            expect(selectHandle)
              .to.be.callCount(1)
            resolve()
          }, 100)
        }, 100)
      }, 150)
    })
  })

  it('should refill correct', function (done) {
    this.timeout(10000)
    vm = createPicker({
      title: '变化选择器',
      data: [data1],
      selectedIndex: [1],
      cancelTxt: '关闭',
      confirmTxt: '好的'
    })
    vm.show()
    setTimeout(() => {
      const ret = vm.refill([data2])
      expect(ret[0]).to.equal(0)
      setTimeout(() => {
        vm.scrollTo(0, 2)
        vm.confirm()
        expect(vm.pickerSelectedIndex[0]).to.equal(2)
        expect(vm.pickerSelectedVal[0]).to.equal(data2[2].value)
        done()
      })
    }, 150)
  })

  it('should add warn log when single is true', () => {
    const app = new Vue()
    const originWarn = console.warn
    const msgs = []
    console.warn = function (...args) {
      msgs.push(args.join('#'))
    }
    vm = app.$createPicker({
      title: '变化选择器',
      data: [data1],
      selectedIndex: [1]
    }, true)
    expect(msgs.length)
      .to.equal(1)
    console.warn = originWarn
  })

  it('setData when picker is invisible', function (done) {
    this.timeout(10000)
    vm = createPicker()
    vm.setData([data1], [1])
    vm.show()
    setTimeout(() => {
      vm.confirm()
      expect(vm.pickerSelectedIndex[0]).to.equal(1)
      expect(vm.pickerSelectedVal[0]).to.equal(data1[1].value)
      done()
    }, 150)
  })

  it('setData when picker is visible', function (done) {
    this.timeout(10000)
    vm = createPicker({
      data: [data1]
    })
    vm.show()
    setTimeout(() => {
      vm.setData([data2], [2])
      setTimeout(() => {
        vm.confirm()
        expect(vm.pickerSelectedIndex[0]).to.equal(2)
        expect(vm.pickerSelectedVal[0]).to.equal(data2[2].value)
        done()
      }, 150)
    }, 150)
  })

  function createPicker(props = {}, events = {}) {
    return instantiateComponent(Vue, Picker, {
      props: props,
      on: events
    })
  }
})
