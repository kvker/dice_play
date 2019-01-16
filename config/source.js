//#ifdef H5
let dice1 = './static/1.png'
let dice2 = './static/2.png'
let dice3 = './static/3.png'
let dice4 = './static/4.png'
let dice5 = './static/5.png'
let dice6 = './static/6.png'
let sound = './static/sound.mp3'
let button = './static/button.png'
//#endif

//#ifdef APP-PLUS
let dice1 = '/static/1.png'
let dice2 = '/static/2.png'
let dice3 = '/static/3.png'
let dice4 = '/static/4.png'
let dice5 = '/static/5.png'
let dice6 = '/static/6.png'
let sound = '/static/sound.mp3'
let button = '/static/button.png'
//#endif

//#ifdef MP-WEIXIN
let dice1 = '/static/1.png'
let dice2 = '/static/2.png'
let dice3 = '/static/3.png'
let dice4 = '/static/4.png'
let dice5 = '/static/5.png'
let dice6 = '/static/6.png'
let sound = 'cloud://dice-dev-5f02f6.6469-dice-dev-5f02f6/sound.mp3'
let button = '/static/button.png'
//#endif

let diceConfig = {
  1: {w: 100, los: [{l: 1.5, t: 1.5}]},
  2: {w: 100, los: [{l: 0, t: 1.5}, {l: 3, t: 1.5}]},
  3: {w: 100, los: [{l: 0, t: 1.5}, {l: 1.5, t: 1.5}, {l: 3, t: 1.5}]},
  4: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 0, t: 3}, {l: 3, t: 3}]},
  5: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}]},
  6: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 0, t: 1.5}, {l: 3, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}]},
  7: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 0, t: 1.5}, {l: 3, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, {l: 1.5, t: 1.5}]},
  8: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 0, t: 1.5}, {l: 3, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, {l: 1.5, t: .5}, {l: 1.5, t: 2.5}]},
  9: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 0, t: 1.5}, {l: 3, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, {l: 1.5, t: 0}, {l: 1.5, t: 1.5}, {l: 1.5, t: 3}]},
//   10: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
//   11: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
//   12: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
//   13: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
//   14: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
//   15: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
//   16: {w: 100, los: [{l: 0, t: 0}, {l: 3, t: 0}, {l: 1.5, t: 1.5}, {l: 0, t: 3}, {l: 3, t: 3}, ]},
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