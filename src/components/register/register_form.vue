<template>
  <div class="register-form">
    <el-form :model="registerForm" :rules="registerFormRules" ref="registerForm">
      <el-form-item prop="username">
        <el-input
          v-model="registerForm.username"
          prefix-icon="el-icon-user"
          placeholder="账号"
          clearable
          autofocus
        ></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input
          v-model="registerForm.password"
          prefix-icon="el-icon-lock"
          placeholder="密码"
          type="password"
          show-password
          clearable
        ></el-input>
      </el-form-item>
      <el-form-item class="register_options">
        <el-button @click="resetRegisterForm">取消</el-button>
        <el-button type="primary" @click="submitRegisterForm">注册</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data () {
    return {
      registerForm: {
        username: '',
        password: ''
      },
      registerFormRules: {
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
    submitRegisterForm () {
      this.$refs.registerForm.validate((valid) => {
        if (valid) {
          // this.$router.push('/index')
        } else {
          console.log('error submit!!')
          return false
        }
      })
    },
    resetRegisterForm () {
      this.$emit('closeDialog')
      this.$refs.registerForm.resetFields()
    }
  }
}
</script>
<style lang='less' scoped>
.register-form{
  .register_options /deep/ .el-form-item__content{
    display: flex;
    justify-content: center;
  }
}
</style>
