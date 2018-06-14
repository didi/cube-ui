<template>
  <cube-page type="tab-nav-view" title="TabNav">
    <div slot="content">
      <!-- default -->
      <div class="section">
        <cube-tab-nav v-model="selectedLabelDefault"
                      :data="tabs"
                      showSlider
                      @tab-click="handleClick">
        </cube-tab-nav>
      </div>
      <!-- showSlider -->
      <div class="section">
        <cube-tab-nav v-model="selectedLabelSlots"
                      showSlider
                      @tab-click="handleClick">
          <cube-tab-nav-item v-for="(item, index) in tabs" :label="item.label" :key="index">
            <i slot="icon" :class="item.class"></i>
            {{item.label}}
          </cube-tab-nav-item>
        </cube-tab-nav>
      </div>
      <!-- inline -->
      <div class="section">
        <cube-tab-nav v-model="selectedLabelInline"
                      showSlider
                      inline
                      @tab-click="handleClick">
          <cube-tab-nav-item v-for="(item, index) in tabs" :label="item.label" :key="index">
            <i slot="icon" :class="item.class"></i>
            {{item.label}}
          </cube-tab-nav-item>
        </cube-tab-nav>
      </div>
      <!-- fix bottom-->
      <div class="section">
        <cube-tab-nav v-model="selectedLabelSlotsOnly"
                      fixed="bottom"
                      inline
                      @tab-click="handleClick">
          <cube-tab-nav-item v-for="(item, index) in tabs" :label="item.label" :key="index">
            <i slot="icon" :class="item.class"></i>
          </cube-tab-nav-item>
        </cube-tab-nav>
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
        console.log('tabs was clicked', label)
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
  .section
    margin-bottom 10px
  .option-list
    .group
      margin-bottom: 15px
    .item
      height: 52px!important
      border: 1px solid rgba(0, 0, 0, .1)
      background-color: white
      border-radius: 5px
</style>
