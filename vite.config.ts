import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      comps: path.resolve(__dirname, 'src/components'),
      apis: path.resolve(__dirname, 'src/apis'),
      routes: path.resolve(__dirname, 'src/routes'),
      untils: path.resolve(__dirname, 'src/untils'),
      styles: path.resolve(__dirname, 'src/styles'),
      views: path.resolve(__dirname, 'src/views'),
      types: path.resolve(__dirname, 'src/types'),
      hooks: path.resolve(__dirname, 'src/hooks'),
    },
  },
  plugins: [vue(), reactRefresh()],
  clearScreen: false,
  server: {
    hmr: { overlay: false }, // 禁用或配置 HMR 连接 设置 server.hmr.overlay 为 false 可以禁用服务器错误遮罩层
    // 服务配置
    port: 4399, // 类型： number 指定服务器端口;
    open: true, // 类型： boolean | string在服务器启动时自动在浏览器中打开应用程序；
    cors: true, // 类型： boolean | CorsOptions 为开发服务器配置 CORS。默认启用并允许任何源
    strictPort: true, // 若端口已被占用则会直接退出，而不是尝试下一个可用端口
    force: true, // 强制使依赖预构建
    // proxy: {    // 类型： Record<string, string | ProxyOp 为开发服务器配置自定义代理规则
    //   '/api': {
    //     target: 'http://106.12.45.247:3000/',
    //     changeOrigin: true,
    //     secure: false,
    //     rewrite: (path) => path.replace('/api', '')
    //   }
    // },
  },
})
