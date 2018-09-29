<template>
  <div :class="['container', quilityVisible ? 'visible': 'hidden-down' ]" id="Quility">
    <h3 class="quality-title">我們珍視的品質</h3>
    <section ref="satellite-container" class="satellite-container container">
      <div ref="satellite-wrapper" :class="['satellite-wrapper',quilityVisible ? 'visible': 'hidden-down' ]">
        <div ref="satellite"
          class="satellite"
          :style="{borderColor: circleShine ? 'lightblue' : '#ddd'}">
          <img :src="LOGOWITHTEXT"
            alt="CS"
            class="core">
        </div>
        <figure ref="judgement" class="oval judgement" :style="{transform: satelliteTransform(-35, 0), opacity: opacity}"></figure>
        <figure ref="excellent" class="oval excellent" :style="{transform: satelliteTransform(-135, 0), opacity: opacity}"></figure>
        <figure ref="passion" class="oval passion" :style="{transform: satelliteTransform(30, -30), opacity: opacity}"></figure>
        <figure ref="communicate" class="oval communicate" :style="{transform: satelliteTransform(40, 20), opacity: opacity}"></figure>
        <figure ref="share" class="oval share" :style="{transform: satelliteTransform(10, 100), opacity: opacity}"></figure>
      </div>
    </section>
  </div>
</template>

<script>
import {LOGOWITHTEXT} from '../information'

export default {
  props: ['scrollY', 'quilityVisible'],
  data () {
    return {
      LOGOWITHTEXT,
      circleShine: false,
      enterPosition: 0,
      opacity: 0
    }
  },
  methods: {
    satelliteTransform (posX, posY) {
      const animationDistance = 250
      if (window.innerWidth < 760) {
        this.opacity = 1
        return
      }
      if ((this.scrollY > this.enterPosition)) {
        if ((this.scrollY > (this.enterPosition + animationDistance))) {
          this.circleShine = true
          return `translate(${posX}px, ${posY}px)`
        }
        let x = 0
        let y = 0
        let calculate = (this.scrollY - this.enterPosition) / animationDistance
        x = ((calculate) * posX)
        y = ((x * posY) / posX)

        if (this.opacity < 1) {
          if (calculate < 0.2) {
            this.opacity = 0
          } else if (calculate > 0.5) {
            this.opacity = 1
          } else {
            this.opacity = calculate
          }
        }

        return `translate(${x}px, ${y}px)`
      } else {
        this.circleShine = false
        this.opacity = 0
      }
    }
  },
  mounted () {
    this.enterPosition = this.$refs['satellite-container'].offsetParent.offsetTop - 50 // the space to animation early
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  margin: 0 auto;
  margin-bottom: 120px;
  transition: opacity .3s ease-in-out .2s,transform .3s ease-in-out .2s ;
  z-index: 1;
}

.quality-title {
  color: #333;
  font-size: 24px;
  font-weight: normal;
  letter-spacing: 1px;
  text-align: center;
  height: 33px;
  margin-bottom: 30px;
}

.satellite-container {
  position: relative;
  display: flex;
  justify-content: center;
}

.satellite-wrapper {
  position: relative;
  display: inline-block;
  padding: 50px;
  border: 2px dashed #2da3da;
  border-radius: 50%;
  transition: opacity .3s ease-in-out .5s,transform .3s ease-in-out .5s ;
  @include small-pad-width {
    padding: 0;
    border: none;
  }

  @include phone-width {
    padding: 0;
    border: none;
  }
}

.satellite {
  position: relative;
  display: inline-block;
  width: 350px;
  height: 350px;
  border: 75px solid #ddd;
  border-radius: 50%;
  transition: border .5s ease-in;
  .core {
    width: 100%;
    height: 100%;
    padding: 20px;
    border-radius: 50%;
  }
  @include phone-width {
    width: auto;
    visibility: hidden;
    top: 60px;
  }
}

%bgCommon {
  position: relative;
  width: 120px;
  height: 120px;
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
}

@mixin label ($color, $text) {
  content: $text;
  color: $color;
}

%labelCommon {
  position: absolute;
  display: inline-block;
  width: 100%;
  left: 0;
  bottom: -35px;
  text-align: center;
  font-size: 16px;
}

.oval {
  margin: 5px;
  transition: opacity .2s ease-in-out;
}

.judgement {
  background-image: url('../assets/satellite-judgement.svg');
  @extend %bgCommon;
  position: absolute;
  left: 20px;
  top: 0;
  &::after {
    @extend %labelCommon;
    @include label(#816dba, '擁有專業判斷')
  }
}

.excellent {
  background-image: url('../assets/satellite-excellent.svg');
  @extend %bgCommon;
  position: absolute;
  left: 20px;
  top: 180px;
  &::after {
    @extend %labelCommon;
    @include label(#006bc0, '個人卓越發展')
  }
}

.passion {
  background-image: url('../assets/satellite-passion.svg');
  @extend %bgCommon;
  position: absolute;
  left: 20px;
  top: 360px;
  &::after {
    @extend %labelCommon;
    @include label(#2796ca, '保持熱情')
  }
}

.communicate {
  background-image: url('../assets/satellite-communicate.svg');
  @extend %bgCommon;
  position: absolute;
  top: 0;
  right: 20px;
  &::after {
    @extend %labelCommon;
    @include label(#29a4c5, '善於溝通')
  }
}

.share {
  background-image: url('../assets/satellite-share.svg');
  @extend %bgCommon;
  position: absolute;
  top: 180px;
  right: 20px;
  &::after {
    @extend %labelCommon;
    @include label(#4ac2c2, '樂於分享')
  }
}

</style>
