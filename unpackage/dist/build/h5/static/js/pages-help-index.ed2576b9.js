(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-help-index"],{"4a29":function(s,t,a){"use strict";var n=a("b8bb"),i=a.n(n);i.a},6092:function(s,t,a){"use strict";var n=a("d612"),i=a.n(n);i.a},"77d0":function(s,t,a){t=s.exports=a("2350")(!1),t.push([s.i,"",""])},"90d9":function(s,t,a){t=s.exports=a("2350")(!1),t.push([s.i,"\n.container[data-v-2396f722]{padding:0\n}\n.help-container[data-v-2396f722]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;height:100%\n}\n.dices[data-v-2396f722]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-justify-content:space-around;-ms-flex-pack:distribute;justify-content:space-around;height:100%\n}\n.dice[data-v-2396f722]{display:inline-block;height:%?120?%;width:%?120?%\n}\n.left[data-v-2396f722]{color:red\n}\n.right[data-v-2396f722]{color:green\n}\n.content[data-v-2396f722]{-webkit-box-flex:1;-webkit-flex:1;-ms-flex:1;flex:1;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-sizing:border-box;box-sizing:border-box;padding:%?32?% %?16?%;overflow-y:auto\n}\nspan[data-v-2396f722]{margin-bottom:%?16?%;font-size:%?28?%\n}\n.start[data-v-2396f722]{display:inline-block;margin-top:%?16?%\n}\n.special[data-v-2396f722]{color:#00f;padding:0 %?16?%;border-radius:%?8?%;background:hsla(0,0%,74.5%,.4)\n}\n.count[data-v-2396f722]{color:#00f;padding:0 %?16?%;border-radius:%?8?%;background:hsla(0,0%,74.5%,.4)\n}\n.number[data-v-2396f722]{color:green;padding:0 %?16?%;border-radius:%?8?%;background:hsla(0,0%,74.5%,.4)\n}",""])},b8bb:function(s,t,a){var n=a("90d9");"string"===typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);var i=a("4f06").default;i("4d12cc06",n,!0,{sourceMap:!1,shadowMode:!1})},ccfa:function(s,t,a){"use strict";a.r(t);var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"container"},[a("div",{staticClass:"help-container"},[a("div",{staticClass:"dices left"},[a("img",{staticClass:"dice",attrs:{src:s.diceImgs[0]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[1]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[2]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[3]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[4]}})]),s._m(0),a("div",{staticClass:"dices right"},[a("img",{staticClass:"dice",attrs:{src:s.diceImgs[1]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[1]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[2]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[2]}}),a("img",{staticClass:"dice",attrs:{src:s.diceImgs[4]}})])]),a("my-ad")],1)},i=[function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div",{staticClass:"content"},[a("span",[s._v("左侧为您，右侧对手（可多个）。")]),a("br"),a("span",[s._v("\n        规则：一人喊\n        "),a("span",{staticClass:"count"},[s._v("N")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("X")]),s._v("，则另一人必须喊\n        "),a("span",{staticClass:"count"},[s._v("N+1")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("X")]),s._v("或\n        "),a("span",{staticClass:"count"},[s._v("N")]),s._v("个\n        "),a("span",{staticClass:"count"},[s._v("X + 1")]),s._v("又或\n        "),a("span",{staticClass:"count"},[s._v("N+1")]),s._v("个\n        "),a("span",{staticClass:"count"},[s._v("X+1")]),s._v("这里\n        "),a("span",{staticClass:"special"},[s._v("+1")]),s._v("为例子，当然也可以是\n        "),a("span",{staticClass:"special"},[s._v("+2、+3")]),a("br"),a("span",{staticClass:"start"},[s._v("胜利条件：某方猜测总数高于实际数，如场上共有")]),a("span",{staticClass:"count"},[s._v("4")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("3")]),s._v("，而对手猜有\n        "),a("span",{staticClass:"count"},[s._v("5")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("3")]),s._v("，则您可以开对方，当然反过来说也是成立。\n        "),a("br"),s._v("特殊规则：\n        "),a("span",{staticClass:"special"},[s._v("1")]),s._v("既可以代表\n        "),a("span",{staticClass:"special"},[s._v("1")]),s._v("，也可以代表任何数，如此刻场上您的\n        "),a("span",{staticClass:"special"},[s._v("2")]),s._v("则有\n        个，一个是\n        "),a("span",{staticClass:"special"},[s._v("1")]),s._v("本身，还有个就是\n        "),a("span",{staticClass:"special"},[s._v("1=>2")]),s._v("导致.\n        "),a("br"),a("span",{staticClass:"start"},[s._v("那么，开始吧：")]),s._v("假如若干回合后，您喊了\n        "),a("span",{staticClass:"count"},[s._v("4")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("2")]),s._v("，对手手上握有\n        "),a("span",{staticClass:"count"},[s._v("2")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("2")]),s._v("，他会选择开你（他觉得你没有\n        "),a("span",{staticClass:"count"},[s._v("2")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("2")]),s._v("，因此他就输了），也可能他喊其他，我们姑且认为他也喊2，那么根据规则，他必须喊大于\n        "),a("span",{staticClass:"count"},[s._v("4")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("2")]),s._v("，假如他就是喊\n        "),a("span",{staticClass:"count"},[s._v("5")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("2")]),s._v("，那么您博弈对方，可以开他，那么您赢了，因为一共只有\n        "),a("span",{staticClass:"count"},[s._v("4")]),s._v("个\n        "),a("span",{staticClass:"number"},[s._v("2")]),s._v("，也可以再喊其他，让对手开你，或继续。。。\n        "),a("br"),a("span",{staticClass:"start"},[s._v("至此，相信您有所了解该规则，感谢阅读。")])])])}],c=a("d73d"),e=a("db5c"),l={components:{MyAd:c["a"]},data:function(){return{diceImgs:[e["a"],e["b"],e["c"],e["d"],e["e"],e["f"]]}}},r=l,o=(a("4a29"),a("2877")),d=Object(o["a"])(r,n,i,!1,null,"2396f722",null);d.options.__file="index.vue";t["default"]=d.exports},d612:function(s,t,a){var n=a("77d0");"string"===typeof n&&(n=[[s.i,n,""]]),n.locals&&(s.exports=n.locals);var i=a("4f06").default;i("79db4028",n,!0,{sourceMap:!1,shadowMode:!1})},d73d:function(s,t,a){"use strict";var n=function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("div")},i=[],c={data:function(){return{}}},e=c,l=(a("6092"),a("2877")),r=Object(l["a"])(e,n,i,!1,null,"31aefd7d",null);r.options.__file="ad.vue";t["a"]=r.exports},db5c:function(s,t,a){"use strict";a.d(t,"a",function(){return n}),a.d(t,"b",function(){return i}),a.d(t,"c",function(){return c}),a.d(t,"d",function(){return e}),a.d(t,"e",function(){return l}),a.d(t,"f",function(){return r}),a.d(t,"g",function(){return o});var n="../../static/1.png",i="../../static/2.png",c="../../static/3.png",e="../../static/4.png",l="../../static/5.png",r="../../static/6.png",o="../../static/sound.mp3"}}]);