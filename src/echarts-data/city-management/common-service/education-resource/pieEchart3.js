/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-03 09:40:10
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-20 15:09:59
 */

import echarts from 'echarts'
var placeHolderStyle = {
  normal: {
    label: {
      show: false
    },
    labelLine: {
      show: false
    },
    color: 'rgba(0,0,0,0)',
    borderWidth: 0
  },
  emphasis: {
    color: 'rgba(0,0,0,0)',
    borderWidth: 0
  }
}

var dataStyle = {
  normal: {
    formatter: '{c}人',
    show: true,
    position: 'center',
    textStyle: {
      fontSize: 20 * window.$rem,
      fontWeight: 'normal',
      color: 'rgba(114,245,174,1)'
    }
  }
}
function rentruenData (name, value, total) {
  let leftAuto = name === '义务教育人数' ? '43%' : '45%'
  let option = {
    // backgroundColor: 'rgba(0,0,0,0,)',
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        type: 'shadow'
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    title: [
      // {
      //   text: '人',
      //   left: '68%',
      //   top: '40%',
      //   textAlign: 'center',
      //   textStyle: {
      //     lineHeight: 25 * window.$rem,
      //     color: 'rgba(114,245,174,1)',
      //     fontWeight: 'normal',
      //     fontSize: 14 * window.$rem,
      //     textAlign: 'center'
      //   }
      // },
      {
        text: name,
        left: leftAuto,
        top: '70%',
        textAlign: 'center',
        padding: [0, 9 * window.$rem, 0, 9 * window.$rem],
        borderColor: '#7399c5',
        borderWidth: 1,
        borderRadius: 12 * window.$rem,
        backgroundColor: '#242b8f',
        textStyle: {
          lineHeight: 25 * window.$rem,
          color: 'rgba(114,245,174,1)',
          fontWeight: 'normal',
          fontSize: 14 * window.$rem,
          textAlign: 'center'
        }
      }
    ],
    series: [
      // 外圈的边框
      {
        type: 'pie',
        hoverAnimation: false,
        radius: [50 * window.$rem, 60 * window.$rem],
        center: ['50%', '50%'],
        startAngle: 225,
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: 75,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#205694'
              }, {
                offset: 1,
                // color: '#262a8d'
                color: '#205694'
              }])
            }
          }
        }, {
          value: 25,
          itemStyle: placeHolderStyle
        }

        ]
      },
      {
        type: 'pie',
        hoverAnimation: false,
        radius: [50 * window.$rem, 60 * window.$rem],
        center: ['50%', '50%'],
        startAngle: 225,
        labelLine: {
          normal: {
            show: false
          }
        },
        label: {
          normal: {
            position: 'center'
          }
        },
        data: [{
          value: value,
          itemStyle: {
            normal: {
              color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                offset: 0,
                color: '#0d4ff3'
              }, {
                offset: 1,
                color: '#2e88f0'
              }])
            }
          },
          label: dataStyle
        }, {
          value: total,
          itemStyle: placeHolderStyle
        }

        ]
      }
    ]
  }
  return option
}

export default rentruenData
