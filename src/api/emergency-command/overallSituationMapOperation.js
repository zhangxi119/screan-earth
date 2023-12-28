/*
 * @Descripttion:   安全态势部分地图公共操作
 * @Author: wanglong
 * @Date: 2020-03-26 16:40:04
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-21 10:07:39
 */
import API from './overallSituationCommonAPI'
import API2 from '@/api/emergency-command/natural-disasters.js'
const areaLocation = {
  '市中区': {lon: '103.731909', lat: '29.579459'},
  '峨边彝族自治县': {lon: '103.17144759803993', lat: '29.092320222621108'},
  '金口河区': {lon: '103.0498171172697', lat: '29.340730491460505'},
  '沙湾区': {lon: '103.53837912661115', lat: '29.324989427901677'},
  '峨眉山市': {lon: '103.3608351100639', lat: '29.48108970080883'},
  '夹江县': {lon: '103.578479', lat: '29.744034'},
  '井研县': {lon: '104.01429221011918', lat: '29.610130805505975'},
  '五通桥区': {lon: '103.823375', lat: '29.41306'},
  '犍为县': {lon: '103.955651', lat: '29.213968'},
  '沐川县': {lon: '103.907969', lat: '28.962066'},
  '马边彝族自治县': {lon: '103.46384535877796', lat: '28.865337491502974'}
}
export {areaLocation}
export default {
  getOverAllSituation () {
    API.OVER_ALL_SITUATION(this, {year: this.GLOBAL_YEAR === '累计数据' ? 2018 : this.GLOBAL_YEAR}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        this.overAllSituationList = res.data.overAllSituationMap
      }
    })
  },
  // / clear marker
  removeMapMarker (type) {
    let arr = this.mapMarkerList.filter((item) => {
      return item && item.id && item.id.indexOf(type + 'marker') > -1
    })
    this.mapMarkerList = this.mapMarkerList.filter((item) => {
      return item && item.id && item.id.indexOf(type + 'marker') < 0
    })
    window._m && window._m.removeMaker && window._m.removeMaker(arr)
  },
  getOverAllSpread (type = 4) {
    window._m && window._m.clear()
    this.mapMarkerList = []
    API.OVER_ALL_SPREAD(this, {year: this.GLOBAL_YEAR, type}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        let arr = []
        let markerArr = []
        if (res.data.overAllSpreadList.length > 0) {
          switch (type) {
            case 1:// 自然灾害
              window._m && window._m.removeHeatPointMap([], true)
              for (let i of res.data.overAllSpreadList) {
                window._m.createHeatZoneMap(i.district, 50)
              }
              break

            case 2:// 公共卫生
              window._m && window._m.removeHeatPointMap([], true)
              for (let i of res.data.overAllSpreadList) {
                window._m.createHeatZoneMap(i.district, 50)
              }
              break
            case 3:// 安全生产
              this.removeMapMarker('OS')
              for (let i in res.data.overAllSpreadList) {
                arr.push({
                  x: +res.data.overAllSpreadList[i].lon,
                  y: +res.data.overAllSpreadList[i].lat,
                  value: 100 * Math.random()
                })
                if (res.data.overAllSpreadList[i].lon && res.data.overAllSpreadList[i].lon !== '') {
                  markerArr.push({
                    lon: res.data.overAllSpreadList[i].lon,
                    lat: res.data.overAllSpreadList[i].lat,
                    _id: res.data.overAllSpreadList[i].id,
                    id: 'OSmarker_' + i,
                    showTextFlag: false,
                    icon01: res.data.overAllSpreadList[i].field02,
                    icon02: res.data.overAllSpreadList[i].field03
                  })
                }
              }
              // window._m && window._m.addHeatPointMap && window._m.addHeatPointMap('securitySituationMap', arr)
              this.mapMarkerList = this.mapMarkerList.concat(markerArr)
              window._m.addMakers(this.mapMarkerList, data => {
                this.isShowMiniMarker = data
              })

              break
            case 4:// 社会安全
              this.removeMapMarker('OS')
              for (let i in res.data.overAllSpreadList) {
                arr.push({
                  x: +res.data.overAllSpreadList[i].lon,
                  y: +res.data.overAllSpreadList[i].lat,
                  value: 50
                })
                if (res.data.overAllSpreadList[i].lon && res.data.overAllSpreadList[i].lon !== '') {
                  markerArr.push({
                    // ...res.data.overAllSpreadList[i],
                    lon: res.data.overAllSpreadList[i].lon,
                    lat: res.data.overAllSpreadList[i].lat,
                    _id: res.data.overAllSpreadList[i].id,
                    id: 'OSmarker_' + i,
                    showTextFlag: false,
                    icon01: res.data.overAllSpreadList[i].field02,
                    icon02: res.data.overAllSpreadList[i].field03
                  })
                }
              }
              // window._m && window._m.addHeatPointMap && window._m.addHeatPointMap('societalSecurityMap', arr)
              this.mapMarkerList = this.mapMarkerList.concat(markerArr)
              window._m.addMakers(this.mapMarkerList, data => {
                this.isShowMiniMarker = data
              })

              break
          }
        } else {
          window._m.clear()
        }
      } else {
        window._m.clear()
      }
      window._m.redirectDimenion((data) => {
      }, false)
    }).catch(() => {

    })
  },
  // / 获取重点防护
  getMajorProtectionPoints (id, center, km) {
    API.MARJOR_PROTECTION_BY_TYPE(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let markerArr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              markerArr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'MPmarker_' + i,
                showTextFlag: false
              })
            }
          }
          markerArr = markerArr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(markerArr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  // WARE_HOUSE_BY_TYPE
  getWareHouseData (id, center, km) {
    API.WARE_HOUSE_BY_TYPE(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'WHmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getHazardByType (id, center, km) {
    API.HAZAR_BY_TYPE(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'HDmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getHeaderquarters (id, center, km) {
    API.HEADER_QUARTERS_BY_ID(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'HPmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getMonitoring (id, center, km) {
    API.MONITORING_BY_TYPE(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'MTmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getSafetyProduction (id, center, km) {
    API.SAFETY_TYPE(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'SPmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getPublic (id, center, km) {
    API2.queryPointsMap(this, {type: 'hygiene', code: id}).then(res => {
      res = res.data
      console.log(res)
      if (res.serviceSuccess) {
        if (res.data.points.length > 0) {
          let arr = []
          for (let i in res.data.points) {
            if (res.data.points[i].lon && res.data.points[i].lon !== '') {
              arr.push({
                ...res.data.points[i],
                lon: +res.data.points[i].lon,
                lat: +res.data.points[i].lat,
                id: 'PBmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getEmergencyTeamByType (id, center, km) {
    API.EMERGENCY_TEAM(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].lon && res.data.data[i].lon !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].lon,
                lat: +res.data.data[i].lat,
                id: 'SPmarker_' + i,
                showTextFlag: false
              })
            }
          }
          arr = arr.filter((item, index) => {
            return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
          })
          this.mapMarkerList = this.mapMarkerList.concat(arr)
          window._m.addMakers(this.mapMarkerList, data => {
            this.isShowMiniMarker = data
          })
        } else {

        }
      }
    })
  },
  getShelterList (id, center, km) {
    API.SHELTER_LIST(this, {type: id}).then(res => {
      res = res.data
      if (res.serviceSuccess) {
        if (res.data.data.length > 0) {
          let arr = []
          for (let i in res.data.data) {
            if (res.data.data[i].longitude && res.data.data[i].longitude !== '') {
              arr.push({
                ...res.data.data[i],
                lon: +res.data.data[i].longitude,
                lat: +res.data.data[i].latitude,
                id: 'SLmarker_' + i,
                showTextFlag: false
              })
            }
            arr = arr.filter((item, index) => {
              return window._m.getSpaceDistanceByLon([center, {lon: item.lon, lat: item.lat}], km)
            })
            this.mapMarkerList = this.mapMarkerList.concat(arr)
            window._m.addMakers(this.mapMarkerList, data => {
              this.isShowMiniMarker = data
            })
          }
        } else {

        }
      }
    })
  },
  operationPanelSelect (item, menu, center, km) {
    try {
      console.log(item, menu, center, km)
      if (menu !== this.activeOptionPanelOneMenu) {
        this.activeOptionPanelOneMenu = menu
      }
      switch (menu) {
        case '突发事件':
          this.removeMapMarker('OS')
          window._m.clear()
          this.GLOBAL_EVENT_TYPE = +item.id

          if (item.isSelected) {
            /// 类型错误   string to  number
            this.GLOBAL_EVENT_TYPE = (+item.id)
            this.getOverAllSpread(+item.id)
          } else {
            this.removeMapMarker('OS')
          }
          break
        case '应急资源':

          if (item.type === '指挥部信息') {
            this.removeMapMarker('HP')
            if (item.isSelected) {
              this.getHeaderquarters(item.id, center, km)
            } else {
              this.removeMapMarker('HP')
            }
          } else if (item.type === '应急物资') {
            this.removeMapMarker('WH')
            if (item.isSelected) {
              this.getWareHouseData(item.id, center, km)
            } else {
              this.removeMapMarker('WH')
            }
          } else if (item.type === '应急队伍') {
            if (item.isSelected) {
              this.getEmergencyTeamByType(item.id, center, km)
            } else {
              this.removeMapMarker('ET')
            }
          } else {
            this.removeMapMarker('SL')
            if (item.isSelected) {
              this.getShelterList(item.id, center, km)
            } else {
              this.removeMapMarker('SL')
            }
          }
          break
        case '重点防护':

          this.removeMapMarker('MP')
          if (item.isSelected) {
            this.getMajorProtectionPoints(item.id, center, km)
          } else {
            this.removeMapMarker('MP')
          }
          break
        case '监测对象':
          if (item.type === '重大危险源类型') {
            this.removeMapMarker('HD')
            if (item.isSelected) {
              this.getHazardByType(item.id, center, km)
            } else {
              this.removeMapMarker('HD')
            }
          } else if (item.type === '自然灾害监测点类型') {
            this.removeMapMarker('MT')
            if (item.isSelected) {
              this.getMonitoring(item.id, center, km)
            } else {
              this.removeMapMarker('MT')
            }
          } else if (item.type === '安全生产类型') {
            this.removeMapMarker('SP')
            if (item.isSelected) {
              this.getSafetyProduction(item.id, center, km)
            } else {
              this.removeMapMarker('SP')
            }
          } else {
            this.removeMapMarker('PB')
            if (item.isSelected) {
              this.getPublic(item.id, center, km)
            } else {
              this.removeMapMarker('PB')
            }
          }
          break
      }
    } catch (error) {
      console.log('error', error)
    }
  },
  markerInfoClose (item) {
    item.showTextFlag = false
  },
  threeMarkerClick (item) {
    if (this.activeOptionPanelOneMenu === '突发事件') {
      this.mapMarkerList.forEach((i, index) => {
        if (i.id === item.id) {
          let a = i
          a.showTextFlag = true
          this.mapMarkerList.splice(index, 1, a)
          API.THING_DETAILS(this, { id: item._id }).then(res => {
            res = res.data
            if (res.serviceSuccess) {
              this.thingDetailsMap = res.data.thingDetailsMap
            }
          })
        } else {
          let a = i
          a.showTextFlag = false
          this.mapMarkerList.splice(index, 1, a)
        }
      })
    }
  },
  miniMarkerClick (item) {
    if (this.activeOptionPanelOneMenu === '突发事件') {
      let { lon, lat } = item
      window._m.getSouthPointByDistance(
        {
          lon,
          lat
        },
        () => {
          if (this.activeOptionPanelOneMenu === '突发事件') {
            item.showTextFlag = true
            // let arr = this.mapMarkerList
            this.mapMarkerList.forEach((i, index) => {
              if (i.id === item.id) {
                let a = i
                a.showTextFlag = true
                this.mapMarkerList.splice(index, 1, a)
              } else {
                let a = i
                a.showTextFlag = false
                this.mapMarkerList.splice(index, 1, a)
              }
            })
            API.THING_DETAILS(this, { id: item._id }).then(res => {
              res = res.data
              if (res.serviceSuccess) {
                this.thingDetailsMap = res.data.thingDetailsMap
              }
            })
          }
        }
      )
    }
  },
  clearAllMarkers () {
    window._m && window._m.removeMaker(this.mapMarkerList, true)
    this.mapMarkerList = []
  }
}
