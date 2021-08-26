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
  return config
})
export { instance }
