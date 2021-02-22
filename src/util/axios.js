import Vue from 'vue'
import axios from 'axios'
import NProgress from 'nprogress'

switch (process.env.NODE_ENV) {
  case 'development':
    // 热点
    // axios.defaults.baseURL = 'http://192.168.137.1:8080'
    // 本地
    axios.defaults.baseURL = 'http://127.0.0.1:81'
    // 服务器
    // axios.defaults.baseURL = 'http://47.112.174.77/'
    break
  case 'production':
    break
}

axios.defaults.timeout = 5000

axios.interceptors.request.use(config => {
  // console.log('config', config)
  NProgress.start()
  // config.headers.Authorization = window.sessionStorage.getItem('token')
  return config
})

axios.interceptors.response.use(config => {
  NProgress.done()
  return config
})

axios.defaults.headers = {
  'Content-type': 'application/json'
}

Vue.prototype.$http = axios
