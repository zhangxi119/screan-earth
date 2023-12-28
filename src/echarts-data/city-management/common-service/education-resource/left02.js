/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-03 18:03:55
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-07 20:04:20
 */

var colors = [
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#e7b0e0'
    }, {
      offset: 0.5,
      color: '#be6fa7'
    }, {
      offset: 1,
      color: '#cb9fcb'
    }]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#aafce3'
    }, {
      offset: 0.5,
      color: '#d5fff0'
    }, {
      offset: 1,
      color: '#95bcb6'
    }]
  },
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#f9ba52'
    }, {
      offset: 0.5,
      color: '#f6dd93'
    }, {
      offset: 1,
      color: '#b79d5b'
    }]
  }
]

var barWidth = 12 * window.$rem
function returnData (data) {
  let xData = data.peopleAgeSet
  let sData01 = []
  let sData02 = []
  let sData03 = []
  console.log(data)
  // data.peopleAgeSet.forEach(item => {
  //   xData.push((item / 10000).toFixed(2))
  // })
  for (let key in data) {
    if (key === '总人数') {
      sData01 = data[key]
    } else if (key === '在读') {
      sData02 = data[key]
    } else if (key === '辍学') {
      sData03 = data[key]
    }
  }
  if (sData01.length === 0) {
    for (let i = 0; i < sData02.length; i++) {
      let temp = sData02[i] + sData03[2]
      sData01.push(temp)
    }
  }
  var option = {
    title: {
      text: ''
    },
    legend: {
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 10 * window.$rem,
      selectedMode: false,
      textStyle: {
        color: '#ffffff',
        padding: [0, 0, 0, 4 * window.$rem],
        fontSize: 14 * window.$rem
      },
      // data: ['总人数', '在读', '辍学']
      data: ['在读', '辍学']
    },
    grid: {
      left: '17.5%',
      top: '15%',
      right: '10%',
      bottom: '18%'
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
    xAxis: {
      type: 'category',
      axisLine: {
        show: false,
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
        fontFamily: 'Microsoft YaHei',
        fontSize: 14 * window.$rem,
        color: '#ffffff'
      },
      data: xData
    },
    yAxis: {
      name: '（人）',
      nameTextStyle: {
        fontSize: 13 * window.$rem,
        color: '#fff',
        padding: [0, 0, 5 * window.$rem, -30 * window.$rem]
      },
      axisLine: {
        lineStyle: {
          color: 'rgba(255,255,255,0.4)'
        }
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        color: '#ffffff',
        fontSize: 14 * window.$rem
        // formatter: function (val) {
        //   let temp = (val / 10000).toFixed(3)
        //   return temp
        // }
      },
      axisTick: {
        show: false
      }
    },
    series: [
      // {
      //   name: '总人数',
      //   z: 1,
      //   type: 'bar',
      //   barWidth: barWidth,
      //   data: sData01,
      //   itemStyle: {
      //     normal: {
      //       color: colors[1]
      //     }
      //   }
      // }, {
      //   z: 3,
      //   name: '总人数',
      //   type: 'pictorialBar',
      //   symbolPosition: 'end',
      //   data: sData01,
      //   symbol: 'diamond',
      //   symbolOffset: ['-130%', '-50%'],
      //   symbolSize: [barWidth, 5 * window.$rem],
      //   tooltip: {
      //     show: false
      //   },
      //   itemStyle: {
      //     normal: {
      //       // borderColor: '#ac4e89',
      //       // borderWidth: 2,
      //       color: '#aafce3'
      //     }
      //   }
      // },
      {
        name: '在读',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: sData02,
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      }, {
        z: 3,
        name: '在读',
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: sData02,
        symbol: 'diamond',
        symbolOffset: ['-70%', '-50%'],
        tooltip: {
          show: false
        },
        symbolSize: [barWidth, 5 * window.$rem],
        itemStyle: {
          normal: {
            // borderColor: '#ac4e89',
            // borderWidth: 2,
            color: '#e7b0e0'
          }
        }
      },
      {
        name: '辍学',
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: sData03,
        itemStyle: {
          normal: {
            color: colors[2]
          }
        }
      }, {
        z: 3,
        name: '辍学',
        type: 'pictorialBar',
        symbolPosition: 'end',
        tooltip: {
          show: false
        },
        data: sData03,
        symbol: 'diamond',
        symbolOffset: ['75%', '-50%'],
        symbolSize: [barWidth, 5 * window.$rem],
        itemStyle: {
          normal: {
            // borderColor: '#ac4e89',
            // borderWidth: 2,
            color: '#f9ba52'
          }
        }
      }
    ]
  }
  return option
}

export default returnData
