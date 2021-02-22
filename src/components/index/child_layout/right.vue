<template>
  <div class="right_container">
    <Control></Control>
    <el-row :gutter="6">
      <div class="title">
        <span>车间粉尘监测</span>
        <img src="@/assets/ksh33.png" alt />
      </div>
      <el-col :span="12">
        <PM10 :title="'1.0'" :val='val1'></PM10>
      </el-col>
      <el-col :span="12">
        <PM10 :title="'10'" :val='val10'></PM10>
      </el-col>
    </el-row>
    <PM25 :title="'Pm2.5监测'"></PM25>
    <Target :title="'产品指标'"></Target>
  </div>
</template>
<script>
import Control from '../right/control'
import PM10 from '../right/pm10'
import PM25 from '../right/pm25'
import Target from '../right/target'
export default {
  components: { Target, PM10, PM25, Control },
  data () {
    return {
      val1: '0',
      val10: '0'
    }
  },
  created () {
    this.$vm.$on('pm1', data => {
      this.val1 = data
    })
    this.$vm.$on('pm10', data => {
      this.val10 = data
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.right_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  > :first-child {
    height: 20%;
  }
  > :nth-child(2) {
    height: 20%;
    .title {
      position: relative;
      height: 50px;
      margin-top: -5px;
      span {
        color: #ffffff;
        font-size: 1.4rem;
        line-height: 40px;
      }

      img {
        position: absolute;
        left: 0;
        width: 100%;
        bottom: 5px;
      }
    }
    .el-col {
      height: calc(100% - 50px);
    }
  }
  > :nth-child(3) {
    height: 30%;
  }
  > :last-child {
    height: 30%;
  }
}
</style>
