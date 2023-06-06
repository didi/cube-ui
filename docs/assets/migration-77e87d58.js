import{a as n,o,j as t}from"./index-e8a96955.js";const s={class:"markdown-body"},c=t(`<h2>Migration Guide</h2><p>Assuming you have already completed the migration from <code>Vue2</code> to <code>Vue3</code> before the migration begins; the migration of cube-ui itself is basically seamless, but there are destructive changes in its internal implementation.</p><h3>Breaking Change</h3><ul><li><p><code>v-model</code>:<code>value</code> to <code>modelValue</code></p><p>Since Vue3 changed the property name of <code>v-model</code> from <code>value</code> to <code>modelValue</code>, if you are using the <code>value</code> property, please change it to <code>modelValue</code></p><pre><code class="language-html">- &lt;cube-component :value=&quot;value&quot;  @input=&quot;doSomeThing&quot;/&gt;
+ &lt;cube-component :modelValue=&quot;value&quot; @update:modelValue=&quot;doSomeThing&quot;/&gt;
</code></pre></li><li><p><code>slot</code>:<code>slot/slot-scope</code> to <code>v-slot</code></p><p>Since Vue 2.6.0 introduced the unified syntax <code>v-slot</code> for named and scoped slots, replacing <code>slot</code> and <code>slot-scope</code></p><pre><code class="language-html">- &lt;template slot=&quot;slotName&quot; slot-scope=&quot;slotProps&quot;&gt;···&lt;/template&gt;
+ &lt;template v-slot:slotName=&quot;slotProps&quot;&gt;···&lt;/template&gt;
</code></pre></li><li><p><code>create-api</code> has been rewritten based on <code>Vue3</code>.</p><pre><code class="language-js">import { render, createVNode, mergeProps, camelize, h, isVNode } from &#39;vue&#39;

let seed = 0
const instances = []

const createComponent = (componentCtor, options, slots = null, context = null) =&gt; {
  let _options = options
  let _slots = slots ? slots(h) : null
  // todo slots
  const container = document ? document.createElement(&#39;div&#39;) : null
  const id = &#39;cube_create_component_&#39; + seed++
  const vm = createVNode({
    render() {
      return createVNode(componentCtor, {
        ..._options
      }, _slots)
    }
  }, { id })

  if (context) {
    vm.appContext = context
  }

  instances.push(vm)

  let $cre

  if (container) {
    // mounted component
    render(vm, container)

    $cre = vm.component.subTree.component.proxy

    // add $remove
    $cre[&#39;$remove&#39;] = function(cb) {
      render(null, container)
      componentCtor._instance = null
      cb &amp;&amp; cb()

      if (container &amp;&amp; document.body.contains(container)) {
        document.body.removeChild(container)
      }

      const idx = instances.findIndex(item =&gt; {
        const { id: _id } = item.props
        return id === _id
      })
      ~idx &amp;&amp; instances.splice(idx, 1)
    }

    // add $updateProps
    $cre[&#39;$updateProps&#39;] = function(props, slots, inherit = true) {
      _options = {...(inherit ? _options : {}), ...props}
      _slots = slots ? {...(_slots || {}), ...slots(h)} : null
      vm.component.proxy.$forceUpdate()
    }

    document.body.appendChild(container)
  }

  return $cre
}

function removeFromParent(vm) {
  const hasParent = !!this &amp;&amp; !!this._ &amp;&amp; isVNode(this._.vnode)

  if (hasParent) {
    const parentVnodeProps = this &amp;&amp; this._ &amp;&amp; isVNode(this._.vnode) ? this._.vnode.props : null

    this._.vnode.props = mergeProps(parentVnodeProps || {}, {
      onVnodeBeforeUnmount() {
        vm.$remove()
      }
    })
  }
}

export default function createAPI(app, Component, events, single) {
  Component.$create = app.config.globalProperties[\`$create\${camelize(Component.name.replace(&#39;cube-&#39;, &#39;&#39;)).replace(/^\\w/, ($) =&gt; $.toUpperCase())}\`] = function(options, slots = null) {
    if (single &amp;&amp; Component._instance) {
      if (options) {
        Component._instance.$updateProps(options, slots, false)
      }

      removeFromParent.call(this, Component._instance)

      return Component._instance
    }
    const vm = Component._instance = createComponent(Component, options, slots, this ? this._.appContext : null)

    removeFromParent.call(this, vm)

    return vm
  }
}
</code></pre></li><li><p>The current build output only supports <code>.mjs</code> files.</p></li></ul>`,4),a=[c],m={__name:"migration",setup(r,{expose:e}){return e({frontmatter:{}}),(i,l)=>(o(),n("div",s,a))}};export{m as default};
