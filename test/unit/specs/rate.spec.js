import Vue from 'vue2'
import Rate from '@/modules/rate'
import createVue from '../utils/create-vue'
import { dispatchSwipe, dispatchClick } from '../utils/event'

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
  it('should render correct contents', () => {
    vm = createRate()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-rate-wrapper')
    const actives = el.querySelectorAll('.cube-rate-item.active')
    expect(actives.length)
      .to.equal(vm.value)
    const stars = el.querySelectorAll('.cube-rate-item')
    expect(stars.length)
      .to.equal(vm.max)
  })
  it('should trigger change event', function (done) {
    this.timeout(10000)
    const changeHandler = sinon.spy()
    vm = createRate(changeHandler)
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
      setTimeout(() => {
        expect(changeHandler).to.be.calledOnce
        done()
      }, 600)
    }, 2000)
  })
  it('should trigger change event with click', function (done) {
    this.timeout(10000)
    const changeHandler = sinon.spy()
    vm = createRate(changeHandler)
    const star = vm.$el.querySelector('.cube-rate-item')
    dispatchClick(star)
    setTimeout(() => {
      const actives = vm.$el.querySelectorAll('.cube-rate-item.active')
      expect(actives.length)
        .to.equal(1)
      done()
    }, 50)
  })
})

function createRate (changeHanlder) {
  const vm = createVue({
    template: `
    <cube-rate v-model="value" :disabled="disabled" :max="max"></cube-rate>
    `,
    data: {
      disabled: false,
      value: 3,
      max: 8
    },
    watch: {
      value(newVal) {
        changeHanlder && changeHanlder.call(vm, newVal)
      }
    }
  })
  return vm
}
