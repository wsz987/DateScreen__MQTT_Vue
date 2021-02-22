<template>
  <div class="humidity_container">
      <span>湿度</span>
      <dv-decoration-5 style="width:80%;height:40px;" />
    <dv-water-level-pond :config="config" :key="key"/>
  </div>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
export default {
  data () {
    return {
      val: 0,
      key: 1,
      config: {
        data: [24, 45],
        shape: 'roundRect',
        formatter: '{value}%',
        waveNum: 3
      }
    }
  },
  created () {
    this.$vm.$on('humidity', data => {
      this.config.data[0] = parseInt(data - 20)
      this.config.data[1] = parseInt(data)
      this.key++
    })
  },
  mounted () {
    RESIZE(this, () => {
      this.key++
    })
  },
  methods: {
  }
}
</script>
<style lang='less' scoped>
.humidity_container{
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    span{
        color: #20dbfd;
        text-shadow: 0 0 25px #00d8ff;
        font-weight: bolder;
        top: 6%;
        font-size: 1.5em;
        position: absolute;
    }
    .dv-decoration-5 {
        margin: 10% auto;
    }
    .dv-water-pond-level{
        height:60%;
        width: 100%;
        position: absolute;
        bottom: 0;
    }
}
</style>
