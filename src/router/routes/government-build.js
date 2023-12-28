/*
 * @Descripttion: 政府建设路由模块集
 * @Author: chenqy
 * @Date: 2020-03-03
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-16 10:56:21
 */
const governmentService = () => import(/* webpackChunkName: "government-service" */ '@/pages/city-management/government-build/government-service.vue')
const test = () => import('@/pages/test.vue')
const test001 = () => import('@/pages/test001.vue')
const test5 = () => import('@/pages/test5.vue')
export default [
  // 政务服务
  {
    name: 'governmentService',
    path: '/governmentService',
    component: governmentService
  },
  {
    name: 'test',
    path: '/test',
    component: test
  },
  {
    name: 'test001',
    path: '/test001',
    component: test001
  },
  {
    name: 'test5',
    path: '/test5',
    component: test5
  }
]
