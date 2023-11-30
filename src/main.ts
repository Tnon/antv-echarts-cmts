/*
 * @Author: Delevin.TnT
 * @LastEditors: Delevin.TnT
 * @Date: 2023-05-04 10:57:27
 * @LastEditTime: 2023-05-11 17:45:05
 */
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'ant-design-vue/dist/antd.css'
import './mytheme/index.less'
import 'default-passive-events'
const app = createApp(App)

app.use(router)

app.mount('#app')
