<template>
  <section class="container" id="Descriptions">
    <Wave :id="'secondBg'"/>
    <transition name="slideFadeRightFar">
      <article :class="['descriptions-container', descriptionsVisible ? 'visible': 'hidden-down']">
        <section class="wrapper" v-for="(item, index) in ABOUT" :key="index">
          <figure class="figure"><img :src="item.figure" :alt="item.figcaption.title"></figure>
          <figcaption class="figcaption">
            <h3 class="title">{{item.figcaption.title}}</h3>
            <em class="content">{{item.figcaption.content}}</em>
          </figcaption>
        </section>
      </article>
    </transition>
  </section>
</template>

<script>
import {ABOUT} from '../information'
import Wave from './Wave.vue'
export default {
  props: ['descriptionsVisible'],
  data () {
    return {
      ABOUT
    }
  },
  components: {
    Wave
  }
}
</script>

<style lang="scss" scoped>
.container {
  display: flex;
  justify-content: center;
  min-height: 200px;
  margin: 0 auto;
  margin-bottom: 120px;
}

.descriptions-container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1000px;
  margin: 0 auto;
  margin-right: 20px;
  margin-left: 20px;
  justify-content: center;
  border-radius: 20px;
  background-color: #fff;
  box-shadow: 0 8px 30px 0 rgba(0, 0, 0, 0.1);
  z-index: 1;
  transition: opacity .3s ease-in-out .2s,transform .3s ease-in-out .2s ;
}

.wrapper {
  width: 30%;
  padding-left: 30px;
  padding-right: 30px;
  margin-top: 30px;
  margin-bottom: 30px;
  @include smaller-than-pad {
    width: 100%;
  }
}

.figure {
  text-align: center;
  @include smaller-than-pad {
    width: 240px;
    height: auto;
    margin: 0 auto;
  }
  img {
    width: 100%;
    height: 100%;
  }
}

.figcaption {
  text-align: center;
  @include smaller-than-pad {
    width: 240px;
    margin: 0 auto;
  }
  .title {
    color: #333;
    font-size: 24px;
    height: 33px;
    line-height: 33px;
    margin-top: 10px;
  }

  .content {
    display: inline-block;
    text-align: left;
    color: #999;
    font-size: 14px;
    margin-top: 10px;
    line-height: 1.6;
  }
}

</style>
