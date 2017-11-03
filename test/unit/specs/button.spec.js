import Vue from 'vue2'
import Button from '@/modules/button'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Button.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Button)
    expect(Vue.component(Button.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = instantiateComponent(Vue, Button, {
      props: {
        icon: 'mfic-back'
      }
    }, (createElement) => {
      return createElement('span', 'btn content')
    })
    expect(vm.$el.querySelector('i').className)
      .to.equal('mfic-back')
    expect(vm.$el.querySelector('span').textContent)
      .to.equal('btn content')
  })
  it('props', () => {
    vm = instantiateComponent(Vue, Button, {
      props: {
        icon: 'mfic-back',
        type: 'submit',
        disabled: true,
        inline: true,
        outline: true,
        primary: true,
        light: true
      }
    }, (createElement) => {
      return createElement('span', 'btn content')
    })
    expect(vm.$el.type)
      .to.equal('submit')
    expect(vm.$el.className)
      .to.equal('cube-btn cube-btn_disabled cube-btn-inline cube-btn-primary cube-btn-outline cube-btn-outline-primary cube-btn-light')
  })
  it('events-called', () => {
    const clickHandler = sinon.spy()
    vm = instantiateComponent(Vue, Button, {
      props: {
        icon: 'mfic-back'
      },
      on: {
        click: clickHandler
      }
    }, (createElement) => {
      return createElement('span', 'btn content')
    })
    expect(clickHandler)
      .to.have.callCount(0)
    vm.$el.click()
    expect(clickHandler)
      .to.have.been.calledOnce
  })
  it('events-no-called', () => {
    const clickHandler = sinon.spy()
    vm = instantiateComponent(Vue, Button, {
      props: {
        icon: 'mfic-back',
        disabled: true
      },
      on: {
        click: clickHandler
      }
    }, (createElement) => {
      return createElement('span', 'btn content')
    })
    expect(clickHandler)
      .to.have.callCount(0)
    vm.$el.click()
    expect(clickHandler)
      .to.have.been.callCount(0)
  })
})
