import Vue from 'vue'
import Router from 'vue-router'
import Login from './../components/Login.vue'
// import Promotion from './../components/DataTable.vue'
// import Navbar from './../components/Navbar.vue'
// import Test from './../components/Test.vue'

import HomePage from './../components/home_page/index.vue'
import Test1 from './../components/home_page/Test1.vue'
import Test2 from './../components/home_page/Test2.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[{
    path: '/login',
    name: 'login',
    component: Login
  },
  {
    path: '/home/',
    name : 'Home',
    component: HomePage,
    children:[
      {
      path : "",
      name : 'Test1',
      component : Test1
    },
    {
      path : "test2",
      name : 'Test2',
      component : Test2
    }]
  }
  // {
  //   path: '/dashboard',
  //   name: 'dashboard',
  //   components: {
  //     default: Promotion,
  //     'header': Navbar,
  //   }
  // },
  // {
  //   path: '/test',
  //   name: 'Test',
  //   components: {
  //     default: Test,
  //     'header': Navbar,
  //   }
  // },
  // {
  //   path: '/home/',
  //   name : 'Home',
  //   component: HomePage,
  //   children:[
  //     {
  //     path : "",
  //     name : 'Test1',
  //     component : Test1
  //   },
  //   {
  //     path : "test2",
  //     name : 'Test2',
  //     component : Test2
  //   }]
  // },
  // {
  //   path: '/',
  //   redirect: {name :'dashboard'}
  // }
]
});
export default router