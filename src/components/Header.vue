<template>
  <header class="header">
    <transition name="slideFadeUpSmall">
      <div class="logo-wrapper" v-show="!isInFirstScreen">
        <img class="logo" :src="LOGO" alt="CS">
        <span>創順科技</span>
      </div>
    </transition>
    <nav class="list">
      <ul>
        <li class="item clickable"
          @click="$router.replace(`/#${item.anchor}`)"
          v-for="(item, index) in list"
          :key="index">
          <a @click.prevent="$router.replace(`/#${item.anchor}`)"
            :href="`/#${item.anchor}`"
            :title="`創順${item.text}`"
            class="text">{{item.text}}</a>
        </li>
      </ul>
    </nav>
  </header>
</template>

<script>
import {LOGO} from '../information'

export default {
  name: 'Top',
  props: ['isInFirstScreen'],
  data () {
    return {
      LOGO,
      list: [
        {
          text: '首頁',
          anchor: 'index'
        },
        {
          text: '關於我們',
          anchor: 'Descriptions'
        },
        {
          text: '技術棧',
          anchor: 'Skills'
        },
        {
          text: '加入我們',
          anchor: 'Join'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.header {
  display: inline-flex;
  width: 100%;
  position: fixed;
  justify-content: space-between;
  height: 60px;
  line-height: 60px;
  transform: translateX(-50%); // to handle flex+fixed bug
  background-color: #fff;
  z-index: 2;
  @include smaller-than-pad {
    display: none;
  }
  @include pad-width {
    display: none;
  }
}

.logo-wrapper {
  color:#006fbf;
  flex: 1 0 150px;
}

.logo {
  display: inline-block;
  vertical-align: middle;
  width: 60px;
  height: 60px;
  flex: 1 1 auto;
}

.list {
  width: 100%;
  text-align: right;
  padding-right: 50px;
}

.text {
  color: #999;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: 0.5px;
  &:hover {
    color: #2da3da;
  }
}

.item {
  display: inline-block;
  padding-left: 25px;
  padding-right: 25px;
  cursor: pointer;
  &:hover {
    .text {
      color: #2da3da;
    }
  }
}

</style>
