!function(t,n){"object"==typeof exports&&"object"==typeof module?module.exports=n():"function"==typeof define&&define.amd?define([],n):"object"==typeof exports?exports.muiPopside=n():t.muiPopside=n()}(this,function(){return function(t){function n(r){if(e[r])return e[r].exports;var o=e[r]={exports:{},id:r,loaded:!1};return t[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var e={};return n.m=t,n.c=e,n.p="",n(0)}([function(t,n,e){t.exports=e(41)},function(t,n){var e=t.exports={version:"2.3.0"};"number"==typeof __e&&(__e=e)},function(t,n,e){t.exports=!e(3)(function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a})},function(t,n){t.exports=function(t){try{return!!t()}catch(n){return!0}}},function(t,n){var e=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=e)},function(t,n){t.exports=function(t){return"object"==typeof t?null!==t:"function"==typeof t}},function(t,n){t.exports=function(t){if(void 0==t)throw TypeError("Can't call method on  "+t);return t}},function(t,n){var e=Math.ceil,r=Math.floor;t.exports=function(t){return isNaN(t=+t)?0:(t>0?r:e)(t)}},function(t,n,e){var r=e(25),o=e(6);t.exports=function(t){return r(o(t))}},function(t,n,e){"use strict";var r=e(10),o=function(t){return this.params={},"[object Object]"===Object.prototype.toString.call(t)&&(this.params={input:t.input||"",container:t.container||"",innerHTML:t.innerHTML||"",onOpen:t.onOpen||function(){},onClose:t.onClose||function(){}}),this.container=t.container,t=null,this};r.mixTo(o),o.prototype.updateInputPosition=function(){this._hackInputFocus()},o.prototype._bindEvents=function(){return this.container.addEventListener("touchmove",function(t){return t.stopPropagation(),t.preventDefault(),!1},!1),this},o.prototype.show=function(){var t=this;return t.params.onOpen&&t.params.onOpen(this),this},o.prototype.hide=function(){var t=this;return t.params.onClose&&t.params.onClose(this),this},o.prototype.html=function(t){return this.container.innerHTML=t,this},o.prototype.destroy=function(){this.container&&this.container.parentNode&&this.container.parentNode.removeChild(this.container)},t.exports=o},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}function o(){}function i(t,n,e){var r=!0;if(t){var o=0,i=t.length,u=n[0],c=n[1],f=n[2];switch(n.length){case 0:for(;i>o;o+=2)r=t[o].call(t[o+1]||e)!==!1&&r;break;case 1:for(;i>o;o+=2)r=t[o].call(t[o+1]||e,u)!==!1&&r;break;case 2:for(;i>o;o+=2)r=t[o].call(t[o+1]||e,u,c)!==!1&&r;break;case 3:for(;i>o;o+=2)r=t[o].call(t[o+1]||e,u,c,f)!==!1&&r;break;default:for(;i>o;o+=2)r=t[o].apply(t[o+1]||e,n)!==!1&&r}}return r}function u(t){return"[object Function]"===Object.prototype.toString.call(t)}var c=e(12),f=r(c),s=/\s+/;o.prototype.on=function(t,n,e){var r,o,i;if(!n)return this;for(r=this.__events||(this.__events={}),t=t.split(s);o=t.shift();)i=r[o]||(r[o]=[]),i.push(n,e);return this},o.prototype.once=function(t,n,e){var r=this,o=function i(){r.off(t,i),n.apply(e||r,arguments)};return this.on(t,o,e)},o.prototype.off=function(t,n,e){var r,o,i,u;if(!(r=this.__events))return this;if(!(t||n||e))return delete this.__events,this;for(t=t?t.split(s):p(r);o=t.shift();)if(i=r[o])if(n||e)for(u=i.length-2;u>=0;u-=2)n&&i[u]!==n||e&&i[u+1]!==e||i.splice(u,2);else delete r[o];return this},o.prototype.trigger=function(t){var n,e,r,o,u,c,f=[],p=!0;if(!(n=this.__events))return this;for(t=t.split(s),u=1,c=arguments.length;c>u;u++)f[u-1]=arguments[u];for(;e=t.shift();)(r=n.all)&&(r=r.slice()),(o=n[e])&&(o=o.slice()),"all"!==e&&(p=i(o,f,this)&&p),p=i(r,[e].concat(f),this)&&p;return p},o.prototype.emit=o.prototype.trigger;var p=f["default"];p||(p=function(t){var n=[];for(var e in t)t.hasOwnProperty(e)&&n.push(e);return n}),o.mixTo=function(t){function n(n){t[n]=function(){return e[n].apply(i,Array.prototype.slice.call(arguments)),this}}var e=o.prototype;if(u(t))for(var r in e)e.hasOwnProperty(r)&&(t.prototype[r]=e[r]);else{var i=new o;for(var c in e)e.hasOwnProperty(c)&&n(c)}},t.exports=o},function(t,n,e){"use strict";function r(t){return t&&t.__esModule?t:{"default":t}}Object.defineProperty(n,"__esModule",{value:!0});var o=e(9),i=r(o);n["default"]={props:{show:{type:Boolean,"default":!1,twoWay:!0},height:{type:String,"default":document.documentElement.clientHeight+"px"},width:{type:String,"default":"100%"}},ready:function(){var t=this;document.body.appendChild(t.$el),this.popside=new i["default"]({container:t.$el,innerHTML:"",onOpen:function(n){t.show=!0},onClose:function(n){t.show=!1}}),t.show?this.popside.show():this.popside.hide()},watch:{show:function(t){t?this.popside.show():this.popside.hide()}},beforeDestroy:function(){this.popside.destroy()}}},function(t,n,e){t.exports={"default":e(13),__esModule:!0}},function(t,n,e){e(38),t.exports=e(1).Object.keys},function(t,n){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},function(t,n,e){var r=e(5);t.exports=function(t){if(!r(t))throw TypeError(t+" is not an object!");return t}},function(t,n,e){var r=e(8),o=e(34),i=e(33);t.exports=function(t){return function(n,e,u){var c,f=r(n),s=o(f.length),p=i(u,s);if(t&&e!=e){for(;s>p;)if(c=f[p++],c!=c)return!0}else for(;s>p;p++)if((t||p in f)&&f[p]===e)return t||p||0;return!t&&-1}}},function(t,n){var e={}.toString;t.exports=function(t){return e.call(t).slice(8,-1)}},function(t,n,e){var r=e(14);t.exports=function(t,n,e){if(r(t),void 0===n)return t;switch(e){case 1:return function(e){return t.call(n,e)};case 2:return function(e,r){return t.call(n,e,r)};case 3:return function(e,r,o){return t.call(n,e,r,o)}}return function(){return t.apply(n,arguments)}}},function(t,n,e){var r=e(5),o=e(4).document,i=r(o)&&r(o.createElement);t.exports=function(t){return i?o.createElement(t):{}}},function(t,n){t.exports="constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf".split(",")},function(t,n,e){var r=e(4),o=e(1),i=e(18),u=e(23),c="prototype",f=function(t,n,e){var s,p,a,l=t&f.F,h=t&f.G,d=t&f.S,v=t&f.P,y=t&f.B,x=t&f.W,w=h?o:o[n]||(o[n]={}),b=w[c],m=h?r:d?r[n]:(r[n]||{})[c];h&&(e=n);for(s in e)p=!l&&m&&void 0!==m[s],p&&s in w||(a=p?m[s]:e[s],w[s]=h&&"function"!=typeof m[s]?e[s]:y&&p?i(a,r):x&&m[s]==a?function(t){var n=function(n,e,r){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(n);case 2:return new t(n,e)}return new t(n,e,r)}return t.apply(this,arguments)};return n[c]=t[c],n}(a):v&&"function"==typeof a?i(Function.call,a):a,v&&((w.virtual||(w.virtual={}))[s]=a,t&f.R&&b&&!b[s]&&u(b,s,a)))};f.F=1,f.G=2,f.S=4,f.P=8,f.B=16,f.W=32,f.U=64,f.R=128,t.exports=f},function(t,n){var e={}.hasOwnProperty;t.exports=function(t,n){return e.call(t,n)}},function(t,n,e){var r=e(26),o=e(30);t.exports=e(2)?function(t,n,e){return r.f(t,n,o(1,e))}:function(t,n,e){return t[n]=e,t}},function(t,n,e){t.exports=!e(2)&&!e(3)(function(){return 7!=Object.defineProperty(e(19)("div"),"a",{get:function(){return 7}}).a})},function(t,n,e){var r=e(17);t.exports=Object("z").propertyIsEnumerable(0)?Object:function(t){return"String"==r(t)?t.split(""):Object(t)}},function(t,n,e){var r=e(15),o=e(24),i=e(36),u=Object.defineProperty;n.f=e(2)?Object.defineProperty:function(t,n,e){if(r(t),n=i(n,!0),r(e),o)try{return u(t,n,e)}catch(c){}if("get"in e||"set"in e)throw TypeError("Accessors not supported!");return"value"in e&&(t[n]=e.value),t}},function(t,n,e){var r=e(22),o=e(8),i=e(16)(!1),u=e(31)("IE_PROTO");t.exports=function(t,n){var e,c=o(t),f=0,s=[];for(e in c)e!=u&&r(c,e)&&s.push(e);for(;n.length>f;)r(c,e=n[f++])&&(~i(s,e)||s.push(e));return s}},function(t,n,e){var r=e(27),o=e(20);t.exports=Object.keys||function(t){return r(t,o)}},function(t,n,e){var r=e(21),o=e(1),i=e(3);t.exports=function(t,n){var e=(o.Object||{})[t]||Object[t],u={};u[t]=n(e),r(r.S+r.F*i(function(){e(1)}),"Object",u)}},function(t,n){t.exports=function(t,n){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:n}}},function(t,n,e){var r=e(32)("keys"),o=e(37);t.exports=function(t){return r[t]||(r[t]=o(t))}},function(t,n,e){var r=e(4),o="__core-js_shared__",i=r[o]||(r[o]={});t.exports=function(t){return i[t]||(i[t]={})}},function(t,n,e){var r=e(7),o=Math.max,i=Math.min;t.exports=function(t,n){return t=r(t),0>t?o(t+n,0):i(t,n)}},function(t,n,e){var r=e(7),o=Math.min;t.exports=function(t){return t>0?o(r(t),9007199254740991):0}},function(t,n,e){var r=e(6);t.exports=function(t){return Object(r(t))}},function(t,n,e){var r=e(5);t.exports=function(t,n){if(!r(t))return t;var e,o;if(n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;if("function"==typeof(e=t.valueOf)&&!r(o=e.call(t)))return o;if(!n&&"function"==typeof(e=t.toString)&&!r(o=e.call(t)))return o;throw TypeError("Can't convert object to primitive value")}},function(t,n){var e=0,r=Math.random();t.exports=function(t){return"Symbol(".concat(void 0===t?"":t,")_",(++e+r).toString(36))}},function(t,n,e){var r=e(35),o=e(28);e(29)("keys",function(){return function(t){return o(r(t))}})},function(t,n){},function(t,n){t.exports='<div v-show=show transition=mui-popside class=mui-popside-dialog :style="{height:height, width:width}"> <slot></slot> </div>'},function(t,n,e){var r,o;e(39),r=e(11),o=e(40),t.exports=r||{},t.exports.__esModule&&(t.exports=t.exports["default"]),o&&(("function"==typeof t.exports?t.exports.options||(t.exports.options={}):t.exports).template=o)}])});