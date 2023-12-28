/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-04-28 17:18:06
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-28 19:49:58
 */

let option1 = (data) => {
  console.log(data)
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
        center: ['55%', '40%'],
        label: {
          show: false
        },
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
        }
        ]
      }]
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
        center: ['56%', '40%'],
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
