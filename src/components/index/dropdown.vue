<template>
  <div class="dropdown_container">
    <el-dropdown>
      <i class="el-dropdown-link el-icon-mouse el-icon--right"></i>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item icon="el-icon-folder-opened" @click.native="EXCEL">Excel打包</el-dropdown-item>
        <el-dropdown-item icon="el-icon-switch-button" @click.native="SIGNOUT">退出登陆</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>
<script>
import { SIGNOUT } from '@/util/DropDown_Menu/signout.js'
import { EXCEL } from '@/util/DropDown_Menu/getExcel.js'

export default {
  data () {
    return {}
  },
  created () {},
  methods: {
    SIGNOUT,
    EXCEL
  }
}
</script>
<style lang='less' scoped>
.el-dropdown-link {
  cursor: pointer;
  color: #fff;
  font-size: 25px;
}
</style>
