import { ConfigEnv, defineConfig } from 'vite'
import { resolve } from 'path'
import { createVitePlugins } from './build/vite/plugin'
import { loadEnv } from 'vite';
import globvar from './src/utils/globvar';


export default defineConfig(({ command, mode }: ConfigEnv) => {
  const root = process.cwd();
  let viteEnv = loadEnv(mode, root);
  // globvar.wrapperEnv(viteEnv)

  console.log('123-> ', viteEnv)
  // const isBuild = command === 'build';


  return {
    // base: 'xxxx', // 部署路径
    
    // 文件夹别名
    resolve: {
      alias: {
        '@': resolve(__dirname, './src'),
        // '#': resolve(__dirname, './types'),
      }
    },

    // vite插件
    plugins: createVitePlugins(viteEnv, mode)
  }
})
