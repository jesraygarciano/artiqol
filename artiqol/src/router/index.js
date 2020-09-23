import Vue from 'vue'
import Router from 'vue-router'
// import HelloWorld from '@/components/HelloWorld'
import SignUp from '@/components/Admin/SignUp'
import LogIn from '@/components/Admin/LogIn'

Vue.use(Router)

export default new Router({
  routes: [
      // add these inside the `routes` array
      {
        path: '/signup',
        name: 'SignUp',
        component: SignUp
      },
      {
        path: '/login',
        name: 'LogIn',
        component: LogIn
    }
  ]
})
