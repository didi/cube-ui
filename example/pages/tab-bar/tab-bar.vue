<template>
  <cube-page type="tab-bar-view" title="TabBar">
    <div slot="content">
      <!-- default -->
      <div class="section">
        <cube-tab-bar v-model="selectedLabelDefault"
                      :data="tabs"
                      showSlider
                      @tab-click="handleClick">
        </cube-tab-bar>
      </div>
      <!-- showSlider -->
      <div class="section">
        <cube-tab-bar v-model="selectedLabelSlots"
                      showSlider
                      @tab-click="handleClick">
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
            <i slot="icon" :class="item.class"></i>
            {{item.label}}
          </cube-tab>
        </cube-tab-bar>
      </div>
      <!-- inline -->
      <div class="section">
        <cube-tab-bar v-model="selectedLabelInline"
                      showSlider
                      inline
                      @tab-click="handleClick">
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
            <i slot="icon" :class="item.class"></i>
            {{item.label}}
          </cube-tab>
        </cube-tab-bar>
      </div>
      <!-- fix bottom-->
      <div class="section">
        <cube-tab-bar v-model="selectedLabelSlotsOnly"
                      fixed="bottom"
                      inline
                      @tab-click="handleClick">
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
            <i slot="icon" :class="item.class"></i>
          </cube-tab>
        </cube-tab-bar>
      </div>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'

  export default {
    data() {
      return {
        selectedLabelDefault: 'Vip',
        selectedLabelSlots: 'Like',
        selectedLabelInline: 'Me',
        selectedLabelSlotsOnly: 'Home',
        tabs: [{
          label: 'Home',
          class: 'cubeic-home'
        }, {
          label: 'Like',
          class: 'cubeic-like'
        }, {
          label: 'Vip',
          class: 'cubeic-vip'
        }, {
          label: 'Me',
          class: 'cubeic-person'
        }]
      }
    },
    methods: {
      handleClick (label) {
        console.log('tab was clicked', label)
      }
    },
    components: {
      CubePage
    },
    watch: {
      selectedLabel (newV) {
        console.log(newV)
      }
    }
  }
</script>
<style lang="stylus" rel="stylesheet/stylus">
  @import "~@/common/stylus/variable.styl"
  .tab-bar-view
    .section
      margin-bottom 10px
      background-color white
    .option-list
      .group
        margin-bottom: 15px
      .item
        height: 52px!important
        border: 1px solid rgba(0, 0, 0, .1)
        background-color: white
        border-radius: 5px
    .cube-tab-bar
      background-color white
</style>
