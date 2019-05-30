(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{197:function(t,s,a){"use strict";a.r(s);var n=a(0),e=Object(n.a)({},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"content"},[t._m(0),t._v(" "),t._m(1),t._v(" "),a("p",[t._v("目前主流的前端监控数据上报都是采用 GIF 的上报方式，(百度统计/友盟/谷歌统计）都是这样实现的。但为什么一定要使用 GIF 呢？不能发 post 请求或者通过 script 标签的形式么？")]),t._v(" "),a("p",[t._v("当然你也可以使用一些黑科技的方式上报，用纯 css 来实现。但这种方案并没有什么特别的好处。")]),t._v(" "),t._m(2),t._m(3),t._v(" "),t._m(4),t._v(" "),a("p",[t._v("详情见 "),a("a",{attrs:{href:"https://mp.weixin.qq.com/s/v6R2w26qZkEilXY0mPUBCw",target:"_blank",rel:"noopener noreferrer"}},[t._v("为什么前端监控要用 GIF 打点"),a("OutboundLink")],1)]),t._v(" "),t._m(5),t._v(" "),a("p",[t._v("但建议不要按如下方法使用")]),t._v(" "),t._m(6),a("p",[t._v("这段代码的问题是这个 new Image()是一个没有引用的临时变量，随时可能被浏览器的垃圾回收机制回收。如果这个图片的 HTTP 请求尚未建立，那么在被回收时这个请求就会被取消，导致打点并没有真正发出。如果打点所在的页面比较复杂，浏览器垃圾回收机制可能会被频繁触发，那么这种方式打点的丢失率可能会高达 10%以上。")]),t._v(" "),a("p",[t._v("解决方法很简单，将这个图片赋值给一个全局变量即可，例如：")]),t._v(" "),t._m(7),t._m(8),t._v(" "),t._m(9),t._v(" "),t._m(10)])},[function(){var t=this.$createElement,s=this._self._c||t;return s("h2",{attrs:{id:"为什么前端监控要用-gif-打点"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#为什么前端监控要用-gif-打点","aria-hidden":"true"}},[this._v("#")]),this._v(" 为什么前端监控要用 GIF 打点")])},function(){var t=this.$createElement,s=this._self._c||t;return s("blockquote",[s("p",[this._v("2018-12-25")])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-css extra-class"},[a("pre",{pre:!0,attrs:{class:"language-css"}},[a("code",[a("span",{pre:!0,attrs:{class:"token selector"}},[t._v(".track-xx:active:after")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v("content")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token url"}},[t._v("url(track.php?xxxx=foo)")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"主要原因"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#主要原因","aria-hidden":"true"}},[this._v("#")]),this._v(" 主要原因")])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[s("p",[this._v("没有跨域问题")])]),this._v(" "),s("li",[s("p",[this._v("不会阻塞页面加载，影响用户体验")])]),this._v(" "),s("li",[s("p",[this._v("在所有图片中体积最小，相较 BMP/PNG，可以节约 41%/35%的网络资源")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"使用方式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#使用方式","aria-hidden":"true"}},[this._v("#")]),this._v(" 使用方式")])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'https://foo.com/bar.gif?t=xxxx&b=1'")]),t._v("\n")])])])},function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticClass:"language-js extra-class"},[a("pre",{pre:!0,attrs:{class:"language-js"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Image")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" key "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Date")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//加一个时间戳，防止图片被浏览器缓存了，不再发送请求")]),t._v("\n\nwindow"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img\n\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("onabort")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// img标签加载完成、错误或终止时，解除事件绑定，销毁相关对象")]),t._v("\n  img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onload "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onerror "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" img"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("onabort "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  window"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("key"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n  img "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\nimg"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("src "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token template-string"}},[a("span",{pre:!0,attrs:{class:"token string"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token interpolation"}},[a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("${")]),t._v("url"),a("span",{pre:!0,attrs:{class:"token interpolation-punctuation punctuation"}},[t._v("}")])]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("?t=key`")])]),t._v("\n")])])])},function(){var t=this.$createElement,s=this._self._c||t;return s("h3",{attrs:{id:"其它方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其它方案","aria-hidden":"true"}},[this._v("#")]),this._v(" 其它方案")])},function(){var t=this.$createElement,s=this._self._c||t;return s("p",[s("code",[this._v("Beacon API")])])},function(){var t=this.$createElement,s=this._self._c||t;return s("ul",[s("li",[this._v("在空闲的时候异步发送统计，不影响页面诸如 JS、CSS Animation 等执行")]),this._v(" "),s("li",[this._v("即使页面在 unload 状态下，也会异步发送统计，不影响页面过渡/跳转到下跳页")]),this._v(" "),s("li",[this._v("能够被客户端优化发送，尤其在 Mobile 环境下，可以将 Beacon 请求合并到其他请求上，一同处理")])])}],!1,null,null,null);s.default=e.exports}}]);