<template>
  <div class="wrapper" ref="wrapper" v-show="wrapperShow">
    <ul class="content">
      <el-alert type="error" v-for="(item,index) in alertError" :key="index" @close="closeAlert"
        :title="'Code: '+item[0]" :description="item[1]" effect="dark" show-icon></el-alert>
    </ul>
  </div>
</template>
<script>
import Bscroll from 'better-scroll'
export default {
  data () {
    return {
      alertCount: 0,
      closeAlertCount: 0,
      wrapperShow: false,
      alertError: []
      // alertError: [['M285', '过载有报警'], ['M283', '机械手上下伺服报警'], ['D251', '叠片伺服上下报警'], ['D254', '变频器有报警'], ['D252', '机械手前后伺服报警'], ['D252', '机械手前后伺服报警']]
      // ['xx', 'xx']
    }
  },
  created () {
    this.$vm.$on('error', data => {
      if (this.alertError.length > 15) this.alertError.shift()
      this.alertError.unshift(data)
      this.wrapperShow = true
      this.alertCount++
      this.loadwapper()
    })
    // eslint-disable-next-line eqeqeq
    if (this.alertError != '') this.wrapperShow = true
  },
  mounted () {
    this.loadwapper()
  },
  methods: {
    closeAlert () {
      this.closeAlertCount++
    },
    loadwapper () {
      this.$nextTick(() => {
        this.scroll = new Bscroll(this.$refs.wrapper)
      })
    }
  },
  watch: {
    closeAlertCount (val) {
      if (val === this.alertCount) this.wrapperShow = false
    }
  }
}

</script>

<style lang="less" scoped>
.wrapper{
  max-height: 250px;
  overflow: hidden;
}
.content{
  padding: 0;
  margin: 0;
  .el-alert{
    margin-bottom: 5px;
  }
}
</style>
