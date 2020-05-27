import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter);

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('../views/Login.vue')
  },
  {
    path: '/admin',
    name: 'Admin',
    component: () => import('../views/Admin.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/admin/tenants',
    name: 'Tenants',
    component: () => import('../views/TenantsV.vue'),
    meta: {
      requireAuth: true
    }
  },
  {
    path: '/refresh',
    name: 'Refresh',
    component: () => import('../views/Refresh.vue'),
    meta: {
      requireAuth: true
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
