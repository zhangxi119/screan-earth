/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-18 16:15:07
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-07 20:35:50
 */
function foamterThoand (val) {
  return val.toString().replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, '$1,')
}
function returnData (data) {
  let sData = []
  let sData01 = []
  let color = ['#006FEC', '#0AD192', '#FCE62F', '#E55711', '#00E1FC', '#C200F3', '#E55711']
  let total = 0
  data.forEach((item, index) => {
    total += item.value
    sData.push({
      value: item.value,
      name: item.name,
      itemStyle: {
        color: color[index]
      }
    })
    if (index === 0) {
      sData01.push({
        value: item.value,
        name: item.name,
        itemStyle: {
          color: '#006FEC'
        }
      })
    } else {
      sData01.push({
        value: item.value,
        name: item.name,
        itemStyle: {
          color: 'transparent'
        }
      })
    }
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    // color: ['#006FEC', '#0AD192', '#FCE62F', '#E55711', '#00E1FC'],
    title: [
      {
        text: foamterThoand(total),
        x: 'center',
        y: '25%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10 * window.$rem,
          fontSize: 26 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 800
        }
      },
      {
        text: '件',
        x: 'center',
        y: '38%',
        textStyle: {
          color: 'rgba(250,252,255,0.8)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10 * window.$rem,
          fontSize: 22 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 800
        }
      }
    ],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      x: 'center',
      y: '64%',
      textStyle: {
        rich: {
          a: {
            color: 'rgba(255,255,255,1)',
            fontSize: 15 * window.$rem,
            padding: [0, 0, 0, 2 * window.$rem]
          },
          b: {
            color: '#FCE62F',
            fontSize: 15 * window.$rem
          }
        }
      },
      itemGap: 8 * window.$rem,
      itemWidth: 13 * window.$rem,
      itemHeight: 13 * window.$rem,
      formatter: name => {
        let value = ''
        let per = ''
        data.forEach(item => {
          if (name === item.name) {
            value = item.value
            per = (value / total * 100).toFixed(1)
          }
        })
        return `{a|${name}}{b| ${value} (${per}%)}`
      }

    },
    calculable: true,
    series: [
      {
        name: '诉求类型情况',
        type: 'pie',
        radius: [65 * window.$rem, 75 * window.$rem],
        center: ['center', '35%'],
        label: {
          show: false
        },
        data: sData
      },
      {
        name: '诉求类型情况',
        type: 'pie',
        radius: [65 * window.$rem, 85 * window.$rem],
        center: ['center', '35%'],
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
