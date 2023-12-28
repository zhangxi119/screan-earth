/*
 * @Descripttion:
 * @Author: leizq
 * @Date: 2020-04-27 21:25:53
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-28 21:45:24
 */

let option1 = (data) => {
  return {
    legend: {
      orient: 'vertical',
      bottom: '1%',
      data: ['剩余病房'],
      itemHeight: 14 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemGap: 30 * window.$rem,
      textStyle: {
        color: '#FFF',
        fontSize: 16 * window.$rem,
        padding: 10 * window.$rem
      },
      icon: 'roundRect',
      formatter: function (name) {
        return name + data.value1
      }
    },
    series: [
      { type: 'pie',
        radius: ['60%', '75%'],
        center: ['50%', '40%'],
        data: [{
          name: '剩余病房',
          value: data.value1,
          itemStyle: {
            color: '#0AD192'
          }
        },
        {
          value: data.value2 - data.value1,
          itemStyle: {
            color: '#07AF7A',
            opacity: 0.2
          }
        }],
        label: {
          normal: {// 默认不显示数据
            show: false,
            position: 'center'
          },
          color: '#fff'
        }}]
  }
}
let option2 = (data) => {
  return {
    legend: {
      orient: 'vertical',
      bottom: '1%',
      data: ['剩余病床'],
      itemHeight: 14 * window.$rem,
      itemWidth: 14 * window.$rem,
      itemGap: 30 * window.$rem,
      textStyle: {
        color: '#FFF',
        fontSize: 16 * window.$rem,
        padding: 10 * window.$rem
      },
      icon: 'roundRect',
      formatter: function (name) {
        return name + data.value1
      }
    },
    series: [
      { type: 'pie',
        radius: ['60%', '75%'],
        center: ['50%', '40%'],
        data: [{
          name: '剩余病床',
          value: data.value1,
          itemStyle: {
            color: '#FCE62F'
          }
        },
        {
          value: data.value2 - data.value1,
          itemStyle: {
            color: '#FCE62F',
            opacity: 0.2
          },
          label: {
            emphasis: {
              show: false
            }
          }
        }],
        label: {
          normal: {// 默认不显示数据
            show: false,
            position: 'center'
          },
          color: '#fff'
        }}]
  }
}
export {option1, option2}
