import Vue from 'vue2'
import Input from '@/modules/input'
import createVue from '../utils/create-vue'
import { createEvent } from '../utils/event'

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
      .to.equal('cube-input')
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
  it('should support more native props', () => {
    vm = createVue({
      template: `
        <cube-input type="number" :min="1" :max="10" :autocomplete="true" :readonly="true" :disabled="true" v-model="value" />
      `,
      data: {
        value: '1'
      }
    })

    const el = vm.$el.querySelector('input')
    expect(el.min)
      .to.equal('1')
    expect(el.max)
      .to.equal('10')
    expect(el.autocomplete)
      .to.equal('true')
    expect(el.disabled)
      .to.be.true
    expect(el.readOnly)
      .to.be.true
    expect(el.autofocus)
      .to.be.false
  })
  it('should show password eye and work correctly', (done) => {
    vm = createVue({
      template: `
        <cube-input type="password" v-model="value" :eye="eye" />
      `,
      data: {
        value: 'pwd',
        eye: true
      }
    })

    expect(vm.$el.querySelector('input').type)
      .to.equal('text')
    vm.$parent.eye = {
      open: false
    }
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('input').type)
        .to.equal('password')
      vm.$parent.eye = {
        open: true
      }
      vm.$nextTick(() => {
        expect(vm.$el.querySelector('input').type)
          .to.equal('text')
        // click eye
        vm.$el.querySelector('.cube-input-eye').click()
        vm.$nextTick(() => {
          // now password is invisible
          expect(vm.$el.querySelector('input').type)
            .to.equal('password')
          done()
        })
      })
    })
  })
  it('should show clearable icon and work correctly', (done) => {
    vm = createVue({
      template: `
        <cube-input v-model="value" :clearable="clearable" />
      `,
      data: {
        value: 'xxx',
        clearable: {
          visible: true,
          blurHidden: true
        }
      }
    })

    expect(vm.$el.querySelector('.cube-input-clear'))
      .to.be.null
    vm.$parent.clearable.blurHidden = false
    vm.$nextTick(() => {
      expect(vm.$el.querySelector('.cube-input-clear'))
        .not.to.be.null
      done()
    })
  })

  it('should trigger events', (done) => {
    const focusHandler = sinon.spy()
    const blurHandler = sinon.spy()
    const changeHandler = sinon.spy()

    vm = createVue({
      template: `
        <cube-input type="password" v-model="value" @focus="focusHandler" @blur="blurHandler" @change="changeHandler" />
      `,
      data: {
        value: 'value'
      },
      methods: {
        focusHandler: focusHandler,
        blurHandler: blurHandler,
        changeHandler: changeHandler
      }
    })
    const input = vm.$el.querySelector('input')
    input.focus()
    setTimeout(() => {
      expect(focusHandler)
        .to.be.calledOnce
      input.value = 'new value'
      input.blur()
      const e = createEvent('', 'change')
      input.dispatchEvent(e)
      setTimeout(() => {
        expect(blurHandler)
          .to.be.calledOnce
        expect(changeHandler)
          .to.be.calledOnce
        done()
      })
    })
  })
})

function createInput (value) {
  const vm = createVue({
    template: `
      <cube-input
        :disabled="disabled"
        :readonly="readonly"
        :clearable="useClear"
        v-model="value"
      >
      </cube-input>
    `,
    data: {
      disabled: false,
      readonly: false,
      useClear: {
        visible: true,
        blurHidden: false
      },
      value: value && 'test'
    }
  })
  return vm
}
