(function(t){function e(e){for(var o,a,u=e[0],i=e[1],c=e[2],p=0,d=[];p<u.length;p++)a=u[p],r[a]&&d.push(r[a][0]),r[a]=0;for(o in i)Object.prototype.hasOwnProperty.call(i,o)&&(t[o]=i[o]);l&&l(e);while(d.length)d.shift()();return s.push.apply(s,c||[]),n()}function n(){for(var t,e=0;e<s.length;e++){for(var n=s[e],o=!0,u=1;u<n.length;u++){var i=n[u];0!==r[i]&&(o=!1)}o&&(s.splice(e--,1),t=a(a.s=n[0]))}return t}var o={},r={app:0},s=[];function a(e){if(o[e])return o[e].exports;var n=o[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=t,a.c=o,a.d=function(t,e,n){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)a.d(n,o,function(e){return t[e]}.bind(null,o));return n},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var u=window["webpackJsonp"]=window["webpackJsonp"]||[],i=u.push.bind(u);u.push=e,u=u.slice();for(var c=0;c<u.length;c++)e(u[c]);var l=i;s.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";var o=n("c21b"),r=n.n(o);r.a},"312c":function(t,e,n){},"4b07":function(t,e,n){"use strict";var o=n("d02d"),r=n.n(o);r.a},"56d7":function(t,e,n){"use strict";n.r(e);n("cadf"),n("551c"),n("097d"),n("ab8b");var o=n("2b0e"),r=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",attrs:{id:"app"}},[n("AppHeader"),n("AppProgress",{attrs:{quotesCount:t.quotesCount()}}),n("AppQuoteForm",{attrs:{addQuote:t.addQuote}}),n("AppQuotes",{attrs:{quotes:t.quotes,removeQuote:t.removeQuote}}),n("AppFooter")],1)},s=[],a=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},u=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("header",[n("h1",{staticClass:"display-3 text-center"},[t._v("Vue Quotes")])])}],i={},c=i,l=(n("98a9"),n("2877")),p=Object(l["a"])(c,a,u,!1,null,"0b534b68",null);p.options.__file="AppHeader.vue";var d=p.exports,f=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Quotes Added")]),n("div",{staticClass:"progress"},[n("div",{staticClass:"progress-bar",style:t.widthStyle(),attrs:{role:"progressbar","aria-valuenow":t.quotesCount,"aria-valuemin":"0","aria-valuemax":"10"}},[t._v("\n        "+t._s(t.quotesCount)+" / 10\n      ")])])])])},v=[],m=(n("c5f6"),{props:{quotesCount:{type:Number,default:0}},methods:{widthStyle:function(){return{width:"".concat(10*this.quotesCount,"%")}}}}),h=m,_=(n("6693"),Object(l["a"])(h,f,v,!1,null,"34c4ab8e",null));_.options.__file="AppProgress.vue";var b=_.exports,y=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"card my-4"},[n("div",{staticClass:"card-body"},[n("h5",{staticClass:"card-title"},[t._v("Add a Quote")]),n("form",{on:{submit:function(e){e.preventDefault(),t.handleSumbit()}}},[n("div",{staticClass:"form-row"},[n("div",{staticClass:"col-9"},[n("input",{directives:[{name:"model",rawName:"v-model",value:t.quoteText,expression:"quoteText"}],staticClass:"form-control",attrs:{type:"text",placeholder:"Enter a Quote"},domProps:{value:t.quoteText},on:{input:function(e){e.target.composing||(t.quoteText=e.target.value)}}})]),t._m(0)])]),n("small",{staticClass:"form-text text-muted"},[t._v("You can add upto a maximum of 10 quotes.")])])])},x=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-3"},[n("button",{staticClass:"btn btn-dark btn-block",attrs:{type:"submit"}},[t._v("Add Quote")])])}],C={data:function(){return{quoteText:""}},props:{addQuote:Function},methods:{handleSumbit:function(){this.quoteText&&this.addQuote(this.quoteText)&&(this.quoteText="")}}},q=C,Q=(n("e2f2"),Object(l["a"])(q,y,x,!1,null,"212d2601",null));Q.options.__file="AppQuoteForm.vue";var g=Q.exports,A=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"row"},t._l(t.quotes,function(e,o){return n("AppQuote",{key:o,nativeOn:{click:function(e){t.removeQuote(o)}}},[t._v("\n    "+t._s(e)+"\n  ")])}))},w=[],O=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"col-md-6 mb-3"},[n("div",{staticClass:"card"},[n("div",{staticClass:"card-body"},[t._t("default")],2)])])},j=[],P={props:{quote:String}},T=P,E=(n("56d9"),Object(l["a"])(T,O,j,!1,null,"459f3a26",null));E.options.__file="AppQuote.vue";var S=E.exports,$={props:["quotes","removeQuote"],components:{AppQuote:S}},k=$,F=(n("7745"),Object(l["a"])(k,A,w,!1,null,"77972596",null));F.options.__file="AppQuotes.vue";var M=F.exports,H=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"alert alert-secondary mt-4 text-center",attrs:{role:"alert"}},[t._v("\n  Info: Click on a Quote to delete it.\n")])},J=[],N={},Y=N,B=(n("4b07"),Object(l["a"])(Y,H,J,!1,null,"d49c5ff2",null));B.options.__file="AppFooter.vue";var D=B.exports,I={name:"app",data:function(){return{quotes:["Where there is love there is life.","Brevity is the soul of wit."]}},methods:{quotesCount:function(){return this.quotes.length},addQuote:function(t){return this.quotes.length<10?(this.quotes.push(t),!0):(alert("You have 10 quotes already. Please delete a quote to add another."),!1)},removeQuote:function(t){this.quotes.splice(t,1)}},components:{AppHeader:d,AppProgress:b,AppQuoteForm:g,AppQuotes:M,AppFooter:D}},V=I,W=(n("034f"),Object(l["a"])(V,r,s,!1,null,null,null));W.options.__file="App.vue";var z=W.exports;o["a"].config.productionTip=!1,new o["a"]({render:function(t){return t(z)}}).$mount("#app")},"56d9":function(t,e,n){"use strict";var o=n("87d1"),r=n.n(o);r.a},6693:function(t,e,n){"use strict";var o=n("312c"),r=n.n(o);r.a},7745:function(t,e,n){"use strict";var o=n("a106"),r=n.n(o);r.a},"87d1":function(t,e,n){},"98a9":function(t,e,n){"use strict";var o=n("e147"),r=n.n(o);r.a},a106:function(t,e,n){},c21b:function(t,e,n){},d02d:function(t,e,n){},e147:function(t,e,n){},e2f2:function(t,e,n){"use strict";var o=n("feed"),r=n.n(o);r.a},feed:function(t,e,n){}});
//# sourceMappingURL=app.402ff027.js.map