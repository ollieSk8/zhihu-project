import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'
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
      meta: {
        redirectAlreadyLogin: true,
      },
    },
    {
      path: '/column/:id',
      name: 'column',
      component: () => import('views/ColumnDetail.vue'),
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('views/CreatePost.vue'),
      meta: {
        requiredLogin: true,
      },
    },
    {
      path: '/roleTree',
      name: 'roleTree',
      component: () => import('views/RoleTree/index.vue'),
      meta: {
        requiredLogin: true,
      },
    },
    {
      path: '/antdTree',
      name: 'antdTree',
      component: () => import('views/AntdTree.vue'),
      meta: {
        requiredLogin: true,
      },
    },
  ],
})
router.beforeEach((to, form, next) => {
  if (to.meta.requiredLogin && !store.state.user.isLogin) {
    next({
      name: 'login',
    })
  } else if (to.meta.redirectAlreadyLogin && store.state.user.isLogin) {
    next('/')
  } else {
    next()
  }
})
export default router
