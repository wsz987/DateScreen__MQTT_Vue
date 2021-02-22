<template>
  <dv-border-box-13 backgroundColor="rgba(19, 25, 47, 0.6)">
    <div class="title">
      <span>1号</span>
      <dv-decoration-3 />
    </div>
    <dv-capsule-chart :config="config"  />
  </dv-border-box-13>
</template>
<script>
export default {
  data () {
    return {
      config: {
        data: [
          {
            name: '总层数',
            value: 4
          },
          {
            name: '总排数',
            value: 3
          },
          {
            name: '当前层数',
            value: 2
          },
          {
            name: '当前排数',
            value: 1
          }
        ],
        unit: '数量'
      }
    }
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.title {
  color: #fff;
  height:10%;
  width: 100%;
  font-weight: bolder;
  position: absolute;
  display: inline-flex;
  top: 4%;
  left: 7%;
  .dv-decoration-3{
    width:30%;
    height: 100%;
    margin-left: 5%;
  }
}
.dv-capsule-chart{
  width: 100%;
  height:85%;
  position: absolute;
  bottom: 0;
  padding: 15px;
}
</style>
