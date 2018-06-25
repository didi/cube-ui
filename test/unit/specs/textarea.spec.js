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
  it('should render correct contents - no indicator', () => {
    vm = createTextarea('', false)
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-textarea-wrapper')
    expect(el.querySelector('textarea'))
      .to.be.ok
    expect(el.querySelector('.cube-textarea-indicator'))
      .not.to.be.ok
  })
  it('should not expand when blur', () => {
    vm = createTextarea()
    expect(vm.$el.offsetHeight)
      .to.equal(40)
  })
  it('should expand when focus, fold when blur', (done) => {
    vm = createTextarea(1)
    vm.$el.querySelector('textarea').focus()
    setTimeout(() => {
      expect(vm.$el.offsetHeight)
        .to.equal(80)
      vm.textareaValue = ''
      vm.$el.querySelector('textarea').blur()
      setTimeout(() => {
        expect(vm.$el.offsetHeight)
          .to.equal(40)
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
      vm.$parent.value = new Array(61).join('1')
      setTimeout(() => {
        expect(vm.$el.querySelector('.cube-textarea-indicator').innerText)
          .to.equal('0')
        // update maxlength
        vm.$parent.maxlength = 30
        vm.$parent.$set(vm.$parent, 'indicator', {
          negative: false,
          remain: true
        })
        setTimeout(() => {
          expect(vm.$el.querySelector('.cube-textarea-indicator').innerText)
            .to.equal('0')
          done()
        })
      })
    })
  })
  it('should change value', (done) => {
    vm = createTextarea(1, {
      remain: false
    })
    vm.$parent.value = '1234'
    setTimeout(() => {
      expect(vm.$el.querySelector('textarea').value)
        .to.equal('1234')
      expect(vm.$el.querySelector('.cube-textarea-indicator').innerText)
        .to.equal('4')
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

function createTextarea (value, indicator = true) {
  const vm = createVue({
    template: `
      <cube-textarea
        :disabled="disabled"
        :readonly="readonly"
        :indicator="indicator"
        :maxlength="maxlength"
        v-model="value"
      >
      </cube-textarea>
    `,
    data: {
      disabled: false,
      readonly: false,
      maxlength: 60,
      value: value && 'test',
      indicator: indicator
    }
  })
  return vm
}
