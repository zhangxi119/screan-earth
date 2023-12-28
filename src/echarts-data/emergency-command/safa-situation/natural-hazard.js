/*
 * @Descripttion: 自然灾害
 * @Author: chenqy
 * @Date: 2020-03-08
 * @LastEditors: leizq
 * @LastEditTime: 2020-05-18 21:38:33
 */
// 2016~2020年自然灾害影响较大区域
const naturalArea = (xAxis, data) => {
  return {
    tooltip: {
      trigger: 'axis',
      show: true,
      axisPointer: {
        type: 'shadow',
        shadowStyle: {
          color: 'rgba(7,69,182,0.3)'
        }
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      // bottom: '24%'
      top: '5%',
      bottom: '5%',
      left: '25%'
    },
    xAxis: {
      type: 'value',
      axisLabel: {
        show: false
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: false
      },
      splitLine: {
        show: false
      }
    },
    yAxis: {
      type: 'category',
      data: [],
      offset: 10 * window.$rem,
      axisTick: {
        show: false
      },
      axisLabel: {
        color: '#fff',
        fontSize: 16 * window.$rem,
        // rotate: 30,
        padding: [5 * window.$rem, 0 * window.$rem, 2 * window.$rem, 0 * window.$rem]
      },
      axisLine: {
        lineStyle: {
          color: '#66F3FF'
        }
      }
    },
    series: [{
      data: [
      ],
      type: 'bar',
      barGap: '30%',
      barWidth: 28 * window.$rem

    }]
  }
}
// 2016~2020年自然灾害影响变化情况
const disasterChange = (data) => {
  // data.peopleSumList
  // data.ecoSumList
  data.peopleSumList = data.peopleSumList.map((item) => {
    return (item / 10000).toFixed(2)
  })
  data.ecoSumList = data.ecoSumList.map((item) => {
    return (item / 10000).toFixed(2)
  })
  return {
    color: ['#00ABFB', '#FFD200'],
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (data) {
        let str = ''
        if (data.length > 0) {
          for (let i of data) {
            switch (i.seriesIndex) {
              case 0:
                str += `${i.seriesName} :${i.value} 万人<br>`
                break

              case 1:
                str += `${i.seriesName} :${i.value} 万元<br>`
                break
              default:
                str += ''
            }
          }
        }
        return str
      }
    },
    legend: {
      data: ['受灾人口', '经济损失'],
      // icon: 'rect',
      textStyle: {
        color: '#fff',
        fontSize: 17 * window.$rem,
        padding: [10 * window.$rem, 10 * window.$rem]
      },
      // left: '50%',
      itemHeight: 7 * window.$rem
    },
    xAxis: [{
      data: data.yearList,
      axisTick: {
        show: true
      },
      axisLine: {
        lineStyle: {
          color: '#5E899C'
        }
      },
      axisLabel: {
        fontSize: 16 * window.$rem,
        color: '#fff',
        padding: [5 * window.$rem, 0 * window.$rem, 2 * window.$rem, 0 * window.$rem]
      }
    }],
    yAxis: [{
      name: '(万人)',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'right',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      splitLine: {
        lineStyle: {
          color: '#3B3D4A',
          type: 'dashed'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#5E899C'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 16 * window.$rem
      }
    }, {
      name: '(万元)',
      nameLocation: 'end',
      nameTextStyle: {
        color: '#fff',
        fontSize: 14 * window.$rem,
        align: 'left',
        padding: [0, 0, 8 * window.$rem, 0]
      },
      splitLine: {
        lineStyle: {
          color: '#3B3D4A',
          type: 'dashed'
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        lineStyle: {
          color: '#5E899C'
        }
      },
      axisLabel: {
        color: '#fff',
        fontSize: 16 * window.$rem
      }
    }],
    grid: {
      bottom: '15%',
      top: '25%',
      left: '10%'
    },
    series: [{
      name: '受灾人口',
      type: 'bar',
      showSymbol: true,
      barWidth: 20 * window.$rem,
      symbolSize: 8 * window.$rem,
      data: data.peopleSumList
    }, {
      name: '经济损失',
      type: 'line',
      symbol: 'circle',
      showSymbol: true,
      symbolSize: 8 * window.$rem,
      data: data.ecoSumList,
      yAxisIndex: 1
    }]
  }
}

// 自然灾害监测点位主要分布区域
const naturalDistribution = (data) => {
  return {
    color: ['#3398DB'],
    tooltip: {
      trigger: 'axis',
      formatter: '{b} ：{c}个',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      axisPointer: {
        type: 'shadow'
      },
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    grid: {
      top: '20%',
      left: '1.5%',
      right: '4%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [
      {
        offset: 10 * window.$rem,
        type: 'category',
        data: data.districtList,
        axisTick: {
          show: true
        },
        axisLine: {
          lineStyle: {
            color: '#5E899C'
          }
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          rotate: 30
        }
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(个)',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        axisLabel: {
          color: '#fff',
          fontSize: 15 * window.$rem
        },
        axisTick: {
          show: false
        },
        splitLine: {
          lineStyle: {
            color: '#2B2E3D',
            type: 'dashed'
          }
        },
        axisLine: {
          lineStyle: {
            color: '#5E899C'
          }
        }
      }
    ],
    series: [
      {
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [{
              offset: 0, color: '#0ADEA5'
            }, {
              offset: 1, color: '#00B6E3'
            }]
          }
        },
        type: 'bar',
        barWidth: 20 * window.$rem,
        data: data.typeNumList
      }
    ]
  }
}
export {
  naturalArea,
  disasterChange,
  naturalDistribution
}
