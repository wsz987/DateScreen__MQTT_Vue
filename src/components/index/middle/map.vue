<template>
  <div class="map_container">
    <dv-border-box-1>
      <!-- 随机点位 -->
      <div class="point point-flicker" style="top:53%;left: 40%;" v-if="isShow(1)"></div>
      <div class="point point-flicker" style="top:38%;left: 59%;" v-if="isShow(2)"></div>
      <div class="point point-flicker" style="top:43%;left: 75%;" v-if="isShow(3)"></div>
      <div class="point point-flicker" style="top:75%;left: 23%;" v-if="isShow(4)"></div>
      <div class="point point-flicker" style="top:10%;left: 23%;" v-if="isShow(5)"></div>
      <div class="point point-flicker" style="top:10%;left: 93%;" v-if="isShow(6)"></div>
      <div class="point point-flicker" style="top:15%;left: 5%;" v-if="isShow(7)"></div>
    </dv-border-box-1>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // 点位测试
      // active: [1, 2, 3, 4, 5, 6, 7]
      active: []
    }
  },
  created () {
    this.$vm.$on('clearError', data => {
      this.active = []
    })
    this.$vm.$on('map-add', data => {
      this.addnum()
    })
  },
  methods: {
    isShow (val) {
      return this.active.includes(val)
    },
    addnum () {
      const num = Math.ceil(Math.random() * 7)
      if (this.active.includes(num)) return this.addnum()
      if (this.active.length > 7) return
      this.active.push(num)
    }
  }
}
</script>
<style lang='less' scoped>
.map_container {
  height: 100%;
  .dv-border-box-1 {
    height: 100%;
    /deep/ .border-box-content {
      background: url("~@/assets/map.png") no-repeat;
      background-size: 100% 100%;
      border-radius: 15%;
      .point {
        width: 10px;
        height: 10px;
        background-color: red;
        position: relative;
        border-radius: 50%;
      }

      /* 设置动画前颜色 */
      .point-flicker:after {
        background-color: red;
      }

      /* 设置动画后颜色 */
      .point-flicker:before {
        background-color: rgba(0, 168, 253, 0.2);
      }

      /* 设置动画 */
      .point-flicker:before,
      .point-flicker:after {
        content: "";
        width: 40px;
        height: 40px;
        position: absolute;
        left: 50%;
        top: 50%;
        margin-left: -20px;
        margin-top: -20px;
        border-radius: 50%;
        /* CSS3 animation 属性 网址 */
        /* https://www.w3school.com.cn/cssref/pr_animation.asp */
        animation: warn 1.5s ease-out 0s infinite;
      }

      /* @keyframes 规则用于创建动画。在 @keyframes 中规定某项 CSS 样式，就能创建由当前样式逐渐改为新样式的动画效果。 */
      @keyframes warn {
        0% {
          transform: scale(0.5);
          opacity: 1;
        }

        30% {
          opacity: 1;
        }

        100% {
          transform: scale(1.4);
          opacity: 0;
        }
      }
    }
  }
}
</style>
