(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-index-index"],{"01a9":function(t,e,i){"use strict";i.r(e);var n=i("669b"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},"08f0":function(t,e,i){var n=i("5dee");"string"===typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);var s=i("4f06").default;s("1634c467",n,!0,{sourceMap:!1,shadowMode:!1})},"5dee":function(t,e,i){e=t.exports=i("2350")(!1),e.push([t.i,".container[data-v-1d53b471]{--height:%?92?%;--top:%?80?%;padding:0}.ctrls[data-v-1d53b471]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:100%;margin-top:var(--top);padding:0 %?20?%;font-size:%?24?%}.picker-dice-number[data-v-1d53b471]{position:relative;width:var(--width);border:%?2?% dashed #d8d8d8;padding:%?2?% %?4?%}.pick-remind[data-v-1d53b471]{position:absolute;left:0;top:%?-80?%;width:%?200?%;font-size:%?24?%;color:#999}.change[data-v-1d53b471]{width:%?440?%;height:var(--height);border-radius:%?46?%}.change[data-v-1d53b471]:active{-webkit-box-shadow:0 %?2?% %?4?% %?4?% #d8d8d8;box-shadow:0 %?2?% %?4?% %?4?% #d8d8d8}.dices[data-v-1d53b471]{position:relative;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;-webkit-align-content:space-between;-ms-flex-line-pack:justify;align-content:space-between;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;width:%?400?%;height:%?400?%;margin-top:%?16?%}.dice[data-v-1d53b471]{position:absolute}.dice-image[data-v-1d53b471]{--width:%?100?%;width:var(--width);height:var(--width)}.results[data-v-1d53b471]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;-webkit-box-sizing:border-box;box-sizing:border-box;border-left:0;border-bottom:0;margin:%?16?% 5% 0 5%}.straight[data-v-1d53b471]{line-height:%?96?%;width:100%;text-align:center;font-size:%?48?%;-webkit-box-sizing:border-box;box-sizing:border-box;color:#00a}.result[data-v-1d53b471]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center;width:50%;font-size:%?40?%;color:#333;margin-top:%?40?%}.dice-small[data-v-1d53b471]{--width:%?40?%;display:inline-block;height:var(--width);width:var(--width);margin-left:%?16?%}.help[data-v-1d53b471]{--width:%?80?%;width:var(--width);height:var(--width);margin:0;background:#fc9d5d;color:#fff}",""])},"5e4b":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("v-uni-view",{staticClass:"container"},[i("v-uni-view",{staticClass:"ctrls"},[i("v-uni-picker",{staticClass:"picker-dice-number",attrs:{value:t.index,range:t.supportDiceNumbers},on:{change:function(e){e=t.$handleEvent(e),t.changePicker(e)}}},[i("v-uni-text",[t._v("数量: "+t._s(t.supportDiceNumbers[t.index]))])],1),i("v-uni-image",{staticClass:"change change-image",attrs:{src:t.button,"hover-class":"change-hover"},on:{click:function(e){e=t.$handleEvent(e),t.changeDices(e)}}}),i("v-uni-button",{staticClass:"help",on:{click:function(e){e=t.$handleEvent(e),t.clickHelp(e)}}},[t._v("?")])],1),i("v-uni-view",{staticClass:"dices"},t._l(t.dices,function(e,n){return i("v-uni-view",{key:n,staticClass:"dice",style:t.diceStyles[n]},[i("img",{staticClass:"dice-image",attrs:{mode:"aspectFit",src:t.diceImgs[e-1]}})])})),t.lessThenMin&&t.played?i("v-uni-view",{staticClass:"results"},[i("v-uni-text",{staticClass:"straight"},[t._v(t._s(t.points)+"点")])],1):t._e(),1===t.results.length?i("v-uni-view",{staticClass:"results"},[i("v-uni-text",{staticClass:"straight"},[t._v("顺子, 全部 0 个")])],1):i("v-uni-view",{staticClass:"results"},t._l(t.results,function(e,n){return i("v-uni-view",{key:n,staticClass:"result"},[i("v-uni-text",[t._v(t._s(e.count)+" 个")]),i("v-uni-image",{staticClass:"dice-small",attrs:{src:t.diceImgs[e.dice-1]}})],1)})),i("my-ad")],1)},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"669b":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n=a(i("d73d")),s=i("db5c");function a(t){return t&&t.__esModule?t:{default:t}}var c={supportDiceNumbers:[5,6,7,8,9,4,3,2,1],close:!1,closeTime:.25,range:3,max:6,minCount:5},r={components:{MyAd:n.default},data:function(){return{played:!1,index:uni.getStorageSync("diceCountIndex")||0,supportDiceNumbers:c.supportDiceNumbers,button:s.button,dices:[],results:[],diceImgs:[s.dice1,s.dice2,s.dice3,s.dice4,s.dice5,s.dice6],innerAudioContext:uni.createInnerAudioContext(),diceConfig:s.diceConfig}},computed:{points:function(){var t=this.dices.reduce(function(t,e){return t+e},0);return t},lessThenMin:function(){return this.diceCount<c.minCount},diceCount:function(){return this.supportDiceNumbers[this.index]},diceStyles:function(){var t=this.diceConfig[this.diceCount],e=t.w,i=t.los,n=[];return i.forEach(function(t,i){n.push("left: ".concat(e*t.l/2,"px;top: ").concat(e*t.t/2,"px;"))}),n}},onLoad:function(){this.initDices(),this.listenShake(),this.innerAudioContext.src=s.sound},onShareAppMessage:function(){return{title:"君子九个骰，小人瑟瑟抖。"}},methods:{changePicker:function(t){var e=Number(t.detail.value);this.index=e,this.initDices(),this.results=[],this.played=!1,uni.setStorage({key:"diceCountIndex",data:e,success:function(t){}})},getDiceStyle:function(){var t=this.diceConfig[this.diceCount],e=t.w,i=t.lo,n=i[index];return"left: ".concat(e*n.l,"upx;top: ").concat(e*n.t,"upx;")},initDices:function(){for(var t=[],e=0;e<this.diceCount;e++)t.push(6);this.dices=t},listenShake:function(){var t=this;return uni.onAccelerometerChange(function(e){var i=c.range;if(e.x>i||e.y>i||e.z>i)return t.changeDices()})},changeDices:function(){if(!c.close){this.played=!0,this.innerAudioContext.stop(),this.innerAudioContext.play();for(var t=[],e=0;e<this.diceCount;e++)t.push(Math.floor(Math.random()*c.max)+1);if(this.dices=t,uni.vibrateLong(),!this.lessThenMin)return this.handleDices(t),c.close=!0,setTimeout(function(){return c.close=!1},1e3*c.closeTime)}},handleDices:function(t){var e=[];if(Array.from(new Set(t)).length===this.diceCount)e.push("顺子, 全部为 0 个");else for(var i=0,n=0;n<c.max;n++){var s=n+1,a=this.howManyCount(s),r=this.diceCount;a=a===r?r+1:a+i,e.push({count:a,dice:s}),1===s&&(i=a)}this.results=e},howManyCount:function(t){for(var e=0,i=this.dices,n=0;n<i.length;n++){var s=i[n];s===t&&e++}return e},clickHelp:function(){uni.navigateTo({url:"/pages/help/index"})}}};e.default=r},"8b66":function(t,e,i){"use strict";i.r(e);var n=i("5e4b"),s=i("01a9");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);i("c959");var c=i("2877"),r=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,"1d53b471",null);r.options.__file="index.vue",e["default"]=r.exports},"93ae":function(t,e,i){"use strict";var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div")},s=[];i.d(e,"a",function(){return n}),i.d(e,"b",function(){return s})},"9d32":function(t,e,i){"use strict";i.r(e);var n=i("b110"),s=i.n(n);for(var a in n)"default"!==a&&function(t){i.d(e,t,function(){return n[t]})}(a);e["default"]=s.a},b110:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=void 0;var n={data:function(){return{}}};e.default=n},c959:function(t,e,i){"use strict";var n=i("08f0"),s=i.n(n);s.a},d73d:function(t,e,i){"use strict";i.r(e);var n=i("93ae"),s=i("9d32");for(var a in s)"default"!==a&&function(t){i.d(e,t,function(){return s[t]})}(a);var c=i("2877"),r=Object(c["a"])(s["default"],n["a"],n["b"],!1,null,"31aefd7d",null);r.options.__file="ad.vue",e["default"]=r.exports},db5c:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.diceConfig=e.button=e.sound=e.dice6=e.dice5=e.dice4=e.dice3=e.dice2=e.dice1=void 0;var n="./static/1.png";e.dice1=n;var s="./static/2.png";e.dice2=s;var a="./static/3.png";e.dice3=a;var c="./static/4.png";e.dice4=c;var r="./static/5.png";e.dice5=r;var o="./static/6.png";e.dice6=o;var d="./static/sound.mp3";e.sound=d;var l="./static/button.png";e.button=l;var u={1:{w:100,los:[{l:1.5,t:1.5}]},2:{w:100,los:[{l:0,t:1.5},{l:3,t:1.5}]},3:{w:100,los:[{l:0,t:1.5},{l:1.5,t:1.5},{l:3,t:1.5}]},4:{w:100,los:[{l:0,t:0},{l:3,t:0},{l:0,t:3},{l:3,t:3}]},5:{w:100,los:[{l:0,t:0},{l:3,t:0},{l:1.5,t:1.5},{l:0,t:3},{l:3,t:3}]},6:{w:100,los:[{l:0,t:0},{l:3,t:0},{l:0,t:1.5},{l:3,t:1.5},{l:0,t:3},{l:3,t:3}]},7:{w:100,los:[{l:0,t:0},{l:3,t:0},{l:0,t:1.5},{l:3,t:1.5},{l:0,t:3},{l:3,t:3},{l:1.5,t:1.5}]},8:{w:100,los:[{l:0,t:0},{l:3,t:0},{l:0,t:1.5},{l:3,t:1.5},{l:0,t:3},{l:3,t:3},{l:1.5,t:.5},{l:1.5,t:2.5}]},9:{w:100,los:[{l:0,t:0},{l:3,t:0},{l:0,t:1.5},{l:3,t:1.5},{l:0,t:3},{l:3,t:3},{l:1.5,t:0},{l:1.5,t:1.5},{l:1.5,t:3}]}};e.diceConfig=u}}]);