import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/home.vue'
import Workbench from '@/views/workbench.vue'
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
      meta: { title: '首页'},
      children: [
        {
          path: 'workbench',
          name: 'workbench',
          component: Workbench,
          meta: { title: '工作台'},
        },
      ]
    },

  ]
})
