## Drawer

Drawer, this component is used to select item in many items, it used full-page panels to interaction normally.

### Demo

- Default usage

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
      changeHandler(index, item, selectedVal, selectedIndex) {
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
      selectHandler(selectedVal, selectedIndex) {
        console.log('select', selectedVal, selectedIndex)
      },
      cancelHandler() {
        console.log('cancel')
      }
    }
  }
  ```

  `title` is the drawer's title, optional; `data` source, an array with array items; `selected-index` is the initial index of the selected value; `change`、`select`、`cancel` are events: when selected item changed (the selected item is not in the last Panel)、when selected one item (the item is in the last Panel)、cancel (when clicked the left empty area).

  You can use Drawer's `fill` method to update next Panel's data.

- Custom usage

  You can use slots to define your own HTML structure.

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
      changeHandler(index, item, selectedVal, selectedIndex) {
        setTimeout(() => {
          // city change, get area data
          const data = areaList[item.value]
          this.$refs.drawer.refill(index + 1, data)
        }, 200)
      },
      selectHandler(selectedVal, selectedIndex) {
        console.log('select', selectedVal, selectedIndex)
      },
      cancelHandler() {
        console.log('cancel')
      }
    }
  }
  ```

  You can use `cube-drawer-panel` and `cube-drawer-item` in `cube-drawer`.

### Props

#### CubeDrawer

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| title | title | String | - | '' |
| data | data source | Array | - | [] |
| selected-index | initial selected index | Array | - | [] |

- `data` sub configuration

  It is an array and it's items is Array too, eg:

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

#### CubeDrawerPanel

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | data source | Array | - | [] |
| index | the data source index in CubeDrawer's data | Number | - | -1 |

#### CubeDrawerItem

| Attribute | Description | Type | Accepted Values | Default |
| - | - | - | - | - |
| data | item data | String/Object | - | '' |
| index | the item index in CubeDrawerPanel's data | Number | - | -1 |

### Events

| Event Name | Description | Parameters 1 | Parameters 2 | Parameters 3 | Parameters 4 |
| - | - | - | - | - | - |
| change | when selected item changed (the selected item is not in the last Panel) | current Panel index | changed item | selectedVal: Array, selected item values of each panels | selectedIndex: Array, selected indexes of each panels |
| select | when selected one item (the item is in the last Panel) | selectedVal: Array, selected item values of each panels | selectedIndex: Array, selected indexes of each panels | - | - |
| cancel | when clicked the left empty area | - | - | - | - |

### Instance methods

| Method name | Description | Parameters 1 | Parameters 2 | Parameters 3 |
| - | - | - | - | - |
| show | show | - | - | - |
| hide | hide | - | - | - |
| refill | refill data, change one Panel's data source | the Panel index | the data source | default selected index (Optional, recommended do not specify a value) |
