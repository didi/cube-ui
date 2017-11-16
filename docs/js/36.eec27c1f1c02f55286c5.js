webpackJsonp([36],{450:function(t,s,a){t.exports=a(507)},507:function(t,s,a){var n=a(11)(null,a(508),null,null,null);t.exports=n.exports},508:function(t,s){t.exports={render:function(){var t=this,s=t.$createElement;t._self._c;return t._m(0)},staticRenderFns:[function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("section",[a("h2",[t._v("IndexList")]),t._v(" "),a("p",[a("code",{pre:!0},[t._v("IndexList")]),t._v(" component, , which is also encapsulated based on "),a("code",{pre:!0},[t._v("better-scroll")]),t._v(",  provides functions of index lists.")]),t._v(" "),a("h3",[t._v("Example")]),t._v(" "),a("ul",[a("li",[a("p",[t._v("Basic usage")]),t._v(" "),a("p",[t._v("Construct data like "),a("code",{pre:!0},[t._v("cityData")]),t._v(" in the example below and pass it into "),a("code",{pre:!0},[t._v("data")]),t._v(" in "),a("code",{pre:!0},[t._v("cube-index-list")]),t._v(" component.")]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-html"}},[a("span",{attrs:{class:"hljs-tag"}},[t._v("<"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-index-list")]),t._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":data")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"cityData"')]),t._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v(":title")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"title"')]),t._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@select")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"selectItem"')]),t._v("\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("@title-click")]),t._v("="),a("span",{attrs:{class:"hljs-string"}},[t._v('"clickTitle"')]),t._v(">")]),a("span",{attrs:{class:"hljs-tag"}},[t._v("</"),a("span",{attrs:{class:"hljs-name"}},[t._v("cube-index-list")]),t._v(">")]),t._v("\n")])]),t._v(" "),a("pre",{pre:!0},[a("code",{attrs:{"v-pre":"",class:"language-javascript"}},[a("span",{attrs:{class:"hljs-keyword"}},[t._v("const")]),t._v(" cityData = [\n  {\n    "),a("span",{attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v('"★Hot City"')]),t._v(",\n    "),a("span",{attrs:{class:"hljs-string"}},[t._v('"items"')]),t._v(": [\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v('"BEIJING"')]),t._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("1")]),t._v("\n      },\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v('"SHANGHAI"')]),t._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("2")]),t._v("\n      }\n    ]\n  },\n  {\n    "),a("span",{attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v('"A"')]),t._v(",\n    "),a("span",{attrs:{class:"hljs-string"}},[t._v('"items"')]),t._v(": [\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v('"ANSHAN"')]),t._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("3")]),t._v("\n      },\n      {\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"name"')]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v('"ANQING"')]),t._v(",\n        "),a("span",{attrs:{class:"hljs-string"}},[t._v('"value"')]),t._v(": "),a("span",{attrs:{class:"hljs-number"}},[t._v("4")]),t._v("\n      }\n    ]\n  }\n]\n\n"),a("span",{attrs:{class:"hljs-keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("default")]),t._v(" {\n  data() {\n    "),a("span",{attrs:{class:"hljs-keyword"}},[t._v("return")]),t._v(" {\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("title")]),t._v(": "),a("span",{attrs:{class:"hljs-string"}},[t._v("'Current City: BEIJING'")]),t._v(",\n      "),a("span",{attrs:{class:"hljs-attr"}},[t._v("cityData")]),t._v(": cityData\n    }\n  },\n  "),a("span",{attrs:{class:"hljs-attr"}},[t._v("methods")]),t._v(": {\n    selectItem(item) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(item.name)\n    },\n    clickTitle(title) {\n      "),a("span",{attrs:{class:"hljs-built_in"}},[t._v("console")]),t._v(".log(title)\n    }\n  }\n}\n")])])])]),t._v(" "),a("h3",[t._v("Props configuration")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Attribute")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")]),t._v(" "),a("th",[t._v("Default")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("title")]),t._v(" "),a("td",[t._v("title")]),t._v(" "),a("td",[t._v("String")]),t._v(" "),a("td",[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("data")]),t._v(" "),a("td",[t._v("data to be displayed")]),t._v(" "),a("td",[t._v("Array")]),t._v(" "),a("td",[t._v("[]")])])])]),t._v(" "),a("ul",[a("li",[a("code",{pre:!0},[t._v("data")]),t._v(" sub configuration")])]),t._v(" "),a("p",[a("code",{pre:!0},[t._v("data")]),t._v(" is an array, which represents multiple groups of data and each of them can be configured：")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Attribute")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Type")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("name")]),t._v(" "),a("td",[t._v("the name of the group")]),t._v(" "),a("td",[t._v("String")])]),t._v(" "),a("tr",[a("td",[t._v("items")]),t._v(" "),a("td",[t._v("data of current group")]),t._v(" "),a("td",[t._v("Array")])])])]),t._v(" "),a("p",[t._v("Each item of "),a("code",{pre:!0},[t._v("items")]),t._v(" array must be an object that must contains the "),a("code",{pre:!0},[t._v("name")]),t._v(" attribute which is used for displaying the content; For example:  "),a("code",{pre:!0},[t._v("items")]),t._v(": "),a("code",{pre:!0},[t._v("[{name: 'xx', ...}, ...]")])]),t._v(" "),a("h3",[t._v("Events")]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("Event Name")]),t._v(" "),a("th",[t._v("Description")]),t._v(" "),a("th",[t._v("Parameters")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("select")]),t._v(" "),a("td",[t._v("triggers when clicking one of the items in IndexList")]),t._v(" "),a("td",[t._v("data of the item")])]),t._v(" "),a("tr",[a("td",[t._v("title-click")]),t._v(" "),a("td",[t._v("triggers when clicking title(valid only if title has been configured)")]),t._v(" "),a("td",[t._v("the value of title")])])])])])}]}}});