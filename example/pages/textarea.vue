<template>
  <cube-page type="textarea-view" title="Textarea" class="option-demo">
    <div slot="content">
      <div class="textarea-wrapper">
        <cube-textarea
          v-model="text"
          :disabled="disabled"
          :maxlength="+maxlength || 60"
          :indicator="showIndicator ? indicator : showIndicator"
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
          <div class="group">
            <switch-option class="item" name="indicator" :value="showIndicator"
                           @update:value="updateIndicator"></switch-option>
            <switch-option v-if="showIndicator" class="item" name="negative" :value="indicator.negative"
                           @update:value="updateIndicatorNegative"></switch-option>
            <switch-option v-if="showIndicator" class="item" name="remain" :value="indicator.remain"
                           @update:value="updateIndicatorRemain"></switch-option>
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
        width: '274px',
        showIndicator: true,
        indicator: {
          negative: true,
          remain: true
        }
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
      },
      updateIndicator(val) {
        this.showIndicator = val
      },
      updateIndicatorNegative(val) {
        this.indicator.negative = val
      },
      updateIndicatorRemain(val) {
        this.indicator.remain = val
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
