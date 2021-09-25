import { createApp } from 'vue'
import router from './routes'
import store from './store'
import App from './App.vue'
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/antd.css'
const app = createApp(App)

app.use(router)
app.use(store)
app.use(Antd)
app.mount('#app')
