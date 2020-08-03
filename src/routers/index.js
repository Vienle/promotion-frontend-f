import Vue from 'vue'
import Router from 'vue-router'
import LoginPage from './../views/authen/LoginPage.vue'
import CirclekPage from './../views/promotion/index.vue'
import Promotion from './../components/DataTable.vue'
Vue.use(Router)

const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes:[{
    path: '/login',
    name: 'login',
    component: LoginPage
  },
  {
    path: '/circlek',
    name: 'circlek',
    component: CirclekPage,
    children: [
      {
        path:'promotion',
        name: 'promotion',
        component:Promotion
      }
    ]
  }
]
});
export default router