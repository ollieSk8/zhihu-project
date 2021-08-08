import {createRouter,createWebHashHistory} from 'vue-router'

const router = createRouter({
  history:createWebHashHistory(),
  routes:[
    {
      path:'/',
      name:'home',
      component:()=>import('views/Home.vue')
    },
    {
      path:'/form',
      name:'form',
      component:()=>import('views/Form.vue')
    }
  ]
})

export default router