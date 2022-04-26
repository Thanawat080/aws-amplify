import Vue from 'vue'
import VueRouter from 'vue-router'
Vue.use(VueRouter)
const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/home.vue') // set home as path '/'
  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../views/register.vue') // set register as path '/register'
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../views/login.vue')// set login as path '/login'
  },
  {
    path: '/profile',
    name: 'profile',
    component: () => import('../views/profile.vue')// set login as path '/login'
  },
  {
    path: '/editProfile',
    name: 'editProfile',
    component: () => import('../views/editProfile.vue')// set login as path '/login'
  },
  {
    path: '/createpost',
    name: 'createpost',
    component: () => import('../views/CreatePost.vue')// set login as path '/login'
  },
  {
    path: '/Like_Comment_Follow_Report/:id',
    name: 'Like_Comment_Follow_Report',
    component: () => import('../views/Like_Comment_Follow_Report.vue')// set login as path '/login'
  },

  {
    path: '/profile/:id',
    name: 'profile1',
    component: () => import('../views/profile.vue')// set login as path '/login'
  },
  {
    path: '/editcreatepost/:id',
    name: 'editcreatepost',
    component: () => import('../views/editcreatepost.vue')// set login as path '/login'
  },
  {
    path: '/recommend',
    name: 'recommend',
    component: () => import('../views/recommend.vue')// set login as path '/login'
  }, 
  {
    path: '/bmi',
    name: 'bmi',
    component: () => import('../views/bmi.vue')// set login as path '/login'
  },

  {
    path: '/managetime',
    name: 'managetime',
    component: () => import('../views/managetime.vue')// set login as path '/login'
  },
 
]
const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
