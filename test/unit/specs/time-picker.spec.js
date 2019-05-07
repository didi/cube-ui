import Vue from 'vue2'
import TimePicker from '@/modules/time-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'
import { dispatchSwipe } from '../utils/event'
import { getDayDiff } from '@/common/lang/date'

describe('TimePicker', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(TimePicker)
    expect(Vue.component(TimePicker.name))
      .to.be.a('function')
  })

  it('should render correct contents', function (done) {
    vm = createPicker()

    const cancelBtn = vm.$el.querySelector('.cube-picker-cancel')
    expect(cancelBtn.textContent.trim())
      .to.equal('取消')

    const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
    expect(confirmBtn.textContent.trim())
      .to.equal('确定')
    vm.show()
    setTimeout(() => {
      const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
      expect(wheels.length)
        .to.equal(3)

      const firstWheelItems = wheels[0].querySelectorAll('li')
      expect(firstWheelItems.length)
        .to.equal(3)
      expect(firstWheelItems[0].textContent.trim())
        .to.equal('今日')

      const secondWheelItems = wheels[1].querySelectorAll('li')
      expect(secondWheelItems[0].textContent.trim())
        .to.equal('现在')

      vm.hide()

      setTimeout(() => {
        const nextDate = new Date(Date.now() + 24 * 60 * 60 * 1000)
        vm.setTime(+nextDate)
        vm.show()
        setTimeout(() => {
          const wheel = vm.$el.querySelector('.cube-picker-wheel-wrapper > div > ul')
          const transform = wheel.style.webkitTransform || wheel.style.transform
          expect(transform.match(/translate\(0px,\s*(-?\d+)px\)/)[1])
            .to.equal('-36')

          expect(firstWheelItems[1].textContent.trim())
            .to.equal(`${nextDate.getMonth() + 1}月${nextDate.getDate()}日`)

          done()
        }, 100)
      })
    }, 100)
  })

  it('should render correct contents - no showNow', function (done) {
    vm = createPicker({
      showNow: false,
      title: '自定义标题',
      day: {
        len: 4,
        filter: ['今天'],
        format: 'M月d日'
      }
    })

    const cancelBtn = vm.$el.querySelector('.cube-picker-cancel')
    expect(cancelBtn.textContent.trim())
      .to.equal('取消')

    const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
    expect(confirmBtn.textContent.trim())
      .to.equal('确定')
    vm.show()
    setTimeout(() => {
      const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')
      expect(wheels.length)
        .to.equal(3)
      const firstWheelItems = wheels[0].querySelectorAll('li')
      expect(firstWheelItems.length)
        .to.equal(4)
      expect(firstWheelItems[0].textContent.trim())
        .to.equal('今天')
      done()
    }, 100)
  })

  it('should render correct contents - showNow text', function (done) {
    vm = createPicker({
      showNow: {
        text: 'now text'
      }
    })

    vm.show()
    setTimeout(() => {
      const wheels = vm.$el.querySelectorAll('.cube-picker-wheel-wrapper > div')

      const secondWheelItems = wheels[1].querySelectorAll('li')
      expect(secondWheelItems[0].textContent.trim())
        .to.equal('now text')

      done()
    }, 100)
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

    vm = createPicker({}, events)

    // cancel
    vm.show()
    const cancelBtn = vm.$el.querySelector('.cube-picker-cancel')
    cancelBtn.click()
    expect(cancelHandle)
      .to.be.callCount(1)

    // change
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

        // select: now
        const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
        confirmBtn.click()
        const now = +new Date()
        expect(selectHandle)
          .to.be.callCount(1)
        expect(selectHandle.args[0][0])
          .to.be.closeTo(now, 2)

        done()
      }, 1000)
    }, 100)
  })

  it('should have correct args when select normal time', function (done) {
    const selectHandle = sinon.spy()
    vm = createPicker({
      showNow: false,
      delay: 0,
      minuteStep: 1
    }, {
      select: selectHandle
    })

    // select: normal time
    vm.show()
    setTimeout(() => {
      const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
      confirmBtn.click()
      const now = +new Date()
      expect(selectHandle)
        .to.be.callCount(1)
      expect(selectHandle.args[0][0])
        .to.be.closeTo(now, 60 * 1000)

      done()
    }, 100)
  })

  it('should have correct selectText when config format', function (done) {
    const selectHandle = sinon.spy()
    vm = createPicker({
      showNow: false,
      delay: 0,
      minuteStep: 1,
      format: 'h:m'
    }, {
      select: selectHandle
    })

    vm.show()
    setTimeout(() => {
      const confirmBtn = vm.$el.querySelector('.cube-picker-confirm')
      confirmBtn.click()
      const now = new Date()
      expect(selectHandle)
        .to.be.callCount(1)
      expect(selectHandle.args[0][2])
        .to.be.equal(`${now.getHours()}:${now.getMinutes()}`)

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
    vm = app.$createTimePicker({}, true)
    expect(msgs.length)
      .to.equal(1)
    console.warn = originWarn
  })

  testMinuteStep()

  testMin()

  testMax()

  function testMin () {
    const minConfigs = [
      null,
      ((2 * 24 + 2) * 60 + 20) * 60 * 1000,
      -((2 * 24 + 2) * 60 + 20) * 60 * 1000,
      (2 * 60 + 20) * 60 * 1000,
      -(2 * 60 + 20) * 60 * 1000,
      (10) * 60 * 1000,
      -(10) * 60 * 1000
    ]

    minConfigs.forEach((min) => {
      it(`should init columns correct when min = now + ${min}`, function () {
        const now = +new Date()
        min = min && now + min
        vm = createPicker({
          showNow: false,
          delay: 0,
          min
        })

        const daysLength = vm.cascadeData.length

        expect(daysLength)
          .to.equal(getDayDiff(vm.maxTime, vm.minTime) + 1)

        let minHour = vm.cascadeData[0]
        while (minHour.children) {
          minHour = minHour.children[0]
        }

        expect(minHour.value)
          .to.equal(Math.floor((new Date(min || now).getMinutes()) / 10) * 10)
      })
    })
  }

  function testMax () {
    const maxConfigs = [
      null,
      ((2 * 24 + 2) * 60 + 20) * 60 * 1000,
      (2 * 60 + 20) * 60 * 1000,
      (10) * 60 * 1000,
      (1) * 60 * 1000,
      -(10) * 60 * 1000
    ]

    maxConfigs.forEach((max) => {
      it(`should init columns correct when max = now + ${max}`, function () {
        const now = +new Date()
        max += now
        vm = createPicker({
          showNow: false,
          delay: 0,
          max
        })

        const daysLength = vm.cascadeData.length

        // When the maxTime is smaller than minTime by more than a minute step. there is no option could be chosen.
        if (max - now <= -(10) * 60 * 1000) {
          expect(daysLength)
            .to.equal(0)
          return
        }

        expect(daysLength)
          .to.equal(getDayDiff(vm.maxTime, vm.minTime) + 1)

        let maxHour = vm.cascadeData[daysLength - 1]
        while (maxHour.children) {
          maxHour = maxHour.children[maxHour.children.length - 1]
        }

        expect(maxHour.value)
          .to.equal(Math.floor((max ? new Date(max).getMinutes() : 59) / 10) * 10)
      })
    })
  }

  function testMinuteStep() {
    const minuteStepConfigs = [
      undefined,
      15, {
        rule: 'ceil'
      }, {
        step: 15
      }, {
        rule: 'floor',
        step: 5
      }, {
        rule: 'ceil',
        step: 8
      }, {
        rule: 'round',
        step: 10
      }
    ]

    minuteStepConfigs.forEach((item) => {
      it(`should init minutes correct when minute step is ${item}`, function () {
        vm = createPicker({
          showNow: false,
          delay: 0,
          minuteStep: item,
          format: 'h:m'
        })

        const step = (typeof item === 'number' ? item : (item && item.step)) || 10
        const rule = (item && item.rule) || 'floor'

        expect(vm.cascadeData[0].children[0].children[0].value)
          .to.equal(Math[rule](vm.minTime.getMinutes() / step) * step)
      })
    })
  }
})

function createPicker(props = {}, events = {}) {
  return instantiateComponent(Vue, TimePicker, {
    props: props,
    on: events
  })
}
