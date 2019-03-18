## TabBar

> New in 1.10.0+

Implementing the function of tab switching.

### Example

The following demo code is [here](https://github.com/didi/cube-ui/tree/master/example/pages/tab-bar).

### CubeTabBar

`cube-tab-bar` supports click highlighting, underscore follow-up effects, and custom slots for icon-label-like app-navigation styles.

- Basic usage

  You can initialize `cube-tab-bar` by passing in the data structure of `tabs` as follows. You must use the `v-model` directive to select the corresponding tab. The value of the v-model argument must correspond to the `label`(after 1.12.5, use `value`) attribute of a tab in `cube-tab-bar`. The icon attribute is used as a class selector, which is generally used with icon-font class. It will dispatch `click` and `change` event at the proper time. The parameter is the `label`(after 1.12.5, is `value`) value corresponding to each selected tab.

  ```html
  <template>
    <cube-tab-bar
      v-model="selectedLabelDefault"
      :data="tabs"
      @click="clickHandler"
      @change="changeHandler">
    </cube-tab-bar>
  </template>
  ```

  ```js
  export default {
    data() {
      return {
        selectedLabelDefault: 'Vip',
        tabs: [{
          label: 'Home'
        }, {
          label: 'Like'
        }, {
          label: 'Vip'
        }, {
          label: 'Me'
        }]
      }
    },
    methods: {
      clickHandler (label) {
        // if you clicked home tab, then print 'Home'
        console.log(label)
      },
      changeHandler (label) {
        // if you clicked different tab, this methods can be emitted
      }
    }
  }
  ```

- Custom slot

  In fact, we always want to display icons and text effects which looks like app navigation styles, so the `cube-tab-bar` component also supports the use of slot. Note that you must use the `cube-tab` component as a sub-component of the first level to wrap your custom slot.

  ```html
  <template>
    <cube-tab-bar
      v-model="selectedLabelSlots"
      show-slider
      inline
      @click="clickHandler">
      <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
        <!-- icon slot -->
        <i slot="icon" :class="item.icon"></i>
        <!-- default slot -->
        {{item.label}}
      </cube-tab>
    </cube-tab-bar>
  </template>
  ```

  ```js
  export default {
    data () {
      return {
        selectedLabelSlots: 'Like',
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
        // if you clicked home tab, then print 'Home'
        console.log(label)
      }
    }
  }
  ```
  At the same time, `cube-tab-bar` also supports other configurations, `showSlider` controls whether to turn on the effect of underscore, `inline` to determine whether the icon and label are in a line, `useTransition` controls whether the underscore use transition, as shown in the sample code.

### CubeTabBar & CubeTabPanels

Usually, our requirement is to display different panel as tabs are switched, so we need to use the `cube-tab-panels` component. `cube-tab-panels` must be nested with `cube-tab-panel`. The `label`(after 1.12.5, use `value`) values passed to `cube-tab` and `cube-tab-panel` must be the same, because it is necessary to create the relationship between tab with panel. They are linked by the same `v-model`.To see the effect, click on the `tab-basic` demo on the right.

```html
<template>
  <cube-tab-bar v-model="selectedLabel" show-slider>
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <i slot="icon" :icon="item.icon"></i>
      {{item.label}}
    </cube-tab>
  </cube-tab-bar>
  <cube-tab-panels v-model="selectedLabel">
    <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="item.label">
      <ul>
        <li class="tab-panel-li" v-for="(hero, index) in item.heroes" :key="index">
          {{hero}}
        </li>
      </ul>
    </cube-tab-panel>
  </cube-tab-panels>
</template>
```

```js
export default {
  data() {
    return {
      selectedLabel: '天辉',
      tabs: [{
        label: '天辉',
        icon: 'cubeic-like',
        heroes: ['敌法师', '卓尔游侠', '主宰', '米拉娜', '变体精灵', '幻影长矛手', '复仇之魂', '力丸', '矮人狙击手', '圣堂刺客', '露娜', '赏金猎人', '熊战士']
      }, {
        label: '夜魇',
        icon: 'cubeic-star',
        heroes: ['血魔', '影魔', '剃刀', '剧毒术士', '虚空假面', '幻影刺客', '冥界亚龙', '克林克兹', '育母蜘蛛', '编织者', '幽鬼', '司夜刺客', '米波']
      }]
    }
  }
}
```

In fact, `cube-tab-bar` can be combined with many other cube-ui's components (such as: `cube-scroll`, `cube-slide`) to make a similar effect to the layout of native apps. Click on the `ScrollTab Demo` and `tab-composite` example on the right to see the effect.

### Props

- CubeTabBar

  | Attribute | Description | Type | Demo | Default |
  | - | - | - | - | - |
  | value | Use v-model to select the corresponding tab when initializing. | String/Number | - | - |
  | data | For data rendered with `cube-tab-bar`, when using the built-in default slot, this parameter must be passed. Each item of the array is an Object type, including `label`, `icon` and `value`<sup>1.12.5+</sup>.  If a custom slot is used, this value may not be passed | Array | [{label: 1, value: 1, icon: 'cubeic-like'}, {label: 2, value: 2, icon: 'cubeic-like'}] | [] |
  | showSlider | Whether to turn on the underscore follow effect | Boolean | true/false | false |
  | inline | Whether text and icons are displayed on one line | Boolean | true/false | false |
  | useTransition | Whether to use transition | Boolean | true/false | true |

- CubeTab

  | Attribute | Description | Type | Needed | Default |
  | - | - | - | - | - |
  | label | Use it to determine which tab is clicked before 1.12.5, after 1.12.5 just use to display text by default | String/Number | yes | - |
  | value | Use it to determine which tab is clicked<sup>1.12.5+</sup> | String/Number | no | `label` value |

- CubeTabPanels

  | Attribute | Description | Type | Demo | Default |
  | - | - | - | - | - |
  | value | Use v-model to display the corresponding panels at initialization | String/Number | - | - |
  | data | For data rendered with `cube-tab-panels`, when using the built-in default slot, this parameter must be passed. Each item of the array is an Object type, including `label` and `value`<sup>1.12.5+</sup>.  If a custom slot is used, this value may not be passed | Array | [{label: 1, value: 1}, {label: 2, value: 2}] | [] |

- CubeTabPanel

  | Attribute | Description | Type | Needed | Default |
  | - | - | - | - | - |
  | label | determine that the panels is displayed | String/Number | yes | - |
  | value | the key of panel, use it to determined selected value<sup>1.12.5+</sup> | String/Number | no | `label` value |

### Slot

- CubeTab

  | Attribute | Description |
  | - | - |
  | default | `cube-tab`'s text |
  | icon | Generally used to display icon |

### Events

- CubeTabBar

  | Event Name | Description | parameter |
  | - | - | - | - |
  | click | Dispatched when the tab is clicked | The `label`/`value`<sup>1.12.5+</sup> value of the tab which is selected |
  | change | Dispatched when tab changed | The `label`/`value`<sup>1.12.5+</sup> value of the tab which is selected |

### Instance methods

- CubeTabBar

  This method works when the instance's `showSlider` property is set to true.

  | Method name | Description | Parameter Type |
  | - | - | - |
  | setSliderTransform | Change the underscore's transformX of the `cube-tab-bar` component. If you pass Number, it will be converted into a pixel, or you can pass a String with units | Number/String |

