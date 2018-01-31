<template>
  <cube-page
    type="rate-view"
    title="Rate">
    <div slot="content">
      <div class="rate-wrapper">
        <cube-rate v-model="value" :disabled="disabled" :max="max">
          <cube-rate-item v-for="n in max" :key="n" :value="value" :index="n">
            <!-- 定制星星示例 -->
            <!-- <div class="rate-item"></div> -->
          </cube-rate-item>
        </cube-rate>
        <div class="rate-text">{{ value }} star</div>
      </div>
      <cube-button-group>
        <switch-option class="item" name="disabled" :value="disabled"
                           @update:value="updateDisabled"></switch-option>
        <cube-button @click="handleChange">{{ max }} star(s)</cube-button>
      </cube-button-group>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import SwitchOption from '../components/switch-option.vue'

  export default {
    data() {
      return {
        disabled: false,
        max: 5,
        value: 3,
        image: 'https://p3.pstatp.com/large/593c0006340abbabefa0'
      }
    },
    mounted() {
      this.mutiPicker = this.$createPicker({
        title: 'choose star number',
        data: [[{
          text: '5',
          value: 5
        }, {
          text: '6',
          value: 6
        }, {
          text: '7',
          value: 7
        }, {
          text: '8',
          value: 8
        }, {
          text: '9',
          value: 9
        }, {
          text: '10',
          value: 10
        }]],
        onSelect: this.selectHandle,
        onCancel: this.cancelHandle
      })
    },
    methods: {
      updateDisabled(val) {
        this.disabled = val
      },
      handleChange() {
        this.mutiPicker.show()
      },
      selectHandle(val, index, text) {
        this.max = val[0]
      },
      cancelHandle() {}
    },
    components: {
      CubePage,
      CubeButtonGroup,
      SwitchOption
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
