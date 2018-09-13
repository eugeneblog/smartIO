// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import { Button, Select, Dialog, Row, Col } from 'element-ui' // element-ui javascript
import 'element-ui/lib/theme-chalk/index.css' // element-ui css
import App from './App'
import router from './router'

Vue.component(Button.name, Button) // Vue.component注册全局组件 第一个参数全局组件名，第二个参数组件对象
Vue.component(Select.name, Select)
Vue.component(Dialog.name, Dialog)
Vue.component(Row.name, Row)
Vue.component(Col.name, Col)
Vue.prototype.$ELEMENT = { size: 'small', zIndex: 3000 }
Vue.config.productionTip = false // 关闭生产提示

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router, // 路由器
  components: { App }, // 根组件
  template: '<App/>',
  render: h => h(App) // 使用render代替template 更加接近vue编译器
})
