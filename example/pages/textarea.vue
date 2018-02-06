<template>
  <cube-page type="textarea-view" title="Textarea" class="option-demo">
    <div slot="content">
      <div class="textarea-wrapper">
        <cube-textarea :disabled="disabled" v-model="text" :maxlength="+maxlength || 60"
                     :width="width || '300px'"></cube-textarea>
      </div>
      <div class="options">
        <div class="title">Options</div>
        <div class="option-list">
          <div class="group">
            <switch-option class="item" name="disabled" :value="disabled"
                           @update:value="updateDisabled"></switch-option>
            <input-option class="item sub" name="maxlength" :value="maxlength"
                          @update:value="updateMaxlength"></input-option>
            <input-option class="item sub" name="width" :value="width"
                          @update:value="updateWidth"></input-option>
          </div>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'
  import SwitchOption from '../components/switch-option'
  import InputOption from '../components/input-option'

  export default {
    data() {
      return {
        text: '',
        disabled: false,
        maxlength: 60,
        width: '274px'
      }
    },
    methods: {
      updateDisabled(val) {
        this.disabled = val
      },
      updateMaxlength(val) {
        this.maxlength = val
      },
      updateWidth(val) {
        this.width = val
      }
    },
    components: {
      CubeButtonGroup,
      CubePage,
      SwitchOption,
      InputOption
    }
  }
</script>


<style lang="stylus" rel="stylesheet/stylus">
  .textarea-wrapper
    margin: 30px 0
  .component-desc
    margin-top: 15px
    font-size: 14px
</style>
