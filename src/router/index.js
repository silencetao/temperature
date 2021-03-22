import Vue from 'vue'
import Router from 'vue-router'
import '../components/login/login'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'

/**
 * Note: sub-menu only appear when route children.length >= 1
 * Detail see: https://panjiachen.github.io/vue-element-admin-site/guide/essentials/router-and-nav.html
 *
 * hidden: true                   if set true, item will not show in the sidebar(default is false)
 * alwaysShow: true               if set true, will always show the root menu
 *                                if not set alwaysShow, when item has more than one children route,
 *                                it will becomes nested mode, otherwise not show the root menu
 * redirect: noRedirect           if set noRedirect will no redirect in the breadcrumb
 * name:'router-name'             the name is used by <keep-alive> (must set!!!)
 * meta : {
    roles: ['admin','editor']    control the page roles (you can set multiple roles)
    title: 'title'               the name show in sidebar and breadcrumb (recommend set)
    icon: 'svg-name'/'el-icon-x' the icon show in the sidebar
    breadcrumb: false            if set false, the item will hidden in breadcrumb(default is true)
    activeMenu: '/example/list'  if set path, the sidebar will highlight the path you set
  }
 */

/**
 * constantRoutes
 * a base page that does not have permission requirements
 * all roles can be accessed
 */
export const constantRoutes = [
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },

  {
    path: '/404',
    component: () => import('@/views/404'),
    hidden: true
  },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [{
      path: 'dashboard',
      name: '无线测温系统',
      component: () => import('@/views/dashboard/index'),
      meta: { title: '无线测温系统', icon: 'dashboard' }
    }]
  },

  {
    path: '/example',
    component: Layout,
    redirect: '/example/table',
    name: 'Example',
    meta: { title: '汇总', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'table',
        name: 'Table',
        component: () => import('@/views/table/test'),
        meta: { title: '一车间一工区', icon: 'table' }
      },
      {
        path: 'table1',
        name: 'Table1',
        component: () => import('@/views/table/farm1area1.vue'),
        meta: { title: '一车间二工区', icon: 'table' }
      }
    ]
  },
  {
    path: '/nested',
    component: Layout,
    redirect: '/nested/menu1',
    name: '1001-1010',
    meta: {
      title: '1001-1010',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1-1-1',
        meta: { title: '1001' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1.1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1.2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1.1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2.2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2.22',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3.1',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2.0',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.0',
        meta: { title: '1002' }
      },
      {
        path: 'menu2.1',
        component: () => import('@/views/table/Echarts'),
        name: 'Menu2.1',
        meta: { title: '1003' }
      },
      {
        path: 'menu2.2',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.2',
        meta: { title: '1004' }
      },
      {
        path: 'menu2.3',
        component: () => import('@/views/table/Echarts'),
        name: 'Menu2.3',
        meta: { title: '1005' }
      },
      {
        path: 'menu2.4',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.4',
        meta: { title: '1006' }
      },
      {
        path: 'menu2.5',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.5',
        meta: { title: '1007' }
      },
      {
        path: 'menu2.6',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.6',
        meta: { title: '1008' }
      },
      {
        path: 'menu2.7',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.7',
        meta: { title: '1009' }
      },
      {
        path: 'menu2.8',
        component: () => import('@/views/table/1002'),
        name: 'Menu2.8',
        meta: { title: '1010' }
      }
    ]
  },
  {
    path: '/nested1',
    component: Layout,
    redirect: '/nested/menu1',
    name: '1011-1020',
    meta: {
      title: '1011-1020',
      icon: 'nested'
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/nested/menu1/index'), // Parent router-view
        name: 'Menu1.1',
        meta: { title: '1011' },
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/nested/menu1/menu1-1'),
            name: 'Menu1-1',
            meta: { title: 'Menu1-1' }
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/nested/menu1/menu1-2'),
            name: 'Menu1-2',
            meta: { title: 'Menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-1'),
                name: 'Menu1-2-1',
                meta: { title: 'Menu1-2-1' }
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/nested/menu1/menu1-2/menu1-2-2'),
                name: 'Menu1-2-2',
                meta: { title: 'Menu1-2-2' }
              }
            ]
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/nested/menu1/menu1-3'),
            name: 'Menu1-3',
            meta: { title: 'Menu1-3' }
          }
        ]
      },
      {
        path: 'menu2.0',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-a',
        meta: { title: '1012' }
      },
      {
        path: 'menu2.1',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-b',
        meta: { title: '1013' }
      },
      {
        path: 'menu2.2',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-c',
        meta: { title: '1014' }
      },
      {
        path: 'menu2.3',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-d',
        meta: { title: '1015' }
      },
      {
        path: 'menu2.4',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-e',
        meta: { title: '1016' }
      },
      {
        path: 'menu2.5',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-f',
        meta: { title: '1017' }
      },
      {
        path: 'menu2.6',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-g',
        meta: { title: '1018' }
      },
      {
        path: 'menu2.7',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-h',
        meta: { title: '1019' }
      },
      {
        path: 'menu2.8',
        component: () => import('@/views/table/1002'),
        name: 'Menu2-i',
        meta: { title: '1020' }
      }
    ]
  },

  {
    path: 'external-link',
    component: Layout,
    children: [
      {
        path: 'http://128.0.1.1:32774/d/PpeejFsMz/humidity?orgId=1&from=1550487949794&to=1557029458584',
        meta: { title: '数据曲线图', icon: 'link' }
      }
    ]
  },
  {
    path: '/table',
    component: Layout,
    redirect: '/example/table',
    name: 'Example1',
    meta: { title: 'test', icon: 'el-icon-s-help' },
    children: [
      {
        path: 'tree1',
        name: 'Table2',
        component: () => import('@/views/table/test'),
        meta: { title: '一车间1-2区', icon: 'table' }
      },
      {
        path: 'table',
        name: 'Table3',
        component: () => import('@/views/table/test2'),
        meta: { title: '二车间1-2区', icon: 'table' }
      },
      {
        path: 'tree2',
        name: 'Table4',
        component: () => import('@/views/table/Echarts'),
        meta: { title: '一二车间3区', icon: 'table' }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () => new Router({
  // mode: 'history', // require service support
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRoutes
})

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
