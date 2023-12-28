function returnOption (data1, data2) {
  let option = {
    title: {
      text: '超期事件办结情况',
      left: 18 * window.$rem,
      textStyle: {
        fontSize: 18 * window.$rem,
        color: 'white'
      }
    },
    legend: {
      orient: 'horizontal',
      bottom: 0 * window.$rem,
      width: 50 * window.$rem,
      itemWidth: 13 * window.$rem,
      itemHeight: 13 * window.$rem,
      itemGap: 15 * window.$rem,
      left: 70 * window.$rem,
      textStyle: {
        color: 'white',
        fontSize: 12 * window.$rem
      },
      data: ['超期已办结', '超期未办结']
    },
    series: [
      {
        name: '访问来源',
        type: 'pie',
        radius: ['35%', '45%'],
        center: ['35%', '50%'],
        label: {
          show: false,
          position: 'center'
        },
        labelLine: {
          show: true
        },
        data: [
          {value: data2, name: '超期未办结', itemStyle: {color: '#FCE62F'}},
          {value: data1, name: '超期已办结', itemStyle: {color: '#0AD192'}}
        ]
      }
    ]
  }
  return option
}

export default returnOption
