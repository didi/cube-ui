## IndexList组件

`IndexList`基于`better-scroll`进行封装。提供了城市列表索引的功能。

### 单独引入

```javascript
  import { IndexList } from 'cube-ui'

  export default {
    components: {
      CubeListview: IndexList
    }
  }
```

### 示例

```html
  <template>
    <cube-index-list
      :data="data"
      :title="title"
      @select="selectItem"
      @titleClick="clickTitle"
      ></cube-index-list>
  </template>

  <script>
    const cityData = [{
      name: '★热门城市',
      cities: [
        {
          name: '北京市',
          tags: 'BEIJING,北京市',
          cityid: 1
        },
        {
          name: '上海市',
          tags: 'SHANGHAI,上海市',
          cityid: 4
        },
        {
          name: '深圳市',
          tags: 'SHENZHEN,深圳市',
          cityid: 2
        },
        {
          name: '广州市',
          tags: 'GUANGZHOU,广州市',
          cityid: 3
        },
        {
          name: '武汉市',
          tags: 'WUHAN,武汉市',
          cityid: 6
        }
      ]
    },
    {
      name: 'A',
      cities: [
        {
          name: '鞍山市',
          tags: 'ANSHAN,鞍山市',
          cityid: 64
        },
        {
          name: '安庆市',
          tags: 'ANQING,安庆市',
          cityid: 149
        },
        {
          name: '安阳市',
          tags: 'ANYANG,安阳市',
          cityid: 174
        },
        {
          name: '阿拉善盟',
          tags: 'ALASHANMENG,阿拉善盟',
          cityid: 202
        },
        {
          name: '阿坝州',
          tags: 'ABAZHOU,阿坝州',
          cityid: 290
        },
        {
          name: '安顺市',
          tags: 'ANSHUN,安顺市',
          cityid: 294
        },
        {
          name: '阿里地区',
          tags: 'ALIDIQU,阿里地区',
          cityid: 316
        },
        {
          name: '安康市',
          tags: 'ANKANG,安康市',
          cityid: 320
        },
        {
          name: '阿克苏地区',
          tags: 'AKESUDIQU,阿克苏地区',
          cityid: 348
        },
        {
          name: '阿勒泰地区',
          tags: 'ALETAIDIQU,阿勒泰地区',
          cityid: 355
        },
        {
          name: '阿拉尔市',
          tags: 'ALAER,阿拉尔市',
          cityid: 356
        }
      ]
    }]

    export default {
      data () {
        return {
          title: '当前城市: 北京市',
          cityData: []
        }
      },
      mounted () {
        setTimeout(() => {
          this.cityData = cityData
        }, 100)
      },
      computed: {
        data() {
          let ret = []
          this.cityData.forEach((cityGroup) => {
            let group = {}
            group.name = cityGroup.name
            group.items = []
            cityGroup.cities.forEach((city) => {
              let item = {}
              item.name = city.name
              item.value = city.cityid
              group.items.push(item)
            })
            ret.push(group)
          })
          return ret
        }
      },
      methods: {
        selectItem(item) {
          console.log(item)
        },
        clickTitle(title) {
          console.log(title)
        }
      }
    }
  </script>
```

## API

### Props参数配置

| 参数        | 说明           | 类型  | 默认值 |
| ------------- |:-------------:|---| ---| --- |
| title | 标题 | String | - |
| data | 需要展示的数据 | Array | [] |

### Event事件

| 事件名 | 说明 | 参数 |
| ----- | ---- | ----|
| select | 选中index-list的某一项后触发 | 被选中的选项 |
| title-click | 点击title后触发(title必须设置后才有效) | title值 |
