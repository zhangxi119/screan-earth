/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-15 14:01:36
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-19 20:08:34
 */

// import echarts from 'echarts'
function returnData (data) {
  let xAxis = []
  let data1 = []
  let data2 = []
  let data3 = []
  let data4 = []
  let data5 = []
  let data6 = []
  let data7 = []
  console.log(data)
  data.xAxis.forEach(item => {
    xAxis.push(item.key)
  })
  data.data[0].forEach(item => {
    data1.push(item || 0)
  })
  data.data[1].forEach(item => {
    data2.push(item || 0)
  })
  data.data[2].forEach(item => {
    data3.push(item || 0)
  })
  data.data[3].forEach(item => {
    data4.push(item || 0)
  })
  data.data[4].forEach(item => {
    data5.push(item || 0)
  })
  data.data[5].forEach(item => {
    data6.push(item || 0)
  })
  data.data[6].forEach(item => {
    data7.push(item || 0)
  })
  let options = {
    color: ['#409BE8', '#73FBFD', '#6BE573', '#F9E659', '#F58634', '#DA5CD4', '#4F5BF3'],
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        // type: 'cross',
        crossStyle: {
          color: '#999'
        }
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
      left: '5%',
      right: '8%',
      bottom: '8%',
      top: '20%',
      containLabel: true
    },
    legend: {
      top: 10 * window.$rem,
      left: '30%',
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 10 * window.$rem,
      textStyle: {
        fontSize: 16 * window.$rem,
        color: '#FFFFFF'
      },
      data: data.marks
    },
    xAxis: [
      {
        type: 'category',
        data: xAxis,
        offset: 10 * window.$rem,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#b8defd'
          }
        },
        axisLabel: {
          interval: 0,
          rotate: xAxis.length > 6 ? 25 : 0,
          color: '#FFFFFF',
          fontSize: 15 * window.$rem

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
        // max: 30000,
        // interval: 5000,
        name: '(个)',
        nameTextStyle: {
          fontSize: 14 * window.$rem,
          align: 'right',
          color: '#fff',
          padding: [0, 0, 5 * window.$rem, 0]
        },
        splitLine: {
          show: true,
          lineStyle: {
            type: 'dotted',
            color: 'rgba(102, 243, 255, .1)'
          }
        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          //   margin: 15,
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          lineStyle: {
            color: '#b8defd'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: data.marks[0],
        stack: 'stack',
        type: 'bar',
        barWidth: 18 * window.$rem,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#7259DE'
        //     }, {
        //       offset: 1,
        //       color: '#282E88'
        //     }])
        //   }
        // },
        data: data1
      },
      {
        name: data.marks[1],
        stack: 'stack',
        type: 'bar',
        barWidth: 18 * window.$rem,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#4EB4DE'
        //     }, {
        //       offset: 1,
        //       color: '#307FF3'
        //     }])
        //   }
        // },
        data: data2
      },
      {
        name: data.marks[2],
        stack: 'stack',
        type: 'bar',
        barWidth: 18 * window.$rem,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#9CF780'
        //     }, {
        //       offset: 1,
        //       color: '#5FC372'
        //     }])
        //   }
        // },
        data: data3
      },
      {
        name: data.marks[3],
        stack: 'stack',
        type: 'bar',
        barWidth: 18,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#4EB4DE'
        //     }, {
        //       offset: 1,
        //       color: '#307FF3'
        //     }])
        //   }
        // },
        data: data4
      },
      {
        name: data.marks[4],
        stack: 'stack',
        type: 'bar',
        barWidth: 18,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#f9bc77'
        //     }, {
        //       offset: 1,
        //       color: '#f87d32'
        //     }])
        //   }
        // },
        data: data5
      },
      {
        name: data.marks[5],
        stack: 'stack',
        type: 'bar',
        barWidth: 18,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#F9E659'
        //     }, {
        //       offset: 1,
        //       color: '#F2B84E'
        //     }])
        //   }
        // },
        data: data6
      },
      {
        name: data.marks[6],
        stack: 'stack',
        type: 'bar',
        barWidth: 18,
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        //       offset: 0,
        //       color: '#F9E659'
        //     }, {
        //       offset: 1,
        //       color: '#F2B84E'
        //     }])
        //   }
        // },
        data: data7
      }
    ]
  }
  return options
}
export default returnData
