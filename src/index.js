import './index.css'

console.log('knife tour')

const game = document.querySelector('#game')
const canvas = game.querySelector('#board')
const ctx = canvas.getContext('2d')
const { width: w, height: h } = canvas

ctx.fillStyle = 'black'
ctx.fillRect(0, 0, w, h)
ctx.fillStyle = 'white'
ctx.font = '18px Share Tech Mono'
ctx.textAlign = 'center'

ctx.fillText('Knife # Tour @ 2', w / 2, h / 2)

