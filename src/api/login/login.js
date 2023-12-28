/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-15 10:47:32
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-26 20:26:52
 */
import BASE_PATH from '@/api/basePath'

export default {
  /** -------------获取基础信息---------------**/
  CODE: BASE_PATH + 'checkScreenCodeImg',
  LOGIN (vm, params) {
    return vm.$axios.post(BASE_PATH + 'login', params)
  }
}
