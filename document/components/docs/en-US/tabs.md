## Tabs

> New in 1.10.0

Implementing a function similar to the fixed navigation bar at the bottom of the app which can switch between different container views. It consists of both `cube-tab-nav` and `cube-tab-container` component.

### Example

The following demo code is [here](https://github.com/didi/cube-ui/tree/master/example/pages/tabs).

### cube-tab-nav

`cube-tab-nav` supports click highlighting, underscore follow-up effects, and custom slots for icon-label-like app-navigation styles.

- Basic usage

You can initialize `cube-tab-nav` by passing in the data structure of `tabs` as follows. You must use the `v-model` directive to select the corresponding tab. The value of the v-model argument must correspond to the label attribute of a tab-nav-item.
And it will dispatch `tab-click` event. The parameter is the label value corresponding to each selected tab.

```html
<template>
 <cube-tab-nav v-model="selectedLabelDefault"
   :data="tabs"
   @tab-click="clickHandler">
 </cube-tab-nav>
</template>
```

```js
export default {
    data() {
      return {
        selectedLabelDefault: 'Vip'
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
        //  if you clicked home tab, then print 'Home'
        console.log(label)
      }
    }
  }
```

- Custom slot

In fact, our common needs are icons and text effects which looks like app navigation styles, so the `cube-tab-nav` component also supports the use of slots.
Note that you must wrap your custom slot with the `cube-tab-nav-item` component。

```html
<template>
  <cube-tab-nav v-model="selectedLabelSlots"
                showTabBar
                inline
                fixed="bottom"
                @tab-click="clickHandler">
    <cube-tab-nav-item v-for="(item, index) in tabs" :label="item.label" :key="index">
      <i slot="icon" :class="item.class"></i>
      {{item.label}}
    </cube-tab-nav-item>
  </cube-tab-nav>
</template>
```

```js
export default {
    data() {
      return {
        selectedLabelSlots: 'Like'
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
      clickHandler (label) {
        //  if you clicked home tab, then print 'Home'
        console.log(label)
      }
    }
  }
```
At the same time, `cube-tab-nav` also supports other configurations, `showTabBar` controls whether to turn on the effect of underscore, `inline` to determine whether the icon and label are in a line, `fixed` to locate `cube-tab-nav`, currently only supports `top/bottom`, as shown in the sample code.

### cube-tab-nav&cube-tab-container

Usually, we want to display different containers with the tab switch, So we need to use the `cube-tab-container` component. The label prop that is passing to  the `cube-tab-nav-item` and `cube-tab-container-item` must be the same, They are Linked through the same `v-model`. The `cube-tab-container` must nest the `cube-tab-container-item` component to create the relationship between a tab with a container. The `cube-tab-container-item` component has a built-in transition effect for switching. The effect is displayed on the `tabs-basic` example on the right

```html
<template>
  <cube-tab-nav v-model="selectedLabel" showTabBar>
    <cube-tab-nav-item v-for="(item, index) in tabs" :label="item.label" :key="index">
      <i slot="icon" :class="item.class"></i>
      {{item.label}}
    </cube-tab-nav-item>
  </cube-tab-nav>
  <cube-tab-container v-model="selectedLabel">
    <cube-tab-container-item v-for="(item, index) in tabs" :label="item.label" :key="index">
      <ul>
        <li class="tab-container-item-li" v-for="(hero, index) in item.heroes">
          {{hero}}
        </li>
      </ul>
    </cube-tab-container-item>
  </cube-tab-container>
</template>
```

```js
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
  }
}
```

```js
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
  }
}
```

In fact, `cube-tab-nav` can be combined with many other cube-ui's components (such as: `cube-scroll`, `cube-slide`) to make a similar effect to the layout of native apps. Click on the `tabs-composite` example on the right to see the effect

### Props

- `cube-tab-nav`

| Attribute | Description | Type | Demo | Default |
| - | - | - | - | - |
| value | Use v-model to select the corresponding tab when initializing. | String/Number | - | - |
| data | For data rendered with `cube-tab-nav`, when using the built-in default slot, this parameter must be passed. Each item of the array is an Object type, including `label`.  If a custom slot is used, this value may not be passed. | Array | [{label: 1}, {label: 2}] | [] |
| fixed | Set position | String | bottom/top | - |
| showTabBar | Whether to turn on the underscore follow effect | Boolean | true/false | false |
| inline | Whether text and icons are displayed on one line | Boolean | true/false | false |

- `cube-tab-nav-item`

| Attribute | Description | Type | Needed | Default |
| - | - | - | - | - |
| label | Use it to determine which tab is clicked | String/Number | yes | - |

- `cube-tab-container`

| Attribute | Description | Type | Demo | Default |
| - | - | - | - | - |
| value | Use v-model to display the corresponding container at initialization | String/Number | - | - |
| data | For data rendered with `cube-tab-container`, when using the built-in default slot, this parameter must be passed. Each item of the array is an Object type, including `label`.  If a custom slot is used, this value may not be passed. | Array | [{label: 1}, {label: 2}] | [] |

- `cube-tab-container-item`

| Attribute | Description | Type | Needed | Default |
| - | - | - | - | - |
| label | determine that the container is displayed | String/Number | yes | - |

### Slot

- `cube-tab-nav-item`

| Attribute | Description |
| - | - |
| default | `cube-tab-nav`'s text |
| icon | Generally used to add icon |
### Events

- `cube-tab-nav`

| Event Name | Description | parameter |
| - | - | - | - |
| tab-click | Dispatched when the tab is clicked | The label value of the tab which is selected |

### Instance methods

- `cube-tab-nav`

This method works when the instance's `showTabBar` property is set to true.

| Method name | Description | Parameter Type |
| - | - | - |
| setTabBarTransform | Change the underscore's transformX of the `cube-tab-nav` component (you must set `showTabBar` to true) | Number |

