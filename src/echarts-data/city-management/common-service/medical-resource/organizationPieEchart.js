/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-15 14:06:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-28 20:21:42
 */
import echarts from 'echarts'
function returnData (data) {
  let value01 = 0
  let value02 = 0
  let total = 0
  data.forEach(item => {
    if (item.medicalType === '公立') {
      value01 = item.num
    }
    if (item.medicalType === '私立') {
      value02 = item.num
    }
    if (item.medicalType === '总数') {
      total = item.num
    }
  })
  let options = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} 家 ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    title: [
      {
        text: total,
        textStyle: {
          fontSize: 26 * window.$rem,
          color: '#77D0FA',
          textShadow: '0px 1px 10px rgba(147,229,252,0.28)'
        },
        textAlign: 'center',
        x: '48%',
        y: '35%'
      },
      {
        text: '医院',
        textStyle: {
          fontSize: 20 * window.$rem,
          color: 'rgba(223,226,251,1)'
        },
        x: '38%',
        y: '48%'
      },
      {
        text: '(家)',
        textStyle: {
          fontSize: 14 * window.$rem,
          color: 'rgba(223,226,251,0.72)'
        },
        x: '54%',
        y: '50%'
      }
    ],
    legend: {
      bottom: 0,
      left: 80 * window.$rem,
      data: ['民营', '公立'],
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemGap: 15 * window.$rem,
      icon: 'roundRect',
      textStyle: {
        padding: [0, 0, 0, 8 * window.$rem],
        fontSize: 16 * window.$rem,
        color: '#FFFFFF'
      }
    },
    calculable: true,
    series: [
      {
        name: '医院',
        type: 'pie',
        radius: [47 * window.$rem, 60 * window.$rem],
        center: ['50%', '47%'],
        label: {
          show: false
        },
        data: [
          {
            value: value02,
            name: '民营',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#4EB4DE'
              }, {
                offset: 1,
                color: '#307FF3'
              }])
            }
          },
          {
            value: value01,
            name: '公立',
            itemStyle: {
              color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
                offset: 0,
                color: '#F9E659'
              }, {
                offset: 1,
                color: '#F2B84E'
              }])
            }
          }
        ],
        emphasis: {
          label: {
            show: true,
            color: '#FFF',
            formatter: '{b}\n{c} 家',
            fontSize: 18 * window.$rem
          },
          labelLine: {
            show: true,
            length: 20 * window.$rem,
            length2: 5 * window.$rem
          }
        }
      }
    ]
  }
  return options
}
export default returnData
