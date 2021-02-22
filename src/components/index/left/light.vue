<template>
  <dv-border-box-1
    id="div_light"
    backgroundColor="rgba(19, 25, 47, 0.6)"
    :color="[isdanger ? '#FF0000':'#32c5e9']"
    class="dv-chart"
  >
    <h4 class="title el-icon-cpu">{{title}}</h4>
    <span class="numShow">{{num}} kW</span>
    <ve-line
      :height="height+'px'"
      :data="chartData"
      :settings="chartSettings"
      :legend="legend"
      :colors="colors"
      :extend="extend"
    ></ve-line>
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
        columns: ['time', '功率'],
        rows: [
          { time: '1/1', 功率: 393 },
          { time: '1/2', 功率: 230 },
          { time: '1/3', 功率: 293 },
          { time: '1/4', 功率: 123 },
          { time: '1/5', 功率: 92 },
          { time: '1/6', 功率: 293 }
        ]
      },
      chartSettings: {
        metrics: ['功率'],
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
    this.$vm.$on('light', (data) => {
      if (this.chartData.rows.length > 10) this.chartData.rows.shift()
      this.num = JSON.parse(data)
      if (this.num > 1000 || this.num === 1000) {
        this.$vm.$emit('isFan', true)
        this.$vm.$emit('isBuzzer', true)
        this.$vm.$emit('map-add')
        this.$vm.$emit('error', ['Hot', '过载异常'])
        this.isdanger = true
      } else if (this.num < 100) {
        this.$vm.$emit('isBuzzer', true)
        this.$vm.$emit('map-add')
        this.$vm.$emit('error', ['Sleep', '低负载'])
        this.isdanger = true
      } else {
        this.$vm.$emit('isFan', false)
        this.$vm.$emit('isBuzzer', false)
        this.$vm.$emit('clearError')
        this.isdanger = false
      }
      this.chartData.rows.push({
        time: this.$options.filters.dateFormat(new Date()),
        功率: this.num
      })
    })
  },
  mounted () {
    RESIZE(this, () => {
      this.height = document.getElementById('div_light').offsetHeight + 40
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
</style>
