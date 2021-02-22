// eslint-disable-next-line camelcase
import { export_json_to_excel } from '@/excel/export2Excel'
export function EXCEL () {
  require.ensure([], async () => {
    const res = await this.$http.get('/getValue')
    if (res.status !== 200) return this.$message.error('数据获取失败')
    res.data = res.data.slice(1)
    // 表头标题
    const tHeader = ['温度', '湿度', '功率', 'pm1.0', 'pm2.5', 'pm10', '时间']
    // 对应键名
    const filterVal = ['tem', 'shidu', 'light', 'pm1', 'pm25', 'pm10', 'time']
    // 对应键值
    const jsonData = res.data
    // console.log('getExcel -> res.data', res.data)
    const data = formatJson(filterVal, jsonData)
    export_json_to_excel(tHeader, data, '硬件设备实时数据报表')
  })
  function formatJson (filterVal, jsonData) {
    return jsonData.map(v => filterVal.map(j => v[j]))
  }
}
