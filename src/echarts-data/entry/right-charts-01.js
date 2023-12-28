/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-02 16:35:04
 * @LastEditors: wangting
 * @LastEditTime: 2020-05-07 17:17:50
 */
function createOptions (data) {
  return {
    tooltip: {
      show: true,
      trigger: 'axis',
      axisPointer: {
        animation: false
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
      top: 10,
      left: 'center',
      icon: 'react',
      itemHeight: 3 * window.$rem,
      itemWidth: 14 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 14 * window.$rem
      },
      data: ['安全生产', '公共卫生', '自然灾害', '社会安全']
    },
    grid: {
      left: '2%',
      right: '8%',
      bottom: '15%',
      containLabel: true
    },
    xAxis: [
      {
        boundaryGap: false,
        type: 'category',
        data: data.x,
        position: 'bottom',
        offset: 0,
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          show: false
        },
        axisLabel: {
          color: '#FFFFFF',
          fontSize: 15 * window.$rem,
          margin: 8 * window.$rem
        },
        axisTick: {
          show: true,
          lineStyle: {
            color: '#fff',
            width: 2 * window.$rem
          }
        }
      }
    ],
    yAxis: [
      {
        name: '(件)',
        nameTextStyle: {
          padding: [0, 0, 5 * window.$rem, -35 * window.$rem],
          fontSize: 14 * window.$rem,
          color: '#fff',
          align: 'right'
        },
        type: 'value',
        boundaryGap: [0, '100%'],
        splitLine: {
          show: false

        },
        axisLabel: {
          formatter: '{value}',
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisPointer: {
          type: 'shadow'
        },
        axisLine: {
          show: false
        },
        axisTick: {
          show: false
        }
      }
    ],
    series: [{
      name: '安全生产',
      type: 'line',
      xAxisIndex: 0,
      showSymbol: false,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: '#7EFFDB'
        }
      },
      data: data.y1
    }, {
      name: '公共卫生',
      type: 'line',
      xAxisIndex: 0,
      showSymbol: false,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: '#37BFFF'
        }
      },
      data: data.y2
    }, {
      name: '自然灾害',
      type: 'line',
      xAxisIndex: 0,
      showSymbol: false,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: '#FBE62F'
        }
      },
      data: data.y3
    }, {
      name: '社会安全',
      type: 'line',
      xAxisIndex: 0,
      showSymbol: false,
      hoverAnimation: false,
      itemStyle: {
        normal: {
          color: '#F95800'
        }
      },
      data: data.y4
    }]
  }
}

export default createOptions
