import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../components/Home.vue'
import Login from '../components/Login.vue'
import Sport from '../components/Sport.vue'
import Pet from '../components/Pet.vue'
import Study from '../components/Study.vue'
import Recommend from '../components/Recommend.vue'
import Talk from '../components/Talk.vue'
import Lost from '../components/Lost.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    redirect: '/Login', // 将根路径重定向到登录页面
  },
  {
    path: '/Home',
    name: 'Home',
    component: Home
  },
  // 配置登陆页面的路由
  {
    path: '/Login',
    name: 'Login',
    component: Login
  },
  {
    path: '/Sport',
    name: 'Sport',
    component: Sport
  },
  {
    path: '/Study',
    name: 'Study',
    component: Study
  },
  {
    path: '/Pet',
    name: 'Pet',
    component: Pet
  },
  {
    path: '/Recommend',
    name: 'Recommend',
    component: Recommend
  },
  {
    path: '/Talk',
    name: 'Talk',
    component: Talk
  },
  {
    path: '/Lost',
    name: 'Lost',
    component: Lost
  }
]

const router = new VueRouter({
  routes
})

export default router
