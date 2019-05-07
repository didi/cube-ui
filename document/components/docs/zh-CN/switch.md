## Switch 滑动开关

> 1.4.0 新增

滑动开关，用于切换 on/off 状态。

### 示例

- 基本用法

  ```html
  <cube-switch v-model="value">
    Switch
  </cube-switch>
  ```
  ```js
  export default {
    data() {
      return {
        value: true
      }
    }
  }
  ```

  `value`值`true`对应着 on 状态（开） ，`value`值`false`对应着 off 状态（关）。

- 禁用状态

  ```html
  <cube-switch v-model="value" :disabled="true">
    Disbled Switch
  </cube-switch>
  ```

### Props 配置

| 参数 | 说明 | 类型 | 可选值 | 默认值 |
| - | - | - | - | - |
| v-model | 开关状态，双向数据绑定 | Boolean | true/false | false |
| disabled | 是否禁用 | Boolean | true/false | false |

### 事件

| 事件名 | 说明 | 参数 |
| - | - | - |
| input | 绑定值变化时触发 | 更新后的绑定值 |
