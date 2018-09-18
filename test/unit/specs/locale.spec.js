import Vue from 'vue2'
import ActionSheet from '@/modules/action-sheet'
import Locale from '@/modules/locale'
import enUSMessages from '@/locale/lang/en-US'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Locale', () => {
  let vm
  afterEach(() => {
    // reset language
    Locale.use('zh-CN')
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    expect(Locale.installed)
      .to.be.true
  })
  it('should support adding helper function', () => {
    Locale.addHelper('test', () => {
      console.log('test')
    })
    expect(Locale.helpers.test).to.be.a('function')
    delete Locale.helpers.test
  })
  it('should render correct zh-CN language by default and support changing language', (done) => {
    vm = instantiateComponent(Vue, ActionSheet)
    expect(vm._cancelTxt)
      .to.equal('取消')
    Locale.use('en-US', enUSMessages)
    vm.$nextTick(() => {
      expect(vm._cancelTxt)
      .to.equal('Cancel')
      done()
    })
  })
})
