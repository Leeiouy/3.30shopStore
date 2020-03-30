import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const home = () => import('views/home/home.vue')
const sort = () => import('views/sort/sort.vue')
const shopping = () => import('views/shopping/shopping.vue')
const profile = () => import('views/profile/profile.vue')
const details = () => import('views/details/details.vue')


const routes = [{
    path: '',
    redirect: '/home'
  }, {
    path: '/home',
    component: home
  },
  {
    path: '/sort',
    component: sort
  },
  {
    path: '/shopping',
    component: shopping
  },
  {
    path: '/profile',
    component: profile
  },
  {
    path: '/details/:id',
    component: details
  }


]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router