/*
 * @Descripttion:
 * @Author: luoxi
 * @Date: 2020-03-14 14:08:57
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-29 20:42:54
 */
function setData (data) {
  let maxData = null
  let radarData = []
  data.womenNumList.forEach(item => {
    maxData = maxData > item ? maxData : item
  })
  data.menNumList.forEach(item => {
    maxData = maxData > item ? maxData : item
  })
  data.ageList.forEach((item, index) => {
    let data = {name: item, max: maxData}
    radarData.push(data)
  })
  let option = {
    backgroundColor: 'transparent',
    color: ['#007EFB', '#FCE62F'],
    legend: {
      data: ['男', '女'],
      right: 3 * window.$rem,
      top: 10 * window.$rem,
      itemGap: 12 * window.$rem,
      itemWidth: 16 * window.$rem,
      itemHeight: 16 * window.$rem,
      textStyle: { // 图例文字的样式
        color: '#fff',
        padding: [0, 0, 0, 6 * window.$rem],
        fontSize: 16 * window.$rem
      }
    },
    tooltip: {
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    radar: {
      // shape: 'circle',
      name: {
        formatter: function (value) {
          if (value === '18以下') {
            return '18岁以下'
          } else if (value === '50以上') {
            return '50岁以上'
          } else {
            return value + '岁'
          }
        },
        textStyle: {
          color: '#fff',
          fontSize: 15 * window.$rem,
          borderRadius: 3 * window.$rem,
          padding: [3 * window.$rem, 5 * window.$rem]
        }
      },
      center: ['48%', '58%'],
      radius: '60%',
      indicator: radarData,
      splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: false,
        areaStyle: { // 分隔区域的样式设置。
          color: ['#21293d'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。

        }

      },
      // axisLabel:{//展示刻度
      //     show: true
      // },
      axisLine: { // 指向外圈文本的分隔线样式
        lineStyle: {
          type: 'dashed',
          color: '#179ADD'
        }
      },
      splitLine: {
        lineStyle: {
          type: 'dashed',
          color: '#179ADD'
        }
      }
    },

    series: [{
      type: 'radar',
      lineStyle: {
        width: 3 * window.$rem
      },
      // areaStyle: {normal: {}},
      data: [{
        value: data.menNumList,
        name: '男',
        areaStyle: {
          normal: {
            color: '#366BAF'
          }
        }
      },
      {
        value: data.womenNumList,
        name: '女',
        areaStyle: {
          normal: {
            color: '#4B8659'
          }
        }
      }
      ]
    }]
  }
  return option
}

export default setData
