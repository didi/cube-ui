## Drawer

> 1.7.0 新增

抽屉，主要用来需要大范围层级进行选择的场景，一般情况下应该是满屏状态。

__注：__ 组件依赖父容器相对定位或者绝对定位，因为 Drawer 是绝对定位的。

### 示例

- 默认配置使用

  ```html
  <cube-button @click="showDrawer">Show Drawer</cube-button>
  <cube-drawer
    ref="drawer"
    title="请选择"
    :data="data"
    :selected-index="selectedIndex"
    @change="changeHandler"
    @select="selectHandler"
    @cancel="cancelHandler"></cube-drawer>
  ```
  ```js
  import { provinceList, cityList, areaList } from '../../data/area'
  export default {
    data() {
      return {
        selectedIndex: [],
        data: [
          provinceList,
          [],
          []
        ]
      }
    },
    methods: {
      showDrawer() {
        this.$refs.drawer.show()
      },
      changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
        // fake request
        setTimeout(() => {
          let data
          if (index === 0) {
            // procince change, get city data
            data = cityList[item.value]
          } else {
            // city change, get area data
            data = areaList[item.value]
          }
          // refill panel(index + 1) data
          this.$refs.drawer.refill(index + 1, data)
        }, 200)
      },
      selectHandler(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        console.log('cancel')
      }
    }
  }
  ```

  `title` 就是标题，可选；`data` 数据源，二维数组，长度决定了抽屉的 Panel 数，初始长度一定要确定；`selected-index` 则是初始选择的索引值；`change`、`select`、`cancel` 则是对应的三个事件：选择发生改变（选中是非最后一个 Panel 中的项的时候触发）、选中了某个值（选择了最后一个 Panel 中的项触发）、取消（点击左侧空白蒙层触发）。

  你可以在 `change` 中通过 Drawer 的 `fill` 方法更新下一个 Panel 的数据，可以是同步更新也可以是异步更新。

- 自定义使用

  你可以通过插槽来自定义结构。

  ```html
  <cube-drawer
    ref="drawer"
    :data="data"
    :selected-index="selectedIndex"
    @change="changeHandler"
    @select="selectHandler"
    @cancel="cancelHandler">
    <span slot="title">{{province.text}}</span>
    <cube-drawer-panel
      v-for="(panel, index) in data"
      :key="index"
      :index="index"
      :data="panel"
    >
      <cube-drawer-item v-for="(item, i) in panel" :item="item" :key="i" :index="i">
        <i class="cubeic-round-border"></i>
        <span>{{item.text}}</span>
      </cube-drawer-item>
    </cube-drawer-panel>
  </cube-drawer>
  ```
  ```js
  import { provinceList, cityList, areaList } from '../../data/area'
  export default {
    data() {
      return {
        province: {},
        selectedIndex: [],
        data: [
          [],
          []
        ]
      }
    },
    methods: {
      showDrawer() {
        // get radom province
        const randomIndex = Math.round(Math.random() * provinceList.length)
        const randomProvince = provinceList[randomIndex]
        this.province = randomProvince
        this.$refs.drawer.refill(0, cityList[randomProvince.value])
        this.$refs.drawer.show()
      },
      changeHandler(index, item, selectedVal, selectedIndex, selectedText) {
        setTimeout(() => {
          // city change, get area data
          const data = areaList[item.value]
          this.$refs.drawer.refill(index + 1, data)
        }, 200)
      },
      selectHandler(selectedVal, selectedIndex, selectedText) {
        this.$createDialog({
          type: 'warn',
          content: `Selected Item: <br/> - value: ${selectedVal.join(', ')} <br/> - index: ${selectedIndex.join(', ')} <br/> - text: ${selectedText.join(' ')}`,
          icon: 'cubeic-alert'
        }).show()
      },
      cancelHandler() {
        console.log('cancel')
      }
    }
  }
  ```

  可以在 `cube-drawer` 组件中使用 `cube-drawer-panel` 以及 `cube-drawer-item` 组件来达到某些情况下的自定义目的。

### Props 配置

#### CubeDrawer

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| title | 标题 | String | - | '' |
| data | 数据源 | Array | - | [] |
| selectedIndex | 初始选择索引 | Array | - | [] |
| visible<sup>1.8.1</sup> | 显示状态，是否可见。`v-model`绑定值 | Boolean | true/false | false |

- `data` 子配置项

  是一个数组，数组中每一项仍然为数组，结构类似于：

  ```js
  [
    [
      {
        text: 'text',
        value: 'value'
      },
      ...
    ],
    [
      'text',
      'text2',
      ...
    ]
  ]
  ```

  里层数组的每一项可以是对象（包含 text 和 value），也可以是纯字符串。

#### CubeDrawerPanel

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 数据源 | Array | - | [] |
| index | 该数据源在 CubeDrawer 的 data 中的索引值 | Number | - | -1 |

#### CubeDrawerItem

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| data | 数据项 | String/Object | - | '' |
| index | 该数据项在 CubeDrawerPanel 的 data 中的索引值 | Number | - | -1 |

### 事件

| 事件名 | 说明 | 参数1 | 参数2 | 参数3 | 参数4 | 参数5 |
| - | - | - | - | - | - | - |
| change | 选择发生改变（选中是非最后一个 Panel 中的项的时候触发） | 发生改变的 Panel 的索引 | 发生改变的数据项 | 已选中的值集合 | 已选中的索引集合 | 已选中的文本集合 |
| select | 选择了最后一个 Panel 中的项触发 | 已选中的值集合 | 已选中的索引集合 | 已选中的文本集合 | - | - |
| cancel | 点击左侧空白区域触发 | - | - | - | - | - |

### 实例方法

| 方法名 | 说明 | 参数1 | 参数2 | 参数3 |
| - | - | - | - | - |
| refill | 填充数据，改变某个 Panel 数据 | 要改变的 Panel 的索引 | 填充数据 | 默认选中项（可选，建议不填） |
| show | 显示 | - | - | - |
| hide | 隐藏 | - | - | - |
