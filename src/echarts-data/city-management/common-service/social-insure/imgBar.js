/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-14 14:51:45
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-21 09:45:25
 */

// import echarts from 'echarts'
function returnData (data, type) {
  console.log(data)
  let xData = []
  let sData01 = []
  let sData02 = []
  let sData03 = []
  let nData = []
  if (type === 'year') { // 年
    data.yearTypeFund[0].typeFundNum.forEach(item => {
      nData.push(item.fundType)
    })
    data.yearTypeFund.forEach(item => {
      xData.push(item.year)
      sData01.push(item.typeFundNum[0].fundNum)
      sData02.push(item.typeFundNum[1].fundNum)
      sData03.push(item.typeFundNum[2].fundNum)
    })
  } else if (type === 'month') {
    data.monthTypeFund[0].typeFundNum.forEach(item => {
      nData.push(item.fundType)
    })
    data.monthTypeFund.forEach(item => {
      // let temp = item.month.split('-')
      // xData.push(temp[1] + '月')
      xData.push(item.month)
      sData01.push(item.typeFundNum[0].fundNum)
      sData02.push(item.typeFundNum[1].fundNum)
      sData03.push(item.typeFundNum[2].fundNum)
    })
  }
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
    color: ['#2E70E4', '#6BE673', '#E28031'],
    legend: {
      data: nData,
      right: '10%',
      top: '0',
      textStyle: {
        color: '#fff',
        fontSize: 16 * window.$rem,
        padding: [0, 0, 0, 6 * window.$rem]
      },
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemGap: 35 * window.$rem
    },
    grid: {
      top: '15%',
      left: '8%',
      right: '10%',
      bottom: '10%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      data: xData,
      axisLine: {
        show: true,
        lineStyle: {
          color: '#a8d7de',
          width: 2,
          type: 'solid'
        }
      },
      axisTick: {
        show: false
      },
      axisLabel: {
        show: true,
        interval: 0,
        margin: 15 * window.$rem,
        textStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 16 * window.$rem
        }
      }
    }],
    yAxis: [{
      name: '(万元)',
      type: 'value',
      nameTextStyle: {
        align: 'right',
        color: '#fff',
        fontSize: 16 * window.$rem
      },
      axisLabel: {
        formatter: '{value}',
        textStyle: {
          color: 'rgba(255,255,255,1)',
          fontSize: 16 * window.$rem
        }
      },
      axisTick: {
        show: false
      },
      axisLine: {
        show: true,
        lineStyle: {
          color: '#a8d7de',
          width: 1,
          type: 'solid'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#4e515c',
          type: 'dashed'
        }
      }
    }],
    series: [
      {
        name: nData[0],
        type: 'bar',
        data: sData01,
        barWidth: 15 * window.$rem, // 柱子宽度
        barGap: 1 * window.$rem // 柱子之间间距
      },
      {
        name: nData[1],
        type: 'bar',
        data: sData02,
        barWidth: 15 * window.$rem,
        barGap: 1 * window.$rem
      },
      {
        name: nData[2],
        type: 'bar',
        data: sData03,
        barWidth: 15 * window.$rem,
        barGap: 0
        // itemStyle: {
        //   normal: {
        //     color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
        //       offset: 0,
        //       color: 'rgba(59,146,247,1)'
        //     }, {
        //       offset: 1,
        //       color: 'rgba(59,146,247,1)'
        //     }]),
        //     opacity: 1
        //   }
        // }
      }
    ]
  }
  return option
}
export default returnData
