<template>
  <div id="app" class="total">
    <div id="main1" class="app-container1">
    </div>
    <div id="main2" class="app-container2" />
    <div id="main3" class="app-container3" />
    <div id="main4" class="app-container4" />
  </div>
</template>
<script>
import echarts from 'echarts'
export default {
  name: 'App',
  mounted() {
    const myChart1 = echarts.init(document.getElementById('main1'))
    myChart1.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        borderBlockEndColor: '#000000',
        width: '100%',
        height: '70%',
        left: '7%',
        top: '30%'

      },
      color: ['red', '#307ced'],

      xAxis: {
        show: false,
        name: '时间',
        splitLine: {
          lineStyle: {
            // 设置x网格线颜色
            color: '#7e94d9'
          },
          show: true
        },
        axisLine: {
          lineStyle: {
            // 设置x轴颜色
            color: '#7e94d9'
          }
        },
        data: ['0:00', '1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00']
      },
      yAxis: [{
        min: 3900,
        splitLine: {
          lineStyle: {
            // 设置x网格线颜色
            color: '#7e94d9'
          },
          show: true
        },
        axisLine: {
          lineStyle: {
            // 设置y轴颜色
            color: '#7e94d9'
          }
        }
      }],
      series: [
        {
          name: '电压值1',
          type: 'line',
          data: [4.150, 4.100, 4.030, 4.010, 4.130, 4.240, 5.100, 4.180, 4170, 4120, 4050, 4060, 4140, 4130, 4390, 4160, 4150, 4165, 3999, 3999, 3897, 4098, 4130, 4240]
        },
        {
          name: '电压值2',
          type: 'line',
          data: [4200, 4120, 4170, 4000, 4010, 3980, 3990, 4150, 4300, 4020, 4060, 4120, 4210, 4170, 4080, 4020, 4170, 4200, 4120, 4170, 4000, 4010, 3980, 3990]
        }
      ]
    })
    const myChart2 = echarts.init(document.getElementById('main2'))
    myChart2.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      grid: {
        width: '100%',
        height: '70%',
        left: '7%',
        top: '0%'
      },
      color: ['red', '#307ced'],
      legend: {
      },

      xAxis: {
        name: '月份',
        nameStyle: {
          x: '10',
          y: '100'
        },
        splitLine: {
          lineStyle: {
            // 设置x网格线颜色
            color: '#7e94d9'
          },
          show: true
        },
        axisLine: {
          lineStyle: {
            // 设置x轴颜色
            color: '#7e94d9'
          }
        },
        data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12']
      },
      yAxis: [{
        min: 3900,
        splitLine: {
          lineStyle: {
            // 设置x网格线颜色
            color: '#7e94d9'
          },
          show: true
        },
        axisLine: {
          lineStyle: {
            // 设置y轴颜色
            color: '#7e94d9'
          }
        }
      }],
      series: [
        {

          type: 'line',
          data: [4150, 4100, 4030, 4010, 4130, 4240, 5100, 4180, 4170, 4120, 4050, 4060]
        },
        {

          type: 'line',
          data: [4200, 4120, 4170, 4000, 4010, 3980, 3990, 4150, 4300, 4020, 4060, 4120]
        }
      ]
    })
    const myChart3 = echarts.init(document.getElementById('main3'))
    myChart3.setOption({
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            backgroundColor: '#6a7985'
          }
        }
      },
      legend: {
        data: ['2015', '2016', '2017', '2018', '2019'],
        y: '20',
        textStyle: {
          color: '#24afe7'
        }
      },
      toolbox: {
        feature: {
          saveAsImage: {}
        }
      },
      grid: {
        left: '5%',
        right: '8%',
        bottom: '8%',
        containLabel: true
      },
      xAxis: [
        {
          name: '月份',
          type: 'category',
          boundaryGap: false,
          data: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'],
          axisLine: {
            lineStyle: {
              // 设置x轴颜色
              color: '#7e94d9'
            }
          }
        }
      ],
      yAxis: [
        {
          type: 'value',
          axisLine: {
            lineStyle: {
              // 设置y轴颜色
              color: '#7e94d9'
            }
          }
        }
      ],
      series: [
        {
          name: '2015',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [120, 132, 101, 134, 90, 230, 210, 220, 230, 240, 250, 260]
        },
        {
          name: '2016',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [220, 182, 191, 234, 290, 330, 310, 330, 350, 360, 350, 400]
        },
        {
          name: '2017',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [150, 232, 201, 154, 190, 330, 410, 440, 480, 520, 570, 600]
        },
        {
          name: '2018',
          type: 'line',
          stack: '总量',
          areaStyle: {},
          data: [320, 332, 301, 334, 390, 330, 320, 450, 510, 600, 720, 850]
        },
        {
          name: '2019',
          type: 'line',
          stack: '总量',
          label: {
            normal: {
              show: true,
              position: 'top'
            }
          },
          areaStyle: {},
          data: [820, 932, 901, 934, 1290, 1330, 1320, 1570, 1700, 1950, 2020, 2020]
        }
      ]
    })
  }
}
</script>
<style>
.app-container1 {
  /*background-image: url("/img/body/blue.jpg");*/
  height: 230px;
  width: 900px;
}
.app-container2 {
  height: 230px;
  width: 900px;
}
.app-container3 {
  height: 230px;
  width: 620px;
}
.app-container4 {
  height: 207px;
  width: 620px;
}
.total {
  /*background-color: #043868;*/
  background-image: url("/img/body/chrome.jpg");
  height: 100%;
  width: 100%;
  float: bottom;
}
</style>
