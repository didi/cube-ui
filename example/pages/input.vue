<template>
  <cube-page
    type="input-view"
    title="Input"
    desc="输入框组件。相较于原生的 input 组件，本组件支持使用 v-model 对数据双向绑定，支持一键清空。">
    <div slot="content">
      <cube-input
        :type="type"
        :disabled="disabled"
        :readonly="readonly"
        :useClear="useClear"
        v-model="value"
      ></cube-input>
      <div class="value">value: {{value}}</div>
      <cube-button-group>
        <cube-button @click="handleDisabled">{{ disabled ? 'disabled=true' : 'disabled=false' }}</cube-button>
        <cube-button @click="handleReadonly">{{ readonly ? 'readonly=true' : 'readonly=false' }}</cube-button>
        <cube-button @click="handleUseclear">{{ useClear ? 'useClear=true' : 'useClear=false' }}</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'

  export default {
    data() {
      return {
        type: 'text',
        value: '',
        disabled: false,
        useClear: true,
        readonly: false
      }
    },
    methods: {
      handleDisabled() {
        this.disabled = !this.disabled
      },
      handleReadonly() {
        this.readonly = !this.readonly
      },
      handleUseclear() {
        this.useClear = !this.useClear
      }
    },
    components: {
      CubePage,
      CubeButtonGroup
    }
  }
</script>

<style lang="stylus">
  .value
    margin: 5px
</style>
