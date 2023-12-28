/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:13:06
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-26 15:08:46
 */
import Vue from 'vue'
import Router from 'vue-router'
import routes from './routes'
import store from '../store'
Vue.use(Router)

const router = new Router({
  routes
})
router.beforeEach((to, from, next) => {
  if (window._m) {
    window._m.clear()
    let areaNow = {name: '乐山市', totalName: '乐山市'}
    store.commit('set_areaName', areaNow)
    window._m.redirectDimenion()
  }
  next()
})
export default router
