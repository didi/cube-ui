import Vue from 'vue2'
import CheckboxGroup from '@/modules/checkbox-group'
import createVue from '../utils/create-vue'

describe('CheckboxGroup.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })
  it('use', () => {
    Vue.use(CheckboxGroup)
    expect(Vue.component(CheckboxGroup.name))
      .to.be.a('function')
  })
  it('should render correct contents (horizontal=false)', () => {
    vm = createCheckboxGroup()
    expect(vm.$el.className)
      .to.include('cube-checkbox-group border-top-1px border-bottom-1px')
    expect(vm.$el.querySelectorAll('.cube-checkbox').length)
      .to.equal(4)
    expect(vm.$el.querySelector('.cube-checkbox').className)
      .to.include('cube-checkbox_checked')
    expect(vm.$el.querySelector('.cube-checkbox .cube-checkbox-wrap').className)
      .to.include('cube-checkbox-wrap border-bottom-1px')
  })
  it('should render correct contents (horizontal=true)', () => {
    vm = createCheckboxGroup(true)
    expect(vm.$el.className)
      .to.include('cube-checkbox-group')
    expect(vm.$el.querySelector('.cube-checkbox').className)
      .to.include('cube-checkbox cube-checkbox_checked border-right-1px')
  })
  it('should change v-model value', () => {
    vm = createCheckboxGroup()
    const p = vm.$parent
    expect(p.checkList[0])
      .to.equal('1')
    vm.$el.querySelector('.cube-checkbox-input').click()
    expect(p.checkList[0])
      .to.equal('4')
    vm.$el.querySelectorAll('.cube-checkbox-input')[1].click()
    expect(p.checkList[1])
      .to.equal('2')
  })

  it('should work correctly - min & max', () => {
    vm = createVue({
      template: `
        <cube-checkbox-group :min="1" :max="3" v-model="checkList">
          <cube-checkbox label="1">
            <div class="checkbox-slot-content">
              <p>自定义复选框A</p>
              <p>通过slot方式插入自己的内容</p>
            </div>
          </cube-checkbox>
          <cube-checkbox label="2">复选框B</cube-checkbox>
          <cube-checkbox label="3">复选框C</cube-checkbox>
          <cube-checkbox label="4">复选框D</cube-checkbox>
        </cube-checkbox-group>
      `,
      data: {
        checkList: ['1']
      }
    })
    const p = vm.$parent
    expect(p.checkList[0])
      .to.equal('1')
    vm.$el.querySelector('.cube-checkbox-input').click()
    // min logic keep 1
    expect(p.checkList[0])
      .to.equal('1')
    // click 2
    vm.$el.querySelectorAll('.cube-checkbox-input')[1].click()
    expect(p.checkList[1])
      .to.equal('2')
    // click 3
    vm.$el.querySelectorAll('.cube-checkbox-input')[2].click()
    expect(p.checkList[2])
      .to.equal('3')
    // click 4
    vm.$el.querySelectorAll('.cube-checkbox-input')[3].click()
    // keep 3 max logic
    expect(p.checkList.length)
      .to.equal(3)
  })
})

function createCheckboxGroup (horizontal = false) {
  const vm = createVue({
    template: `
      <cube-checkbox-group v-model="checkList" :horizontal="${horizontal}">
        <cube-checkbox label="1">
          <div class="checkbox-slot-content">
            <p>自定义复选框A</p>
            <p>通过slot方式插入自己的内容</p>
          </div>
        </cube-checkbox>
        <cube-checkbox label="2">复选框B</cube-checkbox>
        <cube-checkbox label="3" disabled>禁用状态(未选中)</cube-checkbox>
        <cube-checkbox label="4" disabled>禁用状态(选中)</cube-checkbox>
      </cube-checkbox-group>
    `,
    data: {
      checkList: ['1', '4']
    }
  })
  return vm
}
