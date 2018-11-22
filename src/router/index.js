import Vue from 'vue'
import Router from 'vue-router'
import Index from '@/components/Index/Index'
import Input from '@/components/Input/Input'

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
    {
      path: '/input',
      component: Input
    },
  ]
})
