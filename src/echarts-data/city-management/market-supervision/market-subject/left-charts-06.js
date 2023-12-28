/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 21:55:49
 */
import echarts from 'echarts'

function returnData (data) {
  let xData = []
  // 柱状图数据
  let sData01 = [] // 企业
  let sData02 = [] // 个体工商
  let sData03 = [] // 农专合作社
  // 折线
  let sData01a = []
  let sData02a = []
  let sData03a = []
  let xTypeData = {}
  data.forEach(item => {
    if (xTypeData.hasOwnProperty(item.month)) {
      xTypeData[item.month].push(item)
    } else {
      xTypeData[item.month] = []
      xTypeData[item.month].push(item)
    }
  })
  for (let key in xTypeData) {
    // let nameArr = key.split('-')
    // console.log()
    xData.push(key)
    // xData.push(key)
    xTypeData[key].forEach(item => {
      if (item.zt04003 === 1) { // 企业
        sData01.push(item.zt04004)
        sData01a.push(item.zt04006)
      } else if (item.zt04003 === 2) { // 个体工商
        sData02.push(item.zt04004)
        sData02a.push(item.zt04006)
      } else if (item.zt04003 === 3) { // 农专合作社
        sData03.push(item.zt04004)
        sData03a.push(item.zt04006)
      }
    })
  }
  console.log(xData)
  let options = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      // formatter: '{b0}年:<br>{a0}:{c0}户 <br> {a1}:{c1}户 <br>{a2}:{c2}户 <br>{a3}:{c3}% <br>{a4}:{c4}% <br>{a5}:{c5}%'
      formatter: function (param) {
        var str = `<div>${param[0].name}</div>`
        for (var i = 0; i < param.length; i++) {
          if (param[i].seriesName === '企业' || param[i].seriesName === '农专合作社' || param[i].seriesName === '个体工商户') {
            str += `<div>${param[i].seriesName}: ${param[i].value}户</div>`
          } else {
            str += `<div>${param[i].seriesName}: ${param[i].value}%</div>`
          }
        }
        return str
      }
    },
    grid: {
      left: '5%',
      right: '1%',
      top: '28%',
      bottom: 8 * window.$rem,
      containLabel: true
    },
    legend: {
      top: 25 * window.$rem,
      // left: 'center',
      width: '60%',
      itemWidth: 10 * window.$rem,
      itemHeight: 10 * window.$rem,
      itemGap: 10 * window.$rem,
      right: 55 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        padding: [0, 0, 0, 4 * window.$rem],
        fontSize: 16 * window.$rem
      },
      // data: ['企业', '个体', '农专', '/n', '企业增幅', '个体增幅', '农专增幅'],
      data: [{name: '企业'},
        {name: '个体工商户'},
        {name: '农专合作社'}, '\n',
        {name: '企业增幅'},
        {name: '个体增幅'},
        {name: '农专增幅'}]
    },
    xAxis: [
      {
        type: 'category',
        data: xData,
        offset: 10,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem,
          rotate: 40
        },
        axisTick: {
          show: false
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        // min: 0,
        // // max: 300,
        name: '（户）',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 10 * window.$rem, 0]
        },
        interval: 500,
        splitLine: {
          show: true,
          lineStyle: {
            color: 'rgba(255,255,255,0.3)',
            type: 'dotted'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          margin: 8 * window.$rem,
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      },
      {
        type: 'value',
        // min: -0.3,
        // max: 0.3,
        // interval: 0.8,
        name: '（%）',
        nameTextStyle: {
          color: '#FFF',
          fontSize: 14 * window.$rem,
          align: 'left',
          padding: [0, 0, 10 * window.$rem, 0]
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          formatter: function (value, index) {
            return value.toFixed(1)
          },
          color: '#FFFFFF',
          margin: 8 * window.$rem,
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#66F3FF'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: '企业',
        stack: 'stack',
        type: 'bar',
        barWidth: 16 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#00B6E3'
            }, {
              offset: 1,
              color: '#007EFB'
            }])
          }
        },
        data: sData01
      },
      {
        name: '个体工商户',
        stack: 'stack',
        type: 'bar',
        barWidth: 16 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#FEE65F'
            }, {
              offset: 1,
              color: '#E27F31'
            }])
          }
        },
        data: sData01
      },
      {
        name: '农专合作社',
        stack: 'stack',
        type: 'bar',
        barWidth: 16 * window.$rem,
        itemStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
              offset: 0,
              color: '#5fc372'
            }, {
              offset: 1,
              color: '#c0ff6e'
            }])
          }
        },
        data: sData01
      },
      {
        name: '企业增幅',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#734DFF'
          }
        },
        lineStyle: {
          width: 3 * window.$rem
        },
        data: sData01a
      },
      {
        name: '个体增幅',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#2EE2B1'
          }
        },
        lineStyle: {
          width: 3 * window.$rem
        },
        data: sData02a
      },
      {
        name: '农专增幅',
        type: 'line',
        symbol: 'circle',
        symbolSize: 8 * window.$rem,
        yAxisIndex: 1,
        itemStyle: {
          normal: {
            color: '#E8632A'
          }
        },
        lineStyle: {
          width: 3 * window.$rem
        },
        data: sData03a
      }
    ]
  }
  return options
}
export default returnData
