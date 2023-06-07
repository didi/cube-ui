## 迁移指南

在迁移开始之前假设您已经完成了 `Vue2` 到 `Vue3` 的迁移工作；`cube-ui` 本身的迁移基本是无缝的，但是内部的实现有破坏性的变更。

### 破坏性变更

- `v-model`:`value`改为`modelValue`

  由于Vue3把`v-model`的属性名从`value`改为`modelValue`，所以如果您使用了`value`属性，请改为`modelValue`

  ```html
  - <cube-component :value="value"  @input="doSomeThing"/>
  + <cube-component :modelValue="value" @update:modelValue="doSomeThing"/>
  ```

- `slot`:`slot/slot-scope`改为`v-slot`

  由于Vue2.6.0为具名插槽和作用域插槽引入了统一语法`v-slot`，取代了`slot`和`slot-scope`

  ```html
  - <template slot="slotName" slot-scope="slotProps">···</template>
  + <template v-slot:slotName="slotProps">···</template>
  ```

- `create-api` 基于 `Vue3` 做了重写（在未来可能会有破坏性变更），具体使用方法请参考[create-api 模块](#/zh-CN/docs/create-api)
  - 目前不支持 createAPI events 参数，目前仍有参数占位
  - 目前不再支持 Vue.use() 方法，以及 `componentPrefix`、`apiPrefix`
  - 目前不再支持 `$props`,`$events` 以及其他的所有 `$attrs`
  - 更新属性仍然使用 `$updateProps` 方法

- 目前的构建产物只支持 `.mjs`
