import Vue from 'vue2'
import Textarea from '@/modules/textarea'
import createVue from '../utils/create-vue'

describe('Textarea.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Textarea)
    expect(Vue.component(Textarea.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createTextarea()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-textarea-wrapper')
    expect(el.querySelector('textarea'))
      .to.be.ok
  })
  it('should not expand when blur', () => {
    vm = createTextarea()
    expect(vm.$el.offsetHeight)
      .to.equal(38)
  })
  it('should expand when focus, fold when blur', (done) => {
    vm = createTextarea(1)
    vm.$el.querySelector('textarea').focus()
    setTimeout(() => {
      expect(vm.$el.offsetHeight)
        .to.equal(78)
      vm.textareaValue = ''
      vm.$el.querySelector('textarea').blur()
      setTimeout(() => {
        expect(vm.$el.offsetHeight)
          .to.equal(38)
        done()
      }, 500)
    }, 500)
  })
  it('should has remain when focus', (done) => {
    vm = createTextarea(1)
    vm.$el.querySelector('textarea').focus()
    setTimeout(() => {
      expect(vm.$el.querySelector('.cube-textarea-indicator').innerText)
        .to.equal('56')
      done()
    })
  })
  it('should change value', (done) => {
    vm = createTextarea(1)
    vm.$parent.value = '1234'
    setTimeout(() => {
      expect(vm.$el.querySelector('textarea').value)
        .to.equal('1234')
      done()
    }, 100)
  })
  it('should support more native props', () => {
    vm = createVue({
      template: `
        <cube-textarea :autofocus="true" :readonly="true" :disabled="true" v-model="value" />
      `,
      data: {
        value: '1'
      }
    })

    const el = vm.$el.querySelector('textarea')
    expect(el.disabled)
      .to.be.true
    expect(el.readOnly)
      .to.be.true
    expect(el.autofocus)
      .to.be.true
  })
})

function createTextarea (value) {
  const vm = createVue({
    template: `
      <cube-textarea
        :disabled="disabled"
        :readonly="readonly"
        v-model="value"
      >
      </cube-textarea>
    `,
    data: {
      disabled: false,
      readonly: false,
      value: value && 'test'
    }
  })
  return vm
}
