import Vue from 'vue'
import Router from 'vue-router'
import Hello from '@/components/Hello'
import PwdReset from '../components/pwd_reset.vue'

Vue.use(Router)

export default new Router({
  // mode:'history',
  routes: [
    {
      path: '/',
      redirect:'/wqq'
    },
    {
      path: '/wqq',
      component: Hello
    },
    {
      path: '/xxxx',
      component:require("../components/pwd_reset.vue")
    },
    {
      path: '/sssss',
      component:require("../components/ss.vue")
    },
    // {
    //   path :'/xxx',
    //   // component:resovle => require(["../components/pwd_reset.vue"])
    //   component:PwdReset
    //   // component:require("../components/pwd_reset.vue")
    // }



  ]
})
