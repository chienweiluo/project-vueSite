// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import VueTouch from 'vue-touch'
import vueSmoothScroll from 'vue2-smooth-scroll'
Vue.use(VueTouch, {name: 'v-touch'})
Vue.use(vueSmoothScroll, {duration: 700})

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
