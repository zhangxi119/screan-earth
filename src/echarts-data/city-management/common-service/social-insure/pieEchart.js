/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-03-16 11:29:06
 * @LastEditors: wangting
 * @LastEditTime: 2020-04-25 18:11:17
 */

// import echarts from 'echarts'

function returnData (data, type, name) {
  let total = 0
  let lData = []
  let sData01 = []
  let sData02 = []
  let color = ['#3F91F7', '#66DEF8', '#6BE673', '#F1E44D']
  let color2 = ['#3F90F7', '#66DEF8', '#6BE673', '#F8E659', '#E28031', '#DC3421', '#DA329F', '#B22EEA', '#4D1DE9']
  let titleArr = []
  let lengendShow = false
  let raX = 60 * window.$rem
  let raY = 75 * window.$rem
  let ftSize = 15 * window.$rem
  if (type === '1') {
    lengendShow = false
    name = '补助'
    data.upTypeDetailsList.forEach((item, index) => {
      total += Number(item.bigMoney)
      lData.push({name: item.upType + ' (' + Number(item.bigMoney) + '万元) ' + item.bigRate + '%', datas: item.downTypeList})
      let temp = {
        value: Number(item.bigMoney),
        name: item.upType + ' (' + Number(item.bigMoney) + '万元) ' + item.bigRate + '%',
        itemStyle: {
          color: color[index]
        }
      }
      let temp02 = {
        value: Number(item.bigMoney),
        name: item.upType + ' (' + Number(item.bigMoney) + '万元) ' + item.bigRate + '%',
        itemStyle: {
          color: index === 0 ? '#3F91F7' : 'transparent'
        }
      }
      sData01.push(temp)
      sData02.push(temp02)
    })
    titleArr = [
      {
        text: total,
        x: '14.5%',
        y: '40%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1,
          textShadowBlur: 10 * window.$rem,
          fontSize: 26 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '补助',
        x: '14%',
        y: '58%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 20 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '(万元)',
        x: '23%',
        y: '59.5%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          fontSize: 14 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ]
  } else if (type === '2') {
    data.forEach((item, index) => {
      total += Number(item.smallMon)
      lData.push(item.downType + ' (' + Number(item.smallMon) + '万元) ' + item.smallRate + '%')
      let temp = {
        value: Number(item.smallMon),
        name: item.downType + ' (' + Number(item.smallMon) + '万元) ' + item.smallRate + '%',
        itemStyle: {
          color: color2[index]
        }
      }
      let temp02 = {
        value: item.smallMon,
        name: item.downType + ' (' + Number(item.smallMon) + '万元) ' + item.smallRate + '%',
        itemStyle: {
          color: index === 0 ? '#3F91F7' : 'transparent'
        }
      }
      sData01.push(temp)
      sData02.push(temp02)
    })
    lengendShow = true
    raX = 60 * window.$rem
    raY = 75 * window.$rem
    ftSize = 15 * window.$rem
    // let raX = 80 * window.$rem
    // let raY = 95 * window.$rem
    // let ftSize = 17 * window.$rem
    titleArr = [
      {
        text: total,
        x: '28%',
        y: '40%',
        textStyle: {
          color: 'rgba(250,252,255,1)',
          textShadowColor: 'rgba(149,229,252,0.28)',
          textShadowOffsetX: 0,
          textShadowOffsetY: 1 * window.$rem,
          textShadowBlur: 10 * window.$rem,
          fontSize: 24 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: name,
        x: '23%',
        y: '55%',
        textStyle: {
          color: 'rgba(223,226,251,1)',
          fontSize: 16 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      },
      {
        text: '(万元)',
        x: '34%',
        y: '56.5%',
        textStyle: {
          color: 'rgba(223,226,251,0.72)',
          fontSize: 14 * window.$rem,
          fontStyle: 'italic',
          fontWeight: 'normal'
        }
      }
    ]
  }
  let option = {
    backgroundColor: 'rgba(0,0,0,0)',
    title: titleArr,
    tooltip: {
      trigger: 'item',
      position: ['100%', '30%'],
      formatter: function (param) {
        return param.seriesName + '<br>' + param.data.name.split(' ')[0] + param.data.name.split(' ')[1] + ':' + param.data.name.split(' ')[2]
      },
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10 * window.$rem, 20 * window.$rem],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    legend: {
      x: '48%',
      y: 'center',
      show: lengendShow,
      // selectedMode: 'single',
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      itemGap: 20 * window.$rem,
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: ftSize,
        padding: [0, 0, 0, 6 * window.$rem]
      },
      // data: ['就业专项（113万元）26.9%', '稳岗补贴（101万元）26.9%', '职位津贴（89万元）26.9%', '社保补贴（82万元）26.9%']
      data: lData
    },
    calculable: true,
    series: [
      {
        name: name,
        type: 'pie',
        radius: [raX, raY],
        center: ['center', '53%'],
        label: {
          show: false
        },
        data: sData01
      }
      // {
      //   name: name,
      //   type: 'pie',
      //   radius: [raX, raY + (15 * window.$rem)],
      //   center: ['22%', '53%'],
      //   label: {
      //     show: false
      //   },
      //   data: sData02
      // }
    ]
  }
  return option
}
export default returnData
