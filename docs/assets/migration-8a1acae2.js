import{a as n,o,j as t}from"./index-e8a96955.js";const c={class:"markdown-body"},s=t(`<h2>迁移指南</h2><p>在迁移开始之前假设您已经完成了 <code>Vue2</code> 到 <code>Vue3</code> 的迁移工作；<code>cube-ui</code> 本身的迁移基本是无缝的，但是内部的实现有破坏性的变更。</p><h3>破坏性变更</h3><ul><li><p><code>v-model</code>:<code>value</code>改为<code>modelValue</code></p><p>由于Vue3把<code>v-model</code>的属性名从<code>value</code>改为<code>modelValue</code>，所以如果您使用了<code>value</code>属性，请改为<code>modelValue</code></p><pre><code class="language-html">- &lt;cube-component :value=&quot;value&quot;  @input=&quot;doSomeThing&quot;/&gt;
+ &lt;cube-component :modelValue=&quot;value&quot; @update:modelValue=&quot;doSomeThing&quot;/&gt;
</code></pre></li><li><p><code>slot</code>:<code>slot/slot-scope</code>改为<code>v-slot</code></p><p>由于Vue2.6.0为具名插槽和作用域插槽引入了统一语法<code>v-slot</code>，取代了<code>slot</code>和<code>slot-scope</code></p><pre><code class="language-html">- &lt;template slot=&quot;slotName&quot; slot-scope=&quot;slotProps&quot;&gt;···&lt;/template&gt;
+ &lt;template v-slot:slotName=&quot;slotProps&quot;&gt;···&lt;/template&gt;
</code></pre></li><li><p><code>create-api</code> 基于 <code>Vue3</code> 做了重写</p><pre><code class="language-js">import { render, createVNode, mergeProps, camelize, h, isVNode } from &#39;vue&#39;

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
</code></pre></li><li><p>目前的构建产物只支持 <code>.mjs</code></p></li></ul>`,4),p=[s],m={__name:"migration",setup(a,{expose:e}){return e({frontmatter:{}}),(d,r)=>(o(),n("div",c,p))}};export{m as default};
