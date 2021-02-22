<template>
  <dv-border-box-1 backgroundColor="rgba(19, 25, 47, 0.6)">
    <el-carousel height="200px" direction="vertical" :autoplay="false">
      <el-carousel-item v-for="item in 2" :key="item" :interval="4000" direction="vertical">
        <el-table :data="tableData[item-1]" style="width: 100%">
          <el-table-column :label="item+'号日志'" align="center" width="80px"></el-table-column>
          <el-table-column prop="date" label="时间" align="center">
              <template slot-scope="scope">{{scope.row.date | dateNow}}</template>
          </el-table-column>
          <el-table-column prop="log" label="事件" align="center"></el-table-column>
          <el-table-column :label="item+' ping'" align="center" width="80px"></el-table-column>
        </el-table>
      </el-carousel-item>
    </el-carousel>
  </dv-border-box-1>
</template>
<script>
export default {
  data () {
    return {
      tableData: [
        [], []
      ]
    }
  },
  created () {
    this.$vm.$on('dataLog1', data => {
      this.tableData[0].unshift(data)
      if (this.tableData[0].length > 5) this.tableData[0] = this.tableData[0].slice(0, -1)
    })
    this.$vm.$on('dataLog2', data => {
      this.tableData[1].unshift(data)
      if (this.tableData[1].length > 5) this.tableData[1] = this.tableData[1].slice(0, -1)
    })
  },
  methods: {}
}
</script>
<style lang='less' scoped>
/deep/ .border-box-content {
  overflow: hidden;
  padding: 10px;
  box-sizing: border-box;
  .el-carousel,
  /deep/ .el-carousel__container,
  .el-carousel__item,
  .el-table {
    height: 100% !important;
  }
}
.el-table {
  &::before {
    content: none;
  }
}
//透明化整体
/deep/ .el-table,
/deep/ .el-table__expanded-cell {
  color: #fff;
  background-color: transparent !important;
}
/deep/ .has-gutter {
  color: #fff;
  font-size: 1rem !important;
  th {
    padding: 8px 0;
  }
}
//透明化行、单元格
/deep/ .el-table th,
/deep/ .el-table tr,
/deep/ .el-table td {
  background-color: transparent !important;
}
</style>
