<template>
  <dv-border-box-13 backgroundColor="rgba(19, 25, 47, 0.6)">
    <div class="title">
      <dv-decoration-3 />
      <span>2号</span>
    </div>
    <dv-capsule-chart :config="config" />
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
        colors: ['#e062ae', '#fb7293', '#e690d1', '#32c5e9', '#96bfff'],
        unit: '数量'
      }
    }
  },
  created () {},
  methods: {}
}
</script>
<style lang='less' scoped>
.dv-border-box-13,
/deep/ .border-box-content {
  transform: rotateY(180deg);
  -ms-transform: rotateY(180deg); /* IE 9 */
  -moz-transform: rotateY(180deg); /* Firefox */
  -webkit-transform: rotateY(180deg); /* Safari 和 Chrome */
  -o-transform: rotateY(180deg); /* Opera */
}

.title {
  color: #fff;
  height:10%;
  font-weight: bolder;
  width: 100%;
  display: flex;
  justify-content: flex-end;
  position: absolute;
  right: 7%;
  top: 4%;
  .dv-decoration-3{
    width:30%;
    height: 100%;
    margin-right: 5%;
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
