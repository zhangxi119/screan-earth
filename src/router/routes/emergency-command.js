/*
 * @Descripttion:
 * @Author: chenqy
 * @Date: 2020-03-03
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-27 20:16:04
 */
import securitySituation from '@/pages/emergency-command/overall-situation/security-situation/security-situation.vue'
import publicHygiene from '@/pages/emergency-command/overall-situation/public-health/index.vue'
// resolve => require(['@/pages/entry.vue'], resolve)
import majorHazards from '@/pages/emergency-command/daily-monitoring/monitoring-objects/major-hazards/major-hazards.vue'

import emergencyCommandChart from '@/pages/emergency-command/emergency-command-chart/emergency-command-chart.vue'
import safetyProduction from '@/pages/emergency-command/daily-monitoring/monitoring-objects/safety-production/safety-production.vue'
import societalSecurity from '@/pages/emergency-command/overall-situation/societal-security/societal-security.vue'
import publicHealth from '../../pages/emergency-command/daily-monitoring/monitoring-objects/public-health/public-health.vue'
import majorGuarantee from '@/pages/emergency-command/major-guarantee/major-guarantee.vue'
import naturalDisasters from '@/pages/emergency-command/daily-monitoring/monitoring-objects/natural-disasters/natural-disasters.vue'
const naturalHazard = () => import(/* webpackChunkName: "natual-hazard" */ '@/pages/emergency-command/safe-situation/natural-hazard.vue')
const floodControl = () => import(/* webpackChunkName: "flood-control" */ '@/pages/emergency-command/flood-control/flood-control.vue')
export default [
  // 防洪应急
  {
    name: 'floodControl',
    path: '/floodControl',
    component: floodControl
  },
  // 监测预警 安全生产
  {
    name: 'safetyProduction',
    path: '/safetyProduction',
    component: safetyProduction
  },
  // 监测预警 重大危险源
  {
    name: 'majorHazards',
    path: '/majorHazards',
    component: majorHazards
  },
  // 监测预警 自然灾害
  {
    name: 'naturalDisasters',
    path: '/naturalDisasters',
    component: naturalDisasters
  },
  // 安全态势 安全生产
  {
    name: 'securitySituation',
    path: '/securitySituation',
    component: securitySituation
  },
  // 安全态势  自然灾害
  {
    name: 'naturalHazard',
    path: '/naturalHazard',
    component: naturalHazard
  },
  // 应急指挥一张图
  {
    name: 'emergencyCommandChart',
    path: '/emergencyCommandChart',
    component: emergencyCommandChart
  },
  // 监测预警-公共卫生
  {
    name: 'publicHealth',
    path: '/publicHealth',
    component: publicHealth
  },
  // 重大活动保障
  {
    name: 'majorGuarantee',
    path: '/majorGuarantee',
    component: majorGuarantee
  },
  /// 安全态势  公共卫生
  {
    name: 'publicHygiene',
    path: '/publicHygiene',
    component: publicHygiene
  },
  // 安全态势社会安全
  {
    name: 'societalSecurity',
    path: '/societalSecurity',
    component: societalSecurity
  }

]
