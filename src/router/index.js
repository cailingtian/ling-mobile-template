import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

/**
 * 重写路由的push方法
 */
const routerPush = VueRouter.prototype.push
VueRouter.prototype.push = function push (location) {
  return routerPush.call(this, location).catch(error => error)
}

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue'),
    meta: { title: '首页', keepAlive: false },
    isBack: true
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('../views/About.vue'),
    meta: { title: '其他', keepAlive: false },
    isBack: true
  },
  {
    path: '/test',
    name: 'test',
    redirect: '/test/testDetail1',
    component: () => import('../views/Test.vue'),
    meta: { title: '测试', keepAlive: false },
    children: [
      {
        path: 'testDetail1',
        name: 'testDetail1',
        component: () => import('../views/TestDetail.vue'),
        meta: { title: '测试详情1', keepAlive: false },
        isBack: true
      },
      {
        path: 'testDetail2',
        name: 'testDetail2',
        component: () => import('../views/TestDetail2.vue'),
        meta: { title: '测试详情2', keepAlive: false },
        isBack: true
      }
    ]
  }
]

const router = new VueRouter({
  routes,
  scrollBehavior: () => ({ y: 0 })
})

export default router
