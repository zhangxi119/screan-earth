/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-16 9:12:20
 * @LastEditors: zhangxi
 * @LastEditTime: 2020-04-07 10:58:02
 */
function retrunData (param) {
  let lData = []
  let total = 0
  let sData = []
  param.forEach(item => {
    total += item.bedNum
  })
  param.forEach(item => {
    lData.push(item.medicalType)
    sData.push({name: item.medicalType, value: item.bedNum, total: total})
  })
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    tooltip: {
      show: false,
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
    title: [
      {
        text: total,
        textStyle: {
          fontSize: 26 * window.$rem,
          color: 'rgba(119,208,250,1)',
          textShadow: '0px 1px 10px rgba(147,229,252,0.28)'
        },
        x: '39%',
        y: '26%'
      },
      {
        text: '床位总数',
        textStyle: {
          fontSize: 18 * window.$rem,
          color: '#DFE2FB'
        },
        x: '34.5%',
        y: '37%'
      },
      {
        text: '(张)',
        textStyle: {
          fontSize: 14 * window.$rem,
          color: 'rgba(223,226,251,0.72)'
        },
        x: '56%',
        y: '37.5%'
      }
    ],
    legend: {
      bottom: 0,
      left: '15%',
      right: 10 * window.$rem,
      orient: 'vertical',
      data: lData,
      itemGap: 10 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemWidth: 15 * window.$rem,
      borderRadius: 2,
      padding: 7.5 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem
      },
      formatter: function (name) {
        let result = name
        sData.forEach((item, index) => {
          if (name === item.name) {
            result += '  ' + item.value + '张'
          }
        })
        return result
      }
    },
    calculable: true,
    color: [
      '#2266E4',
      '#6BE673',
      '#F9E659',
      '#E38031'
    ],
    series: [
      {
        name: '床位数',
        type: 'pie',
        radius: [63 * window.$rem, 75 * window.$rem],
        center: ['50%', '35%'],
        label: {
          show: false
        },
        emphasis: {
          label: {
            show: true,
            color: '#FFF',
            formatter: function (params) {
              var newStr = ' '
              var start, end
              var nameLen = params.name.length // 每个内容名称的长度
              var maxName = 4 // 每行最多显示的字数
              var newRow = Math.ceil(nameLen / maxName) // 最多能显示几行，向上取整比如2.1就是3行
              if (nameLen > maxName) { // 如果长度大于每行最多显示的字数
                for (var i = 0; i < newRow; i++) { // 循环次数就是行数
                  var old = '' // 每次截取的字符
                  start = i * maxName // 截取的起点
                  end = start + maxName // 截取的终点
                  if (i === newRow - 1) { // 最后一行就不换行了
                    old = params.name.substring(start)
                  } else {
                    old = params.name.substring(start, end) + '\n'
                  }
                  newStr += old // 拼接字符串
                }
              } else { // 如果小于每行最多显示的字数就返回原来的字符串
                newStr = params.name
              }
              return params.value + '张\n' + newStr
            },
            fontSize: 18 * window.$rem
          }
        },
        data: sData
      }
    ]
  }
  return option
}
export default retrunData
