<template>
  <section class="container"
    id="Contact"
    itemprop="address"
    itemscope
    itemtype="http://schema.org/PostalAddress">
    <address class="map-container">
      <div class="texts">
        <h2 class="title">聯絡我們</h2>
      </div>
      <div :class="['google-map', contactVisible ? 'visible' : 'hidden-down']">
        <iframe itemprop="addressLocality"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3613.776545561612!2d121.57346991498856!3d25.075561742778135!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3442ac7b441ed045%3A0xeb1f5557104ffb6d!2zMTE05Y-w5YyX5biC5YWn5rmW5Y2A55Ge5YWJ6LevMjY26JmfNg!5e0!3m2!1szh-TW!2stw!4v1538021572287"
          width="100%"
          height="340"
          frameborder="0"
          style="border:0"
          allowfullscreen>
        </iframe>
      </div>
      <p class="address">
        <img class="icon" src="../assets/icon-location.svg" alt="LOCATION:">
        <b class="location" itemprop="streetAddress">{{ADDRESS}}</b>
      </p>
    </address>
    <Wave :id="'bottomBg'"/>
  </section>
</template>

<script>
import {ADDRESS} from '../information'
import Wave from '../components/Wave.vue'

export default {
  props: ['contactVisible'],
  components: {
    Wave
  },
  data () {
    return {
      ADDRESS
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  position: relative;
  display: flex;
  justify-content: center;
  max-width: none;
}

.map-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  margin-bottom: 60px;
  width: 100%;
  max-width: 1000px;
  z-index: 1;
}

.texts {
  display: flex;
  justify-content: space-between;
  padding-left: 20px;

}

.address {
  height: 50px;
  line-height: 50px;
}

.location {
  font-size: 14px;
  font-style: normal;
}

.location, .icon {
  color: #fff;
  vertical-align: middle;
}

.title {
  font-size: 36px;
  line-height: 50px;
  letter-spacing: 1.5px;
  font-style: normal;
  font-weight: normal;
  color: #fff;
}

.google-map {
  margin-top: 20px;
  margin-right: 20px;
  margin-left: 20px;
  width: calc(100% - 40px);
  min-height: 340px;
  background-color: #eee;
  border-radius: 5px;
  transition: opacity .3s ease-in-out .2s,transform .3s ease-in-out .2s ;
}
</style>
