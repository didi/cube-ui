import Vue from 'vue2'
import Switch from '@/modules/switch'
import createVue from '../utils/create-vue'

describe('Switch', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Switch)
    expect(Vue.component(Switch.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createSwitch()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-switch my-switch')
    expect(el.querySelector('.cube-switch-label').textContent.trim())
      .to.equal('Switch')
  })
  it('should toggle v-model value', function(done) {
    this.timeout(1000)
    vm = createSwitch()
    expect(vm.$parent.value)
      .to.be.true
    vm.$el.querySelector('.cube-switch-input').click()
    setTimeout(() => {
      expect(vm.$parent.value)
        .to.be.false
      done()
    }, 20)
  })
})

function createSwitch () {
  const vm = createVue({
    template: `
    <cube-switch class="my-switch" v-model="value">Switch</cube-switch>
    `,
    data: {
      value: true
    }
  })
  return vm
}
