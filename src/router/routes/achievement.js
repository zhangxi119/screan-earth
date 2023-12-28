/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:21:02
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-19 09:49:42
 */

// resolve => require(['@/pages/entry.vue'], resolve)
import serviceJoin from '@/pages/achievement/service-join/service-join.vue'
import login from '@/pages/login/login.vue'
export default [
  /// 心连心服务资源(乐山市心连心资源信息)
  {
    name: 'serviceJoin',
    path: '/serviceJoin',
    component: serviceJoin
  },
  {
    name: 'login',
    path: '/login',
    component: login
  }
]
