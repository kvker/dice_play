<template>
  <view class="container">
    <view class="ctrls">
      <picker class="picker-dice-number" @change="changePicker" :value="index" :range="supportDiceNumbers">
        <text>数量: {{supportDiceNumbers[index]}}</text>
        <!-- <text class="pick-remind">少于5个比点</text> -->
      </picker>
      <image :src="button" class="change change-image" hover-class="change-hover" @click="changeDices"></image>
      <button class="help" @click="clickHelp">?</button>
    </view>
    <view class="dices">
      <view class="dice" :style="diceStyles[index]" v-for="(item, index) of dices" :key="index">
        <img mode="aspectFit" class="dice-image" :src="diceImgs[item - 1]">
      </view>
    </view>
    <view v-if="lessThenMin && played" class="results">
      <text class="straight">{{points}}点</text>
    </view>
    <view v-if="results.length === 1" class="results">
      <text class="straight">顺子, 全部 0 个</text>
    </view>
    <view v-else class="results">
      <view class="result" v-for="(item, index) of results" :key="index">
        <text>{{item.count}} 个</text>
        <image class="dice-small" :src="diceImgs[item.dice - 1]"></image>
      </view>
    </view>
    <my-ad />
  </view>
</template>

<script>
  import MyAd from '@/components/ad.vue'
  import {
    dice1,
    dice2,
    dice3,
    dice4,
    dice5,
    dice6,
    sound,
    button,
    diceConfig,
  } from '@/config/source.js'

  let rule = {
    supportDiceNumbers: [5, 6, 7, 8, 9, 4, 3, 2, 1],
    // 禁止变化, 防止多次
    close: false,
    // 两次最小间距时间, 默认 2
    closeTime: .25,
    // 摇一摇幅度
    range: 3,
    // 骰子最大值
    max: 6,
    // 可玩的最小值
    minCount: 5,
  }

  export default {
    components: {
      MyAd
    },
    data() {
      return {
        played: false,
        index: uni.getStorageSync('diceCountIndex') || 0,
        supportDiceNumbers: rule.supportDiceNumbers,
        button,
        dices: [],
        results: [],
        diceImgs: [dice1, dice2, dice3, dice4, dice5, dice6],
        innerAudioContext: uni.createInnerAudioContext(),
        diceConfig,
      }
    },
    computed: {
      /**
       * 非摇骰子时候的点数
       */
      points() {
        let res = this.dices.reduce((pre, cur) => pre + cur, 0)
        return res
      },
      /**
       * 是否低于可玩的最小值
       */
      lessThenMin() {
        return this.diceCount < rule.minCount
      },
      diceCount() {
        return this.supportDiceNumbers[this.index]
      },
      diceStyles() {
        let diceConfig = this.diceConfig[this.diceCount],
          width = diceConfig.w,
          los = diceConfig.los,
          results = []
        los.forEach((lo, index) => {
          results.push(`left: ${width * lo.l / 2}px;top: ${width * lo.t / 2}px;`)
        })
        return results
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
        title: '君子九个骰，小人瑟瑟抖。'
      }
    },
    methods: {
      changePicker(e) {
        let index = Number(e.detail.value)
        this.index = index
        this.initDices()
        this.results = []
        this.played = false
        uni.setStorage({
          key: 'diceCountIndex',
          data: index,
          success(res) {
            // console.log('success')
          }
        })
      },
      getDiceStyle() {
        let config = this.diceConfig[this.diceCount],
          width = config.w,
          locations = config.lo,
          location = locations[index]
        return `left: ${width * location.l}upx;top: ${width * location.t}upx;`
      },
      /**
       * 初始化骰子
       */
      initDices() {
        let dices = []
        for (let i = 0; i < this.diceCount; i++) {
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
          if (res.x > range || res.y > range || res.z > range) {
            return this.changeDices()
          }
        })
      },
      /**
       * 改变骰子
       */
      changeDices() {
        if (rule.close) return
        this.played = true

        this.innerAudioContext.stop()
        this.innerAudioContext.play()
        let newDices = []
        for (let i = 0; i < this.diceCount; i++) {
          newDices.push(Math.floor(Math.random() * rule.max) + 1)
        }
        this.dices = newDices
        uni.vibrateLong() // 震动

        // 如果数量少于最小值, 则当做普通骰子用
        if(this.lessThenMin) return
        
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
        let newResults = []
        if (Array.from(new Set(newDices)).length === this.diceCount) { // 去重查看是否是顺子
          newResults.push('顺子, 全部为 0 个')
        } else {
          let countOne = 0 // 1 的特殊处理
          for (let i = 0; i < rule.max; i++) {
            let j = i + 1,
              countJ = this.howManyCount(j),
              diceCount = this.diceCount
            countJ = countJ === diceCount ? diceCount + 1 : countJ + countOne
            newResults.push({
              count: countJ,
              dice: j
            })
            if (j === 1) { // 1 要留下来充数
              countOne = countJ
            }
          }
        }
        this.results = newResults
      },
      /**
       * 计分逻辑
       * @param {number} point - 根据传进来的点数遍历所有骰子计算分数(所有数)
       */
      howManyCount(point) {
        let count = 0,
          dices = this.dices
        for (let i = 0; i < dices.length; i++) {
          let item = dices[i]
          if (item === point) {
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
    --height: 92upx;
    --top: 80upx;
    padding: 0;
  }

  .ctrls {
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-top: var(--top);
    padding: 0 20upx;
    font-size: 24upx;
  }
  
  .picker-dice-number {
    position: relative;
    width: var(--width);
    border: 2upx dashed #D8D8D8;
    padding: 2upx 4upx;
  }
  
  .pick-remind {
    position: absolute;
    left: 0;
    top: -80upx;
    width: 200upx;
    font-size: 24upx;
    color: #999;
  }

  .change {
    width: 440upx;
    height: var(--height);
    border-radius: 46upx;
  }

  .change:active {
    box-shadow: 0 2upx 4upx 4upx #d8d8d8;
  }

  .dices {
    position: relative;
    display: flex;
    justify-content: space-between;
    align-content: space-between;
    flex-wrap: wrap;
    width: 400upx;
    height: 400upx;
    margin-top: 16upx;
  }

  .dice {
    position: absolute;
  }

  .dice-image {
    --width: 100upx;
    width: var(--width);
    height: var(--width);
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
    justify-content: center;
    align-items: center;
    width: 50%;
    font-size: 40upx;
    color: #333;
    margin-top: 40upx;
  }

  .dice-small {
    --width: 40upx;
    display: inline-block;
    height: var(--width);
    width: var(--width);
    margin-left: 16upx;
  }

  .help {
    width: var(--height);
    height: var(--height);
    margin: 0;
  }
</style>
