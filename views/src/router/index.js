import Vue from 'vue'
import Router from 'vue-router'
import Daily from '@/components/Daily'
import Report from '@/components/Report'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      component: Daily
    },
    {
      path: '/report',
      component: Report
    }
  ]
})
