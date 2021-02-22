<template>
  <dv-border-box-12 backgroundColor="rgba(19, 25, 47, 0.6)"  id="div_quality" class="dv-chart">
    <h4 class="title">{{title}}</h4>
      <ve-histogram :data="chartData" :settings="chartSettings" :height="height+'px'" :y-axis="yAxis" :x-axis="xAxis" :extend="extend" :legend="legend"/>
  </dv-border-box-12>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  props: ['title'],
  data () {
    return {
      height: '260',
      extend: {
        series: {
          label: { show: true, position: 'top' },
          barWidth: 15
        }
      },
      chartSettings: {
        metrics: ['一号平车', '二号平车'],
        dimension: ['日期'],
        itemStyle: {
          barBorderRadius: [25, 25, 25, 25]
        }
      },
      legend: {
        textStyle: {
          color: 'white'
        },
        right: '2%'
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
      ],
      chartData: {
        columns: ['一号平车', '二号平车'],
        rows: [
          { 一号平车: 82, 二号平车: 92 },
          { 一号平车: 70, 二号平车: 96 },
          { 一号平车: 90, 二号平车: 80 },
          { 一号平车: 95, 二号平车: 85 },
          { 一号平车: 85, 二号平车: 80 },
          { 一号平车: 79, 二号平车: 90 }
        ]
      }
    }
  },
  mounted () {
    RESIZE(this, () => {
      this.height = document.getElementById('div_quality').offsetHeight + 40
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
