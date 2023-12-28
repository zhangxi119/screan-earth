/*
 * @Descripttion:  公共面板接口
 * @Author: wanglong
 * @Date: 2020-03-24 10:53:59
 * @LastEditors: wanglong
 * @LastEditTime: 2020-03-24 17:14:51
 */
import BASE_PATH from '@/api/basePath'
export default {
  // 全部资源：应急物资
  GET_ALL_RESOURCE_MATERIALS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/resourceOfAll', params)
  },
  // 全部资源：重点防护
  GET_ALL_RESOURCE_PROTECTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/majorProtectionType', params)
  },
  // 全部资源：监测对象
  GET_ALL_RESOURCE_MONITOR (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/emergency/command/monitoringTarget', params)
  },
  // 全部资源：监测对象
  GENER_KEYBOARD (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/production/generKeyboard', params)
  }
}
