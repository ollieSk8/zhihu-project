import axios from 'axios'

const instance = axios.create()
const baseURL = import.meta.env.MODE === 'development' ? import.meta.env.VITE_APP_BASE_URL : ''
const iCode = import.meta.env.VITE_REQUEST_CODE
instance.defaults.baseURL = baseURL as string

instance.defaults.timeout = 3 * 1000
instance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    icode: iCode,
  }
  if (config.data instanceof FormData) {
    config.data.append('icode', iCode as string)
  } else {
    // 普通的 body 对象，添加到 data 中
    config.data = { ...config.data, icode: iCode }
  }
  return config
})
export { instance }
