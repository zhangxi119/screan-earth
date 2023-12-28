/*
 * @Descripttion:
 * @Author: renting
 * @Date: 2020-03-11
 * @LastEditors: leizq
 * @LastEditTime: 2020-04-27 11:48:33
 */
import img from '@/assets/emergency-command/emergency-command-chart/m1.png'
import img1 from '@/assets/emergency-command/emergency-command-chart/m2.png'
const coldCar = [
  {name: '峨边彝族自治县', center: {lon: 103.27, lat: 29.23}},
  {name: '峨眉山市', center: {lon: 103.3, lat: 29.6}},
  {name: '金口河区', center: {lon: 103, lat: 29.45}},
  {name: '井研县', center: {lon: 104, lat: 29.75}},
  {name: '马边彝族自治县', center: {lon: 103.45, lat: 28.83}},
  {name: '沙湾区', center: {lon: 103.55, lat: 29.42}},
  {name: '市中区', center: {lon: 103.75, lat: 29.73}},
  {name: '五通桥区', center: {lon: 103.72, lat: 29.5}},
  {name: '沐川县', center: {lon: 103.8, lat: 29.1}},
  {name: '犍为县', center: {lon: 103.95, lat: 29.32}},
  {name: '夹江县', center: {lon: 103.57, lat: 29.9}}
]

let option = (data, index) => {
  let lonlat = []
  data.map((re, i) => {
    let obj = {
      value: [re.lon, re.lat],
      z: index === i ? 5 : 2,
      eventName: re.zh09001,
      symbol: index === i ? 'image://data:image/png;' + img + '' : 'image://data:image/png;' + img1 + '',
      symbolSize: index === i ? [25 * window.$rem, 35 * window.$rem] : [15 * window.$rem, 20 * window.$rem]
    }
    lonlat.push(obj)
  })
  return {
    series: [
      {
        type: 'scatter',
        coordinateSystem: 'geo',
        emphasis: {
          label: {
            show: true,
            formatter: function (name) {
              return name.data.eventName
            },
            position: 'top',
            distance: 5 * window.$rem,
            fontSize: 18 * window.$rem,
            backgroundColor: 'rgba(0,53,126,0.74)',
            borderColor: '#44aaf4',
            borderWidth: 2 * window.$rem,
            borderRadius: 5 * window.$rem,
            padding: 10 * window.$rem,
            color: '#fff'
          }
        },
        data: lonlat
      }
    ],
    geo: {
      map: 'LESHAN',
      zoom: 1,
      label: {
        emphasis: {
          show: true,
          fontSize: 16 * window.$rem,
          color: '#fff'
        }
      },
      itemStyle: {
        normal: {
          areaColor: 'transparent',
          borderColor: '#00a4e4',
          borderWidth: 3 * window.$rem
        },
        emphasis: { // 鼠标移入高亮显颜色
          areaColor: 'rgba(255,210,0,0.4)',
          borderColor: '#ffd200'
        }
      },
      regions: coldCar
    }
  }
}

export default option
