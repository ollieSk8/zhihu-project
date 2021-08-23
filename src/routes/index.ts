import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('views/Home.vue'),
    },
    {
      path: '/login',
      name: 'login',
      component: () => import('views/Login.vue'),
    },
    {
      path: '/columnDetail/:id',
      name: 'columnDetail',
      component: () => import('views/ColumnDetail.vue'),
    },
  ],
})

export default router
