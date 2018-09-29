import Vue from 'vue'
import Router from 'vue-router'
import Home from '../App.vue'
Vue.use(Router)

export default new Router({
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return window.scrollTo({ top: document.querySelector(to.hash).offsetTop - 70, behavior: 'smooth' })
    }
    return window.scrollTo({ top: 0, behavior: 'smooth' })
  },
  routes: [
    {
      name: 'Home',
      component: Home,
      path: '/'
    }
  ]
})
