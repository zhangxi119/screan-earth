/*
 * @Descripttion:
 * @Author: zhangxi
 * @Date: 2020-02-27 17:06:20
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-14 21:31:14
 */
function returnData (data) {
  let dataJson = [
    {
      name: '未发现问题',
      value: data.zy03005
    },
    {
      name: '发现问题',
      value: data.zy03006
    },
    {
      name: '吊注销',
      value: data.zy03007
    },
    {
      name: '迁往外省市',
      value: data.zy03008
    }
  ]
  let dataJson2 = [data.zy03005, data.zy03006, data.zy03007, data.zy03008]
  let option = {
    color: ['#2266E4', '#6BE673', '#F9E659', '#FF913B'],
    backgroundColor: 'rgba(0,0,0,0)',
    // title: [
    //   {
    //     text: data.zy03004,
    //     x: '16%',
    //     y: '40%',
    //     textStyle: {
    //       color: 'rgba(250,252,255,1)',
    //       textShadowColor: 'rgba(149,229,252,0.28)',
    //       textShadowOffsetX: 0,
    //       textShadowOffsetY: 1,
    //       textShadowBlur: 10,
    //       backgroundColor: '',
    //       fontSize: 26 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   },
    //   {
    //     text: '抽查',
    //     x: '17%',
    //     y: '60%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,1)',
    //       fontSize: 19 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   },
    //   {
    //     text: '(件)',
    //     x: '26%',
    //     y: '62%',
    //     textStyle: {
    //       color: 'rgba(223,226,251,0.72)',
    //       fontSize: 15 * window.$rem,
    //       fontStyle: 'italic',
    //       fontWeight: 'normal'
    //     }
    //   }
    // ],
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
    legend: {
      x: '50%',
      y: 'center',
      orient: 'vertical',
      textStyle: {
        color: 'rgba(255,255,255,1)',
        fontSize: 17 * window.$rem,
        lineHeight: 26 * window.$rem
      },
      itemWidth: 10 * window.$rem,
      itemHeight: 10 * window.$rem,
      data: dataJson,
      formatter (name) {
        let str
        switch (name) {
          case '未发现问题':
            str = `  未发现问题   ${data.zy03005} 件`
            break
          case '发现问题':
            str = `  发现问题   ${data.zy03006} 件`
            break
          case '吊注销':
            str = `  吊注销   ${data.zy03007} 件`
            break
          case '迁往外省市':
            str = `  迁往外省市   ${data.zy03008} 件`
            break
        }
        return str
      }
    },
    calculable: false,
    series: [
      {
        name: '双随机一公开',
        type: 'pie',
        radius: [60 * window.$rem, 75 * window.$rem],
        center: ['26%', '53%'],
        label: {
          show: false
        },
        data: dataJson
      }]
  }
  return option
}
export default returnData
