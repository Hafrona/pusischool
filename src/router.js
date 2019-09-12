import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
// import Main from '@/components/main.vue'
import Workbench from '@/components/workbench.vue'
Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      redirect:{path:'/home'},
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      // redirect:{path:'/home'},
      children:[
        {
          path:'workbench',
          name:'workbench',
          component:Workbench
        },
        // {
        //   path:'main',
        //   name:'main',
        //   component:Main
        // }
      ]
    },
  ]
})
