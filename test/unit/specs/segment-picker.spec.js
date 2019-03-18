import Vue from 'vue2'
import SegmentPicker from '@/modules/segment-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'
import { provinceList, cityList, areaList } from 'example/data/area'
import { column1, column2, expressData } from 'example/data/picker'

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

    const cancelBtns = vm.$el.querySelectorAll('.cube-picker-cancel')
    const confirmBtns = vm.$el.querySelectorAll('.cube-picker-confirm')

    expect(cancelBtns[0].textContent.trim())
      .to.equal('Cancel')
    expect(confirmBtns[0].textContent.trim())
      .to.equal('Next')

    expect(cancelBtns[1].textContent.trim())
      .to.equal('返回')
    expect(confirmBtns[1].textContent.trim())
      .to.equal('Next')

    expect(cancelBtns[2].textContent.trim())
      .to.equal('Prev')
    expect(confirmBtns[2].textContent.trim())
      .to.equal('Confirm')
  })

  it('should correct by default', function () {
    vm = createSegmentPicker()

    vm.show()
    vm.hide()
  })

  it('should trigger events', function (done) {
    this.timeout(10000)

    const selectHandle = sinon.spy()
    const cancelHandle = sinon.spy()
    const nextHandle = sinon.spy()
    const prevHandle = sinon.spy()
    const changeHandle = sinon.spy()

    vm = createSegmentPicker({
      data: [{
        data: [expressData],
        selectedIndex: [1]
      }, {
        data: [column1],
        selectedIndex: [0]
      }]
    }, {
      select: selectHandle,
      cancel: cancelHandle,
      next: nextHandle,
      prev: prevHandle,
      change: changeHandle
    })

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    const cancelBtns = vm.$el.querySelectorAll('.cube-picker-cancel')
    const confirmBtns = vm.$el.querySelectorAll('.cube-picker-confirm')

    // change
    vm.show()
    setTimeout(() => {
      const items = wheels[0].querySelectorAll('li')

      dispatchSwipe(items[2], [
        {
          pageX: items[2].offsetLeft + 10,
          pageY: items[2].offsetTop + 10
        },
        {
          pageX: 300,
          pageY: 380
        }
      ], 100)

      setTimeout(() => {
        expect(changeHandle)
          .to.be.callCount(1)

        // cancel
        cancelBtns[0].click()
        expect(cancelHandle)
          .to.be.callCount(1)

        // next
        vm.show()
        vm.$nextTick(() => {
          confirmBtns[0].click()
          expect(nextHandle)
            .to.be.callCount(1)

          // prev
          vm.$nextTick(() => {
            cancelBtns[1].click()
            expect(prevHandle)
              .to.be.callCount(1)

            // next
            vm.$nextTick(() => {
              confirmBtns[0].click()
              expect(nextHandle)
                .to.be.callCount(2)

              // select
              vm.$nextTick(() => {
                confirmBtns[1].click()
                expect(selectHandle)
                  .to.be.callCount(1)
                done()
              })
            })
          })
        })
      }, 1000)
    }, 100)
  })

  it('$updateProps', function (done) {
    this.timeout(10000)

    vm = createSegmentPicker({
      data: [{
        title: '快递',
        data: [expressData],
        selectedIndex: [1]
      }, {
        title: 'Dota',
        data: [column1],
        selectedIndex: [0]
      }]
    })

    vm.$updateProps({
      data: [{
        title: 'Dota',
        data: [column1, column2],
        selectedIndex: [1, 1]
      }, {
        title: '快递',
        data: [expressData],
        selectedIndex: [0]
      }]
    })

    vm.$nextTick(() => {
      const titles = vm.$el.querySelectorAll('.cube-picker-title')
      expect(titles[0].textContent.trim())
        .to.equal('Dota')

      expect(titles[1].textContent.trim())
        .to.equal('快递')

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
