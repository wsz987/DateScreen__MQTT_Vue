<template>
  <div class="login_form">
    <el-form :model="loginForm" :rules="loginFormRules" ref="loginForm">
      <el-form-item prop="username">
        <el-input
          v-model="loginForm.username"
          prefix-icon="el-icon-user"
          placeholder="账号"
          clearable
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="loginForm.password"
          prefix-icon="el-icon-lock"
          placeholder="密码"
          type="password"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item prop="remember" class="options">
        <el-checkbox label="记住密码" name="type" class="remember" v-model="loginForm.remember"></el-checkbox>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitLoginForm">Demo 登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      loginForm: {
        username: 'admin',
        password: 'Admin@',
        remember: false
      },
      loginFormRules: {
        username: [
          { required: true, message: '账号不能为空', trigger: 'blur' },
          {
            pattern: /^(admin|(13[0-9]|14[5|7]|15[0|1|2|3|4|5|6|7|8|9]|18[0|1|2|3|5|6|7|8|9]|177)\d{8})$/,
            message: '请输入正确的手机号码!'
          }
        ],
        password: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          {
            min: 6,
            max: 15,
            message: '长度在 6 到 15 个字符',
            trigger: 'blur'
          },
          {
            pattern: /^(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_]+$)(?![a-z0-9]+$)(?![a-z\W_]+$)(?![0-9\W_]+$)[a-zA-Z0-9\W_]{6,15}$/,
            message:
              '密码至少包含数字,小/大写字母,特殊符号其中三种'
          }
        ]
      }
    }
  },
  created () {},
  methods: {
    submitLoginForm () {
      this.$refs.loginForm.validate(async (valid) => {
        if (!valid) return
        const data = await this.$http.post('/user/login', JSON.stringify(this.loginForm))
        if (data.status !== 200) return this.$message.error('登陆失败!')
        if (!data.data.success) return this.$message.error(data.data.msg)
        this.$message.success(data.data.msg)
        window.sessionStorage.setItem('token', 'wsz987')
        this.$router.push('/index')
      })
    }
  }
}
</script>
<style lang='less' scoped>
.login_form {
  .options{
    margin-bottom: 0;
    margin-top: -11px;
  }
  .el-button {
    width: 100%;
    background-image: linear-gradient(to left, #00c6ff, #0072ff);
  }
}
</style>
