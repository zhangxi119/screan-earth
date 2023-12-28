/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-19 15:10:20
 */
function returnData (data) {
  let nData = []
  let sData = []
  let max = data[0].zt05004
  let maxArr = []
  data && data.length && data.forEach(item => {
    nData.push({name: item.zt05003_desc, max: max})
    sData.push(item.zt05004)
    maxArr.push(max)
  })
  let option = {
    color: ['#007EFB'],
    tooltip: {
      show: true,
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem,
        width: 80 * window.$rem
      }
      // formatter: '{b0}年:<br>{a0}:{c0}户 <br> {b1}年:<br>{a1}:{c1}户 <br> {b2}年:<br>{a2}:{c2}户 <br> {b3}年:<br>{a3}:{c3}% <br> {b4}年:<br>{a4}:{c4}% <br> {b5}年:<br>{a5}:{c5}%'
    },
    radar: {
      splitNumber: 3,
      radius: '40%',
      center: ['45%', '53%'],
      name: {
        // textStyle: {
        //   color: '#fff',
        //   fontSize: 15,
        //   borderRadius: 3,
        //   padding: [3, 5]
        // },
        formatter: function (name, param) {
          let value = 0
          data.forEach(item => {
            if (item.zt05003_desc === name) {
              value = item.zt05004
            }
          })
          let str = ''
          let arr = name.split('')
          for (let i = 0; i < arr.length; i++) {
            str += arr[i]
            if (!(i % 6) && i !== 0) {
              str += '\n'
            }
          }
          return `{a| ${str}} \n {b| ${value}户}`
        },
        rich: {
          a: {
            width: 100 * window.$rem,
            color: 'rgba(224,227,251,1)',
            fontSize: 16 * window.$rem,
            lineHeight: 20 * window.$rem,
            align: 'center'
          },
          b: {
            color: 'rgba(248,230,89,1)',
            fontSize: 16 * window.$rem,
            lineHeight: 20 * window.$rem,
            align: 'center'
          }
        }
      },
      splitArea: {
        show: false
      },
      splitLine: {
        lineStyle: {
          color: '#45ACDA',
          type: 'dashed'
        }
      },
      axisLine: {
        lineStyle: {
          color: '#45ACDA',
          type: 'dashed'
        }
      },
      indicator: nData
    },
    series: [{
      name: '行业类型分布',
      type: 'radar',
      data: [
        {
          value: sData,
          symbol: 'none',
          areaStyle: {
            color: 'rgba(211,229,109,.7)'
          },
          name: ''
        },
        {
          symbol: 'none',
          areaStyle: {
            color: 'rgba(211,229,109,.7)'
          }
        },
        {
          value: maxArr,
          symbolSize: 8 * window.$rem
        }
      ]
    }]
  }
  return option
}
export default returnData
