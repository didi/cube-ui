<template>
  <cube-page type="validator-view" title="Validator" desc="">
    <div slot="content">
      <!-- <div class="validator-item">
        <cube-input v-model="text1" placeholder="邮箱"></cube-input>
        <cube-validator v-model="isValid[0]" :for="text1" :rule="rule1" :messages="messages1" :trigger="trigger"></cube-validator>
      </div>
      <div class="validator-item">
        <cube-validator v-model="isValid[1]" :for="text2" :rule="rule2" :messages="messages2" :trigger="trigger">
          <cube-input v-model="text2" placeholder="组件名"></cube-input>
          <div slot="message" class="custom-msg" slot-scope="props">
            <div v-if="(props.dirty || trigger) && !isValid[1]">
              <i class="dd-cubeic-important"></i> {{ props.message }}
              <div>
                <span v-for="(item, index) in Object.values(props.result)" :key="index" v-if="item.inValid">{{ item.message + ' ' }}</span>
              </div>
            </div>
          </div>
        </cube-validator>
      </div>
      <div class="validator-item">
        <cube-validator v-model="isValid[2]" :for="text3" :rule="rule3" :trigger="trigger">
          <cube-input v-model="text3" placeholder="数字"></cube-input>
        </cube-validator>
      </div> -->
      <div class="validator-item">
        <cube-checkbox-group v-model="checkList" :horizontal="true">
          <cube-checkbox label="1">1</cube-checkbox>
          <cube-checkbox label="2">2</cube-checkbox>
          <cube-checkbox label="3">3</cube-checkbox>
        </cube-checkbox-group>
        <cube-validator v-model="isValid[3]" :for="checkList" :rule="rule4" :trigger="trigger"></cube-validator>
      </div>

      <!-- <div class="validator-item">
        <cube-rate v-model="rate" :max="10"></cube-rate>
        <cube-validator v-model="isValid[4]" :for="rate" :rule="rule5" :trigger="trigger"></cube-validator>
      </div> -->
      <cube-button @click="submit">Submit</cube-button>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  // Add or rewrite the build-in rule, type and message.
  import { Validator } from '../../src/module'
  Validator.addRule('odd', (val, config, type) => !config || Number(val) % 2 === 1)
  Validator.addMessage('odd', '请输入奇数')
  Validator.addType('email', (val) => {
    return typeof val === 'string' && /^[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)$/i.test(val)
  })
  Validator.setLanguage('en')

  export default {
    data() {
      return {
        trigger: false,
        text1: '',
        isValid: [true, true, true, true, true],
        rule1: {
          required: true,
          type: 'email',
          pattern: /qq.com$/,
          custom: (val) => {
            return val.length >= 12
          }
        },
        messages1: {
          pattern: '邮箱后缀必须为 qq.com',
          custom: '至少 12 个字符'
        },
        text2: '',
        rule2: {
          type: 'string',
          pattern: /^cube-/,
          min: 8,
          max: 10
        },
        messages2: {
          pattern: '请以cube-开头'
        },
        text3: '100',
        rule3: {
          type: 'number',
          odd: true
        },
        checkList: [],
        rule4: {
          required: true
        },
        rate: 0,
        rule5: {
          min: 1,
          max: 8
        }
      }
    },
    methods: {
      submit() {
        if (!this.trigger) {
          this.trigger = true
        }
        if (this.isValid.every(item => item)) {
          console.log('submited')
        }
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
    height: 80px
    .custom-msg
      color: orange
</style>
