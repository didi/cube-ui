import Vue from 'vue2'
import SegmentPicker from '@/modules/segment-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'
import { provinceList, cityList, areaList } from 'example/data/area'
import { expressData } from 'example/data/picker'

const cityData = provinceList
cityData.forEach(province => {
  province.children = cityList[province.value]
  province.children.forEach(city => {
    city.children = areaList[city.value]
  })
})

describe('SegmentPicker', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(SegmentPicker)
    expect(Vue.component(SegmentPicker.name))
      .to.be.a('function')
  })

  it('should render correct contents', function () {
    vm = createSegmentPicker({
      data: [{
        title: '快递',
        data: [expressData],
        selectedIndex: [1]
      }, {
        is: 'cube-cascade-picker',
        title: '出发地',
        data: cityData,
        selectedIndex: [0, 0, 0],
        cancelTxt: '返回'
      }, {
        is: 'cube-cascade-picker',
        title: '目的地',
        data: cityData,
        selectedIndex: [0, 0, 0]
      }],
      cancelTxt: 'Cancel',
      confirmTxt: 'Confirm',
      nextTxt: 'Next',
      prevTxt: 'Prev'
    })

    const pickers = vm.$el.querySelectorAll('.cube-picker-panel')
    expect(pickers.length)
      .to.equal(3)

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(7)

    const firstPickerBtns = pickers[0].querySelectorAll('.cube-picker-choose > span')
    expect(firstPickerBtns[0].textContent.trim())
      .to.equal('Cancel')
    expect(firstPickerBtns[1].textContent.trim())
      .to.equal('Next')

    const secondPickerBtns = pickers[1].querySelectorAll('.cube-picker-choose > span')
    expect(secondPickerBtns[0].textContent.trim())
      .to.equal('返回')
    expect(secondPickerBtns[1].textContent.trim())
      .to.equal('Next')

    const thirdPickerBtns = pickers[2].querySelectorAll('.cube-picker-choose > span')
    expect(thirdPickerBtns[0].textContent.trim())
      .to.equal('Prev')
    expect(thirdPickerBtns[1].textContent.trim())
      .to.equal('Confirm')
  })

  // it('should render correct contents when use alias', function () {
  //   vm = createSegmentPicker()

  //   const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
  //   const firstWheelItems = wheels[0].querySelectorAll('li')
  //   expect(firstWheelItems.length)
  //     .to.equal(3)
  //   expect(firstWheelItems[1].textContent.trim())
  //     .to.equal('B')
  // })

  // it('should trigger events', function (done) {
  //   this.timeout(10000)

  //   const selectHandle = sinon.spy()
  //   const cancelHandle = sinon.spy()
  //   const changeHandle = sinon.spy()
  //   const events = {
  //     select: selectHandle,
  //     cancel: cancelHandle,
  //     change: changeHandle
  //   }

  //   vm = createSegmentPicker({
  //     data: cascadeData
  //   }, events)

  //   vm.show()
  //   setTimeout(() => {
  //     const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
  //     const firstWheelItems = wheels[0].querySelectorAll('li')

  //     dispatchSwipe(firstWheelItems[1], [
  //       {
  //         pageX: firstWheelItems[1].offsetLeft + 10,
  //         pageY: firstWheelItems[1].offsetTop + 10
  //       },
  //       {
  //         pageX: 300,
  //         pageY: 380
  //       }
  //     ], 100)

  //     setTimeout(() => {
  //       expect(changeHandle)
  //         .to.be.callCount(1)

  //       const confirmBtn = vm.$el.querySelector('.cube-picker-choose [data-action="confirm"]')
  //       confirmBtn.click()
  //       expect(selectHandle)
  //         .to.be.callCount(1)

  //       vm.show()
  //       setTimeout(() => {
  //         const cancelBtn = vm.$el.querySelector('.cube-picker-choose [data-action="cancel"]')
  //         cancelBtn.click()
  //         expect(cancelHandle)
  //           .to.be.callCount(1)
  //         done()
  //       }, 100)
  //     }, 1000)
  //   }, 150)
  // })

  // it('setData', function () {
  //   this.timeout(10000)

  //   vm = createSegmentPicker()

  //   vm.setData(cascadeData, [1, 1, 1])

  //   /* expect vm.pickerData[2] equal to cascadeData[1].children[1].children */
  //   expect(vm.pickerData[2].length)
  //     .to.equal(cascadeData[1].children[1].children.length)
  //   expect(vm.pickerData[2][0].value)
  //     .to.equal(cascadeData[1].children[1].children[0].value)
  // })

  it('should add warn log when single is true', () => {
    const app = new Vue()
    const originWarn = console.warn
    const msgs = []
    console.warn = function (...args) {
      msgs.push(args.join('#'))
    }
    vm = app.$createSegmentPicker({}, true)
    expect(msgs.length)
      .to.equal(1)
    console.warn = originWarn
  })

  function createSegmentPicker(props = {}, events = {}) {
    return instantiateComponent(Vue, SegmentPicker, {
      props: props,
      on: events
    })
  }
})
