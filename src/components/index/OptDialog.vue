<template>
    <el-dialog title="更改终端状态" :visible.sync="dialogVisible" width="350px" :before-close="handleClose">
      <el-form>
        <el-form-item label="注意: 此操作可能导致工厂运作异常,请谨慎修改!"></el-form-item>
        <el-form-item label="1号终端:">
          <el-select v-model="value1" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="2号终端:">
          <el-select v-model="value2" placeholder="请选择">
            <el-option
              v-for="item in options"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            ></el-option>
          </el-select>
        </el-form-item>
      </el-form>
      <span slot="footer" class="dialog-footer">
        <el-button @click="$emit('closeDialog')">取 消</el-button>
        <el-button type="primary" @click="changeState">确 定</el-button>
      </span>
    </el-dialog>
</template>
<script>
import client from '@/util/mqtt'
export default {
  props: ['dialogVisible', 'runState'],
  data () {
    return {
      value1: '',
      value2: '',
      options: [
        { value: 0, label: '运行' },
        { value: 1, label: '暂停' },
        { value: 2, label: '停止' }
      ]
    }
  },
  created () {},
  methods: {
    changeState () {
      this.$confirm('请谨慎修改', '确认', {
        confirmButtonText: '确定',
        type: 'warning'
      }).then(() => {
        const data = [this.value1, this.value2]
        client.publish('runStateChange', JSON.stringify(data))
      })
      this.$emit('closeDialog')
    },
    handleClose (done) {
      // this.$confirm('确认关闭？')
      //   .then(_ => {
      //     this.$emit('closeDialog')
      //     done()
      //   })
      //   .catch(_ => {})
    }
  },
  watch: {
    runState (newVal) {
      this.value1 = newVal[0]
      this.value2 = newVal[1]
    }
  }
}
</script>
<style lang='less' scoped>
/deep/ .el-dialog{
  margin-top: 25vh !important;
}
/deep/ .el-dialog__body{
  padding: 0 20px;
}
</style>
