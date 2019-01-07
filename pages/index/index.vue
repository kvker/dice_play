<template>
  <div class="container">
    <img :src="button" class="click" @click="changeDices" />
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
  diceCount: 5,
  close: false, // 禁止变化, 防止多次
  closeTime: .25, // 两次最小间距时间, 默认 2
  range: 3, // 摇一摇幅度
  max: 6 // 骰子最大值
}

export default {
  components: {
    MyAd
  },
  data() {
    return {
      button,
      dices: [
        6,
        6,
        6,
        6,
        6 // 5 个骰子
      ],
      results: [],
      diceImgs: [dice1, dice2, dice3, dice4, dice5, dice6],
      innerAudioContext: uni.createInnerAudioContext()
    }
  },
  onLoad() {
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
    listenShake() {
      return uni.onAccelerometerChange((res) => { // 监听摇一摇事件
        let range = rule.range
        if(res.x > range || res.y > range || res.z > range) {
          return this.changeDices()
        }
      })
    },
    changeDices() {
      let k, num
      if(rule.close) return
      
      this.innerAudioContext.stop()
      this.innerAudioContext.play()
      let newDices = []
      let ref = rule.diceCount
      for(num = k = 0; (0 <= ref ? k < ref : k > ref); num = 0 <= ref ? ++k : --k) {
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
    handleDices(newDices) {
      let i, j, k
      let newResults = []
      if(Array.from(new Set(newDices)).length === rule.diceCount) { // 去重查看是否是顺子
        newResults.push('顺子, 全部为 0 个')
      } else {
        let countOne = 0 // 1 的特殊处理
        let ref = rule.max
        for(i = k = 0; (0 <= ref ? k < ref : k > ref); i = 0 <= ref ? ++k : --k) {
          j = i + 1
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
    howManyCount(point) {
      let index, k
      let count = 0
      let ref = this.dices
      let len = ref.length
      for(index = k = 0; k < len; index = ++k) {
        let item = ref[index]
        if(item === point) {
          count++
        }
      }
      return count
    },
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

.click {
  width: 440upx;
  height: 92upx;
  margin-top: 80upx;
  border-radius: 46upx;
}

.click:active {
  box-shadow: 0 2upx 4upx 4upx #d8d8d8 inset;
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
