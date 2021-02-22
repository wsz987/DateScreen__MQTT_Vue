<template>
  <div class="middle_container">
    <Map></Map>
    <Logger></Logger>
    <el-row>
      <el-col :span="8">
        <State-1></State-1>
      </el-col>
      <el-col :span="8">
        <State-Count></State-Count>
      </el-col>
      <el-col :span="8">
        <State-2></State-2>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Map from '../middle/map'
import Logger from '../middle/logger'
import State1 from '../middle/state_1'
import State2 from '../middle/state_2'
import StateCount from '../middle/state_count'
export default {
  components: { Map, Logger, State1, State2, StateCount },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.middle_container {
  display: flex;
  flex-direction: column;
  height: 100%;
  > :first-child {
    height: 40%;
  }
  > :nth-child(2){
    height: 30%;
  }
  > :last-child {
    height: 30%;
    .el-col{
      height: 100%;
    }
  }
}
</style>
