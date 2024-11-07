import { createRouter, createWebHistory } from 'vue-router'

// createRouter 方法，用于创建路由器实例，可以管理多个路由

export default createRouter({
  // 路由模式设置
  history: createWebHistory(),
  // 路由列表
  routes: [
    {
      path: '/home',
      component: () => import('../pages/home/index.vue'),
      meta: {
        title: '首页'
      }
    },
    {
      path: '/about',
      component: () => import('../pages/about/index.vue'),
      meta: {
        title: '关于'
      }
    },
    {
      path: '/execise',
      component: () => import('../pages/exercise/index.vue'),
      meta: {
        title: '活动'
      }
    },
    {
      path: '/link',
      component: () => import('../pages/link/index.vue'),
      meta: {
        title: '友链'
      }
    },
    {
      path: '/study',
      component: () => import('../pages/study/index.vue'),
      meta: {
        title: '学习'
      }
    },
    {
      path: '/web3',
      component: () => import('../pages/web3/index.vue'),
      meta: {
        title: 'web3'
      }
    },
    {
      path: '/feed',
      component: () => import('../pages/feed/index.vue'),
      meta: {
        title: '投喂'
      }
    },
    {
      path: '/',
      component: () => import('../pages/home/index.vue'),
      meta: {
        titl: '首页'
      }
    }
  ],
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    }
  }
})
