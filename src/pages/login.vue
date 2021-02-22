<template>
  <div class="login_container">
      <Login-Box></Login-Box>
  </div>
</template>
<script>
import LoginBox from '@/components/login/login_box'
export default {
  components: { LoginBox },
  data () {
    return {}
  },
  created () {
    window.sessionStorage.clear()
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.login_container {
  background: url("~@/assets/bg.jpg") no-repeat;
  background-size: cover;
  background-position:center;
  height: 100%;
}
</style>
