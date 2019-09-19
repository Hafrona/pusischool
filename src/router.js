import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Workbench from '@/views/workbench.vue'
import Market from '@/views/recruit.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect: { path: '/home' },
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      meta: { title: '首页', breadNumber: 1, toPath: '/home' },
      children: [
        {
          path: 'workbench',
          name: 'workbench',
          component: Workbench,
          meta: { title: '工作台', breadNumber: 2, toPath: '/home/workbench' },
        },
        {
          path: 'market',
          name: 'market',
          component: Market,
          meta: { title: '市场名单', breadNumber: 3, toPath: '/home/market' },
        },
      ]
    },

  ]
})
