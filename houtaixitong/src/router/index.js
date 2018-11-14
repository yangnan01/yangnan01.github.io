import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import login from '@/views/login'
import shouye from '@/views/shouye'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'login',
      component: login
    },
    {
      path: '/shouye',
      name: 'shouye',
      component: shouye
    }
  ]
})
