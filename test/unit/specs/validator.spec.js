import Vue from 'vue2'
import Validator from '@/modules/validator'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('validator.vue', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('use', () => {
    Vue.use(Validator)
    expect(Vue.component(Validator.name))
      .to.be.a('function')
  })

  it('should render correct contents - invalid', (done) => {
    vm = createValidator({
      model: '',
      rules: {
        required: true
      },
      messages: {
        required: '必填'
      },
      immediate: true
    })
    const el = vm.$el
    const msgEl = el.querySelector('.cube-validator-msg-def')
    expect(msgEl.textContent)
      .to.equal('必填')

    setTimeout(() => {
      vm.$parent.updateRenderData({
        props: {
          model: 'ssr',
          rules: {
            required: true
          },
          messages: {
            required: '必填'
          },
          immediate: true
        },
        on: {}
      })
      vm.$parent.$forceUpdate()
    }, 30)
    setTimeout(() => {
      expect(msgEl.textContent)
      .to.equal('')
      done()
    }, 150)
  })

  it('should trigger events', (done) => {
    const clickHandler = sinon.spy()
    vm = createValidator({
      model: '',
      rules: {
        required: true
      },
      messages: {
        required: '必填'
      },
      immediate: true
    }, {
      'msg-click': clickHandler
    })
    expect(vm.$el.querySelector('.cube-validator-msg-def').textContent)
      .to.equal('必填')
    vm.$el.querySelector('.cube-validator-msg').click()
    expect(clickHandler)
      .to.be.calledOnce
    done()
  })
})

describe('rules', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('should be valid - no rule', () => {
    vm = createValidator({
      model: ''
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be valid - unstated rule', () => {
    vm = createValidator({
      model: [],
      rules: {
        unstated: true
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
    expect(Object.keys(vm.$data.result).length)
      .to.equal(0)
  })

  it('should be invalid - require: array', () => {
    vm = createValidator({
      model: [],
      rules: {
        required: true
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be invalid - type: string', () => {
    vm = createValidator({
      model: true,
      rules: {
        type: 'string'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: string', () => {
    vm = createValidator({
      model: 'ssr',
      rules: {
        type: 'string'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - type: number', () => {
    vm = createValidator({
      model: 'ssr',
      rules: {
        type: 'number'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: number', () => {
    vm = createValidator({
      model: 123,
      rules: {
        type: 'number'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - type: array', () => {
    vm = createValidator({
      model: 123,
      rules: {
        type: 'array'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: array', () => {
    vm = createValidator({
      model: [1, 2],
      rules: {
        type: 'array'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - type: date', () => {
    vm = createValidator({
      model: 'ssr',
      rules: {
        type: 'date'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: date', () => {
    vm = createValidator({
      model: +new Date(),
      rules: {
        type: 'date'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - type: email', () => {
    vm = createValidator({
      model: 123,
      rules: {
        type: 'email'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: email', () => {
    vm = createValidator({
      model: 'test@didi.com',
      rules: {
        type: 'email'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - type: tel', () => {
    vm = createValidator({
      model: 123,
      rules: {
        type: 'tel'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: tel', () => {
    vm = createValidator({
      model: '13011112222',
      rules: {
        type: 'tel'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - type: url', () => {
    vm = createValidator({
      model: 123,
      rules: {
        type: 'url'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - type: url', () => {
    vm = createValidator({
      model: 'https://www.didichuxing.com',
      rules: {
        type: 'url'
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - min: string', () => {
    vm = createValidator({
      model: '123',
      rules: {
        min: 5
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - min: number', () => {
    vm = createValidator({
      model: 123,
      rules: {
        min: 5
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be valid - max: string', () => {
    vm = createValidator({
      model: '123',
      rules: {
        max: 5
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - min: number', () => {
    vm = createValidator({
      model: 123,
      rules: {
        max: 5
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be valid - min: string', () => {
    vm = createValidator({
      model: '123',
      rules: {
        len: 3
      }
    })
    expect(vm.$data.msg)
      .to.equal('')
  })

  it('should be invalid - min: number', () => {
    vm = createValidator({
      model: 123,
      rules: {
        len: 3
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be invalid - notWhitespace', () => {
    vm = createValidator({
      model: '    ',
      rules: {
        notWhitespace: true
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be invalid - pattern', () => {
    vm = createValidator({
      model: 'test@11.com',
      rules: {
        pattern: /didi.com$/
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should be invalid - custom', () => {
    vm = createValidator({
      model: 1,
      rules: {
        custom: (val) => {
          return val !== 1
        }
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })
})

describe('methods', () => {
  let vm
  afterEach(() => {
    if (vm) {
      vm.$parent.destroy()
      vm = null
    }
  })

  it('should add customized rule and message', () => {
    Validator.addRule('odd', (val, config, type) => !config || Number(val) % 2 === 1)
    Validator.addMessage('odd', '请输入奇数')

    vm = createValidator({
      model: 2,
      rules: {
        odd: true
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should rewrite raw type', () => {
    Validator.addType('email', (val) => {
      return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)$/i.test(val)
    })

    vm = createValidator({
      model: 'test@didi.com.cn',
      rules: {
        type: 'email'
      }
    })
    expect(vm.$data.msg)
      .to.not.equal('')
  })

  it('should change the language of default message', () => {
    Validator.setLanguage('en')

    vm = createValidator({
      model: '',
      rules: {
        required: true
      }
    })
    expect(vm.$data.msg)
      .to.equal('Required.')
  })
})

function createValidator (props = {}, events = {}) {
  if (props.immediate === undefined) {
    props.immediate = true
  }
  return instantiateComponent(Vue, Validator, {
    props,
    on: events
  })
}
