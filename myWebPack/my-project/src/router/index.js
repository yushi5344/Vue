import Vue from 'vue'
import Router from 'vue-router'
import home from '@/components/Home'
import HelloWorld from '@/components/HelloWorld'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: home
    },
    {
      path: '/helloworld',
      name: 'helloworld',
      component: HelloWorld
    }
  ],
  mode:'history'
})
