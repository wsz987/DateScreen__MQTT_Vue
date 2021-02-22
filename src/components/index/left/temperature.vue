<template>
  <div class="temperature_container">
    <div>
      <span class="el-icon-odometer">温度监控</span>
      <dv-decoration-1 />
    </div>
    <dv-decoration-9>{{temNum}}℃</dv-decoration-9>
  </div>
</template>
<script>
export default {
  data () {
    return {
      temNum: '66'
    }
  },
  created () {
    this.$vm.$on('temperature', data => {
      this.temNum = data
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.temperature_container {
  height: 100%;
  width: 100%;
  > div {
    height: 15%;
    display: flex;
    flex-direction: row;
    padding-left: 2%;
    padding-top: 2%;
    box-sizing: border-box;
    span {
      font-size: 1.25em;
      color: #20dbfd;
      min-width: 100px;
      // font-weight: bold;
    }
    .dv-decoration-1 {
      width: 50%;
    }
  }

  .dv-decoration-9 {
    color: rgb(126, 198, 153);
    font-weight: bolder;
    margin: 0 auto;
    width: 75%;
    height: 85%;
  }
}
</style>
