<template>
  <div class="left_container">
    <Terminal></Terminal>
    <el-row>
      <el-col :span="12">
        <Temperature></Temperature>
      </el-col>
      <el-col :span="12">
        <Humidity></Humidity>
      </el-col>
    </el-row>
    <Light :title="'1号平车总功率'"></Light>
    <Quality :title="'产品合格率%'"></Quality>
  </div>
</template>
<script>
import Terminal from '../left/terminal'
import Temperature from '../left/temperature'
import Humidity from '../left/humidity'
import Light from '../left/light'
import Quality from '../left/quality'
export default {
  components: { Terminal, Temperature, Humidity, Light, Quality },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.left_container{
  display: flex;
  flex-direction: column;
  height: 100%;
  > :first-child {
    height: 20%;
  }
  > :nth-child(2) {
    height: 20%;
    .el-col{
      height: 100%;
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
