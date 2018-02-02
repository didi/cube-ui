<template>
  <cube-page
    type="input-view"
    title="Input"
    class="option-demo">
    <div slot="content">
      <cube-input
        :type="type"
        placeholder="please type here..."
        :disabled="disabled"
        :readonly="readonly"
        :use-clear="useClear"
        v-model="value"
      ></cube-input>
      <div class="value">value: {{value}}</div>
      <div class="options">
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="disabled" :value="disabled"
                            @update:value="updateDisabled"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="readonly" :value="readonly"
                            @update:value="updateReadonly"></switch-option>
          </div>
          <div class="group">
            <switch-option class="item" name="useClear" :value="useClear"
                            @update:value="updateUseClear"></switch-option>
          </div>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option'

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
      updateDisabled(val) {
        this.disabled = val
      },
      updateReadonly(val) {
        this.readonly = val
      },
      updateUseClear(val) {
        this.useClear = val
      }
    },
    components: {
      CubePage,
      SwitchOption
    }
  }
</script>

<style lang="stylus">
.cube-page.option-demo.input-view .wrapper
  background-color: #efeff4
  .group
    background-color: white
  .value
    margin: 15px 5px
</style>
