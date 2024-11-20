import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'path'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
// https://vite.dev/config/
export default defineConfig({
  // base: 'xxxx', // 部署路径
  plugins: [
    vue(),
    /** start
     * 按需导入、自动导入 【首先你需要安装unplugin-vue-components 和 unplugin-auto-import这两款插件】
     */
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    /** end */
  ],
  // 文件夹别名
  resolve: {
    alias: {
      '@': resolve(__dirname, './src'),
      // 'xxx': resolve(__dirname, './xxx'),
    }
  }
})
