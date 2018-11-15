import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: '/index'
    },
    {
      path: '/index',
      component: Index
    },
  ]
})
