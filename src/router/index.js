import Vue from 'vue'
import VueRouter from 'vue-router'
import home from '../views/Home.vue'
import signup from '../views/Signup.vue'
import login from '../views/Login.vue'
import logout from '../views/Logout.vue'
import rearranging from '../views/Rearranging.vue'
import animated from '../views/Animated.vue'
import maze from '../views/Canvas.vue'
import animation from '../views/animation.vue'
import whonine from '../views/whonine.vue'
import introducing from '../views/introducing.vue'
import principlesofanimation from '../views/principlesofanimation.vue'
import whatprinciple from '../views/whatprinciple.vue'
import firstsixprinciples from '../views/firstsixprinciples.vue'
import secondsixprinciples from '../views/secondsixprinciples.vue'
import history from '../views/history.vue'
import thirtythousandsbc from '../views/30000bc.vue'
import earlymillennium from '../views/earlymillennium.vue'
import cinematography from '../views/cinematography.vue'
import nineteenthcentury from '../views/19thcentury.vue'
import twentythcentury from '../views/20thcentury.vue'
import twentyfirstcentury from '../views/21stcentury.vue'

Vue.use(VueRouter)

const routes = [
  { path: '/', name: 'home', component: home },
  { path: "/signup", name: "signup", component: signup },
  { path: "/login", name: "login", component: login },
  { path: "/rearranging", name: "rearranging", component: rearranging },
  { path: "/animated", name: "animated", component: animated },
  { path: "/logout", name: "logout", component: logout },
  { path: "/canvas", name: "canvas", component: maze },
  { path: "/animation", name: "animation", component: animation},
  { path: "/whonine", name: "whonine", component: whonine },
  { path: "/introducing", name: "introducing", component: introducing },
  { path: "/principlesofanimation", name: "principlesofanimation", component: principlesofanimation },
  { path: "/whatprinciple", name: "whatprinciple", component: whatprinciple },
  { path: "/firstsixprinciples", name: "firstsixprinciples", component: firstsixprinciples},
  { path: "/secondsixprinciples", name: "secondsixprinciples", component: secondsixprinciples},
  { path: "/history", name: "history", component: history},
  { path: "/30000bc", name: "30000bc", component: thirtythousandsbc },
  { path: "/earlymillennium", name: "earlymillennium", component: earlymillennium },
  { path: "/cinematography", name: "cinematography", component: cinematography },
  { path: "/19thcentury", name: "19thcentury", component: nineteenthcentury },
  { path: "/20thcentury", name: "20thcentury", component: twentythcentury },
  { path: "/21stcentury", name: "21stcentury", component: twentyfirstcentury }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router