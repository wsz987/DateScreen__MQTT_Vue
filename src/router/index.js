import Vue from 'vue'
import VueRouter from 'vue-router'

const Login = () => import(/* webpackChunkName: "Index" */ '../pages/login.vue')
const Index = () => import(/* webpackChunkName: "Index" */ '../pages/index.vue')

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    { path: '/', redirect: '/index' },
    { path: '/login', component: Login },
    { path: '/index', component: Index }
  ]
})

router.beforeEach((to, from, next) => {
  // to要去的路径 form哪个路径跳转过来 next 函数 放行  next() next('/login')强制跳转
  if (to.path === '/login') return next()
  const tokenStr = window.sessionStorage.getItem('token')
  if (!tokenStr) return next('/login')
  next()
})
export default router
