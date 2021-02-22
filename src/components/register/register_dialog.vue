<template>
  <div class="register_dialog">
    <el-link class="register_btn" :underline="false" @click="registerDialogVisible=true">
      注册
      <i class="el-icon-upload2 el-icon--right"></i>
    </el-link>
    <el-dialog
      title="注册"
      :visible.sync="registerDialogVisible"
      width="18%"
      :before-close="handleClose"
      center
    >
      <Register-Form @closeDialog='closeDialog'></Register-Form>
    </el-dialog>
  </div>
</template>
<script>
import RegisterForm from './register_form'
export default {
  components: { RegisterForm },
  data () {
    return {
      registerDialogVisible: false
    }
  },
  created () {},
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then((_) => {
          done()
        })
        .catch((_) => {})
    },
    closeDialog () {
      this.registerDialogVisible = false
    }
  }
}
</script>
<style lang='less' scoped>
.register_dialog {
  .register_btn {
    z-index: 999;
    /deep/ i {
      transform: rotate(90deg);
      -ms-transform: rotate(90deg); /* IE 9 */
      -moz-transform: rotate(90deg); /* Firefox */
      -webkit-transform: rotate(90deg); /* Safari 和 Chrome */
      -o-transform: rotate(90deg); /* Opera */
    }
  }
  /deep/.el-dialog {
    display: flex;
    flex-direction: column;
    margin: 0 !important;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    /*height:600px;*/
    max-height: calc(100% - 30px);
    max-width: calc(100% - 30px);
    min-width: 350px;
    .el-dialog__body {
      flex: 1;
      overflow: auto;
    }
  }
}
</style>
