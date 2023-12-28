/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-23 17:15:08
 * @LastEditors: luoxi
 * @LastEditTime: 2020-03-24 16:49:30
 */
import BASE_PATH from '@/api/basePath'
/** --------------------------------------监测对象-----------------------------------------**/
export default {
  // 获取选择框
  queryModal (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/monitorMap/queryModal/', params)
  }
}
