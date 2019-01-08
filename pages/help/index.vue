<template>
  <view class="container">
    <view class="help-container">
      <view class="dices left">
        <img class="dice" :src="diceImgs[0]">
        <img class="dice" :src="diceImgs[1]">
        <img class="dice" :src="diceImgs[2]">
        <img class="dice" :src="diceImgs[3]">
        <img class="dice" :src="diceImgs[4]">
      </view>
      <view class="content">
        <text>左侧为您，右侧对手（可多个）</text>
        <view>
          <text>规则：一人喊</text>
          <text class="count">N</text>
          <text>个</text>
          <text class="number">X</text>
          <text>，则另一人必须喊</text>
          <text class="count">N+1</text>
          <text>个</text>
          <text class="number">X</text>
          <text>或</text>
          <text class="count">N</text>
          <text>个</text>
          <text class="count">X + 1</text>
          <text>又或</text>
          <text class="count">N+1</text>
          <text>个</text>
          <text class="count">X+1</text>
          <text>这里</text>
          <text class="special">+1</text>
          <text>为例子，当然也可以是</text>
          <text class="special">+2、+3</text>
          <text class="start">胜利条件：某方猜测总数高于实际数</text>
          <br>
          <text>如场上共有</text>
          <text class="count">4</text>
          <text>个</text>
          <text class="number">3</text>
          <text>，而对手猜有</text>
          <text class="count">5</text>
          <text>个</text>
          <text class="number">3</text>
          <text>，则您可以开对方，当然反过来说也是成立。</text>
          <text>特殊规则：</text>
          <text class="special">1</text>
          <text>既可以代表</text>
          <text class="special">1</text>
          <text>，也可以代表任何数，如此刻场上您的</text>
          <text class="special">2</text>
          <text>
            则有
            个，一个是
          </text>
          <text class="special">1</text>
          <text>本身，还有个就是</text>
          <text class="special">1=>2</text>
          <text>导致.</text>
          <text class="start">那么，开始吧：</text>
          <br>
          <text>假如若干回合后，您喊了</text>
          <text class="count">4</text>
          <text>个</text>
          <text class="number">2</text>
          <text>，对手手上握有</text>
          <text class="count">2</text>
          <text>个</text>
          <text class="number">2</text>
          <text>，他会选择开你（他觉得你没有</text>
          <text class="count">2</text>
          <text>个</text>
          <text class="number">2</text>
          <text>，因此他就输了），也可能他喊其他，我们姑且认为他也喊2，那么根据规则，他必须喊大于</text>
          <text class="count">4</text>
          <text>个</text>
          <text class="number">2</text>
          <text>，假如他就是喊</text>
          <text class="count">5</text>
          <text>个</text>
          <text class="number">2</text>
          <text>，那么您博弈对方，可以开他，那么您赢了，因为一共只有</text>
          <text class="count">4</text>
          <text>个</text>
          <text class="number">2</text>
          <text>，也可以再喊其他，让对手开你，或继续。。。</text>
          <text class="start">至此，相信您有所了解该规则，感谢阅读。</text>
        </view>
      </view>
      <view class="dices right">
        <img class="dice" :src="diceImgs[1]">
        <img class="dice" :src="diceImgs[1]">
        <img class="dice" :src="diceImgs[2]">
        <img class="dice" :src="diceImgs[2]">
        <img class="dice" :src="diceImgs[4]">
      </view>
    </view>
    <my-ad/>
  </view>
</template>

<script>
import MyAd from '../../components/ad.vue'
import {
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
} from '../../config/source.js'

export default {
  components: {
    MyAd,
  },
  data: function() {
    return {
      diceImgs: [dice1, dice2, dice3, dice4, dice5, dice6]
    }
  },
}
</script>

<style scoped>
.container {
  padding: 0;
}
.help-container {
  display: flex;
  justify-content: space-between;
  height: 100%;
}
.dices {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height: 100%;
}
.dice {
  display: inline-block;
  height: 120upx;
  width: 120upx;
}
.left {
  color: red;
}
.right {
  color: green;
}
.content {
  flex: 1;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  padding: 32upx 16upx;
  overflow-y: auto;
}
text {
  margin-bottom: 16upx;
  font-size: 28upx;
}
.start {
  display: inline-block;
  margin-top: 16upx;
}
.special {
  color: blue;
  padding: 0 16upx;
  border-radius: 8upx;
  background: rgba(190, 190, 190, 0.4);
}
.count {
  color: blue;
  padding: 0 16upx;
  border-radius: 8upx;
  background: rgba(190, 190, 190, 0.4);
}
.number {
  color: green;
  padding: 0 16upx;
  border-radius: 8upx;
  background: rgba(190, 190, 190, 0.4);
}
</style>
