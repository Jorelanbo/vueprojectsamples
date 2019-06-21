import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/home/Home'
import Watcher from '@/pages/watcher/Watcher'
import UseMixin from '@/pages/usemixin/UseMixin'
import LifeCycleGetData from '@/pages/lifecyclegetdata/LifeCycleGetData'
import ElementTree from '@/pages/elementTree/ElementTree'

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
    },
    {
      path: '/UseMixin',
      name: 'UseMixin',
      component: UseMixin
    },
    {
      path: '/LifeCycleGetData',
      name: 'LifeCycleGetData',
      component: LifeCycleGetData
    },
    {
      path: '/ElementTree',
      name: 'ElementTree',
      component: ElementTree
    }
  ]
})
