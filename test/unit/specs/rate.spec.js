import Vue from 'vue2'
import Rate from '@/modules/rate'
import createVue from '../utils/create-vue'
import { dispatchSwipe, dispatchMouse } from '../utils/event'

describe('Rate.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Rate)
    expect(Vue.component(Rate.name))
      .to.be.a('function')
  })
  it('should render correct contents', async () => {
    vm = createRate()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-rate')
    let actives = el.querySelectorAll('.cube-rate-item_active')
    expect(actives.length)
      .to.equal(vm.value)
    const stars = el.querySelectorAll('.cube-rate-item')
    expect(stars.length)
      .to.equal(vm.max)

    await new Promise(resolve => {
      vm.$parent.value = 4
      vm.$parent.justify = true
      setTimeout(resolve)
    })
    expect(el.className)
      .to.equal('cube-rate cube-rate-justify')
    actives = el.querySelectorAll('.cube-rate-item_active')
    expect(actives.length)
      .to.equal(vm.value)

    await new Promise(resolve => {
      vm.$parent.allowHalf = true
      vm.$parent.value = 3.2
      setTimeout(resolve)
    })
    actives = el.querySelectorAll('.cube-rate-item_active')
    expect(actives.length) // 3
      .to.equal(getNumStatus(vm.tempValue).full) // 3
    let halfActives = el.querySelectorAll('.cube-rate-item_half_active')
    expect(halfActives.length) // 1
      .to.equal(getNumStatus(vm.tempValue).half) // 1

    await new Promise(resolve => {
      vm.$parent.allowHalf = false
      vm.$parent.value = 4.1
      setTimeout(resolve)
    })
    actives = el.querySelectorAll('.cube-rate-item_active')
    expect(actives.length) // 5
      .to.equal(getNumStatus(vm.tempValue).full) // 5
    halfActives = el.querySelectorAll('.cube-rate-item_half_active')
    expect(halfActives.length) // 0
      .to.equal(getNumStatus(vm.tempValue).half) // 0
  })
  it('should trigger change event', function (done) {
    this.timeout(10000)
    const changeHandler = sinon.spy()
    vm = createRate(changeHandler)
    vm.$parent.disabled = true
    setTimeout(() => {
      // dispatch touch
      dispatchSwipe(vm.$el, [
        {
          pageX: 50,
          pageY: 20
        },
        {
          pageX: 180,
          pageY: 20
        }
      ], 100)
      // No response
      setTimeout(() => {
        expect(changeHandler).not.to.be.called
        vm.$parent.disabled = false
        setTimeout(() => {
          // dispatch touch again
          dispatchSwipe(vm.$el, [
            {
              pageX: 50,
              pageY: 20
            },
            {
              pageX: 180,
              pageY: 20
            }
          ], 100)
          setTimeout(() => {
            expect(changeHandler).to.be.calledOnce
            done()
          }, 200)
        })
      }, 200)
    })
  })
  it('should trigger change event with click', function (done) {
    this.timeout(10000)
    vm = createRate()
    const star = vm.$el.querySelector('.cube-rate-item')
    dispatchMouse(star, 'mousedown')
    dispatchMouse(star, 'mousemove')
    dispatchMouse(star, 'mouseup')
    setTimeout(() => {
      const actives = vm.$el.querySelectorAll('.cube-rate-item_active')
      expect(actives.length)
        .to.equal(1)
      done()
    }, 50)
  })
})

function getNumStatus(num) {
  const str = num + ''
  let full = num
  let half = 0
  if (str.includes('.5')) {
    full = num - 0.5
    half = 1
  }
  return {
    full,
    half
  }
}

function createRate (changeHanlder, props = {}) {
  const data = Object.assign({}, {
    disabled: false,
    value: 3,
    max: 5,
    justify: false,
    allowHalf: false
  }, props)
  const vm = createVue({
    template: `
    <cube-rate v-model="value" :disabled="disabled" :justify="justify" :max="max" :allowHalf="allowHalf"></cube-rate>
    `,
    data,
    watch: {
      value(newVal) {
        changeHanlder && changeHanlder.call(vm, newVal)
      }
    }
  })
  return vm
}
