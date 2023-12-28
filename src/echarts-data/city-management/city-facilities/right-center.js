/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-12 10:32:32
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-25 17:22:33
 */
function returnData (data) {
  let xData = []
  let amount = []
  let register = []
  data.forEach(element => {
    xData.push(element.yearDate)
    amount.push(element.money)
    register.push(element.caseNum)
  })
  let option = {
    color: ['#9BF6D7', '#EC5236'],
    tooltip: {
      trigger: 'axis',
      // axisPointer: {
      //   type: 'cross'
      // },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      // left: '18%',
      top: '2%',
      itemWidth: 20 * window.$rem,
      itemHeight: 7 * window.$rem,
      icon: 'roundRect',
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      data: ['立案数量', '罚款金额']
    },
    grid: {
      left: '8%',
      top: '15%',
      right: '5%',
      bottom: '12%',
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: true,
        axisTick: {
          alignWithLabel: true
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 10 * window.$rem,
          fontSize: 15 * window.$rem
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        data: xData
      }
    ],
    yAxis: [
      {
        type: 'value',
        name: '(件)',
        nameGap: 15 * window.$rem,
        nameTextStyle: {
          color: '#fff',
          fontSize: 13 * window.$rem,
          align: 'right'
        },
        axisLabel: {
          margin: 10 * window.$rem,
          color: '#FFFFFF',
          fontSize: 15 * window.$rem
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        splitLine: {
          lineStyle: {
            type: 'dashed'
          }
        }
      },
      {
        type: 'value',
        name: '(元)',
        nameGap: 15 * window.$rem,
        nameTextStyle: {
          color: '#DFE2FB',
          fontSize: 13 * window.$rem,
          align: 'left'
        },
        axisLabel: {
          color: '#FFFFFF',
          margin: 10 * window.$rem,
          fontSize: 15 * window.$rem
        },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: '#8CF0FC'
          }
        },
        splitLine: {
          show: false,
          lineStyle: {
            type: 'dashed'
          }
        }
      }
    ],
    series: [
      {
        name: '立案数量',
        type: 'bar',
        yAxisIndex: 0,
        barWidth: 20 * window.$rem,
        data: register
      },
      {
        name: '罚款金额',
        type: 'line',
        lineStyle: {
          width: 3 * window.$rem
        },
        yAxisIndex: 1,
        smooth: true,
        data: amount
      }
    ]
  }
  return option
}

export default returnData
