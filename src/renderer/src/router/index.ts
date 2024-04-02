import App from '@renderer/App.vue'
import SignIn from '@renderer/views/SignIn.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'app',
      component: App
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignIn
    }
  ]
})

export default router
