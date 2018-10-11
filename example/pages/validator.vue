<template>
  <cube-page type="validator-view" title="Validator" desc="">
    <div slot="content">
      <div class="validator-item">
        <cube-input v-model="text1" placeholder="E-mail"></cube-input>
        <cube-validator ref="validator1" v-model="isValid[0]" :model="text1" :rules="rules1" :messages="messages1" :immediate="immediate"></cube-validator>
      </div>
      <div class="validator-item">
        <cube-validator ref="validator2" v-model="isValid[1]" :model="text2" :rules="rules2" :messages="messages2" :immediate="immediate">
          <cube-input v-model="text2" placeholder="component name"></cube-input>
          <div slot="message" class="custom-msg" slot-scope="props">
            <div v-if="(props.dirty || props.validated) && !isValid[1]">
              <i class="dd-cubeic-important"></i> {{ props.message }}
              <div>
                <span v-for="(item, index) in Object.values(props.result)" :key="index" v-if="item.inValid">{{ item.message + ' ' }}</span>
              </div>
            </div>
          </div>
        </cube-validator>
      </div>
      <div class="validator-item">
        <cube-validator ref="validator3" v-model="isValid[2]" :model="text3" :rules="rules3" :immediate="immediate">
          <cube-input v-model="text3" placeholder="validate odd"></cube-input>
        </cube-validator>
      </div>
      <div class="validator-item">
        <cube-checkbox-group v-model="checkList" :horizontal="true">
          <cube-checkbox label="1">1</cube-checkbox>
          <cube-checkbox label="2">2</cube-checkbox>
          <cube-checkbox label="3">3</cube-checkbox>
        </cube-checkbox-group>
        <cube-validator ref="validator4" v-model="isValid[3]" :model="checkList" :rules="rules4" :immediate="immediate"></cube-validator>
      </div>
      <div class="validator-item">
        <cube-rate v-model="rate"></cube-rate>
        <cube-validator ref="validator5" v-model="isValid[4]" :model="rate" :rules="rules5" :immediate="immediate"></cube-validator>
      </div>
      <div class="validator-item">
        <p>Async validate: </p>
        <cube-validator
          ref="validator6"
          v-model="isValid[5]"
          :model="captcha"
          :rules="rules6"
          :messages="messages6"
          :immediate="immediate"
          @validating="validatingHandler"
          @validated="validatedHandler">
          <cube-input v-model="captcha" placeholder="Please input captcha"></cube-input>
        </cube-validator>
      </div>
      <cube-button @click="submit">Submit</cube-button>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  // Add or rewrite the build-in rule, type and message.
  import { Validator, Locale } from '../../src/module'
  import enLang from '../../src/locale/lang/en-US'

  export default {
    data() {
      return {
        immediate: false,
        text1: '',
        isValid: [undefined, undefined, undefined, undefined, undefined, undefined],
        rules1: {
          required: true,
          type: 'email',
          pattern: /didi.com$/,
          custom: (val) => {
            return val.length >= 12
          }
        },
        messages1: {
          pattern: 'The E-mail suffix need to be didi.com.',
          custom: 'The E-mail need contain at least 12 characters.'
        },
        text2: '',
        rules2: {
          type: 'string',
          pattern: /^cube-/,
          min: 8,
          max: 10
        },
        messages2: {
          pattern: 'Please start with "cube-"'
        },
        text3: '100',
        rules3: {
          type: 'number',
          odd: true
        },
        checkList: [],
        rules4: {
          required: true
        },
        rate: 0,
        rules5: {
          min: 1,
          max: 4
        },
        captcha: '',
        rules6: {
          type: 'number',
          required: true,
          len: 6,
          captchaCheck: (val) => {
            return (resolve) => {
              setTimeout(() => {
                resolve(val === '123456')
              }, 1000)
            }
            /** or return promise:
            return new Promise((resolve) => {
              setTimeout(() => {
                resolve(val === '123456')
              }, 1000)
            })
            **/
          }
        },
        messages6: {
          captchaCheck: 'Please input "123456"'
        }
      }
    },
    created() {
      Locale.use('en-US', enLang)
      Validator.addRule('odd', (val, config, type) => {
        return Number(val) % 2 === 1
      })
      Validator.addMessage('odd', (config) => {
        return 'Please input odd.'
      })
      Validator.addType('email', (val) => {
        return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)$/i.test(val)
      })
    },
    methods: {
      validatingHandler() {
        console.log('validating')
      },
      validatedHandler() {
        console.log('validated')
      },
      submit() {
        Promise.all(Object.keys(this.$refs).map((key) => {
          return this.$refs[key].validate()
        })).then(() => {
          if (this.isValid.every(item => item)) {
            this.$createToast({
              type: 'correct',
              txt: 'Submited',
              time: 1000
            }).show()
          }
        })
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .validator-item
    box-sizing: border-box
    min-height: 70px
    .custom-msg
      color: orange
</style>
