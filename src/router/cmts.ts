/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-04 11:26:18
 * @LastEditTime: 2023-08-09 10:52:36
 */
import type { RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/1',
    name: 'one',
    meta: {
      title: 'GaugeEarch'
    },
    component: () => import('@/views/one/index.vue')
  },
  {
    path: '/2',
    name: 'two',
    meta: {
      title: 'LineChart'
    },
    component: () => import('@/views/two/index.vue')
  },
  {
    path: '/3',
    name: 'three',
    meta: {
      title: 'AttackLine'
    },
    component: () => import('@/views/three/index.vue')
  },
  {
    path: '/4',
    name: 'four',
    meta: {
      title: 'Gauge'
    },
    component: () => import('@/views/four/index.vue')
  },
  {
    path: '/5',
    name: 'five',
    meta: {
      title: 'Earth3D'
    },
    component: () => import('@/views/five/index.vue')
  },
  // {
  //   path: '/6',
  //   name: 'six',
  //   meta: {
  //     title: 'WorldMapLine'
  //   },
  //   component: () => import('@/views/six/index.vue')
  // },
  {
    path: '/7',
    name: 'seven',
    meta: {
      title: 'WorldMapFlag'
    },
    component: () => import('@/views/seven/index.vue')
  },
  {
    path: '/8',
    name: 'eight',
    meta: {
      title: 'GaugeScore'
    },
    component: () => import('@/views/eight/index.vue')
  },
  {
    path: '/9',
    name: 'nine',
    meta: {
      title: 'ThreantMap'
    },
    component: () => import('@/views/nine/index.vue')
  },
  {
    path: '/10',
    name: 'ten',
    meta: {
      title: 'BackLine'
    },
    component: () => import('@/views/ten/index.vue')
  },
  {
    path: '/11',
    name: 'eleven',
    meta: {
      title: 'Loading'
    },
    component: () => import('@/views/eleven/index.vue')
  },
  {
    path: '/12',
    name: 'twelve',
    meta: {
      title: 'flow'
    },
    component: () => import('@/views/twelve/index.vue')
  },
  {
    path: '/13',
    name: 'thirteen',
    meta: {
      title: 'Data Platform'
    },
    component: () => import('@/views/thirteen/index.vue')
  },
  {
    path: '/14',
    name: 'fourteen',
    meta: {
      title: 'Data Architecture'
    },
    component: () => import('@/views/fourteen/index.vue')
  }
]
export default routes
