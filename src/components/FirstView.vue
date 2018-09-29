<template>
  <article class="container" id="index" itemscope itemtype="http://schema.org/CreativeWork">
    <Wave :id="'firstScreenBg'"/>
    <section class="wrapper" v-if="isInFirstScreen">
      <figcaption class="caption">
        <div class="title-wrapper">
          <h1 class="title" itemprop="name">創順科技</h1>
          <transition name="slideFadeLeftDelay" appear>
            <strong class="sub-title" itemprop="description">Trans Tech to Entertainment</strong>
          </transition>
        </div>
        <transition name="slideFadeLeftDelayNormal" appear>
          <div class="cube"></div>
        </transition>
        <transition name="slideFadeLeftDelaySuper" appear>
          <div class="cubes"></div>
        </transition>
      </figcaption>
      <figure class="figure">
        <transition name="slideFadeLeftDelayNormal" appear>
          <img class="device"
            itemprop="image"
            :src="require('../assets/firstview-computer.png')"
            alt="Chuang.Shun">
        </transition>
      </figure>
    </section>
  </article>
</template>

<script>
import Wave from './Wave.vue'
export default {
  props: ['isInFirstScreen'],
  components: {
    Wave
  }
}
</script>

<style lang="scss" scoped>
.container {
  height: 100%;
  padding-top: 60px;
  @include toolong-aspect {
    padding-top: 120px;
  }
  @include pc-width {
    margin: 0 auto;
  }
}

.wrapper {
  display: flex;
  height: 100%;
  justify-content: space-between;
  flex-direction: column;
}

.figure {
  position: relative;
  text-align: right;
  margin-right: 20px;
  margin-left: 20px;
  @include pc-width {
    flex: 0 1 70%;
    align-self: flex-end;
  }
}

.caption {
  position: relative;
  text-align: left;
}

.device {
  display: inline-block;
  width: 100%;
  height: auto;
  animation: float1 6s ease-in-out infinite;
  @include small-pad-width {
    max-width: 500px;
  }

  @include pad-width {
    max-width: 70%;
  }

  @include smallpc-width {
    max-width: 50%;
  }

  @include toolong-aspect {
    padding-bottom: 50px;
  }

}

.title-wrapper {
  position: relative;
  display: inline-block;
  padding-left: 120px;
  padding-top: 40px;
  @include smaller-than-pad {
    padding-left: 60px;
  }
}

.title {
  font-size: 90px;
  color: #006fbf;
  font-weight: normal;
  margin-bottom: 5px;

  @include pad-width {
    font-size: 60px;
  }

  @include smaller-than-pad {
    font-size: 50px;
  }

  @include smallpc-width {
    font-size: 60px;
  }
}

.sub-title {
  line-height: 45px;
  font-size: 32px;
  font-weight: 300;
  color: rgba(0, 111, 191, 0.6);
  margin: 0;
  @include pad-width {
    font-size: 24px;
    line-height: 15px;
  }
  @include smaller-than-pad {
    font-size: 20px;
    line-height: 15px;
  }
  @include smallpc-width {
    font-size: 24px;
    line-height: 15px;
  }
}

.cubes {
  position: absolute;
  width: 90px;
  height: 150px;
  left: 10px;
  top: 0;
  background-image: url('../assets/firstview-cubes.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  animation: float3 6s ease-in-out infinite;
  @include smaller-than-pad {
    width: 75px;
  }
  @include smallpc-width {
    left: 30px;
  }
  @include pad-width {
    left: 30px;
  }
  @include pc-width {
    left: 30px;
  }
}

.cube {
  display: inline-block;
  width: 40px;
  height: 150px;
  background-image: url('../assets/firstview-cube.png');
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center center;
  margin-left: 20px;
  animation: float2 6s ease-in-out infinite;

  @include smallphone-width {
    display: none;
  }

  @include smaller-than-pad {
    width: 25px;
  }

  @include smallpc-width {
    right: 0;
  }
}
</style>
