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
      path: '/chat',
      name: 'chat',
      component: () => import('../views/ChatView.vue'),
    },
    {
      path: '/rout3',
      name: 'rout3',
      component: () => import('../views/Companies/Rout3View.vue'),
    },
    {
      path: '/intelligentinnovationslab',
      name: 'intelligentinnovationslab',
      component: () => import('../views/Companies/IntelligentInnovationsView.vue'),
    },
    {
      path: '/nuula',
      name: 'nuula',
      component: () => import('../views/Companies/NuulaView.vue'),
    },
  ],
})

export default router
