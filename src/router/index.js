import { createRouter, createWebHistory } from 'vue-router'
import Cart from '../views/cart.vue'
import Home from '../views/Home.vue'
import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/cart',
    name: 'Cart',
    component: Cart
  },
  {
    path: '/about',
    name: 'About',
    component: About
  },
 
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
