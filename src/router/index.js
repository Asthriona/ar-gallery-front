// Composables
import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'Home',
        component: () => import('@/views/Home.vue'),
      },
    ],
  },
  {
    path: '/race/:raceCode',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'race',
        component: () => import('@/views/Race.vue'),
      },
    ],
  },
  // auth
  {
    path: '/auth/register',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'register',
        component: () => import('@/views/auth/register.vue'),
      },
    ],
  },
  {
    path: '/auth/login',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'login',
        component: () => import('@/views/auth/login.vue'),
      },
    ],
  },
  // admin
  {
    path: '/admin',
    component: () => import('@/layouts/default/Default.vue'),
    children: [
      {
        path: '',
        name: 'admin',
        component: () => import('@/views/admin/AdminHome.vue'),
      },
    ],
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
