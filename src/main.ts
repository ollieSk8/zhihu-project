import { createApp } from 'vue'
import router from './routes'
import store from './store'
import App from './App.vue'
import { instance as axios } from './apis'

const app = createApp(App)
axios.get('/columns?currentPage=1&pageSize=10').then((res) => {
  console.log(res.data)
})
app.use(router)
app.use(store)
app.mount('#app')
