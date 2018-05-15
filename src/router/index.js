import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import A from '@/components/A'
import B from '@/components/B'
import Profile from '@/components/Profile'
import PersonalInformation from '@/components/PersonalInformation'
import Cart from '@/components/Cart'


Vue.use(Router)

export default new Router({
  mode:'history',
  routes: [{
      path: '/',
      redirect: '/home'
    },
    {
      path: '/',
      name: 'profile',
      component: Profile,
      children: [{
          path: 'home',
          name:'home',
          component: Home
        },
        {
          path: 'info',
          name:'info',
          component: PersonalInformation

        },
        {
          path: 'cart',
          name:'cart',
          component: Cart
        }
      ]
    },
    // {
    //   path:'/cart',
    //   name:'cart',
    //   component:Cart
    // },
    {
      path: '/A',
      name: 'A',
      component: A
    },
    {
      path: '/B',
      name: 'B',
      component: B
    }
  ]
})
