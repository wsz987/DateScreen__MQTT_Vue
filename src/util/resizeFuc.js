// 自适应
// 第一个参数 this (this域指向)
// callBack 为 data赋值代码 用于 DOM 刷新
export function RESIZE (_, callBack) {
  const _this = _
  function ACTION (_this) {
    _this.$nextTick(() => {
      return callBack && callBack()
    })
  }
  callBack && callBack()
  window.addEventListener('resize', (e) => {
    ACTION(_this)
  })
  _this.$once('hook:beforeDestroy', () => {
    window.removeEventListener('resize', (e) => {
      ACTION(_this)
    })
  })
}
