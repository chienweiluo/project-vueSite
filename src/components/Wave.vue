<template>
  <canvas :id="id">創順科技</canvas>
</template>
<style lang="scss" scoped>
#firstScreenBg {
  position: absolute;
  bottom: 0;
  left: 0;
}
#secondBg {
  position: absolute;
  left: 0;
  transform: rotateX(180deg)
}
#bottomBg {
  position: absolute;
  bottom: 0;
  left: 0;
}
</style>

<script>
const SimplexNoise = require('simplex-noise')

export default {
  props: ['id', 'direction'],
  data () {
    return {
      canvasDOM: null,
      context: null,
      simplex: null,
      w: 0,
      h: 0,
      cx: 0,
      cy: 0,
      count: 0,
      xoff: 0,
      xinc: 0,
      yoff: 0,
      yinc: 0,
      goff: 0,
      ginc: 0,
      length: 0,
      amp: 0
    }
  },
  methods: {
    init () {
      this.canvasDOM = document.getElementById(this.id)
      this.context = this.canvasDOM.getContext('2d')
      this.simplex = new SimplexNoise()
      this.events()
      this.reset()
      this.loop()
    },
    reset () {
      this.w = document.documentElement.clientWidth
      this.h = window.innerHeight
      this.cx = this.w / 2
      this.cy = this.h / 2
      this.canvasDOM.width = this.w
      this.canvasDOM.height = this.h

      this.count = Math.floor(this.w / 50)
      this.xoff = 0
      this.xinc = 0.05
      this.yoff = 0
      this.yinc = 0.003
      this.goff = 0
      this.ginc = 0.003
      if (this.id === 'bottomBg') {
        this.y = this.h * 0.2
      } else {
        this.y = this.h * 0.75
      }

      this.length = this.w
      this.amp = 80
    },
    generateWave () {
      this.context.beginPath()
      for (let i = 0; i <= this.count; i++) {
        this.xoff += this.xinc
        let x = this.cx - this.length / 2 + (this.length / this.count) * i
        let y
        if (this.id === 'bottomBg') {
          y = this.y + ((this.simplex.noise2D(this.xoff, this.yoff)) * this.amp) - (5 * i)
        } else {
          y = this.y + ((this.simplex.noise2D(this.xoff, this.yoff)) * this.amp) - (17 * i)
        }

        this.context[ i === 0 ? 'moveTo' : 'lineTo' ](x, y)
      }
      this.context.lineTo(this.w, this.h)
      this.context.lineTo(0, this.h)
      this.context.closePath()
      this.gradient = this.context.createLinearGradient(this.w, this.h, this.w, 0)
      if (this.id === 'bottomBg') {
        this.gradient.addColorStop(0, 'rgba(0, 116, 200, .8)')
        this.gradient.addColorStop(0.5, 'rgba(0, 116, 200, .8)')
        this.gradient.addColorStop(0.9, 'rgba(134, 244, 204, .3)')
        this.gradient.addColorStop(1, 'rgba(134, 244, 204, .3)')
      } else {
        this.gradient.addColorStop(0, 'rgba(0, 116, 200, .7)')
        this.gradient.addColorStop(0.7, 'rgba(134, 244, 204, .5)')
        this.gradient.addColorStop(1, 'rgba(134, 244, 204, .5)')
      }

      this.context.fillStyle = this.gradient
      this.context.fill()
    },
    loop () {
      requestAnimationFrame(this.loop)
      this.context.clearRect(0, 0, this.w, this.h)
      this.xoff = 0
      this.generateWave()
      this.generateWave()
      this.generateWave()
      this.yoff += this.yinc
      this.goff += this.ginc
    },
    events () {
      window.addEventListener('resize', this.reset)
    }
  },
  mounted () {
    this.init()
  }
}
</script>
