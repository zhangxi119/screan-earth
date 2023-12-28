/*
 * @Descripttion:
 * @Author: hangzhang
 * @Date: 2020-03-17 17:28:48
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-22 20:32:11
 */
// function creatArray (str0, str1) {
//   if (str1.length >= 4) {
//     str0 += str1.substr(0, 4) + '\n' + ' '
//     str0 += creatArray(' ', str1.substring(4))
//   } else {
//     str0 += str1 + ' '
//   }
//   return str0
// }
function returnData (data) {
  console.log(data)
  let max = data[0].applyNum
  let indicator = []
  let sData = []
  let maxArr = []
  let nameArr = []
  data.forEach((item) => {
    indicator.push({
      text: item.districtNum,
      max: max
    })
    nameArr.push(item.districtNum)
    sData.push(item.applyNum)
    maxArr.push(max)
  })
  console.log(maxArr)
  let dataArr = [
    {
      value: sData,
      itemStyle: {
        normal: {
          lineStyle: {
            color: '#4A99FF'
          },
          shadowColor: '#4A99FF',
          shadowBlur: 10 * window.$rem
        }
      },
      areaStyle: {
        normal: { // 单项区域填充样式
          color: {
            type: 'linear',
            x: 0, // 右
            y: 0, // 下
            x2: 1, // 左
            y2: 1, // 上
            colorStops: [{
              offset: 0,
              color: '#007EFB'
            }, {
              offset: 1,
              color: 'rgba(56,192,255,0.1)'
            }],
            globalCoord: false
          },
          opacity: 1 // 区域透明度
        }
      }
    }
  ]
  let dataArr2 = [
    {
      value: maxArr,
      itemStyle: {
        normal: {
          lineStyle: {
            color: '#4A99FF'
          },
          shadowColor: '#4A99FF',
          shadowBlur: 10 * window.$rem
        }
      }
    }
  ]
  let options = {
    tooltip: {
      trigger: 'axis',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: (param) => {
        let str = ''
        nameArr.forEach((item, index) => {
          str += `<div>${item} : ${param.value[index]} 件</div>`
        })
        return str
      }
    },
    color: '#4A99FF',
    radar: {
      name: {
        textStyle: {
          color: '#fff',
          padding: [0, 10 * window.$rem],
          fontSize: 16 * window.$rem
        },
        formatter: function (name) {
          let arr = name.split('')
          let str = ''
          for (let i = 0; i < arr.length; i++) {
            str += arr[i]
            if (!(i % 6) && i !== 0) {
              str += '\n'
            }
          }
          return str
        }
      },
      nameGap: 5 * window.$rem,
      indicator: indicator,
      splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
        show: true,
        areaStyle: { // 分隔区域的样式设置。
          color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'] // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
        }
      },
      axisLine: { // 指向外圈文本的分隔线样式
        lineStyle: {
          color: '#153269'
        }
      },
      splitLine: {
        lineStyle: {
          color: '#113865', // 分隔线颜色
          width: 1 // 分隔线线宽
        }
      },
      radius: 70 * window.$rem
    },
    series: [{
      type: 'radar',
      symbolSize: 8 * window.$rem,
      data: dataArr2
    }, {
      type: 'radar',
      name: '热点问题TOP5',
      tooltip: {
        trigger: 'item'
      },
      symbol: 'none',
      data: dataArr
    }]
  }
  return options
}
export default returnData
