/*
 * @Descripttion:
 * @Author: wanglong
 * @Date: 2020-03-18 10:34:20
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-23 21:20:26
 */

let option = {
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
export default option
