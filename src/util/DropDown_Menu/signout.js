import client from '@/util/mqtt'
export function SIGNOUT () {
  this.$confirm('注意此操作将销毁缓存的所有信息,且不再接收到任何监控信息', '退出', {
    confirmButtonText: '确定',
    cancelButtonText: '取消',
    type: 'warning'
  }).then(() => {
    client.end(true)
    window.sessionStorage.clear()
    this.$router.push('/login')
  }).catch(error => {
    console.log(error)
  })
}
