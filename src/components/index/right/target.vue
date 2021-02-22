<template>
  <dv-border-box-12 backgroundColor="rgba(19, 25, 47, 0.6)" id="div_target" class="dv-chart">
    <h4 class="title">{{title}}</h4>
    <ve-line :data="chartData" :settings="chartSettings" :height="height+'px'" :legend="legend" :y-axis="yAxis" :x-axis="xAxis" :colors="colors"></ve-line>
  </dv-border-box-12>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  props: ['title'],
  data () {
    return {
      height: 260,
      colors: ['#fb7293', '#5ab1ef'],
      chartSettings: {
        metrics: ['预计', '实际'],
        dimension: ['日期'],
        area: true,
        itemStyle: {
          lineStyle: {
            width: 10
          }
        }
      },
      legend: {
        textStyle: {
          color: 'white'
        },
        right: '2%'
      },
      chartData: {
        columns: ['日期', '预计', '实际'],
        rows: [
          { 日期: '周五', 预计: 2730, 实际: 3430 },
          { 日期: '周六', 预计: 3530, 实际: 3030 },
          { 日期: '周一', 预计: 1723, 实际: 1623 },
          { 日期: '周二', 预计: 2023, 实际: 2623 },
          { 日期: '周三', 预计: 3792, 实际: 2492 },
          { 日期: '周四', 预计: 4593, 实际: 4293 }
        ]
      },
      xAxis: [
        {
          data: ['周五', '周六', '周一', '周二', '周三', '周四'],
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white'
            }
          }
        }
      ],
      yAxis: [
        {
          axisLabel: {
            show: true,
            textStyle: {
              color: 'white'
            }
          },
          axisLine: {
            show: true, // 是否显示Y轴线
            lineStyle: {
              color: '#fff', // Y轴线颜色
              width: 1, // 线的大小
              type: 'solid'// Y轴线的类型
            }
          },
          offset: 6 // 偏移量
        }
      ]
    }
  },
  mounted () {
    RESIZE(this, () => {
      this.height = document.getElementById('div_target').offsetHeight + 40
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
