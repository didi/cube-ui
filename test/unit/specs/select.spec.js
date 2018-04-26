import Vue from 'vue2'
import Select from '@/modules/select'
import instantiateComponent from '@/common/helpers/instantiate-component'
import createVue from '../utils/create-vue'

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

  it('should render correct contents - update txt', (done) => {
    vm = createVue({
      template: `
        <cube-select v-model="value" :options="options" :title="title" :confirmTxt="confirmTxt" :cancelTxt="cancelTxt" />
      `,
      data: {
        value: 2016,
        options: [2013, 2014, 2015, 2016, 2017, 2018],
        title: 'title',
        confirmTxt: 'confirm',
        cancelTxt: 'cancel'
      }
    })
    // change txt
    vm.$parent.title = 'title2'
    vm.$parent.confirmTxt = 'confirm2'
    vm.$parent.cancelTxt = 'cancel2'
    vm.$nextTick(() => {
      expect(vm.picker.$el.querySelector('.cube-picker-cancel').textContent.trim())
        .to.equal('cancel2')
      expect(vm.picker.$el.querySelector('.cube-picker-confirm').textContent.trim())
        .to.equal('confirm2')
      expect(vm.picker.$el.querySelector('.cube-picker-choose h1').textContent.trim())
        .to.equal('title2')
      done()
    })
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
      vm.picker.scrollTo(0, 1)
      setTimeout(() => {
        const confirmBtn = document.querySelector('.cube-picker-confirm')
        confirmBtn.click()
        expect(changeHandle)
          .to.be.callCount(1)
        done()
      }, 1000)
    }, 100)
  })
})

function createSelect (props = {}, events = {}) {
  return instantiateComponent(Vue, Select, {
    props: props,
    on: events
  })
}
