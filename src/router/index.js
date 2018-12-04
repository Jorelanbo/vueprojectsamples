import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Watcher from '@/pages/watcher/Watcher'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/Watcher',
      name: 'Watcher',
      component: Watcher
    }
  ]
})
