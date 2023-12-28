/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-15 11:27:54
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-20 10:04:03
 */
import echarts from 'echarts'
function setData (data) {
  let itemStyle = [
    {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: '#FA7D3F'
      }, {
        offset: 1,
        color: '#E55711'
      }])
    },
    {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: '#F2D85D'
      }, {
        offset: 1,
        color: '#FFD200'
      }])
    },
    {
      color: new echarts.graphic.LinearGradient(0, 1, 0, 0, [{
        offset: 0,
        color: '#00B6E3'
      }, {
        offset: 1,
        color: '#007EFB'
      }])
    }]
  let seriesData = []
  data.cardPeoNumList.forEach((item, index) => {
    seriesData.push(
      {
        name: data.districtList[index],
        value: item,
        itemStyle: index < 2 ? itemStyle[index] : itemStyle[2]
      }
    )
  })
  let option = {
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
    grid: {
      left: '3%',
      right: '4%',
      bottom: '8%',
      top: '13%',
      containLabel: true
    },
    xAxis: [{
      type: 'category',
      axisTick: {
        show: false,
        color: '#fff'
      },
      axisLabel: {
        rotate: 20,
        interval: 0,
        margin: 8 * window.$rem,
        textStyle: {
          fontSize: 14 * window.$rem,
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      data: data.districtList
    }],
    yAxis: {
      type: 'value',
      min: 0,
      // max: 100,
      name: '（张）',
      nameTextStyle: {
        fontSize: 14 * window.$rem,
        color: '#fff',
        align: 'right',
        padding: [0, 0, 5 * window.$rem, 0]
      },
      splitLine: {
        show: false
      },
      axisLabel: {
        textStyle: {
          fontSize: 12 * window.$rem,
          color: '#fff'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#57617B'
        }
      },
      axisTick: {
        show: false
      }
    },
    series: [{
      // name: '直接访问',
      type: 'bar',
      barWidth: '40%',
      data: seriesData
    }]
  }
  return option
}

export default setData
