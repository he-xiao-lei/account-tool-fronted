import { createRouter, createWebHistory } from 'vue-router'
import Layout from '@/views/layout/Layout.vue'
import Index from '@/views/index/index.vue'
import AccountRecord from '@/views/account/accountRecord.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'layout',
      component: Layout,
      redirect: '/index',
      children: [
        {
          path: '/index',
          name: 'index',
          component: Index,
        },
        {
          path: '/accountRecord',
          name: 'accountRecord',
          component: AccountRecord,
        },
      ],
    },
  ],
})

export default router
