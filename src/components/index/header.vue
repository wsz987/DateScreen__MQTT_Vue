<template>
  <div class="header_container">
    <Options-Menu></Options-Menu>
    <h1 class="title">智能工厂生产车间大屏</h1>
    <h5 class="time">{{DateTime | dateNow}}</h5>
    <div class="decoration">
      <dv-decoration-10 style="width:calc(50% - 450px);height:7px;" />
      <dv-decoration-8
        :reverse="true"
        style="width:300px;height:25px;"
        :color="['#568aea', 'transparent']"
      />
      <dv-decoration-6 :color="['#50e3c2', '#67a1e5']" style="width:300px;height:10px;" />
      <dv-decoration-8 style="width:300px;height:25px;" :color="['#568aea', 'transparent']" />
      <dv-decoration-10 style="width:calc(50% - 450px);height:7px;transform: rotate(180deg);" />
    </div>
  </div>
</template>
<script>
import OptionsMenu from './dropdown'
export default {
  components: { OptionsMenu },
  data () {
    return {
      DateTime: ''
    }
  },
  created () {
    this.timeInterval()
  },
  methods: {
    timeInterval () {
      const timer = setInterval(() => {
        this.DateTime = new Date()
      }, 1000)
      this.$once('hook:beforeDestroy', () => {
        clearInterval(timer)
      })
    }
  }
}
</script>
<style lang='less' scoped>
.header_container {
  height: 100%;
  width: 100%;
  margin-top: -10px;
  position: relative;
  .dropdown_container {
    position: absolute;
    top: 25%;
    left: 1%;
    z-index: 999;
  }

  .title {
    color: white;
    position: absolute;
    margin: 0;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
  }

  .time {
    position: absolute;
    top: 35%;
    margin: 0;
    right: 1%;
    color: #fff;
  }
  .decoration {
    position: absolute;
    width: 100%;
    margin-top: 25px;
    display: flex;
    justify-content: center;
    left: 50%;
    top: 50%;
    font-size: 20px;
    transform: translate(-50%, -50%);
    .dv-decoration-8 {
      margin: -15px 20px 0;
      transform: rotateX(180deg);
    }
    .dv-decoration-10 {
      margin-top: -6px;
    }
  }
}
</style>
