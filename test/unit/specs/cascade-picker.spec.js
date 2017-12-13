import Vue from 'vue2'
import CascadePicker from '@/modules/cascade-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { cascadeData } from 'example/data/cascade'

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

  it('should trigger events', function (done) {
    this.timeout(10000)

    const selectHandle = sinon.spy()
    const cancelHandle = sinon.spy()
    const events = {
      select: selectHandle,
      cancel: cancelHandle
    }

    vm = createCascadePicker({
      data: cascadeData
    }, events)

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
        done()
      }, 100)
    }, 150)
  })

  it('setData', function () {
    this.timeout(10000)

    vm = createCascadePicker()

    vm.setData(cascadeData, [1, 1, 1])
    // expect(vm.pickerData[2])
    //   .to.deepEqual(cascadeData[1].children[1].children)
  })

  function createCascadePicker(props = {}, events = {}) {
    return instantiateComponent(Vue, CascadePicker, {
      props: props,
      on: events
    })
  }
})
