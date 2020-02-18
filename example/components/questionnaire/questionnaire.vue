<template>
  <div class="demo-questionnaire">
    <p class="demo-questionnaire-tip cubeic-warn" v-if="tip" v-html="tip"></p>
    <cube-form
      :model="model"
      :schema="schema"
      :immediate-validate="false"
      :options="options"
      :submit-always-validate="true"
      @validate="validateHandler"
      @submit="submitHandler" />
  </div>
</template>

<script>
import transform from './transform'

export default {
  props: {
    tip: String,
    questions: {
      type: Array,
      default() {
        return []
      }
    },
    submit: {
      type: Object,
      default() {
        return {
          text: 'Submit'
        }
      }
    }
  },
  data() {
    const model = {}
    // init model value
    this.questions.forEach((question) => {
      model[question.model] = undefined
      if (question.type === 'checkbox' || question.type === 'upload') {
        model[question.model] = []
      }
    })

    return {
      validity: {},
      valid: undefined,
      model,
      options: {
        scrollToInvalidField: true,
        layout: 'classic'
      }
    }
  },
  computed: {
    schema() {
      const fields = []
      this.eachQuestion(question => {
        const field = transform(question)
        fields.push(field)
      })

      fields.push({
        type: 'submit',
        label: this.submit.text
      })
      return {
        fields
      }
    }
  },
  watch: {
    validity(newVal) {
      this.$emit('validity', newVal)
    }
  },
  methods: {
    eachQuestion(eachFn) {
      const model = this.model
      const questions = this.questions
      questions.forEach(question => {
        let skip = false
        // check on
        let on = question.on
        if (on) {
          if (typeof on === 'string') {
            on = {
              model: on
            }
          }
          const modelValue = model[on.model]
          if (on.options) {
            // 判断选项是否匹配
            if (Array.isArray(modelValue)) {
              // 交叉判断
              let isInOptions = false
              modelValue.some((val) => {
                const inOptions = on.options.indexOf(val) >= 0
                if (inOptions) {
                  isInOptions = true
                  return true
                }
              })
              skip = !isInOptions
            } else {
              skip = on.options.indexOf(modelValue) < 0
            }
          } else {
            skip = !modelValue
          }
        }
        if (!skip) {
          eachFn(question)
        }
      })
    },
    submitHandler(e) {
      e.preventDefault()
      // 校验通过，提交事件
      this.$emit('submit', this.getModel())
    },
    getModel() {
      const allModel = this.model
      const model = {}
      this.eachQuestion(question => {
        const k = question.model
        model[k] = this.processModel(question, allModel[k])
      })
      return model
    },
    processModel(question, value) {
      const model = question.model
      const casesMap = {
        city(cityVal) {
          // ["140000", "140100", "140107"]
          return cityVal
        },
        upload(uploadVal) {
          return uploadVal
        }
      }
      return casesMap[model] ? casesMap[model](value) : value
    },
    validateHandler(result) {
      this.validity = result.validity
      this.valid = result.valid
    }
  }
}
</script>
<style lang="stylus">
  .demo-questionnaire
    .cube-form
      counter-reset: cube-form-index
      .cube-form-item
        padding: 20px
    .cube-form-item
      counter-increment: cube-form-index
    .cube-form-label
      &::before
        order: -2
        margin-left: -14px
        margin-right: 4px
      &::after
        content: counter(cube-form-index) '.'
        display: block
        order: -1
        white-space: nowrap
        margin-right: 6px
    .cube-radio-group[data-col="true"]
    .cube-checkbox-group[data-col="true"]
      &::before
      &::after
        display: none
      .cube-radio
      .cube-checkbox
        padding-left 0
        padding-right 0
      .cube-radio-wrap
      .cube-checkbox-wrap
        justify-content: initial
  .demo-questionnaire-tip
    position: relative
    padding: 10px 15px 10px 30px
    font-size: 14px
    line-height: 1.5
    color: #999
    background: #f7f7f7
    &::before
      position: absolute
      margin-left: -15px
      transform: scale(1.1)
</style>
