import VueRouter from 'vue-router'
import Vue from 'vue'

const Login = () => import('@/components/Login')

Vue.use(VueRouter)

// for jump to same path
const originalPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return originalPush.call(this, location).catch(err => err)
}

export default new VueRouter({
    routes: [
        {
            path: '/login',
            name: 'Login',
            component: Login
        }
    ]
})