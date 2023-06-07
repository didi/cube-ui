## Migration Guide

Assuming you have already completed the migration from `Vue2` to `Vue3` before the migration begins; the migration of cube-ui itself is basically seamless, but there are destructive changes in its internal implementation.

### Breaking Change

- `v-model`:`value` to `modelValue`

  Since Vue3 changed the property name of `v-model` from `value` to `modelValue`, if you are using the `value` property, please change it to `modelValue`

  ```html
  - <cube-component :value="value"  @input="doSomeThing"/>
  + <cube-component :modelValue="value" @update:modelValue="doSomeThing"/>
  ```

- `slot`:`slot/slot-scope` to `v-slot`

  Since Vue 2.6.0 introduced the unified syntax `v-slot` for named and scoped slots, replacing `slot` and `slot-scope`

  ```html
  - <template slot="slotName" slot-scope="slotProps">···</template>
  + <template v-slot:slotName="slotProps">···</template>
  ```

- `create-api` has been rewritten based on `Vue3`.
- create-api has been rewritten based on Vue3 (there may be breaking changes in the future), please refer to [Create-API module]((#/en-US/docs/create-api)) for specific usage methods.
  - Currently, the `createAPI` `events` parameter is not supported and there are still some parameter placeholders.
  - The `Vue.use()` method, `componentPrefix`, and `apiPrefix` are no longer supported.
  - `$props`, `$events`, and all other `$attrs` are no longer supported.
  - `$updateProps` method is still used to update the properties.

- The current build output only supports `.mjs` files.
