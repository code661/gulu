(window.webpackJsonp=window.webpackJsonp||[]).push([[43],{308:function(t,s,a){"use strict";a.r(s);var n=a(1),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),a("p",[t._v("轻量级的信息反馈组件，可在页面顶部、中间和底部居中显示，可自动消失。常用于主动操作后的反馈提示。")]),t._v(" "),t._m(1),t._v(" "),t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("有三个弹出位置选择，分别为 top、middle、bottom。默认位置为 top")]),t._v(" "),a("ClientOnly",[a("toast-demo-1")],1),t._v(" "),t._m(6),t._m(7),t._v(" "),a("p",[t._v("可以添加关闭按钮，或设置关闭时间，默认 5 秒关闭。")]),t._v(" "),t._m(8),t._v(" "),a("ClientOnly",[a("toast-demo-2")],1),t._v(" "),t._m(9),t._m(10),t._v(" "),t._m(11),t._v(" "),a("ClientOnly",[a("toast-demo-3")],1),t._v(" "),t._m(12),t._m(13),t._v(" "),t._m(14),t._v(" "),t._m(15),t._v(" "),a("ClientOnly",[a("toast-demo-4")],1),t._v(" "),t._m(16),t._m(17),t._v(" "),t._m(18),t._v(" "),t._m(19)],1)},[function(){var t=this.$createElement,s=this._self._c||t;return s("h1",{attrs:{id:"toast-提示弹出框"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#toast-提示弹出框","aria-hidden":"true"}},[this._v("#")]),this._v(" Toast - 提示弹出框")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"组件概述"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#组件概述","aria-hidden":"true"}},[this._v("#")]),this._v(" 组件概述")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("Toast 组件的实现应用了 Vue 的插件，在 Vue.prototype 中添加了全局方法 "),s("code",[this._v("$toast")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"tip custom-block"},[s("p",{staticClass:"custom-block-title"},[this._v("TIP")]),this._v(" "),s("p",[this._v("调用 "),s("code",[this._v("Vue.use(Toastplugin)")]),this._v(" 后，在 vue instance 中可以使用 "),s("code",[this._v("$toast")]),this._v(" 方法。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"代码示例"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#代码示例","aria-hidden":"true"}},[this._v("#")]),this._v(" 代码示例")])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_1-基础用法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-基础用法","aria-hidden":"true"}},[this._v("#")]),this._v(" 1. 基础用法")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("这是从上方弹出的信息"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(")"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("上方弹出"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("这是从中间弹出的信息"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",{toastPosition:"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("middle"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("})"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("中间弹出"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("这是从底部弹出的信息"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",{toastPosition:"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("bottom"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("})"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("下方弹出"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_2-可手动关闭"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-可手动关闭","aria-hidden":"true"}},[this._v("#")]),this._v(" 2. 可手动关闭")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("autoClose")]),this._v(" 选项的值为 "),s("code",[this._v("false")]),this._v(" 将显示默认的关闭按钮。当 "),s("code",[this._v("autoClose")]),this._v(" 选项的值是数字时，将该数字设置为关闭时间，单位是秒。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("点击右边按钮关闭弹框 👉"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n  {\n    autoClose:false,\n    positionToast:"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("middle"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  })"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("有关闭按钮"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("十秒之后再关闭弹框"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n  {\n    autoClose:10,\n    positionToast:"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("middle"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("\n  })"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("十秒后关闭"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_3-弹出内容支持-html-片段"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-弹出内容支持-html-片段","aria-hidden":"true"}},[this._v("#")]),this._v(" 3. 弹出内容支持 HTML 片段")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("将 "),s("code",[this._v("enableHtml")]),this._v(" 属性设置为 "),s("code",[this._v("true")]),this._v("，就会被传入的文本当作 HTML 片段处理。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("$toast("),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v("<strong>这是 <i>HTML</i> 片段</strong>"),a("span",{attrs:{class:"token punctuation"}},[t._v("'")]),t._v(",\n{enableHtml:true})"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("开启 HTML"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"warning custom-block"},[a("p",{staticClass:"custom-block-title"},[t._v("注意")]),t._v(" "),a("p",[a("code",[t._v("message")]),t._v(" 属性虽然支持传入 HTML 片段，但是在网站上动态渲染任意 HTML 是非常危险的，因为容易导致 XSS 攻击。因此在 "),a("code",[t._v("enableHtml")]),t._v(" 打开的情况下，请确保 "),a("code",[t._v("message")]),t._v(" 的内容是可信的，永远不要将用户提交的内容赋值给 "),a("code",[t._v("message")]),t._v(" 属性。")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"_4-自定义关闭按钮"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-自定义关闭按钮","aria-hidden":"true"}},[this._v("#")]),this._v(" 4. 自定义关闭按钮")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("p",[t._v("给 "),a("code",[t._v("closeButton")]),t._v(" 传入一个对象，当中的 "),a("code",[t._v("text")]),t._v(" 属性定义关闭按钮的文字信息。"),a("code",[t._v("callBack")]),t._v(" 定义点击关闭按钮时的回调函数, 该回调函数的参数为被关闭的 "),a("code",[t._v("toast")]),t._v(" 实例。")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-vue extra-class"},[a("div",{staticClass:"highlight-lines"},[a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("div",{staticClass:"highlighted"},[t._v(" ")]),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br"),a("br")]),a("pre",{pre:!0,attrs:{class:"language-vue"}},[a("code",[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n  "),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("g-button")]),t._v(" "),a("span",{attrs:{class:"token attr-name"}},[t._v("@click")]),a("span",{attrs:{class:"token attr-value"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v('"')]),t._v("showToast"),a("span",{attrs:{class:"token punctuation"}},[t._v('"')])]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("点我有惊喜"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("g-button")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("template")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n"),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("<")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),a("span",{attrs:{class:"token script language-javascript"}},[t._v("\n"),a("span",{attrs:{class:"token keyword"}},[t._v("export")]),t._v(" "),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{attrs:{class:"token function"}},[t._v("data")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token keyword"}},[t._v("return")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      msg"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v("'回调函数还未执行'")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  methods"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{attrs:{class:"token function"}},[t._v("showToast")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" propData"),a("span",{attrs:{class:"token operator"}},[t._v("=")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n        autoClose"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token boolean"}},[t._v("false")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n        closeButton"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n          text"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),a("span",{attrs:{class:"token string"}},[t._v("'残忍拒绝'")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n          callBack"),a("span",{attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" toast "),a("span",{attrs:{class:"token operator"}},[t._v("=>")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n            "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("msg "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"让 "')]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" toast"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),t._v("$slots"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token keyword"}},[t._v("default")]),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token number"}},[t._v("0")]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"，被拒绝了"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n          "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n        "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" zoo "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{attrs:{class:"token string"}},[t._v('"🐶"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐱"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐭"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐹"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐰"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🦊"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐻"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐼"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐨"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"🐯"')]),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("let")]),t._v(" num "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("floor")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("Math"),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("random")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),a("span",{attrs:{class:"token number"}},[t._v("10")]),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("const")]),t._v(" message "),a("span",{attrs:{class:"token operator"}},[t._v("=")]),t._v(" zoo"),a("span",{attrs:{class:"token punctuation"}},[t._v("[")]),t._v("num"),a("span",{attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),a("span",{attrs:{class:"token string"}},[t._v('"给个五星好评"')]),a("span",{attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n      "),a("span",{attrs:{class:"token keyword"}},[t._v("this")]),a("span",{attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{attrs:{class:"token function"}},[t._v("$toast")]),a("span",{attrs:{class:"token punctuation"}},[t._v("(")]),t._v("message"),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" propData"),a("span",{attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n"),a("span",{attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")]),a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token tag"}},[a("span",{attrs:{class:"token punctuation"}},[t._v("</")]),t._v("script")]),a("span",{attrs:{class:"token punctuation"}},[t._v(">")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#api","aria-hidden":"true"}},[this._v("#")]),this._v(" API")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[this._v("$toast接口使用方法： "),s("code",[this._v("$toast(message,props)")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ul",[a("li",[a("p",[t._v("message")]),t._v(" "),a("ul",[a("li",[t._v("type类型: "),a("code",[t._v("String")])]),t._v(" "),a("li",[t._v("说明: 弹出框 toast 的文字信息，在开启 "),a("code",[t._v("enableHtml")]),t._v(" 属性后可插入 HTML 片段")])])]),t._v(" "),a("li",[a("p",[t._v("props")]),t._v(" "),a("ul",[a("li",[t._v("type类型: "),a("code",[t._v("Object")])]),t._v(" "),a("li",[t._v("说明：描述弹出框 toast 的对象，详细属性/方法（Attribute）如下：")])]),t._v(" "),a("table",[a("thead",[a("tr",[a("th",[t._v("参数")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("说明")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("类型")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("默认值")])])]),t._v(" "),a("tbody",[a("tr",[a("td",[t._v("position")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("描述toast弹出方位，可选值有:"),a("code",[t._v("top")]),t._v(" "),a("code",[t._v("middle")]),t._v(" "),a("code",[t._v("botttom")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("String")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("top")])]),t._v(" "),a("tr",[a("td",[t._v("autoClose")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("选择是否自动关闭或延迟关闭事件")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false,Number")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("5")])]),t._v(" "),a("tr",[a("td",[t._v("closeButton")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("描述关闭按钮信息，当 autoClose 为 false 时，关闭按钮即出现")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Object")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("-")])]),t._v(" "),a("tr",[a("td",[t._v("enableHtml")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("toast 是否支持HTML片段")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Boolean")]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("false")])])])])])])}],!1,null,null,null);e.options.__file="toast.md";s.default=e.exports}}]);