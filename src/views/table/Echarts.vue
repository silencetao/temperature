<!--<template>-->
<!--  <el-dialog ref="dialog_root" title="节点指标" :visible="isShowDialog" @close="hideData()" width="60%">-->
<!--    &lt;!&ndash;负载情况&ndash;&gt;-->
<!--    <div ref="bar_dv"  :style="{width:'600px',height:'400px'}">-->
<!--    </div>-->
<!--  </el-dialog>-->
<!--</template>-->

<!--<script>-->
<!--import echarts from 'echarts'-->
<!--export default {-->
<!--  name: "NodeIndexDialog",-->
<!--  props: {-->
<!--    isShowDialog: {-->
<!--      type: Boolean,-->
<!--      default: false,-->
<!--    },-->
<!--  },-->
<!--  mounted(){-->
<!--    console.log('mounted()');-->
<!--    this.$nextTick(function () {-->
<!--      this.drawLine();-->
<!--    });-->

<!--  },-->
<!--  methods:{-->
<!--    /*-->
<!--    负载情况图标-->
<!--     */-->
<!--    drawLine(){-->

<!--      let bar_dv = this.$refs.bar_dv;-->
<!--      let myChart = echarts.init(bar_dv);-->
<!--      // 绘制图表-->
<!--      myChart.setOption({-->
<!--        title: { text: '在Vue中使用echarts' },-->
<!--        tooltip: {},-->
<!--        xAxis: {-->
<!--          data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]-->
<!--        },-->
<!--        yAxis: {},-->
<!--        series: [{-->
<!--          name: '销量',-->
<!--          type: 'bar',-->
<!--          data: [5, 20, 36, 10, 10, 20]-->
<!--        }]-->
<!--      });-->
<!--    },-->

<!--    hideData() {-->
<!--      this.$emit("hideDialog")-->
<!--    },-->

<!--    confirm(){-->
<!--      this.hideData();-->

<!--    },-->

<!--  }-->
<!--}-->
<!--</script>-->

<!--<style scoped>-->

<!--</style>-->
