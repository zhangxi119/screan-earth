/*
 * @Descripttion:各个区县飞行位置
 * @Author: hangzhang
 * @Date: 2020-03-21 17:16:54
 * @LastEditors: wanglong
 * @LastEditTime: 2020-04-08 11:23:31
 */
let zoneHeatMap = {
  '马边彝族自治县': {
    creatHeatMap (val) {
      // 103.51746765777486 103.5699005994937 28.817002618671825 28.850811454327626
      var data = []
      for (var i = 0; i < 20; i++) {
        var point = {
          'x': 103.51746765777486 + Math.random() * 0.05,
          'y': 28.817002618671825 + Math.random() * 0.04,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '沐川县': {
    creatHeatMap (val) {
      // 103.92551934194992  103.85311213044696 28.99183492241175  28.936126180455876
      var data = []
      for (var i = 0; i < 20; i++) {
        var point = {
          'x': 103.85311213044696 + Math.random() * 0.07,
          'y': 28.936126180455876 + Math.random() * 0.06,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '犍为县': {
    creatHeatMap (val) {
      // 104.01157156315884  103.86933230771194 29.2402241211295 29.173441370300427
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.86933230771194 + Math.random() * 0.15,
          'y': 29.173441370300427 + Math.random() * 0.07,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '五通桥区': {
    creatHeatMap (val) {
      // 103.85409242251059 103.74912543539465 29.35886266490242 29.43822352864062
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.74912543539465 + Math.random() * 0.11,
          'y': 29.35886266490242 + Math.random() * 0.08,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '井研县': {
    creatHeatMap (val) {
      // 104.07186101791244 103.91804267146698 29.8484421404079 29.770492267867215
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.91804267146698 + Math.random() * 0.16,
          'y': 29.770492267867215 + Math.random() * 0.07,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '夹江县': {
    creatHeatMap (val) {
      // 103.63604053321328 103.50952542684443 29.784591192767845 29.68980579831498
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.50952542684443 + Math.random() * 0.13,
          'y': 29.68980579831498 + Math.random() * 0.1,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '峨眉山市': {
    creatHeatMap (val) {
      // 103.51122647091077  103.38325218140902 29.667836042997976 29.511616745998502
      var data = []
      for (var i = 0; i < 60; i++) {
        var point = {
          'x': 103.38325218140902 + Math.random() * 0.15,
          'y': 29.511616745998502 + Math.random() * 0.15,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '沙湾区': {
    creatHeatMap (val) {
      // 103.64462563024182  103.47223500631381 29.485187082495752 29.320148636013386
      var data = []
      for (var i = 0; i < 50; i++) {
        var point = {
          'x': 103.47223500631381 + Math.random() * 0.14,
          'y': 29.320148636013386 + Math.random() * 0.16,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '金口河区': {
    creatHeatMap (val) {
      // 103.11177138413909   103.03847178134903 29.199753968280206 29.26943667661074
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.03847178134903 + Math.random() * 0.08,
          'y': 29.199753968280206 + Math.random() * 0.07,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '峨边彝族自治县': {
    creatHeatMap (val) {
      var data = []
      // 103.29982154669781  103.2330979877473  29.263697721182638 29.212500296918883
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.2330979877473 + Math.random() * 0.06,
          'y': 29.212500296918883 + Math.random() * 0.05,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '市中区': {
    // 103.6599703710986  103.83315463872923 29.52197464932133 29.646617715411022
    creatHeatMap (val) {
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.6599703710986 + Math.random() * 0.18,
          'y': 29.52197464932133 + Math.random() * 0.12,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  },
  '高新区': {
    // 103.6599703710986  103.83315463872923 29.52197464932133 29.646617715411022
    creatHeatMap (val) {
      var data = []
      for (var i = 0; i < 30; i++) {
        var point = {
          'x': 103.6599703710986 + Math.random() * 0.18,
          'y': 29.52197464932133 + Math.random() * 0.12,
          'value': Math.random() * val
        }
        data.push(point)
      }
      return data
    }
  }
}
export default zoneHeatMap
