import Vue from 'vue'
import Router from 'vue-router'
import enterFirst from '@/components/enterFirst'
import totalVIdeo from '@/components/selectPropsPage/totalVIdeo'

import homePage from '@/components/homeFile/homePage'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'enterFirst',
      component: enterFirst
    },
    {
      path: '/selectPropsPage/totalVIdeo',
      name: 'totalVIdeo',
      component: totalVIdeo
    },
    {
      path: '/homeFile/homePage',
      name: 'homePage',
      component: homePage
    },


  ],

})
