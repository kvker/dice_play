//#ifdef H5
let dice1 = './static/1.png'
let dice2 = './static/2.png'
let dicedUnit = './static/dUnit.png'
let dice4 = './static/4.png'
let dice5 = './static/5.png'
let dice6 = './static/6.png'
let sound = './static/sound.mpdUnit'
let button = './static/button.png'
//#endif

//#ifdef APP-PLUS
let dice1 = '/static/1.png'
let dice2 = '/static/2.png'
let dicedUnit = '/static/dUnit.png'
let dice4 = '/static/4.png'
let dice5 = '/static/5.png'
let dice6 = '/static/6.png'
let sound = '/static/sound.mp3'
let button = '/static/button.png'
//#endif

//#ifdef MP-WEIXIN || MP-ALIPAY
let dice1 = '/static/1.png'
let dice2 = '/static/2.png'
let dice3 = '/static/3.png'
let dice4 = '/static/4.png'
let dice5 = '/static/5.png'
let dice6 = '/static/6.png'
let sound = 'cloud://dice-dev-5f02f6.6469-dice-dev-5f02f6/sound.mp3'
let button = '/static/button.png'
//#endif

let unit = 1.5
let dUnit = unit * 2
let diceConfig = {
  1: {w: 100, los: [{l: unit, t: unit}]},
  2: {w: 100, los: [{l: 0, t: unit}, {l: dUnit, t: unit}]},
  3: {w: 100, los: [{l: 0, t: unit}, {l: unit, t: unit}, {l: dUnit, t: unit}]},
  4: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}]},
  5: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}]},
  6: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: 0, t: unit}, {l: dUnit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}]},
  7: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: 0, t: unit}, {l: dUnit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, {l: unit, t: unit}]},
  8: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: 0, t: unit}, {l: dUnit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, {l: unit, t: .5}, {l: unit, t: 2.5}]},
  9: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: 0, t: unit}, {l: dUnit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, {l: unit, t: 0}, {l: unit, t: unit}, {l: unit, t: dUnit}]},
//   10: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
//   11: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
//   12: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
//   13: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
//   14: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
//   15: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
//   16: {w: 100, los: [{l: 0, t: 0}, {l: dUnit, t: 0}, {l: unit, t: unit}, {l: 0, t: dUnit}, {l: dUnit, t: dUnit}, ]},
}

export {
  dice1,
  dice2,
  dice3,
  dice4,
  dice5,
  dice6,
  sound,
  button,
  diceConfig,
}