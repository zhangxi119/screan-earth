/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-02 16:28:51
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-21 09:34:46
 */

import echarts from 'echarts'
// import dangerImg from '../img/danger.png'
function returnData (data) {
  let sData01 = []
  let sData02 = []
  let sData03 = []
  let xData = data.schoolTypeSet
  let nameData = data.districtsSet
  data.schoolTypeSet.forEach(ite => {
    sData01.push(data.teacherStuRate[ite][0])
    sData02.push(data.teacherStuRate[ite][1])
    sData03.push(data.teacherStuRate[ite][2])
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
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
    legend: {
      // data: ['城市', '县城', '农村', {name: '超标', icon: 'image://' + dangerImg}],
      data: nameData,
      right: '10%',
      top: '2%',
      textStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem
      },
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 35 * window.$rem
    },
    grid: {
      left: '3%',
      right: '10%',
      bottom: '12%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: xData,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#a8d7de',
          width: 2 * window.$rem,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        margin: 20 * window.$rem,
        textStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 16 * window.$rem
        }
      }
    }],
    yAxis: [{
      type: 'value',
      name: '',
      nameTextStyle: {
        padding: [0, 0, 5 * window.$rem, -30 * window.$rem],
        color: 'rgba(255,255,255,0.7)',
        fontSize: 13 * window.$rem
      },
      axisLabel: {
        formatter: '{value}',
        margin: 8 * window.$rem,
        textStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 16 * window.$rem
        }
      },
      axisTick: {
        show: false
      },
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.3)',
          type: 'dotted'
        }
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#a8d7de',
          width: 1 * window.$rem,
          type: 'solid'
        }
      }
    }],
    series: [
      {
        name: nameData[0],
        type: 'bar',
        data: sData01,
        barWidth: 10 * window.$rem, // 柱子宽度
        barGap: 0, // 柱子之间间距
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(249,229,89,1)'
            }, {
              offset: 1,
              color: 'rgba(249,229,89,1)'
            }]),
            opacity: 1
          }
        }
      },
      {
        name: nameData[1],
        type: 'bar',
        data: sData02,
        barWidth: 10 * window.$rem,
        barGap: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(226,127,49,1)'
            }, {
              offset: 1,
              color: 'rgba(226,127,49,1)'
            }]),
            opacity: 1
          }
        }
      },
      {
        name: nameData[2],
        type: 'bar',
        data: sData03,
        barWidth: 10 * window.$rem,
        barGap: 0,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
              offset: 0,
              color: 'rgba(59,146,247,1)'
            }, {
              offset: 1,
              color: 'rgba(59,146,247,1)'
            }]),
            opacity: 1
          }
        }
      }
      // {
      //   name: '超标',
      //   type: 'pictorialBar',
      //   barGap: '-100%',
      //   symbolPosition: 'end',
      //   symbolSize: 18,
      //   symbolOffset: [0, 5],
      //   data: [{
      //     value: 0,
      //     symbol: dangerImg
      //   }, {
      //     value: 0,
      //     symbol: dangerImg
      //   }, {
      //     value: 80,
      //     symbol: 'image://' + dangerImg
      //   }]
      // }
    ]
  }
  return option
}
export default returnData
