import Vue from 'vue'
import VueRouter from 'vue-router'
import pathArr from '@/router/pathArr.js'

// 导入需要的组件
import Login from '@/components/MyLogin.vue'
import MyHome from '@/components/MyHome.vue'

import Users from '@/components/menus/MyUsers.vue'
import Rights from '@/components/menus/MyRights.vue'
import Goods from '@/components/menus/MyGoods.vue'
import Orders from '@/components/menus/MyOrders.vue'
import Settings from '@/components/menus/MySettings.vue'
import UserDetail from '@/components/user/MyUserDetail.vue'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    // 登录的路由规则
    {
      path: '/login',
      component: Login
    },
    {
      path: '/home',
      component: MyHome,
      redirect: '/home/users',
      children: [
        {
          path: 'users',
          component: Users
        },
        {
          path: 'rights',
          component: Rights
        },
        {
          path: 'goods',
          component: Goods
        },
        {
          path: 'orders',
          component: Orders
        },
        {
          path: 'settings',
          component: Settings
        },
        // 用户详情页的规则
        {
          path: 'userinfo/:id',
          component: UserDetail,
          props: true
        }
      ]
    }
  ]
})

// 全局前置守卫
router.beforeEach(function (to, from, next) {
  if (pathArr.indexOf(to.path)!==-1) {
    const token = localStorage.getItem('token')
    if (token) {
      next()
    } else {
      next('/login')
    }
  } else {
    next()
  }
})

export default router