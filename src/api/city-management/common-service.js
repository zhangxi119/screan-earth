/*
 * @Descripttion: 公共服务
 * @Author: zhangxi
 * @Date: 2020-03-10 15:52:54
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-23 23:07:23
 */
import BASE_PATH from '@/api/basePath'

export default {
  /** -------------登录接口---------------**/
  LOGIN (vm, params) {
    return vm.$axios.post(BASE_PATH + 'bind', params)
  },

  /** ---------------------------------------教育资源-----------------------------------------**/
  /** -------------乐山市学校情况---------------**/
  EDCCTION_SCHOOL (vm, params) { // 左  schoolSpreadList 右 districtSchoolSpreadMap
    return vm.$axios.post(BASE_PATH + 'screen/education/schoolSituation', params)
  },
  /** -------------乐山市教师情况---------------**/
  EDCCTION_TEACHER (vm, params) { // 左 teacherSpreadList 右 teacMapherStuRateMap
    return vm.$axios.post(BASE_PATH + 'screen/education/teacherSituation', params)
  },
  /** -------------乐山市教育规划情况---------------**/
  EDCCTION_PLANNING (vm, params) { // 左 taapList 右 eduBalanceMap
    return vm.$axios.post(BASE_PATH + 'screen/education/educationPlan', params)
  },
  /** -------------随迁子女接受义务教育情况---------------**/
  EDCCTION_PEOPLESTUDY (vm, params) { // 左 taapList 右 eduBalanceMap
    return vm.$axios.post(BASE_PATH + 'screen/education/mChildGSchool', params)
  },
  /** -------------乐山市学生情况---------------**/
  EDCCTION_STUDENT (vm, params) { // 左 全部:左inschoolStuMap 右 peopeleChangeMap, 少数民族:左mStuSchoolMap 右 mStuYearSchoolMap
    return vm.$axios.post(BASE_PATH + 'screen/education/studentSituation', params)
  },
  /** -------------教育机构监管情况---------------**/
  EDCCTION_CONTROL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/education/inSup', params)
  },
  /** -------------乐山市学校情况（地图）---------------**/
  EDCCTION_MAP (vm, params) { // 左 全部:左inschoolStuMap 右 peopeleChangeMap, 少数民族:左mStuSchoolMap 右 mStuYearSchoolMap
    return vm.$axios.post(BASE_PATH + 'screen/education/districtSchool', params)
  },
  /** -------------乐山市总体情况 （头部和两个适龄入学率）---------------**/
  EDCCTION_ALLDATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/education/overallSchool', params)
  },
  /** -------------各区县学校数量排行点击---------------**/
  EDCCTION_AREACLICK (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/education/districtClick', params)
  },
  /** -------------学校类型点击---------------**/
  EDCCTION_SCHOOLCLICK (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/education/overallClick', params)
  },
  /** -------------区县总体情况（地图）---------------**/
  EDCCTION_AREAMAP (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/education/queryMapInfo', params)
  },
  /** ---------------------------------------质量技术-----------------------------------------**/
  /** -------------地图---------------**/
  // MASS_MAPDATA (vm, params) {
  //   return vm.$axios.post(BASE_PATH + 'screen/quality/classificationOfSpecialEquipment', params)
  // },
  /** -------------特种设备设备类型数量---------------**/
  MASS_DEVICENUM (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/classificationOfSpecialEquipment', params)
  },
  /** -------------特种设备定期检验情况---------------**/
  MASS_CHECK (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/inspectionOfSpecialEquipment', params)
  },
  /** -------------工业产品许可情况---------------**/
  MASS_INDUSTRY_PERMIT (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/industryProductionLicense', params)
  },
  /** -------------工业产品检查情况---------------**/
  MASS_INDUSTRY_CHECK (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/inspectionOfIndustryProduction', params)
  },
  /** -------------计量检定概况---------------**/
  MASS_MERTERING (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/inspectionOfMetrology', params)
  },
  /** -------------计量检定机构/检定人员情况---------------**/
  MASS_MERTERING_PEOPLE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/measurementAgencyInfo', params)
  },
  /** -------------强制计量器具分类检定情况---------------**/
  MASS_MERTERING_TYPE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/inspectionOfCompulsoryMeasurement', params)
  },
  /** -------------强制计量器具区县检定情况---------------**/
  MASS_MERTERING_AREA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/districtOfCompulsoryMeasurement', params)
  },
  // 特种设备年度统计
  QUERY_DEVICE_DATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/quality/queryDeviceDataByYear', params)
  },
  /** ---------------------------------------惠民惠农-----------------------------------------**/
  /** -------------补助资金总体情况 & 补助资金年度发放情况---------------**/
  overallSituation (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/overallSituation', params)
  },
  /** -------------补助资金发放情况 & 业务部门补贴享受人数top3 & 项目补贴享受人数top3 ---------------**/
  subFundSituation (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/subFundSituation', params)
  },
  /** -------------业务受理情况---------------**/
  businessAccepted (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/businessAccepted', params)
  },
  /** -------------电子督查情况---------------**/
  epolice (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/epolice', params)
  },
  /** -------------各区县总体情况 ---------------**/
  overallDistrict (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/overallDistrict', params)
  },
  /** -------------电子督察-预警点击事件 ---------------**/
  epoliceClick (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/epoliceClick', params)
  },
  /** -------------发放失败情况 ---------------**/
  queryfailRateInfo (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/queryfailRateInfo', params)
  },
  /** -------------中间地图---------------**/
  detailsClass (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/peopleFarmer/detailsClass', params)
  },
  /** ---------------------------------------卫生健康-----------------------------------------**/
  /** -------------卫生健康二维地图数据---------------**/
  MEDICAL_MAPDATAS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/overallMedical', params)
  },
  /** -------------卫生健康三维地图数据---------------**/
  MEDICAL_MAPDETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/detailsMedical', params)
  },
  /** -------------卫生健康图例---------------**/
  MEDICAL_MAPPANEL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/generKeyboard', params)
  },
  /** -------------卫生健康 & 卫生健康总体情况---------------**/
  OVER_ALL_SITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/overallSituation', params)
  },
  /** -------------卫生健康 & 医疗资源情况---------------**/
  RESOURCE_SITUTION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/resourcesSituation', params)
  },
  /** -------------卫生健康 & 医疗服务诊疗情况 & 入院情况---------------**/
  SERVICE_SITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/serviceSituation', params)
  },
  /** -------------卫生健康 & 电子督察情况---------------**/
  EPOLICE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/epolice', params)
  },
  /** -------------卫生健康 & （行政处罚情况 & 行政许可）---------------**/
  ADMINISTRATION_PASS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/adminSituation', params)
  },
  /** -------------卫生健康 & 120列表---------------**/
  HEALTH120LIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/emergencyCallTime', params)
  },
  /** -------------卫生健康 & 120列表详情---------------**/
  HEALTH120DETAIL (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/emergencyCallClick', params)
  },
  /** -------------卫生健康 & 区县总体情况（地图）---------------**/
  HEALTH_AREAMAP (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/health/queryMapInfo', params)
  },
  /** -------------科技文化 & 总体情况---------------**/
  SCIENCEOVERALLSITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/scienceCulture/overallSituation', params)
  },
  /** -------------科技文化 & 科技型高新科技企业情况---------------**/
  SCIENCEENTERPRISETYPENUMLIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/scienceCulture/scienceEnterprise', params)
  },
  /** -------------科技文化 & 特色文化---------------**/
  SPECIALCULTURE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/scienceCulture/specialCulture', params)
  },
  /** -------------科技文化 & 地图图例---------------**/
  TECHNO_MAPIMGS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/scienceCulture/generKeyboard', params)
  },
  /** -------------科技文化 & 地图数据---------------**/
  TECHNO_MAPDATAS (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/scienceCulture/keyboardClick', params)
  },
  /** -------------科技文化 & 区县总体情况（地图）---------------**/
  TECHNO_AREAMAP (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/scienceCulture/queryMapinfo', params)
  },

  /** ---------------------------------------社会保障-住房、公积金-----------------------------------------**/
  /** -------------社会保险---------------**/
  SOCIAL_INSURE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/socialSafe', params)
  },
  /** -------------保障情况---------------**/
  SOCIAL_INSURESITUATION (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/dealSituation', params)
  },
  /** -------------社会补贴信息---------------**/
  SOCIAL_SUBSIDY (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/socialSubsidy', params)
  },
  /** -------------住房保障 & 公积金---------------**/
  SOCIAL_HOUSEINSURE (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/houseAndFunds', params)
  },
  /** -------------区县地图---------------**/
  SOCIAL_MAPDATALIST (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/districtsInsure', params)
  },
  /** -------------地图点位详情---------------**/
  SOCIAL_MAPDATA (vm, params) {
    return vm.$axios.post(BASE_PATH + 'screen/socialSecurity/insureDetails', params)
  }
}
