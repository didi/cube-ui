## TabBar

> 1.10.0 新增

选项卡。

### 示例

如下示例相关代码在[这里](https://github.com/didi/cube-ui/tree/master/example/pages/tab-bar)

### cube-tab-bar组件

支持默认的点击高亮效果，又支持下划线跟随的效果，并且支持自定义的插槽，实现icon与label搭配的类似于app底部选项卡的样式

- 默认样式

传入如下`tabs`的数据结构便能初始化`cube-tab-bar`,必须使用`v-model`指令来选中对应的tab，v-model的参数的值必须与某一项tab的label属性对应,并且会派发`tab-click`事件，参数则是每次选中的tab对应的label值

```html
<template>
 <cube-tab-bar v-model="selectedLabelDefault"
   :data="tabs"
   @tab-click="clickHandler">
 </cube-tab-bar>
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

- 自定义插槽

实际上我们更常见的需求是图标搭配文字效果，因此 `cube-tab-bar` 组件也支持了插槽的使用方式，
注意必须搭配`cube-tab`组件作为第一层级的子组件,来包裹你自定义插槽。

```html
<template>
  <cube-tab-bar v-model="selectedLabelSlots"
                showSlider
                inline
                fixed="bottom"
                @tab-click="clickHandler">
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
      <i slot="icon" :class="item.class"></i>
      {{item.label}}
    </cube-tab>
  </cube-tab-bar>
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
同时还支持一些配置项,`showSlider`控制是否开启下划线跟随的效果，`inline`来决定icon与label是否处于一行，`fixed`来给`cube-tab-bar`进行定位，目前只支持`top/bottom`，`useTransition`控制下划线是否使用transition过渡，如示例代码所示。

### cube-tab-bar&cube-tab-panels

往往我们的需求是随着tab的切换显示不同的容器，这个时候需要搭配`cube-tab-panels`组件。`cube-tab-panels`必须嵌套`cube-tab-panel`.传入`cube-tab`与`cube-tab-panel`的label值必须一致，因为需要建立一个tab对应一个panel的关系。他们通过相同的`v-model`联动。`cube-tab-panels`组件内置了场景左右切换的过渡效果。查看效果可点击右边的`tab-basic`示例。

```html
<template>
  <cube-tab-bar v-model="selectedLabel" showSlider>
    <cube-tab v-for="(item, index) in tabs" :label="item.label" :key="index">
      <i slot="icon" :class="item.class"></i>
      {{item.label}}
    </cube-tab>
  </cube-tab-bar>
  <cube-tab-panels v-model="selectedLabel">
    <cube-tab-panel v-for="(item, index) in tabs" :label="item.label" :key="index">
      <ul>
        <li class="tab-panel-li" v-for="(hero, index) in item.heroes">
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

事实上，`cube-tab-bar`还能搭配许多其他cube-ui的组件(cube-slide,cube-scroll)来做出类似原生app布局的效果。可点击右边的`ScrollTab Demo`与`tab-composite`示例来查看效果

### Props 配置

- `cube-tab-bar` 配置

| 参数 | 说明 | 类型 | 示例 | 默认值 |
| - | - | - | - | - |
| value | 使用v-model，初始化时选中对应的tab | String/Number | - | - |
| data | 用于 `cube-tab-bar` 渲染的数据，当需要使用内置的默认插槽，此参数必传，数组的每一项是一个 Object 类型，包括 `label`，如果使用自定义插槽，可不传此值。 | Array | [{label: 1}, {label: 2}] | [] |
| fixed | 设置定位方式 | String | bottom/top | - |
| showSlider | 是否开启下划线跟随效果 | Boolean | true/false | false |
| inline | 文字与图标是否显示在一行 | Boolean | true/false | false |
| useTransition | 是否开启transition过渡 | Boolean | true/false | true |

- `cube-tab` 配置

| 参数 | 说明 | 类型 | 是否必传 | 默认值 |
| - | - | - | - | - |
| label | 用于判断哪个tab点击从而高亮 | String/Number | 是 | - |

- `cube-tab-panels` 配置

| 参数 | 说明 | 类型 | 示例 | 默认值 |
| - | - | - | - | - |
| value | 使用v-model，初始化时显示对应的panels | String/Number | - | - |
| data | 用于 `cube-tab-panels` 渲染的数据，当需要使用内置的默认插槽，此参数必传，数组的每一项是一个 Object 类型，包括 `label`，如果使用自定义插槽，可不传此值。 | Array | [{label: 1}, {label: 2}] | [] |

- `cube-tab-panel` 配置

| 参数 | 说明 | 类型 | 是否必传 | 默认值 |
| - | - | - | - | - |
| label | 用于判断panels被显示 | String/Number | 是 | - |

### 插槽

- `cube-tab`组件

| 名称 | 说明 |
| - | - |
| default | `cube-tab`渲染的文案 |
| icon | 一般是用来添加icon图标 |
### 事件

- `cube-tab-bar` 事件

| 事件名 | 说明 | 参数1 |
| - | - | - | - |
| tab-click | 当tab被点击时派发 | 点中的tab的label值 |

### 实例方法

- `cube-tab-bar` 实例方法

当该实例的`showSlider`属性设置为true，该方法才有效。

| 方法名 | 说明 | 参数类型 |
| - | - | - |
| setSliderTransform | 改变`cube-tab-bar`组件的下划线的transformX，如果传Number，会转成像素，也可以传带有单位的String | Number/String |

