<template>
  <cube-page
    type="rate-view"
    title="Rate"
    class="option-demo">
    <div slot="content">
      <div class="rate-wrapper">
        <cube-rate v-model="value" :disabled="disabled" :max="max">
          <cube-rate-item v-for="n in max" :key="n" :value="value" :index="n">
            <div class="rate-item" v-if="customStar"></div>
          </cube-rate-item>
        </cube-rate>
      </div>
      <div class="options">
        <div class="title">Options</div>
        <div class="option-list">
          <switch-option class="item" name="customStar" :value="customStar"
                            @update:value="updateRateItem"></switch-option>
          <switch-option class="item" name="disabled" :value="disabled"
                            @update:value="updateDisabled"></switch-option>
          <select-option class="item" name="star numbers" :value="max"
                            @update:value="updateStarNumbers" :options="options"></select-option>
        </div>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import SwitchOption from '../components/switch-option.vue'
  import SelectOption from '../components/select-option'

  export default {
    data() {
      return {
        disabled: false,
        max: 5,
        value: 3,
        image: 'https://p3.pstatp.com/large/593c0006340abbabefa0',
        customStar: false,
        options: [
          {
            text: '5',
            value: 5
          },
          {
            text: '10',
            value: 10
          }
        ]
      }
    },
    methods: {
      updateDisabled(val) {
        this.disabled = val
      },
      updateStarNumbers(val) {
        this.max = val
      },
      updateRateItem(val) {
        this.customStar = val
      }
    },
    components: {
      CubePage,
      CubeButtonGroup,
      SwitchOption,
      SelectOption
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .rate-wrapper
    margin: 30px 0
    text-align: center
    .rate-text
      text-align: center
      margin-top: 25px
      vertical-align: middle
    .rate-item
      width: 100%
      height: 100%
      background-size: 100%
      background-color: grey
  .cube-rate-item.active
    .rate-item
      background-color: orange

</style>
