import Vue from 'vue2'
import Checker from '@/modules/checker'
import createVue from '../utils/create-vue'

describe('Checker.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Checker)
    expect(Vue.component(Checker.name))
      .to.be.a('function')
  })
  it('should render radio contents', () => {
    vm = createChecker('radio')
    expect(vm.$el.className)
      .to.include('cube-checker')
    expect(vm.$el.querySelectorAll('.cube-checker-item_active').length)
      .to.equal(1)
    // expect(vm.$el.querySelector('.checker').className)
      // .to.include('active')
  })
  it('should render radio contents', (done) => {
    vm = createChecker('radio')
    const p = vm.$parent
    const options = p.options
    expect(p.checkerList)
      .to.equal(1)
    vm.$nextTick(() => {
      const items = vm.$el.querySelectorAll('.cube-checker-item')
      expect(items.length)
        .to.equal(options.length)
      items[0].click()
      vm.$nextTick(() => {
        expect(p.checkerList)
          .to.equal(0)
        done()
      })
    })
  })

  it('should render checkbox contents', (done) => {
    vm = createChecker('checkbox')
    const p = vm.$parent
    const options = p.options
    expect(p.checkerList.join(''))
      .to.equal('1')
    vm.$nextTick(() => {
      const items = vm.$el.querySelectorAll('.cube-checker-item')
      expect(items.length)
        .to.equal(options.length)
      items[1].click()
      items[2].click()
      items[3].click()
      vm.$nextTick(() => {
        expect(p.checkerList.join(''))
          .to.equal('23')
        done()
      })
    })
  })
})

function createChecker (type) {
  const vm = createVue({
    template: `
      <cube-checker
        v-model="checkerList"
        :options="options"
        :type="type">
      </cube-checker>
    `,
    data: {
      checkerList: type === 'radio' ? 1 : [1],
      options: [
        {
          value: 0,
          text: 'AAAAA'
        },
        {
          value: 1,
          text: 'BBBBB'
        },
        {
          value: 2,
          text: 'CCCCC'
        },
        {
          value: 3,
          text: 'DDDDD'
        }
      ],
      type: type,
      max: 2
    }
  })
  return vm
}
