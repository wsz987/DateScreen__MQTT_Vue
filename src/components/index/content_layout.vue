<template>
  <div class="layout_container">
    <Wrapper></Wrapper>
    <el-row :gutter="12">
      <el-col :span="6" style="padding-right:0;">
        <Left></Left>
      </el-col>
      <el-col :span="12">
        <Middle></Middle>
      </el-col>
      <el-col :span="6" style="padding-left:0;">
        <Right></Right>
      </el-col>
    </el-row>
  </div>
</template>
<script>
import Left from './child_layout/left'
import Middle from './child_layout/middle'
import Right from './child_layout/right'

import Wrapper from './wrapper'

import client from '@/util/mqtt'

export default {
  components: { Left, Middle, Right, Wrapper },
  data () {
    return {}
  },
  mounted () {
    this.onMqttMessage()
  },
  methods: {
    onMqttMessage () {
      client.on('message', (topic, message) => {
        message = JSON.parse(message)
        console.log('onMqttMessage -> ', topic, message)
        switch (topic) {
          case 'isRun':
            this.$vm.$emit('isrun', message)
            break
          case 'dataLog1':
            this.$vm.$emit('dataLog1', message)
            break
          case 'dataLog2':
            this.$vm.$emit('dataLog2', message)
            break
          case 'temperature':
            this.$vm.$emit('temperature', message)
            break
          case 'humidity':
            this.$vm.$emit('humidity', message)
            break
          case 'pm1':
            this.$vm.$emit('pm1', message)
            break
          case 'pm10':
            this.$vm.$emit('pm10', message)
            break
          case 'pm25':
            this.$vm.$emit('pm25', message)
            break
          case 'light':
            this.$vm.$emit('light', message)
            break
          case 'isFan':
            this.$vm.$emit('isFan', message)
            break
          case 'isBuzzer':
            this.$vm.$emit('isBuzzer', message)
            break
          case 'error':
            this.$vm.$emit('error', message)
            break
        }
      })
    }
  }
}
</script>
<style lang='less' scoped>
.layout_container {
  height: 100%;
  .el-row {
    height: 100%;
    .el-col {
      height: 100%;
    }
  }
}
.wrapper{
  width:15%;
  z-index: 999;
  position: absolute;
  right: 1%;
  top: 5%;
}
</style>
