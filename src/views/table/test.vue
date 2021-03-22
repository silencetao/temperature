
<template>
  <div class="app-container">
    <el-table
      align="center"
      :data="list"
      border
      highlight-current-row
      stripe
    >
      <el-table-column prop="pot" align="center" label="槽号" width="95">
      </el-table-column>
      <el-table-column label="ID" width="110" align="center">
      </el-table-column>
      <el-table-column label="温度" width="110" align="center">
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="时间" width="200">
      </el-table-column>
      <el-table-column class-name="status-col" label="操作" width="200" align="center">
        <template>
          <el-button class="showdetail" @click="show=true">查看详细</el-button>
          <div v-if="show" class="mask" @click="show=false" />
          <div>
            <div v-if="show" class="pop" style="margin-left: 100px" @click="show=false">
              <el-button class="detail" @click="show=false">-节点详情-</el-button>
              <div id="main1" class="detailbody">
              </div>
            </div>
          </div>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>
<script>
import axios from 'axios'
import echarts from 'echarts'
export default {
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data() {
    return {
      list: null,
      show: false
    }
  },
  created() {
    this.getList()
  },
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
        width: '90%',
        height: '70%',
        left: '7%',
        top: '30%'

      },
      color: ['red', '#307ced'],
      xAxis: {
        splitLine: {
          lineStyle: {
            // 设置x网格线颜色
            color: '#7e94d9'
          },
          show: false
        },
        axisLine: {
          lineStyle: {
            // 设置x轴颜色
            color: '#7e94d9'
          }
        },
        data: ['1:00', '2:00', '3:00', '4:00', '5:00', '6:00', '7:00', '8:00', '9:00', '10:00', '11:00', '12:00']
      },
      yAxis: [{
        legend: {},
        textStyle: {
          x: 100,
          y: 100
        },
        max: 5.5,
        min: 3.5,
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
        },
        axisLabel: { // 保留两位小数！！***********************
          formatter: function(value) {
            return value.toFixed(2)
          }
        }
      }],
      series: [
        {
          name: '电压值1',
          type: 'line',
          data: [4.150, 4.100, 4.030, 4.010, 4.130, 4.240, 5.100, 4.180, 4.170, 4.120, 4.050, 4.060, 4.140, 4.130, 4.390, 4.160, 4.150, 4.165, 3.999, 3.999, 3.897, 4.098, 4.130, 4.240]
        },
        {
          name: '电压值2',
          type: 'line',
          data: [4.20, 4.12, 4.17, 4.00, 4.01, 3.98, 3.99, 4.15, 4.30, 4.02, 4.06, 4.12, 4.21, 4.17, 4.80, 4.20, 4.17, 4.20, 4.12, 4.17, 4.00, 4.10, 3.98, 3.99]
        }
      ]
    })
  },
  methods: {
    getList: function() {
      axios({
        methods: 'get',
        url: 'http://localhost:8080/finddata1_2'
      }).then(res => {
        this.list = res.data
        console.log(res.data)
      })
    }
  }
}
</script>
<style scoped>
.mask {
  background-color: #000;
  opacity: 0.3;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 1
}
.pop {
  background-color: #fff;

  position: fixed;
  top: 100px;
  left: 300px;
  width: calc(100% - 600px);
  height:calc(100% - 200px);
  z-index: 2
}
.showdetail {
  background-color: #fff;
  border-radius: 4px;
  border: none;
  padding: 4px 12px;
  color: #409EFF;
}
.detail {
  padding: 0 0 0 0;
  height: 30px;
  align: center;
  border: none;
  color: #000000;
  z-index: 4;
}
.detailbody {
  height: 100%;
  /*background-color: #304156;*/
  z-index: 6;
}
</style>
