/*
 * @Descripttion:
 * @Author: yangpk
 * @Date: 2020-01-20 10:21:02
 * @LastEditors: yangpk
 * @LastEditTime: 2020-03-19 09:49:42
 */

// resolve => require(['@/pages/entry.vue'], resolve)
import digitalEconomy from '@/pages/programme/digital-economy/digital-economy.vue'
import login from '@/pages/login/login.vue'
export default [
  /// 数字经济
  {
    name: 'digitalEconomy',
    path: '/digitalEconomy',
    component: digitalEconomy
  },
  {
    name: 'login',
    path: '/login',
    component: login
  }
]
