// import Vue from 'vue'
import {
  Notification
} from 'element-ui'
// https://www.npmjs.com/package/mqtt
const mqtt = require('mqtt')
const WS_BASEURL = process.env.NODE_ENV === 'development' ? 'ws://localhost:1884' : 'ws://localhost:1884'
// 本地
const client = mqtt.connect(WS_BASEURL, {
  username: 'admin',
  password: '123456',
  connectTimeout: 4000,
  reconnectPeriod: 0,
  clientId: 'Demo_vue'
})

client.on('connect', () => {
  client.subscribe(['isRun', 'temperature', 'dataLog1', 'dataLog2', 'humidity', 'pm1', 'pm10', 'pm25', 'light', 'isFan', 'isBuzzer', 'error'], {
    qos: 0
  }, error => {
    if (!error) {
      Notification({
        title: 'MQTT 订阅成功',
        message: '',
        type: 'success'
      })
      // onMqttMessage()
    } else {
      Notification.error({
        title: 'MQTT 订阅失败',
        message: ''
      })
    }
  })
})
// option src\components\index\content_layout.vue

client.on('error', error => {
  throw error
})

client.on('offline', () => {
  alert('offline')
})

client.on('disconnect', () => {
  alert('disconnect')
})

// Vue.prototype.$MQTT = client

export default client
