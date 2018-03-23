import Vue from 'vue2'
import DatePicker from '@/modules/date-picker'
import instantiateComponent from '@/common/helpers/instantiate-component'

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

  })

  it('should trigger events', function (done) {

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

  it('$updateProps', function () {

  })

  it('should add warn log when sigle is true', () => {
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
