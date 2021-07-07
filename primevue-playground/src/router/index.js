import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import AddBoat from '../views/AddBoat.vue'
import ViewBoat from '../views/ViewBoat.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/addBoat',
    name: 'Add Boat',
    component: AddBoat
  },
  {
    path: '/viewBoat/:id',
    name: 'View Boat',
    component: ViewBoat
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
    component: About
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
