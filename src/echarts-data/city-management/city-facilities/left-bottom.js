/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-11 19:15:28
 * @LastEditors: wuqiuchi
 * @LastEditTime: 2020-03-17 14:30:50
 */
import echarts from 'echarts'
import img from '../../../assets/common/blue-point.png'
// import img1 from '../../../assets/common/orange-point.png'
export default {
  returnData02 (params) {
    let data = params.eventNum // 数值大小
    let max = params.total // 满刻度大小
    // 广告牌遮挡交通标志
    let option02 = {
      title: {
        text: params.eventType,
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem
        }
      },
      color: ['#fff', 'rgba(88,231,249,.2)', 'rgba(88,231,249,.2)'],
      series: [{
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['58%', '70%'],
        hoverAnimation: false,
        data: [{
          name: '',
          value: data,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0.1,
                color: '#0B62DF'
              }, {
                offset: 1,
                color: '#58E7F9'
              }])
            }
          },
          label: {
            show: true,
            position: 'center',
            color: '#fff',
            fontSize: 22 * window.$rem,
            fontWeight: 'bold',
            formatter: function (o) {
              return data + '件'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        },
        { // 画中间的图标
          name: '',
          value: 0,
          label: {
            position: 'inner',
            backgroundColor: {
              image: `${img}`
            },
            width: 30 * window.$rem,
            height: 30 * window.$rem,
            borderRadius: 30 * window.$rem,
            padding: 30 * window.$rem
          }
        }, { // 画剩余的刻度圆环
          name: '',
          value: max - data,
          label: {
            show: false
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        }
        ]
      }]
    }
    return option02
  },

  // 道路积水
  returnData03 (params) {
    let data = params.eventNum // 数值大小
    let max = params.total // 满刻度大小
    let option03 = {
      title: {
        text: params.eventType,
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem
        }
      },
      color: ['#fff', 'rgba(88,231,249,.2)', 'rgba(88,231,249,.2)'],
      series: [{
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['58%', '70%'],
        hoverAnimation: false,
        data: [{
          name: '',
          value: data,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0.1,
                color: '#0B62DF'
              }, {
                offset: 1,
                color: '#58E7F9'
              }])
            }
          },
          label: {
            show: true,
            position: 'center',
            color: '#fff',
            fontSize: 22 * window.$rem,
            fontWeight: 'bold',
            formatter: function (o) {
              return data + '件'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        },
        { // 画中间的图标
          name: '',
          value: 0,
          label: {
            position: 'inside',
            backgroundColor: {
              image: `${img}`
            },
            width: 30 * window.$rem,
            height: 30 * window.$rem,
            borderRadius: 30 * window.$rem,
            padding: 30 * window.$rem
          }
        }, { // 画剩余的刻度圆环
          name: '',
          value: max - data,
          label: {
            show: false
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        }
        ]
      }]
    }
    return option03
  },

  // 施工扰民
  returnData04 (params) {
    let data = params.eventNum // 数值大小
    let max = params.total // 满刻度大小
    let option04 = {
      title: {
        text: params.eventType,
        bottom: 0,
        left: 'center',
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem
        }
      },
      color: ['#fff', 'rgba(88,231,249,.2)', 'rgba(88,231,249,.2)'],
      series: [{
        type: 'pie',
        center: ['50%', '45%'],
        radius: ['58%', '70%'],
        hoverAnimation: false,
        data: [{
          name: '',
          value: data,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [ {
                offset: 0.1,
                color: '#0B62DF'
              }, {
                offset: 1,
                color: '#58E7F9'
              }])
            }
          },
          label: {
            show: true,
            position: 'center',
            color: '#fff',
            fontSize: 22 * window.$rem,
            fontWeight: 'bold',
            formatter: function (o) {
              return data + '件'
            }
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        },
        { // 画中间的图标
          name: '',
          value: 0,
          label: {
            position: 'inside',
            backgroundColor: {
              image: `${img}`
            },
            width: 30 * window.$rem,
            height: 30 * window.$rem,
            borderRadius: 30,
            padding: 30 * window.$rem
          }
        }, { // 画剩余的刻度圆环
          name: '',
          value: max - data,
          label: {
            show: false
          },
          labelLine: {
            show: false,
            emphasis: {
              show: false
            }
          }
        }
        ]
      }]
    }
    return option04
  }
}
