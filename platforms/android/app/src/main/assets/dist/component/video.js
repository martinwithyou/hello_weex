// { "framework": "Vue"} 

!function(t){function e(o){if(n[o])return n[o].exports;var r=n[o]={i:o,l:!1,exports:{}};return t[o].call(r.exports,r,r.exports,e),r.l=!0,r.exports}var n={};e.m=t,e.c=n,e.i=function(t){return t},e.d=function(t,n,o){e.o(t,n)||Object.defineProperty(t,n,{configurable:!1,enumerable:!0,get:o})},e.n=function(t){var n=t&&t.__esModule?function(){return t.default}:function(){return t};return e.d(n,"a",n),n},e.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},e.p="",e(e.s=16)}({1:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={data:function(){return{state:"----",src:"http://flv2.bn.netease.com/videolib3/1611/01/XGqSL5981/SD/XGqSL5981-mobile.mp4"}},methods:{onstart:function(t){this.state="onstart"},onpause:function(t){this.state="onpause"},onfinish:function(t){this.state="onfinish"},onfail:function(t){this.state="onfinish"}}}},16:function(t,e,n){var o,r,s=[];s.push(n(3)),o=n(1);var i=n(5);r=o=o||{},"object"!=typeof o.default&&"function"!=typeof o.default||(Object.keys(o).some(function(t){return"default"!==t&&"__esModule"!==t})&&console.error("named exports are not supported in *.vue files."),r=o=o.default),"function"==typeof r&&(r=r.options),r.__file="D:\\weex\\weex\\helloWeex\\src\\component\\video.vue",r.render=i.render,r.staticRenderFns=i.staticRenderFns,r._scopeId="data-v-bae21e7a",r.style=r.style||{},s.forEach(function(t){for(var e in t)r.style[e]=t[e]}),"function"==typeof __register_static_styles__&&__register_static_styles__(r._scopeId,s),t.exports=o,t.exports.el="true",new Vue(t.exports)},3:function(t,e){t.exports={video:{width:630,height:350,marginTop:60,marginLeft:60},info:{marginTop:40,fontSize:40,textAlign:"center"}}},5:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("video",{staticClass:["video"],attrs:{src:t.src,autoplay:"",controls:""},on:{start:t.onstart,pause:t.onpause,finish:t.onfinish,fail:t.onfail}}),n("text",{staticClass:["info"]},[t._v("state: "+t._s(t.state))])])},staticRenderFns:[]},t.exports.render._withStripped=!0}});