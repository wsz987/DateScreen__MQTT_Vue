<template>
  <div class="login_box">
    <el-card>
      <h1 align="center">智能工厂生产车间大屏</h1>
      <Register-Dialog></Register-Dialog>
      <Login-Form></Login-Form>
    </el-card>
  </div>
</template>
<script>
import LoginForm from './login_form'
import RegisterDialog from '../register/register_dialog'
export default {
  components: { LoginForm, RegisterDialog },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.login_box {
  > .el-card {
    width: 350px;
    height: 335px;

    > .el-card__body{
      display: flex;
      flex-direction: column;
    }
    // 居中
    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;

    h1 {
      font-size: 1.25rem;
    }

    .register_dialog{
      margin-bottom: 10px;
      float: right;
      z-index: 99;
    }
  }
}
</style>
