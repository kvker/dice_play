<template>
  <div class="container">
    <div class="help-container">
      <div class="dices left">
        <img class="dice" :src="diceImgs[0]">
        <img class="dice" :src="diceImgs[1]">
        <img class="dice" :src="diceImgs[2]">
        <img class="dice" :src="diceImgs[3]">
        <img class="dice" :src="diceImgs[4]">
      </div>
      <div class="content">
        <span>左侧为您，右侧对手（可多个）。</span>
        <br>
        <span>
          规则：一人喊
          <span class="count">N</span>个
          <span class="number">X</span>，则另一人必须喊
          <span class="count">N+1</span>个
          <span class="number">X</span>或
          <span class="count">N</span>个
          <span class="count">X + 1</span>又或
          <span class="count">N+1</span>个
          <span class="count">X+1</span>这里
          <span class="special">+1</span>为例子，当然也可以是
          <span class="special">+2、+3</span>
          <br>
          <span class="start">胜利条件：某方猜测总数高于实际数，如场上共有</span>
          <span class="count">4</span>个
          <span class="number">3</span>，而对手猜有
          <span class="count">5</span>个
          <span class="number">3</span>，则您可以开对方，当然反过来说也是成立。
          <br>特殊规则：
          <span class="special">1</span>既可以代表
          <span class="special">1</span>，也可以代表任何数，如此刻场上您的
          <span class="special">2</span>则有
          个，一个是
          <span class="special">1</span>本身，还有个就是
          <span class="special">1=>2</span>导致.
          <br>
          <span class="start">那么，开始吧：</span>假如若干回合后，您喊了
          <span class="count">4</span>个
          <span class="number">2</span>，对手手上握有
          <span class="count">2</span>个
          <span class="number">2</span>，他会选择开你（他觉得你没有
          <span class="count">2</span>个
          <span class="number">2</span>，因此他就输了），也可能他喊其他，我们姑且认为他也喊2，那么根据规则，他必须喊大于
          <span class="count">4</span>个
          <span class="number">2</span>，假如他就是喊
          <span class="count">5</span>个
          <span class="number">2</span>，那么您博弈对方，可以开他，那么您赢了，因为一共只有
          <span class="count">4</span>个
          <span class="number">2</span>，也可以再喊其他，让对手开你，或继续。。。
          <br>
          <span class="start">至此，相信您有所了解该规则，感谢阅读。</span>
        </span>
      </div>
      <div class="dices right">
        <img class="dice" :src="diceImgs[1]">
        <img class="dice" :src="diceImgs[1]">
        <img class="dice" :src="diceImgs[2]">
        <img class="dice" :src="diceImgs[2]">
        <img class="dice" :src="diceImgs[4]">
      </div>
    </div>
    <my-ad />
  </div>
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

span {
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
  background: rgba(190, 190, 190, .4);
}

.count {
  color: blue;
  padding: 0 16upx;
  border-radius: 8upx;
  background: rgba(190, 190, 190, .4);
}

.number {
  color: green;
  padding: 0 16upx;
  border-radius: 8upx;
  background: rgba(190, 190, 190, .4);
}
</style>
