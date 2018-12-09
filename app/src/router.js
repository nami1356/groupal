import Vue from 'vue'
import Router from 'vue-router'
import Top from './views/Top.vue'
import Signup from './views/Signup.vue'
import Signin from './views/Signin.vue'
import Account from './views/Account.vue'
import Home from './views/Home.vue'
import Chat from './views/Chat.vue'
import CreateGroup from './views/CreateGroup.vue'
import GroupInfo from './views/GroupInfo.vue'
import firebase from './firebase/index'

Vue.use(Router)


let router = new Router({
  mode:'history',
  routes: [
    {
      path: '*',
      redirect: 'signin'
    },
    {
      path: '/top',
      name: 'Top',
      component: Top,
      redirect: Home,
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
          component: Account
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
        },
        {
          path: '/creategroup',
          name: 'CreateGroup',
          component: CreateGroup
        },
        {
          path: '/groupinfo/:group',
          name: 'GroupInfo',
          component: GroupInfo
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
  // check to see if route has auth guard
  if(to.matched.some(rec => rec.meta.requiresAuth)){
    // check auth state of user
    let user = firebase.auth().currentUser
    if (user) {
      // User is signed in. Proceed to route
      next()
    } else {
      // No user is signed in. Redirect to login
      next({
        name: 'Signin'
      })
    }
  } else {
    // if route is not guarded by auth, proceed
    next()
  }
})

export default router
