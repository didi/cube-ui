import Vue from 'vue2'
import Slide from '@/modules/slide'
import createVue from '../utils/create-vue'
import { dispatchSwipe } from '../utils/event'

describe('Slide.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Slide)
    expect(Vue.component(Slide.name))
      .to.be.a('function')
  })
  it('should render correct contents', function (done) {
    this.timeout(10000)
    const items = ['1', '2', '3']
    vm = createSlide(items)
    setTimeout(() => {
      const itemEles = vm.$el.querySelectorAll('.cube-slide-item')
      // for loop
      expect(itemEles.length).to.equal(3 + 2)
      expect(itemEles[2].textContent).to.equal(items[1])
      let dotEles = vm.$el.querySelectorAll('.cube-slide-dots span')
      expect(dotEles.length).to.equal(3)
      expect(dotEles[0].className).to.equal('active')
      setTimeout(() => {
        // dotEles = vm.$el.querySelectorAll('.cube-slide-dots span')
        expect(dotEles[0].className).not.to.equal('active')
        expect(dotEles[1].className).to.equal('active')
        done()
      }, 1500)
    }, 200)
  })
  it('should trigger change event', function (done) {
    this.timeout(10000)
    const items = ['1', '2', '3']
    const changeHandler = sinon.spy()
    vm = createSlide(items, changeHandler)
    setTimeout(() => {
      // auto change
      expect(changeHandler).to.be.calledWith(1)
      // dispatch touch
      dispatchSwipe(vm.$el, [
        {
          pageX: 160,
          pageY: 20
        },
        {
          pageX: 10,
          pageY: 20
        }
      ], 100)
      setTimeout(() => {
        expect(changeHandler).to.be.calledTwice
        done()
      }, 600)
    }, 2000)
  })
})

function createSlide (items, changeHandler) {
  const vm = createVue({
    template: `
      <cube-slide :interval="interval" @change="change" style="width:300px;height:100px;">
        <cube-slide-item v-for="item in items" :key="item"><a>{{item}}</a></cube-slide-item>
      </cube-slide>
    `,
    data: {
      items,
      interval: 1000
    },
    methods: {
      change(newIndex) {
        changeHandler && changeHandler.call(vm, newIndex)
      }
    }
  })
  return vm
}
