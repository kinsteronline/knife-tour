import './index.css'

console.log('knife tour')

const game = document.querySelector('#game')
const canvas = game.querySelector('#board')
const ctx = canvas.getContext('2d')
const { width: w, height: h } = canvas

function KeyControls (document) {

  const keys = {}

  document.addEventListener('keydown', (e) => {
    if ([37,38,39,40].indexOf(e.which) > -1) {
      e.preventDefault()
    } // keep control of the arrow keys
    keys[e.which] = true
  }, false)

  document.addEventListener('keyup', (e) => {
    keys[e.which] = false
  }, false)

  return {
    get action () {
      return keys[32]
    },
    get x () {
      if (keys[72] || keys[37]) return -1
      if (keys[76] || keys[39]) return 1
      return 0
    },
    get y () {
      if (keys[75] || keys[38]) return -1
      if (keys[74] || keys[40]) return 1
      return 0
    },
  }
}

const controls = KeyControls(document)

let x = 16 * 10
let y = 16 * 10

let Δ = 0
let last = 0

function loop (ms) {
  requestAnimationFrame(loop)

  const total  = ms / 1000 // working in seconds
  Δ = total - last
  last = total

  x = x + (controls.x)
  if (x <= 0) x = 0
  if (x > 304) x = 304

  y = y + (controls.y)
  if (y < 16) y = 16
  if (y > 320) y = 320

  ctx.fillStyle = 'black'
  ctx.fillRect(0, 0, w, h)

  ctx.strokeStyle = '#413839'
  for (let i = 0; i <= 320; i = i + 16) {
    ctx.beginPath()
    ctx.moveTo(0, i)
    ctx.lineTo(360, i)
    ctx.stroke()
  }
  for (let i = 0; i <= 360; i = i + 16) {
    ctx.beginPath()
    ctx.moveTo(i, 0)
    ctx.lineTo(i, 360)
    ctx.stroke()
  }

  ctx.fillStyle = '#43BFC7'
  ctx.font = '16px Share Tech Mono'
  // ctx.textAlign = 'center'
  ctx.fillText('@', x + 4, y - 2)

}
requestAnimationFrame(loop)

