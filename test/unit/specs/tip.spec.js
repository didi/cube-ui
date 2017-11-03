import Vue from 'vue2'
import Tip from '@/modules/tip'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Tip.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Tip)
    expect(Vue.component(Tip.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createTip()
    expect(vm.$el.getAttribute('data-dir'))
      .to.equal('left')
    expect(vm.$el.querySelector('i').className)
      .to.equal('cube-tip-angle')
    expect(vm.$el.querySelector('.cube-tip-content').textContent)
      .to.equal('tip content')
    return Promise.resolve()
  })
  it('should render correct contents with offset[X]', () => {
    vm = createTip({
      direction: 'left',
      offsetTop: 20,
      offsetLeft: '30%'
    })
    return new Promise(resolve => {
      setTimeout(resolve)
    }).then((resolve) => {
      const angleStyle = vm.$el.querySelector('.cube-tip-angle').style
      expect(angleStyle.top)
        .to.equal('20px')
      expect(angleStyle.bottom)
        .to.equal('auto')
      expect(angleStyle.left)
        .to.equal('30%')
      expect(angleStyle.right)
        .to.equal('auto')
    })
  })
  it('should be hidden after clicked content', () => {
    vm = createTip()
    vm.$el.querySelector('.cube-tip-content').click()
    expect(vm.isVisible)
      .to.be.false
    return Promise.resolve()
  })
  it('should be hidden after clicked close button', () => {
    vm = createTip()
    vm.$el.querySelector('.cube-tip-close').click()
    expect(vm.isVisible)
      .to.be.false
    return Promise.resolve()
  })
})

function createTip (props = {direction: 'left'}) {
  const vm = instantiateComponent(Vue, Tip, {
    props: props
  }, (createElement) => {
    return createElement('span', 'tip content')
  })
  return vm
}
