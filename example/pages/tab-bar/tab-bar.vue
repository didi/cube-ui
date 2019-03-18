<template>
  <cube-page type="tab-bar-view" title="TabBar">
    <div slot="content">
      <!-- default -->
      <div class="section">
        <cube-tab-bar
          v-model="selectedLabelDefault"
          :data="tabs"
          @click="clickHandler"
          @change="changeHandler">
        </cube-tab-bar>
      </div>
      <!-- showSlider -->
      <div class="section">
        <cube-tab-bar
          v-model="selectedLabelSlots"
          show-slider
          @click="clickHandler"
          @change="changeHandler">
          <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
          </cube-tab>
        </cube-tab-bar>
      </div>
      <!-- inline -->
      <div class="section">
        <cube-tab-bar
          v-model="selectedLabelInline"
          show-slider
          inline
          @click="clickHandler"
          @change="changeHandler">
          <cube-tab v-for="(item, index) in tabs" :icon="item.icon" :label="item.label" :key="item.label">
          </cube-tab>
        </cube-tab-bar>
      </div>
      <!-- icon-slot-->
      <div class="section">
        <cube-tab-bar v-model="selectedLabelSlotsOnly" @click="clickHandler">
          <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
            <i slot="icon" :class="item.icon"></i>
            <!-- use en empty tag to replace default slot -->
            <span></span>
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
          icon: 'cubeic-home'
        }, {
          label: 'Like',
          icon: 'cubeic-like'
        }, {
          label: 'Vip',
          icon: 'cubeic-vip'
        }, {
          label: 'Me',
          icon: 'cubeic-person'
        }]
      }
    },
    methods: {
      clickHandler (label) {
        console.log('tab was clicked', label)
      },
      changeHandler (label) {
        console.log('value has changed, now is', label)
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
      margin-bottom: 10px
      background-color: white
    .option-list
      .group
        margin-bottom: 15px
      .item
        height: 52px
        border: 1px solid rgba(0, 0, 0, .1)
        background-color: white
        border-radius: 5px
    .cube-tab-bar
      background-color: white
</style>
