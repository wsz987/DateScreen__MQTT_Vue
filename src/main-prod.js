import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './assets/global.less' // 全局样式

import '@/util/filter'

import '@/util/axios'
import store from './store'

import echarts from 'echarts'
import VeLine from 'v-charts/lib/line.common'
import VeHistogram from 'v-charts/lib/histogram.common'

import dataV from '@jiaminghi/data-view'
Vue.use(dataV)

Vue.component(VeLine.name, VeLine)
Vue.component(VeHistogram.name, VeHistogram)

Vue.prototype.$echarts = echarts

Vue.config.productionTip = false

Vue.prototype.$vm = new Vue({
  mode: 'history',
  base: process.env.BASE_URL,
  router,
  store,
  render: h => h(App)
}).$mount('#app')
