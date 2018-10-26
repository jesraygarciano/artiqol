import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/Admin/SignUp'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/signup',
      name: 'SignUp',
      component: SignUp
    }
  ]
})
