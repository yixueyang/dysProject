import Vue from 'vue'
import Router from 'vue-router'
import enterFirst from '@/components/enterFirst'
import totalVIdeo from '@/components/selectPropsPage/totalVIdeo'

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
    }

  ],

})
