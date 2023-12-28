/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2019-08-29 21:09:16
 * @LastEditors: hangzhang
 * @LastEditTime: 2019-08-29 21:37:53
 */
import Vuex from 'vuex'
import Vue from 'vue'
import modules from './modules'
Vue.use(Vuex)
const store = new Vuex.Store(
  { modules }
)

export default store
