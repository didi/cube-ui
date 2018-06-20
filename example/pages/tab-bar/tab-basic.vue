<template>
  <cube-page type="tabs-basic-view" title="tab-basic">
    <div slot="content">
      <cube-tab-bar v-model="selectedLabel" showSlider>
        <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
          <i slot="icon" :class="item.class"></i>
          {{item.label}}
        </cube-tab>
      </cube-tab-bar>
      <cube-tab-panels v-model="selectedLabel">
        <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="index">
          <ul>
            <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">
              {{hero}}
            </li>
          </ul>
        </cube-tab-panel>
      </cube-tab-panels>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubePage from '../../components/cube-page.vue'
  export default {
    data() {
      return {
        selectedLabel: '天辉',
        tabs: [{
          label: '天辉',
          class: 'cubeic-like',
          heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
        }, {
          label: '夜魇',
          class: 'cubeic-star',
          heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
        }]
      }
    },
    computed: {
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
  .tabs-basic-view
    .cube-tab-bar
      background-color #fff
    .cube-tab-panels
      background-color #fff
    .tab-panel-li
      padding 0 16px
      height 40px
      line-height 40px
      border-top 1px solid #eee

</style>
