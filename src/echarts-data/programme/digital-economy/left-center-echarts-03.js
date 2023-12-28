function returnData (param) {
  // let sData = []
  // param.forEach(item => {
  //   sData.push({value: item.appealNum, name: item.appealChannel})
  // })
  console.log(param)
  let sData = []
  let colorIndex = ['#F9E659', '#4F5BF3', '#00E1FC', '#0AD192', '#E55711']
  param.forEach((item, index) => {
    sData.push({value: item.data, name: item.name, itemStyle: {color: colorIndex[index]}})
  })
  console.log(sData)
  let options = {
    tooltip: {
      trigger: 'item',
      formatter: '{b} : {c} 个',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    series: [
      {
        name: '诉求类型',
        type: 'pie',
        radius: ['70%', '90%'],
        center: ['33%', '50%'],
        avoidLabelOverlap: false,
        label: {
          normal: {
            show: false,
            position: 'outside',
            distanceToLabelLine: -48,
            width: 60 * window.$rem,
            height: 40 * window.$rem,
            formatter (params) {
              return `{a|${params.data.name}} \n {b|${params.data.value}}`
            },
            rich: {
              a: {
                fontSize: 15 * window.$rem,
                verticalAlign: 'top',
                align: 'right',
                color: '#FFFFFF'
              },
              b: {
                fontSize: 18 * window.$rem,
                padding: [5, 0, 10, 0],
                verticalAlign: 'top',
                align: 'center',
                color: '#FCE62F',
                fontWeight: 'bolder'
              }
            }
          },
          emphasis: {
            show: false
          }
        },
        labelLine: {
          normal: {
            show: false,
            length: 20 * window.$rem,
            length2: 50 * window.$rem
          }
        },
        data: sData
      }
    ]
  }
  return options
}
export default returnData
