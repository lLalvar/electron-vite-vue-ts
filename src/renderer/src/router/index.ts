// import App from '@renderer/App.vue'
import MainView from '@renderer/views/MainView.vue'
import MonitorView from '@renderer/views/MonitorView.vue'
import SignInView from '@renderer/views/SignInView.vue'
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  // history: createMemoryHistory(),

  routes: [
    {
      path: '/',
      name: 'main',
      component: MainView
    },
    {
      path: '/sign-in',
      name: 'sign-in',
      component: SignInView
    },
    {
      path: '/monitor',
      name: 'monitor',
      component: MonitorView
    }
  ]
})

export default router
