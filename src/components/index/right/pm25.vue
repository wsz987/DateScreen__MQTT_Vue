<template>
  <dv-border-box-1 backgroundColor="rgba(19, 25, 47, 0.6)" class="dv-chart" id="div_pm25" :color="[isdanger ? '#FF0000':'#32c5e9']">
    <h4 class="title">{{title}}</h4>
    <span class="numShow">{{num}} ug/m³</span>
    <ve-line :data="chartData" :settings="chartSettings" :height="height+'px'" :legend="legend" :extend="extend" judge-width/>
  </dv-border-box-1>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  props: ['title'],
  data () {
    return {
      height: '260',
      isdanger: false,
      num: '',
      extend: {
        'xAxis.0.axisLabel.color': 'white',
        'yAxis.0.axisLabel.color': 'white'
      },
      legend: {
        textStyle: {
          color: 'white'
        }
        // right: '5%'  // 顶部标签位子
      },
      colors: ['#20DBFD'],
      chartData: {
        columns: ['time', '车间粉尘'],
        rows: [
          { time: '1/1', 车间粉尘: 393 },
          { time: '1/2', 车间粉尘: 230 },
          { time: '1/3', 车间粉尘: 293 },
          { time: '1/4', 车间粉尘: 123 },
          { time: '1/5', 车间粉尘: 92 },
          { time: '1/6', 车间粉尘: 293 }
        ]
      },
      chartSettings: {
        metrics: ['车间粉尘'],
        dimension: ['time'],
        area: true,
        itemStyle: {
          color: {
            type: 'linear',
            x: 0,
            y: 0,
            x2: 0,
            y2: 1,
            colorStops: [
              {
                offset: 0,
                color: '#36d1dc' // 0% 处的颜色 #20DBFD
              },
              {
                offset: 1,
                color: '#5b86e5' // 100% 处的颜色 #1AAFCA
              }
            ],
            global: false // 缺省为 false
          }
        }
      }
    }
  },
  created () {
    this.$vm.$on('pm25', (data) => {
      if (this.chartData.rows.length > 10) this.chartData.rows.shift()
      this.num = JSON.parse(data)
      if (this.num > 75 || this.num === 75) {
        this.$vm.$emit('isFan', true)
        this.$vm.$emit('isBuzzer', true)
        this.$vm.$emit('error', ['PM25-Hight', '粉尘过高'])
        this.isdanger = true
      } else if (this.num < 75) {
        this.$vm.$emit('isFan', false)
        this.$vm.$emit('isBuzzer', false)
        this.isdanger = false
      }
      this.chartData.rows.push({
        time: this.$options.filters.dateFormat(new Date()),
        车间粉尘: this.num
      })
    })
  },
  mounted () {
    RESIZE(this, () => {
      this.height = document.getElementById('div_pm25').offsetHeight + 40
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
