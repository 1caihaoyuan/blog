// vue3框架提供的方法createApp方法，可以用来创建应用实例方法
import { createApp } from 'vue'
// 引入清除默认样式
import './style/reset.scss'
// 引入根组件
import App from './App.vue'
// 引入全局组件
import Left from './components/left/index.vue'
import Right from './components/right/index.vue'
// 引入vue-router路由
import router from './router'
// 引入element-plus插件
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'
// 引入element-plus的中文语言包
import { zhCn } from 'element-plus/es/locales.mjs'
// 利用createApp方法创建应用实例，且将应用实例挂载到挂载点上
const app = createApp(App)
app.component("Left",Left)
app.component("Right",Right)
// 安装路由
app.use(router)
// 安装element-plus插件
app.use(
  ElementPlus,
  {
    locale: zhCn,
  }
)
// 挂载app
app.mount('#app')
