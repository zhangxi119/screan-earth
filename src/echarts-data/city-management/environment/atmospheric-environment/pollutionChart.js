/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-06 09:32:58
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-18 17:01:29
 */
function returnOption (data) {
  let xData = data.xAxis
  let seriesData = data.data
  let option = {
    backgroundColor: 'transparent',
    'grid': {
      'top': '15%',
      'left': '15%',
      'bottom': '10%',
      'right': '10%',
      'containLabel': true
    },
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: '污染块数量<br /><span style="display:inline-block;margin-right:5px;border-radius:10px;width:10px;height:10px;background-color:#00A2B1"></span>{b0}年：{c0}块',
      padding: 10 * window.$rem
    },
    'xAxis': [{
      'type': 'category',
      'data': xData,
      'axisTick': {
        'alignWithLabel': true,
        show: false
        // textStyle: {
        //   color: '#fff'
        // }
      },
      'nameTextStyle': {
        'color': '#fff',
        align: 'right',
        fontSize: 14 * window.$rem
      },
      'axisLine': {
        'lineStyle': {
          'color': '#73FBE7'
        }
      },
      'axisLabel': {
        margin: 20 * window.$rem,
        'textStyle': {
          'color': '#fff',
          fontSize: 20 * window.$rem
        }
      }
    }],
    'yAxis': [{
      'type': 'value',
      'axisLabel': {
        show: false,
        'textStyle': {
          'color': '#82b0ec'
        },
        'formatter': '{value}%'
      },
      'splitLine': {
        show: false,
        'lineStyle': {
          'color': '#0c2c5a'
        }
      },
      'axisLine': {
        'show': false
      },
      axisTick: {
        show: false
      }
    }],
    'series': [
      {
        'name': '',
        type: 'pictorialBar',
        symbolSize: [30 * window.$rem, 16 * window.$rem],
        symbolOffset: [0 * window.$rem, -10 * window.$rem],
        symbolPosition: 'end',
        // barGap: '50%',
        // symbol: 'diamond',
        z: 12 * window.$rem,
        // "barWidth": "20",
        'label': {
          'normal': {
            'show': true,
            'position': 'top',
            'formatter': '{c}',
            color: '#fff',
            fontSize: 20 * window.$rem
          },
          fontSize: 20 * window.$rem,
          fontWeight: '600'
        },
        itemStyle: {
          normal: {
            color: '#09FEE5'
          }
        },
        emphasis: {
          itemStyle: {
            color: '#FF923D'
          }
        },
        'data': seriesData
      },
      {
        name: '',
        type: 'pictorialBar',
        symbolSize: [30 * window.$rem, 16 * window.$rem],
        symbolOffset: [0 * window.$rem, 10 * window.$rem],
        // "barWidth": "20",
        // barGap: '50%',
        // symbol: 'diamond',
        itemStyle: {
          normal: {
            color: '#09FEE5'
          }
        },
        emphasis: {
          itemStyle: {
            color: '#FFCFA8'
          }
        },
        z: 12 * window.$rem,
        'data': seriesData
      },
      {
        type: 'bar',
        itemStyle: {
          normal: {
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#06FEED'
              }, {
                offset: 0.5, color: 'rgba(2,216,199,.2)'
              }, {
                offset: 1, color: '#06FEED'
              }]
            },
            borderWidth: 2 * window.$rem,
            borderColor: '#09FEE5'
          }
        },
        emphasis: {
          itemStyle: {
            borderColor: 'rgba(255,207,168,0.8)',
            color: {
              type: 'linear',
              x: 0,
              y: 0,
              x2: 1,
              y2: 0,
              colorStops: [{
                offset: 0, color: '#FF923D'
              }, {
                offset: 0.5, color: 'rgba(255,144,64,.2)'
              }, {
                offset: 1, color: '#FF923D'
              }]
            }
          },
          label: {
            color: 'rgba(255,207,168,0.8)'
          }
        },
        // silent: true,
        'barWidth': 30 * window.$rem,
        // barGap: '50%', // Make series be overlap
        'data': seriesData
        // markLine: {
        //   symbol: 'none',
        //   label: {
        //     position: 'middle',
        //     formatter: '{b}'
        //   },
        //   data: [{
        //     name: '目标值',
        //     yAxis: 80, // res.targetTwo,
        //     lineStyle: {
        //       color: '#eecb5f'
        //     }
        //   }]
        // }

      },
      {
        type: 'line',
        smooth: true,
        data: seriesData,
        emphasis: {
          itemStyle: {
            borderWidth: 0,
            color: '#FFCFA8'
          }
        },
        lineStyle: {
          width: 3 * window.$rem,
          z: 12 * window.$rem,
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 1,
            y2: 0,
            colorStops: [{
              offset: 0,
              color: 'rgba(255,207,168,.1)' // 0% 处的颜色
            },
            {
              offset: 0.2,
              color: '#FE9345'
            }, {
              offset: 0.8,
              color: '#FE9345'
            },
            {
              offset: 1,
              color: 'rgba(255,207,168,.1)'
            }
            ]
          }
        }
      }

    ]
  }
  return option
}
export default returnOption
