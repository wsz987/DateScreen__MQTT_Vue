<template>
  <div class="index_container">
    <el-container>
      <el-header>
        <Header></Header>
      </el-header>
      <el-main>
        <Layout></Layout>
      </el-main>
    </el-container>
  </div>
</template>
<script>
import Header from '@/components/index/header.vue'
import Layout from '@/components/index/content_layout.vue'
export default {
  components: { Header, Layout },
  data () {
    return {}
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.index_container {
  background: url("~@/assets/pageBg.jpg") no-repeat;
  background-size: cover;
  background-position: center;
  height: 100%;

  .el-container {
    height: 100%;
    overflow: hidden;

    .el-header {
      padding: 0;
    }

    .el-main{
      padding: 0 10px 10px;
    }
  }
}
</style>
