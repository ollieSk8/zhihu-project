import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve:{
    alias:{
      '@':path.resolve(__dirname,'src'),
      'comps':path.resolve(__dirname,'src/components'),
      'apis':path.resolve(__dirname,'src/apis'),
      'routes':path.resolve(__dirname,'src/routes'),
      'untils':path.resolve(__dirname,'src/untils'),
      'styles':path.resolve(__dirname,'src/styles'),
      'views':path.resolve(__dirname,'src/views'),
      'types':path.resolve(__dirname,'src/types'),
    }
  },
  plugins: [vue()]
})
