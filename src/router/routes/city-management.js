/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-01-20 10:21:02
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-03-24 14:27:16
 * @LastEditors: hangzhang
 * @LastEditTime: 2020-03-16 11:47:00
 */

// resolve => require(['@/pages/entry.vue'], resolve)
import medicalResource from '@/pages/city-management/common-service/medical-resource.vue'
import socialSecurity from '@/pages/city-management/common-service/social-security.vue'
import socialInsurance from '@/pages/city-management/common-service/social-insurance.vue'
import socialInsure from '@/pages/city-management/common-service/social-insure.vue'
import benefitPeople from '@/pages/city-management/common-service/benefit-people.vue'
import macroEconomy from '@/pages/city-management/economic-run/macro-economy.vue'
import majorProject from '@/pages/city-management/economic-run/major-project.vue'
import atmosphericEnvironment from '@/pages/city-management/environment/atmospheric-environment.vue'
import waterEnvironment from '@/pages/city-management/environment/water-environment.vue'
import eductionResource from '@/pages/city-management/common-service/eduction-resource.vue'
import marketSubject from '@/pages/city-management/market-supervision/market-subject.vue'
import marketSupervision from '@/pages/city-management/market-supervision/market-supervision.vue'
import massTechnology from '@/pages/city-management/market-management/mass-technology.vue'
import cityFacilities from '@/pages/city-management/city-facilities/city-facilities.vue'
import technoCulture from '@/pages/city-management/common-service/techno-culture.vue'
import entry from '@/pages/entry'
// 总部三基地
const threeBase = () => import(/* webpackChunkName: "ThreeBase" */ '@/pages/city-management/economic-run/three-base.vue')
// 生态环境
const ecology = () => import(/* webpackChunkName: "ecology" */ '@/pages/city-management/environment/ecology.vue')
// 食品药品
const foodAndDrug = () => import(/* webpackChunkName: "government-service" */ '@/pages/city-management/market-supervision/food-drug.vue')
export default [
  {
    name: 'entry',
    path: '/entry',
    component: entry
  },
  {
    path: '/',
    redirect: 'entry'
  },
  // 卫生健康
  {
    name: 'medicalResource',
    path: '/medicalResource',
    component: medicalResource
  },
  // 社会保障
  {
    name: 'socialSecurity',
    path: '/socialSecurity',
    component: socialSecurity
  },
  // 社会保障（保险服务）
  {
    name: 'socialInsure',
    path: '/socialInsure',
    component: socialInsure
  },
  // 宏观经济
  {
    name: 'macroEconomy',
    path: '/macroEconomy',
    component: macroEconomy
  },
  // 惠农惠民
  {
    name: 'benefitPeople',
    path: '/benefitPeople',
    component: benefitPeople
  },
  // 教育资源
  {
    name: 'eductionResource',
    path: '/eductionResource',
    component: eductionResource
  },
  // 重大项目
  {
    name: 'majorProject',
    path: '/majorProject',
    component: majorProject
  },

  // 总部三基地
  {
    name: 'threeBase',
    path: '/threeBase',
    component: threeBase
  },
  // 生态环境
  {
    name: 'ecology',
    path: '/ecology',
    component: ecology
  },
  // 市场监管
  {
    name: 'marketSupervision',
    path: '/marketSupervision',
    component: marketSupervision
  },
  // 市场监管-----市场主体
  {
    name: 'marketSubject',
    path: '/marketSubject',
    component: marketSubject
  },
  // 市场监管-----食品药品
  {
    name: 'foodAndDrug',
    path: '/foodAnddrug',
    component: foodAndDrug
  },
  // 市场监管-----质量技术
  {
    name: 'massTechnology',
    path: '/massTechnology',
    component: massTechnology
  },
  /// 大气环境
  {
    name: 'atmosphericEnvironment',
    path: '/atmosphericEnvironment',
    component: atmosphericEnvironment
  },
  // 水环境
  {
    name: 'waterEnvironment',
    path: '/waterEnvironment',
    component: waterEnvironment
  },
  // 城市设施概况分析
  {
    name: 'cityFacilities',
    path: '/cityFacilities',
    component: cityFacilities
  },
  // 社会保险
  {
    name: 'socialInsurance',
    path: '/socialInsurance',
    component: socialInsurance
  },
  // 科技文化
  {
    name: 'technoCulture',
    path: '/technoCulture',
    component: technoCulture
  }
]
