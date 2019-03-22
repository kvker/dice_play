<template>
  <view class="container">
    <my-ad />
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
        <text>{{item.count}}x</text><image class="dice-small" :src="diceImgs[item.dice - 1]"></image>
      </view>
    </view>
    <view class="ctrls">
      <picker class="picker-dice-number" @change="changePicker" :value="index" :range="supportDiceNumbers">
        <text>数量: {{supportDiceNumbers[index]}}</text>
      </picker>
      <view class="change" hover-class="change-hover" @click="changeDices">摇一摇</view>
      <view class="help" @click="clickHelp">?</view>
    </view>
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
    // 两次最小间距时间
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
        // #ifndef MP-ALIPAY
        innerAudioContext: uni.createInnerAudioContext(),
        //#endif
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
      //#ifndef MP-ALIPAY
      this.innerAudioContext.src = sound
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
        // #ifndef MP-ALIPAY
        this.innerAudioContext.stop()
        this.innerAudioContext.play()
        //#endif
        let newDices = []
        // 随机生成骰子
        for (let i = 0; i < this.diceCount; i++) {
          newDices.push(Math.floor(Math.random() * rule.max) + 1)
        }
        this.dices = newDices
        // 震动
        uni.vibrateLong()

        // 如果数量少于最小值, 则当做普通骰子用
        if (this.lessThenMin) return

        this.handleDices(newDices)
        rule.close = true
        return setTimeout(() => rule.close = false, rule.closeTime * 1000)
      },
      /**
       * 处理骰子计分逻辑
       * @param {array} newDices - 新骰子数组, 用来计算返还给 this.dices
       * @return 返回 { dice: [number],count: [number] } 骰子与数量
       */
      handleDices(newDices) {
        let newResults = []
        // 去重查看是否是顺子
        if (Array.from(new Set(newDices)).length === this.diceCount) {
          newResults.push('顺子, 全部为 0 个')
        } else {
          // 1 的特殊处理
          let countOne = 0
          for (let i = 0; i < rule.max; i++) {
            let j = i + 1,
              countJ = this.howManyCount(j),
              diceCount = this.diceCount
            countJ = countJ === diceCount ? diceCount + 1 : countJ + countOne
            newResults.push({
              count: countJ,
              dice: j
            })
            // 1 要留下来充数
            if (j === 1) {
              countOne = countJ
            }
          }
        }
        this.results = newResults
      },
      /**
       * 计分逻辑
       * @param {number} point - 根据传进来的点数遍历所有骰子计算分数(所有数)
       * @return 返回有几个, 比如4个3
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
    margin-bottom: 120upx;
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
    display: flex;
    justify-content: center;
    align-items: center;
    width: 440upx;
    height: var(--height);
    border-radius: 46upx;
    background: rgb(252, 157, 93);
    color: white;
    font-size: 32upx;
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
    justify-content: space-around;
    width: 100%;
    box-sizing: border-box;
    border-left: 0;
    border-bottom: 0;
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
    width: 12%;
    font-size: 32upx;
    color: #333;
  }

  .dice-small {
    --width: 40upx;
    display: inline-block;
    height: var(--width);
    width: var(--width);
  }

  .help {
    display: flex;
    justify-content: center;
    align-items: center;
    --width: 80upx;
    width: var(--width);
    height: var(--width);
    margin: 0;
    background: rgb(252, 157, 93);
    color: white;
    font-size: 32upx;
    border-radius: 8upx;
  }
</style>
