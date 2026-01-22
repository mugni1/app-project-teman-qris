import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopUpView from '@/views/TopUpView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/top-up/:slug', name: 'top_up', component: TopUpView },
    { path: '/login', name: 'auth_login', component: LoginView },
    { path: '/register', name: 'auth_register', component: RegisterView },
  ],
})

export default router
