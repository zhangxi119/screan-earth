/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:13:06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-08 20:50:47
 */
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import store from './store'
import router from './router'
import axios from 'axios'
import qs from 'qs'
import '../static/laydate/theme/default/laydate.css'
import laydate from '../static/laydate/laydate'
Vue.prototype.$laydate = laydate
Vue.prototype.isFresh = false
Vue.config.productionTip = false
Vue.prototype.$axios = axios
axios.interceptors.request.use(config => {
  config.timeout = 60000
  config.headers.post['Content-Type'] = 'application/x-www-form-urlencoded'
  config.method === 'post' ? config.data = qs.stringify({...config.data}) : config.params = {...config.params}
  return config
}, err => {
  return Promise.reject(err)
})
axios.interceptors.response.use(res => {
  let data = res.data
  if (!data.serviceSuccess) {
    data.errors.forEach((item) => {
      if (item.errorCode === '403' || item.errorCode === '302') {
        store.commit('SET_isLogin', 0)
        router.push({name: 'login'})
      }
    })
  } else {
    store.commit('SET_isLogin', 1)
  }
  return res
}, err => {
  return Promise.reject(err)
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
