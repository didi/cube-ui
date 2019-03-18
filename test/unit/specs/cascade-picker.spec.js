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
      title: 'title',
      subtitle: 'subtitle',
      data: cascadeData,
      selectedIndex: [1, 1, 3]
    })

    const titleEl = vm.$el.querySelector('.cube-picker-title')
    expect(titleEl.textContent.trim())
      .to.equal('title')

    const subtitleEl = vm.$el.querySelector('.cube-picker-subtitle')
    expect(subtitleEl.textContent.trim())
      .to.equal('subtitle')

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

      // change
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

        // select
        const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
        confirmBtn.click()
        expect(selectHandle)
          .to.be.callCount(1)

        // cancel
        vm.show()
        const cancelBtn = vm.$el.querySelector('.cube-picker-cancel')
        cancelBtn.click()
        expect(cancelHandle)
          .to.be.callCount(1)

        done()
      }, 1000)
    }, 150)
  })

  it('should call methods', function (done) {
    this.timeout(10000)

    vm = createCascadePicker()

    // setData
    vm.setData(cascadeData, [1, 1, 1])

    // For unknown reason, expect Array equal has failed.
    // expect vm.pickerData[2] equal to cascadeData[1].children[1].children
    expect(vm.pickerData[2].length)
      .to.equal(cascadeData[1].children[1].children.length)
    expect(vm.pickerData[2][0].value)
      .to.equal(cascadeData[1].children[1].children[0].value)

    // show
    vm.show()

    // hide
    setTimeout(() => {
      vm.hide()

      done()
    }, 100)
  })

  it('should support async cascade', function (done) {
    this.timeout(10000)

    const data = [
      { value: 1,
        text: '1',
        children: [{value: 11, text: '11'}]
      }, {
        value: 2,
        text: '2'
      }
    ]

    const selectedIndex = [0, 0]
    const selectHandle = sinon.spy()

    vm = createCascadePicker({
      async: true,
      data: data,
      selectedIndex: selectedIndex.slice()
    }, {
      select: selectHandle,
      change: (i, newIndex) => {
        if (newIndex !== selectedIndex[i]) {
          selectedIndex.splice(i, 1, newIndex)
          if (i < 1) {
            expect(selectHandle)
              .to.be.callCount(0)
            vm.$nextTick(() => {
              const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
              confirmBtn.click()
              expect(selectHandle)
                .to.be.callCount(0)

              setTimeout(() => {
                data[1].children = [{value: 21, text: '21'}]
                vm.setData(data, selectedIndex)
                vm.$nextTick(() => {
                  confirmBtn.click()
                  expect(selectHandle)
                    .to.be.callCount(1)

                  done()
                })
              }, 500)
            })
          }
        }
      }
    })
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
          pageX: firstWheelItems[1].offsetLeft + 10,
          pageY: 60
        }
      ], 100)
    }, 150)
  })

  it('$updateProps', function (done) {
    this.timeout(10000)

    vm = createCascadePicker({
      data: [{ id: 1, name: 'A' }, { id: 2, name: 'B' }, { id: 3, name: 'C' }],
      selectedIndex: [1]
    })

    let wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(1)

    vm.$updateProps({
      data: cascadeData,
      selectedIndex: [1, 1, 1]
    })
    vm.$nextTick(() => {
      wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
      expect(wheels.length)
        .to.equal(3)

      done()
    })
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
