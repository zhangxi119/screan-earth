/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-05-11 14:12:10
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-05-10 15:11:10
 */
// import echarts from 'echarts'
function returnData (data) {
  let total = 0
  let arr = []
  data.forEach(item => {
    total += item.value
  })
  console.log(data)
  data.forEach(item => {
    arr.push({
      name: item.name + ' ' + (item.value / total * 100).toFixed(2) + '%',
      value: item.value
    })
  })
  arr = arr.reverse()
  let option = {
    color: ['#F7D455', '#5FC372', '#F26D2D'],
    title: [
      {
        text: total,
        x: '44%',
        y: '32%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1 * window.$rem,
          textShadowBlur: 10 * window.$rem,
          fontSize: 24 * window.$rem,
          fontStyle: 'italic',
          fontFamily: 'Impact',
          fontWeight: 400
        }
      },
      {
        text: '总量',
        x: '38.5%',
        y: '42%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 17 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'bold'
        }
      },
      {
        text: '(处)',
        x: '51%',
        y: '43%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          fontSize: 13 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 400
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
        return param.seriesName + '<br>' + param.name.split(' ')[0] + ':' + param.name.split(' ')[1]
      }
    },
    legend: {
      bottom: 20 * window.$rem,
      left: 'center',
      itemWidth: 14 * window.$rem,
      itemHeight: 14 * window.$rem,
      itemGap: 20 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 16 * window.$rem
      },
      data: arr
    },
    series: [
      {
        name: '隐患整改状态',
        type: 'pie',
        radius: [45 * window.$rem, 60 * window.$rem],
        center: ['50%', '40%'],
        label: {
          show: false
        },
        data: [{
          value: arr[0].value,
          name: arr[0].name },
        {
          value: arr[1].value,
          name: arr[1].name
        },
        {
          value: arr[2].value,
          name: arr[2].name
        }
        ]
      },
      {
        name: '隐患整改状态',
        type: 'pie',
        radius: [40 * window.$rem, 65 * window.$rem],
        center: ['50%', '40%'],
        label: {
          show: false
        },
        data: [{
          value: arr[0].value,
          name: arr[0].name
        },
        {
          value: arr[1].value,
          name: arr[1].name,
          itemStyle: {
            color: 'transparent'
          }
        },
        {
          value: arr[2].value,
          name: arr[2].name,
          itemStyle: {
            color: 'transparent'
          }
        }
        ]
      }
    ]
  }
  return option
}
export default returnData
