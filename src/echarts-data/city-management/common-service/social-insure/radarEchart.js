/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-14 13:00:14
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-16 22:41:53
 */
function returnData (data) {
  let nData = []
  let sData = [data.putSum, data.loanSum, data.loanRemainSum, data.pickSum, data.putRemainSum]
  let maxArr = []
  let tempArr3 = [data.putSum, data.loanSum, data.loanRemainSum, data.pickSum, data.putRemainSum]
  tempArr3 = tempArr3.sort((a, b) => {
    return a - b
  })
  let max = tempArr3[tempArr3.length - 1]
  nData = [{name: '缴存总额', value: data.putSum, max: max}, {name: '贷款总额', value: data.loanSum, max: max}, {name: '贷款余额', value: data.loanRemainSum, max: max}, {name: '个人提取总额', value: data.pickSum, max: max}, {name: '缴存余额', value: data.putRemainSum, max: max}]
  maxArr = [max, max, max, max, max]
  let option = {
    color: ['#ede087', '#007EFB'],
    tooltip: {
      trigger: 'item',
      show: false,
      position: 'right'
      // formatter: function (params) {
      //   console.log(params)
      //   let str = '缴存总额：' + params.data.value[0] + '\n' + '贷款总额' + params.data.value[1]
      //   return str
      // }
    },
    radar: {
      splitNumber: 3,
      radius: '60%',
      center: ['center', '55%'],
      name: {
        textStyle: {
          color: '#fff',
          fontSize: 17 * window.$rem,
          lineHeight: 20 * window.$rem,
          borderRadius: 3 * window.$rem,
          padding: [3 * window.$rem, 5 * window.$rem]
        },
        formatter: function (name, param) {
          let value = 45
          // let per = '30%'
          //   let str = ''
          let total = 0
          nData.forEach(item => {
            total += Number(item.value)
            if (item.name === name) {
              value = item.value
            }
          })
          //   let arr = name.split('')
          //   for (let i = 0; i < arr.length; i++) {
          //     str += arr[i]
          //     if (!(i % 6) && i !== 0) {
          //       str += '\n'
          //     }
          //   }
          return `{a| ${name}} \n {b| ${value} 万 ${(value / total * 100).toFixed(2)}%}`
        },
        rich: {
          a: {
            width: 100 * window.$rem,
            color: 'rgba(224,227,251,1)',
            fontSize: 16 * window.$rem,
            lineHeight: 18 * window.$rem,
            align: 'center'
          },
          b: {
            color: 'rgba(248,230,89,1)',
            fontSize: 16 * window.$rem,
            lineHeight: 18 * window.$rem,
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
          }
          // name: ''
        },
        {
          value: maxArr,
          symbolSize: 8 * window.$rem,
          tooltip: {
            show: false
          }
        }
      ]
    }]
  }
  return option
}
export default returnData
