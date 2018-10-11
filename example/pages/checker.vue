<template>
  <cube-page type="checker-view" title="Checker">
    <template slot="content">
      <p>default usage</p>
      <br>
      <cube-checker
        v-model="checkboxCheckerList"
        :options="checkboxOptions" />
      <br>
      <p>checker value : {{checkboxCheckerList}}</p>
      <br><br>

      <p>type: radio</p>
      <br>
      <cube-checker
        v-model="checkerValue"
        :options="radioOptions"
        type="radio" />
      <br>
      <p>checker value : {{checkerValue}}</p>
      <br><br>

      <p>use slot</p>
      <br>
      <cube-checker
        v-model="checkerValue"
        :options="radioOptions"
        type="radio">
        <cube-checker-item
          v-for="item in radioOptions"
          :key="item.value"
          :option="item">
          <span class="orange"><i class="cubeic-alert"></i>{{item.text}}</span>
        </cube-checker-item>
      </cube-checker>
      <br>
      <p>checker value : {{checkerValue}}</p>
      <br><br>

      <p>set min and max</p>
      <br>
      <cube-checker
        v-model="defaultCheckerList"
        :options="checkboxOptions"
        :min="1"
        :max="2"/>
      <br>
      <p>checker value : {{defaultCheckerList}}  (min: 1 max: 2)</p>
      <br><br>


    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        checkerValue: '',
        radioOptions: [
          {
            value: 0,
            text: 'AAAAA'
          },
          {
            value: 1,
            text: 'BBBBB'
          }
        ],
        checkboxCheckerList: [],
        checkboxOptions: [
          {
            value: 1,
            text: 'red'
          },
          {
            value: 2,
            text: 'yellow'
          },
          {
            value: 3,
            text: 'blue'
          },
          {
            value: 4,
            text: 'green'
          }
        ],
        defaultCheckerList: [3]
      }
    },
    components: {
      CubePage
    },
    methods: {
      radioClick(value) {
        console.log(value)
        this.radioCheckerList = [value]
      }
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .checker-group-view
    .content
      >
        *
          margin: 10px 0
  .checker-item
    display: inline-block
    vertical-align: top
    text-align: center
    padding: 8px 10px
    margin-right: 10px
    color: #fff
    border-radius: 4px
    position: relative
    background: #fc9153
    &:active
      background: #e8864c
  .orange
    font-weight: 700
    color: #ff8000
</style>
