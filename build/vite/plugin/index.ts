import { PluginOption } from 'vite';
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite';
import Components from 'unplugin-vue-components/vite';
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers';
import { configHtmlPlugin } from './html'

export function createVitePlugins(viteEnv: ViteEnv, isBuild: boolean) {
    
    const vitePlugins: (PluginOption | PluginOption[])[] = [
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
    ]

    vitePlugins.push(configHtmlPlugin(viteEnv, isBuild))

    return vitePlugins
}