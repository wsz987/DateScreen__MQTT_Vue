import Vue from 'vue'
import {
  Button, Form, FormItem, Input, Tooltip, Message, Card, Drawer, Notification,
  Container, Main, Aside, Header,
  Row, Col,
  Menu, MenuItem,
  Alert, Checkbox, Progress, MessageBox, Dialog,
  Select, Option,
  Avatar,
  Table, TableColumn,
  Switch,
  Carousel, CarouselItem,
  Link,
  Dropdown, DropdownMenu, DropdownItem
} from 'element-ui' // 消息通知

Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)
Vue.use(Tooltip) // 提示
Vue.use(Card)
Vue.use(Drawer)

Vue.use(Container).use(Main).use(Aside).use(Header)

Vue.use(Row).use(Col)

Vue.use(Menu)
Vue.use(MenuItem)

Vue.use(Alert)
Vue.use(Checkbox)
Vue.use(Progress)
Vue.use(Dialog)

Vue.use(Select)
Vue.use(Option)

Vue.use(Avatar)

Vue.use(Table).use(TableColumn)

Vue.use(Switch)

Vue.use(Carousel) // 走马灯
Vue.use(CarouselItem)

Vue.use(Link)

Vue.use(Dropdown).use(DropdownMenu).use(DropdownItem)

Vue.prototype.$message = Message // 信息提示反馈
Vue.prototype.$notify = Notification
Vue.prototype.$confirm = MessageBox.confirm
