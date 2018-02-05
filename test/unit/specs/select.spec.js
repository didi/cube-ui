import Vue from 'vue2'
import Select from '@/modules/select'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Select.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Select)
    expect(Vue.component(Select.name))
      .to.be.a('function')
  })

  it('should render correct contents', () => {
    vm = createSelect({
      value: 2016,
      options: [2013, 2014, 2015, 2016, 2017, 2018]
    })
    const el = vm.$el
    expect(el.querySelector('.cube-select-text').textContent.trim())
      .to.equal('2016')
  })

  it('should trigger events', function (done) {
    this.timeout(10000)

    const changeHandle = sinon.spy()
    vm = createSelect({
      value: 2016,
      options: [2013, 2014, 2015, 2016, 2017, 2018]
    }, {
      change: changeHandle
    })
    const el = vm.$el
    el.click()

    setTimeout(() => {
      const items = document.querySelectorAll('.cube-picker-wheel-wrapper > div')[0].querySelectorAll('li')
      items[1].click()
      setTimeout(() => {
        const confirmBtn = document.querySelector('.cube-picker-choose [data-action="confirm"]')
        confirmBtn.click()
        expect(changeHandle)
          .to.be.callCount(1)
        done()
      }, 100)
    }, 100)
  })
})

function createSelect (props = {}, events = {}) {
  return instantiateComponent(Vue, Select, {
    props: props,
    on: events
  })
}
