/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-26 21:20:33
 */
function returnData (data, num) {
  let xData = []
  let sData01 = []
  // let sData02 = []
  // data.forEach(item => {
  //   xData.push(item.zl06001)
  //   sData01.push({name: item.zl06001, value: item.zl06002})
  //   sData02.push({name: item.zl06001, value: item.zl06003})
  // })
  let textName = ''
  let unit = ''
  let allCount = 0
  if (num === 1) {
    allCount = 0
    data.forEach(item => {
      xData.push(item.zl06001)
      textName = '机构'
      unit = '所'
      sData01.push({name: item.zl06001, value: item.zl06002})
      allCount += item.zl06002
    })
  } else {
    allCount = 0
    data.forEach(item => {
      xData.push(item.zl06001)
      textName = '人员'
      unit = '人'
      sData01.push({name: item.zl06001, value: item.zl06003})
      allCount += item.zl06003
    })
  }
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    color: ['#3C92F7', '#6BE673', '#F9E659', '#E5993A', '#E5993A'],
    title: [
      {
        text: allCount,
        x: '17%',
        y: '47%',
        textStyle: {
          color: '#F9FBFF',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 26 * window.$rem,
          fontFamily: 'Impact',
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: textName,
        x: '11%',
        y: '55%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 20 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '（' + unit + '）',
        x: '19.5%',
        y: '56.5%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10,
          fontSize: 14 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      },
      formatter: function (param) {
        if (num === 1) {
          return '检定机构<br>' + param.name + ': ' + param.value + '所'
        } else {
          return '检定人员<br>' + param.name + ': ' + param.value + '人'
        }
      }
    },
    legend: {
      x: 'right',
      y: '39%',
      width: '85%',
      textStyle: {
        color: 'rgba(255,255,255,1)',
        rich: {
          a: {
            color: 'rgba(255,255,255,1)',
            fontSize: 17 * window.$rem,
            padding: [0, 0, 0, 0]
          },
          b: {
            color: '#F8E659',
            fontSize: 17 * window.$rem,
            padding: [0, 40 * window.$rem, 0, 10 * window.$rem]
          }
        }
      },
      icon: 'roundRect',
      itemGap: 30 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      data: xData,
      formatter: (name, param) => {
        let val = ''
        sData01.forEach(item => {
          if (item.name === name) {
            val = item.value
          }
        })
        return `{a| ${name}}` + `{b| ${val}${unit}}`
      }
    },
    calculable: true,
    series: [
      {
        name: '检定机构',
        type: 'pie',
        radius: [60 * window.$rem, 80 * window.$rem],
        center: ['22%', '55%'],
        label: {
          show: false
        },
        data: sData01
      }
    ]
  }
  return option
}
export default returnData
