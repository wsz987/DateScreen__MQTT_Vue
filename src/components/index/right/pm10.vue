<template>
  <dv-border-box-8 backgroundColor="rgba(19, 25, 47, 0.6)" :reverse="title==='1.0'">
    <div class="top">
      PM
      <span>{{title}}</span>
    </div>
    <div class="bottom">
      <span>{{val}}</span>
      ug/m³
    </div>
  </dv-border-box-8>
</template>
<script>
export default {
  props: ['title', 'val'],
  data () {
    return {
    }
  },
  created () {
  },
  methods: {}
}
</script>
<style lang='less' scoped>
.dv-border-box-8 {
  color: white;
  /deep/ .border-box-content {
    overflow: hidden;
    padding: 5% 5% 0%;
    box-sizing: border-box;
  }
  .top {
    color: #fe8463;
    height: 40%;
    font-size: 1.75em;
    margin-left: 10%;
    span {
      font-family: "LED";
      font-size: 1.25em;
    }
  }
  .bottom {
    height: 60%;
    display: flex;
    justify-content: flex-end;
    align-items: baseline;
    color: #20dbfd;
    font-size: 1.5em;
    font-family: "LED";
    margin-right: 5%;
    span {
      font-size: 2.25em;
      text-shadow: 0 0 25px #00d8ff;
    }
  }
}
@font-face {
  font-family: "LED";
  src: url("~@/assets/LED/DS-DIGI.woff2") format("woff2");
}
</style>
