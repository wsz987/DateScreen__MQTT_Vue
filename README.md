# 基于Node-MQTT-硬件设备交互 的数据可视化大屏

半年前写的代码惨不忍睹 花了点时间重构了下 大概削了1/3的冗余代码。精力有限,只适配了chrome.

项目结构、代码逻辑较之前清晰了很多，组件、布局分明，  `util`简单封装了下 维护起来也相对简单。

因为项目更倾向于定制化 该仓只作简单的`DEMO`  ，各组件没有做太多的细化，简单`重制`。

登录，注册功能为半成品，相关 `axios`有待封装。

[Demo「纯前端」](https://static-62ce10ab-8126-44bf-9616-fe9fee9583b5.bspapp.com/)  丢uniCloud托管了 后端node就不展示了没有云服务器部署 贫穷~〒▽〒

**原理流程图**

前端<--`WebSocket``axios`-->Node后端<--`MQTT`--> 硬件采集设备

呈现硬件采集设备实时数据的前端可视化大屏效果   

使用说明：[Node 镶嵌MQTT及前端WebSocket通讯](https://wsz987.gitee.io/2021/01/30/node/Node-MQTT-WebSocket/)

**可视化效果**  

- [Echarts](https://echarts.apache.org/zh/index.html)
- [DataV](http://datav.jiaminghi.com/)
- [v-charts](https://v-charts.js.org/#/)

**自适应处理请使用**  具体请查看[个人Blog说明](https://wsz987.gitee.io/2021/01/31/vue/dataV-VCharts/)

```
import { RESIZE } from '@/util/resizeFuc'

 RESIZE(this, () => {   //callback
      this.key++
    })
```

![image](https://github.com/wsz987/DateScreen__MQTT_Vue/blob/master/src/assets/view.png?raw=true)

![image](https://github.com/wsz987/DateScreen__MQTT_Vue/blob/master/src/assets/layout.jpg?raw=true)


```
├─src
|  ├─assets
|  ├─App.vue
|  ├─main-prod.js
|  ├─main.js
|  ├─util
|  |  ├─axios.js
|  |  ├─filter.js
|  |  ├─mqtt.js
|  |  ├─resizeFuc.js
|  |  ├─DropDown_Menu
|  |  |       ├─getExcel.js
|  |  |       └signout.js
|  ├─router
|  |   └index.js
|  ├─plugins
|  |    └element.js
|  ├─pages
|  |   ├─index.vue
|  |   └login.vue
|  ├─components
|  |     ├─register
|  |     |    ├─register_dialog.vue
|  |     |    └register_form.vue
|  |     ├─login
|  |     |   ├─login_box.vue
|  |     |   └login_form.vue
|  |     ├─index
|  |     |   ├─content_layout.vue
|  |     |   ├─dropdown.vue
|  |     |   ├─header.vue
|  |     |   ├─OptDialog.vue
|  |     |   ├─wrapper.vue
|  |     |   ├─right
|  |     |   |   ├─control.vue
|  |     |   |   ├─pm10.vue
|  |     |   |   ├─pm25.vue
|  |     |   |   └target.vue
|  |     |   ├─middle
|  |     |   |   ├─logger.vue
|  |     |   |   ├─map.vue
|  |     |   |   ├─state_1.vue
|  |     |   |   ├─state_2.vue
|  |     |   |   └state_count.vue
|  |     |   ├─left
|  |     |   |  ├─humidity.vue
|  |     |   |  ├─light.vue
|  |     |   |  ├─quality.vue
|  |     |   |  ├─temperature.vue
|  |     |   |  └terminal.vue
|  |     |   ├─child_layout
|  |     |   |      ├─left.vue
|  |     |   |      ├─middle.vue
|  |     |   |      └right.vue
```
