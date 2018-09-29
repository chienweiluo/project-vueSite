<template>
  <section :class="['skill-container', skillsVisible ? 'visible' : 'hidden-down']"
    id="Skills">
    <h2 class="main-title">
      <span class="text">技術棧</span>
    </h2>
    <div class="wrapper" v-for="(item, index) in TECHSTACK" :key="index">
      <figcaption class="title"
        itemprop="requirements"
        :style="{backgroundImage: `url(${item.titleBg})`}">{{item.title}}</figcaption>
      <figure class="figure">
        <img class="img" :src="item.image" :alt="item.title">
      </figure>
    </div>
  </section>
</template>

<script>
import {TECHSTACK} from '../information'
export default {
  props: ['skillsVisible'],
  data () {
    return {
      TECHSTACK
    }
  }
}
</script>

<style lang="scss" scoped>
.skill-container {
  position: relative;
  display: flex;
  width: 100%;
  margin: 0 auto;
  justify-content: center;
  flex-wrap: wrap;
  margin-bottom: 120px;
  transition: opacity .3s ease-in-out .2s,transform .3s ease-in-out .2s ;
  z-index: 1;
}

.wrapper {
  display: inline-block;
  margin-top: 10px;
  margin-left: 25px;
  margin-right: 25px;
  margin-bottom: 30px;
}

.main-title {
  position: relative;
  width: 100%;
  height: 125px;
  line-height: 125px;
  font-size: 36px;
  text-align: center;
  font-weight: normal;
  color: #333;
  word-break: break-word;
  margin-top: 120px;
  .text {
    position: relative;
  }
  &::before {
    content: 'TECHNOLOGY STACK';
    position: absolute;
    left: 0;
    top: 0;
    display: inline-block;
    width: 100%;
    color: rgba(238, 238, 238, 0.3);
    font-weight: 600;
    font-size: 90px;
    @include smaller-than-pad {
      content: 'TECH.'
    }
  }
}

.title {
  position: relative;
  height: 40px;
  line-height: 40px;
  background-repeat: no-repeat;
  background-position: center center;

  text-align: center;
  font-size: 24px;
  color: #2da3da;
  margin-bottom: 15px;
}

.figure {
  .img {
    width: 100%;
    height: 100%;
  }
}
</style>
