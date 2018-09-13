import Vue from 'vue'
import Router from 'vue-router'
import Subreddits from '@/components/Subreddits'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'subreddits',
      
      component:  Subreddits
      
    }
  ]
})
