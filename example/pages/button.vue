<template>
  <cube-page type="button-view" title="Button">
    <div slot="content">
      <form action="/">
        <cube-button-group>
          <cube-button>Button</cube-button>
          <cube-button type="submit">Submit Button</cube-button>
        </cube-button-group>
        <cube-button-group>
          <cube-button :active="true">Active Button</cube-button>
          <cube-button :disabled="true">Disabled Button</cube-button>
        </cube-button-group>
        <cube-button-group>
          <cube-button icon="cubeic-right">Button With Icon</cube-button>
        </cube-button-group>
        <cube-button-group>
          <cube-button :light="true">Light Button</cube-button>
          <cube-button :inline="true">Inline Button</cube-button>
          <cube-button :outline="true">Outline Button</cube-button>
          <cube-button :primary="true">Primary Button</cube-button>
        </cube-button-group>
        <div>
          <cube-checkbox-group v-model="buttonStyle" :horizontal="true">
            <cube-checkbox label="inline">Inline</cube-checkbox>
            <cube-checkbox label="outline">Outline</cube-checkbox>
            <cube-checkbox label="primary">Primary</cube-checkbox>
          </cube-checkbox-group>
          <cube-button-group>
            <cube-button :inline="inlineStyle" :outline="outlineStyle" :primary="primaryStyle">Demo Button</cube-button>
          </cube-button-group>
        </div>
      </form>
    </div>
  </cube-page>
</template>

<script type="text/ecmascript-6">
  import CubeButtonGroup from '../components/cube-button-group.vue'
  import CubePage from '../components/cube-page.vue'
  export default {
    data() {
      return {
        buttonStyle: ['inline', 'outline', 'primary']
      }
    },
    computed: {
      inlineStyle() {
        return this.buttonStyle.indexOf('inline') >= 0
      },
      outlineStyle() {
        return this.buttonStyle.indexOf('outline') >= 0
      },
      primaryStyle() {
        return this.buttonStyle.indexOf('primary') >= 0
      }
    },
    components: {
      CubeButtonGroup,
      CubePage
    }
  }
</script>
