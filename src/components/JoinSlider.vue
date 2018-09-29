<template>
  <section :class="['container', joinVisible ? 'visible' : 'hidden-down']" ref="joinus" id="Join">
    <div  class="head" ref="joinusHeader">
      <h2 class="title">加入我們</h2>
      <div class="operators" v-if="contentWidth && (contentWidth > 760)">
        <i class="arrow" :class="{'disabled': activeIndex <= 0}" @click="handleOperatorsClick('pre')">
          <img class="img" :src="require('../assets/icon-arrowpre.svg')" alt="<">
        </i>
        <i class="arrow" :class="{'disabled': activeIndex === RECRUIT.length}" @click="handleOperatorsClick('next')">
          <img class="img" :src="require('../assets/icon-arrownext.svg')" alt=">">
        </i>
      </div>
    </div>
    <v-touch v-on:swipeleft="handleSwipe" v-on:swiperight="handleSwipe" class="wrapper">
      <section class="slides-container"
        :style="{'transform': `translateX(${edgeWidth}px)`}">
        <div v-for="(item, index) in RECRUIT"
          itemscope
          itemtype="http://schema.org/Offer"
          :key="index"
          :class="['card', {'card-animation': joinVisible}, `card${index + 1}`]">
          <h4 itemprop="name" class="position-title">{{item.position}}</h4>
          <ul itemprop="descriptions" class="list">
            <li class="item" v-for="(listItem, index) in item.content" :key="index">
              <p>{{`${index + 1}.`}}</p>
              <em>{{listItem}}</em>
            </li>
          </ul>
          <div class="buttons-wrapper" itemscope itemprop="links">
            <a :href="item.link"
              itemprop="url"
              target="_blank"
              :title="`unnotech 徵才${item.name}`"
              v-for="(item, index) in item.platforms"
              :key="index">
              <button :class="['button', item.name === 'Yourator' ? 'hollow' : 'filled']"
                type="button">
                {{item.name}}
              </button>
            </a>
          </div>
        </div>
      </section>
    </v-touch>
  </section>
</template>

<script>
import { RECRUIT } from '../information'

export default {
  props: ['joinVisible'],
  data () {
    return {
      RECRUIT,
      cWidth: document.documentElement.clientWidth,
      edgeWidth: 0,
      contentWidth: 0,
      adjusting: false,
      activeIndex: 0
    }
  },
  mounted () {
    this.contentWidth = this.$refs['joinusHeader'].offsetWidth
    this.edgeWidth = ((this.cWidth - this.contentWidth) / 2)
  },
  methods: {
    handleOperatorsClick (type) {
      if (type === 'pre') {
        this.pre()
      }

      if (type === 'next') {
        this.next()
      }
    },
    pre () {
      if (this.activeIndex <= 0) {
        return
      }
      this.edgeWidth += 300
      this.activeIndex -= 1
    },
    next () {
      if (this.activeIndex === this.RECRUIT.length) {
        return
      }
      this.edgeWidth -= 300
      this.activeIndex += 1
    },
    handleSwipe (e) {
      if (e.type === 'swiperight') {
        this.pre()
      }
      if (e.type === 'swipeleft') {
        this.next()
      }
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  z-index: 1;
  min-height: 425px;
  max-width: none;
  margin: 0 auto;
  margin-bottom: 120px;
  overflow-x: hidden;
  text-align: center;
  transition: opacity .3s ease-in-out .2s,transform .3s ease-in-out .2s ;
}

.head {
  display: inline-flex;
  justify-content: space-between;
  width: 100%;
  max-width: 1000px;
  margin: 0 auto;
  .operators {
    display: inline-block;
    padding-right: 20px;
    @include small-pad-width {
      display: none;
    }
    @include phone-width {
      display: none;
    }
    .arrow {
      display: inline-block;
      width: 30px;
      height: 30px;
      line-height: 30px;
      background-color: #2da3da;
      border-radius: 50%;
      color: #fff;
      cursor: pointer;
      .img {
        display: inline-block;
        width: 100%;
        height: 100%;
        border: 2px solid #ddd;
        border-radius: 50%;
      }
      &.disabled {
        background-color: #ddd;
        cursor: default;
      }
    }
  }
  .title {
    display: inline-block;
    font-size: 36px;
    color: #333;
    letter-spacing: 1.3px;
    font-weight: normal;
    margin-bottom: 40px;
    padding-left: 20px;
  }
}

.wrapper {
  position: relative;
  min-height: 300px;
  z-index: 3;
}

.slides-container {
  position: absolute;
  display: flex;
  flex-wrap: nowrap;
  padding-left: 20px;
  transition: transform .5s ease-in-out;
}

.card {
  display: inline-block;
  width: 300px;
  min-height: 280px;
  margin-right: 20px;
  background-color: #fff;
  box-shadow: 0 8px 20px 0 rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 20px;
  text-align: left;
  .position-title {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.3;
    color: #333;
  }
}

$cardsLength: 8;

@keyframes cardEnter {
  0% {
    opacity: 0;
    transform: translate(-7px,-8px);
  }

  100% {
    opacity: 1;
    transform: translate(0,0)
  }
}

.card-animation {
  animation: cardEnter linear .4s;
  animation-iteration-count: 1;
  transform-origin: 50% 50%;
  animation-fill-mode: forwards;
  opacity: 0
}

@for $num from 1 through $cardsLength {
  .card#{$num} {
    animation-delay: 150ms * $num;
  }
}

.list {
  display: inline-block;
  height: 200px;
  margin-top: 20px;
  overflow-y: auto;
  .item {
    display: inline-flex;
    color:#666;
    font-size: 14px;
    letter-spacing: 1.3px;
    line-height: 1.6;
    margin-bottom: 5px;
  }
}

.buttons-wrapper {
  text-align: right;
  .button {
    width: 100px;
    height: 30px;
    border-radius: 15px;
    margin-right: 10px;
    border: 1px solid #2da3da;
    font-weight: 500;
    font-size: 14px;
    cursor: pointer;
    &:active {
      background-color: #2188b7;
    }
  }

  .hollow {
    background-color: #fff;
    color: #2da3da;
    &:hover {
      background-color: #2da3da;
      color: #fff;
    }
  }

  .filled {
    background-color: #2da3da;
    color: #fff;
    &:hover {
      background-color: #53c0f3;
    }
  }

}

</style>
