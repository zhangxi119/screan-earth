/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-03 11:11:47
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-07 19:59:37
 */
import echarts from 'echarts'
function rentruenData (data) {
  if (data) {
    for (let key in data) {
      data.schoolTypeSet.forEach((item) => {
        if (key === item) {
          data[key].sort((a, b) => a.year - b.year)
        }
      })
    }
  }
  let sData01 = []
  let sData02 = []
  let sData03 = []
  let sData04 = []
  let xData = []
  data['幼儿园'].forEach(item => {
    sData01.push(item.peopleNum)
    xData.push(item.year)
  })
  data['小学'].forEach(item => {
    sData02.push(item.peopleNum)
  })
  data['初中'].forEach(item => {
    sData03.push(item.peopleNum)
  })
  data['高中'].forEach(item => {
    sData04.push(item.peopleNum)
  })
  let option = {
    legend: {
      show: true,
      left: 'center',
      top: '7%',
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 30 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 14 * window.$rem
      },
      data: ['幼儿园', '小学', '初中', '高中']
    },
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
    grid: {
      top: '20%',
      left: '20%',
      bottom: '12%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 13 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 14 * window.$rem,
          color: '#ffffff'
        }
      },
      data: xData
    },
    yAxis: {
      type: 'value',
      name: '（人）',
      nameTextStyle: {
        color: 'rgba(255,255,255,0.9)',
        fontSize: 14 * window.$rem,
        padding: [0, 0, 0, -50 * window.$rem]
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: '#4e515c',
          type: 'dashed'
        }
      },
      axisLabel: {
        show: true,
        margin: 13 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 13 * window.$rem,
          color: '#ffffff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#acdeff'
        }
      }
    },
    series: [
      {
        name: '幼儿园',
        data: sData01,
        type: 'bar',
        barWidth: 13 * window.$rem,
        itemStyle: {
          normal: {
            color: '#0291FF'
          }
        }
      },
      {
        name: '小学',
        data: sData02,
        type: 'bar',
        barWidth: 13 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#00E1FC'
            }, {
              offset: 1,
              color: '#00E1FC'
            }])
          }
        }
      }, {
        name: '初中',
        data: sData03,
        type: 'bar',
        barWidth: 13 * window.$rem,
        barGap: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#07EA62'
            }, {
              offset: 1,
              color: '#07EA62'
            }])
          }
        }
      }, {
        name: '高中',
        data: sData04,
        type: 'bar',
        barWidth: 13 * window.$rem,
        barGap: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: '#FCE62F'
            }, {
              offset: 1,
              color: '#FCE62F'
            }])
          }
        }
      }
    ]
  }
  return option
}
export default rentruenData
