import type { RouteRecord } from 'vue-router'
import type { App } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'
import { setupBeforeEachGuard } from './guard/beforeEach'
import basicRoutes from './routes'
// 白名单应该包含基本静态路由
const WHITE_NAME_LIST: string[] = []

//app router
export const router = createRouter({
  history: createWebHashHistory(),
  routes: basicRoutes
})

export function setupRouter(app: App<Element>): void {
  // 路由守卫

  setupBeforeEachGuard(router)
  app.use(router)
}
