/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-03 18:03:55
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 21:13:08
 */
var mColor = [
  '#F3D0FB', '#b1f6e4', '#cd9d74', '4169E1'
]
var colors = [
  {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#F3D0FB'
    }, {
      offset: 1,
      color: '#CB5AA1'
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
      color: '#b1f6e4'
    }, {
      offset: 0.5,
      color: '#d3fef0'
    }, {
      offset: 0.6,
      color: '#a2d7c5'
    }, {
      offset: 1,
      color: '#8cc4b1'
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
      color: '#cd9d74'
    }, {
      offset: 0.5,
      color: '#fce363'
    }, {
      offset: 0.6,
      color: '#e9b748'
    }, {
      offset: 1,
      color: '#d2b075'
    } ]
  }, {
    type: 'linear',
    x: 0,
    x2: 1,
    y: 0,
    y2: 0,
    colorStops: [{
      offset: 0,
      color: '#4169E1'
    }, {
      offset: 0.5,
      color: '#6495ED'
    }, {
      offset: 0.6,
      color: '#1E90FF'
    }, {
      offset: 1,
      color: '#4169E1'
    } ]
  }
]

var barWidth = 12 * window.$rem
function createOptions (data) {
  let name01 = '2018'
  let name02 = '2019'
  return {
    tooltip: {
      trigger: 'axis',
      formatter: function (params) {
        let str = '<p>' + params[0].name + '</p>'
        let _params = []
        params.forEach(d => {
          if (d.componentSubType === 'bar') {
            _params.push(d)
          }
        })
        _params.forEach((d, i) => {
          str += '<p>' + '<span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:' + mColor[i] + ';"></span>' + d.seriesName + '：' + d.value + '</p>'
        })
        return str
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
      textStyle: {
        color: '#ffffff',
        fontSize: 16 * window.$rem
        // lineHeight: 32 * window.$rem
      },
      selectedMode: false,
      top: '5%',
      left: 'right',
      itemWidth: 12 * window.$rem,
      itemHeight: 12 * window.$rem,
      itemGap: 30 * window.$rem,
      height: 30 * window.$rem,
      icon: 'roundRect',
      data: ['2018', '2019']
    },
    grid: {
      top: '10%',
      left: '20%',
      right: '5%',
      bottom: '20%'
    },
    xAxis: {
      type: 'category',
      axisLine: {
        lineStyle: {
          color: '#c5dae7'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        rotate: 34,
        margin: 16 * window.$rem,
        textStyle: {
          fontFamily: 'Microsoft YaHei',
          fontSize: 13 * window.$rem,
          color: '#ffffff'
        },
        formatter: (name, index) => {
          if (name.length >= 6) {
            let arr = name.split('')
            let str = ''
            arr.forEach((item, i) => {
              if (i === 3) {
                str = str + item + '\n'
              } else {
                str += item
              }
            })
            return str
          }
          return name
        }
      },
      data: data.dataX
    },
    yAxis: [
      {
        name: '(个)',
        nameLocation: 'end',
        nameTextStyle: {
          color: '#fff',
          fontSize: 14 * window.$rem,
          align: 'right',
          padding: [0, 0, 8 * window.$rem, 0]
        },
        axisLine: {
          lineStyle: {
            color: '#c5dae7'
          }
        },
        splitLine: {
          show: false
        },
        axisLabel: {
          textStyle: {
            fontFamily: 'Microsoft YaHei',
            fontSize: 16 * window.$rem,
            color: '#ffffff'
          }
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [
      {
        name: name01,
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[name01],
        itemStyle: {
          normal: {
            color: colors[1]
          }
        }
      },
      {
        z: 3,
        name: name01,
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[name01],
        symbol: 'diamond',
        symbolOffset: ['-65%', '-50%'],
        symbolSize: [barWidth, 5 * window.$rem],
        itemStyle: {
          normal: {
            borderColor: '#97ebd1',
            borderWidth: 1,
            color: '#97ebd1'
          }
        }

      }, {
        name: name02,
        z: 1,
        type: 'bar',
        barWidth: barWidth,
        data: data[name02],
        itemStyle: {
          normal: {
            color: colors[0]
          }
        }
      },
      {
        z: 3,
        name: name02,
        type: 'pictorialBar',
        symbolPosition: 'end',
        data: data[name02],
        symbol: 'diamond',
        symbolOffset: ['65%', '-50%'],
        symbolSize: [barWidth, 5 * window.$rem],
        itemStyle: {
          normal: {
            borderColor: '#CB5AA1',
            borderWidth: 1,
            color: '#CB5AA1'
          }
        }
      }]
  }
}

export default createOptions
