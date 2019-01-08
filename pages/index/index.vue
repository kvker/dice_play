<template>
  <div class="container">
    <button class="clear-all change" hover-class="change-hover" @click="changeDices"><img :src="button" class="change-image" /></button>
    <div class="dices">
      <img class="dice" v-for="(item, index) of dices" :key="index" :src="diceImgs[item - 1]">
    </div>
    <div v-if="results.length === 1" class="results">
      <span class="straight">顺子, 全部 0 个</span>
    </div>
    <div v-else class="results">
      <span
        class="result"
        v-for="(item, index) of results"
        :key="index"
      >
        {{item.count}} 个
        <img class="dice-small" :src="diceImgs[item.dice - 1]">
      </span>
    </div>
    <button class="help" @click="clickHelp">?</button>
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
  sound,
  button,
} from '../../config/source.js'

let rule = {
  // 骰子个数
  diceCount: 5,
  // 禁止变化, 防止多次
  close: false,
  // 两次最小间距时间, 默认 2
  closeTime: .25,
  // 摇一摇幅度
  range: 3,
  // 骰子最大值
  max: 6,
}

export default {
  components: {
    MyAd
  },
  data() {
    return {
      button,
      dices: [],
      results: [],
      diceImgs: [dice1, dice2, dice3, dice4, dice5, dice6],
      innerAudioContext: uni.createInnerAudioContext()
    }
  },
  onLoad() {
    this.initDices()
    this.listenShake()
    this.innerAudioContext.src = sound
    //#ifdef MP-WEIXIN
    uni.showShareMenu({
      withShareTicket: false
    })
    //#endif
  },
  onShareAppMessage() {
    return {
      title: '摇骰子就是博弈，兄弟，来吧！'
    }
  },
  methods: {
    /**
     * 初始化骰子
     */
    initDices() {
      let dices = []
      for(let i = 0; i < rule.diceCount; i++) {
      	dices.push(6)
      }
      this.dices = dices
    },
    /**
     * 监听摇一摇
     */
    listenShake() {
      return uni.onAccelerometerChange((res) => {
        let range = rule.range
        if(res.x > range || res.y > range || res.z > range) {
          return this.changeDices()
        }
      })
    },
    /**
     * 改变骰子
     */
    changeDices() {
      if(rule.close) return
      
      this.innerAudioContext.stop()
      this.innerAudioContext.play()
      let newDices = []
      for(let i = 0; i < rule.diceCount; i++) {
        newDices.push(Math.floor(Math.random() * rule.max) + 1)
      }
      this.dices = newDices
      this.handleDices(newDices)
      rule.close = true
      return setTimeout(() => {
        rule.close = false
        return uni.hideLoading()
      }, rule.closeTime * 1000)
    },
    /**
     * 处理骰子计分逻辑
     * @param {array} newDices - 新骰子数组, 用来计算返还给 this.dices
     */
    handleDices(newDices) {
      let i, j, k
      let newResults = []
      if(Array.from(new Set(newDices)).length === rule.diceCount) { // 去重查看是否是顺子
        newResults.push('顺子, 全部为 0 个')
      } else {
        let countOne = 0 // 1 的特殊处理
        for(let i = 0; i < rule.max; i++) {
          let j = i + 1
          let countJ = this.howManyCount(j)
          countJ = countJ === rule.max ? 7 : countJ + countOne
          newResults.push({
            count: countJ,
            dice: j
          })
          if(j === 1) { // 1 要留下来充数
            countOne = countJ
          }
        }
      }
      this.results = newResults
      uni.vibrateLong() // 震动
    },
    /**
     * 计分逻辑
     * @param {number} point - 根据传进来的点数遍历所有骰子计算分数(所有数)
     */
    howManyCount(point) {
      let count = 0
      let dices = this.dices
      for(let i = 0; i < dices.length; i++) {
        let item = dices[i]
        if(item === point) {
          count++
        }
      }
      return count
    },
    /**
     * 点击前往帮助
     */
    clickHelp() {
      uni.navigateTo({
        url: '/pages/help/index'
      })
    }
  }
}
</script>

<style scoped>
.container {
  padding: 0;
}
.change {
  margin-top: 80upx;
  border-radius: 46upx;
}
.change-hover {
  box-shadow: 0 2upx 4upx 4upx #d8d8d8;
}
.change-image {
  width: 440upx;
  height: 92upx;
}
.dices {
  margin-top: 16upx;
  text-align: center;
}
.dice {
  display: inline-block;
  height: 100upx;
  width: 100upx;
}
.dice:nth-child(3) {
  display: block;
  margin-left: calc(50% - 50upx);
}
.dice:nth-child(2) {
  margin-left: 200upx;
}
.dice:nth-child(5) {
  margin-left: 200upx;
}
.results {
  display: flex;
  flex-wrap: wrap;
  box-sizing: border-box;
  border-left: 0;
  border-bottom: 0;
  margin: 16upx 5% 0 5%;
}
.straight {
  line-height: 96upx;
  width: 100%;
  text-align: center;
  font-size: 48upx;
  box-sizing: border-box;
  color: #00a;
}
.result {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50%;
  text-align: center;
  font-size: 40upx;
  color: #333;
  margin-top: 40upx;
}
.dice-small {
  display: inline-block;
  height: 40upx;
  width: 40upx;
  margin-left: 16upx;
}
.help {
  position: absolute;
  top: 100upx;
  right: 16upx;
  width: 80upx;
  height: 80upx;
}
</style>
