/*
 * @Descripttion:
 * @Author: wuqiuchi
 * @Date: 2020-03-06
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-19 11:09:56
 */
function returnData (data) {
  let sData = []
  data.forEach(item => {
    if (item.zt01002 === 1) {
      sData.push({value: item.zt01003, name: '企业'})
    } else if (item.zt01002 === 2) {
      sData.push({value: item.zt01003, name: '个体'})
    } else if (item.zt01002 === 3) {
      sData.push({value: item.zt01003, name: '农专'})
    }
  })
  let options = {
    color: ['#4BAEDD', '#5FC372', '#EF8432'],
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)',
      backgroundColor: 'rgba(0,53,126,0.74)',
      borderColor: '#44aaf4',
      borderWidth: 2 * window.$rem,
      padding: [10, 20],
      textStyle: {
        fontSize: 17 * window.$rem
      }
    },
    // title: {
    //   text: '主体结构',
    //   left: '25%',
    //   top: 'center',
    //   textStyle: {
    //     color: 'rgba(223,226,251,1)',
    //     fontSize: 20 * window.$rem
    //   }
    // },
    legend: {
      orient: 'vertical',
      right: 60 * window.$rem,
      y: 'center',
      // bottom: 50 * window.$rem,
      itemGap: 20 * window.$rem,
      itemWidth: 15 * window.$rem,
      itemHeight: 15 * window.$rem,
      textStyle: {
        color: '#FFFFFF',
        fontSize: 17 * window.$rem,
        padding: [0, 0, 0, 6 * window.$rem],
        rich: {
          a: {
            fontSize: 17 * window.$rem,
            verticalAlign: 'top',
            align: 'right'
          },
          b: {
            fontSize: 17 * window.$rem,
            width: 100 * window.$rem,
            align: 'left'
          }
        }
      },
      data: ['企业', '个体', '农专']
    },
    series: [
      {
        name: '市场主体',
        type: 'pie',
        center: ['35%', '50%'],
        radius: [70 * window.$rem, 90 * window.$rem],
        // roseType: 'area',
        label: {
          normal: {
            show: false,
            position: 'outside',
            color: '#FFFFFF',
            textStyle: {
              fontSize: 16 * window.$rem,
              fontWeight: 'bold'
            },
            formatter (params) {
              return params.percent + '%'
            }
          },
          emphasis: {
            show: false,
            textStyle: {
              fontSize: 25 * window.$rem,
              fontWeight: 'bold'
            }
          }
        },
        labelLine: {
          length2: 0
        },
        data: sData
      }
    ]
  }
  return options
}
export default returnData
