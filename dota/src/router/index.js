import Vue from 'vue'
import Router from 'vue-router'
import TeamList from '@/components/TeamList'
import TeamDetail from '@/components/TeamDetail'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'TeamList',
      component: TeamList
    },
    {
    	path: '/team/:id',
    	name: 'TeamDetail',
    	component: TeamDetail
    }
  ]
})
