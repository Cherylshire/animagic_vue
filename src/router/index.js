import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/about',
    name: 'about',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  },
  { 
    path: "/signup",
    name: "signup",
    component: () => import(/* webpackChunkName: "singup" */ '../views/Signup.vue')
  },
  { 
    path: "/login",
    name: "login",
    component: () => import(/* webpackChunkName: "login" */ '../views/Login.vue')
  },
  {
    path: "/rearranging",
    name: "rearranging",
    component: () => import(/* webpackChunkName: "rearranging" */ '../views/Rearranging.vue')
  },
  { 
    path: "/logout",
    name: "logout",
    component: () => import(/* webpackChunkName: "logout" */ '../views/Logout.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
