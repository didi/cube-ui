import Vue from 'vue2'
import Checkbox from '@/modules/checkbox'
import createVue from '../utils/create-vue'

describe('Checkbox.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Checkbox)
    expect(Vue.component(Checkbox.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createCheckbox()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-checkbox my-checkbox cube-checkbox_checked')
    expect(el.getAttribute('data-pos'))
      .to.equal('left')
    expect(el.querySelector('.cube-checkbox-wrap').className)
      .to.equal('cube-checkbox-wrap')
    expect(el.querySelector('.cube-checkbox-label').textContent.trim())
      .to.equal('checkbox')
  })
  it('should toggle v-model value', () => {
    vm = createCheckbox()
    expect(vm.$parent.checked)
      .to.be.true
    vm.$el.querySelector('.cube-checkbox-input').click()
    expect(vm.$parent.checked)
      .to.be.false
  })
})

function createCheckbox () {
  const vm = createVue({
    template: `
      <cube-checkbox v-model="checked" class="my-checkbox" :position="'left'">
        checkbox
      </cube-checkbox>
    `,
    data: {
      checked: true
    }
  })
  return vm
}
