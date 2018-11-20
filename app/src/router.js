import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Account from './views/Account.vue'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'

Vue.use(Router)


let router = new Router({
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/',
      name: 'Top',
      component: Top,
      redirect: 'home',
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
        },
        {
          path: '/chat',
          name: 'Chat',
          component: Chat
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

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some(record => record.meta.requiresAuth)
  if (requiresAuth) {
    Vue.prototype.$auth.onAuthStateChanged(function (user) {
      if (user) {
        next()
      } else {
        next({
          path: '/signin',
          query: { redirect: to.fullPath }
        })
      }
    })
  } else {
    next()
  }
})

export default router
