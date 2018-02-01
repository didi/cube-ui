import Vue from 'vue2'
import Input from '@/modules/input'
import createVue from '../utils/create-vue'

describe('Input.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Input)
    expect(Vue.component(Input.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createInput()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-input-wrapper')
    expect(el.querySelector('input'))
      .to.be.ok
  })
  it('should not show clear button when no text', () => {
    vm = createInput()
    expect(vm.$el.querySelector('.cube-input-clear'))
      .to.be.null
  })
  it('should show clear button when has text', () => {
    vm = createInput(1)
    expect(vm.$el.querySelector('.cube-input-clear').style.display)
      .to.equal('')
  })
  it('value should be empty when clear button clicked', (done) => {
    vm = createInput(1)
    expect(vm.$el.querySelector('input').value)
      .is.not.empty
    vm.$el.querySelector('.cube-input-clear').click()
    setTimeout(() => {
      expect(vm.$el.querySelector('input').value)
        .is.empty
      done()
    }, 50)
  })
})

function createInput (value) {
  const vm = createVue({
    template: `
      <cube-input
        :disabled="disabled"
        :readonly="readonly"
        :use-clear="useClear"
        v-model="value"
      >
      </cube-input>
    `,
    data: {
      disabled: false,
      readonly: false,
      useClear: true,
      value: value && 'test'
    }
  })
  return vm
}
