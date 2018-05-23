<template>
  <cube-page type="radio-view" title="Radio">
    <template slot="content">
      <cube-radio-group v-model="selected" :options="options" />
      <p>selected value: {{selected}}</p>
      <cube-radio-group v-model="selected2" :options="options2" position="right" :hollow-style="true" />
      <p>selected value: {{selected2}}</p>
      <cube-radio-group v-model="selected3" :options="options3" :horizontal="true" />
      <p>selected value: {{selected3}}</p>
      <cube-radio-group>
        <cube-radio
          v-for="(option, index) in options4"
          :key="index"
          :option="option"
          v-model="selected4">
          <img :src="option.src" />
        </cube-radio>
      </cube-radio-group>
      <p>selected img: {{selected4}}</p>
    </template>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../components/cube-page.vue'

  export default {
    data() {
      return {
        selected: '',
        options: ['Option1', 'Option2'],
        selected2: 3,
        options2: [
          {
            label: 'Option1',
            value: 1
          },
          {
            label: 'Option2',
            value: 2
          },
          {
            label: 'Option3',
            value: 3,
            disabled: true
          }
        ],
        selected3: '3',
        options3: [
          {
            label: '1',
            value: '1'
          },
          {
            label: '2',
            value: '2'
          },
          {
            label: '3',
            value: '3',
            disabled: true
          }
        ],
        selected4: '1',
        options4: [
          {
            label: '1',
            value: '1',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
          },
          {
            label: '2',
            value: '2',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg'
          },
          {
            label: '3',
            value: '3',
            src: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1516805611092&di=80d0f229dd999ffa3be79d6e317832b0&imgtype=0&src=http%3A%2F%2Fimglf0.ph.126.net%2F1EnYPI5Vzo2fCkyy2GsJKg%3D%3D%2F2829667940890114965.jpg',
            disabled: true
          }
        ]
      }
    },
    components: {
      CubePage
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  .radio-view
    .content
      >
        *
          margin: 10px 0
    img
      width: 100px
</style>
