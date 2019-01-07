require("../../common/manifest.js");
require("../../common/vendor.js");
global.webpackJsonp([1],[,,,,,,,,,,function(e,t,n){"use strict";var i=r(n(2)),o=r(n(11));function r(e){return e&&e.__esModule?e:{default:e}}Page((0,i.default)(o.default))},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=n(13),o=n.n(i),r=n(18),s=!1;var a=function(e){s||n(12)},c=n(0)(o.a,r.a,a,"data-v-a12a4c42",null);c.options.__file="Users/zweizhao/Documents/Projects/MP/DicePlay/pages/index/index.vue",c.esModule&&Object.keys(c.esModule).some(function(e){return"default"!==e&&"__"!==e.substr(0,2)})&&console.error("named exports are not supported in *.vue files."),c.options.functional&&console.error("[vue-loader] index.vue: functional components are not supported with templates, they should use render functions."),t.default=c.exports},function(e,t){},function(e,t,n){"use strict";(function(e){Object.defineProperty(t,"__esModule",{value:!0});var i,o=n(3),r=(i=o)&&i.__esModule?i:{default:i},s=n(4);var a={diceCount:5,close:!1,closeTime:.25,range:3,max:6};t.default={components:{MyAd:r.default},data:function(){return{dices:[6,6,6,6,6],results:[],diceImgs:[s.dice1,s.dice2,s.dice3,s.dice4,s.dice5,s.dice6],innerAudioContext:e.createInnerAudioContext()}},onLoad:function(){this.listenShake(),this.innerAudioContext.src=s.sound,e.showShareMenu({withShareTicket:!1})},onShareAppMessage:function(){return{title:"摇骰子就是博弈，兄弟，来吧！"}},methods:{listenShake:function(){var t=this;return e.onAccelerometerChange(function(e){var n=a.range;if(e.x>n||e.y>n||e.z>n)return t.changeDices()})},changeDices:function(){var t=void 0;if(!a.close){this.innerAudioContext.stop(),this.innerAudioContext.play();var n=[],i=a.diceCount;for(t=0;0<=i?t<i:t>i;0<=i?++t:--t)n.push(Math.floor(Math.random()*a.max)+1);return this.dices=n,this.handleDices(n),a.close=!0,setTimeout(function(){return a.close=!1,e.hideLoading()},1e3*a.closeTime)}},handleDices:function(t){var n=void 0,i=void 0,o=void 0,r=[];if(Array.from(new Set(t)).length===a.diceCount)r.push("顺子, 全部为 0 个");else{var s=0,c=a.max;for(n=o=0;0<=c?o<c:o>c;n=0<=c?++o:--o){i=n+1;var u=this.howManyCount(i);u=u===a.max?7:u+s,r.push({count:u,dice:i}),1===i&&(s=u)}}this.results=r,e.vibrateLong()},howManyCount:function(e){var t=void 0,n=void 0,i=0,o=this.dices,r=o.length;for(t=n=0;n<r;t=++n){o[t]===e&&i++}return i},clickHelp:function(){e.navigateTo({url:"/pages/help/index"})}}}}).call(t,n(14).default)},function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=function(e){return"function"==typeof e},o=/^on|^create|Sync$|Manager$|^pause/,r=["os","stopRecord","stopVoice","stopBackgroundAudio","stopPullDownRefresh","hideKeyboard","hideToast","hideLoading","showNavigationBarLoading","hideNavigationBarLoading","canIUse","navigateBack","closeSocket","pageScrollTo","drawCanvas"],s=function(e){return(!o.test(e)||"createBLEConnection"===e)&&!~r.indexOf(e)},a=function(e){return function(){for(var t=arguments.length,n=Array(t>1?t-1:0),o=1;o<t;o++)n[o-1]=arguments[o];var r=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return i(r.success)||i(r.fail)||i(r.complete)?e.apply(void 0,[r].concat(n)):new Promise(function(t,i){e.apply(void 0,[Object.assign({},r,{success:t,fail:i})].concat(n)),Promise.prototype.finally=function(e){var t=this.constructor;return this.then(function(n){return t.resolve(e()).then(function(){return n})},function(n){return t.resolve(e()).then(function(){throw n})})}}).then(function(e){return[null,e]}).catch(function(e){return[e]})}},c=1e-4,u=750,l=!1,f=0,d=0;function h(e,t){var n,i,o,r;return 0===f&&(n=wx.getSystemInfoSync(),i=n.platform,o=n.pixelRatio,r=n.windowWidth,f=r,d=o,l="ios"===i),0===e?0:(e=e/u*(t||f),0===(e=Math.floor(e+c))?1!==d&&l?.5:1:e)}var p={oauth:["weixin"],share:["weixin"],payment:["wxpay"],push:["weixin"]};var v=Object.freeze({getProvider:function(e){var t=e.service,n=e.success,o=e.fail,r=e.complete,s=!1;p[t]?(s={errMsg:"getProvider:ok",service:t,provider:p[t]},i(n)&&n(s)):(s={errMsg:"getProvider:fail:服务["+t+"]不存在"},i(o)&&o(s)),i(r)&&r(s)},subscribePush:function(e){var t=e.fail,n=e.complete,o={errMsg:"subscribePush:fail:微信小程序不支持 subscribePush 方法"};i(t)&&t(o),i(n)&&n(o)},unsubscribePush:function(e){var t=e.fail,n=e.complete,o={errMsg:"unsubscribePush:fail:微信小程序不支持 unsubscribePush 方法"};i(t)&&t(o),i(n)&&n(o)},onPush:function(e){var t=e.fail,n=e.complete,o={errMsg:"onPush:fail:微信小程序不支持 onPush 方法"};i(t)&&t(o),i(n)&&n(o)},offPush:function(e){var t=e.fail,n=e.complete,o={errMsg:"offPush:fail:微信小程序不支持 offPush 方法"};i(t)&&t(o),i(n)&&n(o)},share:function(e){var t=e.fail,n=e.complete,o={errMsg:"share:fail:微信小程序不支持 share 方法"};i(t)&&t(o),i(n)&&n(o)}}),g={},m={os:{wx:!0}};"undefined"!=typeof Proxy?g=new Proxy({},{get:function(e,t){return m.hasOwnProperty(t)?m[t]:"upx2px"===t?h:v[t]?s(t)?a(v[t]):v[t]:wx.hasOwnProperty(t)?s(t)?a(wx[t]):wx[t]:void 0}}):(g.upx2px=h,Object.keys(m).forEach(function(e){g[e]=m[e]}),Object.keys(v).forEach(function(e){s(e)?g[e]=v[e]:g[e]=a(v[e])}),Object.keys(wx).forEach(function(e){wx.hasOwnProperty(e)&&(s(e)?g[e]=a(wx[e]):g[e]=wx[e])}));var x=g;t.default=x},,,,function(e,t,n){"use strict";var i=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"container"},[n("img",{staticClass:"click",attrs:{src:"/static/button.png",eventid:"pE7-0"},on:{click:e.changeDices}}),n("div",{staticClass:"dices"},e._l(e.dices,function(t,i){return n("img",{key:i,staticClass:"dice",attrs:{src:e.diceImgs[t-1]}})})),e.results.length>1?n("div",{staticClass:"results"},[1===e.results.length?n("span",{staticClass:"straight"},[e._v("顺子, 全部 0 个")]):e._e(),e._l(e.results,function(t,i){return n("span",{key:i,staticClass:"result"},[e._v("\n      "+e._s(t.count)+" 个\n      "),n("img",{staticClass:"dice-small",attrs:{src:e.diceImgs[t.dice-1]}})])})],2):e._e(),n("button",{staticClass:"help",attrs:{eventid:"fRE-1"},on:{click:e.clickHelp}},[e._v("?")]),n("my-ad",{attrs:{mpcomid:"swJ-0"}})],1)};i._withStripped=!0;var o={render:i,staticRenderFns:[]};t.a=o}],[10]);
//# sourceMappingURL=../../../.sourcemap/mp-weixin/pages/index/index.js.map