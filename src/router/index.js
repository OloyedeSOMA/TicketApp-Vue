import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import SignUp from '@/pages/SignUp.vue'
import Dashboard from '@/pages/Dashboard.vue'
import AuthLayout from '@/pages/AuthLayout.vue'
import TicketManager from '@/pages/TicketManager.vue'


const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/login',
    component: Login,
  },
  {
    path: '/signup',
    component: SignUp,
  },
  {
    path: '/',
    component: AuthLayout,
    children: [
      { path: 'dashboard', component: Dashboard, meta: { requiresAuth: true } },
      { path: 'tickets', component: TicketManager, meta: { requiresAuth: true } },
    ]
  },
  { path: '/:pathMatch(.*)*', redirect: '/' }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  const session = localStorage.getItem('ticketapp_session')
  const isLoggedIn = !!session

  if (to.meta.requiresAuth && !isLoggedIn) {
    next('/login')
  } else if (isLoggedIn && (to.path === '/login' || to.path === '/signup')) {
    next('/dashboard')
  } else {
    next()
  }
})

export default router