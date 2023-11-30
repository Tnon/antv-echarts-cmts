/*
 * @Author: Delavin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2021-08-09 21:05:31
 * @LastEditTime: 2023-05-10 17:08:19
 */
import { createRouter, createWebHashHistory } from 'vue-router'
import type { RouteRecordRaw } from 'vue-router'
import type { App } from 'vue'
import cmts from './cmts'
const routeName = 'Layout'
export const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: routeName,
    redirect: { name: 'one' },
    meta: {
      title: 'Layout'
    },
    component: () => import('@/layout/index.vue'),
    children: [...cmts]
  }
]

const router = createRouter({
  history: createWebHashHistory(''),
  routes
})
export function setupRouter(app: App) {
  app.use(router)
  return router
}
export default router
