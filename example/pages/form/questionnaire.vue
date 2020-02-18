<template>
  <cube-page class="page-questionnaire" title="Questionnaire">
    <demo-questionnaire
      slot="content"
      :tip="tip"
      :questions="questions"
      :submit="submit"
      @submit="submitHandler"
    />
  </cube-page>
</template>

<script type="text/ecmascript-6">
import CubePage from '../../components/cube-page.vue'
import DemoQuestionnaire from '../../components/questionnaire/questionnaire.vue'
export default {
  data() {
    return {
      tip: '请配合如实填写问卷，确保xxxx相关文案',
      questions: [
        {
          type: 'switch',
          model: 'switch',
          title: '询问是否？'
          // required: true
        },
        {
          type: 'input',
          model: 'input',
          title: '输入',
          options: {
            placeholder: '请输入'
          },
          on: 'switch',
          required: true
        },
        {
          type: 'date',
          model: 'date',
          title: '日期',
          options: {
            // min: '2020-01-01',
            // max: '2020-02-18'
          },
          required: true
        },
        {
          type: 'time',
          model: 'time',
          title: '时间',
          options: {
            min: '01:00',
            max: '23:59'
          },
          required: true
        },
        {
          type: 'select',
          model: 'select',
          title: '选择',
          options: [
            'option1',
            'option2',
            'option3'
          ],
          required: true
        },
        {
          type: 'radio',
          model: 'radio',
          title: '单选',
          options: [
            '单选1',
            '单选2',
            '单选3'
          ],
          required: true
        },
        {
          type: 'checkbox',
          model: 'checkbox',
          title: '多选',
          options: [
            '多选1',
            '多选2',
            '多选3'
          ],
          required: true
        },
        {
          type: 'textarea',
          model: 'textarea',
          title: '多行文本',
          on: {
            model: 'checkbox',
            options: ['多选1', '多选3']
          },
          required: true
        },
        {
          type: 'checkbox',
          row: true,
          model: 'checkbox2',
          title: '多选-横',
          options: [
            '多选-横1',
            '多选-横2',
            '多选-横3'
          ],
          required: true
        },
        {
          type: 'tel',
          model: 'tel',
          title: '手机号',
          options: {
            placeholder: '请输入手机号'
          },
          required: true
        },
        {
          type: 'rate',
          model: 'rate',
          title: '级别',
          options: {
            max: 10
          },
          required: true
        },
        {
          type: 'city',
          model: 'city',
          title: '城市',
          required: true
        },
        {
          type: 'upload',
          model: 'upload',
          title: '上传',
          options: {
            action: '//jsonplaceholder.typicode.com/photos/',
            max: 2
          },
          required: true
        },
        {
          type: 'agreement',
          model: 'agreement',
          options: {
            text: '请同意',
            link: {
              text: '《xx协议》',
              href: 'https://github.com/didi/cube-ui'
            },
            desc: '说明：本人承诺xx xxxxx xxx xx。'
          },
          required: true,
          errMsg: '请同意协议'
        }
      ],
      submit: {
        text: 'Submit'
      }
    }
  },
  components: {
    CubePage,
    DemoQuestionnaire
  },
  methods: {
    submitHandler(model) {
      console.log('submit', model)
    }
  }
}
</script>
<style lang="stylus">
.cube-page
  &.page-questionnaire
    .wrapper
      .content
        margin: 0
</style>
