import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TopUpView from '@/views/TopUpView.vue'
import LoginView from '@/views/LoginView.vue'
import RegisterView from '@/views/RegisterView.vue'
import NotFoundView from '@/views/NotFoundView.vue'
import DetailOrderView from '@/views/DetailOrderView.vue'
import RedirectView from '@/views/RedirectView.vue'
import Cookies from 'js-cookie'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition
    }
    return { top: 0, behavior: 'smooth' }
  },

  routes: [
    { path: '/', name: 'home', component: HomeView },
    { path: '/top-up/:slug', name: 'top_up', component: TopUpView },
    { path: '/login', name: 'auth_login', component: LoginView },
    { path: '/register', name: 'auth_register', component: RegisterView },
    { path: '/redirect', name: 'auth_redirect', component: RedirectView },
    { path: '/detail/:id', name: 'detail_order', component: DetailOrderView },
    { path: '/:pathMatch(.*)*', name: 'not_found', component: NotFoundView },
  ],
})

router.beforeEach((to, from, next) => {
  const token = Cookies.get('token')
  if (to.meta.requiresAuth && !token) {
    next({ name: 'auth_login' })
    return
  }
  if (to.name == 'auth_login' && token) {
    next({ name: 'home' })
    return
  }
  next()
})

export default router
