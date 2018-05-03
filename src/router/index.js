import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/components/Home'
import A from '@/components/A'
import B from '@/components/B'
import Profile from '@/components/Profile'
import PersonalInformation from '@/components/PersonalInformation'


Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'profile',
      component: Profile,
      children:[{
        path:'home',
        component:Home
      },
      {
        path:'info',
        component:PersonalInformation
      }]
    },
    {
      path:'/A',
      name:'A',
      component:A
    },
    {
      path:'/B',
      name:'B',
      component:B
    }
  ]
})
