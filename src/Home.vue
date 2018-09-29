<template>
  <div>
    <Top :isInFirstScreen="isInFirstScreen"/>
    <FirstView :isInFirstScreen="isInFirstScreen"/>
    <Descriptions :scrollY="scrollY" :descriptionsVisible="descriptionsVisible"/>
    <Service :serviceVisible="serviceVisible"/>
    <Satellite :scrollY="scrollY" :quilityVisible="quilityVisible"/>
    <SkillStack :skillsVisible="skillsVisible"/>
    <JoinUs :joinVisible="joinVisible"/>
    <ContactUs :contactVisible="contactVisible"/>
    <footer class="licence">{{LICENCE}}</footer>
  </div>
</template>

<script>
import Top from './components/Top'
import FirstView from './components/FirstView'
import Descriptions from './components/descriptions'
import Service from './components/Service'
import Satellite from './components/Satellite'
import SkillStack from './components/SkillStack'
import JoinUs from './components/JoinUs'
import ContactUs from './components/ContactUs'
import {LICENCE} from './information'
export default {
  name: 'App',
  components: {
    Top, FirstView, Descriptions, Service, SkillStack, JoinUs, ContactUs, Satellite
  },
  data () {
    return {
      LICENCE,
      firstViewHeight: document.documentElement.clientHeight,
      isInFirstScreen: true,
      scrollY: 0,
      descriptionsVisible: false,
      serviceVisible: false,
      quilityVisible: false,
      skillsVisible: false,
      joinVisible: false,
      contactVisible: false
    }
  },
  mounted () {
    window.addEventListener('scroll', () => {
      this.scrollY = window.scrollY
      this.isInFirstScreen = (window.scrollY < this.firstViewHeight)
      this.descriptionsVisible = ((window.scrollY + this.firstViewHeight) > this.firstViewHeight + 100)
      this.serviceVisible = (window.scrollY + this.firstViewHeight) > (document.getElementById('Service').offsetTop + 100)
      this.quilityVisible = (window.scrollY + this.firstViewHeight) > (document.getElementById('Quility').offsetTop - 100)
      this.skillsVisible = (window.scrollY + this.firstViewHeight) > (document.getElementById('Skills').offsetTop + 300)
      this.joinVisible = (window.scrollY + this.firstViewHeight) > (document.getElementById('Join').offsetTop + 100)
      this.contactVisible = (window.scrollY + this.firstViewHeight) > (document.getElementById('Contact').offsetTop + 100)
    })
  }
}
</script>

<style lang="scss">
@import './assets/styles/main.scss';
@import './assets/styles/normalize.css';
</style>

<style lang="scss">
#app {
  height: 100%;
  text-align: center;
}

.container {
  width: 100%;
  max-width: $pc-media;
}

.licence {
  height: 50px;
  line-height: 50px;
  color: #fff;
  font-size: 14px;
  font-weight: 500;
  letter-spacing: .5px;
  background-color: #154466;
  text-align: center;
}
</style>
