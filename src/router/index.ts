import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior() {
    return { top: 0 }
  },
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
      path: '/llmproxy',
      name: 'llmproxy',
      component: () => import('../views/Projects/LlmproxyView.vue'),
    },
    {
      path: '/healthlk',
      name: 'healthlk',
      component: () => import('../views/Projects/HealthlkView.vue'),
    },
    {
      path: '/pillminder',
      name: 'pillminder',
      component: () => import('../views/Projects/PillminderView.vue'),
    },
    {
      path: '/parking-system',
      name: 'parking-system',
      component: () => import('../views/Projects/ParkingSystemView.vue'),
    },
    {
      path: '/venngram',
      name: 'venngram',
      component: () => import('../views/Projects/VenngramView.vue'),
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue'),
    },
    {
      // 404 fallback
      path: '/:pathMatch(.*)*',
      redirect: "/",
    }
  ],
})

export default router
