<template>
  <el-row>
    <el-col :span="12">
      <!-- '#00FF00':'#FF0000' -->
      <dv-border-box-1 :color="[isLB ? '#FF0000':'#32c5e9']" @click.native="LBC(!isLB)">
        <span class="el-icon-message-solid">声光报警系统</span>
        <dv-decoration-3 style="width:75%;height:25px;" />
        <img src="@/assets/LB.png" class="lb" alt v-if="!isLB" />
        <img src="@/assets/LBR.png" class="lb turnlb" alt v-else />
      </dv-border-box-1>
    </el-col>
    <el-col :span="12">
      <dv-border-box-1 @click.native="fanchange(!isFan)" :color="[isFan ? '#00FF00':'#32c5e9']">
        <span class="el-icon-upload">散热系统</span>
        <dv-decoration-3 style="width:75%;height:25px;" />
        <img src="@/assets/fan1.png" alt :class="{'fan':true,'turn':isFan}" />
      </dv-border-box-1>
    </el-col>
  </el-row>
</template>
<script>
import client from '@/util/mqtt'
export default {
  data () {
    return {
      isLB: false,
      isFan: false
    }
  },
  created () {
    this.$vm.$on('isFan', data => {
      this.isLB = data
    })
    this.$vm.$on('isBuzzer', data => {
      this.isFan = data
    })
  },
  methods: {
    fanchange (val) {
      this.isFan = val
      console.log('fanchange -> val', val)
      try {
        if (val === true) client.publish('State1', 'AT*GPO=2,1#')
        else if (val === false) client.publish('State1', 'AT*GPO=2,0#')
      } catch (e) {
        console.log('fanchange -> e', e)
      }
    },
    LBC (val) {
      this.isLB = val
      console.log('Wchange -> val', val)
      try {
        if (val === true) client.publish('State1', 'AT*GPO=1,1#')
        else if (val === false) client.publish('State1', 'AT*GPO=1,0#')
      } catch (e) {
        console.log('Wchange -> e', e)
      }
    }
  },
  watch: {
    isLB (val) {
      this.LBC(val)
    },
    isFan (val) {
      this.fanchange(val)
    }
  }
}
</script>
<style lang='less' scoped>
.el-row {
  .el-col{
     height: 100%;
     /deep/ .border-box-content{
       display: flex;
       align-items: center;
       justify-content: center;
       position: relative;
       cursor: pointer;
       overflow: hidden;
       span{
         position: absolute;
         top: 12%;
         z-index: 2;
         color: #fff;
         font-size: 1.25em;
        //  text-shadow: 0 4px 20px #00d8ff;
       }
       .dv-decoration-3{
         position: absolute;
         top: 12%;
         z-index: 1;
         opacity: 0.35;
       }
       img{
         margin-top: 10%;
       }
     }
  }
}
.fan{
  height: 105px;
  width: 105px;
}
.lb{
  height: 75px;
  width: 75px;
}
.turn{
  animation:turn 1s linear infinite;
}

.turnlb{
  animation:turnlb 1s linear infinite;
}

@keyframes turn{
      0%{-webkit-transform:rotate(0deg);}
      25%{-webkit-transform:rotate(90deg);}
      50%{-webkit-transform:rotate(180deg);}
      75%{-webkit-transform:rotate(270deg);}
      100%{-webkit-transform:rotate(360deg);}
    }
    @keyframes turnlb{
      0%{-webkit-transform:rotateY(0deg);}
      25%{-webkit-transform:rotateY(90deg);}
      50%{-webkit-transform:rotateY(180deg);}
      75%{-webkit-transform:rotateY(270deg);}
      100%{-webkit-transform:rotateY(360deg);}
    }
</style>
