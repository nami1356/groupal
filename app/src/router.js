import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Account from './views/Account.vue'
import Home from './views/Home.vue'
// import Tag from './components/Tag.vue'
// import Info from './components/Info.vue'
// import Conf from './components/Conf.vue'

Vue.use(Router)

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'Top',
      component: Top,
      // meta: { requiresAuth: true },
      children: [
        {
          path: '/home',
          name: 'Home',
          component: Home
        },
        {
          path: '/account',
          name: 'Account',
          component: Account,
          // redirect: '/conf',
          // routeはnameで指定
          // children: [
          //   {
          //     path: '/conf',
          //     name: Conf,
          //     component: Conf
          //   },
          //   {
          //     path: '/tag',
          //     name: Tag,
          //     component: Tag
          //   },
          //   {
          //     path: '/info',
          //     name: Info
          //     component: Info
          //   }
          // ]
        }
      ]
    },
    {
    path: '/signin',
    name: 'Signin',
    component: Signin
    },
    {
    path: '/signup',
    name: 'Signup',
    component: Signup
    }
  ]
})
