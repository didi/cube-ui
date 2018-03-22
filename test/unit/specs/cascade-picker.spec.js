import Vue from 'vue2'
import CascadePicker from '@/modules/cascade-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { cascadeData } from 'example/data/cascade'
import { dispatchSwipe } from '../utils/event'

describe('CascadePicker', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(CascadePicker)
    expect(Vue.component(CascadePicker.name))
      .to.be.a('function')
  })

  it('should render correct contents', function () {
    vm = createCascadePicker({
      data: cascadeData,
      selectedIndex: [1, 1, 3]
    })

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(3)

    const firstWheelItems = wheels[0].querySelectorAll('li')
    expect(firstWheelItems.length)
      .to.equal(3)
    expect(firstWheelItems[1].textContent.trim())
      .to.equal('Drink')

    const secondWheelItems = wheels[1].querySelectorAll('li')
    expect(secondWheelItems.length)
      .to.equal(3)
    expect(secondWheelItems[1].textContent.trim())
      .to.equal('Tea')

    const thirdWheelItems = wheels[2].querySelectorAll('li')
    expect(thirdWheelItems.length)
      .to.equal(4)
    expect(thirdWheelItems[3].textContent.trim())
      .to.equal('Four')
  })

  it('should render correct contents when use alias', function () {
    vm = createCascadePicker({
      data: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }],
      selectedIndex: [1, 1, 3],
      alias: {
        value: 'id',
        text: 'name'
      }
    })

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    const firstWheelItems = wheels[0].querySelectorAll('li')
    expect(firstWheelItems.length)
      .to.equal(3)
    expect(firstWheelItems[1].textContent.trim())
      .to.equal('B')
  })

  it('should trigger events', function (done) {
    this.timeout(10000)

    const selectHandle = sinon.spy()
    const cancelHandle = sinon.spy()
    const changeHandle = sinon.spy()
    const events = {
      select: selectHandle,
      cancel: cancelHandle,
      change: changeHandle
    }

    vm = createCascadePicker({
      data: cascadeData
    }, events)

    vm.show()
    setTimeout(() => {
      const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
      const firstWheelItems = wheels[0].querySelectorAll('li')

      dispatchSwipe(firstWheelItems[1], [
        {
          pageX: firstWheelItems[1].offsetLeft + 10,
          pageY: firstWheelItems[1].offsetTop + 10
        },
        {
          pageX: 300,
          pageY: 380
        }
      ], 100)

      setTimeout(() => {
        expect(changeHandle)
          .to.be.callCount(1)

        const confirmBtn = vm.$el.querySelector('.cube-picker-choose [data-action="confirm"]')
        confirmBtn.click()
        expect(selectHandle)
          .to.be.callCount(1)

        vm.show()
        setTimeout(() => {
          const cancelBtn = vm.$el.querySelector('.cube-picker-choose [data-action="cancel"]')
          cancelBtn.click()
          expect(cancelHandle)
            .to.be.callCount(1)
          done()
        }, 100)
      }, 1000)
    }, 150)
  })

  it('setData', function () {
    this.timeout(10000)

    vm = createCascadePicker()

    vm.setData(cascadeData, [1, 1, 1])

    /* expect vm.pickerData[2] equal to cascadeData[1].children[1].children */
    expect(vm.pickerData[2].length)
      .to.equal(cascadeData[1].children[1].children.length)
    expect(vm.pickerData[2][0].value)
      .to.equal(cascadeData[1].children[1].children[0].value)
  })

  it('should add warn log when single is true', () => {
    const app = new Vue()
    const originWarn = console.warn
    const msgs = []
    console.warn = function (...args) {
      msgs.push(args.join('#'))
    }
    vm = app.$createCascadePicker({}, true)
    expect(msgs.length)
      .to.equal(1)
    console.warn = originWarn
  })

  function createCascadePicker(props = {}, events = {}) {
    return instantiateComponent(Vue, CascadePicker, {
      props: props,
      on: events
    })
  }
})
