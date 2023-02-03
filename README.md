# 基于Node-MQTT-硬件设备交互 的数据可视化大屏

记录下自己初期主要负责的项目

因为项目更倾向于定制化且需要相关硬件设备及后端数据处理，该仓只作简单界面展示，业务相关的代码已经剔除。


[Demo「纯前端」](https://static-62ce10ab-8126-44bf-9616-fe9fee9583b5.bspapp.com/)  丢uniCloud托管了 后端node就不展示了没有云服务器部署 贫穷~〒▽〒

**流程图**

前端<--`WebSocket` `axios`-->Node后端<--`MQTT`--> 硬件采集设备

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

