import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue'),
    },
    {
      path: '/rout3',
      name: 'rout3',
      component: () => import('../views/Rout3View.vue'),
    },
    {
      path: '/intelligentinnovationslab',
      name: 'intelligentinnovationslab',
      component: () => import('../views/IntelligentInnovationsView.vue'),
    },
    {
      path: '/nuula',
      name: 'nuula',
      component: () => import('../views/NuulaView.vue'),
    },
  ],
})

export default router
