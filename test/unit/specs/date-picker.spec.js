import Vue from 'vue2'
import DatePicker from '@/modules/date-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'

describe('DatePicker', () => {
  let vm

  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(DatePicker)
    expect(Vue.component(DatePicker.name))
      .to.be.a('function')
  })

  it('should render correct contents', function () {
    vm = createDatePicker({
      min: new Date(2008, 7, 8),
      max: new Date(2020, 9, 20)
    })

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(3)

    const firstWheelItems = wheels[0].querySelectorAll('li')
    expect(firstWheelItems.length)
      .to.equal(13)
    expect(firstWheelItems[1].textContent.trim())
      .to.equal('2009')

    const secondWheelItems = wheels[1].querySelectorAll('li')
    expect(secondWheelItems.length)
      .to.equal(5)
    expect(secondWheelItems[1].textContent.trim())
      .to.equal('9')

    const thirdWheelItems = wheels[2].querySelectorAll('li')
    expect(thirdWheelItems.length)
      .to.equal(24)
    expect(thirdWheelItems[1].textContent.trim())
      .to.equal('9')
  })

  it('should render correct contents when configured startColumn and columnCount', function (done) {
    this.timeout(10000)

    vm = createDatePicker({
      min: [1, 8],
      max: [31, 23],
      startColumn: 'date',
      columnCount: 2
    })

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(2)

    const firstWheelItems = wheels[0].querySelectorAll('li')
    expect(firstWheelItems.length)
      .to.equal(31)
    expect(firstWheelItems[1].textContent.trim())
      .to.equal('2')

    const secondWheelItems = wheels[1].querySelectorAll('li')
    expect(secondWheelItems.length)
      .to.equal(16)
    expect(secondWheelItems[1].textContent.trim())
      .to.equal('09')

    // test: _arrayToDate if (i < this.beginIndex)
    vm.show()
    setTimeout(() => {
      const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
      confirmBtn.click()
      done()
    }, 50)
  })

  it('should render correct contents when configured format', function () {
    vm = createDatePicker({
      min: new Date(2008, 7, 8),
      max: new Date(2020, 9, 20),
      format: {
        year: 'yy年',
        month: 'MM月',
        date: '第 d 日'
      }
    })

    const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
    expect(wheels.length)
      .to.equal(3)

    const firstWheelItems = wheels[0].querySelectorAll('li')
    expect(firstWheelItems.length)
      .to.equal(13)
    expect(firstWheelItems[1].textContent.trim())
      .to.equal('09年')

    const secondWheelItems = wheels[1].querySelectorAll('li')
    expect(secondWheelItems.length)
      .to.equal(5)
    expect(secondWheelItems[1].textContent.trim())
      .to.equal('09月')

    const thirdWheelItems = wheels[2].querySelectorAll('li')
    expect(thirdWheelItems.length)
      .to.equal(24)
    expect(thirdWheelItems[1].textContent.trim())
      .to.equal('第 9 日')
  })

  it('should trigger events', function (done) {
    this.timeout(10000)

    const selectHandle = sinon.spy()
    const cancelHandle = sinon.spy()
    const changeHandle = sinon.spy()

    vm = createDatePicker({
      min: new Date(2008, 7, 8),
      max: new Date(2020, 9, 20),
      value: new Date(2010, 9, 1)
    }, {
      select: selectHandle,
      cancel: cancelHandle,
      change: changeHandle
    })

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

    vm = createDatePicker()

    // show
    vm.show()

    // hide
    setTimeout(() => {
      vm.hide()

      done()
    }, 100)
  })

  it('$updateProps', function (done) {
    const selectHandle = sinon.spy()

    vm = createDatePicker({
      min: new Date(2008, 7, 8),
      max: new Date(2020, 9, 20)
    }, {
      select: selectHandle
    })

    vm.$updateProps({
      value: new Date(2010, 9, 1)
    })

    vm.show()
    setTimeout(() => {
      const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
      confirmBtn.click()
      expect(selectHandle)
        .to.be.calledWith(new Date(2010, 9, 1), [2010, 10, 1], ['2010', '10', '1'])

      done()
    }, 100)
  })

  it('should add warn log when single is true', () => {
    const app = new Vue()
    const originWarn = console.warn
    const msgs = []
    console.warn = function (...args) {
      msgs.push(args.join('#'))
    }
    vm = app.$createDatePicker({}, true)
    expect(msgs.length)
      .to.equal(1)
    console.warn = originWarn
  })

  function createDatePicker(props = {}, events = {}) {
    return instantiateComponent(Vue, DatePicker, {
      props: props,
      on: events
    })
  }
})
