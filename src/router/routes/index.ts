import { PageEnum } from '/@/enums/pageEnum'
import { RouteRecordRaw } from 'vue-router'
export const RootRoute: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/home'
  },
  {
    path: '/home',
    name: 'home',
    meta: {
      type: 'home'
    },
    component: () => import('/@/views/home')
  }
]

export default RootRoute
