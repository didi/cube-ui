import Vue from 'vue2'
import Radio from '@/modules/radio'
import createVue from '../utils/create-vue'

describe('Radio.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(Radio)
    expect(Vue.component(Radio.name))
      .to.be.a('function')
  })
  it('should render correct contents', () => {
    vm = createRadio()
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-radio-group my-radio border-top-1px border-bottom-1px')
    const options = el.querySelectorAll('.cube-radio')
    expect(options.length)
      .to.equal(3)
    expect(options[0].getAttribute('data-pos'))
      .to.equal('right')
    expect(options[0].querySelector('.cube-radio-wrap').className)
      .to.equal('cube-radio-wrap border-bottom-1px')
    expect(options[0].querySelector('.cube-radio-input').value)
      .to.equal('1')
    expect(options[0].querySelector('.cube-radio-label').textContent.trim())
      .to.equal('Option1')

    expect(options[1].querySelector('.cube-radio-wrap').className)
      .to.equal('cube-radio-wrap border-bottom-1px')
    expect(options[1].querySelector('.cube-radio-input').value)
      .to.equal('Option2')
    expect(options[1].querySelector('.cube-radio-label').textContent.trim())
      .to.equal('Option2')

    expect(options[2].querySelector('.cube-radio-wrap').className)
      .to.equal('cube-radio-wrap cube-radio_selected cube-radio_disabled border-bottom-1px')
    expect(options[2].querySelector('.cube-radio-input').value)
      .to.equal('3')
    expect(options[2].querySelector('.cube-radio-label').textContent.trim())
      .to.equal('Option3')
  })
  it('should render correct contents - horizontal', () => {
    vm = createRadio(true)
    const el = vm.$el
    expect(el.className)
      .to.equal('cube-radio-group my-radio')
    expect(el.getAttribute('data-horz'))
      .to.equal('true')
    const options = el.querySelectorAll('.cube-radio')
    expect(options.length)
      .to.equal(3)

    expect(options[0].className)
      .to.equal('cube-radio border-right-1px')
    expect(options[0].querySelector('.cube-radio-wrap').className)
      .to.equal('cube-radio-wrap')
    expect(options[2].querySelector('.cube-radio-wrap').className)
      .to.equal('cube-radio-wrap cube-radio_selected cube-radio_disabled')
  })
  it('should toggle v-model value', (done) => {
    vm = createRadio()
    expect(vm.$parent.selected)
      .to.equal('3')
    vm.$el.querySelector('.cube-radio-input').click()
    setTimeout(() => {
      expect(vm.$parent.selected)
        .to.equal('1')
      done()
    })
  })
})

function createRadio (horizontal = false) {
  const vm = createVue({
    template: `
      <cube-radio v-model="selected" :options="options" class="my-radio" position="right" :horizontal="${horizontal}"></cube-radio>
    `,
    data: {
      selected: '3',
      options: [
        {
          label: 'Option1',
          value: '1'
        },
        'Option2',
        {
          label: 'Option3',
          value: '3',
          disabled: true
        }
      ]
    }
  })
  return vm
}
