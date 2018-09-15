import Vue from 'vue2'
import Validator from '@/modules/validator'
import Locale from '@/modules/locale'
import enUSMessages from '@/locale/lang/en-US'
import instantiateComponent from '@/common/helpers/instantiate-component'

describe('Validator', () => {
  describe('Validator.vue', () => {
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
      Vue.use(Validator)
      expect(Vue.component(Validator.name))
        .to.be.a('function')
    })

    it('should render correct contents - invalid', (done) => {
      vm = createValidator({
        model: '',
        rules: {
          required: true,
          asyncRule: () => {
            return new Promise((resolve, reject) => {
              setTimeout(() => {
                reject(new Error('async'))
              })
            })
          }
        },
        messages: {
          required: '必填',
          asyncRule: '异步失败'
        },
        immediate: true
      })

      const el = vm.$el
      const msgEl = el.querySelector('.cube-validator-msg-def')
      setTimeout(() => {
        expect(el.className)
            .to.include('cube-validator_invalid')
        expect(msgEl.textContent)
          .to.equal('必填')
        expect(vm.result.asyncRule.valid)
          .to.be.false
        expect(vm.result.asyncRule.message)
          .to.equal('异步失败')
      }, 50)

      setTimeout(() => {
        vm.$updateProps({
          model: 'ssr',
          rules: {
            required: true,
            asyncRule: () => {
              return (resolve) => {
                setTimeout(() => {
                  resolve(true)
                })
              }
            }
          },
          messages: {
            required: '必填',
            asyncRule: '异步失败'
          },
          immediate: true
        })
        vm.$nextTick(() => {
          expect(vm.$el.className)
            .to.include('cube-validator_validating')
        })
        setTimeout(() => {
          expect(vm.$el.className)
            .to.include('cube-validator_valid')
          expect(msgEl.textContent)
            .to.equal('')
          done()
        }, 50)
      }, 100)
    })

    it('should reset correctly', () => {
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
      expect(vm.valid)
        .to.be.false
      expect(vm.invalid)
        .to.be.true
      expect(vm.validated)
        .to.be.true
      // reset
      vm.reset()
      expect(vm.valid)
        .to.be.undefined
      expect(vm.invalid)
        .to.be.undefined
      expect(vm.validated)
        .to.be.false
    })

    it('should not validate when disabled', (done) => {
      vm = createValidator({
        model: '',
        disabled: true,
        rules: {
          required: true
        },
        messages: {
          required: '必填'
        },
        immediate: true
      })
      const el = vm.$el
      expect(el.className)
        .to.equal('cube-validator')
      const noValidateCheck = () => {
        expect(vm.valid)
          .to.be.undefined
        expect(vm.invalid)
          .to.be.undefined
        expect(vm.validating)
          .to.be.false
        expect(vm.msg)
          .to.equal('')
      }
      noValidateCheck()
      const validateCb = sinon.spy()
      const ret = vm.validate(validateCb)
      expect(validateCb)
        .to.be.calledOnce
      expect(ret instanceof window.Promise)
        .to.equal(true)
      // change model value
      vm.$updateProps({
        model: 'new'
      })
      vm.$nextTick(() => {
        noValidateCheck()
        done()
      })
    })

    it('should trigger events', (done) => {
      const clickHandler = sinon.spy()
      const validatingHandler = sinon.spy()
      const validatedHandler = sinon.spy()
      vm = createValidator({
        model: {
          value: ''
        },
        modelKey: 'value',
        rules: {
          required: true,
          asyncRule: () => {
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(true)
              })
            })
          }
        },
        messages: {
          required: '必填',
          asyncRule: '异步失败'
        },
        immediate: true
      }, {
        'msg-click': clickHandler,
        validating: validatingHandler,
        validated: validatedHandler
      })
      expect(vm.validating)
        .to.be.true
      setTimeout(() => {
        expect(vm.validating)
          .to.be.false
        expect(vm.$el.querySelector('.cube-validator-msg-def').textContent)
          .to.equal('必填')
        vm.$el.querySelector('.cube-validator-msg').click()
        expect(clickHandler)
          .to.be.calledOnce
        expect(validatingHandler)
          .to.be.calledOnce
        expect(validatedHandler)
          .to.be.calledOnce
        done()
      }, 50)
    })

    it('should render correct contents when the language has changed to English', (done) => {
      Locale.use('en-US', enUSMessages)
      vm = createValidator({
        model: '',
        rules: {
          required: true
        }
      })
      const el = vm.$el
      const msgEl = el.querySelector('.cube-validator-msg-def')
      setTimeout(() => {
        expect(msgEl.textContent)
          .to.equal('Required.')
        done()
      }, 50)
    })

    it('should render correct contents when using helper function', (done) => {
      Locale.use('en-US', enUSMessages)
      Validator.addMessage('min', {
        'number': 'The number could not smaller than {{config | tips("please try it later")}}.'
      })
      Validator.addHelper('tips', function(result, tips) {
        return `${result}, ${tips}`
      })
      vm = createValidator({
        model: 8,
        rules: {
          type: 'number',
          min: 10
        }
      })
      const el = vm.$el
      const msgEl = el.querySelector('.cube-validator-msg-def')
      setTimeout(() => {
        expect(msgEl.textContent)
          .to.equal('The number could not smaller than 10, please try it later.')
        done()
      }, 50)
    })

    it('should render correct contents when using string-template', (done) => {
      Locale.use('en-US', enUSMessages)
      vm = createValidator({
        model: 'abc',
        rules: {
          required: true,
          type: 'string',
          min: 6
        }
      })
      const el = vm.$el
      const msgEl = el.querySelector('.cube-validator-msg-def')
      setTimeout(() => {
        expect(msgEl.textContent)
          .to.equal('Please input at least 6 characters.')
        vm.$updateProps({
          model: '2018-10-10',
          rules: {
            required: true,
            type: 'date',
            min: '2020-10-10'
          }
        })
        setTimeout(() => {
          expect(msgEl.textContent)
            .to.equal('Please select a date after 2020-10-10.')
          done()
        }, 100)
      }, 50)
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

    it('should be invalid - max: number', () => {
      vm = createValidator({
        model: 123,
        rules: {
          max: 5
        }
      })
      expect(vm.$data.msg)
        .to.not.equal('')
    })

    it('should be valid - len: string', () => {
      vm = createValidator({
        model: '123',
        rules: {
          len: 3
        }
      })
      expect(vm.$data.msg)
        .to.equal('')
    })

    it('should be invalid - len: number', () => {
      vm = createValidator({
        model: 123,
        rules: {
          len: 4
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

    it('should support adding message when the seconde parameter is a function', () => {
      Validator.addRule('even', (val, config, type) => !config || Number(val) % 2 === 0)
      Validator.addMessage('even', () => { return '请输入偶数' })

      vm = createValidator({
        model: 1,
        rules: {
          even: true
        }
      })
      expect(vm.$data.msg)
        .to.equal('请输入偶数')
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
})
