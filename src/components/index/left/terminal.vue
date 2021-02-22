<template>
  <div class="bg">
    <div class="line">
      <span class="el-icon-edit" @click="openDialog">1号状态</span>
      <dv-percent-pond :config="config1" :key="key" />
    </div>
    <div class="line">
      <span>联机信号</span>
      <dv-decoration-6 :color="falseCol" v-if="!isCon" />
      <dv-decoration-6 :color="trueCol" v-else />
    </div>
    <div class="line">
      <span class="el-icon-edit" @click="openDialog">2号状态</span>
      <dv-percent-pond :config="config2" :key="key" />
    </div>
    <div class="line">
      <span>联机信号</span>
      <dv-decoration-6 :color="falseCol" v-if="!isCon" />
      <dv-decoration-6 :color="trueCol" v-else />
    </div>
    <Opt-Dialog :dialogVisible='dialogVisible' :runState='runState' @closeDialog='openDialog'></Opt-Dialog>
  </div>
</template>
<script>
import { RESIZE } from '@/util/resizeFuc'
import OptDialog from '../OptDialog'

const fullWidth = 300
const borderGap = 3
const borderWidth = 3
const usefulWidth = fullWidth - (borderGap + borderWidth) * 2

const pieceLength = [0.25, 0.3, 0.45]
const pieceGap = 3

const lineDash = pieceLength
  .map((l) => [usefulWidth * l, pieceGap])
  .reduce((all, current) => [...all, ...current], [])
export default {
  components: { OptDialog },
  data () {
    return {
      key: 0,
      isCon: false,
      dialogVisible: false,
      runState: [2, 2], // 0 run 1 pause 2 stop
      falseCol: ['#e062ae', '#FF0000'],
      trueCol: ['#50e3c2', '#67a1e5'],
      configVal: {
        0: 100,
        1: 60,
        2: 30
      },
      config1: {
        value: 60,
        colors: ['#01c4f9', '#c135ff'],
        lineDash
      },
      config2: {
        value: 100,
        colors: ['#01c4f9', '#c135ff'],
        lineDash
      }
    }
  },
  created () {
    this.$vm.$on('isrun', data => {
      this.isCon = true
      this.runState = data
    })
  },
  mounted () {
    RESIZE(this, () => {
      this.key++
    })
  },
  methods: {
    openDialog () {
      this.dialogVisible = !this.dialogVisible
    }
  },
  watch: {
    runState (val) {
      this.config1.value = this.configVal[val[0]]
      this.config2.value = this.configVal[val[1]]
      this.key++
    }
  }
}
</script>
<style lang='less' scoped>
.bg {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  .line {
    height: 20%;
    display: flex;
    justify-content: space-around;
    span {
      float: left;
      color: #fff;
      text-align: center;
      line-height: 150%;
      cursor: pointer;
      min-width: 80px;
    }
    .dv-percent-pond,
    .dv-decoration-6 {
      width: 80%;
      /deep/ text {
        display: none;
      }
    }
  }
}
</style>
