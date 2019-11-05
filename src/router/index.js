import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Signup from '../views/Signup.vue'
import Login from '../views/Login.vue'
import Logout from '../views/Logout.vue'
import Rearranging from '../views/Rearranging.vue'
import Animated from '../views/Animated.vue'
import Pickashape from '../views/PickAShape.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: Home },
  { path: "/signup", name: "signup", component: Signup },
  { path: "/login", name: "login", component: Login },
  { path: "/rearranging", name: "rearranging", component: Rearranging },
  { path: "/animated", name: "animated", component: Animated },
  { path: "/logout", name: "logout", component: Logout },
  { path: "/PickAShape", name: "pickashape", component: Pickashape }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router